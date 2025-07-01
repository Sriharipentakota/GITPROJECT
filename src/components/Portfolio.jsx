import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileText,
  RotateCcw,
  Globe,
  Github,
  Linkedin,
  Target,
  Lightbulb,
  Trophy,
  Languages,
  Heart,
  Users,
  Code,
  Calendar,
  Building,
  Star
} from 'lucide-react'

const Portfolio = ({ data, onReset }) => {
  const renderContactInfo = () => (
    <div className="contact-grid">
      {data.email && (
        <div className="contact-item">
          <Mail size={18} />
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>
      )}
      {data.phone && (
        <div className="contact-item">
          <Phone size={18} />
          <a href={`tel:${data.phone}`}>{data.phone}</a>
        </div>
      )}
      {data.location && (
        <div className="contact-item">
          <MapPin size={18} />
          <span>{data.location}</span>
        </div>
      )}
      {data.website && (
        <div className="contact-item">
          <Globe size={18} />
          <a href={data.website} target="_blank" rel="noopener noreferrer">Website</a>
        </div>
      )}
      {data.linkedin && (
        <div className="contact-item">
          <Linkedin size={18} />
          <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      )}
      {data.github && (
        <div className="contact-item">
          <Github size={18} />
          <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      )}
    </div>
  )

  const renderTextSection = (title, content, icon) => {
    if (!content || (typeof content === 'string' && content.trim() === '')) return null

    return (
      <div className="section">
        <h2 className="section-title">
          {icon}
          {title}
        </h2>
        <div className="section-content">
          <p>{content}</p>
        </div>
      </div>
    )
  }

  const renderExperience = () => {
    if (!data.experience || data.experience.length === 0) return null

    return (
      <div className="section">
        <h2 className="section-title">
          <Briefcase size={24} />
          Professional Experience
        </h2>
        <div className="timeline">
          {data.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-main">
                    <h3 className="experience-title">{exp.title}</h3>
                    {exp.company && (
                      <div className="experience-company">
                        <Building size={16} />
                        {exp.company}
                      </div>
                    )}
                  </div>
                  <div className="experience-meta">
                    {exp.duration && (
                      <div className="experience-duration">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>
                    )}
                    {exp.location && (
                      <div className="experience-location">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    )}
                  </div>
                </div>
                {exp.description && (
                  <div className="experience-description">
                    {exp.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderEducation = () => {
    if (!data.education || data.education.length === 0) return null

    return (
      <div className="section">
        <h2 className="section-title">
          <GraduationCap size={24} />
          Education
        </h2>
        <div className="education-grid">
          {data.education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                {edu.year && <span className="education-year">{edu.year}</span>}
              </div>
              {edu.institution && (
                <div className="education-institution">
                  <Building size={16} />
                  {edu.institution}
                </div>
              )}
              {edu.gpa && (
                <div className="education-gpa">
                  <Star size={16} />
                  GPA: {edu.gpa}
                </div>
              )}
              {edu.description && (
                <div className="education-description">
                  {edu.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderSkills = () => {
    if (!data.skills || data.skills.length === 0) return null

    return (
      <div className="section">
        <h2 className="section-title">
          <Code size={24} />
          Technical Skills
        </h2>
        <div className="skills-container">
          {data.skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderProjects = () => {
    if (!data.projects || data.projects.length === 0) return null

    return (
      <div className="section">
        <h2 className="section-title">
          <Lightbulb size={24} />
          Projects
        </h2>
        <div className="projects-grid">
          {data.projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-name">{project.name}</h3>
              {project.description && (
                <p className="project-description">{project.description}</p>
              )}
              {project.technologies && project.technologies.length > 0 && (
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderCertifications = () => {
    if (!data.certifications || data.certifications.length === 0) return null

    return (
      <div className="section">
        <h2 className="section-title">
          <Award size={24} />
          Certifications
        </h2>
        <div className="certifications-list">
          {data.certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <div className="certification-name">{cert.name}</div>
              <div className="certification-meta">
                {cert.issuer && <span className="certification-issuer">{cert.issuer}</span>}
                {cert.year && <span className="certification-year">{cert.year}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderAwards = () => {
    if (!data.awards || data.awards.length === 0) return null

    return (
      <div className="section">
        <h2 className="section-title">
          <Trophy size={24} />
          Awards & Achievements
        </h2>
        <div className="awards-list">
          {data.awards.map((award, index) => (
            <div key={index} className="award-item">
              <div className="award-name">{award.name}</div>
              {award.year && <span className="award-year">{award.year}</span>}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderLanguages = () => {
    if (!data.languages || data.languages.length === 0) return null

    return (
      <div className="section">
        <h2 className="section-title">
          <Languages size={24} />
          Languages
        </h2>
        <div className="languages-container">
          {data.languages.map((language, index) => (
            <div key={index} className="language-item">
              {language}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderInterests = () => {
    if (!data.interests || data.interests.length === 0) return null

    return (
      <div className="section">
        <h2 className="section-title">
          <Heart size={24} />
          Interests & Hobbies
        </h2>
        <div className="interests-container">
          {data.interests.map((interest, index) => (
            <div key={index} className="interest-item">
              {interest}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <div className="portfolio-nav">
          <div className="portfolio-brand">
            <User size={20} />
            <span>Portfolio</span>
          </div>
          <button className="reset-button" onClick={onReset}>
            <RotateCcw size={16} />
            New Resume
          </button>
        </div>
        
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-name">{data.name || 'Professional Name'}</h1>
            {data.title && <div className="hero-title">{data.title}</div>}
            {renderContactInfo()}
          </div>
          <div className="hero-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
          </div>
        </div>
      </div>

      <div className="portfolio-content">
        <div className="content-grid">
          <div className="main-content">
            {renderTextSection('Professional Summary', data.summary, <User size={24} />)}
            {renderTextSection('Career Objective', data.objective, <Target size={24} />)}
            {renderExperience()}
            {renderProjects()}
          </div>
          
          <div className="sidebar-content">
            {renderEducation()}
            {renderSkills()}
            {renderCertifications()}
            {renderAwards()}
            {renderLanguages()}
            {renderInterests()}
            
            {data.references && (
              <div className="section">
                <h2 className="section-title">
                  <Users size={24} />
                  References
                </h2>
                <div className="section-content">
                  <p>{data.references}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {data.rawText && (
          <div className="section raw-section">
            <h2 className="section-title">
              <FileText size={24} />
              Raw Content (Debug)
            </h2>
            <div className="raw-content">{data.rawText}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Portfolio