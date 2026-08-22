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

function load(): AllAnalytics {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function save(data: AllAnalytics) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
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
  data[pathId] = { ...pathData, [key]: next };
  save(data);
}

export function loadQuestionAnalytics(): AllAnalytics {
  return load();
}
