import React from 'react';

const Template18 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Isabella Davis',
      email: 'isabella.davis@email.com',
      phone: '+1 (555) 890-1234',
      address: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/isabelladavis',
      github: 'github.com/isabelladavis',
      portfolio: 'isabelladavis.com',
      summary: 'Innovative product designer with 5+ years of experience in user interface design, design systems, and cross-functional collaboration. Passionate about creating intuitive digital experiences.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior Product Designer',
        company: 'Design Forward Inc',
        location: 'San Francisco, CA',
        startDate: '2022-01',
        endDate: '',
        current: true,
        description: '• Led design for 3 major product launches with 2M+ users\n• Established design system used across 15+ product teams\n• Improved user engagement by 55% through design optimization'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Arts in Visual Design',
        institution: 'California College of the Arts',
        location: 'San Francisco, CA',
        graduationDate: '2019-05',
        gpa: '3.9/4.0',
        relevant: 'User Interface Design, Design Thinking, Visual Communication'
      }
    ],
    skills: {
      technical: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle', 'Framer', 'HTML/CSS'],
      soft: ['Design Thinking', 'User Empathy', 'Cross-functional Collaboration', 'Design Strategy'],
      languages: ['English (Native)', 'Italian (Fluent)', 'French (Conversational)']
    },
    projects: [
      {
        id: 1,
        title: 'E-commerce Mobile App Redesign',
        description: 'Led complete redesign of mobile shopping experience, resulting in 40% increase in conversion rate and 4.9 app store rating.',
        technologies: 'Figma, User Research, Prototyping, A/B Testing',
        link: 'https://ecommerce-redesign.com',
        github: '',
        duration: '4 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Inter, sans-serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: 'white',
      color: '#1a1a1a',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Elegant Minimal */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '30px',
        paddingBottom: '20px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #ff6b9d, transparent)'
        }} />
        <h1 style={{ 
          fontSize: '36px', 
          margin: '20px 0 15px 0', 
          color: '#1a1a1a',
          fontWeight: '100',
          letterSpacing: '4px'
        }}>
          {personalInfo.fullName}
        </h1>
        <div style={{ 
          fontSize: '11px', 
          color: '#666',
          marginBottom: '10px',
          letterSpacing: '1px'
        }}>
          {personalInfo.email} • {personalInfo.phone}
          {personalInfo.address && ` • ${personalInfo.address}`}
        </div>
        {(personalInfo.portfolio || personalInfo.linkedin) && (
          <div style={{ 
            fontSize: '10px', 
            color: '#999',
            letterSpacing: '0.5px'
          }}>
            {personalInfo.portfolio && personalInfo.portfolio}
            {personalInfo.linkedin && (personalInfo.portfolio ? ` • ${personalInfo.linkedin}` : personalInfo.linkedin)}
          </div>
        )}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '1px',
          backgroundColor: '#ff6b9d'
        }} />
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '25px' }}>
          <p style={{ 
            margin: '0',
            textAlign: 'center',
            fontSize: '12px',
            lineHeight: '1.8',
            fontStyle: 'italic',
            color: '#333',
            maxWidth: '85%',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            paddingTop: '15px',
            paddingBottom: '15px'
          }}>
            <span style={{
              position: 'absolute',
              top: '0',
              left: '20px',
              fontSize: '24px',
              color: '#ff6b9d',
              opacity: '0.3'
            }}>"</span>
            {personalInfo.summary}
            <span style={{
              position: 'absolute',
              bottom: '0',
              right: '20px',
              fontSize: '24px',
              color: '#ff6b9d',
              opacity: '0.3'
            }}>"</span>
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ 
            fontSize: '18px', 
            color: '#1a1a1a', 
            marginBottom: '20px',
            fontWeight: '100',
            textAlign: 'center',
            letterSpacing: '3px',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              right: '0',
              height: '1px',
              backgroundColor: '#eee',
              zIndex: 0
            }} />
            <span style={{
              backgroundColor: 'white',
              padding: '0 20px',
              position: 'relative',
              zIndex: 1
            }}>
              EXPERIENCE
            </span>
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '20px',
              textAlign: 'center',
              position: 'relative',
              paddingBottom: '15px'
            }}>
              <h3 style={{ 
                fontSize: '14px', 
                margin: '0 0 5px 0', 
                fontWeight: '600',
                color: '#1a1a1a',
                letterSpacing: '1px'
              }}>
                {exp.jobTitle}
              </h3>
              <div style={{ 
                fontSize: '12px', 
                color: '#ff6b9d', 
                marginBottom: '3px',
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}>
                {exp.company}
              </div>
              <div style={{ 
                fontSize: '10px', 
                color: '#999',
                marginBottom: '12px'
              }}>
                {exp.location} • {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
              {exp.description && (
                <div style={{ 
                  fontSize: '10px',
                  whiteSpace: 'pre-line',
                  textAlign: 'left',
                  maxWidth: '90%',
                  margin: '0 auto',
                  lineHeight: '1.6',
                  backgroundColor: '#fafafa',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #f0f0f0'
                }}>
                  {exp.description}
                </div>
              )}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '30px',
                height: '1px',
                backgroundColor: '#ff6b9d',
                opacity: '0.3'
              }} />
            </div>
          ))}
        </div>
      )}

      {/* Two Column Layout */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
        marginBottom: '25px'
      }}>
        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 style={{ 
              fontSize: '16px', 
              color: '#1a1a1a', 
              marginBottom: '15px',
              fontWeight: '100',
              textAlign: 'center',
              letterSpacing: '2px'
            }}>
              EDUCATION
            </h2>
            {education.map(edu => (
              <div key={edu.id} style={{ 
                marginBottom: '12px',
                textAlign: 'center',
                padding: '15px',
                backgroundColor: '#fafafa',
                borderRadius: '8px',
                border: '1px solid #f0f0f0'
              }}>
                <h3 style={{ 
                  fontSize: '11px', 
                  margin: '0 0 5px 0', 
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>
                  {edu.degree}
                </h3>
                <div style={{ 
                  fontSize: '10px', 
                  color: '#ff6b9d',
                  marginBottom: '3px',
                  fontWeight: '500'
                }}>
                  {edu.institution}
                </div>
                <div style={{ 
                  fontSize: '9px', 
                  color: '#999'
                }}>
                  {edu.graduationDate} • {edu.location}
                </div>
                {edu.gpa && (
                  <div style={{ fontSize: '9px', color: '#666', marginTop: '3px' }}>
                    GPA: {edu.gpa}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        <div>
          <h2 style={{ 
            fontSize: '16px', 
            color: '#1a1a1a', 
            marginBottom: '15px',
            fontWeight: '100',
            textAlign: 'center',
            letterSpacing: '2px'
          }}>
            SKILLS
          </h2>
          {skills.technical.length > 0 && (
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '8px', 
                fontWeight: '600',
                textAlign: 'center',
                color: '#1a1a1a'
              }}>
                Design Tools
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '6px',
                justifyContent: 'center'
              }}>
                {skills.technical.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#ff6b9d',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '9px',
                    fontWeight: '500',
                    letterSpacing: '0.5px'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '8px', 
                fontWeight: '600',
                textAlign: 'center',
                color: '#1a1a1a'
              }}>
                Design Skills
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '6px',
                justifyContent: 'center'
              }}>
                {skills.soft.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#c44569',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '9px',
                    fontWeight: '500',
                    letterSpacing: '0.5px'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          {skills.languages.length > 0 && (
            <div>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '8px', 
                fontWeight: '600',
                textAlign: 'center',
                color: '#1a1a1a'
              }}>
                Languages
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '6px',
                justifyContent: 'center'
              }}>
                {skills.languages.map((language, index) => (
                  <span key={index} style={{
                    backgroundColor: '#f8b500',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '9px',
                    fontWeight: '500',
                    letterSpacing: '0.5px'
                  }}>
                    {language}
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
            fontSize: '18px', 
            color: '#1a1a1a', 
            marginBottom: '12px',
            fontWeight: '100',
            textAlign: 'center',
            letterSpacing: '3px',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              right: '0',
              height: '1px',
              backgroundColor: '#eee',
              zIndex: 0
            }} />
            <span style={{
              backgroundColor: 'white',
              padding: '0 20px',
              position: 'relative',
              zIndex: 1
            }}>
              FEATURED WORK
            </span>
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '10px',
              textAlign: 'center',
              padding: '20px',
              backgroundColor: '#fafafa',
              borderRadius: '12px',
              border: '1px solid #f0f0f0'
            }}>
              <h3 style={{ 
                fontSize: '14px', 
                margin: '0 0 8px 0', 
                fontWeight: '600',
                color: '#1a1a1a',
                letterSpacing: '1px'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                margin: '0 0 8px 0', 
                fontSize: '10px',
                lineHeight: '1.6',
                maxWidth: '90%',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                {project.description}
              </p>
              {project.technologies && (
                <div style={{ 
                  fontSize: '9px', 
                  color: '#ff6b9d',
                  fontStyle: 'italic',
                  letterSpacing: '0.5px'
                }}>
                  {project.technologies}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template18;