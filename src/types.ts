export type QuestionType = 'O' | 'F' | 'E' | 'D' | 'C' | 'L' | 'R' | 'S';
export type Difficulty = 'B' | 'I' | 'A';

export interface Question {
  type: QuestionType;
  diff: Difficulty;
  q: string;
  code: string | null;
  opts: [string, string, string, string];
  ans: number;
  hint: string;
}

export interface ConceptExample {
  label: string;
  code: string;
  out: string;
}

export interface Concept {
  id: string;
  title: string;
  icon: string;
  explain: string;
  syntax: string;
  examples: ConceptExample[];
  svgHTML: string;
  analogy: string;
  flow: string[];
}

export interface Progress {
  [conceptId: string]: {
    learned: boolean;
    score: number;
    total: number;
    answers: (number | null)[];
  };
}

export interface InProgressState {
  answers: (number | null)[];
  skipped: number[];
  idx: number;
}

export type SaveStatus = 'idle' | 'saving' | 'saved';

export type AppView = 'dashboard' | 'learn' | 'skillmap' | 'missions';

export interface Task {
  id: number;
  level: 1 | 2 | 3 | 4 | 5;
  title: string;
  scenario: string;
  objective: string;
  constraints: string;
  expectedOutput: string;
  check: string;
}

export const TYPE_LABELS: Record<QuestionType, string> = {
  O: 'Output',
  F: 'Fill-in',
  E: 'Find Error',
  D: 'Debug',
  C: 'Complete',
  L: 'Logic',
  R: 'Real-World',
  S: 'Scenario',
};

export const DIFF_LABELS: Record<Difficulty, string> = {
  B: 'Beginner',
  I: 'Intermediate',
  A: 'Advanced',
};
