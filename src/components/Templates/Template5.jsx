import React from 'react';

const Template5 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'David Kim',
      email: 'david.kim@email.com',
      phone: '+1 (555) 345-6789',
      address: 'Chicago, IL',
      linkedin: 'linkedin.com/in/davidkim',
      github: 'github.com/davidkim',
      portfolio: 'davidkim.portfolio',
      summary: 'Results-driven project manager with 8+ years of experience leading cross-functional teams. Specialized in agile methodologies and digital transformation initiatives.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior Project Manager',
        company: 'Global Solutions Inc',
        location: 'Chicago, IL',
        startDate: '2021-09',
        endDate: '',
        current: true,
        description: 'Managed $5M+ projects with 95% on-time delivery rate. Led digital transformation initiatives that improved operational efficiency by 40%.'
      },
      {
        id: 2,
        jobTitle: 'Project Coordinator',
        company: 'Tech Innovations Co',
        location: 'Milwaukee, WI',
        startDate: '2019-03',
        endDate: '2021-08',
        current: false,
        description: 'Coordinated multiple software development projects using Agile and Scrum methodologies. Facilitated communication between stakeholders and development teams.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Master of Business Administration',
        institution: 'Northwestern University',
        location: 'Evanston, IL',
        graduationDate: '2019-06',
        gpa: '3.8/4.0',
        relevant: 'Project Management, Operations Research, Strategic Management'
      }
    ],
    skills: {
      technical: ['Jira', 'Confluence', 'MS Project', 'Tableau', 'Salesforce', 'Agile/Scrum'],
      soft: ['Leadership', 'Strategic Planning', 'Risk Management', 'Stakeholder Management'],
      languages: ['English (Native)', 'Korean (Fluent)', 'Mandarin (Conversational)']
    },
    projects: [
      {
        id: 1,
        title: 'Enterprise CRM Implementation',
        description: 'Led implementation of Salesforce CRM across 5 departments with 200+ users. Delivered project 2 weeks ahead of schedule and 15% under budget.',
        technologies: 'Salesforce, Data Migration Tools, Training Platforms',
        link: 'https://crm-implementation-case.com',
        github: '',
        duration: '8 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Times, serif', 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '50px',
      backgroundColor: 'white',
      color: '#2c2c2c',
      lineHeight: '1.6'
    }}>
      {/* Header - Executive Style */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '40px',
        padding: '30px 0',
        borderTop: '4px solid #8b5a3c',
        borderBottom: '1px solid #d4af37'
      }}>
        <h1 style={{ 
          fontSize: '2.8rem', 
          margin: '0 0 15px 0', 
          color: '#8b5a3c',
          fontWeight: 'normal',
          letterSpacing: '3px',
          textTransform: 'uppercase'
        }}>
          {personalInfo.fullName}
        </h1>
        
        <div style={{ 
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '15px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <span>{personalInfo.email}</span>
          <span>|</span>
          <span>{personalInfo.phone}</span>
          {personalInfo.address && (
            <>
              <span>|</span>
              <span>{personalInfo.address}</span>
            </>
          )}
        </div>
        
        <div style={{ 
          fontSize: '1rem',
          color: '#666',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.github && (
            <>
              {personalInfo.linkedin && <span>|</span>}
              <span>{personalInfo.github}</span>
            </>
          )}
          {personalInfo.portfolio && (
            <>
              <span>|</span>
              <span>{personalInfo.portfolio}</span>
            </>
          )}
        </div>
      </div>

      {/* Executive Summary */}
      {personalInfo.summary && (
        <div style={{ 
          marginBottom: '40px',
          padding: '25px',
          backgroundColor: '#faf9f7',
          border: '1px solid #e8e3d8',
          borderRadius: '4px'
        }}>
          <h2 style={{ 
            fontSize: '1.3rem', 
            color: '#8b5a3c', 
            marginBottom: '15px',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Executive Summary
          </h2>
          <p style={{ 
            lineHeight: '1.8', 
            margin: '0',
            fontSize: '1.1rem',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Professional Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            color: '#8b5a3c', 
            marginBottom: '25px',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            borderBottom: '2px solid #d4af37',
            paddingBottom: '10px'
          }}>
            Professional Experience
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '35px',
              padding: '20px 0',
              borderBottom: '1px solid #e8e3d8'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  margin: '0', 
                  fontWeight: 'bold',
                  color: '#2c2c2c'
                }}>
                  {exp.jobTitle}
                </h3>
                <span style={{ 
                  fontSize: '1rem', 
                  color: '#8b5a3c',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  marginLeft: '20px'
                }}>
                  {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '1.1rem', 
                color: '#666', 
                marginBottom: '15px',
                fontStyle: 'italic'
              }}>
                {exp.company} • {exp.location}
              </div>
              {exp.description && (
                <p style={{ 
                  margin: '0', 
                  lineHeight: '1.7',
                  textAlign: 'justify',
                  fontSize: '1rem'
                }}>
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education & Qualifications */}
      {education.length > 0 && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            color: '#8b5a3c', 
            marginBottom: '25px',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            borderBottom: '2px solid #d4af37',
            paddingBottom: '10px'
          }}>
            Education & Qualifications
          </h2>
          {education.map(edu => (
            <div key={edu.id} style={{ 
              marginBottom: '25px',
              padding: '15px 0',
              borderBottom: '1px solid #e8e3d8'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  margin: '0', 
                  fontWeight: 'bold',
                  color: '#2c2c2c'
                }}>
                  {edu.degree}
                </h3>
                <span style={{ 
                  fontSize: '1rem', 
                  color: '#8b5a3c',
                  fontWeight: 'bold'
                }}>
                  {edu.graduationDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '1.1rem', 
                color: '#666',
                fontStyle: 'italic',
                marginBottom: '8px'
              }}>
                {edu.institution} • {edu.location}
              </div>
              {edu.gpa && (
                <div style={{ fontSize: '1rem', color: '#666', marginBottom: '5px' }}>
                  <strong>GPA:</strong> {edu.gpa}
                </div>
              )}
              {edu.relevant && (
                <div style={{ 
                  fontSize: '1rem', 
                  color: '#666',
                  lineHeight: '1.5'
                }}>
                  <strong>Relevant Coursework:</strong> {edu.relevant}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Core Competencies */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '1.4rem', 
          color: '#8b5a3c', 
          marginBottom: '25px',
          fontWeight: 'bold',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          borderBottom: '2px solid #d4af37',
          paddingBottom: '10px'
        }}>
          Core Competencies
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px'
        }}>
          {skills.technical.length > 0 && (
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '15px', 
                color: '#2c2c2c',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                Technical Proficiencies
              </h3>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {skills.technical.map((skill, index) => (
                  <div key={index} style={{
                    padding: '8px 15px',
                    backgroundColor: '#faf9f7',
                    border: '1px solid #e8e3d8',
                    borderRadius: '4px',
                    textAlign: 'center',
                    fontSize: '0.95rem'
                  }}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {skills.soft.length > 0 && (
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '15px', 
                color: '#2c2c2c',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                Leadership & Management
              </h3>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {skills.soft.map((skill, index) => (
                  <div key={index} style={{
                    padding: '8px 15px',
                    backgroundColor: '#faf9f7',
                    border: '1px solid #e8e3d8',
                    borderRadius: '4px',
                    textAlign: 'center',
                    fontSize: '0.95rem'
                  }}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {skills.languages.length > 0 && (
          <div style={{ marginTop: '25px' }}>
            <h3 style={{ 
              fontSize: '1.1rem', 
              marginBottom: '15px', 
              color: '#2c2c2c',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              Language Proficiencies
            </h3>
            <div style={{ 
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              {skills.languages.map((language, index) => (
                <span key={index} style={{
                  padding: '8px 20px',
                  backgroundColor: '#8b5a3c',
                  color: 'white',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Key Projects & Achievements */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            color: '#8b5a3c', 
            marginBottom: '25px',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            borderBottom: '2px solid #d4af37',
            paddingBottom: '10px'
          }}>
            Key Projects & Achievements
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '30px',
              padding: '20px',
              backgroundColor: '#faf9f7',
              border: '1px solid #e8e3d8',
              borderRadius: '4px'
            }}>
              <h3 style={{ 
                fontSize: '1.2rem', 
                margin: '0 0 10px 0', 
                fontWeight: 'bold',
                color: '#2c2c2c'
              }}>
                {project.title}
              </h3>
              {project.technologies && (
                <div style={{ 
                  fontSize: '0.95rem', 
                  color: '#8b5a3c', 
                  marginBottom: '12px',
                  fontWeight: '600'
                }}>
                  Technologies & Tools: {project.technologies}
                </div>
              )}
              <p style={{ 
                margin: '0 0 15px 0', 
                lineHeight: '1.7',
                textAlign: 'justify',
                fontSize: '1rem'
              }}>
                {project.description}
              </p>
              {(project.link || project.github) && (
                <div style={{ 
                  fontSize: '0.95rem', 
                  color: '#666',
                  display: 'flex',
                  gap: '20px',
                  flexWrap: 'wrap'
                }}>
                  {project.link && (
                    <span><strong>Portfolio:</strong> {project.link}</span>
                  )}
                  {project.github && (
                    <span><strong>Repository:</strong> {project.github}</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template5;