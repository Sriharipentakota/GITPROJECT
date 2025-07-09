import React from 'react';

const Template16 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Sophia Martinez',
      email: 'sophia.martinez@email.com',
      phone: '+1 (555) 678-9012',
      address: 'Austin, TX',
      linkedin: 'linkedin.com/in/sophiamartinez',
      github: 'github.com/sophiamartinez',
      portfolio: 'sophiamartinez.dev',
      summary: 'Passionate UX researcher with 4+ years of experience in user-centered design, usability testing, and design thinking. Expert in translating user insights into actionable design recommendations.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'UX Researcher',
        company: 'Design Innovation Lab',
        location: 'Austin, TX',
        startDate: '2021-08',
        endDate: '',
        current: true,
        description: '• Conducted user research for 15+ product features\n• Improved user satisfaction by 45% through research-driven design changes\n• Led usability testing sessions with 200+ participants'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Master of Science in Human-Computer Interaction',
        institution: 'University of Texas at Austin',
        location: 'Austin, TX',
        graduationDate: '2021-05',
        gpa: '3.9/4.0',
        relevant: 'User Research, Interaction Design, Cognitive Psychology'
      }
    ],
    skills: {
      technical: ['Figma', 'Sketch', 'UserTesting', 'Miro', 'Optimal Workshop', 'SPSS'],
      soft: ['User Research', 'Design Thinking', 'Data Analysis', 'Stakeholder Communication'],
      languages: ['English (Native)', 'Spanish (Native)', 'Portuguese (Intermediate)']
    },
    projects: [
      {
        id: 1,
        title: 'Mobile App Usability Study',
        description: 'Conducted comprehensive usability study for mobile banking app, identifying key pain points and recommending design improvements that increased task completion rate by 35%.',
        technologies: 'UserTesting, Figma, Statistical Analysis, Journey Mapping',
        link: 'https://ux-research-case.com',
        github: '',
        duration: '3 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Lato, sans-serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: 'white',
      color: '#333',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Modern Card Style */}
      <div style={{ 
        backgroundColor: '#6c5ce7',
        color: 'white',
        padding: '25px',
        marginBottom: '20px',
        borderRadius: '15px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '120px',
          height: '120px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '-20px',
          width: '80px',
          height: '80px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%'
        }} />
        <h1 style={{ 
          fontSize: '28px', 
          margin: '0 0 12px 0', 
          fontWeight: '300',
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
          gap: '12px',
          opacity: '0.95',
          position: 'relative',
          zIndex: 1
        }}>
          <div>
            <div style={{ marginBottom: '5px' }}>✉ {personalInfo.email}</div>
            <div style={{ marginBottom: '5px' }}>📱 {personalInfo.phone}</div>
          </div>
          <div>
            {personalInfo.address && <div style={{ marginBottom: '5px' }}>📍 {personalInfo.address}</div>}
            {personalInfo.portfolio && <div style={{ marginBottom: '5px' }}>🌐 {personalInfo.portfolio}</div>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#6c5ce7', 
            marginBottom: '8px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#6c5ce7',
              borderRadius: '2px'
            }} />
            ABOUT ME
          </h2>
          <div style={{
            backgroundColor: '#f8f9ff',
            padding: '15px',
            borderRadius: '10px',
            borderLeft: '4px solid #6c5ce7',
            fontSize: '11px',
            textAlign: 'justify',
            lineHeight: '1.6'
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
            color: '#6c5ce7', 
            marginBottom: '10px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#6c5ce7',
              borderRadius: '2px'
            }} />
            EXPERIENCE
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '15px',
              backgroundColor: '#f8f9ff',
              padding: '15px',
              borderRadius: '10px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '8px',
                height: '8px',
                backgroundColor: '#a29bfe',
                borderRadius: '50%'
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
                  color: '#2d3436'
                }}>
                  {exp.jobTitle}
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  color: 'white',
                  backgroundColor: '#a29bfe',
                  padding: '4px 10px',
                  borderRadius: '15px',
                  fontWeight: '500'
                }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: '#636e72', 
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
              color: '#6c5ce7', 
              marginBottom: '10px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '25px',
                height: '3px',
                backgroundColor: '#6c5ce7',
                borderRadius: '2px'
              }} />
              EDUCATION
            </h2>
            {education.map(edu => (
              <div key={edu.id} style={{ 
                marginBottom: '10px',
                backgroundColor: '#f8f9ff',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #e3e1fc'
              }}>
                <h3 style={{ 
                  fontSize: '11px', 
                  margin: '0 0 3px 0', 
                  fontWeight: 'bold',
                  color: '#2d3436'
                }}>
                  {edu.degree}
                </h3>
                <div style={{ 
                  fontSize: '10px', 
                  color: '#636e72',
                  marginBottom: '2px'
                }}>
                  {edu.institution}
                </div>
                <div style={{ 
                  fontSize: '9px', 
                  color: '#74b9ff'
                }}>
                  {edu.graduationDate} • {edu.location}
                </div>
                {edu.gpa && (
                  <div style={{ fontSize: '9px', color: '#636e72', marginTop: '2px' }}>
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
            color: '#6c5ce7', 
            marginBottom: '10px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#6c5ce7',
              borderRadius: '2px'
            }} />
            SKILLS
          </h2>
          {skills.technical.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '6px', 
                fontWeight: 'bold',
                color: '#2d3436'
              }}>
                Tools & Technologies
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {skills.technical.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#74b9ff',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '15px',
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
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '6px', 
                fontWeight: 'bold',
                color: '#2d3436'
              }}>
                Research Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {skills.soft.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#a29bfe',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    fontSize: '9px',
                    fontWeight: '500'
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
                marginBottom: '6px', 
                fontWeight: 'bold',
                color: '#2d3436'
              }}>
                Languages
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {skills.languages.map((language, index) => (
                  <span key={index} style={{
                    backgroundColor: '#fd79a8',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    fontSize: '9px',
                    fontWeight: '500'
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
        <div>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#6c5ce7', 
            marginBottom: '10px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#6c5ce7',
              borderRadius: '2px'
            }} />
            FEATURED PROJECTS
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '12px',
              backgroundColor: '#f8f9ff',
              padding: '15px',
              borderRadius: '10px',
              border: '1px solid #e3e1fc'
            }}>
              <h3 style={{ 
                fontSize: '12px', 
                margin: '0 0 5px 0', 
                fontWeight: 'bold',
                color: '#2d3436'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                margin: '0 0 8px 0', 
                fontSize: '10px',
                lineHeight: '1.5',
                textAlign: 'justify'
              }}>
                {project.description}
              </p>
              {project.technologies && (
                <div style={{ 
                  fontSize: '9px', 
                  color: '#636e72',
                  fontStyle: 'italic'
                }}>
                  Methods & Tools: {project.technologies}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template16;