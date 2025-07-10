import React from 'react';

const Template12 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Kevin Park',
      email: 'kevin.park@email.com',
      phone: '+1 (555) 234-5678',
      address: 'San Diego, CA',
      linkedin: 'linkedin.com/in/kevinpark',
      github: 'github.com/kevinpark',
      portfolio: 'kevinpark.dev',
      summary: 'Innovative product manager with 5+ years of experience in agile development, user research, and product strategy. Passionate about building user-centric products that drive business growth.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior Product Manager',
        company: 'TechFlow Solutions',
        location: 'San Diego, CA',
        startDate: '2022-02',
        endDate: '',
        current: true,
        description: '• Led product roadmap for B2B SaaS platform with 10K+ users\n• Increased user engagement by 40% through feature optimization\n• Collaborated with engineering and design teams in agile environment'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Master of Business Administration',
        institution: 'UC San Diego',
        location: 'San Diego, CA',
        graduationDate: '2019-06',
        gpa: '3.8/4.0',
        relevant: 'Product Management, Data Analytics, Strategic Planning'
      }
    ],
    skills: {
      technical: ['Jira', 'Confluence', 'Figma', 'SQL', 'Google Analytics', 'A/B Testing'],
      soft: ['Product Strategy', 'User Research', 'Agile Methodology', 'Cross-functional Leadership'],
      languages: ['English (Native)', 'Korean (Fluent)', 'Japanese (Conversational)']
    },
    projects: [
      {
        id: 1,
        title: 'Mobile App Redesign',
        description: 'Led complete mobile app redesign resulting in 60% increase in user retention and 4.8 app store rating.',
        technologies: 'Figma, User Research, A/B Testing, Analytics',
        link: 'https://app-redesign-case.com',
        github: '',
        duration: '6 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Open Sans, sans-serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: 'white',
      color: '#333',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Clean Minimal */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '25px',
        paddingBottom: '20px',
        borderBottom: '1px solid #ddd'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          margin: '0 0 10px 0', 
          color: '#2c3e50',
          fontWeight: '300',
          letterSpacing: '3px'
        }}>
          {personalInfo.fullName}
        </h1>
        <div style={{ 
          fontSize: '11px', 
          color: '#7f8c8d',
          display: 'flex',
          justifyContent: 'center',
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
        </div>
        {(personalInfo.linkedin || personalInfo.github || personalInfo.portfolio) && (
          <div style={{ 
            fontSize: '10px', 
            color: '#7f8c8d',
            marginTop: '5px',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
            {personalInfo.github && <span>{personalInfo.github}</span>}
            {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
          </div>
        )}
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '20px' }}>
          <p style={{ 
            margin: '0',
            textAlign: 'center',
            fontSize: '12px',
            lineHeight: '1.6',
            fontStyle: 'italic',
            color: '#34495e',
            maxWidth: '80%',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            "{personalInfo.summary}"
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ 
            fontSize: '16px', 
            color: '#2c3e50', 
            marginBottom: '15px',
            fontWeight: '600',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Experience
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '18px',
              textAlign: 'center'
            }}>
              <h3 style={{ 
                fontSize: '14px', 
                margin: '0 0 5px 0', 
                fontWeight: 'bold',
                color: '#2c3e50'
              }}>
                {exp.jobTitle}
              </h3>
              <div style={{ 
                fontSize: '12px', 
                color: '#7f8c8d', 
                marginBottom: '3px',
                fontWeight: '600'
              }}>
                {exp.company} | {exp.location}
              </div>
              <div style={{ 
                fontSize: '10px', 
                color: '#95a5a6',
                marginBottom: '10px'
              }}>
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
              {exp.description && (
                <div style={{ 
                  fontSize: '10px',
                  whiteSpace: 'pre-line',
                  textAlign: 'left',
                  maxWidth: '90%',
                  margin: '0 auto',
                  lineHeight: '1.5'
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
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ 
            fontSize: '16px', 
            color: '#2c3e50', 
            marginBottom: '15px',
            fontWeight: '600',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Education
          </h2>
          {education.map(edu => (
            <div key={edu.id} style={{ 
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{ 
                fontSize: '12px', 
                margin: '0 0 3px 0', 
                fontWeight: 'bold',
                color: '#2c3e50'
              }}>
                {edu.degree}
              </h3>
              <div style={{ 
                fontSize: '11px', 
                color: '#7f8c8d',
                marginBottom: '2px'
              }}>
                {edu.institution} | {edu.location}
              </div>
              <div style={{ 
                fontSize: '10px', 
                color: '#95a5a6'
              }}>
                {edu.graduationDate} {edu.gpa && `| GPA: ${edu.gpa}`}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ 
          fontSize: '16px', 
          color: '#2c3e50', 
          marginBottom: '15px',
          fontWeight: '600',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Skills
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          maxWidth: '80%',
          margin: '0 auto'
        }}>
          {skills.technical.length > 0 && (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: '12px', 
                marginBottom: '8px', 
                fontWeight: 'bold',
                color: '#34495e'
              }}>
                Technical
              </h3>
              <div style={{ fontSize: '10px', lineHeight: '1.6' }}>
                {skills.technical.join(' • ')}
              </div>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: '12px', 
                marginBottom: '8px', 
                fontWeight: 'bold',
                color: '#34495e'
              }}>
                Professional
              </h3>
              <div style={{ fontSize: '10px', lineHeight: '1.6' }}>
                {skills.soft.join(' • ')}
              </div>
            </div>
          )}
        </div>
        {skills.languages.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <h3 style={{ 
              fontSize: '12px', 
              marginBottom: '8px', 
              fontWeight: 'bold',
              color: '#34495e'
            }}>
              Languages
            </h3>
            <div style={{ fontSize: '10px', lineHeight: '1.6' }}>
              {skills.languages.join(' • ')}
            </div>
          </div>
        )}
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '0' }}>
          <h2 style={{ 
            fontSize: '16px', 
            color: '#2c3e50', 
            marginBottom: '10px',
            fontWeight: '600',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Key Projects
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '10px',
              textAlign: 'center'
            }}>
              <h3 style={{ 
                fontSize: '12px', 
                margin: '0 0 5px 0', 
                fontWeight: 'bold',
                color: '#2c3e50'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                margin: '0 0 5px 0', 
                fontSize: '10px',
                lineHeight: '1.5',
                maxWidth: '90%',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                {project.description}
              </p>
              {project.technologies && (
                <div style={{ 
                  fontSize: '9px', 
                  color: '#7f8c8d',
                  fontStyle: 'italic'
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

export default Template12;