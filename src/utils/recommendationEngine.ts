import type { Progress } from '../types';
import type { PathAnalytics } from './questionAnalytics';
import { getReviewClockForPath } from './reviewClock';

/**
 * ── Adaptive "spaced repetition" recommendation engine ──────────────────────
 *
 * This is a deliberately *transparent* heuristic scorer, not a black box —
 * every point of the final score maps to a human-readable reason, which the
 * Dashboard surfaces directly ("why am I being told to study this?"). That
 * transparency is the point: it's a client-side alternative to "an AI
 * recommended this," built entirely from four locally-available signals:
 *
 *   1. Completion    — has this concept been marked "learned" at all?
 *   2. Accuracy      — average quiz score for the concept (weak → higher priority)
 *   3. Struggle      — wrong-rate / skip-rate from per-question analytics
 *                      (`useQuestionAnalytics` / `questionAnalytics.ts`)
 *   4. Decay         — an SM-2-inspired "forgetting curve": concepts that
 *                      scored well earn a LONGER safe interval before they're
 *                      considered due for a refresher; concepts that scored
 *                      poorly become due again sooner. Days-since-last-review
 *                      comes from `reviewClock.ts`.
 *
 * No ML, no server call, no training data — just four numbers and a weighted
 * sum, which is exactly why it's easy to explain and to extend.
 */

export interface ConceptLike {
  id: string;
  title: string;
  icon: string;
}

export interface RecommendationEntry {
  conceptId: string;
  score: number;
  reasons: string[];
}

const MS_PER_DAY = 1000 * 60 * 60 * 24;

function aggregateConceptAnalytics(pathAnalytics: PathAnalytics | undefined, conceptId: string) {
  let correct = 0, wrong = 0, skipped = 0;
  const prefix = `${conceptId}:`;
  if (pathAnalytics) {
    for (const [key, stat] of Object.entries(pathAnalytics)) {
      if (!key.startsWith(prefix)) continue;
      correct += stat.correct;
      wrong += stat.wrong;
      skipped += stat.skipped;
    }
  }
  const attempts = correct + wrong;
  return {
    wrongRate: attempts > 0 ? wrong / attempts : 0,
    skipRate: attempts + skipped > 0 ? skipped / (attempts + skipped) : 0,
    attempts,
  };
}

/** SM-2-inspired: better historical quality earns a longer "safe" interval before it's due again. */
function decayBoost(daysSinceReview: number | null, avgScore: number | null, learned: boolean): { boost: number; overdueDays: number | null } {
  if (!learned || daysSinceReview === null) return { boost: 0, overdueDays: null };
  const quality = avgScore ?? 60; // 0-100
  const safeIntervalDays = 1 + (quality / 100) * 13; // ranges 1 day (poor) .. 14 days (excellent)
  const overdueRatio = daysSinceReview / safeIntervalDays;
  if (overdueRatio <= 1) return { boost: 0, overdueDays: null };
  const overdueDays = Math.round(daysSinceReview - safeIntervalDays);
  return { boost: Math.min(40, (overdueRatio - 1) * 25), overdueDays };
}

function scoreOne(
  concept: ConceptLike,
  progress: Progress,
  pathAnalytics: PathAnalytics | undefined,
  reviewClock: Record<string, number>
): RecommendationEntry {
  const entry = progress[concept.id];
  const learned = entry?.learned ?? false;
  const avgScore = entry && entry.total > 0 ? (entry.score / entry.total) * 100 : null;
  const { wrongRate, skipRate, attempts } = aggregateConceptAnalytics(pathAnalytics, concept.id);
  const lastReviewedAt = reviewClock[concept.id] ?? null;
  const daysSinceReview = lastReviewedAt ? (Date.now() - lastReviewedAt) / MS_PER_DAY : null;
  const { boost: decay, overdueDays } = decayBoost(daysSinceReview, avgScore, learned);

  const reasons: string[] = [];
  let score = 0;

  if (!learned) {
    score += 40;
    reasons.push(attempts > 0 ? 'Started but not yet marked as learned' : 'Not started yet');
  }

  if (avgScore !== null) {
    const weak = (100 - avgScore) * 0.5;
    score += weak;
    if (avgScore < 70) reasons.push(`Quiz average is only ${Math.round(avgScore)}% — reinforcement recommended`);
  } else if (learned) {
    score += 5; // marked learned with no quiz history yet — mild nudge to actually verify it
  }

  if (attempts >= 3) {
    if (wrongRate > 0.25) {
      score += wrongRate * 30;
      reasons.push(`${Math.round(wrongRate * 100)}% of recent attempts on this concept were incorrect`);
    }
    if (skipRate > 0.15) {
      score += skipRate * 20;
      reasons.push(`${Math.round(skipRate * 100)}% of its questions were skipped — possible knowledge gap`);
    }
  }

  if (decay > 0) {
    score += decay;
    reasons.push(
      overdueDays && overdueDays > 0
        ? `Last reviewed ${Math.round(daysSinceReview!)} days ago — ${overdueDays}d overdue for a refresher (spaced repetition)`
        : 'Due for a spaced-repetition refresher'
    );
  }

  if (reasons.length === 0) reasons.push('Up next in your learning path');

  return { conceptId: concept.id, score: Math.round(score * 10) / 10, reasons };
}

/**
 * Ranks every concept in the active path by "how much attention it needs
 * right now" and returns the full ranked list (Dashboard uses index 0 for
 * the headline recommendation, but the full list is handy for a "why this
 * order?" debug view or a future "study queue" feature).
 */
export function rankConceptsByPriority(
  concepts: ConceptLike[],
  progress: Progress,
  pathAnalytics: PathAnalytics | undefined,
  pathId: string
): RecommendationEntry[] {
  const reviewClock = getReviewClockForPath(pathId);
  return concepts
    .map(c => scoreOne(c, progress, pathAnalytics, reviewClock))
    .sort((a, b) => b.score - a.score);
}

export function recommendNextConcept(
  concepts: ConceptLike[],
  progress: Progress,
  pathAnalytics: PathAnalytics | undefined,
  pathId: string
): RecommendationEntry | null {
  const ranked = rankConceptsByPriority(concepts, progress, pathAnalytics, pathId);
  return ranked[0] ?? null;
}
