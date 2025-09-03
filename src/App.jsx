/**
 * Main Portfolio Application
 * 
 * The root component that orchestrates all portfolio sections and manages
 * the overall application state. Features smooth scrolling, responsive design,
 * and comprehensive data management through custom hooks.
 */

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProfessionalSummarySection from './components/ProfessionalSummarySection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { usePortfolioData } from './hooks/usePortfolioData';

function App() {
  // Initialize portfolio data management
  const {
    personalInfo,
    professionalSummary,
    skills,
    projects,
    experience,
    contactInfo,
    updatePersonalInfo,
    updateProfessionalSummary,
    updateSkills,
    updateProjects,
    updateExperience,
    updateContactInfo,
    loadFromStorage
  } = usePortfolioData();

  // Load saved data from localStorage on component mount
  useEffect(() => {
    loadFromStorage();
  }, []);

  // Smooth scroll behavior for the entire application
  useEffect(() => {
    // Add smooth scrolling to the html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Prepare portfolio data for export
  const portfolioData = {
    personalInfo,
    professionalSummary,
    skills,
    projects,
    experience,
    contactInfo
  };

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Fixed Navigation with Export */}
      <Navigation portfolioData={portfolioData} />

      {/* Main Content Sections */}
      <main>
        {/* Hero/About Section */}
        <HeroSection 
          data={personalInfo}
          onUpdate={updatePersonalInfo}
        />

        {/* Professional Summary Section */}
        <ProfessionalSummarySection 
          data={professionalSummary}
          onUpdate={updateProfessionalSummary}
        />

        {/* Skills Section */}
        <SkillsSection 
          data={skills}
          onUpdate={updateSkills}
        />

        {/* Projects Section */}
        <ProjectsSection 
          data={projects}
          onUpdate={updateProjects}
        />

        {/* Experience Section */}
        <ExperienceSection 
          data={experience}
          onUpdate={updateExperience}
        />

        {/* Contact Section */}
        <ContactSection 
          data={contactInfo}
          onUpdate={updateContactInfo}
        />
      </main>

      {/* Footer */}
      <Footer 
        personalName={personalInfo.name}
        personalTitle={personalInfo.title}
      />
    </motion.div>
  );
}

export default App;