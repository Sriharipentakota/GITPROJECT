import React from 'react';

const Template3 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+1 (555) 456-7890',
      address: 'Seattle, WA',
      linkedin: 'linkedin.com/in/michaelchen',
      github: 'github.com/michaelchen',
      portfolio: 'michaelchen.dev',
      summary: 'Innovative UX/UI Designer with 6+ years of experience creating user-centered digital experiences. Specialized in mobile-first design and accessibility standards.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior UX Designer',
        company: 'Design Studio Pro',
        location: 'Seattle, WA',
        startDate: '2022-03',
        endDate: '',
        current: true,
        description: 'Lead designer for mobile applications with 2M+ active users. Improved user engagement by 65% through data-driven design decisions and A/B testing.'
      },
      {
        id: 2,
        jobTitle: 'UX/UI Designer',
        company: 'Tech Innovations Inc',
        location: 'Portland, OR',
        startDate: '2020-01',
        endDate: '2022-02',
        current: false,
        description: 'Designed responsive web applications and mobile interfaces. Collaborated with development teams to ensure pixel-perfect implementation.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Fine Arts in Graphic Design',
        institution: 'Art Institute of Seattle',
        location: 'Seattle, WA',
        graduationDate: '2019-12',
        gpa: '3.7/4.0',
        relevant: 'User Experience Design, Visual Communication, Digital Media'
      }
    ],
    skills: {
      technical: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'HTML/CSS', 'Prototyping'],
      soft: ['User Research', 'Design Thinking', 'Collaboration', 'Problem Solving'],
      languages: ['English (Native)', 'Mandarin (Fluent)', 'Japanese (Intermediate)']
    },
    projects: [
      {
        id: 1,
        title: 'Mobile Banking App Redesign',
        description: 'Complete redesign of mobile banking application focusing on accessibility and user experience. Increased user satisfaction scores by 45%.',
        technologies: 'Figma, Adobe XD, User Research, Prototyping',
        link: 'https://bankingapp-redesign.com',
        github: '',
        duration: '4 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Helvetica, Arial, sans-serif', 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px',
      backgroundColor: 'white',
      color: '#333'
    }}>
      {/* Header - Modern with Color Accent */}
      <div style={{ 
        backgroundColor: '#4f46e5', 
        color: 'white', 
        padding: '35px', 
        marginBottom: '35px',
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative element */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%'
        }} />
        
        <h1 style={{ 
          fontSize: '2.8rem', 
          margin: '0 0 15px 0', 
          fontWeight: '300',
          letterSpacing: '2px',
          position: 'relative',
          zIndex: 1
        }}>
          {personalInfo.fullName}
        </h1>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginTop: '20px',
          position: 'relative',
          zIndex: 1
        }}>
          <div>
            <div style={{ fontSize: '1.1rem', marginBottom: '8px', opacity: '0.9' }}>
              📧 {personalInfo.email}
            </div>
            <div style={{ fontSize: '1.1rem', marginBottom: '8px', opacity: '0.9' }}>
              📱 {personalInfo.phone}
            </div>
            {personalInfo.address && (
              <div style={{ fontSize: '1.1rem', marginBottom: '8px', opacity: '0.9' }}>
                📍 {personalInfo.address}
              </div>
            )}
          </div>
          <div>
            {personalInfo.linkedin && (
              <div style={{ fontSize: '1rem', marginBottom: '8px', opacity: '0.9' }}>
                🔗 {personalInfo.linkedin}
              </div>
            )}
            {personalInfo.github && (
              <div style={{ fontSize: '1rem', marginBottom: '8px', opacity: '0.9' }}>
                💻 {personalInfo.github}
              </div>
            )}
            {personalInfo.portfolio && (
              <div style={{ fontSize: '1rem', marginBottom: '8px', opacity: '0.9' }}>
                🌐 {personalInfo.portfolio}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ 
          marginBottom: '35px', 
          padding: '25px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '12px',
          borderLeft: '5px solid #4f46e5'
        }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            color: '#4f46e5', 
            marginBottom: '15px', 
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            ✨ Professional Summary
          </h2>
          <p style={{ 
            lineHeight: '1.7', 
            margin: '0', 
            fontSize: '1.1rem',
            textAlign: 'justify'
          }}>
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '35px' }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            color: '#4f46e5', 
            marginBottom: '25px', 
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            💼 Experience
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '30px', 
              paddingLeft: '25px', 
              borderLeft: '4px solid #4f46e5',
              position: 'relative'
            }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-8px',
                top: '5px',
                width: '12px',
                height: '12px',
                backgroundColor: '#4f46e5',
                borderRadius: '50%'
              }} />
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  margin: '0', 
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>
                  {exp.jobTitle}
                </h3>
                <span style={{ 
                  fontSize: '0.9rem', 
                  color: 'white', 
                  backgroundColor: '#4f46e5',
                  padding: '6px 15px',
                  borderRadius: '25px',
                  fontWeight: '500',
                  whiteSpace: 'nowrap'
                }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '1rem', 
                color: '#666', 
                marginBottom: '12px',
                fontWeight: '500'
              }}>
                {exp.company} • {exp.location}
              </div>
              {exp.description && (
                <p style={{ 
                  margin: '0', 
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

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginBottom: '35px' }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            color: '#4f46e5', 
            marginBottom: '25px', 
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🎓 Education
          </h2>
          {education.map(edu => (
            <div key={edu.id} style={{ 
              marginBottom: '25px', 
              paddingLeft: '25px', 
              borderLeft: '4px solid #4f46e5',
              position: 'relative'
            }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-8px',
                top: '5px',
                width: '12px',
                height: '12px',
                backgroundColor: '#4f46e5',
                borderRadius: '50%'
              }} />
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  margin: '0', 
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>
                  {edu.degree}
                </h3>
                <span style={{ 
                  fontSize: '0.9rem', 
                  color: 'white', 
                  backgroundColor: '#4f46e5',
                  padding: '6px 15px',
                  borderRadius: '25px',
                  fontWeight: '500'
                }}>
                  {edu.graduationDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '1rem', 
                color: '#666', 
                fontWeight: '500',
                marginBottom: '5px'
              }}>
                {edu.institution} • {edu.location}
              </div>
              {edu.gpa && (
                <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>
                  GPA: {edu.gpa}
                </div>
              )}
              {edu.relevant && (
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  Relevant Coursework: {edu.relevant}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      <div style={{ marginBottom: '35px' }}>
        <h2 style={{ 
          fontSize: '1.4rem', 
          color: '#4f46e5', 
          marginBottom: '25px', 
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          🚀 Skills
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
          {skills.technical.length > 0 && (
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '15px', 
                color: '#1a1a1a',
                fontWeight: '600'
              }}>
                Technical Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills.technical.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#eff6ff',
                    color: '#4f46e5',
                    padding: '8px 16px',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid #e0e7ff'
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
                fontSize: '1.1rem', 
                marginBottom: '15px', 
                color: '#1a1a1a',
                fontWeight: '600'
              }}>
                Soft Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills.soft.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#f0fdf4',
                    color: '#16a34a',
                    padding: '8px 16px',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid #dcfce7'
                  }}>
                    {skill}
                  </span>
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
              color: '#1a1a1a',
              fontWeight: '600'
            }}>
              Languages
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skills.languages.map((language, index) => (
                <span key={index} style={{
                  backgroundColor: '#fef3c7',
                  color: '#d97706',
                  padding: '8px 16px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  border: '1px solid #fde68a'
                }}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '35px' }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            color: '#4f46e5', 
            marginBottom: '25px', 
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🎯 Projects
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '30px', 
              paddingLeft: '25px', 
              borderLeft: '4px solid #4f46e5',
              position: 'relative'
            }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-8px',
                top: '5px',
                width: '12px',
                height: '12px',
                backgroundColor: '#4f46e5',
                borderRadius: '50%'
              }} />
              
              <h3 style={{ 
                fontSize: '1.1rem', 
                margin: '0 0 8px 0', 
                fontWeight: '600',
                color: '#1a1a1a'
              }}>
                {project.title}
              </h3>
              {project.technologies && (
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: '#666', 
                  marginBottom: '12px',
                  fontWeight: '500'
                }}>
                  Technologies: {project.technologies}
                </div>
              )}
              <p style={{ 
                margin: '0 0 12px 0', 
                lineHeight: '1.6',
                textAlign: 'justify'
              }}>
                {project.description}
              </p>
              {(project.link || project.github) && (
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: '#4f46e5',
                  display: 'flex',
                  gap: '15px',
                  flexWrap: 'wrap'
                }}>
                  {project.link && (
                    <span style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '5px' 
                    }}>
                      🔗 {project.link}
                    </span>
                  )}
                  {project.github && (
                    <span style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '5px' 
                    }}>
                      📁 {project.github}
                    </span>
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

export default Template3;