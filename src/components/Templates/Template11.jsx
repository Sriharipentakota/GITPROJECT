import React from 'react';

const Template11 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Amanda Rodriguez',
      email: 'amanda.rodriguez@email.com',
      phone: '+1 (555) 123-4567',
      address: 'Los Angeles, CA',
      linkedin: 'linkedin.com/in/amandarodriguez',
      github: 'github.com/amandarodriguez',
      portfolio: 'amandarodriguez.com',
      summary: 'Creative marketing manager with 6+ years of experience in digital marketing, brand strategy, and campaign management. Expert in driving growth through data-driven marketing initiatives.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Marketing Manager',
        company: 'Digital Growth Agency',
        location: 'Los Angeles, CA',
        startDate: '2021-04',
        endDate: '',
        current: true,
        description: '• Managed $500K+ marketing budget across multiple channels\n• Increased lead generation by 150% through targeted campaigns\n• Led team of 5 marketing specialists'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Business Administration - Marketing',
        institution: 'UCLA',
        location: 'Los Angeles, CA',
        graduationDate: '2018-06',
        gpa: '3.7/4.0',
        relevant: 'Digital Marketing, Consumer Behavior, Brand Management'
      }
    ],
    skills: {
      technical: ['Google Analytics', 'HubSpot', 'Salesforce', 'Adobe Creative Suite', 'SEO/SEM'],
      soft: ['Strategic Planning', 'Team Leadership', 'Creative Problem Solving', 'Data Analysis'],
      languages: ['English (Native)', 'Spanish (Fluent)', 'French (Intermediate)']
    },
    projects: [
      {
        id: 1,
        title: 'Multi-Channel Campaign Launch',
        description: 'Launched integrated marketing campaign across 5 channels resulting in 200% ROI and 50K new customers.',
        technologies: 'Google Ads, Facebook Ads, Email Marketing, Content Marketing',
        link: 'https://campaign-results.com',
        github: '',
        duration: '4 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Segoe UI, sans-serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: 'white',
      color: '#2c2c2c',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Modern Gradient */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '25px',
        marginBottom: '20px',
        borderRadius: '10px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '100px',
          height: '100px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%'
        }} />
        <h1 style={{ 
          fontSize: '26px', 
          margin: '0 0 12px 0', 
          fontWeight: '300',
          letterSpacing: '2px',
          position: 'relative',
          zIndex: 1
        }}>
          {personalInfo.fullName}
        </h1>
        <div style={{ 
          fontSize: '11px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          opacity: '0.95',
          position: 'relative',
          zIndex: 1
        }}>
          <div>
            <div style={{ marginBottom: '4px' }}>✉ {personalInfo.email}</div>
            <div style={{ marginBottom: '4px' }}>📱 {personalInfo.phone}</div>
          </div>
          <div>
            {personalInfo.address && <div style={{ marginBottom: '4px' }}>📍 {personalInfo.address}</div>}
            {personalInfo.portfolio && <div style={{ marginBottom: '4px' }}>🌐 {personalInfo.portfolio}</div>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#667eea', 
            marginBottom: '8px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            position: 'relative',
            paddingBottom: '5px'
          }}>
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '30px',
              height: '2px',
              background: 'linear-gradient(90deg, #667eea, #764ba2)'
            }} />
            EXECUTIVE SUMMARY
          </h2>
          <p style={{ 
            margin: '0',
            textAlign: 'justify',
            fontSize: '11px',
            lineHeight: '1.6'
          }}>
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#667eea', 
            marginBottom: '10px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            position: 'relative',
            paddingBottom: '5px'
          }}>
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '30px',
              height: '2px',
              background: 'linear-gradient(90deg, #667eea, #764ba2)'
            }} />
            PROFESSIONAL EXPERIENCE
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '15px',
              padding: '12px',
              border: '1px solid #e1e5e9',
              borderRadius: '8px',
              backgroundColor: '#fafbfc'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline',
                marginBottom: '5px'
              }}>
                <h3 style={{ 
                  fontSize: '12px', 
                  margin: '0', 
                  fontWeight: 'bold',
                  color: '#2c2c2c'
                }}>
                  {exp.jobTitle}
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  color: 'white',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  padding: '4px 10px',
                  borderRadius: '15px',
                  fontWeight: '500'
                }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: '#666', 
                marginBottom: '8px',
                fontWeight: '600'
              }}>
                {exp.company} • {exp.location}
              </div>
              {exp.description && (
                <div style={{ 
                  fontSize: '10px',
                  whiteSpace: 'pre-line',
                  lineHeight: '1.5'
                }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Two Column Layout for Education and Skills */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginBottom: '18px'
      }}>
        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 style={{ 
              fontSize: '14px', 
              color: '#667eea', 
              marginBottom: '10px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              position: 'relative',
              paddingBottom: '5px'
            }}>
              <span style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '30px',
                height: '2px',
                background: 'linear-gradient(90deg, #667eea, #764ba2)'
              }} />
              EDUCATION
            </h2>
            {education.map(edu => (
              <div key={edu.id} style={{ 
                marginBottom: '10px',
                padding: '10px',
                backgroundColor: '#f8f9fa',
                borderRadius: '5px',
                borderLeft: '4px solid #667eea'
              }}>
                <h3 style={{ 
                  fontSize: '11px', 
                  margin: '0 0 3px 0', 
                  fontWeight: 'bold'
                }}>
                  {edu.degree}
                </h3>
                <div style={{ 
                  fontSize: '10px', 
                  color: '#666',
                  marginBottom: '2px'
                }}>
                  {edu.institution} • {edu.location}
                </div>
                <div style={{ 
                  fontSize: '10px', 
                  color: '#666'
                }}>
                  {edu.graduationDate} {edu.gpa && `• GPA: ${edu.gpa}`}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        <div>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#667eea', 
            marginBottom: '10px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            position: 'relative',
            paddingBottom: '5px'
          }}>
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '30px',
              height: '2px',
              background: 'linear-gradient(90deg, #667eea, #764ba2)'
            }} />
            CORE SKILLS
          </h2>
          {skills.technical.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '6px', 
                fontWeight: 'bold'
              }}>
                Technical
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {skills.technical.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#e8ecf4',
                    color: '#667eea',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    fontSize: '9px',
                    fontWeight: '500',
                    border: '1px solid #d1d9e6'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '6px', 
                fontWeight: 'bold'
              }}>
                Professional
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {skills.soft.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#f0e6ff',
                    color: '#764ba2',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    fontSize: '9px',
                    fontWeight: '500',
                    border: '1px solid #e1d4f7'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '0' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#667eea', 
            marginBottom: '8px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            position: 'relative',
            paddingBottom: '5px'
          }}>
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '30px',
              height: '2px',
              background: 'linear-gradient(90deg, #667eea, #764ba2)'
            }} />
            KEY PROJECTS
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '8px',
              padding: '12px',
              border: '1px solid #e1e5e9',
              borderRadius: '8px',
              backgroundColor: '#fafbfc'
            }}>
              <h3 style={{ 
                fontSize: '12px', 
                margin: '0 0 5px 0', 
                fontWeight: 'bold'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                margin: '0 0 5px 0', 
                fontSize: '10px',
                lineHeight: '1.5'
              }}>
                {project.description}
              </p>
              {project.technologies && (
                <div style={{ 
                  fontSize: '9px', 
                  color: '#666',
                  fontStyle: 'italic'
                }}>
                  Technologies: {project.technologies}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template11;