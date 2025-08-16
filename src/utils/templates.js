// src/utils/templates.js
import { generateHTMLExport as generateClassicHTMLExport } from './classicTemplate';
import { generateModernCardHTMLExport } from './modernCardTemplate';
import { generateMinimalistHTMLExport } from './minimalistTemplate';
import { generateCreativeHTMLExport } from './creativeTemplate';
import { generateProfessionalHTMLExport } from './professionalTemplate';
import { generateDarkModeHTMLExport } from './darkModeTemplate';
import { generateCompactHTMLExport } from './compactTemplate';
import { generateTimelineHTMLExport } from './timelineTemplate';
import { generatePortfolioHTMLExport } from './portfolioTemplate';
import { generateExecutiveHTMLExport } from './executiveTemplate';
import { generateDeveloperHTMLExport } from './developerTemplate';
import { generateDesignerHTMLExport } from './designerTemplate';

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
