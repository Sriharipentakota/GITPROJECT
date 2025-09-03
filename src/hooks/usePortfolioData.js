/**
 * Portfolio Data Hook
 * 
 * Custom hook for managing portfolio data state across all sections.
 * Provides update functions and maintains data consistency throughout the application.
 */

import { useState } from 'react';
import { 
  personalInfo as initialPersonalInfo,
  professionalSummary as initialProfessionalSummary,
  skills as initialSkills,
  projects as initialProjects,
  experience as initialExperience,
  contactInfo as initialContactInfo
} from '../data/portfolioData';

export const usePortfolioData = () => {
  // State management for all portfolio sections
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [professionalSummary, setProfessionalSummary] = useState(initialProfessionalSummary);
  const [skills, setSkills] = useState(initialSkills);
  const [projects, setProjects] = useState(initialProjects);
  const [experience, setExperience] = useState(initialExperience);
  const [contactInfo, setContactInfo] = useState(initialContactInfo);

  // Update functions for each section
  const updatePersonalInfo = (newData) => {
    setPersonalInfo(newData);
    localStorage.setItem('portfolioPersonalInfo', JSON.stringify(newData));
  };

  const updateProfessionalSummary = (newData) => {
    setProfessionalSummary(newData);
    localStorage.setItem('portfolioProfessionalSummary', JSON.stringify(newData));
  };

  const updateSkills = (newData) => {
    setSkills(newData);
    localStorage.setItem('portfolioSkills', JSON.stringify(newData));
  };

  const updateProjects = (newData) => {
    setProjects(newData);
    localStorage.setItem('portfolioProjects', JSON.stringify(newData));
  };

  const updateExperience = (newData) => {
    setExperience(newData);
    localStorage.setItem('portfolioExperience', JSON.stringify(newData));
  };

  const updateContactInfo = (newData) => {
    setContactInfo(newData);
    localStorage.setItem('portfolioContactInfo', JSON.stringify(newData));
  };

  // Load data from localStorage on initialization
  const loadFromStorage = () => {
    try {
      const savedPersonalInfo = localStorage.getItem('portfolioPersonalInfo');
      const savedProfessionalSummary = localStorage.getItem('portfolioProfessionalSummary');
      const savedSkills = localStorage.getItem('portfolioSkills');
      const savedProjects = localStorage.getItem('portfolioProjects');
      const savedExperience = localStorage.getItem('portfolioExperience');
      const savedContactInfo = localStorage.getItem('portfolioContactInfo');

      if (savedPersonalInfo) setPersonalInfo(JSON.parse(savedPersonalInfo));
      if (savedProfessionalSummary) setProfessionalSummary(JSON.parse(savedProfessionalSummary));
      if (savedSkills) setSkills(JSON.parse(savedSkills));
      if (savedProjects) setProjects(JSON.parse(savedProjects));
      if (savedExperience) setExperience(JSON.parse(savedExperience));
      if (savedContactInfo) setContactInfo(JSON.parse(savedContactInfo));
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  };

  return {
    // Data
    personalInfo,
    professionalSummary,
    skills,
    projects,
    experience,
    contactInfo,
    // Update functions
    updatePersonalInfo,
    updateProfessionalSummary,
    updateSkills,
    updateProjects,
    updateExperience,
    updateContactInfo,
    // Utility functions
    loadFromStorage
  };
};