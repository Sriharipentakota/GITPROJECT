import { useState } from 'react'
import { FiEdit3, FiUser, FiAward, FiGlobe, FiHeart, FiMonitor, FiMessageSquare, FiTool, FiBriefcase, FiBook, FiStar } from 'react-icons/fi'
import { useResumeContext } from '../context/ResumeContext'
import EditableSection from './EditableSection'

function ResumeEditor({ onBack, onNext, onPortfolio }) {
  const { resumeData, updateSection, candidateType } = useResumeContext()
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

  // Define sections based on candidate type
  const getSections = () => {
    const baseSections = [
      { key: 'personalInfo', title: 'Personal Information', icon: FiEdit3, required: true, category: 'resume' },
      { key: 'profilePhoto', title: 'Profile Photo', icon: FiUser, required: false, category: 'resume' },
      { key: 'summary', title: candidateType === 'fresher' ? 'Career Objective' : 'Professional Summary', icon: FiEdit3, required: true, category: 'resume' },
      { key: 'education', title: 'Education', icon: FiEdit3, required: true, category: 'resume' },
      { key: 'skills', title: 'Technical Skills', icon: FiEdit3, required: true, category: 'resume' },
    ]

    if (candidateType === 'fresher') {
      return [
        ...baseSections,
        { key: 'academicProjects', title: 'Academic Projects', icon: FiBook, required: true, category: 'resume' },
        { key: 'internships', title: 'Internships', icon: FiBriefcase, required: false, category: 'resume' },
        { key: 'certifications', title: 'Certifications', icon: FiAward, required: false, category: 'resume' },
        { key: 'languages', title: 'Languages', icon: FiGlobe, required: false, category: 'resume' },
        { key: 'interests', title: 'Interests', icon: FiHeart, required: false, category: 'resume' },

        // Portfolio sections
        { key: 'portfolioInfo', title: 'Portfolio Information', icon: FiMonitor, required: false, category: 'portfolio' },
        { key: 'aboutMe', title: 'About Me (Extended)', icon: FiUser, required: false, category: 'portfolio' },
        { key: 'socialLinks', title: 'Social Media Links', icon: FiGlobe, required: false, category: 'portfolio' },
        { key: 'testimonials', title: 'Testimonials', icon: FiMessageSquare, required: false, category: 'portfolio' },
        { key: 'services', title: 'Services Offered', icon: FiTool, required: false, category: 'portfolio' }
      ]
    } else {
      return [
        ...baseSections,
        { key: 'experience', title: 'Work Experience', icon: FiBriefcase, required: true, category: 'resume' },
        { key: 'projects', title: 'Professional Projects', icon: FiEdit3, required: false, category: 'resume' },
        { key: 'certifications', title: 'Certifications', icon: FiAward, required: false, category: 'resume' },
        { key: 'languages', title: 'Languages', icon: FiGlobe, required: false, category: 'resume' },
        { key: 'interests', title: 'Interests', icon: FiHeart, required: false, category: 'resume' },

        // Portfolio sections
        { key: 'portfolioInfo', title: 'Portfolio Information', icon: FiMonitor, required: false, category: 'portfolio' },
        { key: 'aboutMe', title: 'About Me (Extended)', icon: FiUser, required: false, category: 'portfolio' },
        { key: 'socialLinks', title: 'Social Media Links', icon: FiGlobe, required: false, category: 'portfolio' },
        { key: 'testimonials', title: 'Client Testimonials', icon: FiMessageSquare, required: false, category: 'portfolio' },
        { key: 'services', title: 'Services Offered', icon: FiTool, required: false, category: 'portfolio' }
      ]
    }
  }

  const sections = getSections()

  const isRequiredSectionComplete = (section) => {
    const data = resumeData[section.key]

    if (section.key === 'personalInfo') {
      return data && data.name && data.name.trim() !== '' &&
        data.email && data.email.trim() !== '' &&
        data.phone && data.phone.trim() !== '' &&
        data.location && data.location.trim() !== ''
    }

    if (section.key === 'summary') {
      return data && typeof data === 'string' && data.trim().length >= 50
    }

    if (section.key === 'experience') {
      return Array.isArray(data) && data.length > 0 &&
        data.every(exp => exp.position && exp.position.trim() !== '' &&
          exp.company && exp.company.trim() !== '' &&
          exp.duration && exp.duration.trim() !== '' &&
          exp.description && exp.description.trim() !== '')
    }

    if (section.key === 'academicProjects') {
      return Array.isArray(data) && data.length > 0 &&
        data.every(proj => proj.name && proj.name.trim() !== '' &&
          proj.description && proj.description.trim() !== '')
    }

    if (section.key === 'education') {
      return Array.isArray(data) && data.length > 0 &&
        data.every(edu => edu.degree && edu.degree.trim() !== '' &&
          edu.school && edu.school.trim() !== '' &&
          edu.year && edu.year.trim() !== '')
    }

    if (section.key === 'skills') {
      return Array.isArray(data) && data.length > 0 &&
        data.every(skill => skill && skill.toString().trim() !== '')
    }

    return false
  }

  const getCompletionStatus = () => {
    const requiredSections = sections.filter(s => s.required)
    const completedRequired = requiredSections.filter(section => isRequiredSectionComplete(section))

    return {
      completed: completedRequired.length,
      total: requiredSections.length,
      percentage: Math.round((completedRequired.length / requiredSections.length) * 100),
      incompleteSections: requiredSections.filter(section => !isRequiredSectionComplete(section))
    }
  }

  const getPortfolioCompletionStatus = () => {
    const portfolioSections = sections.filter(s => s.category === 'portfolio')
    const completedPortfolio = portfolioSections.filter(section => {
      const data = resumeData[section.key]
      if (Array.isArray(data)) {
        return data.length > 0
      }
      if (typeof data === 'object' && data !== null) {
        return Object.values(data).some(value => value && value.toString().trim() !== '')
      }
      return data && data.toString().trim() !== ''
    })

    return {
      completed: completedPortfolio.length,
      total: portfolioSections.length,
      percentage: Math.round((completedPortfolio.length / portfolioSections.length) * 100)
    }
  }

  const completion = getCompletionStatus()
  const portfolioCompletion = getPortfolioCompletionStatus()
  const resumeSections = sections.filter(s => s.category === 'resume')
  const portfolioSections = sections.filter(s => s.category === 'portfolio')

  const handleCompleteRequiredSections = () => {
    if (completion.incompleteSections.length > 0) {
      setEditingSection(completion.incompleteSections[0].key)
    }
  }

  return (
    <div className="resume-editor fade-in">
      <div className="text-center mb-4">
        <h1 className="section-title">Build Your ATS-Optimized Resume</h1>
        <p className="section-subtitle">
          Complete all sections to create a professional {candidateType} resume and portfolio website
        </p>

        {/* Candidate Type Badge */}
        <div className="candidate-type-badge">
          {candidateType === 'fresher' ? <FiUser /> : <FiBriefcase />}
          <span>{candidateType === 'fresher' ? 'Fresher Profile' : 'Experienced Profile'}</span>
        </div>

        <div className="completion-status">
          <div className="completion-section">
            <h4>Resume Completion</h4>
            <div className="completion-bar">
              <div
                className="completion-progress"
                style={{ width: `${completion.percentage}%` }}
              ></div>
            </div>
            <span className="completion-text">
              {completion.completed}/{completion.total} required sections completed ({completion.percentage}%)
            </span>
            {completion.incompleteSections.length > 0 && (
              <div className="incomplete-sections">
                <small>Incomplete: {completion.incompleteSections.map(s => s.title).join(', ')}</small>
              </div>
            )}
          </div>

          <div className="completion-section">
            <h4>Portfolio Enhancement</h4>
            <div className="completion-bar">
              <div
                className="completion-progress portfolio-progress"
                style={{ width: `${portfolioCompletion.percentage}%` }}
              ></div>
            </div>
            <span className="completion-text">
              {portfolioCompletion.completed}/{portfolioCompletion.total} portfolio sections completed ({portfolioCompletion.percentage}%)
            </span>
          </div>
        </div>
      </div>

      <div className="editor-layout">
        <div className="editor-sidebar">
          <div className="section-category">
            <h3>📄 Resume Sections</h3>
            <div className="section-list">
              {resumeSections.map((section) => {
                const isComplete = section.required ? isRequiredSectionComplete(section) :
                  resumeData[section.key] && (
                    Array.isArray(resumeData[section.key])
                      ? resumeData[section.key].length > 0
                      : resumeData[section.key]
                  )

                return (
                  <div
                    key={section.key}
                    className={`section-item ${editingSection === section.key ? 'active' : ''} ${isComplete ? 'completed' : ''}`}
                    onClick={() => setEditingSection(section.key)}
                  >
                    <section.icon className="section-icon" />
                    <div className="section-info">
                      <span className="section-name">{section.title}</span>
                      {section.required && <span className="required-badge">Required</span>}
                    </div>
                    {isComplete && (
                      <div className="section-status">
                        <FiEdit3 size={12} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="section-category">
            <h3>🌐 Portfolio Sections</h3>
            <div className="section-list">
              {portfolioSections.map((section) => {
                const hasData = resumeData[section.key] && (
                  Array.isArray(resumeData[section.key])
                    ? resumeData[section.key].length > 0
                    : (typeof resumeData[section.key] === 'object' && resumeData[section.key] !== null)
                      ? Object.values(resumeData[section.key]).some(value => value && value.toString().trim() !== '')
                      : resumeData[section.key] && resumeData[section.key].toString().trim() !== ''
                )

                return (
                  <div
                    key={section.key}
                    className={`section-item ${editingSection === section.key ? 'active' : ''} ${hasData ? 'completed' : ''}`}
                    onClick={() => setEditingSection(section.key)}
                  >
                    <section.icon className="section-icon" />
                    <div className="section-info">
                      <span className="section-name">{section.title}</span>
                      <span className="portfolio-badge">Portfolio</span>
                    </div>
                    {hasData && (
                      <div className="section-status">
                        <FiEdit3 size={12} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="ats-tips">
            <h4>{candidateType === 'fresher' ? 'Fresher Resume Tips' : 'ATS Optimization Tips'}</h4>
            <ul>
              {candidateType === 'fresher' ? (
                <>
                  <li>Highlight academic achievements</li>
                  <li>Include relevant coursework</li>
                  <li>Showcase projects and internships</li>
                  <li>Emphasize skills and certifications</li>
                  <li>Add extracurricular activities</li>
                </>
              ) : (
                <>
                  <li>Use standard section headers</li>
                  <li>Include relevant keywords</li>
                  <li>Keep formatting simple</li>
                  <li>Use bullet points for achievements</li>
                  <li>Include quantifiable results</li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="editor-main">
          {editingSection ? (
            <EditableSection
              sectionKey={editingSection}
              sectionTitle={sections.find(s => s.key === editingSection)?.title}
              data={resumeData[editingSection]}
              candidateType={candidateType}
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
                <p>Choose a section from the sidebar to start building your {candidateType} resume</p>

                <div className="quick-start">
                  <h4>Quick Start Guide for {candidateType === 'fresher' ? 'Freshers' : 'Experienced Professionals'}:</h4>
                  <div className="quick-start-columns">
                    <div className="quick-start-column">
                      <h5>📄 Essential Sections:</h5>
                      <ol>
                        <li>Fill in your Personal Information</li>
                        <li>Write a compelling {candidateType === 'fresher' ? 'Career Objective' : 'Professional Summary'}</li>
                        <li>Add your Education details</li>
                        <li>{candidateType === 'fresher' ? 'Include Academic Projects' : 'Add Work Experience'}</li>
                        <li>List your Technical Skills</li>
                      </ol>
                    </div>
                    <div className="quick-start-column">
                      <h5>🌐 Portfolio Enhancement:</h5>
                      <ol>
                        <li>Add Portfolio Information</li>
                        <li>Write an extended About Me</li>
                        <li>Include Social Media Links</li>
                        <li>Add Testimonials</li>
                        <li>List Services You Offer</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="editor-preview">
          <h3>Live Preview</h3>
          <div className="resume-preview">
            <ResumePreview data={resumeData} candidateType={candidateType} />
          </div>
        </div>
      </div>

      <div className="editor-actions">
        <button className="btn btn-secondary" onClick={onBack}>
          Back to Start
        </button>
        <div className="action-buttons">
          <button className="btn btn-outline" onClick={onPortfolio}>
            View Portfolio
          </button>
          <button
            className="btn btn-primary"
            onClick={completion.percentage < 100 ? handleCompleteRequiredSections : onNext}
          >
            {completion.percentage < 100 ?
              `Complete Required Sections (${completion.percentage}%)` :
              'Continue to Export'
            }
          </button>
        </div>
      </div>
    </div>
  )
}

function ResumePreview({ data, candidateType }) {
  return (
    <div className="resume-preview-content">
      {data.profilePhoto && data.profilePhoto.url && (
        <div className="preview-photo">
          <img src={data.profilePhoto.url} alt="Profile" className="profile-photo" />
        </div>
      )}

      {data.personalInfo && (
        <div className="preview-section">
          <h2>{data.personalInfo.name || 'Your Name'}</h2>
          <div className="contact-info">
            {data.personalInfo.email && <span>{String(data.personalInfo.email)}</span>}
            {data.personalInfo.phone && <span>{String(data.personalInfo.phone)}</span>}
            {data.personalInfo.location && <span>{String(data.personalInfo.location)}</span>}
          </div>
        </div>
      )}

      {data.summary && (
        <div className="preview-section">
          <h3>{candidateType === 'fresher' ? 'Career Objective' : 'Professional Summary'}</h3>
          <div
            className="summary-html"
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
        </div>
  )
}

{
  data.education && data.education.length > 0 && (
    <div className="preview-section">
      <h3>Education</h3>
      {data.education.map((edu, index) => (
        <div key={index} className="education-item">
          <h4>{String(edu.degree || '')}</h4>
          <div className="school-info">
            <span>{String(edu.school || '')}</span>
            <span>{String(edu.year || '')}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

{
  candidateType === 'fresher' && data.academicProjects && data.academicProjects.length > 0 && (
    <div className="preview-section">
      <h3>Academic Projects</h3>
      {data.academicProjects.map((project, index) => (
        <div key={index} className="project-item">
          <h4>{String(project.name || '')}</h4>
          <p>{String(project.description || '')}</p>
        </div>
      ))}
    </div>
  )
}

{
  candidateType === 'experienced' && data.experience && data.experience.length > 0 && (
    <div className="preview-section">
      <h3>Professional Experience</h3>
      {data.experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <h4>{String(exp.position || '')}</h4>
          <div className="company-info">
            <span>{String(exp.company || '')}</span>
            <span>{String(exp.duration || '')}</span>
          </div>
          <p>{String(exp.description || '')}</p>
        </div>
      ))}
    </div>
  )
}

{
  data.skills && data.skills.length > 0 && (
    <div className="preview-section">
      <h3>Technical Skills</h3>
      <div className="skills-list">
        {data.skills.map((skill, index) => (
          <span key={index} className="skill-tag">{String(skill)}</span>
        ))}
      </div>
    </div>
  )
}
    </div >
  )
}

export default ResumeEditor