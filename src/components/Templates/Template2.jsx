import React from 'react';

const Template2 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Sarah Mitchell',
      email: 'sarah.mitchell@email.com',
      phone: '+1 (555) 987-6543',
      address: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/sarahmitchell',
      github: 'github.com/sarahmitchell',
      portfolio: 'sarahmitchell.com',
      summary: 'Creative marketing professional with 7+ years of experience in digital marketing, brand management, and content strategy. Proven track record of increasing brand awareness by 150%.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Marketing Director',
        company: 'Creative Agency Pro',
        location: 'San Francisco, CA',
        startDate: '2021-06',
        endDate: '',
        current: true,
        description: 'Spearheaded digital marketing campaigns that increased client ROI by 200%. Managed a team of 8 marketing specialists and coordinated with cross-functional teams.'
      },
      {
        id: 2,
        jobTitle: 'Senior Marketing Specialist',
        company: 'Brand Solutions Ltd',
        location: 'Los Angeles, CA',
        startDate: '2019-02',
        endDate: '2021-05',
        current: false,
        description: 'Developed comprehensive marketing strategies for B2B clients. Created content that generated 500K+ social media impressions monthly.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Master of Business Administration',
        institution: 'Stanford University',
        location: 'Stanford, CA',
        graduationDate: '2019-06',
        gpa: '3.9/4.0',
        relevant: 'Marketing Strategy, Consumer Behavior, Digital Analytics'
      }
    ],
    skills: {
      technical: ['Google Analytics', 'Adobe Creative Suite', 'HubSpot', 'Salesforce', 'SEO/SEM'],
      soft: ['Strategic Planning', 'Team Leadership', 'Creative Thinking', 'Data Analysis'],
      languages: ['English (Native)', 'French (Fluent)', 'German (Basic)']
    },
    projects: [
      {
        id: 1,
        title: 'Brand Revitalization Campaign',
        description: 'Led complete rebranding initiative for Fortune 500 client, resulting in 40% increase in market share and $2M additional revenue.',
        technologies: 'Adobe Creative Suite, Google Analytics, Social Media Platforms',
        link: 'https://brandcampaign.com',
        github: '',
        duration: '6 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Georgia, serif', 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px',
      backgroundColor: 'white',
      color: '#333',
      lineHeight: '1.6'
    }}>
      {/* Header - Two Column Layout */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '30px',
        marginBottom: '30px',
        padding: '25px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <div>
          <h1 style={{ 
            fontSize: '2.2rem', 
            margin: '0 0 10px 0', 
            color: '#1a1a1a',
            fontWeight: 'normal',
            letterSpacing: '0.5px'
          }}>
            {personalInfo.fullName}
          </h1>
          {personalInfo.summary && (
            <p style={{ 
              margin: '0',
              fontSize: '1rem',
              color: '#555',
              fontStyle: 'italic',
              lineHeight: '1.5'
            }}>
              {personalInfo.summary}
            </p>
          )}
        </div>
        <div style={{ 
          fontSize: '0.95rem',
          color: '#666',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div><strong>Email:</strong> {personalInfo.email}</div>
          <div><strong>Phone:</strong> {personalInfo.phone}</div>
          {personalInfo.address && <div><strong>Location:</strong> {personalInfo.address}</div>}
          {personalInfo.linkedin && <div><strong>LinkedIn:</strong> {personalInfo.linkedin}</div>}
          {personalInfo.github && <div><strong>GitHub:</strong> {personalInfo.github}</div>}
          {personalInfo.portfolio && <div><strong>Portfolio:</strong> {personalInfo.portfolio}</div>}
        </div>
      </div>

      {/* Two Column Layout for Content */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '40px'
      }}>
        {/* Left Column */}
        <div>
          {/* Experience */}
          {experience.length > 0 && (
            <div style={{ marginBottom: '35px' }}>
              <h2 style={{ 
                fontSize: '1.3rem', 
                color: '#1a1a1a', 
                marginBottom: '20px',
                borderBottom: '2px solid #ddd',
                paddingBottom: '8px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Professional Experience
              </h2>
              {experience.map(exp => (
                <div key={exp.id} style={{ marginBottom: '25px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'baseline',
                    marginBottom: '5px'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.1rem', 
                      margin: '0', 
                      fontWeight: 'bold',
                      color: '#1a1a1a'
                    }}>
                      {exp.jobTitle}
                    </h3>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      color: '#666',
                      fontStyle: 'italic',
                      whiteSpace: 'nowrap'
                    }}>
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div style={{ 
                    fontSize: '1rem', 
                    color: '#666', 
                    marginBottom: '8px',
                    fontStyle: 'italic'
                  }}>
                    {exp.company}, {exp.location}
                  </div>
                  {exp.description && (
                    <p style={{ 
                      margin: '8px 0', 
                      lineHeight: '1.6',
                      textAlign: 'justify'
                    }}>
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div style={{ marginBottom: '35px' }}>
              <h2 style={{ 
                fontSize: '1.3rem', 
                color: '#1a1a1a', 
                marginBottom: '20px',
                borderBottom: '2px solid #ddd',
                paddingBottom: '8px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Notable Projects
              </h2>
              {projects.map(project => (
                <div key={project.id} style={{ marginBottom: '25px' }}>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    margin: '0 0 5px 0', 
                    fontWeight: 'bold',
                    color: '#1a1a1a'
                  }}>
                    {project.title}
                  </h3>
                  {project.technologies && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#666', 
                      marginBottom: '8px',
                      fontStyle: 'italic'
                    }}>
                      {project.technologies}
                    </div>
                  )}
                  <p style={{ 
                    margin: '8px 0', 
                    lineHeight: '1.6',
                    textAlign: 'justify'
                  }}>
                    {project.description}
                  </p>
                  {(project.link || project.github) && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#666',
                      marginTop: '8px'
                    }}>
                      {project.link && <span>Portfolio: {project.link}</span>}
                      {project.github && (
                        <span>
                          {project.link && ' • '}
                          Repository: {project.github}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div>
          {/* Education */}
          {education.length > 0 && (
            <div style={{ marginBottom: '35px' }}>
              <h2 style={{ 
                fontSize: '1.2rem', 
                color: '#1a1a1a', 
                marginBottom: '15px',
                borderBottom: '2px solid #ddd',
                paddingBottom: '8px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Education
              </h2>
              {education.map(edu => (
                <div key={edu.id} style={{ marginBottom: '20px' }}>
                  <h3 style={{ 
                    fontSize: '1rem', 
                    margin: '0 0 5px 0', 
                    fontWeight: 'bold',
                    color: '#1a1a1a',
                    lineHeight: '1.3'
                  }}>
                    {edu.degree}
                  </h3>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: '#666',
                    fontStyle: 'italic',
                    marginBottom: '3px'
                  }}>
                    {edu.institution}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: '#666',
                    marginBottom: '3px'
                  }}>
                    {edu.location}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: '#666',
                    marginBottom: '5px'
                  }}>
                    {edu.graduationDate}
                  </div>
                  {edu.gpa && (
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>
                      GPA: {edu.gpa}
                    </div>
                  )}
                  {edu.relevant && (
                    <div style={{ 
                      fontSize: '0.85rem', 
                      color: '#666',
                      marginTop: '5px',
                      lineHeight: '1.4'
                    }}>
                      Relevant: {edu.relevant}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          <div style={{ marginBottom: '35px' }}>
            <h2 style={{ 
              fontSize: '1.2rem', 
              color: '#1a1a1a', 
              marginBottom: '15px',
              borderBottom: '2px solid #ddd',
              paddingBottom: '8px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Core Competencies
            </h2>
            {skills.technical.length > 0 && (
              <div style={{ marginBottom: '15px' }}>
                <h3 style={{ 
                  fontSize: '1rem', 
                  marginBottom: '8px', 
                  color: '#1a1a1a',
                  fontWeight: 'bold'
                }}>
                  Technical
                </h3>
                <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {skills.technical.map((skill, index) => (
                    <span key={index}>
                      {skill}
                      {index < skills.technical.length - 1 && ' • '}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div style={{ marginBottom: '15px' }}>
                <h3 style={{ 
                  fontSize: '1rem', 
                  marginBottom: '8px', 
                  color: '#1a1a1a',
                  fontWeight: 'bold'
                }}>
                  Professional
                </h3>
                <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {skills.soft.map((skill, index) => (
                    <span key={index}>
                      {skill}
                      {index < skills.soft.length - 1 && ' • '}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {skills.languages.length > 0 && (
              <div style={{ marginBottom: '15px' }}>
                <h3 style={{ 
                  fontSize: '1rem', 
                  marginBottom: '8px', 
                  color: '#1a1a1a',
                  fontWeight: 'bold'
                }}>
                  Languages
                </h3>
                <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {skills.languages.map((language, index) => (
                    <span key={index}>
                      {language}
                      {index < skills.languages.length - 1 && ' • '}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;