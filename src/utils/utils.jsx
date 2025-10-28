import { Download } from "lucide-react";
import employeeManagement from '../assests/employeeManagement.png'
import ATSResumeFormatter from '../assests/ATSResumeFormatter.png'
import Builder from '../assests/builder.png'


// Base styles that apply to all button variants
export const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';

// Variant-specific styles for different button appearances
export const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white focus:ring-gray-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
};

// Size-specific styles for different button sizesexport
export const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base',
    lg: 'px-6 py-3 text-base sm:px-8 sm:py-3 sm:text-lg',
};

// Icon size mapping based on button size
export const iconSizes = {
    sm: 'w-3 h-3 sm:w-4 sm:h-4',
    md: 'w-4 h-4 sm:w-5 sm:h-5',
    lg: 'w-5 h-5 sm:w-6 sm:h-6',
};

// Position classes for dropdown menu alignment
export const positionClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 transform -translate-x-1/2',
};

export const categories = [
    {
        title: 'Core Technologies',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
        icon: '💻'
    },
    {
        title: 'Frameworks & Libraries',
        skills: ['React', 'jQuery', 'Bootstrap'],
        icon: '⚛️'
    },
    {
        title: 'Styling & Tools',
        skills: ['Tailwind CSS', 'SASS/SCSS', 'Webpack', 'Git'],
        icon: '🎨'
    }
];
export const skills = [
    { name: 'HTML5', level: 95, color: 'bg-orange-500' },
    { name: 'CSS3', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React', level: 85, color: 'bg-cyan-500' },
    { name: 'TypeScript', level: 75, color: 'bg-blue-600' },
    { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' },
    { name: 'SASS/SCSS', level: 85, color: 'bg-pink-500' },
    { name: 'Bootstrap', level: 80, color: 'bg-purple-500' },
    { name: 'jQuery', level: 75, color: 'bg-blue-400' },
    { name: 'Webpack', level: 70, color: 'bg-blue-700' },
    { name: 'Git', level: 85, color: 'bg-red-500' },
];
export const projects = [
    {
        title: 'E-Commerce React App',
        description: 'A modern e-commerce frontend built with React, featuring product catalog, shopping cart, user authentication, and responsive design.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Context API', 'React Router'],
        liveUrl: 'https://hari-ecommerce.netlify.app',
        githubUrl: 'https://github.com/Sriharipentakota/GITPROJECT/tree/ecommerce-new',
        date: 'March 2024'
    },
    {
        title: 'Employee Management System(Full Stack)',
        description: 'A full-stack employee management system with a React frontend and Node.js backend. Features include employee CRUD operations, role-based access control, and responsive design.',
        image: employeeManagement,
        technologies: ['React', 'CSS Grid', 'Flexbox', 'Local Storage'],
        liveUrl: 'https://employee-management-data.netlify.app',
        githubUrl: 'https://github.com/Sriharipentakota/GITPROJECT/tree/employee-managment-backend',
        date: 'February 2024'
    },
    {
        title: 'ATS Resume Builder',
        description: 'A resume builder that generates ATS-friendly resumes with customizable templates, real-time previews, and downloadable PDFs. Built with React and modern CSS techniques.',
        image: ATSResumeFormatter,
        technologies: ['React', 'JavaScript', 'CSS Modules', 'PDF Generation', 'Local Storage'],
        liveUrl: 'https://hari-resume-formatter.netlify.app',
        githubUrl: 'https://github.com/Sriharipentakota/GITPROJECT/tree/resume-formatter',
        date: 'January 2024'
    },
    {
        title: 'FrontEnd Concepts Showcase',
        description: 'A showcase of various frontend concepts including animations, transitions, and responsive design. Built with React and Tailwind CSS.',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ["React", "JavaScript", "Tailwind CSS", 'HTml5', 'CSS3'],
        liveUrl: 'https://react-keyconcepts.netlify.app/',
        githubUrl: 'https://github.com/Sriharipentakota/GITPROJECT/tree/React-Concepts',
        date: 'December 2023'
    },
    {
        title: 'Portfolio Website',
        description: 'A responsive portfolio website with smooth scrolling, animations, and modern design. Built with performance and SEO optimization in mind.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
        liveUrl: 'https://hari-portfoliowebsite.netlify.app',
        githubUrl: 'https://github.com/Sriharipentakota/GITPROJECT/tree/my-portfolio',
        date: 'November 2023'
    },
    {
        title: 'Resume Builder and Portfolio website Builder',
        description: 'An app to build resumes (PDF/Word) and portfolio websites. Export your resume or portfolio as PDF, Word, or HTML formats.',
        image: Builder,
        technologies: ['React', 'JavaScript', 'CSS Modules', 'PDF Generation'],
        liveUrl: 'https://resumeandportfoliobuilder.netlify.app',
        githubUrl: 'https://github.com/Sriharipentakota/GITPROJECT/tree/portfolio-editor',
        date: 'January 2024'
    },
    {
        title: 'BusGo - Professional Bus Booking App',
        description: 'A comprehensive bus travel application with seat selection, ticket booking, PDF downloads, payment integration, and booking management. Features include real-time bus tracking, multi-city routes, and professional travel management.',
        image: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Context API', 'PDF Generation', 'Date Picker', 'Local Storage'],
        liveUrl: 'https://hari-bustravelling-app.netlify.app',
        githubUrl: 'https://github.com/Sriharipentakota/GITPROJECT/tree/travelling-app',
        date: 'April 2024'
    },
    {
        title: 'Dynamic Portfolio Editor',
        description: 'An interactive portfolio website builder with live editing capabilities. Users can edit sections in real-time, customize content, preview changes instantly, and export their portfolio data as PDF resume or HTML format. Features drag-and-drop functionality and multiple export options.',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['React', 'JavaScript', 'CSS Modules', 'PDF Generation', 'HTML Export', 'Local Storage', 'Content Editable'],
        liveUrl: 'https://hari-editable-portfolio.netlify.app',
        githubUrl: 'https://github.com/Sriharipentakota/GITPROJECT/tree/editable-portfolio',
        date: 'May 2024'
    },  {
        title: 'QR Code Generator App',
        description: 'A versatile QR code generator application with three dynamic modes: text, link, and image. Users can input content and instantly generate scannable QR codes. When scanned, the codes display the respective content - plain text, redirect to URLs, or show images. Features real-time generation, downloadable QR codes, and responsive design.',
        image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['React', 'JavaScript', 'QR Code Library', 'Tailwind CSS', 'File Upload', 'Canvas API'],
        liveUrl: 'https://hari-qrgenerator.netlify.app',
        githubUrl: 'https://github.com/Sriharipentakota/GITPROJECT/tree/qr-generator',
        date: 'June 2024'
    }
];

export const handleResumeFormatter = (params) => {
    const file = 'Srihari_Pentakota_Frontend_Developer';
    let formatter = '';
    if (params === 'pdf') {
        formatter = 'pdf';
    } else if (params === 'word') {
        formatter = 'docx';
    } else {
        console.warn('Unsupported file type');
        return;
    }
    const link = document.createElement('a');
    link.href = `../../${file}.${formatter}`;
    link.download = `${file}.${formatter}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const resumeDownloadItems = [
    {
        label: 'Download as PDF',
        description: 'Professional PDF format',
        icon: <Download className="w-4 h-4" />,
        onClick: () => handleResumeFormatter('pdf'),
    },
    {
        label: 'Download as Word',
        description: 'Editable Word document',
        icon: <Download className="w-4 h-4" />,
        onClick: () => handleResumeFormatter('word'),
    },
];


export const scrollToSection = (sectionId, afterScroll) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        if (typeof afterScroll === 'function') {
            afterScroll();
        }
    }
};

export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};