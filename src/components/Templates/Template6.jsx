import React from 'react';

const Template6 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Alex Thompson',
      email: 'alex.thompson@email.com',
      phone: '+1 (555) 678-9012',
      address: 'Denver, CO',
      linkedin: 'linkedin.com/in/alexthompson',
      github: 'github.com/alexthompson',
      portfolio: 'alexthompson.dev',
      summary: 'Full-stack developer with 3+ years of experience building scalable web applications. Passionate about clean code and user experience.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Full Stack Developer',
        company: 'TechStart Inc',
        location: 'Denver, CO',
        startDate: '2022-01',
        endDate: '',
        current: true,
        description: '• Developed responsive web applications using React and Node.js\n• Improved application performance by 35% through code optimization\n• Collaborated with cross-functional teams in Agile environment'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Computer Science',
        institution: 'University of Colorado',
        location: 'Boulder, CO',
        graduationDate: '2021-12',
        gpa: '3.7/4.0',
        relevant: 'Software Engineering, Database Systems, Web Development'
      }
    ],
    skills: {
      technical: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git'],
      soft: ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability'],
      languages: ['English (Native)', 'Spanish (Intermediate)']
    },
    projects: [
      {
        id: 1,
        title: 'Task Management App',
        description: 'Built full-stack task management application with real-time updates and user authentication.',
        technologies: 'React, Node.js, MongoDB, Socket.io',
        link: 'https://taskapp.demo.com',
        github: 'https://github.com/alex/taskapp',
        duration: '2 months'
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
      color: '#333',
      lineHeight: '1.4',
      fontSize: '11px'
    }}>
      {/* Header - Minimalist ATS */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '20px', 
        paddingBottom: '15px',
        borderBottom: '2px solid #000'
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          margin: '0 0 8px 0', 
          color: '#000',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          {personalInfo.fullName}
        </h1>
        <div style={{ 
          fontSize: '11px', 
          color: '#333',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <span>{personalInfo.email}</span>
          <span>|</span>
          <span>{personalInfo.phone}</span>
          {personalInfo.address && (
            <>
              <span>|</span>
              <span>{personalInfo.address}</span>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span>|</span>
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
            color: '#000', 
            marginBottom: '8px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>
            PROFESSIONAL SUMMARY
          </h2>
          <p style={{ 
            margin: '0',
            textAlign: 'justify'
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
            color: '#000', 
            marginBottom: '10px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>
            PROFESSIONAL EXPERIENCE
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '15px' }}>
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
                  {exp.jobTitle} | {exp.company}
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#666'
                }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '10px', 
                color: '#666', 
                marginBottom: '5px'
              }}>
                {exp.location}
              </div>
              {exp.description && (
                <div style={{ 
                  fontSize: '11px',
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
            color: '#000', 
            marginBottom: '10px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>
            EDUCATION
          </h2>
          {education.map(edu => (
            <div key={edu.id} style={{ marginBottom: '10px' }}>
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
                  {edu.degree} | {edu.institution}
                </h3>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#666'
                }}>
                  {edu.graduationDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '10px', 
                color: '#666'
              }}>
                {edu.location} {edu.gpa && `| GPA: ${edu.gpa}`}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      <div style={{ marginBottom: '18px' }}>
        <h2 style={{ 
          fontSize: '14px', 
          color: '#000', 
          marginBottom: '10px',
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          TECHNICAL SKILLS
        </h2>
        {skills.technical.length > 0 && (
          <div style={{ marginBottom: '8px' }}>
            <span style={{ fontSize: '11px' }}>
              {skills.technical.join(' • ')}
            </span>
          </div>
        )}
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '0' }}>
          <h2 style={{ 
            fontSize: '14px', 
            color: '#000', 
            marginBottom: '8px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>
            KEY PROJECTS
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ marginBottom: '8px' }}>
              <h3 style={{ 
                fontSize: '12px', 
                margin: '0 0 3px 0', 
                fontWeight: 'bold'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                margin: '0 0 3px 0', 
                fontSize: '11px'
              }}>
                {project.description}
              </p>
              {project.technologies && (
                <div style={{ 
                  fontSize: '10px', 
                  color: '#666'
                }}>
                  Technologies: {project.technologies}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template6;