import React from 'react';

const Template13 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Lisa Chen',
      email: 'lisa.chen@email.com',
      phone: '+1 (555) 345-6789',
      address: 'Boston, MA',
      linkedin: 'linkedin.com/in/lisachen',
      github: 'github.com/lisachen',
      portfolio: 'lisachen.design',
      summary: 'Experienced financial analyst with 6+ years in investment banking, financial modeling, and risk assessment. Expert in driving strategic financial decisions through comprehensive analysis.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior Financial Analyst',
        company: 'Boston Financial Group',
        location: 'Boston, MA',
        startDate: '2021-03',
        endDate: '',
        current: true,
        description: '• Managed portfolio worth $50M+ with 15% annual growth\n• Developed financial models for M&A transactions\n• Presented investment recommendations to C-level executives'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Master of Finance',
        institution: 'MIT Sloan School of Management',
        location: 'Cambridge, MA',
        graduationDate: '2018-06',
        gpa: '3.9/4.0',
        relevant: 'Financial Modeling, Investment Analysis, Risk Management'
      }
    ],
    skills: {
      technical: ['Excel', 'Bloomberg Terminal', 'SQL', 'Python', 'Tableau', 'Financial Modeling'],
      soft: ['Financial Analysis', 'Risk Assessment', 'Strategic Planning', 'Client Relations'],
      languages: ['English (Native)', 'Mandarin (Native)', 'Spanish (Intermediate)']
    },
    projects: [
      {
        id: 1,
        title: 'Investment Portfolio Optimization',
        description: 'Developed automated portfolio optimization model that improved returns by 12% while reducing risk by 20%.',
        technologies: 'Python, Excel VBA, Bloomberg API, Statistical Analysis',
        link: 'https://portfolio-optimization.com',
        github: '',
        duration: '3 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Times New Roman, serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '20mm 15mm',
      backgroundColor: 'white',
      color: '#1a1a1a',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Traditional Banking Style */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '25px',
        paddingBottom: '15px',
        borderBottom: '3px double #1a1a1a'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          margin: '0 0 8px 0', 
          color: '#1a1a1a',
          fontWeight: 'bold',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          {personalInfo.fullName}
        </h1>
        <div style={{ 
          fontSize: '11px', 
          color: '#333',
          marginBottom: '8px'
        }}>
          {personalInfo.email} | {personalInfo.phone}
          {personalInfo.address && ` | ${personalInfo.address}`}
        </div>
        {(personalInfo.linkedin || personalInfo.portfolio) && (
          <div style={{ 
            fontSize: '10px', 
            color: '#666'
          }}>
            {personalInfo.linkedin && personalInfo.linkedin}
            {personalInfo.portfolio && (personalInfo.linkedin ? ` | ${personalInfo.portfolio}` : personalInfo.portfolio)}
          </div>
        )}
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#1a1a1a', 
            marginBottom: '8px',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '1px solid #1a1a1a',
            paddingBottom: '5px'
          }}>
            Executive Summary
          </h2>
          <p style={{ 
            margin: '0',
            textAlign: 'justify',
            fontSize: '11px',
            lineHeight: '1.6',
            textIndent: '20px'
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
            color: '#1a1a1a', 
            marginBottom: '12px',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '1px solid #1a1a1a',
            paddingBottom: '5px'
          }}>
            Professional Experience
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '18px'
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
                  textTransform: 'uppercase'
                }}>
                  {exp.jobTitle}
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#666',
                  fontStyle: 'italic'
                }}>
                  {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: '#333', 
                marginBottom: '8px',
                fontStyle: 'italic'
              }}>
                {exp.company}, {exp.location}
              </div>
              {exp.description && (
                <div style={{ 
                  fontSize: '10px',
                  whiteSpace: 'pre-line',
                  textAlign: 'justify',
                  paddingLeft: '15px'
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
            fontSize: '14px', 
            color: '#1a1a1a', 
            marginBottom: '12px',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '1px solid #1a1a1a',
            paddingBottom: '5px'
          }}>
            Education
          </h2>
          {education.map(edu => (
            <div key={edu.id} style={{ 
              marginBottom: '12px',
              textAlign: 'center'
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
                color: '#333',
                fontStyle: 'italic',
                marginTop: '2px'
              }}>
                {edu.institution}, {edu.location}
              </div>
              {edu.gpa && (
                <div style={{ fontSize: '10px', color: '#666', marginTop: '2px' }}>
                  Grade Point Average: {edu.gpa}
                </div>
              )}
              {edu.relevant && (
                <div style={{ fontSize: '10px', color: '#666', marginTop: '2px' }}>
                  Relevant Coursework: {edu.relevant}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ 
          fontSize: '14px', 
          color: '#1a1a1a', 
          marginBottom: '12px',
          fontWeight: 'bold',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          borderBottom: '1px solid #1a1a1a',
          paddingBottom: '5px'
        }}>
          Core Competencies
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px'
        }}>
          {skills.technical.length > 0 && (
            <div>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '8px', 
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'underline'
              }}>
                Technical Proficiencies
              </h3>
              <div style={{ 
                fontSize: '10px', 
                textAlign: 'center',
                lineHeight: '1.5'
              }}>
                {skills.technical.join(' • ')}
              </div>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '8px', 
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'underline'
              }}>
                Professional Skills
              </h3>
              <div style={{ 
                fontSize: '10px', 
                textAlign: 'center',
                lineHeight: '1.5'
              }}>
                {skills.soft.join(' • ')}
              </div>
            </div>
          )}
        </div>
        {skills.languages.length > 0 && (
          <div style={{ marginTop: '15px', textAlign: 'center' }}>
            <h3 style={{ 
              fontSize: '11px', 
              marginBottom: '8px', 
              fontWeight: 'bold',
              textDecoration: 'underline'
            }}>
              Language Proficiencies
            </h3>
            <div style={{ fontSize: '10px', lineHeight: '1.5' }}>
              {skills.languages.join(' • ')}
            </div>
          </div>
        )}
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '0' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#1a1a1a', 
            marginBottom: '8px',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '1px solid #1a1a1a',
            paddingBottom: '5px'
          }}>
            Notable Projects
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '8px'
            }}>
              <h3 style={{ 
                fontSize: '12px', 
                margin: '0 0 5px 0', 
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                margin: '0 0 5px 0', 
                fontSize: '10px',
                textAlign: 'justify',
                paddingLeft: '15px'
              }}>
                {project.description}
              </p>
              {project.technologies && (
                <div style={{ 
                  fontSize: '9px', 
                  color: '#666',
                  fontStyle: 'italic',
                  paddingLeft: '15px'
                }}>
                  Technologies Utilized: {project.technologies}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template13;