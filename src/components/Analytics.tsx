import { useEffect, useMemo, useState } from 'react';
import { CONCEPTS } from '../data/concepts';
import { PLAYWRIGHT_CONCEPTS } from '../data/playwrightConcepts';
import { TOSCA_CONCEPTS } from '../data/toscaConcepts';
import { MISSIONS } from '../data/missions';
import { loadQuestionAnalytics, type AllAnalytics } from '../utils/questionAnalytics';
import type { Progress } from '../types';

const PATH_META = [
  { pathId: 'javascript', label: 'JavaScript', icon: '⚡', concepts: CONCEPTS },
  { pathId: 'playwright', label: 'Playwright', icon: '🎭', concepts: PLAYWRIGHT_CONCEPTS },
  { pathId: 'tosca', label: 'TOSCA', icon: '🔬', concepts: TOSCA_CONCEPTS },
] as const;

interface StruggleQuestion {
  conceptId: string;
  conceptTitle: string;
  index: number;
  question: string;
  wrongRate: number;
  attempts: number;
  avgTimeSec: number | null;
}

interface PathQuestionInsights {
  pathId: string;
  totalAnswered: number;
  totalSkipped: number;
  skipRatePct: number | null;
  avgTimeSec: number | null;
  struggleQuestions: StruggleQuestion[];
}

function computeQuestionInsights(
  analytics: AllAnalytics,
  rawByPath: Record<string, Record<string, unknown[][]>> | null
): PathQuestionInsights[] {
  return PATH_META.map(({ pathId, concepts }) => {
    const pathData = analytics[pathId] ?? {};
    let totalCorrect = 0, totalWrong = 0, totalSkipped = 0, totalTimeMs = 0, totalTimedCount = 0;
    const rows: StruggleQuestion[] = [];

    for (const [key, stat] of Object.entries(pathData)) {
      const [conceptId, idxStr] = key.split(':');
      const index = Number(idxStr);
      totalCorrect += stat.correct;
      totalWrong += stat.wrong;
      totalSkipped += stat.skipped;
      totalTimeMs += stat.totalTimeMs;
      totalTimedCount += stat.timedCount;

      const attempts = stat.correct + stat.wrong;
      if (attempts >= 2) {
        const raw = rawByPath?.[pathId]?.[conceptId]?.[index] as unknown[] | undefined;
        const questionText = raw && typeof raw[2] === 'string' ? raw[2] : null;
        if (questionText) {
          rows.push({
            conceptId,
            conceptTitle: concepts.find(c => c.id === conceptId)?.title ?? conceptId,
            index,
            question: questionText,
            wrongRate: stat.wrong / attempts,
            attempts,
            avgTimeSec: stat.timedCount > 0 ? stat.totalTimeMs / stat.timedCount / 1000 : null,
          });
        }
      }
    }

    const totalAnswered = totalCorrect + totalWrong;
    const skipRatePct = (totalAnswered + totalSkipped) > 0
      ? Math.round((totalSkipped / (totalAnswered + totalSkipped)) * 100)
      : null;
    const avgTimeSec = totalTimedCount > 0 ? totalTimeMs / totalTimedCount / 1000 : null;

    rows.sort((a, b) => b.wrongRate - a.wrongRate || b.attempts - a.attempts);

    return {
      pathId, totalAnswered, totalSkipped, skipRatePct, avgTimeSec,
      struggleQuestions: rows.slice(0, 3),
    };
  });
}

interface Props {
  allProgress: Record<string, Progress>;
  missionProgress: Record<string, { status: string; completedTaskIds: number[]; score?: number }>;
}

interface PathStats {
  label: string;
  icon: string;
  pathId: string;
  total: number;
  learned: number;
  pct: number;
  avgScore: number | null;
  masteredCount: number;
  needsAttentionCount: number;
  needsAttentionConcepts: { id: string; title: string; scorePct: number | null }[];
  masteredConcepts: { id: string; title: string; scorePct: number }[];
}

