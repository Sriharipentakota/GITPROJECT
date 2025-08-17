// src/utils/templates.js
import { generateHTMLExport as generateClassicHTMLExport } from './templates/classicTemplate';
import { generateModernCardHTMLExport } from './templates/modernCardTemplate';
import { generateMinimalistHTMLExport } from './templates/minimalistTemplate';
import { generateCreativeHTMLExport } from './templates/creativeTemplate';
import { generateProfessionalHTMLExport } from './templates/professionalTemplate';
import { generateDarkModeHTMLExport } from './templates/darkModeTemplate';
import { generateCompactHTMLExport } from './templates/compactTemplate';
import { generateTimelineHTMLExport } from './templates/timelineTemplate';
import { generatePortfolioHTMLExport } from './templates/portfolioTemplate';
import { generateExecutiveHTMLExport } from './templates/executiveTemplate';
import { generateDeveloperHTMLExport } from './templates/developerTemplate';
import { generateDesignerHTMLExport } from './templates/designerTemplate';

export const portfolioTemplates = {
  classic: generateClassicHTMLExport,
  modernCard: generateModernCardHTMLExport,
  minimalist: generateMinimalistHTMLExport,
  creative: generateCreativeHTMLExport,
  professional: generateProfessionalHTMLExport,
  darkMode: generateDarkModeHTMLExport,
  compact: generateCompactHTMLExport,
  timeline: generateTimelineHTMLExport,
  portfolio: generatePortfolioHTMLExport,
  executive: generateExecutiveHTMLExport,
  developer: generateDeveloperHTMLExport,
  designer: generateDesignerHTMLExport,
};

export const templateOptions = [
  { key: 'classic', label: 'Classic', description: 'Traditional clean layout' },
  { key: 'modernCard', label: 'Modern Card', description: 'Card-based modern design' },
  { key: 'minimalist', label: 'Minimalist', description: 'Clean and simple' },
  { key: 'creative', label: 'Creative', description: 'Bold and artistic' },
  { key: 'professional', label: 'Professional', description: 'Corporate style' },
  { key: 'darkMode', label: 'Dark Mode', description: 'Dark theme design' },
  { key: 'compact', label: 'Compact', description: 'Space-efficient layout' },
  { key: 'timeline', label: 'Timeline', description: 'Timeline-based layout' },
  { key: 'portfolio', label: 'Portfolio', description: 'Gallery-focused design' },
  { key: 'executive', label: 'Executive', description: 'High-level professional' },
  { key: 'developer', label: 'Developer', description: 'Tech-focused design' },
  { key: 'designer', label: 'Designer', description: 'Creative professional' },
];
