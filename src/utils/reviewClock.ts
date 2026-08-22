/**
 * Minimal, purely-additive "last reviewed" timestamp tracker. Separate
 * localStorage key from everything else — never touches the existing
 * progress/session schemas, so it can be safely wired in without risking any
 * regression to what already works.
 */

const KEY = 'jml_review_clock_v1';

type Clock = Record<string, Record<string, number>>; // pathId -> conceptId -> epoch ms

function load(): Clock {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
}

function save(clock: Clock) {
  try {
    localStorage.setItem(KEY, JSON.stringify(clock));
  } catch {
    /* ignore quota/private-mode errors */
  }
}

/** Call whenever a concept is genuinely reviewed (opened to study, or a quiz on it is completed). */
export function recordReviewed(pathId: string, conceptId: string): void {
  const clock = load();
  clock[pathId] = { ...(clock[pathId] ?? {}), [conceptId]: Date.now() };
  save(clock);
}

export function getLastReviewed(pathId: string, conceptId: string): number | null {
  return load()[pathId]?.[conceptId] ?? null;
}

export function getReviewClockForPath(pathId: string): Record<string, number> {
  return load()[pathId] ?? {};
}
