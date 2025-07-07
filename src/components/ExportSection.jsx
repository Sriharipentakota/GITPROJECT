import { useState } from 'react'
import { FiDownload, FiFileText, FiFile, FiCheck, FiMonitor, FiExternalLink } from 'react-icons/fi'
import { useResumeContext } from '../context/ResumeContext'
import { exportToPDF, exportToWord } from '../utils/resumeExporter'

function ExportSection({ onBack, onPortfolio }) {
  const { resumeData } = useResumeContext()
  const [exportStatus, setExportStatus] = useState('idle') // idle, exporting, success, error
  const [exportType, setExportType] = useState('')
  const [error, setError] = useState('')

  const handleExport = async (type) => {
    setExportStatus('exporting')
    setExportType(type)
    setError('')

    try {
      if (type === 'pdf') {
        await exportToPDF(resumeData)
      } else if (type === 'word') {
        await exportToWord(resumeData)
      }
      setExportStatus('success')
    } catch (err) {
      setError(err.message || 'Export failed. Please try again.')
      setExportStatus('error')
    }
  }

  return (
    <div className="export-section fade-in">
      <div className="text-center mb-4">
        <h1 className="section-title">Export Your Resume & Create Portfolio</h1>
        <p className="section-subtitle">
          Download your ATS-optimized resume and create a stunning portfolio website
        </p>
      </div>

      <div className="export-grid">
        <div className="export-category">
          <h2>📄 Resume Downloads</h2>
          <div className="export-options">
            <div className="card export-card">
              <div className="export-option">
                <div className="export-icon">
                  <FiFileText />
                </div>
                <div className="export-info">
                  <h3>PDF Format</h3>
                  <p>Perfect for online applications and email attachments</p>
                  <ul className="export-features">
                    <li>✓ ATS-Friendly formatting</li>
                    <li>✓ Professional appearance</li>
                    <li>✓ Universal compatibility</li>
                    <li>✓ Optimized for 90%+ ATS score</li>
                  </ul>
                </div>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleExport('pdf')}
                  disabled={exportStatus === 'exporting'}
                >
                  {exportStatus === 'exporting' && exportType === 'pdf' ? (
                    <>
                      <div className="loading"></div>
                      Exporting...
                    </>
                  ) : (
                    <>
                      <FiDownload />
                      Download PDF
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="card export-card">
              <div className="export-option">
                <div className="export-icon">
                  <FiFile />
                </div>
                <div className="export-info">
                  <h3>Word Format</h3>
                  <p>Editable format for further customization</p>
                  <ul className="export-features">
                    <li>✓ Fully editable</li>
                    <li>✓ ATS-Friendly structure</li>
                    <li>✓ Easy to customize</li>
                    <li>✓ Compatible with all systems</li>
                  </ul>
                </div>
                <button 
                  className="btn btn-outline"
                  onClick={() => handleExport('word')}
                  disabled={exportStatus === 'exporting'}
                >
                  {exportStatus === 'exporting' && exportType === 'word' ? (
                    <>
                      <div className="loading"></div>
                      Exporting...
                    </>
                  ) : (
                    <>
                      <FiDownload />
                      Download Word
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="export-category">
          <h2>🌐 Portfolio Website</h2>
          <div className="portfolio-section">
            <div className="card portfolio-card">
              <div className="portfolio-option">
                <div className="portfolio-icon">
                  <FiMonitor />
                </div>
                <div className="portfolio-info">
                  <h3>Create Portfolio Website</h3>
                  <p>Generate a stunning, responsive portfolio website from your resume data</p>
                  <ul className="portfolio-features">
                    <li>✓ Modern, responsive design</li>
                    <li>✓ Project showcase gallery</li>
                    <li>✓ Contact form integration</li>
                    <li>✓ Social media links</li>
                    <li>✓ Professional animations</li>
                  </ul>
                </div>
                <button 
                  className="btn btn-success btn-large"
                  onClick={onPortfolio}
                >
                  <FiExternalLink />
                  Create Portfolio Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {exportStatus === 'success' && (
        <div className="export-success">
          <div className="success-message">
            <FiCheck className="success-icon" />
            <h3>Export Successful!</h3>
            <p>Your ATS-optimized resume has been downloaded successfully.</p>
          </div>
        </div>
      )}

      {exportStatus === 'error' && (
        <div className="export-error">
          <div className="error-message">
            <h3>Export Failed</h3>
            <p>{error}</p>
            <button 
              className="btn btn-secondary mt-2"
              onClick={() => setExportStatus('idle')}
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      <div className="export-actions">
        <button className="btn btn-secondary" onClick={onBack}>
          Back to Edit
        </button>
      </div>
    </div>
  )
}

export default ExportSection