import React from 'react';

const Template14 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Rachel Green',
      email: 'rachel.green@email.com',
      phone: '+1 (555) 456-7890',
      address: 'Nashville, TN',
      linkedin: 'linkedin.com/in/rachelgreen',
      github: 'github.com/rachelgreen',
      portfolio: 'rachelgreen.art',
      summary: 'Creative art director with 8+ years of experience in brand design, digital marketing, and creative campaign development. Passionate about visual storytelling and brand identity.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Art Director',
        company: 'Creative Minds Agency',
        location: 'Nashville, TN',
        startDate: '2020-09',
        endDate: '',
        current: true,
        description: '• Led creative direction for 25+ brand campaigns\n• Managed team of 6 designers and freelancers\n• Increased client satisfaction scores by 35% through innovative design solutions'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Fine Arts in Graphic Design',
        institution: 'Savannah College of Art and Design',
        location: 'Savannah, GA',
        graduationDate: '2016-05',
        gpa: '3.8/4.0',
        relevant: 'Brand Design, Typography, Digital Media, Art Direction'
      }
    ],
    skills: {
      technical: ['Adobe Creative Suite', 'Figma', 'Sketch', 'InDesign', 'After Effects', 'Cinema 4D'],
      soft: ['Creative Direction', 'Team Leadership', 'Brand Strategy', 'Visual Communication'],
      languages: ['English (Native)', 'French (Fluent)', 'Italian (Basic)']
    },
    projects: [
      {
        id: 1,
        title: 'National Brand Campaign',
        description: 'Conceptualized and executed nationwide brand campaign for Fortune 500 client, resulting in 25% increase in brand recognition.',
        technologies: 'Adobe Creative Suite, Brand Strategy, Campaign Development',
        link: 'https://brand-campaign-showcase.com',
        github: '',
        duration: '5 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Helvetica Neue, sans-serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: 'white',
      color: '#2c2c2c',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Creative Asymmetric */}
      <div style={{ 
        marginBottom: '25px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '60%',
          height: '80px',
          backgroundColor: '#ff6b6b',
          transform: 'skewX(-15deg)',
          zIndex: 0
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: '15px',
          paddingLeft: '20px'
        }}>
          <h1 style={{ 
            fontSize: '26px', 
            margin: '0 0 8px 0', 
            color: 'white',
            fontWeight: '300',
            letterSpacing: '2px'
          }}>
            {personalInfo.fullName}
          </h1>
          <div style={{ 
            fontSize: '11px', 
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '10px'
          }}>
            {personalInfo.email} | {personalInfo.phone}
          </div>
        </div>
        <div style={{
          marginTop: '10px',
          fontSize: '10px',
          color: '#666',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          {personalInfo.address && <span>📍 {personalInfo.address}</span>}
          {personalInfo.portfolio && <span>🎨 {personalInfo.portfolio}</span>}
          {personalInfo.linkedin && <span>💼 {personalInfo.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#ff6b6b', 
            marginBottom: '8px',
            fontWeight: 'bold',
            position: 'relative',
            paddingLeft: '15px'
          }}>
            <span style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '8px',
              height: '8px',
              backgroundColor: '#ff6b6b',
              borderRadius: '50%'
            }} />
            CREATIVE VISION
          </h2>
          <p style={{ 
            margin: '0',
            textAlign: 'justify',
            fontSize: '11px',
            lineHeight: '1.6',
            paddingLeft: '15px',
            borderLeft: '2px solid #ff6b6b',
            backgroundColor: '#fafafa',
            padding: '10px 10px 10px 25px'
          }}>
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#ff6b6b', 
            marginBottom: '12px',
            fontWeight: 'bold',
            position: 'relative',
            paddingLeft: '15px'
          }}>
            <span style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '8px',
              height: '8px',
              backgroundColor: '#ff6b6b',
              borderRadius: '50%'
            }} />
            EXPERIENCE
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '18px',
              position: 'relative',
              paddingLeft: '20px'
            }}>
              <div style={{
                position: 'absolute',
                left: '0',
                top: '8px',
                width: '12px',
                height: '12px',
                backgroundColor: '#4ecdc4',
                transform: 'rotate(45deg)'
              }} />
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
                  backgroundColor: '#4ecdc4',
                  padding: '3px 8px',
                  borderRadius: '0 10px 0 10px'
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
                  backgroundColor: '#f8f8f8',
                  padding: '8px',
                  borderRadius: '5px',
                  borderLeft: '3px solid #4ecdc4'
                }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Two Column Layout */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '25px',
        marginBottom: '20px'
      }}>
        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 style={{ 
              fontSize: '14px', 
              color: '#ff6b6b', 
              marginBottom: '12px',
              fontWeight: 'bold',
              position: 'relative',
              paddingLeft: '15px'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '8px',
                height: '8px',
                backgroundColor: '#ff6b6b',
                borderRadius: '50%'
              }} />
              EDUCATION
            </h2>
            {education.map(edu => (
              <div key={edu.id} style={{ 
                marginBottom: '12px',
                backgroundColor: '#fafafa',
                padding: '10px',
                borderRadius: '5px',
                borderTop: '3px solid #45b7d1'
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
                  {edu.institution}
                </div>
                <div style={{ 
                  fontSize: '9px', 
                  color: '#999'
                }}>
                  {edu.graduationDate} | {edu.location}
                </div>
                {edu.gpa && (
                  <div style={{ fontSize: '9px', color: '#666', marginTop: '2px' }}>
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
            fontSize: '14px', 
            color: '#ff6b6b', 
            marginBottom: '12px',
            fontWeight: 'bold',
            position: 'relative',
            paddingLeft: '15px'
          }}>
            <span style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '8px',
              height: '8px',
              backgroundColor: '#ff6b6b',
              borderRadius: '50%'
            }} />
            SKILLS
          </h2>
          {skills.technical.length > 0 && (
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '8px', 
                fontWeight: 'bold',
                color: '#4ecdc4'
              }}>
                Creative Tools
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {skills.technical.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#4ecdc4',
                    color: 'white',
                    padding: '3px 8px',
                    borderRadius: '0 8px 0 8px',
                    fontSize: '9px',
                    fontWeight: '500'
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
                fontWeight: 'bold',
                color: '#45b7d1'
              }}>
                Creative Leadership
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {skills.soft.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#45b7d1',
                    color: 'white',
                    padding: '3px 8px',
                    borderRadius: '8px 0 8px 0',
                    fontSize: '9px',
                    fontWeight: '500'
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
            color: '#ff6b6b', 
            marginBottom: '8px',
            fontWeight: 'bold',
            position: 'relative',
            paddingLeft: '15px'
          }}>
            <span style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '8px',
              height: '8px',
              backgroundColor: '#ff6b6b',
              borderRadius: '50%'
            }} />
            FEATURED WORK
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '8px',
              backgroundColor: '#fafafa',
              padding: '12px',
              borderRadius: '8px',
              borderLeft: '4px solid #ff6b6b',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '20px',
                height: '20px',
                backgroundColor: '#ff6b6b',
                borderRadius: '50%',
                opacity: '0.2'
              }} />
              <h3 style={{ 
                fontSize: '12px', 
                margin: '0 0 5px 0', 
                fontWeight: 'bold',
                color: '#2c2c2c'
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
                  Tools: {project.technologies}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template14;