import React from 'react';

const Template19 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Christopher Wilson',
      email: 'christopher.wilson@email.com',
      phone: '+1 (555) 901-2345',
      address: 'Houston, TX',
      linkedin: 'linkedin.com/in/christopherwilson',
      github: 'github.com/christopherwilson',
      portfolio: 'christopherwilson.dev',
      summary: 'Experienced DevOps engineer with 6+ years in cloud infrastructure, automation, and continuous integration. Expert in AWS, Docker, and Kubernetes with a focus on scalable solutions.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior DevOps Engineer',
        company: 'CloudTech Solutions',
        location: 'Houston, TX',
        startDate: '2021-05',
        endDate: '',
        current: true,
        description: '• Managed AWS infrastructure for 50+ microservices\n• Reduced deployment time by 80% through CI/CD automation\n• Led migration to Kubernetes, improving scalability by 300%'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Engineering',
        institution: 'Rice University',
        location: 'Houston, TX',
        graduationDate: '2018-05',
        gpa: '3.7/4.0',
        relevant: 'Systems Engineering, Network Architecture, Cloud Computing'
      }
    ],
    skills: {
      technical: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Python', 'Bash'],
      soft: ['Infrastructure Design', 'Automation', 'Monitoring', 'Problem Solving'],
      languages: ['English (Native)', 'Spanish (Intermediate)']
    },
    projects: [
      {
        id: 1,
        title: 'Multi-Cloud Infrastructure Migration',
        description: 'Led migration of legacy infrastructure to multi-cloud architecture using AWS and Azure, reducing costs by 40% and improving uptime to 99.9%.',
        technologies: 'AWS, Azure, Terraform, Kubernetes, Docker',
        link: '',
        github: 'https://github.com/chris/infrastructure',
        duration: '8 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Source Code Pro, monospace', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: '#0d1117',
      color: '#c9d1d9',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - GitHub Dark Theme Style */}
      <div style={{ 
        backgroundColor: '#161b22',
        border: '1px solid #30363d',
        borderRadius: '6px',
        padding: '20px',
        marginBottom: '20px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '12px',
          display: 'flex',
          gap: '4px'
        }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#ff5f56', borderRadius: '50%' }} />
          <div style={{ width: '12px', height: '12px', backgroundColor: '#ffbd2e', borderRadius: '50%' }} />
          <div style={{ width: '12px', height: '12px', backgroundColor: '#27ca3f', borderRadius: '50%' }} />
        </div>
        <div style={{ 
          fontSize: '10px', 
          color: '#7d8590',
          marginBottom: '8px'
        }}>
          {'$ cat /etc/passwd | grep ' + personalInfo.fullName.toLowerCase().replace(' ', '')}
        </div>
        <h1 style={{ 
          fontSize: '24px', 
          margin: '0 0 12px 0', 
          color: '#58a6ff',
          fontWeight: 'bold'
        }}>
          {personalInfo.fullName}
        </h1>
        <div style={{ 
          fontSize: '11px',
          color: '#8b949e',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px'
        }}>
          <div>
            <div style={{ marginBottom: '4px' }}>📧 {personalInfo.email}</div>
            <div style={{ marginBottom: '4px' }}>📱 {personalInfo.phone}</div>
          </div>
          <div>
            {personalInfo.address && <div style={{ marginBottom: '4px' }}>📍 {personalInfo.address}</div>}
            {personalInfo.github && <div style={{ marginBottom: '4px' }}>🐙 {personalInfo.github}</div>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '18px' }}>
          <div style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '6px',
            padding: '16px'
          }}>
            <div style={{ 
              fontSize: '12px', 
              color: '#7d8590',
              marginBottom: '8px',
              borderBottom: '1px solid #21262d',
              paddingBottom: '8px'
            }}>
              {'// README.md'}
            </div>
            <div style={{
              fontSize: '11px',
              lineHeight: '1.6',
              color: '#c9d1d9'
            }}>
              {personalInfo.summary}
            </div>
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          <div style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '6px',
            padding: '16px'
          }}>
            <div style={{ 
              fontSize: '12px', 
              color: '#7d8590',
              marginBottom: '12px',
              borderBottom: '1px solid #21262d',
              paddingBottom: '8px'
            }}>
              {'// experience.json'}
            </div>
            {experience.map(exp => (
              <div key={exp.id} style={{ 
                marginBottom: '16px',
                backgroundColor: '#0d1117',
                border: '1px solid #21262d',
                borderRadius: '6px',
                padding: '12px'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'baseline',
                  marginBottom: '6px'
                }}>
                  <h3 style={{ 
                    fontSize: '12px', 
                    margin: '0', 
                    fontWeight: 'bold',
                    color: '#58a6ff'
                  }}>
                    {exp.jobTitle}
                  </h3>
                  <span style={{ 
                    fontSize: '10px', 
                    color: '#f85149',
                    backgroundColor: '#21262d',
                    padding: '2px 6px',
                    borderRadius: '3px'
                  }}>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div style={{ 
                  fontSize: '11px', 
                  color: '#7d8590', 
                  marginBottom: '8px'
                }}>
                  {exp.company} @ {exp.location}
                </div>
                {exp.description && (
                  <div style={{ 
                    fontSize: '10px',
                    whiteSpace: 'pre-line',
                    color: '#c9d1d9',
                    backgroundColor: '#0d1117',
                    padding: '8px',
                    borderRadius: '3px',
                    border: '1px solid #21262d'
                  }}>
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
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
            <div style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '6px',
              padding: '16px'
            }}>
              <div style={{ 
                fontSize: '12px', 
                color: '#7d8590',
                marginBottom: '12px',
                borderBottom: '1px solid #21262d',
                paddingBottom: '8px'
              }}>
                {'// education.yaml'}
              </div>
              {education.map(edu => (
                <div key={edu.id} style={{ 
                  marginBottom: '12px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #21262d',
                  borderRadius: '6px',
                  padding: '10px'
                }}>
                  <h3 style={{ 
                    fontSize: '11px', 
                    margin: '0 0 4px 0', 
                    fontWeight: 'bold',
                    color: '#58a6ff'
                  }}>
                    {edu.degree}
                  </h3>
                  <div style={{ 
                    fontSize: '10px', 
                    color: '#7d8590',
                    marginBottom: '2px'
                  }}>
                    {edu.institution}
                  </div>
                  <div style={{ 
                    fontSize: '9px', 
                    color: '#8b949e'
                  }}>
                    {edu.graduationDate} | {edu.location}
                  </div>
                  {edu.gpa && (
                    <div style={{ fontSize: '9px', color: '#7d8590', marginTop: '2px' }}>
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        <div>
          <div style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '6px',
            padding: '16px'
          }}>
            <div style={{ 
              fontSize: '12px', 
              color: '#7d8590',
              marginBottom: '12px',
              borderBottom: '1px solid #21262d',
              paddingBottom: '8px'
            }}>
              {'// skills.config'}
            </div>
            {skills.technical.length > 0 && (
              <div style={{ marginBottom: '12px' }}>
                <h3 style={{ 
                  fontSize: '11px', 
                  marginBottom: '6px', 
                  fontWeight: 'bold',
                  color: '#58a6ff'
                }}>
                  technical:
                </h3>
                <div style={{ 
                  backgroundColor: '#0d1117',
                  border: '1px solid #21262d',
                  borderRadius: '6px',
                  padding: '8px'
                }}>
                  {skills.technical.map((skill, index) => (
                    <div key={index} style={{ 
                      fontSize: '10px',
                      marginBottom: '2px',
                      color: '#c9d1d9'
                    }}>
                      {'  - '}{skill}
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
                  color: '#58a6ff'
                }}>
                  professional:
                </h3>
                <div style={{ 
                  backgroundColor: '#0d1117',
                  border: '1px solid #21262d',
                  borderRadius: '6px',
                  padding: '8px'
                }}>
                  {skills.soft.map((skill, index) => (
                    <div key={index} style={{ 
                      fontSize: '10px',
                      marginBottom: '2px',
                      color: '#c9d1d9'
                    }}>
                      {'  - '}{skill}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <div style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '6px',
            padding: '16px'
          }}>
            <div style={{ 
              fontSize: '12px', 
              color: '#7d8590',
              marginBottom: '12px',
              borderBottom: '1px solid #21262d',
              paddingBottom: '8px'
            }}>
              {'// projects/'}
            </div>
            {projects.map(project => (
              <div key={project.id} style={{ 
                marginBottom: '12px',
                backgroundColor: '#0d1117',
                border: '1px solid #21262d',
                borderRadius: '6px',
                padding: '12px'
              }}>
                <h3 style={{ 
                  fontSize: '12px', 
                  margin: '0 0 6px 0', 
                  fontWeight: 'bold',
                  color: '#58a6ff'
                }}>
                  {project.title}
                </h3>
                <div style={{ 
                  fontSize: '10px',
                  lineHeight: '1.5',
                  color: '#c9d1d9',
                  marginBottom: '6px'
                }}>
                  {project.description}
                </div>
                {project.technologies && (
                  <div style={{ 
                    fontSize: '9px', 
                    color: '#7d8590'
                  }}>
                    {'# Stack: '}{project.technologies}
                  </div>
                )}
                {project.github && (
                  <div style={{ 
                    fontSize: '9px', 
                    color: '#58a6ff',
                    marginTop: '4px'
                  }}>
                    {'🔗 '}{project.github}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Template19;