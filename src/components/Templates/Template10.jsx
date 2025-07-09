import React from 'react';

const Template10 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Thomas Wilson',
      email: 'thomas.wilson@email.com',
      phone: '+1 (555) 012-3456',
      address: 'Atlanta, GA',
      linkedin: 'linkedin.com/in/thomaswilson',
      github: 'github.com/thomaswilson',
      portfolio: 'thomaswilson.dev',
      summary: 'Experienced software engineer with 7+ years in full-stack development, cloud architecture, and team leadership. Passionate about scalable solutions and mentoring developers.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Lead Software Engineer',
        company: 'Tech Innovations Atlanta',
        location: 'Atlanta, GA',
        startDate: '2021-01',
        endDate: '',
        current: true,
        description: '• Led team of 8 developers in building microservices architecture\n• Reduced system downtime by 90% through improved monitoring and deployment\n• Mentored junior developers and established coding standards'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Master of Science in Computer Science',
        institution: 'Georgia Institute of Technology',
        location: 'Atlanta, GA',
        graduationDate: '2017-12',
        gpa: '3.9/4.0',
        relevant: 'Software Engineering, Distributed Systems, Machine Learning'
      }
    ],
    skills: {
      technical: ['Java', 'Python', 'React', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
      soft: ['Technical Leadership', 'Mentoring', 'System Design', 'Code Review'],
      languages: ['English (Native)', 'German (Intermediate)']
    },
    projects: [
      {
        id: 1,
        title: 'Microservices Migration',
        description: 'Led migration from monolithic architecture to microservices, improving scalability and reducing deployment time by 75%.',
        technologies: 'Java, Spring Boot, Docker, Kubernetes, AWS',
        link: 'https://microservices-case.com',
        github: 'https://github.com/thomas/microservices',
        duration: '8 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Tahoma, sans-serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: 'white',
      color: '#1a1a1a',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Tech Style with Accent */}
      <div style={{ 
        marginBottom: '20px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '4px',
          background: 'linear-gradient(90deg, #3498db, #2ecc71, #f39c12)',
          borderRadius: '2px'
        }} />
        <div style={{ paddingTop: '15px' }}>
          <h1 style={{ 
            fontSize: '28px', 
            margin: '0 0 8px 0', 
            color: '#2c3e50',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            {personalInfo.fullName}
          </h1>
          <div style={{ 
            fontSize: '11px', 
            color: '#34495e',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <span>📧 {personalInfo.email}</span>
            <span>📱 {personalInfo.phone}</span>
            {personalInfo.address && <span>📍 {personalInfo.address}</span>}
            {personalInfo.linkedin && <span>💼 {personalInfo.linkedin}</span>}
            {personalInfo.github && <span>💻 {personalInfo.github}</span>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#2c3e50', 
            marginBottom: '8px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ 
              width: '20px', 
              height: '3px', 
              backgroundColor: '#3498db',
              borderRadius: '2px'
            }} />
            TECHNICAL SUMMARY
          </h2>
          <p style={{ 
            margin: '0',
            textAlign: 'justify',
            backgroundColor: '#f8f9fa',
            padding: '12px',
            borderRadius: '5px',
            borderLeft: '4px solid #3498db'
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
            color: '#2c3e50', 
            marginBottom: '10px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ 
              width: '20px', 
              height: '3px', 
              backgroundColor: '#2ecc71',
              borderRadius: '2px'
            }} />
            PROFESSIONAL EXPERIENCE
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '15px',
              position: 'relative',
              paddingLeft: '15px'
            }}>
              <div style={{
                position: 'absolute',
                left: '0',
                top: '5px',
                width: '8px',
                height: '8px',
                backgroundColor: '#2ecc71',
                borderRadius: '50%'
              }} />
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline',
                marginBottom: '3px'
              }}>
                <h3 style={{ 
                  fontSize: '12px', 
                  margin: '0', 
                  fontWeight: 'bold',
                  color: '#2c3e50'
                }}>
                  {exp.jobTitle} @ {exp.company}
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#7f8c8d',
                  backgroundColor: '#ecf0f1',
                  padding: '3px 8px',
                  borderRadius: '12px'
                }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '10px', 
                color: '#7f8c8d', 
                marginBottom: '8px'
              }}>
                📍 {exp.location}
              </div>
              {exp.description && (
                <div style={{ 
                  fontSize: '10px',
                  whiteSpace: 'pre-line',
                  backgroundColor: '#f8f9fa',
                  padding: '8px',
                  borderRadius: '3px'
                }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      <div style={{ marginBottom: '18px' }}>
        <h2 style={{ 
          fontSize: '14px', 
          color: '#2c3e50', 
          marginBottom: '10px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ 
            width: '20px', 
            height: '3px', 
            backgroundColor: '#f39c12',
            borderRadius: '2px'
          }} />
          TECHNICAL SKILLS
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '15px'
        }}>
          {skills.technical.length > 0 && (
            <div>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '8px', 
                fontWeight: 'bold',
                color: '#2c3e50'
              }}>
                Technologies & Tools
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {skills.technical.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
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
            <div>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '8px', 
                fontWeight: 'bold',
                color: '#2c3e50'
              }}>
                Leadership & Soft Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {skills.soft.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#2ecc71',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
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

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#2c3e50', 
            marginBottom: '10px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ 
              width: '20px', 
              height: '3px', 
              backgroundColor: '#9b59b6',
              borderRadius: '2px'
            }} />
            EDUCATION
          </h2>
          {education.map(edu => (
            <div key={edu.id} style={{ 
              marginBottom: '10px',
              backgroundColor: '#f8f9fa',
              padding: '10px',
              borderRadius: '5px',
              borderLeft: '4px solid #9b59b6'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline'
              }}>
                <h3 style={{ 
                  fontSize: '12px', 
                  margin: '0', 
                  fontWeight: 'bold'
                }}>
                  {edu.degree}
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#7f8c8d'
                }}>
                  {edu.graduationDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: '#34495e',
                marginTop: '3px'
              }}>
                {edu.institution} • {edu.location}
              </div>
              {edu.gpa && (
                <div style={{ fontSize: '10px', color: '#7f8c8d', marginTop: '2px' }}>
                  GPA: {edu.gpa}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#2c3e50', 
            marginBottom: '10px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ 
              width: '20px', 
              height: '3px', 
              backgroundColor: '#e74c3c',
              borderRadius: '2px'
            }} />
            KEY PROJECTS
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '12px',
              backgroundColor: '#f8f9fa',
              padding: '10px',
              borderRadius: '5px',
              borderLeft: '4px solid #e74c3c'
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
                fontSize: '10px'
              }}>
                {project.description}
              </p>
              {project.technologies && (
                <div style={{ 
                  fontSize: '9px', 
                  color: '#7f8c8d'
                }}>
                  Tech Stack: {project.technologies}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template10;