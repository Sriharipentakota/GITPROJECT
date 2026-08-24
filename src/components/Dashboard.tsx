import { useMemo } from 'react';
import { CONCEPTS } from '../data/concepts';
import { PLAYWRIGHT_CONCEPTS } from '../data/playwrightConcepts';
import { TOSCA_CONCEPTS } from '../data/toscaConcepts';
import { TYPESCRIPT_CONCEPTS } from '../data/typescriptConcepts';
import { PATHS } from '../data/paths';
import { MISSIONS } from '../data/missions';
import type { Progress } from '../types';
import { loadQuestionAnalytics } from '../utils/questionAnalytics';
import { recommendNextConcept } from '../utils/recommendationEngine';

interface Props {
  pathId: string;
  onSwitchPath: (id: string) => void;
  onGoToLearn: (conceptId: string, pathId: string) => void;
  onGoToSkillMap: () => void;
  onGoToMissions: () => void;
  progress: Record<string, Progress>;
  missionCompletedCount: number;
  missionTotalCount: number;
}

const PATH_CONCEPTS: Record<string, typeof CONCEPTS> = {
  javascript: CONCEPTS,
  playwright: PLAYWRIGHT_CONCEPTS,
  tosca: TOSCA_CONCEPTS,
  typescript: TYPESCRIPT_CONCEPTS,
};

// Ensure MISSIONS is referenced (used for type validation; totals come from props)
const _missionCount = MISSIONS.length;
void _missionCount;

function getPathStats(pathId: string, progress: Record<string, Progress>) {
  const concepts = PATH_CONCEPTS[pathId] ?? [];
  const pathProgress = progress[pathId] ?? {};
  const learnedCount = Object.values(pathProgress).filter(p => p.learned).length;
  const totalCount = concepts.length;
  const pct = totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;

  const quizEntries = Object.values(pathProgress).filter(p => p.total > 0);
  const avgScore =
    quizEntries.length > 0
      ? Math.round(
          (quizEntries.reduce((sum, p) => sum + (p.total > 0 ? p.score / p.total : 0), 0) /
            quizEntries.length) *
            100
        )
      : null;

  const nextConcept = concepts.find(c => !pathProgress[c.id]?.learned) ?? null;
  return { learnedCount, totalCount, pct, avgScore, nextConcept };
}

