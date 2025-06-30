import { useState } from 'react'
import { FiEdit3, FiSave, FiX, FiPlus, FiTrash2 } from 'react-icons/fi'
import { useResumeContext } from '../context/ResumeContext'
import EditableSection from './EditableSection'

function ResumeEditor({ onBack, onNext }) {
  const { resumeData, updateSection } = useResumeContext()
  const [editingSection, setEditingSection] = useState(null)

  if (!resumeData) {
    return (
      <div className="text-center">
        <p>No resume data available. Please go back and upload a resume.</p>
        <button className="btn btn-secondary mt-3" onClick={onBack}>
          Go Back
        </button>
      </div>
    )
  }

  const sections = [
    // { key: 'ProfilePhoto', title: 'Profile Photo', icon: FiEdit3 },
    { key: 'personalInfo', title: 'Personal Information', icon: FiEdit3 },
    { key: 'summary', title: 'Professional Summary', icon: FiEdit3 },
    { key: 'experience', title: 'Work Experience', icon: FiEdit3 },
    { key: 'education', title: 'Education', icon: FiEdit3 },
    { key: 'skills', title: 'Skills', icon: FiEdit3 },
    { key: 'certifications', title: 'Certifications', icon: FiEdit3 },
    { key: 'projects', title: 'Projects', icon: FiEdit3 }
  ]

  return (
    <div className="resume-editor fade-in">
      <div className="text-center mb-4">
        <h1 className="section-title">Edit Your Resume</h1>
        <p className="section-subtitle">
          Review and edit each section to create your perfect resume
        </p>
      </div>

      <div className="editor-layout">
        <div className="editor-sidebar">
          <h3>Resume Sections</h3>
          <div className="section-list">
            {sections.map((section) => (
              <div
                key={section.key}
                className={`section-item ${editingSection === section.key ? 'active' : ''}`}
                onClick={() => setEditingSection(section.key)}
              >
                <section.icon className="section-icon" />
                <span>{section.title}</span>
                {resumeData[section.key] && (
                  <div className="section-status">
                    <FiEdit3 size={12} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="editor-main">
          {editingSection ? (
            <EditableSection
              sectionKey={editingSection}
              sectionTitle={sections.find(s => s.key === editingSection)?.title}
              data={resumeData[editingSection]}
              onSave={(data) => {
                updateSection(editingSection, data)
                setEditingSection(null)
              }}
              onCancel={() => setEditingSection(null)}
            />
          ) : (
            <div className="editor-placeholder">
              <div className="placeholder-content">
                <FiEdit3 className="placeholder-icon" />
                <h3>Select a section to edit</h3>
                <p>Choose a section from the sidebar to start editing your resume</p>
              </div>
            </div>
          )}
        </div>

        <div className="editor-preview">
          <h3>Resume Preview</h3>
          <div className="resume-preview">
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </div>

      <div className="editor-actions">
        <button className="btn btn-secondary" onClick={onBack}>
          Back to Upload
        </button>
        <button className="btn btn-primary" onClick={onNext}>
          Continue to Export
        </button>
      </div>
    </div>
  )
}

function ResumePreview({ data }) {
  console.log(data, "data");
  return (
    <div className="resume-preview-content">
      {data.personalInfo && (
        <div className="preview-section">
          <h2>{data.personalInfo.name || 'Your Name'}</h2>
          <div className="contact-info">
            {((data.personalInfo?.profilePhoto) || "") && (
              <img src={data.personalInfo.profilePhoto} alt="Profile" style={{ width: 120, height: 120, borderRadius: '50%' }} />
            )}
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
          </div>
        </div>
      )}

      {data.summary && (
        <div className="preview-section">
          <h3>Professional Summary</h3>
          <p>{data.summary}</p>
        </div>
      )}

      {data.experience && data.experience.length > 0 && (
        <div className="preview-section">
          <h3>Work Experience</h3>
          {data.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h4>{exp.position}</h4>
              <div className="company-info">
                <span>{exp.company}</span>
                <span>{exp.duration}</span>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.education && data.education.length > 0 && (
        <div className="preview-section">
          <h3>Education</h3>
          {data.education.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.degree}</h4>
              <div className="school-info">
                <span>{edu.school}</span>
                <span>{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {data.skills && data.skills.length > 0 && (
        <div className="preview-section">
          <h3>Skills</h3>
          <div className="skills-list">
            {data.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ResumeEditor