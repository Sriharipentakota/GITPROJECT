import { create } from 'zustand';

const defaultTheme = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  accent: '#f59e0b',
  background: '#ffffff',
  surface: '#f8fafc',
  text: '#1e293b',
  textSecondary: '#64748b',
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem'
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  borderRadius: '0.5rem'
};

const defaultSections = [
  {
    id: 'about-1',
    type: 'about',
    title: 'About Me',
    isVisible: true,
    data: {
      name: 'Srihari Pentakota',
      title: 'Front-End Developer',
      bio: 'Passionate developer with 2.5+ years of experience building modern web applications.',
      skills: ['React', 'TypeScript', 'Node.js', 'Javascript', 'Html', 'CSS']
    }
  },
  {
    id: 'experience-1',
    type: 'experience',
    title: 'Experience',
    isVisible: true,
    data: [
      {
        company: 'Deloitte',
        position: 'Junior Developer',
        duration: '2023 - Present',
        description: 'Lead development of customer-facing applications using React and JS.'
      }
    ]
  },
  {
    id: 'projects-1',
    type: 'projects',
    title: 'Projects',
    isVisible: true,
    data: [
      {
        title: 'Employee Management System',
        description: 'Full-stack application for managing employee records',
        technologies: ['React', 'Express', 'MongoDB'],
        link: 'https://employee-management-data.netlify.app'
      }
    ]
  },
  {
    id: 'contact-1',
    type: 'contact',
    title: 'Contact',
    isVisible: true,
    data: {
      email: 'sriharipentakota07@gmail.com',
      linkedin: 'https://linkedin.com/in/srihari-pentakota',
      github: 'https://github.com/SrihariPentakota'
    }
  }
];

export const usePortfolioStore = create((set, get) => ({
  sections: defaultSections,
  theme: defaultTheme,
  previewMode: false,
  selectedTemplate: 'classic',
  setSelectedTemplate: (templateKey) => set({ selectedTemplate: templateKey }),

  updateSection: (id, data) => {
    const sections = get().sections.map(section =>
      section.id === id ? { ...section, data } : section
    );
    set({ sections });
  },

  reorderSections: (sections) => {
    set({ sections });
  },

  addSection: (type) => {
    const newSection = {
      id: `${type}-${Date.now()}`,
      type,
      title: type.charAt(0).toUpperCase() + type.slice(1),
      isVisible: true,
      data: type === 'projects' || type === 'experience' || type === 'education' || type === 'certifications' ? [] : {}
    };
    set({ sections: [...get().sections, newSection] });
  },

  removeSection: (id) => {
    const sections = get().sections.filter(section => section.id !== id);
    set({ sections });
  },

  updateTheme: (newTheme) => {
    set({ theme: { ...get().theme, ...newTheme } });
  },

  togglePreview: () => {
    set({ previewMode: !get().previewMode });
  },

  resetToDefault: () => {
    set({ sections: defaultSections, theme: defaultTheme, previewMode: false });
  }
}));