export default function Dashboard({
  pathId,
  onSwitchPath,
  onGoToLearn,
  onGoToSkillMap,
  onGoToMissions,
  progress,
  missionCompletedCount,
  missionTotalCount,
}: Props) {
  const currentPath = useMemo(() => PATHS.find(p => p.id === pathId), [pathId]);
  const currentConcepts = PATH_CONCEPTS[pathId] ?? CONCEPTS;
  const currentPathProgress = progress[pathId] ?? {};

  // Concept to continue — last unlearned, else first concept
  const continueConcept = useMemo(() => {
    const next = currentConcepts.find(c => !currentPathProgress[c.id]?.learned);
    return next ?? currentConcepts[0] ?? null;
  }, [currentConcepts, currentPathProgress]);

  // Recommended: adaptive spaced-repetition heuristic — see recommendationEngine.ts.
  // Weighs completion, quiz accuracy, per-question struggle signals (skip/wrong
  // rate), and a forgetting-curve-style "days since last review" decay, so the
  // pick isn't just "next concept in list order" but genuinely reflects where
  // attention is most needed right now.
  const recommendation = useMemo(() => {
    const analytics = loadQuestionAnalytics()[pathId];
    return recommendNextConcept(currentConcepts, currentPathProgress, analytics, pathId);
  }, [currentConcepts, currentPathProgress, pathId]);
  const recommendedConcept = useMemo(
    () => (recommendation ? currentConcepts.find(c => c.id === recommendation.conceptId) ?? null : null),
    [recommendation, currentConcepts]
  );

  // Per-path stats for the three path cards
  const allPathStats = useMemo(
    () => PATHS.map(path => ({ path, ...getPathStats(path.id, progress) })),
    [progress]
  );

  const missionPct =
    missionTotalCount > 0
      ? Math.round((missionCompletedCount / missionTotalCount) * 100)
      : 0;

  return (
    <div className="dash-root">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="dash-hero">
        <div className="dash-hero-content">
          <h1 className="dash-welcome">Welcome back</h1>
          <p className="dash-subtitle" style={{ color: 'var(--mt)' }}>
            Active path:{' '}
            <span style={{ color: 'var(--ac)', fontWeight: 600 }}>
              {currentPath?.icon} {currentPath?.label ?? pathId}
            </span>
          </p>
          {continueConcept && (
            <button
              className="btn btn-primary dash-cta"
              onClick={() => onGoToLearn(continueConcept.id, pathId)}
            >
              {continueConcept.icon} Continue Learning — {continueConcept.title}
            </button>
          )}
        </div>
      </section>

      {/* ── Path Progress Cards ───────────────────────────────────────────── */}
      <section className="dash-section">
        <h2 className="dash-section-title">Learning Paths</h2>
        <div className="dash-path-grid">
          {allPathStats.map(({ path, learnedCount, totalCount, pct, avgScore, nextConcept }) => {
            const isActive = path.id === pathId;
            return (
              <div
                key={path.id}
                className={`dash-path-card${isActive ? ' dash-path-card--active' : ''}`}
              >
                <div className="dash-path-header">
                  <span className="dash-path-icon">{path.icon}</span>
                  <span className="dash-path-name">{path.label}</span>
                  {isActive && (
                    <span className="badge" style={{ marginLeft: 'auto', flexShrink: 0 }}>
                      Active
                    </span>
                  )}
                </div>

                <p className="dash-path-count" style={{ color: 'var(--mt)' }}>
                  {learnedCount} / {totalCount} learned
                </p>

                <div className="dash-progress-bar-track">
                  <div
                    className="dash-progress-bar-fill"
                    style={{ width: `${pct}%`, backgroundColor: 'var(--ac)' }}
                  />
                </div>

                <p className="dash-pct-label" style={{ color: 'var(--ac)' }}>
                  {pct}%
                </p>

                {avgScore !== null && (
                  <p className="dash-avg-score" style={{ color: 'var(--mt)' }}>
                    Avg quiz score:{' '}
                    <strong style={{ color: 'var(--tx)' }}>{avgScore}%</strong>
                  </p>
                )}

                <div className="dash-path-actions">
                  {!isActive && (
                    <button
                      className="btn btn-ghost"
                      onClick={() => onSwitchPath(path.id)}
                    >
                      Switch
                    </button>
                  )}
                  {nextConcept ? (
                    <button
                      className="btn btn-secondary"
                      onClick={() => onGoToLearn(nextConcept.id, path.id)}
                    >
                      Resume
                    </button>
                  ) : totalCount > 0 ? (
                    <span className="learned-chip">Complete!</span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Recommended Next ─────────────────────────────────────────────── */}
      {recommendedConcept && (
        <section className="dash-section">
          <h2 className="dash-section-title">Recommended Next</h2>
          <div className="dash-recommended-card">
            <div className="dash-recommended-info">
              <p className="dash-recommended-label" style={{ color: 'var(--mt)' }}>
                Up next in {currentPath?.label ?? pathId}
              </p>
              <h3 className="dash-recommended-title">
                {recommendedConcept.icon} {recommendedConcept.title}
              </h3>
              {recommendation && recommendation.reasons.length > 0 && (
                <ul className="dash-recommended-reasons">
                  {recommendation.reasons.map((reason, i) => (
                    <li key={i}>{reason}</li>
                  ))}
                </ul>
              )}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => onGoToLearn(recommendedConcept.id, pathId)}
            >
              Start
            </button>
          </div>
        </section>
      )}

      {/* ── Missions Summary ─────────────────────────────────────────────── */}
      <section className="dash-section">
        <h2 className="dash-section-title">Missions</h2>
        <div className="dash-missions-card">
          <div className="dash-missions-info">
            <span className="dash-missions-count" style={{ color: 'var(--ac)' }}>
              {missionCompletedCount} / {missionTotalCount}
            </span>
            <span className="dash-missions-label" style={{ color: 'var(--mt)' }}>
              missions completed
            </span>
          </div>
          <div className="dash-progress-bar-track" style={{ margin: '0.5rem 0' }}>
            <div
              className="dash-progress-bar-fill"
              style={{ width: `${missionPct}%`, backgroundColor: 'var(--ac)' }}
            />
          </div>
          <p className="dash-pct-label" style={{ color: 'var(--ac)' }}>
            {missionPct}%
          </p>
          <button className="btn btn-secondary" onClick={onGoToMissions}>
            View Missions
          </button>
        </div>
      </section>

      {/* ── Quick Links ──────────────────────────────────────────────────── */}
      <section className="dash-section">
        <h2 className="dash-section-title">Quick Links</h2>
        <div className="dash-quicklinks">
          <button className="btn btn-ghost dash-quicklink" onClick={onGoToSkillMap}>
            🗺 Skill Map
          </button>
          <button className="btn btn-ghost dash-quicklink" onClick={onGoToMissions}>
            🎯 Missions
          </button>
          <button className="btn btn-ghost dash-quicklink" onClick={onGoToSkillMap}>
            🛠 Practice Tasks
          </button>
        </div>
      </section>

    </div>
  );
}
