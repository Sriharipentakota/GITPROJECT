import { useState, useEffect } from 'react'
import { FiSave, FiX, FiPlus, FiTrash2, FiUpload, FiUser } from 'react-icons/fi'

function EditableSection({ sectionKey, sectionTitle, data, onSave, onCancel }) {
  const [formData, setFormData] = useState(data || getDefaultData(sectionKey))
  
  // Move all useState hooks to the top level
  const [newSkillInput, setNewSkillInput] = useState('')
  const [newAchievementInput, setNewAchievementInput] = useState('')
  const [newInterestInput, setNewInterestInput] = useState('')

  useEffect(() => {
    console.log('EditableSection useEffect - sectionKey:', sectionKey, 'data:', data)
    setFormData(data || getDefaultData(sectionKey))
    // Reset input states when switching sections
    setNewSkillInput('')
    setNewAchievementInput('')
    setNewInterestInput('')
  }, [data, sectionKey])

  const handleSave = () => {
    console.log('Saving section:', sectionKey, 'with formData:', formData)
    
    // Validate required fields before saving
    if (sectionKey === 'personalInfo') {
      if (!formData.name || !formData.email || !formData.phone || !formData.location) {
        alert('Please fill in all required fields (Name, Email, Phone, Location)')
        return
      }
    }
    
    if (sectionKey === 'summary') {
      if (!formData || formData.trim().length < 50) {
        alert('Please write a professional summary of at least 50 characters')
        return
      }
    }
    
    if (sectionKey === 'experience') {
      if (!Array.isArray(formData) || formData.length === 0) {
        alert('Please add at least one work experience')
        return
      }
      for (let exp of formData) {
        if (!exp.position || !exp.company || !exp.duration || !exp.description) {
          alert('Please fill in all required fields for each experience (Position, Company, Duration, Description)')
          return
        }
      }
    }
    
    if (sectionKey === 'education') {
      if (!Array.isArray(formData) || formData.length === 0) {
        alert('Please add at least one education entry')
        return
      }
      for (let edu of formData) {
        if (!edu.degree || !edu.school || !edu.year) {
          alert('Please fill in all required fields for each education (Degree, School, Year)')
          return
        }
      }
    }
    
    if (sectionKey === 'skills') {
      if (!Array.isArray(formData) || formData.length === 0) {
        alert('Please add at least one skill')
        return
      }
    }
    
    // Call the onSave function with the form data
    onSave(formData)
  }

  const renderForm = () => {
    switch (sectionKey) {
      case 'personalInfo':
        return renderPersonalInfoForm()
      case 'profilePhoto':
        return renderProfilePhotoForm()
      case 'summary':
        return renderSummaryForm()
      case 'experience':
        return renderExperienceForm()
      case 'education':
        return renderEducationForm()
      case 'skills':
        return renderSkillsForm()
      case 'certifications':
        return renderCertificationsForm()
      case 'projects':
        return renderProjectsForm()
      case 'achievements':
        return renderAchievementsForm()
      case 'languages':
        return renderLanguagesForm()
      case 'interests':
        return renderInterestsForm()
      case 'portfolioInfo':
        return renderPortfolioInfoForm()
      case 'socialLinks':
        return renderSocialLinksForm()
      case 'testimonials':
        return renderTestimonialsForm()
      case 'services':
        return renderServicesForm()
      case 'aboutMe':
        return renderAboutMeForm()
      default:
        return <div>Unknown section</div>
    }
  }

  const renderPersonalInfoForm = () => (
    <div className="form-grid">
      <div className="form-group">
        <label className="form-label">Full Name *</label>
        <input
          type="text"
          className="form-input"
          value={formData.name || ''}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Enter your full name"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Email Address *</label>
        <input
          type="email"
          className="form-input"
          value={formData.email || ''}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="your.email@example.com"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Phone Number *</label>
        <input
          type="tel"
          className="form-input"
          value={formData.phone || ''}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          placeholder="+1 (555) 123-4567"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Location *</label>
        <input
          type="text"
          className="form-input"
          value={formData.location || ''}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
          placeholder="City, State, Country"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">LinkedIn Profile</label>
        <input
          type="url"
          className="form-input"
          value={formData.linkedin || ''}
          onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Portfolio/Website</label>
        <input
          type="url"
          className="form-input"
          value={formData.website || ''}
          onChange={(e) => setFormData({...formData, website: e.target.value})}
          placeholder="https://yourportfolio.com"
        />
      </div>
      <div className="form-group">
        <label className="form-label">GitHub Profile</label>
        <input
          type="url"
          className="form-input"
          value={formData.github || ''}
          onChange={(e) => setFormData({...formData, github: e.target.value})}
          placeholder="https://github.com/yourusername"
        />
      </div>
    </div>
  )

  const renderProfilePhotoForm = () => {
    const handlePhotoUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
        // Validate file type
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
        if (!validTypes.includes(file.type)) {
          alert('Please upload a valid image file (JPG, PNG, GIF, or WebP)')
          return
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          alert('Please upload an image smaller than 5MB')
          return
        }

        const reader = new FileReader()
        reader.onload = (e) => {
          setFormData({
            file: file,
            url: e.target.result,
            name: file.name
          })
        }
        reader.readAsDataURL(file)
      }
    }

    const removePhoto = () => {
      setFormData(null)
    }

    return (
      <div className="profile-photo-form">
        <div className="form-group">
          <label className="form-label">Profile Photo (Optional)</label>
          <div className="photo-upload-area">
            {formData && formData.url ? (
              <div className="photo-preview">
                <img src={formData.url} alt="Profile" className="preview-image" />
                <div className="photo-actions">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => document.getElementById('photo-input').click()}
                  >
                    <FiUpload /> Change Photo
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={removePhoto}
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>
              </div>
            ) : (
              <div className="photo-upload-placeholder">
                <FiUser className="placeholder-icon" />
                <h4>Upload Profile Photo</h4>
                <p>Choose a professional photo for your resume and portfolio</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => document.getElementById('photo-input').click()}
                >
                  <FiUpload /> Choose Photo
                </button>
              </div>
            )}
            <input
              id="photo-input"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={{ display: 'none' }}
            />
          </div>
          <div className="form-help">
            <small>Supported formats: JPG, PNG, GIF, WebP. Max size: 5MB. This photo will be used in both your resume and portfolio website.</small>
          </div>
        </div>
      </div>
    )
  }

  const renderSummaryForm = () => (
    <div className="form-group">
      <label className="form-label">Professional Summary *</label>
      <textarea
        className="form-textarea"
        value={formData || ''}
        onChange={(e) => setFormData(e.target.value)}
        placeholder="Write a compelling 3-4 sentence professional summary highlighting your key achievements, skills, and career objectives. Include relevant keywords from your target job descriptions."
        rows={6}
        required
      />
      <div className="form-help">
        <small>
          <strong>ATS Tip:</strong> Include industry keywords and quantifiable achievements. 
          Aim for 50-100 words. This will also be used as your portfolio introduction.
        </small>
      </div>
    </div>
  )

  const renderExperienceForm = () => {
    const experiences = Array.isArray(formData) ? formData : []
    
    const addExperience = () => {
      const newExp = {
        position: '',
        company: '',
        duration: '',
        location: '',
        description: ''
      }
      setFormData([...experiences, newExp])
    }

    const updateExperience = (index, field, value) => {
      const updated = [...experiences]
      updated[index] = {...updated[index], [field]: value}
      setFormData(updated)
    }

    const removeExperience = (index) => {
      const updated = experiences.filter((_, i) => i !== index)
      setFormData(updated)
    }

    return (
      <div className="experience-form">
        <div className="section-help">
          <p><strong>ATS Tips:</strong> Use action verbs, include quantifiable results, and incorporate relevant keywords from job descriptions.</p>
        </div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item-form">
            <div className="form-header">
              <h4>Experience {index + 1}</h4>
              <button
                type="button"
                className="btn-icon btn-danger"
                onClick={() => removeExperience(index)}
              >
                <FiTrash2 />
              </button>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Job Title *</label>
                <input
                  type="text"
                  className="form-input"
                  value={exp.position || ''}
                  onChange={(e) => updateExperience(index, 'position', e.target.value)}
                  placeholder="Software Engineer"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={exp.company || ''}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                  placeholder="Company Name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Duration *</label>
                <input
                  type="text"
                  className="form-input"
                  value={exp.duration || ''}
                  onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                  placeholder="Jan 2020 - Present"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-input"
                  value={exp.location || ''}
                  onChange={(e) => updateExperience(index, 'location', e.target.value)}
                  placeholder="New York, NY"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Key Responsibilities & Achievements *</label>
              <textarea
                className="form-textarea"
                value={exp.description || ''}
                onChange={(e) => updateExperience(index, 'description', e.target.value)}
                placeholder="• Developed and maintained web applications using React and Node.js, serving 10,000+ daily users&#10;• Improved application performance by 40% through code optimization and database indexing&#10;• Led a cross-functional team of 5 developers to deliver projects 20% ahead of schedule&#10;• Implemented CI/CD pipelines reducing deployment time by 60%"
                rows={6}
                required
              />
              <div className="form-help">
                <small>Use bullet points starting with action verbs. Include specific metrics and achievements.</small>
              </div>
            </div>
          </div>
        ))}
        
        <button type="button" className="btn btn-outline" onClick={addExperience}>
          <FiPlus /> Add Experience
        </button>
      </div>
    )
  }

  const renderEducationForm = () => {
    const education = Array.isArray(formData) ? formData : []
    
    const addEducation = () => {
      const newEdu = {
        degree: '',
        school: '',
        year: '',
        location: '',
        gpa: '',
        honors: ''
      }
      setFormData([...education, newEdu])
    }

    const updateEducation = (index, field, value) => {
      const updated = [...education]
      updated[index] = {...updated[index], [field]: value}
      setFormData(updated)
    }

    const removeEducation = (index) => {
      const updated = education.filter((_, i) => i !== index)
      setFormData(updated)
    }

    return (
      <div className="education-form">
        {education.map((edu, index) => (
          <div key={index} className="education-item-form">
            <div className="form-header">
              <h4>Education {index + 1}</h4>
              <button
                type="button"
                className="btn-icon btn-danger"
                onClick={() => removeEducation(index)}
              >
                <FiTrash2 />
              </button>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Degree *</label>
                <input
                  type="text"
                  className="form-input"
                  value={edu.degree || ''}
                  onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                  placeholder="Bachelor of Science in Computer Science"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Institution *</label>
                <input
                  type="text"
                  className="form-input"
                  value={edu.school || ''}
                  onChange={(e) => updateEducation(index, 'school', e.target.value)}
                  placeholder="University Name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Graduation Year *</label>
                <input
                  type="text"
                  className="form-input"
                  value={edu.year || ''}
                  onChange={(e) => updateEducation(index, 'year', e.target.value)}
                  placeholder="2020"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">GPA (Optional)</label>
                <input
                  type="text"
                  className="form-input"
                  value={edu.gpa || ''}
                  onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                  placeholder="3.8/4.0"
                />
                <div className="form-help">
                  <small>Include only if 3.5 or higher</small>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button type="button" className="btn btn-outline" onClick={addEducation}>
          <FiPlus /> Add Education
        </button>
      </div>
    )
  }

  const renderSkillsForm = () => {
    const skills = Array.isArray(formData) ? formData : []
    
    const addSkill = () => {
      if (newSkillInput.trim()) {
        setFormData([...skills, newSkillInput.trim()])
        setNewSkillInput('')
      }
    }

    const removeSkill = (index) => {
      const updated = skills.filter((_, i) => i !== index)
      setFormData(updated)
    }

    return (
      <div className="skills-form">
        <div className="section-help">
          <p><strong>ATS Tips:</strong> Include both hard and soft skills relevant to your target role. Use exact keywords from job descriptions.</p>
        </div>
        
        <div className="skills-input">
          <input
            type="text"
            className="form-input"
            value={newSkillInput}
            onChange={(e) => setNewSkillInput(e.target.value)}
            placeholder="Add a technical skill (e.g., JavaScript, Python, AWS, Project Management)"
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
          />
          <button type="button" className="btn btn-primary" onClick={addSkill}>
            <FiPlus />
          </button>
        </div>
        
        <div className="skills-categories">
          <div className="skills-category">
            <h5>Suggested Categories:</h5>
            <ul>
              <li><strong>Programming Languages:</strong> JavaScript, Python, Java, C++</li>
              <li><strong>Frameworks/Libraries:</strong> React, Angular, Node.js, Django</li>
              <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
              <li><strong>Cloud/DevOps:</strong> AWS, Docker, Kubernetes, CI/CD</li>
              <li><strong>Tools:</strong> Git, Jira, Figma, Adobe Creative Suite</li>
            </ul>
          </div>
        </div>
        
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span>{String(skill)}</span>
              <button
                type="button"
                className="btn-icon btn-danger"
                onClick={() => removeSkill(index)}
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderProjectsForm = () => {
    const projects = Array.isArray(formData) ? formData : []
    
    const addProject = () => {
      const newProject = {
        name: '',
        description: '',
        technologies: '',
        url: '',
        github: '',
        image: ''
      }
      setFormData([...projects, newProject])
    }

    const updateProject = (index, field, value) => {
      const updated = [...projects]
      updated[index] = {...updated[index], [field]: value}
      setFormData(updated)
    }

    const removeProject = (index) => {
      const updated = projects.filter((_, i) => i !== index)
      setFormData(updated)
    }

    return (
      <div className="projects-form">
        <div className="section-help">
          <p><strong>Portfolio Tips:</strong> Add project images and detailed descriptions. These will be showcased prominently in your portfolio website.</p>
        </div>
        
        {projects.map((project, index) => (
          <div key={index} className="project-item-form">
            <div className="form-header">
              <h4>Project {index + 1}</h4>
              <button
                type="button"
                className="btn-icon btn-danger"
                onClick={() => removeProject(index)}
              >
                <FiTrash2 />
              </button>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Project Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={project.name || ''}
                  onChange={(e) => updateProject(index, 'name', e.target.value)}
                  placeholder="E-commerce Platform"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Technologies Used</label>
                <input
                  type="text"
                  className="form-input"
                  value={project.technologies || ''}
                  onChange={(e) => updateProject(index, 'technologies', e.target.value)}
                  placeholder="React, Node.js, MongoDB, AWS"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Live Demo URL</label>
                <input
                  type="url"
                  className="form-input"
                  value={project.url || ''}
                  onChange={(e) => updateProject(index, 'url', e.target.value)}
                  placeholder="https://myproject.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label">GitHub Repository</label>
                <input
                  type="url"
                  className="form-input"
                  value={project.github || ''}
                  onChange={(e) => updateProject(index, 'github', e.target.value)}
                  placeholder="https://github.com/username/project"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Project Image URL (Portfolio)</label>
                <input
                  type="url"
                  className="form-input"
                  value={project.image || ''}
                  onChange={(e) => updateProject(index, 'image', e.target.value)}
                  placeholder="https://example.com/project-screenshot.jpg"
                />
                <div className="form-help">
                  <small>Add a screenshot or image of your project for the portfolio website</small>
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Project Description *</label>
              <textarea
                className="form-textarea"
                value={project.description || ''}
                onChange={(e) => updateProject(index, 'description', e.target.value)}
                placeholder="Developed a full-stack e-commerce platform serving 1000+ users with features including user authentication, payment processing, and inventory management. Implemented responsive design resulting in 25% increase in mobile conversions."
                rows={4}
                required
              />
              <div className="form-help">
                <small>Include specific features, technologies, and measurable outcomes.</small>
              </div>
            </div>
          </div>
        ))}
        
        <button type="button" className="btn btn-outline" onClick={addProject}>
          <FiPlus /> Add Project
        </button>
      </div>
    )
  }

  const renderCertificationsForm = () => {
    const certifications = Array.isArray(formData) ? formData : []
    
    const addCertification = () => {
      const newCert = {
        name: '',
        issuer: '',
        year: '',
        url: ''
      }
      setFormData([...certifications, newCert])
    }

    const updateCertification = (index, field, value) => {
      const updated = [...certifications]
      updated[index] = {...updated[index], [field]: value}
      setFormData(updated)
    }

    const removeCertification = (index) => {
      const updated = certifications.filter((_, i) => i !== index)
      setFormData(updated)
    }

    return (
      <div className="certifications-form">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item-form">
            <div className="form-header">
              <h4>Certification {index + 1}</h4>
              <button
                type="button"
                className="btn-icon btn-danger"
                onClick={() => removeCertification(index)}
              >
                <FiTrash2 />
              </button>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Certification Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={cert.name || ''}
                  onChange={(e) => updateCertification(index, 'name', e.target.value)}
                  placeholder="AWS Certified Solutions Architect"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Issuing Organization *</label>
                <input
                  type="text"
                  className="form-input"
                  value={cert.issuer || ''}
                  onChange={(e) => updateCertification(index, 'issuer', e.target.value)}
                  placeholder="Amazon Web Services"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Year Obtained *</label>
                <input
                  type="text"
                  className="form-input"
                  value={cert.year || ''}
                  onChange={(e) => updateCertification(index, 'year', e.target.value)}
                  placeholder="2023"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Verification URL</label>
                <input
                  type="url"
                  className="form-input"
                  value={cert.url || ''}
                  onChange={(e) => updateCertification(index, 'url', e.target.value)}
                  placeholder="https://verify.certification.com"
                />
              </div>
            </div>
          </div>
        ))}
        
        <button type="button" className="btn btn-outline" onClick={addCertification}>
          <FiPlus /> Add Certification
        </button>
      </div>
    )
  }

  const renderAchievementsForm = () => {
    const achievements = Array.isArray(formData) ? formData : []
    
    const addAchievement = () => {
      if (newAchievementInput.trim()) {
        setFormData([...achievements, newAchievementInput.trim()])
        setNewAchievementInput('')
      }
    }

    const removeAchievement = (index) => {
      const updated = achievements.filter((_, i) => i !== index)
      setFormData(updated)
    }

    return (
      <div className="achievements-form">
        <div className="section-help">
          <p><strong>ATS Tips:</strong> Include quantifiable achievements, awards, and recognitions that demonstrate your value and impact.</p>
        </div>
        
        <div className="achievements-input">
          <textarea
            className="form-textarea"
            value={newAchievementInput}
            onChange={(e) => setNewAchievementInput(e.target.value)}
            placeholder="Add a key achievement (e.g., 'Increased sales by 30% through implementation of new CRM system' or 'Received Employee of the Year award for outstanding performance')"
            rows={3}
          />
          <button type="button" className="btn btn-primary" onClick={addAchievement}>
            <FiPlus /> Add Achievement
          </button>
        </div>
        
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <span>{String(achievement)}</span>
              <button
                type="button"
                className="btn-icon btn-danger"
                onClick={() => removeAchievement(index)}
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderLanguagesForm = () => {
    const languages = Array.isArray(formData) ? formData : []
    
    const addLanguage = () => {
      const newLang = {
        language: '',
        proficiency: 'Conversational'
      }
      setFormData([...languages, newLang])
    }

    const updateLanguage = (index, field, value) => {
      const updated = [...languages]
      updated[index] = {...updated[index], [field]: value}
      setFormData(updated)
    }

    const removeLanguage = (index) => {
      const updated = languages.filter((_, i) => i !== index)
      setFormData(updated)
    }

    const proficiencyLevels = ['Basic', 'Conversational', 'Fluent', 'Native']

    return (
      <div className="languages-form">
        {languages.map((lang, index) => (
          <div key={index} className="language-item-form">
            <div className="form-header">
              <h4>Language {index + 1}</h4>
              <button
                type="button"
                className="btn-icon btn-danger"
                onClick={() => removeLanguage(index)}
              >
                <FiTrash2 />
              </button>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Language *</label>
                <input
                  type="text"
                  className="form-input"
                  value={lang.language || ''}
                  onChange={(e) => updateLanguage(index, 'language', e.target.value)}
                  placeholder="Spanish"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Proficiency Level *</label>
                <select
                  className="form-input"
                  value={lang.proficiency || 'Conversational'}
                  onChange={(e) => updateLanguage(index, 'proficiency', e.target.value)}
                  required
                >
                  {proficiencyLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
        
        <button type="button" className="btn btn-outline" onClick={addLanguage}>
          <FiPlus /> Add Language
        </button>
      </div>
    )
  }

  const renderInterestsForm = () => {
    const interests = Array.isArray(formData) ? formData : []
    
    const addInterest = () => {
      if (newInterestInput.trim()) {
        setFormData([...interests, newInterestInput.trim()])
        setNewInterestInput('')
      }
    }

    const removeInterest = (index) => {
      const updated = interests.filter((_, i) => i !== index)
      setFormData(updated)
    }

    return (
      <div className="interests-form">
        <div className="section-help">
          <p><strong>Note:</strong> Include professional interests and hobbies that might be relevant to your career or show personality.</p>
        </div>
        
        <div className="interests-input">
          <input
            type="text"
            className="form-input"
            value={newInterestInput}
            onChange={(e) => setNewInterestInput(e.target.value)}
            placeholder="Add an interest (e.g., Photography, Hiking, Open Source Contributing)"
            onKeyPress={(e) => e.key === 'Enter' && addInterest()}
          />
          <button type="button" className="btn btn-primary" onClick={addInterest}>
            <FiPlus />
          </button>
        </div>
        
        <div className="interests-list">
          {interests.map((interest, index) => (
            <div key={index} className="interest-item">
              <span>{String(interest)}</span>
              <button
                type="button"
                className="btn-icon btn-danger"
                onClick={() => removeInterest(index)}
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderPortfolioInfoForm = () => (
    <div className="form-grid">
      <div className="form-group">
        <label className="form-label">Portfolio Title</label>
        <input
          type="text"
          className="form-input"
          value={formData.title || ''}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          placeholder="Full Stack Developer | UI/UX Designer"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Tagline</label>
        <input
          type="text"
          className="form-input"
          value={formData.tagline || ''}
          onChange={(e) => setFormData({...formData, tagline: e.target.value})}
          placeholder="Creating digital experiences that matter"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Years of Experience</label>
        <input
          type="text"
          className="form-input"
          value={formData.experience || ''}
          onChange={(e) => setFormData({...formData, experience: e.target.value})}
          placeholder="5+"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Availability Status</label>
        <select
          className="form-input"
          value={formData.availability || 'Available'}
          onChange={(e) => setFormData({...formData, availability: e.target.value})}
        >
          <option value="Available">Available for work</option>
          <option value="Open">Open to opportunities</option>
          <option value="Busy">Currently busy</option>
          <option value="Not Available">Not available</option>
        </select>
      </div>
    </div>
  )

  const renderSocialLinksForm = () => (
    <div className="form-grid">
      <div className="form-group">
        <label className="form-label">Twitter/X</label>
        <input
          type="url"
          className="form-input"
          value={formData.twitter || ''}
          onChange={(e) => setFormData({...formData, twitter: e.target.value})}
          placeholder="https://twitter.com/yourusername"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Instagram</label>
        <input
          type="url"
          className="form-input"
          value={formData.instagram || ''}
          onChange={(e) => setFormData({...formData, instagram: e.target.value})}
          placeholder="https://instagram.com/yourusername"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Dribbble</label>
        <input
          type="url"
          className="form-input"
          value={formData.dribbble || ''}
          onChange={(e) => setFormData({...formData, dribbble: e.target.value})}
          placeholder="https://dribbble.com/yourusername"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Behance</label>
        <input
          type="url"
          className="form-input"
          value={formData.behance || ''}
          onChange={(e) => setFormData({...formData, behance: e.target.value})}
          placeholder="https://behance.net/yourusername"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Medium</label>
        <input
          type="url"
          className="form-input"
          value={formData.medium || ''}
          onChange={(e) => setFormData({...formData, medium: e.target.value})}
          placeholder="https://medium.com/@yourusername"
        />
      </div>
      <div className="form-group">
        <label className="form-label">YouTube</label>
        <input
          type="url"
          className="form-input"
          value={formData.youtube || ''}
          onChange={(e) => setFormData({...formData, youtube: e.target.value})}
          placeholder="https://youtube.com/@yourusername"
        />
      </div>
    </div>
  )

  const renderTestimonialsForm = () => {
    const testimonials = Array.isArray(formData) ? formData : []
    
    const addTestimonial = () => {
      const newTestimonial = {
        name: '',
        position: '',
        company: '',
        text: '',
        image: ''
      }
      setFormData([...testimonials, newTestimonial])
    }

    const updateTestimonial = (index, field, value) => {
      const updated = [...testimonials]
      updated[index] = {...updated[index], [field]: value}
      setFormData(updated)
    }

    const removeTestimonial = (index) => {
      const updated = testimonials.filter((_, i) => i !== index)
      setFormData(updated)
    }

    return (
      <div className="testimonials-form">
        <div className="section-help">
          <p><strong>Portfolio Enhancement:</strong> Add client testimonials and recommendations to build credibility.</p>
        </div>
        
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item-form">
            <div className="form-header">
              <h4>Testimonial {index + 1}</h4>
              <button
                type="button"
                className="btn-icon btn-danger"
                onClick={() => removeTestimonial(index)}
              >
                <FiTrash2 />
              </button>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Client/Colleague Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={testimonial.name || ''}
                  onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Position *</label>
                <input
                  type="text"
                  className="form-input"
                  value={testimonial.position || ''}
                  onChange={(e) => updateTestimonial(index, 'position', e.target.value)}
                  placeholder="Senior Product Manager"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company *</label>
                <input
                  type="text"
                  className="form-input"
                  value={testimonial.company || ''}
                  onChange={(e) => updateTestimonial(index, 'company', e.target.value)}
                  placeholder="Tech Corp"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Profile Image URL</label>
                <input
                  type="url"
                  className="form-input"
                  value={testimonial.image || ''}
                  onChange={(e) => updateTestimonial(index, 'image', e.target.value)}
                  placeholder="https://example.com/profile.jpg"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Testimonial Text *</label>
              <textarea
                className="form-textarea"
                value={testimonial.text || ''}
                onChange={(e) => updateTestimonial(index, 'text', e.target.value)}
                placeholder="Working with [Your Name] was an exceptional experience. Their technical expertise and attention to detail helped us deliver our project ahead of schedule and exceed our expectations."
                rows={4}
                required
              />
            </div>
          </div>
        ))}
        
        <button type="button" className="btn btn-outline" onClick={addTestimonial}>
          <FiPlus /> Add Testimonial
        </button>
      </div>
    )
  }

  const renderServicesForm = () => {
    const services = Array.isArray(formData) ? formData : []
    
    const addService = () => {
      const newService = {
        title: '',
        description: '',
        icon: '',
        price: ''
      }
      setFormData([...services, newService])
    }

    const updateService = (index, field, value) => {
      const updated = [...services]
      updated[index] = {...updated[index], [field]: value}
      setFormData(updated)
    }

    const removeService = (index) => {
      const updated = services.filter((_, i) => i !== index)
      setFormData(updated)
    }

    return (
      <div className="services-form">
        <div className="section-help">
          <p><strong>Portfolio Feature:</strong> Showcase the services you offer to potential clients.</p>
        </div>
        
        {services.map((service, index) => (
          <div key={index} className="service-item-form">
            <div className="form-header">
              <h4>Service {index + 1}</h4>
              <button
                type="button"
                className="btn-icon btn-danger"
                onClick={() => removeService(index)}
              >
                <FiTrash2 />
              </button>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Service Title *</label>
                <input
                  type="text"
                  className="form-input"
                  value={service.title || ''}
                  onChange={(e) => updateService(index, 'title', e.target.value)}
                  placeholder="Web Development"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Icon (Emoji or Unicode)</label>
                <input
                  type="text"
                  className="form-input"
                  value={service.icon || ''}
                  onChange={(e) => updateService(index, 'icon', e.target.value)}
                  placeholder="💻"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Starting Price</label>
                <input
                  type="text"
                  className="form-input"
                  value={service.price || ''}
                  onChange={(e) => updateService(index, 'price', e.target.value)}
                  placeholder="$500"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Service Description *</label>
              <textarea
                className="form-textarea"
                value={service.description || ''}
                onChange={(e) => updateService(index, 'description', e.target.value)}
                placeholder="Custom web development using modern technologies like React, Node.js, and cloud platforms. Includes responsive design, performance optimization, and ongoing support."
                rows={3}
                required
              />
            </div>
          </div>
        ))}
        
        <button type="button" className="btn btn-outline" onClick={addService}>
          <FiPlus /> Add Service
        </button>
      </div>
    )
  }

  const renderAboutMeForm = () => (
    <div className="form-group">
      <label className="form-label">About Me (Extended)</label>
      <textarea
        className="form-textarea"
        value={formData || ''}
        onChange={(e) => setFormData(e.target.value)}
        placeholder="Write a more detailed about section for your portfolio. Include your background, passion, working style, and what drives you professionally. This will be displayed prominently on your portfolio website."
        rows={8}
      />
      <div className="form-help">
        <small>
          <strong>Portfolio Tip:</strong> This is different from your professional summary. 
          Make it more personal and engaging for potential clients and collaborators.
        </small>
      </div>
    </div>
  )

  return (
    <div className="editable-section">
      <div className="section-header">
        <h2>{sectionTitle}</h2>
        <div className="section-actions">
          <button className="btn btn-secondary" onClick={onCancel}>
            <FiX /> Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <FiSave /> Save Changes
          </button>
        </div>
      </div>

      <div className="section-form">
        {renderForm()}
      </div>
    </div>
  )
}

function getDefaultData(sectionKey) {
  switch (sectionKey) {
    case 'personalInfo':
      return {
        name: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        website: '',
        github: ''
      }
    case 'profilePhoto':
      return null
    case 'summary':
      return ''
    case 'experience':
      return []
    case 'education':
      return []
    case 'skills':
      return []
    case 'certifications':
      return []
    case 'projects':
      return []
    case 'achievements':
      return []
    case 'languages':
      return []
    case 'interests':
      return []
    case 'portfolioInfo':
      return {
        title: '',
        tagline: '',
        experience: '',
        availability: 'Available'
      }
    case 'socialLinks':
      return {
        twitter: '',
        instagram: '',
        dribbble: '',
        behance: '',
        medium: '',
        youtube: ''
      }
    case 'testimonials':
      return []
    case 'services':
      return []
    case 'aboutMe':
      return ''
    default:
      return null
  }
}

export default EditableSection