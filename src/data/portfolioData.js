import srihari from '../assets/srihari.jpg';
/**
 * Portfolio Data Structure
 * 
 * This file contains all static data for the portfolio website organized into
 * clean, reusable JSON objects. Each section is structured to be easily
 * maintainable and suitable for future backend API integration.
 */

// Static data for the portfolio
export const personalInfo = {
  name: "Srihari Pentakota",
  title: "Front-end Developer & UI/UX Designer",
  description: "Passionate developer with 2.7+ years of experience creating beautiful, functional web applications. I specialize in React, Node.js, and modern web technologies, with a keen eye for design and user experience.",
  image: srihari,
  location: "Hyderabad, Telangana",
  email: "sriharipentakota07@gmail.com",
  phone: "+91 6281997025",
  naukri: "https://www.naukri.com/mnjuser/profile",
  github: "https://github.com/Sriharipentakota",
  website: "https://hari-portfoliowebsite.netlify.app"
};

export const professionalSummary = {
  title: "Professional Summary",
  content: "Innovative Front-end Developer with 2.7+ years of experience designing and developing scalable web applications. Proven track record of leading cross-functional teams, implementing modern development practices, and delivering high-quality solutions that drive business growth. Expertise in React ecosystem, Node.js backend development, and cloud infrastructure with a passion for creating exceptional user experiences."
};

export const skills = [
  { id: '1', name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
  { id: '2', name: 'TypeScript', level: 90, category: 'frontend', icon: '📘' },
  { id: '3', name: 'JavaScript', level: 98, category: 'frontend', icon: '🟨' },
  { id: '4', name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
  { id: '5', name: 'Python', level: 80, category: 'backend', icon: '🐍' },
  { id: '6', name: 'PostgreSQL', level: 75, category: 'backend', icon: '🐘' },
  { id: '7', name: 'MongoDB', level: 70, category: 'backend', icon: '🍃' },
  { id: '8', name: 'AWS', level: 65, category: 'tools', icon: '☁️' },
  { id: '9', name: 'Docker', level: 70, category: 'tools', icon: '🐳' },
  { id: '10', name: 'Figma', level: 85, category: 'design', icon: '🎨' },
  { id: '11', name: 'Adobe XD', level: 80, category: 'design', icon: '🎭' },
  { id: '12', name: 'CSS/SCSS', level: 92, category: 'frontend', icon: '🎨' }
];

export const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and an admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    liveUrl: 'https://taskapp-demo.com',
    githubUrl: 'https://github.com/alexjohnson/task-manager',
    featured: true,
    category: 'web'
  },
  {
    id: '3',
    title: 'Mobile Weather App',
    description: 'A beautiful weather application for iOS and Android with location services, weather forecasts, and interactive maps.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'Redux', 'Weather API'],
    githubUrl: 'https://github.com/alexjohnson/weather-app',
    featured: false,
    category: 'mobile'
  },
  {
    id: '4',
    title: 'AI Chat Interface',
    description: 'An intelligent chat interface powered by machine learning with natural language processing and context-aware responses.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Python', 'TensorFlow', 'WebSocket'],
    liveUrl: 'https://ai-chat-demo.com',
    githubUrl: 'https://github.com/alexjohnson/ai-chat',
    featured: true,
    category: 'web'
  }
];

export const experience = [
  {
    id: '1',
    company: 'Deloitte',
    position: 'Frontend Developer',
    startDate: '2022-01',
    endDate: 'Present',
    description: 'Spearheading the development of scalable frontend solutions for enterprise clients. Collaborate with cross-functional teams to deliver high-performance user interfaces.',
    achievements: [
      'Enhanced UI responsiveness, reducing load times by 35%',
      'Led migration to React-based architecture for improved maintainability',
      'Integrated real-time analytics dashboard for client reporting',
      'Mentored junior developers in modern frontend practices'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
    location: 'Hyderabad, Telangana'
  },
  {
    id: '2',
    company: 'EY',
    position: 'Frontend Developer',
    startDate: '2020-06',
    endDate: '2021-12',
    description: 'Developed and maintained web applications with a focus on mobile-first design. Worked closely with UX designers to implement intuitive interfaces.',
    achievements: [
      'Launched 3 new product features with seamless mobile integration',
      'Improved accessibility compliance across all web products',
      'Established reusable component library for faster development',
      'Reduced front-end bugs by 40% through rigorous testing'
    ],
    technologies: ['React', 'TypeScript', 'SCSS', 'Jest'],
    location: 'Hyderabad, Telangana'
  },
  {
    id: '3',
    company: 'KPMG',
    position: 'Frontend Developer',
    startDate: '2019-01',
    endDate: '2020-05',
    description: 'Delivered custom web solutions for diverse clients, ensuring pixel-perfect implementation and optimal performance.',
    achievements: [
      'Successfully delivered 20+ client projects with high satisfaction',
      'Boosted site performance scores by 30%',
      'Created a modular CSS architecture for maintainable styling',
      'Provided onboarding and training for new team members'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
    location: 'Hyderabad, Telangana'
  }

];

export const contactInfo = {
  email: 'sriharipentakota07@gmail.com',
  phone: '+91 6281997025',
  address: 'Hyderabad, Telangana, India',
  social: {
    linkedin: 'https://linkedin.com/in/alexjohnson',
    github: 'https://github.com/sriharipentakota',
    twitter: 'https://twitter.com/alexjohnson',
    instagram: 'https://instagram.com/alexjohnson'
  }
};