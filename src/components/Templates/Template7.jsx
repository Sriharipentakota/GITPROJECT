import React from 'react';

const Template7 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      phone: '+1 (555) 789-0123',
      address: 'Miami, FL',
      linkedin: 'linkedin.com/in/mariagarcia',
      github: 'github.com/mariagarcia',
      portfolio: 'mariagarcia.design',
      summary: 'Creative graphic designer with 5+ years of experience in branding, digital design, and user interface design. Passionate about creating visually compelling solutions.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior Graphic Designer',
        company: 'Creative Studio Miami',
        location: 'Miami, FL',
        startDate: '2021-03',
        endDate: '',
        current: true,
        description: '• Led brand identity projects for 20+ clients\n• Designed marketing materials that increased engagement by 45%\n• Mentored junior designers and established design guidelines'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Fine Arts in Graphic Design',
        institution: 'Florida International University',
        location: 'Miami, FL',
        graduationDate: '2019-05',
        gpa: '3.8/4.0',
        relevant: 'Typography, Brand Design, Digital Media'
      }
    ],
    skills: {
      technical: ['Adobe Creative Suite', 'Figma', 'Sketch', 'InDesign', 'Illustrator', 'Photoshop'],
      soft: ['Creative Thinking', 'Client Communication', 'Project Management', 'Attention to Detail'],
      languages: ['English (Fluent)', 'Spanish (Native)']
    },
    projects: [
      {
        id: 1,
        title: 'Brand Identity Redesign',
        description: 'Complete brand overhaul for tech startup including logo, color palette, and marketing materials.',
        technologies: 'Adobe Illustrator, Photoshop, InDesign',
        link: 'https://brandproject.com',
        github: '',
        duration: '3 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Georgia, serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: 'white',
      color: '#2c2c2c',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Creative with Color Block */}
      <div style={{ 
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '8px'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          margin: '0 0 10px 0', 
          fontWeight: 'normal',
          letterSpacing: '1px'
        }}>
          {personalInfo.fullName}
        </h1>
        <div style={{ 
          fontSize: '12px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          opacity: '0.95'
        }}>
          <div>
            <div>📧 {personalInfo.email}</div>
            <div>📱 {personalInfo.phone}</div>
          </div>
          <div>
            {personalInfo.address && <div>📍 {personalInfo.address}</div>}
            {personalInfo.portfolio && <div>🌐 {personalInfo.portfolio}</div>}
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '25px'
      }}>
        {/* Left Column */}
        <div>
          {/* Skills */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ 
              fontSize: '14px', 
              color: '#e74c3c', 
              marginBottom: '10px',
              fontWeight: 'bold',
              borderBottom: '2px solid #e74c3c',
              paddingBottom: '5px'
            }}>
              SKILLS
            </h2>
            {skills.technical.length > 0 && (
              <div style={{ marginBottom: '12px' }}>
                <h3 style={{ 
                  fontSize: '11px', 
                  marginBottom: '6px', 
                  fontWeight: 'bold'
                }}>
                  Technical
                </h3>
                <div style={{ fontSize: '10px', lineHeight: '1.5' }}>
                  {skills.technical.map((skill, index) => (
                    <div key={index} style={{ marginBottom: '2px' }}>
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div style={{ marginBottom: '12px' }}>
                <h3 style={{ 
                  fontSize: '11px', 
                  marginBottom: '6px', 
                  fontWeight: 'bold'
                }}>
                  Soft Skills
                </h3>
                <div style={{ fontSize: '10px', lineHeight: '1.5' }}>
                  {skills.soft.map((skill, index) => (
                    <div key={index} style={{ marginBottom: '2px' }}>
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Education */}
          {education.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ 
                fontSize: '14px', 
                color: '#e74c3c', 
                marginBottom: '10px',
                fontWeight: 'bold',
                borderBottom: '2px solid #e74c3c',
                paddingBottom: '5px'
              }}>
                EDUCATION
              </h2>
              {education.map(edu => (
                <div key={edu.id} style={{ marginBottom: '12px' }}>
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
                    fontSize: '10px', 
                    color: '#666'
                  }}>
                    {edu.graduationDate} | {edu.location}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div>
          {/* Summary */}
          {personalInfo.summary && (
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ 
                fontSize: '14px', 
                color: '#e74c3c', 
                marginBottom: '10px',
                fontWeight: 'bold',
                borderBottom: '2px solid #e74c3c',
                paddingBottom: '5px'
              }}>
                PROFILE
              </h2>
              <p style={{ 
                margin: '0',
                fontSize: '11px',
                textAlign: 'justify'
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
                color: '#e74c3c', 
                marginBottom: '10px',
                fontWeight: 'bold',
                borderBottom: '2px solid #e74c3c',
                paddingBottom: '5px'
              }}>
                EXPERIENCE
              </h2>
              {experience.map(exp => (
                <div key={exp.id} style={{ marginBottom: '15px' }}>
                  <h3 style={{ 
                    fontSize: '12px', 
                    margin: '0 0 3px 0', 
                    fontWeight: 'bold'
                  }}>
                    {exp.jobTitle}
                  </h3>
                  <div style={{ 
                    fontSize: '11px', 
                    color: '#666', 
                    marginBottom: '5px'
                  }}>
                    {exp.company} | {exp.location} | {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
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

          {/* Projects */}
          {projects.length > 0 && (
            <div style={{ marginBottom: '0' }}>
              <h2 style={{ 
                fontSize: '14px', 
                color: '#e74c3c', 
                marginBottom: '8px',
                fontWeight: 'bold',
                borderBottom: '2px solid #e74c3c',
                paddingBottom: '5px'
              }}>
                PROJECTS
              </h2>
              {projects.map(project => (
                <div key={project.id} style={{ marginBottom: '8px' }}>
                  <h3 style={{ 
                    fontSize: '11px', 
                    margin: '0 0 3px 0', 
                    fontWeight: 'bold'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    margin: '0 0 3px 0', 
                    fontSize: '10px'
                  }}>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template7;