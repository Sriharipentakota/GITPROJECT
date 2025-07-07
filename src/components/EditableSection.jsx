import { useState, useEffect } from 'react'
import { FiPlus, FiTrash2, FiSave, FiX, FiUpload, FiEye, FiEyeOff } from 'react-icons/fi'

function EditableSection({ sectionKey, sectionTitle, data, candidateType, onSave, onCancel }) {
  const [formData, setFormData] = useState(data || getDefaultData(sectionKey, candidateType))
  const [errors, setErrors] = useState({})
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    console.log('EditableSection received data:', data)
    console.log('Setting formData to:', data || getDefaultData(sectionKey, candidateType))
    setFormData(data || getDefaultData(sectionKey, candidateType))
  }, [data, sectionKey, candidateType])

  function getDefaultData(key, type) {
    const defaults = {
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
      academicProjects: [],
      internships: [],
      training: [],
      certifications: [],
      achievements: [],
      extracurricular: [],
      coursework: [],
      projects: [],
      languages: [],
      interests: [],
      portfolioInfo: {
        title: '',
        tagline: '',
        experience: '',
        availability: 'Available'
      },
      socialLinks: {
        twitter: '',
        instagram: '',
        dribbble: '',
        behance: '',
        medium: '',
        youtube: ''
      },
      testimonials: [],
      services: [],
      aboutMe: ''
    }

    return defaults[key] || (Array.isArray(data) ? [] : {})
  }

  const handleSave = () => {
    console.log('EditableSection handleSave called with formData:', formData)

    if (validateForm()) {
      onSave(formData)
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (sectionKey === 'personalInfo') {
      if (!formData.name?.trim()) newErrors.name = 'Name is required'
      if (!formData.email?.trim()) newErrors.email = 'Email is required'
      if (!formData.phone?.trim()) newErrors.phone = 'Phone is required'
      if (!formData.location?.trim()) newErrors.location = 'Location is required'
    }

    if (sectionKey === 'summary') {
      if (!formData || formData.length < 50) {
        newErrors.summary = 'Summary must be at least 50 characters'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field, value) => {
    console.log('Input change:', field, 'value:', value)

    if (sectionKey === 'personalInfo') {
      setFormData(prev => {
        const newData = { ...prev, [field]: value }
        console.log('PersonalInfo new data:', newData)
        return newData  
      })
    } else if (typeof formData === 'string') {
      console.log('Setting string data to:', value)
      setFormData(value)
    } else {
      setFormData(prev => {
        const newData = { ...prev, [field]: value }
        console.log('Object new data:', newData)
        return newData
      })
    }

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleArrayItemChange = (index, field, value) => {
    console.log('Array item change:', index, field, value)

    setFormData(prev => {
      const newArray = [...prev]
      newArray[index] = { ...newArray[index], [field]: value }
      console.log('Array new data:', newArray)
      return newArray
    })
  }

  const addArrayItem = (defaultItem) => {
    console.log('Adding array item:', defaultItem)

    setFormData(prev => {
      const newArray = [...prev, defaultItem]
      console.log('Array after add:', newArray)
      return newArray
    })
  }

  const removeArrayItem = (index) => {
    console.log('Removing array item at index:', index)

    setFormData(prev => {
      const newArray = prev.filter((_, i) => i !== index)
      console.log('Array after remove:', newArray)
      return newArray
    })
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
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

  const renderPersonalInfoForm = () => (
    <div className="form-section">
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            className="form-input"
            value={formData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Enter your full name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            className="form-input"
            value={formData.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="your.email@example.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number *</label>
          <input
            type="tel"
            className="form-input"
            value={formData.phone || ''}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Location *</label>
          <input
            type="text"
            className="form-input"
            value={formData.location || ''}
            onChange={(e) => handleInputChange('location', e.target.value)}
            placeholder="City, State, Country"
          />
          {errors.location && <span className="error-message">{errors.location}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">LinkedIn Profile</label>
          <input
            type="url"
            className="form-input"
            value={formData.linkedin || ''}
            onChange={(e) => handleInputChange('linkedin', e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Website/Portfolio</label>
          <input
            type="url"
            className="form-input"
            value={formData.website || ''}
            onChange={(e) => handleInputChange('website', e.target.value)}
            placeholder="https://yourwebsite.com"
          />
        </div>

        <div className="form-group">
          <label className="form-label">GitHub Profile</label>
          <input
            type="url"
            className="form-input"
            value={formData.github || ''}
            onChange={(e) => handleInputChange('github', e.target.value)}
            placeholder="https://github.com/yourusername"
          />
        </div>
      </div>
    </div>
  )

  const renderProfilePhotoForm = () => (
    <div className="form-section">
      <div className="photo-upload-section">
        {formData && formData.url ? (
          <div className="photo-preview">
            <img src={formData.url} alt="Profile" className="preview-image" />
            <div className="photo-actions">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setFormData(null)}
              >
                <FiTrash2 /> Remove Photo
              </button>
            </div>
          </div>
        ) : (
          <div className="photo-upload">
            <div className="upload-area">
              <FiUpload className="upload-icon" />
              <h4>Upload Profile Photo</h4>
              <p>Choose a professional headshot (JPG, PNG)</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="file-input"
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className="btn btn-primary">
                Choose Photo
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="photo-tips">
        <h4>Photo Guidelines:</h4>
        <ul>
          <li>Use a professional headshot</li>
          <li>Ensure good lighting and clear image</li>
          <li>Dress professionally</li>
          <li>Keep background simple</li>
          <li>File size should be under 2MB</li>
        </ul>
      </div>
    </div>
  )
  console.log(formData, 'formData in EditableSection');
  const renderSummaryForm = () => (
    <div className="form-section">
      <div className="form-group">
        <label className="form-label">
          {candidateType === 'fresher' ? 'Career Objective' : 'Professional Summary'} *
        </label>
        <textarea
          className="form-input form-textarea"
          value={typeof formData === 'string' ? formData : (formData?.summary || '')}
          onChange={(e) => setFormData(e.target.value)}
          placeholder={candidateType === 'fresher'
            ? "Write a compelling career objective that highlights your goals, skills, and what you can bring to potential employers. Focus on your enthusiasm, relevant coursework, and career aspirations."
            : "Write a compelling professional summary that highlights your key achievements, skills, and experience. Focus on quantifiable results and what makes you unique in your field."
          }
          rows="6"
        />
        <div className="character-count">
          {(formData || '').length} characters (minimum 50 recommended)
        </div>
        {errors.summary && <span className="error-message">{errors.summary}</span>}
      </div>

      <div className="summary-tips">
        <h4>{candidateType === 'fresher' ? 'Objective Writing Tips:' : 'Summary Writing Tips:'}</h4>
        <ul>
          {candidateType === 'fresher' ? (
            <>
              <li>Start with your degree and field of study</li>
              <li>Mention relevant skills and coursework</li>
              <li>Express enthusiasm for the industry</li>
              <li>Include career goals and aspirations</li>
              <li>Keep it concise but impactful (2-3 sentences)</li>
            </>
          ) : (
            <>
              <li>Start with your years of experience</li>
              <li>Include quantifiable achievements</li>
              <li>Mention key skills and expertise</li>
              <li>Highlight what makes you unique</li>
              <li>Keep it concise but impactful (3-4 sentences)</li>
            </>
          )}
        </ul>
      </div>
    </div>
  )

  const renderEducationForm = () => {
    // Ensure formData is always an array
    const educationData = Array.isArray(formData) ? formData : []

    return (
      <div className="form-section">
        <div className="section-header">
          <h3>Education Details</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addArrayItem({
              degree: '',
              school: '',
              year: '',
              location: '',
              gpa: '',
              relevant_coursework: '',
              honors: ''
            })}
          >
            <FiPlus /> Add Education
          </button>
        </div>

        {educationData.length === 0 ? (
          <div className="empty-state">
            <p>No education entries yet. Click "Add Education" to get started.</p>
          </div>
        ) : (
          <div className="form-list">
            {educationData.map((edu, index) => (
              <div key={index} className="form-list-item">
                <div className="item-header">
                  <h4>Education #{index + 1}</h4>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeArrayItem(index)}
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Degree/Program *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={edu.degree || ''}
                      onChange={(e) => handleArrayItemChange(index, 'degree', e.target.value)}
                      placeholder="Bachelor of Science in Computer Science"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">School/University *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={edu.school || ''}
                      onChange={(e) => handleArrayItemChange(index, 'school', e.target.value)}
                      placeholder="University Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Graduation Year *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={edu.year || ''}
                      onChange={(e) => handleArrayItemChange(index, 'year', e.target.value)}
                      placeholder="2024 or May 2024"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-input"
                      value={edu.location || ''}
                      onChange={(e) => handleArrayItemChange(index, 'location', e.target.value)}
                      placeholder="City, State"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">GPA (Optional)</label>
                    <input
                      type="text"
                      className="form-input"
                      value={edu.gpa || ''}
                      onChange={(e) => handleArrayItemChange(index, 'gpa', e.target.value)}
                      placeholder="3.8/4.0"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Honors/Awards</label>
                    <input
                      type="text"
                      className="form-input"
                      value={edu.honors || ''}
                      onChange={(e) => handleArrayItemChange(index, 'honors', e.target.value)}
                      placeholder="Magna Cum Laude, Dean's List"
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label">Relevant Coursework</label>
                    <textarea
                      className="form-input form-textarea"
                      value={edu.relevant_coursework || ''}
                      onChange={(e) => handleArrayItemChange(index, 'relevant_coursework', e.target.value)}
                      placeholder="Data Structures, Algorithms, Database Systems, Web Development"
                      rows="3"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderExperienceForm = () => {
    const experienceData = Array.isArray(formData) ? formData : []

    return (
      <div className="form-section">
        <div className="section-header">
          <h3>Work Experience</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addArrayItem({
              position: '',
              company: '',
              duration: '',
              location: '',
              description: '',
              achievements: ''
            })}
          >
            <FiPlus /> Add Experience
          </button>
        </div>

        {experienceData.length === 0 ? (
          <div className="empty-state">
            <p>No work experience entries yet. Click "Add Experience" to get started.</p>
          </div>
        ) : (
          <div className="form-list">
            {experienceData.map((exp, index) => (
              <div key={index} className="form-list-item">
                <div className="item-header">
                  <h4>Experience #{index + 1}</h4>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeArrayItem(index)}
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Job Title *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={exp.position || ''}
                      onChange={(e) => handleArrayItemChange(index, 'position', e.target.value)}
                      placeholder="Software Engineer"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={exp.company || ''}
                      onChange={(e) => handleArrayItemChange(index, 'company', e.target.value)}
                      placeholder="Company Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Duration *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={exp.duration || ''}
                      onChange={(e) => handleArrayItemChange(index, 'duration', e.target.value)}
                      placeholder="Jan 2022 - Present"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-input"
                      value={exp.location || ''}
                      onChange={(e) => handleArrayItemChange(index, 'location', e.target.value)}
                      placeholder="City, State"
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label">Job Description *</label>
                    <textarea
                      className="form-input form-textarea"
                      value={exp.description || ''}
                      onChange={(e) => handleArrayItemChange(index, 'description', e.target.value)}
                      placeholder="Describe your responsibilities and achievements. Use bullet points and quantify results where possible."
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderSkillsForm = () => {
    const skillsData = Array.isArray(formData) ? formData : []

    return (
      <div className="form-section">
        <div className="section-header">
          <h3>Technical Skills</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addArrayItem('')}
          >
            <FiPlus /> Add Skill
          </button>
        </div>

        <div className="skills-input-section">
          <div className="form-group">
            <label className="form-label">Add Skills (Press Enter or click Add after each skill)</label>
            <div className="skill-input-group">
              <input
                type="text"
                className="form-input"
                placeholder="Type a skill and press Enter"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    const value = e.target.value.trim()
                    if (value && !skillsData.includes(value)) {
                      addArrayItem(value)
                      e.target.value = ''
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {skillsData.length === 0 ? (
          <div className="empty-state">
            <p>No skills added yet. Start typing and press Enter to add skills.</p>
          </div>
        ) : (
          <div className="skills-list">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-item">
                <input
                  type="text"
                  className="form-input skill-input"
                  value={skill || ''}
                  onChange={(e) => {
                    const newSkills = [...skillsData]
                    newSkills[index] = e.target.value
                    setFormData(newSkills)
                  }}
                  placeholder="Enter skill"
                />
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => removeArrayItem(index)}
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="skills-suggestions">
          <h4>Skill Categories:</h4>
          <div className="skill-categories">
            <div className="skill-category">
              <strong>Programming:</strong> JavaScript, Python, Java, C++, React, Node.js
            </div>
            <div className="skill-category">
              <strong>Tools:</strong> Git, Docker, AWS, MongoDB, PostgreSQL
            </div>
            <div className="skill-category">
              <strong>Soft Skills:</strong> Leadership, Communication, Problem Solving
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderAcademicProjectsForm = () => {
    const projectsData = Array.isArray(formData) ? formData : []

    return (
      <div className="form-section">
        <div className="section-header">
          <h3>Academic Projects</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addArrayItem({
              name: '',
              description: '',
              technologies: '',
              duration: '',
              url: '',
              github: '',
              role: ''
            })}
          >
            <FiPlus /> Add Project
          </button>
        </div>

        {projectsData.length === 0 ? (
          <div className="empty-state">
            <p>No academic projects yet. Click "Add Project" to showcase your work.</p>
          </div>
        ) : (
          <div className="form-list">
            {projectsData.map((project, index) => (
              <div key={index} className="form-list-item">
                <div className="item-header">
                  <h4>Project #{index + 1}</h4>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeArrayItem(index)}
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Project Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={project.name || ''}
                      onChange={(e) => handleArrayItemChange(index, 'name', e.target.value)}
                      placeholder="E-commerce Website"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Duration</label>
                    <input
                      type="text"
                      className="form-input"
                      value={project.duration || ''}
                      onChange={(e) => handleArrayItemChange(index, 'duration', e.target.value)}
                      placeholder="Sep 2023 - Dec 2023"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Role</label>
                    <input
                      type="text"
                      className="form-input"
                      value={project.role || ''}
                      onChange={(e) => handleArrayItemChange(index, 'role', e.target.value)}
                      placeholder="Team Lead, Frontend Developer"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Technologies Used</label>
                    <input
                      type="text"
                      className="form-input"
                      value={project.technologies || ''}
                      onChange={(e) => handleArrayItemChange(index, 'technologies', e.target.value)}
                      placeholder="React, Node.js, MongoDB, Express"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project URL</label>
                    <input
                      type="url"
                      className="form-input"
                      value={project.url || ''}
                      onChange={(e) => handleArrayItemChange(index, 'url', e.target.value)}
                      placeholder="https://project-demo.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">GitHub Repository</label>
                    <input
                      type="url"
                      className="form-input"
                      value={project.github || ''}
                      onChange={(e) => handleArrayItemChange(index, 'github', e.target.value)}
                      placeholder="https://github.com/username/project"
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label">Project Description *</label>
                    <textarea
                      className="form-input form-textarea"
                      value={project.description || ''}
                      onChange={(e) => handleArrayItemChange(index, 'description', e.target.value)}
                      placeholder="Describe what the project does, your contributions, challenges faced, and outcomes achieved."
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderInternshipsForm = () => {
    const internshipsData = Array.isArray(formData) ? formData : []

    return (
      <div className="form-section">
        <div className="section-header">
          <h3>Internships</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addArrayItem({
              position: '',
              company: '',
              duration: '',
              location: '',
              description: '',
              type: 'Paid'
            })}
          >
            <FiPlus /> Add Internship
          </button>
        </div>

        {internshipsData.length === 0 ? (
          <div className="empty-state">
            <p>No internships yet. Click "Add Internship" to showcase your experience.</p>
          </div>
        ) : (
          <div className="form-list">
            {internshipsData.map((internship, index) => (
              <div key={index} className="form-list-item">
                <div className="item-header">
                  <h4>Internship #{index + 1}</h4>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeArrayItem(index)}
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Position *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={internship.position || ''}
                      onChange={(e) => handleArrayItemChange(index, 'position', e.target.value)}
                      placeholder="Software Development Intern"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={internship.company || ''}
                      onChange={(e) => handleArrayItemChange(index, 'company', e.target.value)}
                      placeholder="Company Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Duration *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={internship.duration || ''}
                      onChange={(e) => handleArrayItemChange(index, 'duration', e.target.value)}
                      placeholder="Jun 2023 - Aug 2023"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-input"
                      value={internship.location || ''}
                      onChange={(e) => handleArrayItemChange(index, 'location', e.target.value)}
                      placeholder="City, State"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Type</label>
                    <select
                      className="form-input"
                      value={internship.type || 'Paid'}
                      onChange={(e) => handleArrayItemChange(index, 'type', e.target.value)}
                    >
                      <option value="Paid">Paid</option>
                      <option value="Unpaid">Unpaid</option>
                      <option value="Remote">Remote</option>
                      <option value="On-site">On-site</option>
                    </select>
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label">Description *</label>
                    <textarea
                      className="form-input form-textarea"
                      value={internship.description || ''}
                      onChange={(e) => handleArrayItemChange(index, 'description', e.target.value)}
                      placeholder="Describe your responsibilities, projects worked on, and skills gained during the internship."
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderCertificationsForm = () => {
    const certificationsData = Array.isArray(formData) ? formData : []

    return (
      <div className="form-section">
        <div className="section-header">
          <h3>Certifications</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addArrayItem({
              name: '',
              issuer: '',
              year: '',
              url: '',
              expiry: ''
            })}
          >
            <FiPlus /> Add Certification
          </button>
        </div>

        {certificationsData.length === 0 ? (
          <div className="empty-state">
            <p>No certifications yet. Click "Add Certification" to showcase your credentials.</p>
          </div>
        ) : (
          <div className="form-list">
            {certificationsData.map((cert, index) => (
              <div key={index} className="form-list-item">
                <div className="item-header">
                  <h4>Certification #{index + 1}</h4>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeArrayItem(index)}
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Certification Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={cert.name || ''}
                      onChange={(e) => handleArrayItemChange(index, 'name', e.target.value)}
                      placeholder="AWS Certified Solutions Architect"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Issuing Organization *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={cert.issuer || ''}
                      onChange={(e) => handleArrayItemChange(index, 'issuer', e.target.value)}
                      placeholder="Amazon Web Services"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Issue Date *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={cert.year || ''}
                      onChange={(e) => handleArrayItemChange(index, 'year', e.target.value)}
                      placeholder="March 2023"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      className="form-input"
                      value={cert.expiry || ''}
                      onChange={(e) => handleArrayItemChange(index, 'expiry', e.target.value)}
                      placeholder="March 2026 or No Expiry"
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label">Credential URL</label>
                    <input
                      type="url"
                      className="form-input"
                      value={cert.url || ''}
                      onChange={(e) => handleArrayItemChange(index, 'url', e.target.value)}
                      placeholder="https://credential-url.com"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderProjectsForm = () => {
    const projectsData = Array.isArray(formData) ? formData : []

    return (
      <div className="form-section">
        <div className="section-header">
          <h3>Professional Projects</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addArrayItem({
              name: '',
              description: '',
              technologies: '',
              duration: '',
              url: '',
              github: '',
              role: '',
              team_size: ''
            })}
          >
            <FiPlus /> Add Project
          </button>
        </div>

        {projectsData.length === 0 ? (
          <div className="empty-state">
            <p>No projects yet. Click "Add Project" to showcase your work.</p>
          </div>
        ) : (
          <div className="form-list">
            {projectsData.map((project, index) => (
              <div key={index} className="form-list-item">
                <div className="item-header">
                  <h4>Project #{index + 1}</h4>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeArrayItem(index)}
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Project Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={project.name || ''}
                      onChange={(e) => handleArrayItemChange(index, 'name', e.target.value)}
                      placeholder="Customer Management System"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Duration</label>
                    <input
                      type="text"
                      className="form-input"
                      value={project.duration || ''}
                      onChange={(e) => handleArrayItemChange(index, 'duration', e.target.value)}
                      placeholder="Jan 2023 - Mar 2023"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Role</label>
                    <input
                      type="text"
                      className="form-input"
                      value={project.role || ''}
                      onChange={(e) => handleArrayItemChange(index, 'role', e.target.value)}
                      placeholder="Lead Developer, Full Stack Developer"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Team Size</label>
                    <input
                      type="text"
                      className="form-input"
                      value={project.team_size || ''}
                      onChange={(e) => handleArrayItemChange(index, 'team_size', e.target.value)}
                      placeholder="5 members"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Technologies Used</label>
                    <input
                      type="text"
                      className="form-input"
                      value={project.technologies || ''}
                      onChange={(e) => handleArrayItemChange(index, 'technologies', e.target.value)}
                      placeholder="React, Node.js, PostgreSQL, AWS"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project URL</label>
                    <input
                      type="url"
                      className="form-input"
                      value={project.url || ''}
                      onChange={(e) => handleArrayItemChange(index, 'url', e.target.value)}
                      placeholder="https://project-demo.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">GitHub Repository</label>
                    <input
                      type="url"
                      className="form-input"
                      value={project.github || ''}
                      onChange={(e) => handleArrayItemChange(index, 'github', e.target.value)}
                      placeholder="https://github.com/username/project"
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label">Project Description *</label>
                    <textarea
                      className="form-input form-textarea"
                      value={project.description || ''}
                      onChange={(e) => handleArrayItemChange(index, 'description', e.target.value)}
                      placeholder="Describe the project, your contributions, challenges solved, and impact achieved."
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderLanguagesForm = () => {
    const languagesData = Array.isArray(formData) ? formData : []

    return (
      <div className="form-section">
        <div className="section-header">
          <h3>Languages</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addArrayItem({
              language: '',
              proficiency: 'Intermediate'
            })}
          >
            <FiPlus /> Add Language
          </button>
        </div>

        {languagesData.length === 0 ? (
          <div className="empty-state">
            <p>No languages yet. Click "Add Language" to showcase your linguistic skills.</p>
          </div>
        ) : (
          <div className="form-list">
            {languagesData.map((lang, index) => (
              <div key={index} className="form-list-item">
                <div className="item-header">
                  <h4>Language #{index + 1}</h4>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeArrayItem(index)}
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Language *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={lang.language || ''}
                      onChange={(e) => handleArrayItemChange(index, 'language', e.target.value)}
                      placeholder="English, Spanish, French"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Proficiency Level *</label>
                    <select
                      className="form-input"
                      value={lang.proficiency || 'Intermediate'}
                      onChange={(e) => handleArrayItemChange(index, 'proficiency', e.target.value)}
                    >
                      <option value="Native">Native</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Basic">Basic</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderInterestsForm = () => {
    const interestsData = Array.isArray(formData) ? formData : []

    return (
      <div className="form-section">
        <div className="section-header">
          <h3>Interests & Hobbies</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addArrayItem('')}
          >
            <FiPlus /> Add Interest
          </button>
        </div>

        <div className="interests-input-section">
          <div className="form-group">
            <label className="form-label">Add Interests (Press Enter or click Add after each interest)</label>
            <div className="interest-input-group">
              <input
                type="text"
                className="form-input"
                placeholder="Type an interest and press Enter"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    const value = e.target.value.trim()
                    if (value && !interestsData.includes(value)) {
                      addArrayItem(value)
                      e.target.value = ''
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {interestsData.length === 0 ? (
          <div className="empty-state">
            <p>No interests added yet. Start typing and press Enter to add interests.</p>
          </div>
        ) : (
          <div className="interests-list">
            {interestsData.map((interest, index) => (
              <div key={index} className="interest-item">
                <input
                  type="text"
                  className="form-input interest-input"
                  value={interest || ''}
                  onChange={(e) => {
                    const newInterests = [...interestsData]
                    newInterests[index] = e.target.value
                    setFormData(newInterests)
                  }}
                  placeholder="Enter interest"
                />
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => removeArrayItem(index)}
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="interests-suggestions">
          <h4>Interest Examples:</h4>
          <div className="interest-categories">
            <div className="interest-category">
              <strong>Technical:</strong> Open Source Contributing, Hackathons, Tech Blogging
            </div>
            <div className="interest-category">
              <strong>Creative:</strong> Photography, Design, Writing, Music
            </div>
            <div className="interest-category">
              <strong>Sports:</strong> Basketball, Swimming, Hiking, Cycling
            </div>
            <div className="interest-category">
              <strong>Other:</strong> Volunteering, Reading, Travel, Cooking
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderPortfolioInfoForm = () => (
    <div className="form-section">
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Professional Title</label>
          <input
            type="text"
            className="form-input"
            value={formData.title || ''}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="Full Stack Developer, UI/UX Designer"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Tagline</label>
          <input
            type="text"
            className="form-input"
            value={formData.tagline || ''}
            onChange={(e) => handleInputChange('tagline', e.target.value)}
            placeholder="Creating amazing digital experiences"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Years of Experience</label>
          <input
            type="text"
            className="form-input"
            value={formData.experience || ''}
            onChange={(e) => handleInputChange('experience', e.target.value)}
            placeholder="3+ years"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Availability Status</label>
          <select
            className="form-input"
            value={formData.availability || 'Available'}
            onChange={(e) => handleInputChange('availability', e.target.value)}
          >
            <option value="Available">Available for work</option>
            <option value="Open to opportunities">Open to opportunities</option>
            <option value="Currently employed">Currently employed</option>
            <option value="Freelancing">Available for freelance</option>
          </select>
        </div>
      </div>
    </div>
  )

  const renderSocialLinksForm = () => (
    <div className="form-section">
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Twitter</label>
          <input
            type="url"
            className="form-input"
            value={formData.twitter || ''}
            onChange={(e) => handleInputChange('twitter', e.target.value)}
            placeholder="https://twitter.com/username"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Instagram</label>
          <input
            type="url"
            className="form-input"
            value={formData.instagram || ''}
            onChange={(e) => handleInputChange('instagram', e.target.value)}
            placeholder="https://instagram.com/username"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Dribbble</label>
          <input
            type="url"
            className="form-input"
            value={formData.dribbble || ''}
            onChange={(e) => handleInputChange('dribbble', e.target.value)}
            placeholder="https://dribbble.com/username"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Behance</label>
          <input
            type="url"
            className="form-input"
            value={formData.behance || ''}
            onChange={(e) => handleInputChange('behance', e.target.value)}
            placeholder="https://behance.net/username"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Medium</label>
          <input
            type="url"
            className="form-input"
            value={formData.medium || ''}
            onChange={(e) => handleInputChange('medium', e.target.value)}
            placeholder="https://medium.com/@username"
          />
        </div>

        <div className="form-group">
          <label className="form-label">YouTube</label>
          <input
            type="url"
            className="form-input"
            value={formData.youtube || ''}
            onChange={(e) => handleInputChange('youtube', e.target.value)}
            placeholder="https://youtube.com/c/channelname"
          />
        </div>
      </div>
    </div>
  )

  const renderAboutMeForm = () => (
    <div className="form-section">
      <div className="form-group">
        <label className="form-label">Extended About Me</label>
        <textarea
          className="form-input form-textarea"
          value={typeof formData === 'string' ? formData : (formData?.summary || '')}
          onChange={(e) => setFormData(e.target.value)}
          placeholder="Write a more detailed description about yourself, your passion, background, and what drives you. This will be used in your portfolio website."
          rows="8"
        />
        <div className="character-count">
          {(formData || '').length} characters
        </div>
      </div>

      <div className="about-tips">
        <h4>About Me Writing Tips:</h4>
        <ul>
          <li>Tell your story in a personal, engaging way</li>
          <li>Include your background and journey</li>
          <li>Mention what you're passionate about</li>
          <li>Share your goals and aspirations</li>
          <li>Keep it authentic and conversational</li>
        </ul>
      </div>
    </div>
  )

  const renderTestimonialsForm = () => {
    const testimonialsData = Array.isArray(formData) ? formData : []

    return (
      <div className="form-section">
        <div className="section-header">
          <h3>Testimonials</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addArrayItem({
              name: '',
              position: '',
              company: '',
              testimonial: '',
              image: ''
            })}
          >
            <FiPlus /> Add Testimonial
          </button>
        </div>

        {testimonialsData.length === 0 ? (
          <div className="empty-state">
            <p>No testimonials yet. Click "Add Testimonial" to showcase client feedback.</p>
          </div>
        ) : (
          <div className="form-list">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="form-list-item">
                <div className="item-header">
                  <h4>Testimonial #{index + 1}</h4>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeArrayItem(index)}
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={testimonial.name || ''}
                      onChange={(e) => handleArrayItemChange(index, 'name', e.target.value)}
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Position</label>
                    <input
                      type="text"
                      className="form-input"
                      value={testimonial.position || ''}
                      onChange={(e) => handleArrayItemChange(index, 'position', e.target.value)}
                      placeholder="Senior Manager"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input
                      type="text"
                      className="form-input"
                      value={testimonial.company || ''}
                      onChange={(e) => handleArrayItemChange(index, 'company', e.target.value)}
                      placeholder="Tech Corp"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Profile Image URL</label>
                    <input
                      type="url"
                      className="form-input"
                      value={testimonial.image || ''}
                      onChange={(e) => handleArrayItemChange(index, 'image', e.target.value)}
                      placeholder="https://example.com/profile.jpg"
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label">Testimonial *</label>
                    <textarea
                      className="form-input form-textarea"
                      value={testimonial.testimonial || ''}
                      onChange={(e) => handleArrayItemChange(index, 'testimonial', e.target.value)}
                      placeholder="Write what this person said about your work..."
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderServicesForm = () => {
    const servicesData = Array.isArray(formData) ? formData : []

    return (
      <div className="form-section">
        <div className="section-header">
          <h3>Services Offered</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addArrayItem({
              name: '',
              description: '',
              price: '',
              duration: ''
            })}
          >
            <FiPlus /> Add Service
          </button>
        </div>

        {servicesData.length === 0 ? (
          <div className="empty-state">
            <p>No services yet. Click "Add Service" to showcase what you offer.</p>
          </div>
        ) : (
          <div className="form-list">
            {servicesData.map((service, index) => (
              <div key={index} className="form-list-item">
                <div className="item-header">
                  <h4>Service #{index + 1}</h4>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeArrayItem(index)}
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Service Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={service.name || ''}
                      onChange={(e) => handleArrayItemChange(index, 'name', e.target.value)}
                      placeholder="Web Development, UI/UX Design"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Price Range</label>
                    <input
                      type="text"
                      className="form-input"
                      value={service.price || ''}
                      onChange={(e) => handleArrayItemChange(index, 'price', e.target.value)}
                      placeholder="$500 - $2000"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Duration</label>
                    <input
                      type="text"
                      className="form-input"
                      value={service.duration || ''}
                      onChange={(e) => handleArrayItemChange(index, 'duration', e.target.value)}
                      placeholder="2-4 weeks"
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label">Service Description *</label>
                    <textarea
                      className="form-input form-textarea"
                      value={service.description || ''}
                      onChange={(e) => handleArrayItemChange(index, 'description', e.target.value)}
                      placeholder="Describe what this service includes and the value you provide..."
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderForm = () => {
    switch (sectionKey) {
      case 'personalInfo':
        return renderPersonalInfoForm()
      case 'profilePhoto':
        return renderProfilePhotoForm()
      case 'summary':
        return renderSummaryForm()
      case 'education':
        return renderEducationForm()
      case 'experience':
        return renderExperienceForm()
      case 'skills':
        return renderSkillsForm()
      case 'academicProjects':
        return renderAcademicProjectsForm()
      case 'internships':
        return renderInternshipsForm()
      case 'certifications':
        return renderCertificationsForm()
      case 'projects':
        return renderProjectsForm()
      case 'languages':
        return renderLanguagesForm()
      case 'interests':
        return renderInterestsForm()
      case 'portfolioInfo':
        return renderPortfolioInfoForm()
      case 'socialLinks':
        return renderSocialLinksForm()
      case 'aboutMe':
        return renderAboutMeForm()
      case 'testimonials':
        return renderTestimonialsForm()
      case 'services':
        return renderServicesForm()
      default:
        return (
          <div className="form-section">
            <p>Form for {sectionTitle} is not implemented yet.</p>
          </div>
        )
    }
  }

  return (
    <div className="editable-section">
      <div className="section-header">
        <h2>{sectionTitle}</h2>
        <div className="section-actions">
          {sectionKey !== 'profilePhoto' && (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setShowPreview(!showPreview)}
            >
              {showPreview ? <FiEyeOff /> : <FiEye />}
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
          )}
        </div>
      </div>

      <div className="section-content">
        {renderForm()}
      </div>

      <div className="section-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onCancel}
        >
          <FiX /> Cancel
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSave}
        >
          <FiSave /> Save Changes
        </button>
      </div>
    </div>
  )
}

export default EditableSection