import React from 'react';

const Template17 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Daniel Brown',
      email: 'daniel.brown@email.com',
      phone: '+1 (555) 789-0123',
      address: 'Denver, CO',
      linkedin: 'linkedin.com/in/danielbrown',
      github: 'github.com/danielbrown',
      portfolio: 'danielbrown.dev',
      summary: 'Experienced cybersecurity specialist with 7+ years in network security, threat analysis, and incident response. Expert in protecting enterprise systems from evolving cyber threats.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior Cybersecurity Analyst',
        company: 'SecureNet Solutions',
        location: 'Denver, CO',
        startDate: '2020-11',
        endDate: '',
        current: true,
        description: '• Monitored and analyzed security threats for 500+ enterprise clients\n• Reduced security incidents by 60% through proactive threat hunting\n• Led incident response team during critical security breaches'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Cybersecurity',
        institution: 'University of Colorado Denver',
        location: 'Denver, CO',
        graduationDate: '2017-12',
        gpa: '3.8/4.0',
        relevant: 'Network Security, Digital Forensics, Ethical Hacking'
      }
    ],
    skills: {
      technical: ['SIEM Tools', 'Penetration Testing', 'Wireshark', 'Nessus', 'Metasploit', 'Python'],
      soft: ['Threat Analysis', 'Incident Response', 'Risk Assessment', 'Security Auditing'],
      languages: ['English (Native)', 'German (Intermediate)']
    },
    projects: [
      {
        id: 1,
        title: 'Enterprise Security Framework',
        description: 'Designed and implemented comprehensive security framework for Fortune 500 company, reducing vulnerability exposure by 75% and achieving SOC 2 compliance.',
        technologies: 'SIEM, Vulnerability Assessment, Compliance Frameworks',
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
      fontFamily: 'Roboto, sans-serif', 
      maxWidth: '210mm', 
      minHeight: '297mm',
      margin: '0 auto', 
      padding: '15mm',
      backgroundColor: 'white',
      color: '#2c2c2c',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Tech Security Style */}
      <div style={{ 
        backgroundColor: '#1a1a1a',
        color: '#00ff41',
        padding: '20px',
        marginBottom: '20px',
        fontFamily: 'Courier New, monospace',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.03) 2px, rgba(0,255,65,0.03) 4px)',
          pointerEvents: 'none'
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            fontSize: '10px', 
            marginBottom: '5px',
            opacity: '0.7'
          }}>
            {'> whoami'}
          </div>
          <h1 style={{ 
            fontSize: '24px', 
            margin: '0 0 10px 0', 
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            {personalInfo.fullName}
          </h1>
          <div style={{ 
            fontSize: '10px',
            opacity: '0.8'
          }}>
            {'> contact_info'}
          </div>
          <div style={{ 
            fontSize: '11px',
            marginTop: '5px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px'
          }}>
            <div>
              <div>email: {personalInfo.email}</div>
              <div>phone: {personalInfo.phone}</div>
            </div>
            <div>
              {personalInfo.address && <div>location: {personalInfo.address}</div>}
              {personalInfo.github && <div>github: {personalInfo.github}</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#1a1a1a', 
            marginBottom: '8px',
            fontWeight: 'bold',
            fontFamily: 'Courier New, monospace',
            backgroundColor: '#f0f0f0',
            padding: '8px',
            border: '1px solid #ddd'
          }}>
            {'> cat profile.txt'}
          </h2>
          <div style={{
            backgroundColor: '#f8f8f8',
            padding: '12px',
            border: '1px solid #ddd',
            borderLeft: '4px solid #00ff41',
            fontSize: '11px',
            textAlign: 'justify',
            fontFamily: 'Courier New, monospace'
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
            color: '#1a1a1a', 
            marginBottom: '10px',
            fontWeight: 'bold',
            fontFamily: 'Courier New, monospace',
            backgroundColor: '#f0f0f0',
            padding: '8px',
            border: '1px solid #ddd'
          }}>
            {'> ls -la /experience/'}
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ 
              marginBottom: '15px',
              backgroundColor: '#f8f8f8',
              padding: '12px',
              border: '1px solid #ddd',
              fontFamily: 'Courier New, monospace'
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
                  color: '#1a1a1a'
                }}>
                  {exp.jobTitle}
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#00ff41',
                  backgroundColor: '#1a1a1a',
                  padding: '2px 6px',
                  fontWeight: '500'
                }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: '#666', 
                marginBottom: '8px'
              }}>
                {exp.company} @ {exp.location}
              </div>
              {exp.description && (
                <div style={{ 
                  fontSize: '10px',
                  whiteSpace: 'pre-line',
                  backgroundColor: '#fff',
                  padding: '8px',
                  border: '1px solid #eee'
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
              color: '#1a1a1a', 
              marginBottom: '10px',
              fontWeight: 'bold',
              fontFamily: 'Courier New, monospace',
              backgroundColor: '#f0f0f0',
              padding: '8px',
              border: '1px solid #ddd'
            }}>
              {'> cat education.log'}
            </h2>
            {education.map(edu => (
              <div key={edu.id} style={{ 
                marginBottom: '10px',
                backgroundColor: '#f8f8f8',
                padding: '10px',
                border: '1px solid #ddd',
                fontFamily: 'Courier New, monospace'
              }}>
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
                  fontSize: '9px', 
                  color: '#999'
                }}>
                  {edu.graduationDate} | {edu.location}
                </div>
                {edu.gpa && (
                  <div style={{ fontSize: '9px', color: '#666', marginTop: '2px' }}>
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
            color: '#1a1a1a', 
            marginBottom: '10px',
            fontWeight: 'bold',
            fontFamily: 'Courier New, monospace',
            backgroundColor: '#f0f0f0',
            padding: '8px',
            border: '1px solid #ddd'
          }}>
            {'> ./skills --list'}
          </h2>
          {skills.technical.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{ 
                fontSize: '11px', 
                marginBottom: '6px', 
                fontWeight: 'bold',
                fontFamily: 'Courier New, monospace',
                color: '#1a1a1a'
              }}>
                [TECHNICAL]
              </h3>
              <div style={{ 
                backgroundColor: '#f8f8f8',
                padding: '8px',
                border: '1px solid #ddd',
                fontFamily: 'Courier New, monospace'
              }}>
                {skills.technical.map((skill, index) => (
                  <div key={index} style={{ 
                    fontSize: '10px',
                    marginBottom: '2px'
                  }}>
                    {'> '}{skill}
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
                fontFamily: 'Courier New, monospace',
                color: '#1a1a1a'
              }}>
                [PROFESSIONAL]
              </h3>
              <div style={{ 
                backgroundColor: '#f8f8f8',
                padding: '8px',
                border: '1px solid #ddd',
                fontFamily: 'Courier New, monospace'
              }}>
                {skills.soft.map((skill, index) => (
                  <div key={index} style={{ 
                    fontSize: '10px',
                    marginBottom: '2px'
                  }}>
                    {'> '}{skill}
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
            color: '#1a1a1a', 
            marginBottom: '8px',
            fontWeight: 'bold',
            fontFamily: 'Courier New, monospace',
            backgroundColor: '#f0f0f0',
            padding: '8px',
            border: '1px solid #ddd'
          }}>
            {'> find /projects -name "*.completed"'}
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ 
              marginBottom: '8px',
              backgroundColor: '#f8f8f8',
              padding: '12px',
              border: '1px solid #ddd',
              fontFamily: 'Courier New, monospace'
            }}>
              <h3 style={{ 
                fontSize: '12px', 
                margin: '0 0 5px 0', 
                fontWeight: 'bold'
              }}>
                {'> '}{project.title}
              </h3>
              <div style={{
                backgroundColor: '#fff',
                padding: '8px',
                border: '1px solid #eee',
                marginBottom: '5px'
              }}>
                <div style={{ 
                  fontSize: '10px',
                  lineHeight: '1.5'
                }}>
                  {project.description}
                </div>
              </div>
              {project.technologies && (
                <div style={{ 
                  fontSize: '9px', 
                  color: '#666'
                }}>
                  {'# Tools: '}{project.technologies}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template17;