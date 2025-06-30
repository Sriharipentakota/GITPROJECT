import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import UploadSection from './components/UploadSection'
import ResumeEditor from './components/ResumeEditor'
import ExportSection from './components/ExportSection'
import PortfolioWebsite from './components/PortfolioWebsite'
import { ResumeProvider } from './context/ResumeContext'

function App() {
  const [currentStep, setCurrentStep] = useState('upload') // upload, edit, export

  return (
    <ResumeProvider>
      <Routes>
        <Route path="/portfolio" element={<PortfolioWebsite />} />
        <Route path="/" element={
          <div className="app">
            <Header />
            <main className="main-content">
              <div className="container">
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

                {currentStep === 'upload' && (
                  <UploadSection onNext={() => setCurrentStep('edit')} />
                )}
                
                {currentStep === 'edit' && (
                  <ResumeEditor 
                    onBack={() => setCurrentStep('upload')}
                    onNext={() => setCurrentStep('export')}
                  />
                )}
                
                {currentStep === 'export' && (
                  <ExportSection onBack={() => setCurrentStep('edit')} />
                )}
              </div>
            </main>
          </div>
        } />
      </Routes>
    </ResumeProvider>
  )
}

export default App