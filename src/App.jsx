import React, { useState } from 'react';
import { FileText, User, Briefcase, GraduationCap, Code, Award, Download, Menu, X } from 'lucide-react';
import TemplateSelector from './components/TemplateSelector';
import UserTypeSelector from './components/UserTypeSelector';
import PersonalInfo from './components/FormSections/PersonalInfo';
import Experience from './components/FormSections/Experience';
import Education from './components/FormSections/Education';
import Skills from './components/FormSections/Skills';
import Projects from './components/FormSections/Projects';
import ResumePreview from './components/ResumePreview';
import { exportToPDF } from './utils/pdfExport';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      github: '',
      portfolio: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: {
      technical: [],
      soft: [],
      languages: []
    },
    projects: [],
    achievements: []
  });

  const steps = [
    { id: 'userType', title: 'User Type', icon: User },
    { id: 'template', title: 'Template', icon: FileText },
    { id: 'personal', title: 'Personal Info', icon: User },
    { id: 'experience', title: 'Experience', icon: Briefcase },
    { id: 'education', title: 'Education', icon: GraduationCap },
    { id: 'skills', title: 'Skills', icon: Code },
    { id: 'projects', title: 'Projects', icon: Award },
    { id: 'preview', title: 'Preview', icon: FileText }
  ];

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    setIsMobileMenuOpen(false);
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    setIsMobileMenuOpen(false);
  };

  const handleExportPDF = () => {
    exportToPDF(formData, selectedTemplate);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleStepClick = (stepIndex) => {
    // Only allow navigation to completed steps or current step
    if (stepIndex <= currentStep) {
      setCurrentStep(stepIndex);
      setIsMobileMenuOpen(false);
    }
  };
  const renderStepContent = () => {
    switch (steps[currentStep].id) {
      case 'userType':
        return (
          <UserTypeSelector
            userType={userType}
            onSelect={setUserType}
            onNext={handleNext}
          />
        );
      case 'template':
        return (
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onSelect={setSelectedTemplate}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 'personal':
        return (
          <PersonalInfo
            data={formData.personalInfo}
            onChange={(data) => updateFormData('personalInfo', data)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 'experience':
        return (
          <Experience
            data={formData.experience}
            userType={userType}
            onChange={(data) => updateFormData('experience', data)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 'education':
        return (
          <Education
            data={formData.education}
            onChange={(data) => updateFormData('education', data)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 'skills':
        return (
          <Skills
            data={formData.skills}
            onChange={(data) => updateFormData('skills', data)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 'projects':
        return (
          <Projects
            data={formData.projects}
            userType={userType}
            onChange={(data) => updateFormData('projects', data)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 'preview':
        return (
          <ResumePreview
            formData={formData}
            template={selectedTemplate}
            onPrevious={handlePrevious}
            onExport={handleExportPDF}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {/* Mobile Menu Toggle */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu} />
      )}

      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Resume Builder</h1>
          <p>Create your professional resume</p>
        </div>
        <nav className="sidebar-nav">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isClickable = index <= currentStep;
            return (
              <div
                key={step.id}
                className={`nav-item ${index === currentStep ? 'active' : ''} ${
                  index < currentStep ? 'completed' : ''
                } ${isClickable ? 'clickable' : ''}`}
                onClick={() => isClickable && handleStepClick(index)}
                style={{ 
                  cursor: isClickable ? 'pointer' : 'default',
                  opacity: isClickable ? 1 : 0.6
                }}
              >
                <div className="nav-icon">
                  <Icon size={20} />
                </div>
                <span className="nav-title">{step.title}</span>
              </div>
            );
          })}
        </nav>
      </div>
      <div className="main-content">
        <div className="step-indicator">
          <div className="step-progress">
            <div
              className="step-progress-fill"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <span className="step-text">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
        <div className="content-area">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
}

export default App;