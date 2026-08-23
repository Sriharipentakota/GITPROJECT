export type QuestionOutcome = 'correct' | 'wrong' | 'skipped';

export interface QuestionStat {
  correct: number;
  wrong: number;
  skipped: number;
  totalTimeMs: number;
  timedCount: number;
}

export type PathAnalytics = Record<string, QuestionStat>; // key: `${conceptId}:${index}`
export type AllAnalytics = Record<string, PathAnalytics>; // key: pathId

const STORAGE_KEY = 'jml_question_analytics_v1';

// ── In-memory cache + debounced persistence ─────────────────────────────────
// recordQuestionEvent() fires on every single "Check Answer"/"Skip" click —
// the most frequent interaction in the app. Reading this key with
// JSON.parse and re-serializing it with JSON.stringify on every one of those
// clicks means the cost is proportional to the size of *all* analytics ever
// recorded (every question, every concept, every path), not to the one event
// being logged — so the longer someone actually uses the app, the slower each
// click gets. A cache avoids re-parsing unchanged data on every read, and a
// short debounced write avoids re-serializing the whole (growing) blob to
// localStorage synchronously inside the click handler; flushOnUnload keeps a
// debounced write from ever being lost if the tab closes first.
let cache: AllAnalytics | null = null;
let flushTimer: ReturnType<typeof setTimeout> | null = null;

function load(): AllAnalytics {
  if (cache) return cache;
  try {
    cache = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    cache = {};
  }
  return cache!;
}

function flush() {
  if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
  if (cache) localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
}

function scheduleFlush() {
  if (flushTimer) return;
  flushTimer = setTimeout(flush, 600);
}

if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', flush);
  window.addEventListener('beforeunload', flush);
}

export function recordQuestionEvent(
  pathId: string,
  conceptId: string,
  index: number,
  outcome: QuestionOutcome,
  timeMs: number
) {
  const data = load();
  const pathData = data[pathId] ?? {};
  const key = `${conceptId}:${index}`;
  const entry = pathData[key] ?? { correct: 0, wrong: 0, skipped: 0, totalTimeMs: 0, timedCount: 0 };
  const next: QuestionStat = {
    correct: entry.correct + (outcome === 'correct' ? 1 : 0),
    wrong: entry.wrong + (outcome === 'wrong' ? 1 : 0),
    skipped: entry.skipped + (outcome === 'skipped' ? 1 : 0),
    totalTimeMs: entry.totalTimeMs + Math.max(0, timeMs),
    timedCount: entry.timedCount + 1,
  };
  pathData[key] = next;
  data[pathId] = pathData;
  scheduleFlush();
}

export function loadQuestionAnalytics(): AllAnalytics {
  return load();
}
