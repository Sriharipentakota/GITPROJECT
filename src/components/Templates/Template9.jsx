import React from 'react';

const Template9 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Jennifer Lee',
      email: 'jennifer.lee@email.com',
      phone: '+1 (555) 901-2345',
      address: 'Portland, OR',
      linkedin: 'linkedin.com/in/jenniferlee',
      github: 'github.com/jenniferlee',
      portfolio: 'jenniferlee.portfolio',
      summary: 'Dedicated healthcare professional with 4+ years of experience in patient care, medical administration, and healthcare technology implementation.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Registered Nurse',
        company: 'Portland General Hospital',
        location: 'Portland, OR',
        startDate: '2021-06',
        endDate: '',
        current: true,
        description: '• Provided direct patient care for 15-20 patients per shift\n• Collaborated with multidisciplinary healthcare teams\n• Implemented new electronic health record system'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Nursing',
        institution: 'Oregon Health & Science University',
        location: 'Portland, OR',
        graduationDate: '2021-05',
        gpa: '3.8/4.0',
        relevant: 'Clinical Practice, Pharmacology, Patient Care'
      }
    ],
    skills: {
      technical: ['Electronic Health Records', 'Medical Equipment', 'IV Therapy', 'Medication Administration'],
      soft: ['Patient Care', 'Communication', 'Critical Thinking', 'Team Collaboration'],
      languages: ['English (Native)', 'Korean (Fluent)']
    },
    projects: [
      {
        id: 1,
        title: 'Patient Care Quality Initiative',
        description: 'Led quality improvement project that reduced patient wait times by 30% and improved satisfaction scores.',
        technologies: 'Healthcare Analytics, Process Improvement',
        link: '',
        github: '',
        duration: '6 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Verdana, sans-serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: 'white',
      color: '#2c3e50',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Clean Medical Style */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#ecf0f1',
        borderRadius: '5px'
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          margin: '0 0 10px 0', 
          color: '#2c3e50',
          fontWeight: 'bold'
        }}>
          {personalInfo.fullName}
        </h1>
        <div style={{ 
          fontSize: '11px', 
          color: '#34495e',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <span>✉ {personalInfo.email}</span>
          <span>📞 {personalInfo.phone}</span>
          {personalInfo.address && <span>📍 {personalInfo.address}</span>}
          {personalInfo.linkedin && <span>💼 {personalInfo.linkedin}</span>}
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
            backgroundColor: '#ecf0f1',
            padding: '8px 12px',
            borderRadius: '3px'
          }}>
            PROFESSIONAL PROFILE
          </h2>
          <p style={{ 
            margin: '0',
            textAlign: 'justify',
            padding: '0 10px'
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
            backgroundColor: '#ecf0f1',
            padding: '8px 12px',
            borderRadius: '3px'
          }}>
            PROFESSIONAL EXPERIENCE
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '15px',
              padding: '10px',
              border: '1px solid #bdc3c7',
              borderRadius: '5px'
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
                  color: '#2c3e50'
                }}>
                  {exp.jobTitle}
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#7f8c8d',
                  backgroundColor: '#ecf0f1',
                  padding: '2px 8px',
                  borderRadius: '10px'
                }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: '#34495e', 
                marginBottom: '8px',
                fontWeight: '600'
              }}>
                {exp.company} • {exp.location}
              </div>
              {exp.description && (
                <div style={{ 
                  fontSize: '10px',
                  whiteSpace: 'pre-line',
                  color: '#2c3e50'
                }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#2c3e50', 
            marginBottom: '10px',
            fontWeight: 'bold',
            backgroundColor: '#ecf0f1',
            padding: '8px 12px',
            borderRadius: '3px'
          }}>
            EDUCATION
          </h2>
          {education.map(edu => (
            <div key={edu.id} style={{ 
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #bdc3c7',
              borderRadius: '5px'
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

      {/* Skills */}
      <div style={{ marginBottom: '18px' }}>
        <h2 style={{ 
          fontSize: '14px', 
          color: '#2c3e50', 
          marginBottom: '10px',
          fontWeight: 'bold',
          backgroundColor: '#ecf0f1',
          padding: '8px 12px',
          borderRadius: '3px'
        }}>
          CORE COMPETENCIES
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '15px',
          padding: '0 10px'
        }}>
          {skills.technical.length > 0 && (
            <div>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '6px', 
                fontWeight: 'bold',
                color: '#2c3e50'
              }}>
                Technical Skills
              </h3>
              <div style={{ fontSize: '10px', lineHeight: '1.5' }}>
                {skills.technical.map((skill, index) => (
                  <div key={index} style={{ marginBottom: '2px' }}>
                    ▪ {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '6px', 
                fontWeight: 'bold',
                color: '#2c3e50'
              }}>
                Professional Skills
              </h3>
              <div style={{ fontSize: '10px', lineHeight: '1.5' }}>
                {skills.soft.map((skill, index) => (
                  <div key={index} style={{ marginBottom: '2px' }}>
                    ▪ {skill}
                  </div>
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
            color: '#2c3e50', 
            marginBottom: '8px',
            fontWeight: 'bold',
            backgroundColor: '#ecf0f1',
            padding: '8px 12px',
            borderRadius: '3px'
          }}>
            KEY ACHIEVEMENTS
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '8px',
              padding: '10px',
              border: '1px solid #bdc3c7',
              borderRadius: '5px'
            }}>
              <h3 style={{ 
                fontSize: '12px', 
                margin: '0 0 5px 0', 
                fontWeight: 'bold'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                margin: '0', 
                fontSize: '10px'
              }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template9;