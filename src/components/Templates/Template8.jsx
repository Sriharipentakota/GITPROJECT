import React from 'react';

const Template8 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Robert Johnson',
      email: 'robert.johnson@email.com',
      phone: '+1 (555) 890-1234',
      address: 'Phoenix, AZ',
      linkedin: 'linkedin.com/in/robertjohnson',
      github: 'github.com/robertjohnson',
      portfolio: 'robertjohnson.biz',
      summary: 'Strategic business analyst with 6+ years of experience in data analysis, process improvement, and project management. Expert in translating business requirements into technical solutions.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior Business Analyst',
        company: 'Enterprise Solutions Corp',
        location: 'Phoenix, AZ',
        startDate: '2020-08',
        endDate: '',
        current: true,
        description: '• Analyzed business processes and identified $2M in cost savings opportunities\n• Led cross-functional teams to implement process improvements\n• Created detailed documentation and training materials for new systems'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Master of Business Administration',
        institution: 'Arizona State University',
        location: 'Tempe, AZ',
        graduationDate: '2020-05',
        gpa: '3.9/4.0',
        relevant: 'Business Analytics, Operations Management, Strategic Planning'
      }
    ],
    skills: {
      technical: ['SQL', 'Tableau', 'Excel', 'Power BI', 'JIRA', 'Salesforce'],
      soft: ['Analytical Thinking', 'Process Improvement', 'Stakeholder Management', 'Documentation'],
      languages: ['English (Native)', 'French (Intermediate)']
    },
    projects: [
      {
        id: 1,
        title: 'Process Automation Initiative',
        description: 'Led automation project that reduced manual processing time by 60% and improved accuracy by 85%.',
        technologies: 'SQL, Power BI, Process Mapping Tools',
        link: 'https://automation-case-study.com',
        github: '',
        duration: '4 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Calibri, sans-serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: 'white',
      color: '#333',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Professional with Line */}
      <div style={{ 
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '4px solid #34495e'
      }}>
        <h1 style={{ 
          fontSize: '26px', 
          margin: '0 0 8px 0', 
          color: '#34495e',
          fontWeight: 'bold'
        }}>
          {personalInfo.fullName}
        </h1>
        <div style={{ 
          fontSize: '11px', 
          color: '#666',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <span>{personalInfo.email}</span>
          <span>•</span>
          <span>{personalInfo.phone}</span>
          {personalInfo.address && (
            <>
              <span>•</span>
              <span>{personalInfo.address}</span>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span>•</span>
              <span>{personalInfo.linkedin}</span>
            </>
          )}
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
            letterSpacing: '1px'
          }}>
            Professional Summary
          </h2>
          <p style={{ 
            margin: '0',
            textAlign: 'justify',
            paddingLeft: '10px',
            borderLeft: '3px solid #34495e'
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
            color: '#34495e', 
            marginBottom: '10px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Professional Experience
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '15px',
              paddingLeft: '10px',
              borderLeft: '3px solid #34495e'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline',
                marginBottom: '3px'
              }}>
                <h3 style={{ 
                  fontSize: '12px', 
                  margin: '0', 
                  fontWeight: 'bold'
                }}>
                  {exp.jobTitle}
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#666',
                  fontStyle: 'italic'
                }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: '#666', 
                marginBottom: '5px',
                fontWeight: '600'
              }}>
                {exp.company} | {exp.location}
              </div>
              {exp.description && (
                <div style={{ 
                  fontSize: '10px',
                  whiteSpace: 'pre-line'
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
            color: '#34495e', 
            marginBottom: '10px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Education
          </h2>
          {education.map(edu => (
            <div key={edu.id} style={{ 
              marginBottom: '10px',
              paddingLeft: '10px',
              borderLeft: '3px solid #34495e'
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
                  color: '#666'
                }}>
                  {edu.graduationDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: '#666'
              }}>
                {edu.institution} | {edu.location}
              </div>
              {edu.gpa && (
                <div style={{ fontSize: '10px', color: '#666' }}>
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
          color: '#34495e', 
          marginBottom: '10px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Core Competencies
        </h2>
        <div style={{ 
          paddingLeft: '10px',
          borderLeft: '3px solid #34495e'
        }}>
          {skills.technical.length > 0 && (
            <div style={{ marginBottom: '8px' }}>
              <strong style={{ fontSize: '11px' }}>Technical Skills: </strong>
              <span style={{ fontSize: '10px' }}>
                {skills.technical.join(' • ')}
              </span>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div style={{ marginBottom: '8px' }}>
              <strong style={{ fontSize: '11px' }}>Professional Skills: </strong>
              <span style={{ fontSize: '10px' }}>
                {skills.soft.join(' • ')}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '0' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#34495e', 
            marginBottom: '8px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Key Projects
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '8px',
              paddingLeft: '10px',
              borderLeft: '3px solid #34495e'
            }}>
              <h3 style={{ 
                fontSize: '12px', 
                margin: '0 0 3px 0', 
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

export default Template8;