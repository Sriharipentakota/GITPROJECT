import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Download } from 'lucide-react';
import { Button, Dropdown } from '../common';
import { generatePDFResume, generateWordResume } from '../../utils';

const Hero = () => {
  /**
   * Handle resume download based on format selection
   * This function is called when user selects a format from the dropdown
   * 
   * @param {string} format - The selected format ('pdf' or 'word')
   */
  const handleResumeDownload = async (format) => {
    try {
      if (format === 'pdf') {
        await generatePDFResume();
      } else if (format === 'word') {
        await generateWordResume();
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
      // You could add a toast notification here for better UX
      alert('Error downloading resume. Please try again.');
    }
  };

  /**
   * Resume download dropdown items
   * Each item represents a different format option with icon and description
   */
  const resumeDownloadItems = [
    {
      label: 'Download as PDF',
      description: 'Professional PDF format',
      icon: <Download className="w-4 h-4" />,
      onClick: () => handleResumeDownload('pdf'),
    },
    {
      label: 'Download as Word',
      description: 'Editable Word document',
      icon: <Download className="w-4 h-4" />,
      onClick: () => handleResumeDownload('word'),
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6 sm:mb-8">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-4 sm:mb-6 shadow-2xl object-cover border-4 border-white"
          />
          {/* ============================================================ */}
          {/* CUSTOMIZE YOUR HERO SECTION HERE */}
          {/* ============================================================ */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Srihari Pentakota</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6 max-w-3xl mx-auto px-4">
            Frontend Developer & UI/UX Enthusiast
          </p>
          <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            I craft beautiful, responsive, and user-friendly web experiences using modern frontend technologies.
          </p>
          {/* ============================================================ */}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto rounded-full shadow-lg"
          >
            Get In Touch
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto rounded-full"
          >
            View My Work
          </Button>
          
          {/* Resume Download Dropdown Button */}
          <Dropdown
            trigger={
              <Button
                variant="secondary"
                size="lg"
                rightIcon={<ChevronDown className="w-4 h-4 ml-1" />}
                className="w-full sm:w-auto rounded-full shadow-lg"
              >
                Download Resume
              </Button>
            }
            items={resumeDownloadItems}
            position="center"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12 px-4">
          {/* ============================================================ */}
          {/* UPDATE YOUR SOCIAL MEDIA LINKS HERE */}
          {/* ============================================================ */}
          <a
            href="https://github.com/Sriharipentakota"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </a>
          <a
            href="mailto:sriharipentakota07@gmail.com"
            className="p-2.5 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
          </a>
          <a
            href="https://codepen.io/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <Code className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          </a>
          {/* ============================================================ */}
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;