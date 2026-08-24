export interface LearningPath {
  id: string;
  label: string;
  icon: string;
  desc: string;
}

export const PATHS: LearningPath[] = [
  { id: 'javascript', label: 'JavaScript', icon: '⚡', desc: 'Javascript 15 concepts · 3,107 questions' },
  { id: 'playwright', label: 'Playwright', icon: '🎭', desc: 'Playwright 15 concepts · 3,099 questions' },
  { id: 'tosca', label: 'TOSCA', icon: '🔬', desc: 'TOSCA 15 concepts · 2,789 questions' },
  { id: 'typescript', label: 'TypeScript', icon: '🔷', desc: 'TypeScript 15 concepts · 3,095 questions' },
];
