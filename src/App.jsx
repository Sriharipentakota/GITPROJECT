import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import UploadSection from './components/UploadSection'
import ResumeEditor from './components/ResumeEditor'
import ExportSection from './components/ExportSection'
import PortfolioWebsite from './components/PortfolioWebsite'
import { ResumeProvider } from './context/ResumeContext'

function App() {
  const [currentStep, setCurrentStep] = useState('upload') // upload, edit, export, portfolio

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
              <UploadSection onNext={() => setCurrentStep('edit')} />
            )}
            
            {currentStep === 'edit' && (
              <ResumeEditor 
                onBack={() => setCurrentStep('upload')}
                onNext={() => setCurrentStep('export')}
                onPortfolio={() => setCurrentStep('portfolio')}
              />
            )}
            
            {currentStep === 'export' && (
              <ExportSection 
                onBack={() => setCurrentStep('edit')}
                onPortfolio={() => setCurrentStep('portfolio')}
              />
            )}

            {currentStep === 'portfolio' && (
              <PortfolioWebsite onBack={() => setCurrentStep('export')} />
            )}
          </div>
        </main>
      </div>
    </ResumeProvider>
  )
}

export default App