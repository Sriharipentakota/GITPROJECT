import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload, FiFile, FiCheck, FiX, FiPlus, FiFileText } from 'react-icons/fi'
import { useResumeContext } from '../context/ResumeContext'
import { parseResumeFile } from '../utils/resumeParser'

function UploadSection({ onNext }) {
  const [uploadStatus, setUploadStatus] = useState('idle') // idle, uploading, success, error
  const [uploadedFile, setUploadedFile] = useState(null)
  const [error, setError] = useState('')
  const { setResumeData } = useResumeContext()

  const processFile = async (file) => {
    setUploadStatus('uploading')
    setError('')
    
    try {
      const parsedData = await parseResumeFile(file)
      setResumeData(parsedData)
      setUploadedFile(file)
      setUploadStatus('success')
    } catch (err) {
      setError(err.message || 'Failed to parse resume. Please try again.')
      setUploadStatus('error')
    }
  }

  const createNewResume = () => {
    const newResumeData = {
      personalInfo: {
        name: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        website: '',
        github: ''
      },
      profilePhoto: null,
      summary: '',
      experience: [],
      education: [],
      skills: [],
      certifications: [],
      projects: [],
      achievements: [],
      languages: [],
      interests: []
    }
    
    setResumeData(newResumeData)
    setUploadStatus('success')
    setUploadedFile({ name: 'New Resume' })
  }

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      setError('Please upload only PDF or Word documents')
      setUploadStatus('error')
      return
    }

    if (acceptedFiles.length > 0) {
      processFile(acceptedFiles[0])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024 // 10MB
  })

  const handleNext = () => {
    if (uploadStatus === 'success') {
      onNext()
    }
  }

  return (
    <div className="upload-section fade-in">
      <div className="text-center mb-4">
        <h1 className="section-title">Get Started</h1>
        <p className="section-subtitle">
          Upload your existing resume or create a new ATS-optimized resume from scratch
        </p>
      </div>

      <div className="upload-options">
        <div className="card upload-card">
          <div className="upload-option-header">
            <h3>Create New Resume</h3>
            <p>Build an ATS-optimized resume from scratch with our guided sections</p>
          </div>
          
          <div className="create-new-section">
            <div className="create-new-icon">
              <FiFileText />
            </div>
            <div className="create-new-content">
              <h4>Start Fresh</h4>
              <p>Perfect for creating a professional, ATS-friendly resume that scores 90+</p>
              <ul className="create-new-features">
                <li>✓ All essential sections included</li>
                <li>✓ ATS-optimized formatting</li>
                <li>✓ Professional templates</li>
                <li>✓ Keyword optimization</li>
              </ul>
            </div>
            <button className="btn btn-primary" onClick={createNewResume}>
              <FiPlus /> Create New Resume
            </button>
          </div>
        </div>

        <div className="upload-divider">
          <span>OR</span>
        </div>

        <div className="card upload-card">
          <div className="upload-option-header">
            <h3>Upload Existing Resume</h3>
            <p>Import your current resume and enhance it for better ATS compatibility</p>
          </div>
          
          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'active' : ''} ${uploadStatus === 'success' && uploadedFile?.name !== 'New Resume' ? 'success' : ''}`}
          >
            <input {...getInputProps()} />
            
            {uploadStatus === 'idle' && (
              <>
                <FiUpload className="upload-icon" />
                <h4>Drag & drop your resume here</h4>
                <p>or click to browse your files</p>
                <div className="file-types">
                  <span>Supported formats: PDF, DOC, DOCX</span>
                </div>
              </>
            )}

            {uploadStatus === 'uploading' && (
              <>
                <div className="loading"></div>
                <h4>Processing your resume...</h4>
                <p>This may take a few moments</p>
              </>
            )}

            {uploadStatus === 'success' && uploadedFile?.name !== 'New Resume' && (
              <>
                <FiCheck className="upload-icon success" />
                <h4>Resume uploaded successfully!</h4>
                <div className="file-info">
                  <FiFile className="file-icon" />
                  <span>{uploadedFile?.name}</span>
                </div>
              </>
            )}

            {uploadStatus === 'error' && (
              <>
                <FiX className="upload-icon error" />
                <h4>Upload failed</h4>
                <p className="error-message">{error}</p>
                <button 
                  className="btn btn-secondary mt-3"
                  onClick={() => {
                    setUploadStatus('idle')
                    setError('')
                    setUploadedFile(null)
                  }}
                >
                  Try Again
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {uploadStatus === 'success' && (
        <div className="upload-actions">
          <button className="btn btn-primary btn-large" onClick={handleNext}>
            Continue to Build Resume
          </button>
        </div>
      )}

      <div className="ats-guarantee">
        <div className="guarantee-content">
          <h4>🎯 ATS Score Guarantee</h4>
          <p>Our resume builder is designed to help you achieve a 90+ ATS score with:</p>
          <div className="guarantee-features">
            <div className="guarantee-feature">
              <span>📝</span>
              <div>
                <strong>Standard Section Headers</strong>
                <p>Uses ATS-recognized section names</p>
              </div>
            </div>
            <div className="guarantee-feature">
              <span>🎨</span>
              <div>
                <strong>Clean Formatting</strong>
                <p>Simple, readable layout without graphics</p>
              </div>
            </div>
            <div className="guarantee-feature">
              <span>🔤</span>
              <div>
                <strong>ATS-Friendly Fonts</strong>
                <p>Uses fonts that ATS systems can read</p>
              </div>
            </div>
            <div className="guarantee-feature">
              <span>🎯</span>
              <div>
                <strong>Keyword Optimization</strong>
                <p>Structure optimized for keyword scanning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadSection