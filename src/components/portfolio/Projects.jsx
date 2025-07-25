import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import employeeManagement from '../../assests/employeeManagement.png'
import ATSResumeFormatter from '../../assests/ATSResumeFormatter.png'

const Projects = () => {
  // ============================================================
  // CUSTOMIZE YOUR FRONTEND PROJECTS HERE
  // ============================================================
  const projects = [
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
      technologies: ["React", "JavaScript", "Tailwind CSS",'HTml5', 'CSS3'],
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
    }
  ];
  // ============================================================

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Frontend Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A showcase of my frontend development skills and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex-1 pr-2">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm flex-shrink-0">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="hidden sm:inline">{project.date}</span>
                    <span className="sm:hidden">{project.date.split(' ')[1]}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 sm:space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 sm:space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frontend Specialties */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 rounded-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Frontend Specialties</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
                <span className="text-xl sm:text-2xl">📱</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Responsive Design</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Creating layouts that work perfectly on all devices and screen sizes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
                <span className="text-xl sm:text-2xl">⚡</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Performance Optimization</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Optimizing load times, bundle sizes, and runtime performance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
                <span className="text-xl sm:text-2xl">🎨</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">UI/UX Implementation</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Bringing designs to life with pixel-perfect precision and smooth interactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;