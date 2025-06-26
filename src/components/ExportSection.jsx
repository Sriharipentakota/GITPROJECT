import { useState } from 'react'
import { FiDownload, FiFileText, FiFile, FiCheck } from 'react-icons/fi'
import { useResumeContext } from '../context/ResumeContext'
import { exportToPDF, exportToWord } from '../utils/resumeExporter'

function ExportSection({ onBack }) {
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
        <h1 className="section-title">Export Your Resume</h1>
        <p className="section-subtitle">
          Download your ATS-optimized resume in your preferred format
        </p>
      </div>

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

      <div className="ats-info">
        <h3>ATS Optimization Features</h3>
        <div className="ats-features">
          <div className="ats-feature">
            <FiCheck className="feature-icon" />
            <div>
              <h4>Clean Formatting</h4>
              <p>Simple, readable layout without complex graphics or tables</p>
            </div>
          </div>
          <div className="ats-feature">
            <FiCheck className="feature-icon" />
            <div>
              <h4>Standard Sections</h4>
              <p>Organized with standard section headers that ATS systems recognize</p>
            </div>
          </div>
          <div className="ats-feature">
            <FiCheck className="feature-icon" />
            <div>
              <h4>Keyword Optimization</h4>
              <p>Structure optimized for keyword scanning and parsing</p>
            </div>
          </div>
          <div className="ats-feature">
            <FiCheck className="feature-icon" />
            <div>
              <h4>Compatible Fonts</h4>
              <p>Uses ATS-friendly fonts that are easily readable by systems</p>
            </div>
          </div>
        </div>
      </div>

      <div className="export-actions">
        <button className="btn btn-secondary" onClick={onBack}>
          Back to Edit
        </button>
      </div>
    </div>
  )
}

export default ExportSection