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
      name: 'John Doe',
      title: 'Full Stack Developer',
      bio: 'Passionate developer with 5+ years of experience building modern web applications.',
      skills: ['React', 'TypeScript', 'Node.js', 'Python']
    }
  },
  {
    id: 'experience-1',
    type: 'experience',
    title: 'Experience',
    isVisible: true,
    data: [
      {
        company: 'Tech Corp',
        position: 'Senior Developer',
        duration: '2021 - Present',
        description: 'Lead development of customer-facing applications using React and Node.js.'
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
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with React and Express',
        technologies: ['React', 'Express', 'MongoDB'],
        link: 'https://github.com/johndoe/ecommerce'
      }
    ]
  },
  {
    id: 'contact-1',
    type: 'contact',
    title: 'Contact',
    isVisible: true,
    data: {
      email: 'john@example.com',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe'
    }
  }
];

export const usePortfolioStore = create((set, get) => ({
  sections: defaultSections,
  theme: defaultTheme,
  previewMode: false,

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