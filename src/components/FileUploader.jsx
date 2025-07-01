import { useState, useRef } from 'react'
import { Upload, FileText, AlertCircle } from 'lucide-react'
import { extractTextFromPDF } from '../utils/pdfParser'
import { extractTextFromWord } from '../utils/wordParser'
import { parseResumeData } from '../utils/resumeParser'

const FileUploader = ({ onDataExtracted, isLoading, setIsLoading }) => {
  const [dragActive, setDragActive] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = async (file) => {
    setError('')
    setIsLoading(true)

    try {
      let extractedText = ''
      const fileType = file.type
      const fileName = file.name.toLowerCase()

      if (fileType === 'application/pdf' || fileName.endsWith('.pdf')) {
        extractedText = await extractTextFromPDF(file)
      } else if (
        fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        fileName.endsWith('.docx')
      ) {
        extractedText = await extractTextFromWord(file)
      } else {
        throw new Error('Please upload a PDF or Word document (.pdf or .docx)')
      }

      if (!extractedText.trim()) {
        throw new Error('No text could be extracted from the document')
      }

      const parsedData = parseResumeData(extractedText)
      onDataExtracted(parsedData)
    } catch (err) {
      setError(err.message)
      console.error('Error processing file:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const onButtonClick = () => {
    fileInputRef.current?.click()
  }

  if (isLoading) {
    return (
      <div className="file-uploader">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <span className="loading-text">Processing your resume...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="file-uploader">
      <div
        className={`upload-area ${dragActive ? 'dragover' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <Upload size={48} className="upload-icon" />
        <div className="upload-text">
          Drop your resume here or click to browse
        </div>
        <div className="upload-subtext">
          Supports PDF and Word documents (.pdf, .docx)
        </div>
        <input
          ref={fileInputRef}
          type="file"
          className="file-input"
          accept=".pdf,.docx"
          onChange={handleChange}
        />
      </div>
      
      {error && (
        <div className="error-message" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '1rem',
          padding: '1rem',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '8px',
          color: '#dc2626'
        }}>
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

export default FileUploader