function computePathStats(
  label: string,
  icon: string,
  pathId: string,
  concepts: { id: string; title: string }[],
  progress: Progress | undefined
): PathStats {
  let learnedCount = 0;
  let scoreSum = 0;
  let scoredCount = 0;
  let masteredCount = 0;
  let needsAttentionCount = 0;
  const needsAttentionConcepts: { id: string; title: string; scorePct: number | null }[] = [];
  const masteredConcepts: { id: string; title: string; scorePct: number }[] = [];

  for (const concept of concepts) {
    const entry = progress?.[concept.id];
    const isLearned = entry?.learned === true;
    const hasQuiz = entry && entry.total > 0;
    const scorePct = hasQuiz ? (entry.score / entry.total) * 100 : null;

    if (isLearned) learnedCount++;

    if (hasQuiz && scorePct !== null) {
      scoreSum += scorePct;
      scoredCount++;
      if (scorePct >= 80) {
        masteredCount++;
        masteredConcepts.push({ id: concept.id, title: concept.title, scorePct });
      }
      if (scorePct < 50) {
        needsAttentionCount++;
        needsAttentionConcepts.push({ id: concept.id, title: concept.title, scorePct });
      }
    } else if (!isLearned) {
      needsAttentionCount++;
      needsAttentionConcepts.push({ id: concept.id, title: concept.title, scorePct: null });
    }
  }

  const total = concepts.length;
  const pct = total > 0 ? Math.round((learnedCount / total) * 100) : 0;
  const avgScore = scoredCount > 0 ? Math.round(scoreSum / scoredCount) : null;

  return {
    label, icon, pathId, total, learned: learnedCount, pct, avgScore,
    masteredCount, needsAttentionCount,
    needsAttentionConcepts: needsAttentionConcepts.slice(0, 10),
    masteredConcepts: masteredConcepts.slice(0, 10),
  };
}

