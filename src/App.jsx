import { useState } from 'react'
import FileUploader from './components/FileUploader'
import Portfolio from './components/Portfolio'
import './App.css'

function App() {
  const [portfolioData, setPortfolioData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleDataExtracted = (data) => {
    setPortfolioData(data)
  }

  const handleReset = () => {
    setPortfolioData(null)
  }

  return (
    <div className="app">
      {!portfolioData ? (
        <div className="upload-container">
          <div className="hero-section">
            <h1 className="hero-title">
              Create Your Perfect Portfolio
            </h1>
            <p className="hero-subtitle">
              Upload your resume in PDF or Word format and watch it transform into a beautiful portfolio website
            </p>
          </div>
          <FileUploader 
            onDataExtracted={handleDataExtracted}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
      ) : (
        <Portfolio 
          data={portfolioData} 
          onReset={handleReset}
        />
      )}
    </div>
  )
}

export default App