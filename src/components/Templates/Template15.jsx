import React from 'react';

const Template15 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Marcus Johnson',
      email: 'marcus.johnson@email.com',
      phone: '+1 (555) 567-8901',
      address: 'Detroit, MI',
      linkedin: 'linkedin.com/in/marcusjohnson',
      github: 'github.com/marcusjohnson',
      portfolio: 'marcusjohnson.dev',
      summary: 'Experienced operations manager with 9+ years in manufacturing, process optimization, and team leadership. Expert in lean manufacturing and continuous improvement methodologies.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Operations Manager',
        company: 'Detroit Manufacturing Corp',
        location: 'Detroit, MI',
        startDate: '2019-07',
        endDate: '',
        current: true,
        description: '• Managed production facility with 150+ employees\n• Reduced operational costs by 25% through process improvements\n• Implemented lean manufacturing principles across all departments'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Industrial Engineering',
        institution: 'University of Michigan',
        location: 'Ann Arbor, MI',
        graduationDate: '2015-12',
        gpa: '3.6/4.0',
        relevant: 'Operations Research, Quality Control, Supply Chain Management'
      }
    ],
    skills: {
      technical: ['Lean Manufacturing', 'Six Sigma', 'ERP Systems', 'Quality Control', 'Supply Chain'],
      soft: ['Team Leadership', 'Process Improvement', 'Problem Solving', 'Strategic Planning'],
      languages: ['English (Native)', 'Spanish (Intermediate)']
    },
    projects: [
      {
        id: 1,
        title: 'Manufacturing Process Optimization',
        description: 'Led comprehensive process optimization initiative that increased production efficiency by 40% and reduced waste by 30%.',
        technologies: 'Lean Six Sigma, Process Mapping, Statistical Analysis',
        link: '',
        github: '',
        duration: '12 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: 'white',
      color: '#2c3e50',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Industrial/Corporate Style */}
      <div style={{ 
        marginBottom: '20px',
        backgroundColor: '#34495e',
        color: 'white',
        padding: '20px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '0',
          height: '0',
          borderLeft: '60px solid transparent',
          borderBottom: '60px solid #2c3e50'
        }} />
        <h1 style={{ 
          fontSize: '24px', 
          margin: '0 0 10px 0', 
          fontWeight: 'bold',
          letterSpacing: '1px',
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
          position: 'relative',
          zIndex: 1
        }}>
          <div>
            <div style={{ marginBottom: '3px' }}>📧 {personalInfo.email}</div>
            <div style={{ marginBottom: '3px' }}>📱 {personalInfo.phone}</div>
          </div>
          <div>
            {personalInfo.address && <div style={{ marginBottom: '3px' }}>📍 {personalInfo.address}</div>}
            {personalInfo.linkedin && <div style={{ marginBottom: '3px' }}>💼 {personalInfo.linkedin}</div>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#34495e', 
            marginBottom: '8px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            backgroundColor: '#ecf0f1',
            padding: '8px 12px',
            margin: '0 0 10px 0'
          }}>
            EXECUTIVE SUMMARY
          </h2>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '12px',
            borderLeft: '4px solid #34495e',
            fontSize: '11px',
            textAlign: 'justify'
          }}>
            {personalInfo.summary}
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#34495e', 
            marginBottom: '8px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            backgroundColor: '#ecf0f1',
            padding: '8px 12px',
            margin: '0 0 10px 0'
          }}>
            PROFESSIONAL EXPERIENCE
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '15px',
              backgroundColor: '#f8f9fa',
              padding: '12px',
              border: '1px solid #bdc3c7'
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
                  color: '#2c3e50',
                  textTransform: 'uppercase'
                }}>
                  {exp.jobTitle}
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  color: 'white',
                  backgroundColor: '#34495e',
                  padding: '4px 8px',
                  fontWeight: '500'
                }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: '#7f8c8d', 
                marginBottom: '8px',
                fontWeight: '600'
              }}>
                {exp.company} | {exp.location}
              </div>
              {exp.description && (
                <div style={{ 
                  fontSize: '10px',
                  whiteSpace: 'pre-line',
                  borderLeft: '2px solid #34495e',
                  paddingLeft: '10px'
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
        gap: '20px',
        marginBottom: '18px'
      }}>
        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 style={{ 
              fontSize: '14px', 
              color: '#34495e', 
              marginBottom: '8px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              backgroundColor: '#ecf0f1',
              padding: '8px 12px',
              margin: '0 0 10px 0'
            }}>
              EDUCATION
            </h2>
            {education.map(edu => (
              <div key={edu.id} style={{ 
                marginBottom: '10px',
                backgroundColor: '#f8f9fa',
                padding: '10px',
                border: '1px solid #bdc3c7'
              }}>
                <h3 style={{ 
                  fontSize: '11px', 
                  margin: '0 0 3px 0', 
                  fontWeight: 'bold',
                  color: '#2c3e50'
                }}>
                  {edu.degree}
                </h3>
                <div style={{ 
                  fontSize: '10px', 
                  color: '#7f8c8d',
                  marginBottom: '2px'
                }}>
                  {edu.institution}
                </div>
                <div style={{ 
                  fontSize: '9px', 
                  color: '#95a5a6'
                }}>
                  {edu.graduationDate} | {edu.location}
                </div>
                {edu.gpa && (
                  <div style={{ fontSize: '9px', color: '#7f8c8d', marginTop: '2px' }}>
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
            color: '#34495e', 
            marginBottom: '8px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            backgroundColor: '#ecf0f1',
            padding: '8px 12px',
            margin: '0 0 10px 0'
          }}>
            CORE COMPETENCIES
          </h2>
          {skills.technical.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '6px', 
                fontWeight: 'bold',
                color: '#2c3e50',
                textTransform: 'uppercase'
              }}>
                Technical Skills
              </h3>
              <div style={{ 
                backgroundColor: '#f8f9fa',
                padding: '8px',
                border: '1px solid #bdc3c7'
              }}>
                {skills.technical.map((skill, index) => (
                  <div key={index} style={{ 
                    fontSize: '10px',
                    marginBottom: '2px',
                    paddingLeft: '8px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#34495e'
                    }} />
                    {skill}
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
                color: '#2c3e50',
                textTransform: 'uppercase'
              }}>
                Leadership Skills
              </h3>
              <div style={{ 
                backgroundColor: '#f8f9fa',
                padding: '8px',
                border: '1px solid #bdc3c7'
              }}>
                {skills.soft.map((skill, index) => (
                  <div key={index} style={{ 
                    fontSize: '10px',
                    marginBottom: '2px',
                    paddingLeft: '8px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#34495e'
                    }} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#34495e', 
            marginBottom: '8px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            backgroundColor: '#ecf0f1',
            padding: '8px 12px',
            margin: '0 0 10px 0'
          }}>
            KEY ACHIEVEMENTS
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '12px',
              backgroundColor: '#f8f9fa',
              padding: '12px',
              border: '1px solid #bdc3c7',
              borderLeft: '4px solid #34495e'
            }}>
              <h3 style={{ 
                fontSize: '12px', 
                margin: '0 0 5px 0', 
                fontWeight: 'bold',
                color: '#2c3e50',
                textTransform: 'uppercase'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                margin: '0 0 5px 0', 
                fontSize: '10px',
                textAlign: 'justify'
              }}>
                {project.description}
              </p>
              {project.technologies && (
                <div style={{ 
                  fontSize: '9px', 
                  color: '#7f8c8d',
                  fontStyle: 'italic'
                }}>
                  Methodologies: {project.technologies}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template15;