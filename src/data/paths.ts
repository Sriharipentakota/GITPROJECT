export interface LearningPath {
  id: string;
  label: string;
  icon: string;
  desc: string;
}

export const PATHS: LearningPath[] = [
  { id: 'javascript', label: 'JavaScript', icon: '⚡', desc: '15 concepts · 1,500 questions' },
  { id: 'playwright', label: 'Playwright', icon: '🎭', desc: '15 concepts · 750 questions' },
  { id: 'tosca', label: 'TOSCA', icon: '🔬', desc: '15 concepts · 750 questions' },
];
