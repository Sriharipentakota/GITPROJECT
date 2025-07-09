import React from 'react';

const Template20 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Victoria Chen',
      email: 'victoria.chen@email.com',
      phone: '+1 (555) 012-3456',
      address: 'Seattle, WA',
      linkedin: 'linkedin.com/in/victoriachen',
      github: 'github.com/victoriachen',
      portfolio: 'victoriachen.com',
      summary: 'Strategic HR business partner with 8+ years of experience in talent acquisition, employee development, and organizational change management. Expert in building high-performing teams and culture transformation.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior HR Business Partner',
        company: 'Global Tech Corp',
        location: 'Seattle, WA',
        startDate: '2020-03',
        endDate: '',
        current: true,
        description: '• Partnered with leadership teams across 5 business units with 800+ employees\n• Reduced employee turnover by 35% through strategic retention initiatives\n• Led organizational restructuring that improved efficiency by 25%'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Master of Science in Human Resources Management',
        institution: 'University of Washington',
        location: 'Seattle, WA',
        graduationDate: '2016-06',
        gpa: '3.8/4.0',
        relevant: 'Organizational Psychology, Labor Relations, Strategic HR Management'
      }
    ],
    skills: {
      technical: ['Workday', 'BambooHR', 'Tableau', 'HRIS Systems', 'ATS Platforms', 'Excel'],
      soft: ['Strategic Planning', 'Change Management', 'Employee Relations', 'Leadership Development'],
      languages: ['English (Native)', 'Mandarin (Native)', 'Japanese (Conversational)']
    },
    projects: [
      {
        id: 1,
        title: 'Culture Transformation Initiative',
        description: 'Led company-wide culture transformation program that improved employee engagement scores by 40% and reduced time-to-hire by 50%.',
        technologies: 'Change Management, Employee Surveys, Training Programs',
        link: '',
        github: '',
        duration: '18 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Playfair Display, serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '20mm 15mm',
      backgroundColor: 'white',
      color: '#2c2c2c',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Elegant Executive Style */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '30px',
        paddingBottom: '25px',
        borderBottom: '2px solid #d4af37',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '80px',
          border: '3px solid #d4af37',
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#8b4513'
        }}>
          {personalInfo.fullName.split(' ').map(n => n[0]).join('')}
        </div>
        <div style={{ paddingTop: '50px' }}>
          <h1 style={{ 
            fontSize: '32px', 
            margin: '0 0 12px 0', 
            color: '#8b4513',
            fontWeight: 'normal',
            letterSpacing: '2px'
          }}>
            {personalInfo.fullName}
          </h1>
          <div style={{ 
            fontSize: '12px', 
            color: '#666',
            marginBottom: '10px',
            letterSpacing: '1px'
          }}>
            {personalInfo.email} • {personalInfo.phone}
            {personalInfo.address && ` • ${personalInfo.address}`}
          </div>
          {(personalInfo.linkedin || personalInfo.portfolio) && (
            <div style={{ 
              fontSize: '11px', 
              color: '#8b4513',
              fontStyle: 'italic'
            }}>
              {personalInfo.linkedin && personalInfo.linkedin}
              {personalInfo.portfolio && (personalInfo.linkedin ? ` • ${personalInfo.portfolio}` : personalInfo.portfolio)}
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ 
            fontSize: '18px', 
            color: '#8b4513', 
            marginBottom: '12px',
            fontWeight: 'normal',
            textAlign: 'center',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              right: '0',
              height: '1px',
              backgroundColor: '#d4af37',
              zIndex: 0
            }} />
            <span style={{
              backgroundColor: 'white',
              padding: '0 25px',
              position: 'relative',
              zIndex: 1
            }}>
              Executive Profile
            </span>
          </h2>
          <div style={{
            backgroundColor: '#faf8f3',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e8dcc0',
            fontSize: '12px',
            textAlign: 'justify',
            lineHeight: '1.7',
            fontStyle: 'italic'
          }}>
            {personalInfo.summary}
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ 
            fontSize: '18px', 
            color: '#8b4513', 
            marginBottom: '15px',
            fontWeight: 'normal',
            textAlign: 'center',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              right: '0',
              height: '1px',
              backgroundColor: '#d4af37',
              zIndex: 0
            }} />
            <span style={{
              backgroundColor: 'white',
              padding: '0 25px',
              position: 'relative',
              zIndex: 1
            }}>
              Professional Experience
            </span>
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '20px',
              backgroundColor: '#faf8f3',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #e8dcc0',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                width: '40px',
                height: '40px',
                border: '2px solid #d4af37',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                fontSize: '10px',
                fontWeight: 'bold',
                color: '#8b4513'
              }}>
                {exp.current ? 'NOW' : 'PAST'}
              </div>
              <h3 style={{ 
                fontSize: '14px', 
                margin: '0 0 6px 0', 
                fontWeight: 'bold',
                color: '#8b4513'
              }}>
                {exp.jobTitle}
              </h3>
              <div style={{ 
                fontSize: '12px', 
                color: '#666', 
                marginBottom: '4px',
                fontStyle: 'italic'
              }}>
                {exp.company} • {exp.location}
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: '#999',
                marginBottom: '12px'
              }}>
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </div>
              {exp.description && (
                <div style={{ 
                  fontSize: '11px',
                  whiteSpace: 'pre-line',
                  lineHeight: '1.6',
                  textAlign: 'justify'
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
        marginBottom: '25px'
      }}>
        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 style={{ 
              fontSize: '16px', 
              color: '#8b4513', 
              marginBottom: '12px',
              fontWeight: 'normal',
              textAlign: 'center',
              borderBottom: '1px solid #d4af37',
              paddingBottom: '8px'
            }}>
              Education
            </h2>
            {education.map(edu => (
              <div key={edu.id} style={{ 
                marginBottom: '12px',
                backgroundColor: '#faf8f3',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #e8dcc0',
                textAlign: 'center'
              }}>
                <h3 style={{ 
                  fontSize: '12px', 
                  margin: '0 0 5px 0', 
                  fontWeight: 'bold',
                  color: '#8b4513'
                }}>
                  {edu.degree}
                </h3>
                <div style={{ 
                  fontSize: '11px', 
                  color: '#666',
                  marginBottom: '3px',
                  fontStyle: 'italic'
                }}>
                  {edu.institution}
                </div>
                <div style={{ 
                  fontSize: '10px', 
                  color: '#999'
                }}>
                  {edu.graduationDate} • {edu.location}
                </div>
                {edu.gpa && (
                  <div style={{ fontSize: '10px', color: '#666', marginTop: '3px' }}>
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
            fontSize: '16px', 
            color: '#8b4513', 
            marginBottom: '12px',
            fontWeight: 'normal',
            textAlign: 'center',
            borderBottom: '1px solid #d4af37',
            paddingBottom: '8px'
          }}>
            Core Competencies
          </h2>
          {skills.technical.length > 0 && (
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ 
                fontSize: '12px', 
                marginBottom: '8px', 
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#8b4513'
              }}>
                Technical Proficiencies
              </h3>
              <div style={{ 
                backgroundColor: '#faf8f3',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #e8dcc0',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '10px', lineHeight: '1.6' }}>
                  {skills.technical.join(' • ')}
                </div>
              </div>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ 
                fontSize: '12px', 
                marginBottom: '8px', 
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#8b4513'
              }}>
                Leadership Skills
              </h3>
              <div style={{ 
                backgroundColor: '#faf8f3',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #e8dcc0',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '10px', lineHeight: '1.6' }}>
                  {skills.soft.join(' • ')}
                </div>
              </div>
            </div>
          )}
          {skills.languages.length > 0 && (
            <div>
              <h3 style={{ 
                fontSize: '12px', 
                marginBottom: '8px', 
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#8b4513'
              }}>
                Languages
              </h3>
              <div style={{ 
                backgroundColor: '#faf8f3',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #e8dcc0',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '10px', lineHeight: '1.6' }}>
                  {skills.languages.join(' • ')}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <h2 style={{ 
            fontSize: '18px', 
            color: '#8b4513', 
            marginBottom: '15px',
            fontWeight: 'normal',
            textAlign: 'center',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              right: '0',
              height: '1px',
              backgroundColor: '#d4af37',
              zIndex: 0
            }} />
            <span style={{
              backgroundColor: 'white',
              padding: '0 25px',
              position: 'relative',
              zIndex: 1
            }}>
              Key Achievements
            </span>
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '15px',
              backgroundColor: '#faf8f3',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #e8dcc0',
              textAlign: 'center'
            }}>
              <h3 style={{ 
                fontSize: '14px', 
                margin: '0 0 8px 0', 
                fontWeight: 'bold',
                color: '#8b4513'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                margin: '0 0 8px 0', 
                fontSize: '11px',
                lineHeight: '1.6',
                textAlign: 'justify',
                fontStyle: 'italic'
              }}>
                {project.description}
              </p>
              {project.technologies && (
                <div style={{ 
                  fontSize: '10px', 
                  color: '#666'
                }}>
                  Key Methods: {project.technologies}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Footer Decoration */}
      <div style={{
        textAlign: 'center',
        marginTop: '20px',
        paddingTop: '15px',
        borderTop: '1px solid #d4af37'
      }}>
        <div style={{
          width: '50px',
          height: '2px',
          backgroundColor: '#d4af37',
          margin: '0 auto'
        }} />
      </div>
    </div>
  );
};

export default Template20;