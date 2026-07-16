export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  category: 'completion' | 'score' | 'exploration' | 'milestone';
}

export const ACHIEVEMENTS: Achievement[] = [
  // COMPLETION
  {
    id: 'first-concept',
    title: 'First Step',
    description: 'Marked your first concept as learned',
    icon: '🌱',
    rarity: 'common',
    category: 'completion',
  },
  {
    id: 'js-complete',
    title: 'JavaScript Ninja',
    description: 'Completed all JavaScript concepts',
    icon: '⚡',
    rarity: 'rare',
    category: 'completion',
  },
  {
    id: 'pw-complete',
    title: 'Playwright Pro',
    description: 'Completed all Playwright concepts',
    icon: '🎭',
    rarity: 'rare',
    category: 'completion',
  },
  {
    id: 'tc-complete',
    title: 'Tosca Master',
    description: 'Completed all Tosca concepts',
    icon: '🔬',
    rarity: 'rare',
    category: 'completion',
  },
  {
    id: 'all-paths',
    title: 'Full Stack Tester',
    description: 'Completed all three learning paths',
    icon: '🏆',
    rarity: 'legendary',
    category: 'completion',
  },
  {
    id: 'first-mission',
    title: 'Mission Launched',
    description: 'Completed your first real-world mission',
    icon: '🚀',
    rarity: 'common',
    category: 'completion',
  },
  {
    id: 'five-missions',
    title: 'Mission Specialist',
    description: 'Completed 5 real-world missions',
    icon: '🛸',
    rarity: 'rare',
    category: 'completion',
  },

  // SCORE
  {
    id: 'perfect-score',
    title: 'Flawless',
    description: 'Scored 100% on a quiz',
    icon: '💯',
    rarity: 'rare',
    category: 'score',
  },
  {
    id: 'high-achiever',
    title: 'Sharpshooter',
    description: 'Scored 90%+ on 5 different quizzes',
    icon: '🎯',
    rarity: 'epic',
    category: 'score',
  },
  {
    id: 'speed-learner',
    title: 'Quick Study',
    description: 'Passed a quiz on the first attempt',
    icon: '⚡',
    rarity: 'common',
    category: 'score',
  },

  // EXPLORATION
  {
    id: 'all-tasks',
    title: 'Hands-On',
    description: 'Completed all tasks in a concept',
    icon: '🛠',
    rarity: 'rare',
    category: 'exploration',
  },
  {
    id: 'cross-path',
    title: 'Polyglot Tester',
    description: 'Practiced concepts from all three paths',
    icon: '🗺️',
    rarity: 'epic',
    category: 'exploration',
  },
  {
    id: 'night-owl',
    title: 'Night Owl',
    description: 'Studied in the evening (after 8 PM)',
    icon: '🦉',
    rarity: 'common',
    category: 'exploration',
  },

  // MILESTONE
  {
    id: 'ten-concepts',
    title: 'Tenth Concept',
    description: 'Learned 10 concepts total',
    icon: '🎓',
    rarity: 'common',
    category: 'milestone',
  },
  {
    id: 'streak-7',
    title: 'On Fire',
    description: 'Maintained a 7-day learning streak',
    icon: '🔥',
    rarity: 'epic',
    category: 'milestone',
  },
];
