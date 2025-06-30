import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiGlobe, FiTwitter, FiInstagram, FiExternalLink, FiDownload, FiStar } from 'react-icons/fi'
import { useResumeContext } from '../context/ResumeContext'

function PortfolioWebsite() {
  const { resumeData } = useResumeContext()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('home')
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
        <button className="btn btn-primary" onClick={() => navigate('/')}>
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
      setActiveSection(sectionId)
    }
  }

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'github': return FiGithub
      case 'linkedin': return FiLinkedin
      case 'twitter': return FiTwitter
      case 'instagram': return FiInstagram
      default: return FiGlobe
    }
  }

  return (
    <div className="portfolio-website">
      {/* Navigation */}
      <nav className={`portfolio-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <button className="back-btn" onClick={() => navigate('/')}>
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
            {resumeData.services && resumeData.services.length > 0 && (
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a>
            )}
            {resumeData.testimonials && resumeData.testimonials.length > 0 && (
              <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials') }}>Testimonials</a>
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
              
              <div className="hero-stats">
                {portfolioInfo.experience && (
                  <div className="stat">
                    <span className="stat-number">{portfolioInfo.experience}</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                )}
                {resumeData.projects && (
                  <div className="stat">
                    <span className="stat-number">{resumeData.projects.length}+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                )}
                <div className="stat">
                  <span className="stat-number availability-status">{portfolioInfo.availability || 'Available'}</span>
                  <span className="stat-label">Status</span>
                </div>
              </div>

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
                {socialLinks.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FiInstagram />
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

      {/* Services Section */}
      {resumeData.services && resumeData.services.length > 0 && (
        <section id="services" className="services-section">
          <div className="container">
            <h2 className="section-title">Services I Offer</h2>
            <div className="services-grid">
              {resumeData.services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    {service.icon || '💼'}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {service.price && (
                    <div className="service-price">Starting at {service.price}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {resumeData.testimonials && resumeData.testimonials.length > 0 && (
        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <h2 className="section-title">What Clients Say</h2>
            <div className="testimonials-grid">
              {resumeData.testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="star" />
                      ))}
                    </div>
                    <p>"{testimonial.text}"</p>
                  </div>
                  <div className="testimonial-author">
                    {testimonial.image && (
                      <img src={testimonial.image} alt={testimonial.name} />
                    )}
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position} at {testimonial.company}</p>
                    </div>
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
                {socialLinks.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FiInstagram />
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
            <p>Built with ResumeBuilder Pro</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioWebsite