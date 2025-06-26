import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload, FiFile, FiCheck, FiX } from 'react-icons/fi'
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
      console.log(parsedData, "nfvjkdl");
      setResumeData(parsedData)
      setUploadedFile(file)
      setUploadStatus('success')
    } catch (err) {
      setError(err.message || 'Failed to parse resume. Please try again.')
      setUploadStatus('error')
    }
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
  const handleCreateNew = () => {
    setResumeData({})
    onNext()
  }

  return (
    <div className="upload-section fade-in">
      <div className="text-center mb-4">
        <h1 className="section-title">Upload Your Resume</h1>
        <p className="section-subtitle">
          Upload your existing resume in PDF or Word format to get started or create a new resume
        </p>
        <span>
          <button className="btn btn-primary" onClick={handleCreateNew}>
            Create a new Resume
          </button>
        </span>

      </div>

      <div className="card upload-card">
        <div
          {...getRootProps()}
          className={`dropzone ${isDragActive ? 'active' : ''} ${uploadStatus === 'success' ? 'success' : ''}`}
        >
          <input {...getInputProps()} />

          {uploadStatus === 'idle' && (
            <>
              <FiUpload className="upload-icon" />
              <h3>Drag & drop your resume here</h3>
              <p>or click to browse your files</p>
              <div className="file-types">
                <span>Supported formats: PDF, DOC, DOCX</span>
              </div>
            </>
          )}

          {uploadStatus === 'uploading' && (
            <>
              <div className="loading"></div>
              <h3>Processing your resume...</h3>
              <p>This may take a few moments</p>
            </>
          )}

          {uploadStatus === 'success' && (
            <>
              <FiCheck className="upload-icon success" />
              <h3>Resume uploaded successfully!</h3>
              <div className="file-info">
                <FiFile className="file-icon" />
                <span>{uploadedFile?.name}</span>
              </div>
            </>
          )}

          {uploadStatus === 'error' && (
            <>
              <FiX className="upload-icon error" />
              <h3>Upload failed</h3>
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

        {uploadStatus === 'success' && (
          <div className="upload-actions">
            <button className="btn btn-primary" onClick={handleNext}>
              Continue to Edit
            </button>
          </div>
        )}
      </div>

      <div className="upload-tips">
        <h4>Tips for best results:</h4>
        <ul>
          <li>Use a well-structured resume with clear sections</li>
          <li>Ensure text is selectable (not scanned images)</li>
          <li>File size should be under 10MB</li>
          <li>Include standard sections: Contact, Summary, Experience, Education, Skills</li>
        </ul>
      </div>
    </div>
  )
}

export default UploadSection