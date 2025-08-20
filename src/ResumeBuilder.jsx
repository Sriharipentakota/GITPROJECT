import { useState } from 'react'
import Header from './resumeBuilder/components/Header'
import UploadSection from './resumeBuilder/components/UploadSection'
import ResumeEditor from './resumeBuilder/components/ResumeEditor'
import ExportSection from './resumeBuilder/components/ExportSection'
import PortfolioWebsite from './resumeBuilder/components/PortfolioWebsite'
import { ResumeProvider } from './resumeBuilder/context/ResumeContext'

function ResumeBuilder() {
  // Restore last step from localStorage if available
  const [currentStep, setCurrentStep] = useState(() => {
    return localStorage.getItem('resumeCurrentStep') || 'upload';
  });

  // Persist step changes to localStorage
  const setStepAndPersist = (step) => {
    setCurrentStep(step);
    localStorage.setItem('resumeCurrentStep', step);
  };

  return (
    <ResumeProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <div className="container">
            {currentStep !== 'portfolio' && (
              <div className="progress-bar">
                <div className={`step ${currentStep === 'upload' ? 'active' : currentStep === 'edit' || currentStep === 'export' ? 'completed' : ''}`}>
                  <span className="step-number">1</span>
                  <span className="step-label">Upload Resume</span>
                </div>
                <div className={`step ${currentStep === 'edit' ? 'active' : currentStep === 'export' ? 'completed' : ''}`}>
                  <span className="step-number">2</span>
                  <span className="step-label">Edit Sections</span>
                </div>
                <div className={`step ${currentStep === 'export' ? 'active' : ''}`}>
                  <span className="step-number">3</span>
                  <span className="step-label">Export Resume</span>
                </div>
              </div>
            )}

            {currentStep === 'upload' && (
              <UploadSection onNext={() => setStepAndPersist('edit')} />
            )}
            
            {currentStep === 'edit' && (
              <ResumeEditor 
                onBack={() => setStepAndPersist('upload')}
                onNext={() => setStepAndPersist('export')}
                onPortfolio={() => setStepAndPersist('portfolio')}
              />
            )}
            
            {currentStep === 'export' && (
              <ExportSection 
                onBack={() => setStepAndPersist('edit')}
                onPortfolio={() => setStepAndPersist('portfolio')}
              />
            )}

            {currentStep === 'portfolio' && (
              <PortfolioWebsite onBack={() => setStepAndPersist('export')} />
            )}
          </div>
        </main>
      </div>
    </ResumeProvider>
  )
}

export default ResumeBuilder;