export default function Analytics({ allProgress, missionProgress }: Props) {
  const [rawByPath, setRawByPath] = useState<Record<string, Record<string, unknown[][]>> | null>(null);
  const [questionAnalytics, setQuestionAnalytics] = useState<AllAnalytics>(() => loadQuestionAnalytics());

  // Question text is only needed to label struggle points — load the (large) per-path
  // question banks lazily so visiting Analytics never forces all three into the main bundle.
  useEffect(() => {
    let active = true;
    setQuestionAnalytics(loadQuestionAnalytics());
    Promise.all([
      import('../data/questions'),
      import('../data/playwrightQuestions'),
      import('../data/toscaQuestions'),
    ]).then(([js, pw, tosca]) => {
      if (!active) return;
      setRawByPath({
        javascript: js.QUESTIONS_RAW,
        playwright: pw.PLAYWRIGHT_QUESTIONS_RAW,
        tosca: tosca.TOSCA_QUESTIONS_RAW,
      });
    });
    return () => { active = false; };
  }, []);

  const questionInsights = useMemo(
    () => computeQuestionInsights(questionAnalytics, rawByPath),
    [questionAnalytics, rawByPath]
  );

  const pathStats = useMemo<PathStats[]>(() => [
    computePathStats('JavaScript', 'JS', 'javascript', CONCEPTS, allProgress['javascript']),
    computePathStats('Playwright', 'PW', 'playwright', PLAYWRIGHT_CONCEPTS, allProgress['playwright']),
    computePathStats('TOSCA', 'TC', 'tosca', TOSCA_CONCEPTS, allProgress['tosca']),
  ], [allProgress]);

  const summary = useMemo(() => {
    const totalConcepts = pathStats.reduce((s, p) => s + p.total, 0);
    const totalLearned = pathStats.reduce((s, p) => s + p.learned, 0);
    const overallPct = totalConcepts > 0 ? Math.round((totalLearned / totalConcepts) * 100) : 0;

    const scoredPaths = pathStats.filter(p => p.avgScore !== null);
    const avgAssessment = scoredPaths.length > 0
      ? Math.round(scoredPaths.reduce((s, p) => s + (p.avgScore ?? 0), 0) / scoredPaths.length)
      : null;

    const totalMissions = MISSIONS.length;
    const completedMissions = Object.values(missionProgress).filter(m => m.status === 'completed').length;

    return { totalConcepts, totalLearned, overallPct, avgAssessment, totalMissions, completedMissions };
  }, [pathStats, missionProgress]);

  const globalNeedsAttention = useMemo(() => {
    return pathStats.flatMap(p =>
      p.needsAttentionConcepts.map(c => ({ ...c, path: p.label, pathIcon: p.icon }))
    ).sort((a, b) => {
      if (a.scorePct === null && b.scorePct === null) return 0;
      if (a.scorePct === null) return -1;
      if (b.scorePct === null) return 1;
      return a.scorePct - b.scorePct;
    }).slice(0, 12);
  }, [pathStats]);

  const globalMastered = useMemo(() => {
    return pathStats.flatMap(p =>
      p.masteredConcepts.map(c => ({ ...c, path: p.label, pathIcon: p.icon }))
    ).sort((a, b) => b.scorePct - a.scorePct).slice(0, 12);
  }, [pathStats]);

  const missionsByPath = useMemo(() => {
    const groups: Record<string, { mission: typeof MISSIONS[0]; prog: typeof missionProgress[string] | undefined }[]> = {
      javascript: [], playwright: [], tosca: [],
    };
    for (const mission of MISSIONS) {
      groups[mission.path]?.push({ mission, prog: missionProgress[mission.id] });
    }
    return groups;
  }, [missionProgress]);

  const distribution = useMemo(() => {
    let notStarted = 0, inProgress = 0, practiced = 0, mastered = 0;
    for (const p of pathStats) {
      const prog = allProgress[p.pathId];
      for (const { id } of [...CONCEPTS, ...PLAYWRIGHT_CONCEPTS, ...TOSCA_CONCEPTS].filter(c =>
        (p.pathId === 'javascript' ? CONCEPTS : p.pathId === 'playwright' ? PLAYWRIGHT_CONCEPTS : TOSCA_CONCEPTS)
          .some(x => x.id === c.id)
      )) {
        const entry = prog?.[id];
        const isLearned = entry?.learned === true;
        const hasQuiz = entry && entry.total > 0;
        const scorePct = hasQuiz ? (entry.score / entry.total) * 100 : null;

        if (!isLearned && !hasQuiz) notStarted++;
        else if (!isLearned && hasQuiz) inProgress++;
        else if (isLearned && (scorePct === null || scorePct < 80)) practiced++;
        else if (isLearned && scorePct !== null && scorePct >= 80) mastered++;
      }
    }
    return { notStarted, inProgress, practiced, mastered };
  }, [pathStats, allProgress]);

  return (
    <div className="analytics-root">
      <style>{`
        /* color is set explicitly here (not just inherited from body) because the
           theme attribute lives on .app (data-theme={theme} in App.tsx), and this
           component sits below it in the tree — body itself never gets that
           attribute, so body's own "color: var(--tx)" resolves against the
           unthemed :root default instead of the active theme. Every other
           component in App.css re-declares "color: var(--tx)" at each usage site
           for the same reason; this was the one place that relied on inheritance
           and silently rendered near-white text in light mode. */
        .analytics-root { padding: 24px; max-width: 1100px; margin: 0 auto; font-family: inherit; color: var(--tx); }
        .analytics-header { margin-bottom: 28px; }
        .analytics-header h1 { font-size: 1.75rem; font-weight: 700; margin: 0 0 4px; }
        .analytics-header p { font-size: 0.9rem; opacity: 0.65; margin: 0; }
        .analytics-summary-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 28px; }
        .analytics-kpi { background: var(--kpi-bg, #f4f6fa); border-radius: 12px; padding: 18px 20px; border: 1px solid var(--kpi-border, #e2e6ef); }
        .analytics-kpi-value { font-size: 2rem; font-weight: 700; line-height: 1.1; margin-bottom: 4px; }
        .analytics-kpi-label { font-size: 0.78rem; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.04em; }
        .analytics-kpi-sub { font-size: 0.82rem; opacity: 0.75; margin-top: 2px; }
        .analytics-paths-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 28px; }
        .analytics-path-card { background: var(--kpi-bg, #f4f6fa); border-radius: 12px; padding: 20px; border: 1px solid var(--kpi-border, #e2e6ef); }
        .analytics-path-header { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .analytics-path-badge { font-size: 0.7rem; font-weight: 700; padding: 3px 8px; border-radius: 6px; background: #3b82f6; color: #fff; letter-spacing: 0.05em; }
        .analytics-path-title { font-size: 1rem; font-weight: 600; }
        .analytics-path-stat { font-size: 0.88rem; opacity: 0.75; margin-bottom: 8px; }
        .analytics-progress-track { height: 8px; border-radius: 4px; background: var(--track-bg, #dde2ed); overflow: hidden; margin-bottom: 12px; }
        .analytics-progress-fill { height: 100%; border-radius: 4px; background: #3b82f6; transition: width 0.4s ease; }
        .analytics-progress-fill.high { background: #10b981; }
        .analytics-progress-fill.mid  { background: #f59e0b; }
        .analytics-progress-fill.low  { background: #ef4444; }
        .analytics-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px; }
        .analytics-chip { font-size: 0.75rem; padding: 3px 10px; border-radius: 20px; font-weight: 600; }
        .analytics-chip.mastered { background: #d1fae5; color: #065f46; }
        .analytics-chip.attention { background: #fee2e2; color: #991b1b; }
        .analytics-chip.avg { background: #e0e7ff; color: #3730a3; }
        .analytics-section { margin-bottom: 28px; }
        .analytics-section-title { font-size: 1rem; font-weight: 700; margin-bottom: 14px; display: flex; align-items: center; gap: 8px; }
        .analytics-concept-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; }
        .analytics-concept-item { background: var(--kpi-bg, #f4f6fa); border-radius: 9px; padding: 12px 14px; border: 1px solid var(--kpi-border, #e2e6ef); display: flex; flex-direction: column; gap: 4px; }
        .analytics-concept-name { font-size: 0.85rem; font-weight: 600; }
        .analytics-concept-meta { font-size: 0.75rem; opacity: 0.65; display: flex; gap: 8px; }
        .analytics-concept-score { font-size: 0.78rem; font-weight: 700; padding: 2px 7px; border-radius: 12px; align-self: flex-start; }
        .analytics-concept-score.score-low  { background: #fee2e2; color: #991b1b; }
        .analytics-concept-score.score-none { background: #f3f4f6; color: #6b7280; }
        .analytics-concept-score.score-high { background: #d1fae5; color: #065f46; }
        .analytics-missions-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 28px; }
        .analytics-mission-group { background: var(--kpi-bg, #f4f6fa); border-radius: 12px; padding: 16px; border: 1px solid var(--kpi-border, #e2e6ef); }
        .analytics-mission-group-title { font-size: 0.85rem; font-weight: 700; margin-bottom: 10px; opacity: 0.8; }
        .analytics-mission-item { font-size: 0.8rem; padding: 6px 0; border-bottom: 1px solid var(--kpi-border, #e2e6ef); display: flex; align-items: center; justify-content: space-between; gap: 6px; }
        .analytics-mission-item:last-child { border-bottom: none; }
        .analytics-mission-status { font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 10px; white-space: nowrap; }
        .analytics-mission-status.completed { background: #d1fae5; color: #065f46; }
        .analytics-mission-status.in-progress { background: #fef3c7; color: #92400e; }
        .analytics-mission-status.not-started { background: #f3f4f6; color: #6b7280; }
        .analytics-dist { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
        .analytics-dist-item { flex: 1; min-width: 110px; background: var(--kpi-bg, #f4f6fa); border-radius: 10px; padding: 14px 16px; border: 1px solid var(--kpi-border, #e2e6ef); text-align: center; }
        .analytics-dist-num { font-size: 1.6rem; font-weight: 700; }
        .analytics-dist-label { font-size: 0.72rem; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.04em; margin-top: 2px; }
        .analytics-note { font-size: 0.78rem; opacity: 0.68; text-align: center; margin-top: 8px; padding-top: 16px; border-top: 1px solid var(--kpi-border, #e2e6ef); }
        @media (max-width: 800px) {
          .analytics-summary-row { grid-template-columns: repeat(2, 1fr); }
          .analytics-paths-row { grid-template-columns: 1fr; }
          .analytics-missions-row { grid-template-columns: 1fr; }
        }
        /* Theme lives on .app (data-theme="..."), not on :root/<html> — these
           must be plain attribute selectors, not :root[data-theme=...], or they
           never match and --kpi-bg/--kpi-border/--track-bg silently fall back to
           their light-only defaults above regardless of the active theme. App.tsx
           always sets an explicit data-theme on .app (it's never unset), so no
           prefers-color-scheme fallback is needed here. */
        [data-theme="dark"] .analytics-root  { --kpi-bg: #1e2230; --kpi-border: #2d3348; --track-bg: #2d3348; }
        [data-theme="light"] .analytics-root { --kpi-bg: #f4f6fa; --kpi-border: #e2e6ef; --track-bg: #dde2ed; }
      `}</style>

      {/* Header */}
      <div className="analytics-header">
        <h1>Learning Analytics</h1>
        <p>Manager overview — learning health at a glance</p>
      </div>

      {/* Summary KPI cards */}
      <div className="analytics-summary-row">
        <div className="analytics-kpi">
          <div className="analytics-kpi-value">{summary.totalLearned}</div>
          <div className="analytics-kpi-label">Total Concepts Covered</div>
          <div className="analytics-kpi-sub">of {summary.totalConcepts} available</div>
        </div>
        <div className="analytics-kpi">
          <div className="analytics-kpi-value">{summary.overallPct}%</div>
          <div className="analytics-kpi-label">Overall Completion</div>
          <div className="analytics-kpi-sub">across all 3 paths</div>
        </div>
        <div className="analytics-kpi">
          <div className="analytics-kpi-value">
            {summary.avgAssessment !== null ? `${summary.avgAssessment}%` : '—'}
          </div>
          <div className="analytics-kpi-label">Avg Assessment Score</div>
          <div className="analytics-kpi-sub">quiz performance</div>
        </div>
        <div className="analytics-kpi">
          <div className="analytics-kpi-value">{summary.completedMissions}</div>
          <div className="analytics-kpi-label">Missions Completed</div>
          <div className="analytics-kpi-sub">of {summary.totalMissions} total</div>
        </div>
      </div>

      {/* Path breakdown cards */}
      <div className="analytics-paths-row">
        {pathStats.map(path => {
          const fillClass = path.pct >= 75 ? 'high' : path.pct >= 40 ? 'mid' : 'low';
          return (
            <div className="analytics-path-card" key={path.pathId}>
              <div className="analytics-path-header">
                <span className="analytics-path-badge">{path.icon}</span>
                <span className="analytics-path-title">{path.label}</span>
              </div>
              <div className="analytics-path-stat">{path.learned} / {path.total} concepts learned</div>
              <div className="analytics-progress-track">
                <div
                  className={`analytics-progress-fill ${fillClass}`}
                  style={{ width: `${path.pct}%` }}
                />
              </div>
              <div className="analytics-path-stat">{path.pct}% complete</div>
              <div className="analytics-chips">
                {path.avgScore !== null && (
                  <span className="analytics-chip avg">Avg {path.avgScore}%</span>
                )}
                <span className="analytics-chip mastered">{path.masteredCount} mastered</span>
                <span className="analytics-chip attention">{path.needsAttentionCount} attention</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Distribution */}
      <div className="analytics-section">
        <div className="analytics-section-title">Concept Status Distribution</div>
        <div className="analytics-dist">
          <div className="analytics-dist-item">
            <div className="analytics-dist-num">{distribution.notStarted}</div>
            <div className="analytics-dist-label">Not Started</div>
          </div>
          <div className="analytics-dist-item">
            <div className="analytics-dist-num">{distribution.inProgress}</div>
            <div className="analytics-dist-label">In Progress</div>
          </div>
          <div className="analytics-dist-item">
            <div className="analytics-dist-num">{distribution.practiced}</div>
            <div className="analytics-dist-label">Practiced</div>
          </div>
          <div className="analytics-dist-item">
            <div className="analytics-dist-num">{distribution.mastered}</div>
            <div className="analytics-dist-label">Mastered</div>
          </div>
        </div>
      </div>

      {/* Question Insights */}
      <div className="analytics-section">
        <div className="analytics-section-title">
          📊 Question Insights
          <span style={{ fontSize: '0.78rem', fontWeight: 400, opacity: 0.6 }}>
            struggle points · time per question · skip rate
          </span>
        </div>
        <div className="analytics-paths-row">
          {questionInsights.map(insight => {
            const meta = PATH_META.find(p => p.pathId === insight.pathId)!;
            return (
              <div className="analytics-path-card" key={insight.pathId}>
                <div className="analytics-path-header">
                  <span className="analytics-path-badge">{meta.icon}</span>
                  <span className="analytics-path-title">{meta.label}</span>
                </div>
                {insight.totalAnswered === 0 && insight.totalSkipped === 0 ? (
                  <p style={{ opacity: 0.68, fontSize: '0.82rem' }}>No quiz activity recorded yet.</p>
                ) : (
                  <>
                    <div className="analytics-chips" style={{ marginBottom: 12 }}>
                      {insight.skipRatePct !== null && (
                        <span className="analytics-chip attention">{insight.skipRatePct}% skip rate</span>
                      )}
                      {insight.avgTimeSec !== null && (
                        <span className="analytics-chip avg">~{insight.avgTimeSec.toFixed(1)}s / question</span>
                      )}
                    </div>
                    {insight.struggleQuestions.length === 0 ? (
                      <p style={{ opacity: 0.68, fontSize: '0.8rem' }}>No repeat-attempt struggle points yet.</p>
                    ) : (
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.7, marginBottom: 6 }}>Top struggle points</div>
                        {insight.struggleQuestions.map(sq => (
                          <div
                            key={`${sq.conceptId}-${sq.index}`}
                            style={{ fontSize: '0.78rem', padding: '6px 0', borderBottom: '1px solid var(--kpi-border, #e2e6ef)' }}
                            title={sq.question}
                          >
                            <div style={{ opacity: 0.85, marginBottom: 2 }}>
                              {sq.question.length > 70 ? sq.question.slice(0, 70) + '…' : sq.question}
                            </div>
                            <div style={{ opacity: 0.68, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                              <span>{sq.conceptTitle}</span>
                              <span style={{ color: '#ef4444', fontWeight: 700 }}>{Math.round(sq.wrongRate * 100)}% wrong</span>
                              <span>{sq.attempts} attempts</span>
                              {sq.avgTimeSec !== null && <span>~{sq.avgTimeSec.toFixed(1)}s avg</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Needs Attention */}
      <div className="analytics-section">
        <div className="analytics-section-title">
          <span style={{ color: '#ef4444' }}>&#9888;</span> Needs Attention
          <span style={{ fontSize: '0.78rem', fontWeight: 400, opacity: 0.6 }}>
            (score &lt; 50% or not started)
          </span>
        </div>
        {globalNeedsAttention.length === 0 ? (
          <p style={{ opacity: 0.68, fontSize: '0.88rem' }}>No concepts need attention — great progress!</p>
        ) : (
          <div className="analytics-concept-list">
            {globalNeedsAttention.map(c => (
              <div className="analytics-concept-item" key={`${c.path}-${c.id}`}>
                <div className="analytics-concept-name">{c.title}</div>
                <div className="analytics-concept-meta">
                  <span>{c.pathIcon} {c.path}</span>
                </div>
                <span className={`analytics-concept-score ${c.scorePct === null ? 'score-none' : 'score-low'}`}>
                  {c.scorePct === null ? 'Not started' : `${Math.round(c.scorePct)}%`}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Top Performers */}
      <div className="analytics-section">
        <div className="analytics-section-title">
          <span style={{ color: '#10b981' }}>&#10003;</span> Top Performers
          <span style={{ fontSize: '0.78rem', fontWeight: 400, opacity: 0.6 }}>
            (score &ge; 80%)
          </span>
        </div>
        {globalMastered.length === 0 ? (
          <p style={{ opacity: 0.68, fontSize: '0.88rem' }}>No mastered concepts yet — keep going!</p>
        ) : (
          <div className="analytics-concept-list">
            {globalMastered.map(c => (
              <div className="analytics-concept-item" key={`${c.path}-${c.id}`}>
                <div className="analytics-concept-name">{c.title}</div>
                <div className="analytics-concept-meta">
                  <span>{c.pathIcon} {c.path}</span>
                </div>
                <span className="analytics-concept-score score-high">{Math.round(c.scorePct)}%</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mission completion summary */}
      <div className="analytics-section">
        <div className="analytics-section-title">Mission Completion</div>
        <div className="analytics-missions-row">
          {(['javascript', 'playwright', 'tosca'] as const).map(pathId => {
            const label = pathId === 'javascript' ? 'JavaScript' : pathId === 'playwright' ? 'Playwright' : 'TOSCA';
            const missions = missionsByPath[pathId] ?? [];
            return (
              <div className="analytics-mission-group" key={pathId}>
                <div className="analytics-mission-group-title">{label} Missions</div>
                {missions.length === 0 && (
                  <div style={{ fontSize: '0.8rem', opacity: 0.68 }}>No missions available</div>
                )}
                {missions.map(({ mission, prog }) => {
                  const status = prog?.status ?? 'not-started';
                  const statusLabel = status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Not Started';
                  const statusClass = status === 'completed' ? 'completed' : status === 'in-progress' ? 'in-progress' : 'not-started';
                  return (
                    <div className="analytics-mission-item" key={mission.id}>
                      <span>{mission.title}</span>
                      <span className={`analytics-mission-status ${statusClass}`}>{statusLabel}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="analytics-note">
        Data reflects this browser's local learning session
      </div>
    </div>
  );
}
