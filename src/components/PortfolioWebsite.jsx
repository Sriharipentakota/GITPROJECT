import { useEffect, useState } from 'react'
import { FiArrowLeft, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiGlobe, FiTwitter, FiInstagram, FiExternalLink } from 'react-icons/fi'
import { useResumeContext } from '../context/ResumeContext'

function PortfolioWebsite({ onBack }) {
  const { resumeData } = useResumeContext()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!resumeData) {
    return (
      <div className="portfolio-error">
        <h2>No Resume Data Found</h2>
        <p>Please create a resume first to generate your portfolio website.</p>
        <button className="btn btn-primary" onClick={onBack}>
          Go Back to Resume Builder
        </button>
      </div>
    )
  }

  const personalInfo = resumeData.personalInfo || {}
  const portfolioInfo = resumeData.portfolioInfo || {}
  const socialLinks = resumeData.socialLinks || {}

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="portfolio-website">
      {/* Navigation */}
      <nav className={`portfolio-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <button className="back-btn" onClick={onBack}>
              <FiArrowLeft /> Back to Builder
            </button>
          </div>
          <div className="nav-menu">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a>
            {resumeData.projects && resumeData.projects.length > 0 && (
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projects</a>
            )}
            {resumeData.experience && resumeData.experience.length > 0 && (
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}>Experience</a>
            )}
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-name">{personalInfo.name || 'Your Name'}</h1>
              <h2 className="hero-title">{portfolioInfo.title || 'Professional Developer'}</h2>
              <p className="hero-tagline">{portfolioInfo.tagline || resumeData.summary || 'Creating amazing digital experiences'}</p>
              
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                  <FiMail /> Get In Touch
                </button>
                <button className="btn btn-outline" onClick={() => scrollToSection('projects')}>
                  View My Work
                </button>
              </div>

              <div className="social-links">
                {personalInfo.github && (
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                )}
                {personalInfo.linkedin && (
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FiTwitter />
                  </a>
                )}
                {personalInfo.website && (
                  <a href={personalInfo.website} target="_blank" rel="noopener noreferrer">
                    <FiGlobe />
                  </a>
                )}
              </div>
            </div>
            
            <div className="hero-image">
              {resumeData.profilePhoto && resumeData.profilePhoto.url ? (
                <img src={resumeData.profilePhoto.url} alt={personalInfo.name} className="profile-image" />
              ) : (
                <div className="profile-placeholder">
                  <span>{personalInfo.name ? personalInfo.name.charAt(0) : 'U'}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                {resumeData.aboutMe || resumeData.summary || 'Passionate professional dedicated to creating exceptional digital experiences and solving complex problems through innovative solutions.'}
              </p>
              
              {resumeData.skills && resumeData.skills.length > 0 && (
                <div className="skills-section">
                  <h3>Technical Skills</h3>
                  <div className="skills-grid">
                    {resumeData.skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <span className="skill-name">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="about-info">
              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <FiMail />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="contact-item">
                  <FiPhone />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <FiMapPin />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
              
              {resumeData.education && resumeData.education.length > 0 && (
                <div className="info-card">
                  <h3>Education</h3>
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="education-item">
                      <h4>{edu.degree}</h4>
                      <p>{edu.school} • {edu.year}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {resumeData.projects && resumeData.projects.length > 0 && (
        <section id="projects" className="projects-section">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="project-card">
                  {project.image && (
                    <div className="project-image">
                      <img src={project.image} alt={project.name} />
                    </div>
                  )}
                  <div className="project-content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    {project.technologies && (
                      <div className="project-tech">
                        {project.technologies.split(',').map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech.trim()}</span>
                        ))}
                      </div>
                    )}
                    <div className="project-links">
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FiGithub /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {resumeData.experience && resumeData.experience.length > 0 && (
        <section id="experience" className="experience-section">
          <div className="container">
            <h2 className="section-title">Professional Experience</h2>
            <div className="timeline">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                    <span className="timeline-date">{exp.duration}</span>
                    {exp.location && <span className="timeline-location">{exp.location}</span>}
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.</p>
              
              <div className="contact-methods">
                <a href={`mailto:${personalInfo.email}`} className="contact-method">
                  <FiMail />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.phone}`} className="contact-method">
                  <FiPhone />
                  <span>{personalInfo.phone}</span>
                </a>
                <div className="contact-method">
                  <FiMapPin />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className="contact-social">
                {personalInfo.github && (
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                )}
                {personalInfo.linkedin && (
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FiTwitter />
                  </a>
                )}
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <FiMail /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 {personalInfo.name}. All rights reserved.</p>
            <p>Built with ATS Resume Formatter</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioWebsite