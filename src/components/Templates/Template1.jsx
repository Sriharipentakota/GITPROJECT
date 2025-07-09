import React from 'react';

const Template1 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'John Anderson',
      email: 'john.anderson@email.com',
      phone: '+1 (555) 123-4567',
      address: 'New York, NY',
      linkedin: 'linkedin.com/in/johnanderson',
      github: 'github.com/johnanderson',
      portfolio: 'johnanderson.dev',
      summary: 'Experienced software developer with 5+ years of expertise in full-stack development. Passionate about creating scalable web applications and leading development teams.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior Software Developer',
        company: 'Tech Solutions Inc.',
        location: 'New York, NY',
        startDate: '2022-01',
        endDate: '',
        current: true,
        description: 'Led development of microservices architecture serving 1M+ users. Mentored junior developers and improved code quality by 40%.'
      },
      {
        id: 2,
        jobTitle: 'Full Stack Developer',
        company: 'Digital Innovations',
        location: 'Boston, MA',
        startDate: '2020-03',
        endDate: '2021-12',
        current: false,
        description: 'Developed responsive web applications using React and Node.js. Collaborated with cross-functional teams to deliver projects on time.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        institution: 'MIT',
        location: 'Cambridge, MA',
        graduationDate: '2020-05',
        gpa: '3.8/4.0',
        relevant: 'Data Structures, Algorithms, Software Engineering'
      }
    ],
    skills: {
      technical: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'],
      soft: ['Leadership', 'Problem Solving', 'Team Collaboration', 'Communication'],
      languages: ['English (Native)', 'Spanish (Conversational)']
    },
    projects: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented payment processing and inventory management.',
        technologies: 'React, Node.js, MongoDB, Stripe API',
        link: 'https://ecommerce-demo.com',
        github: 'https://github.com/john/ecommerce',
        duration: '3 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px',
      backgroundColor: 'white',
      color: '#333',
      lineHeight: '1.6'
    }}>
      {/* Header - Single Column Classic */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px', 
        borderBottom: '3px solid #2563eb', 
        paddingBottom: '20px' 
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          margin: '0', 
          color: '#2563eb',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          {personalInfo.fullName}
        </h1>
        <div style={{ 
          fontSize: '1.1rem', 
          color: '#666', 
          marginTop: '10px',
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
        <div style={{ 
          fontSize: '1rem', 
          color: '#666', 
          marginTop: '8px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.github && (
            <>
              {personalInfo.linkedin && <span>•</span>}
              <span>{personalInfo.github}</span>
            </>
          )}
          {personalInfo.portfolio && (
            <>
              <span>•</span>
              <span>{personalInfo.portfolio}</span>
            </>
          )}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            color: '#2563eb', 
            marginBottom: '12px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Professional Summary
          </h2>
          <p style={{ 
            lineHeight: '1.7', 
            margin: '0',
            fontSize: '1rem',
            textAlign: 'justify'
          }}>
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            color: '#2563eb', 
            marginBottom: '20px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Professional Experience
          </h2>
          {experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '25px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '5px'
              }}>
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  margin: '0', 
                  fontWeight: 'bold',
                  color: '#1a1a1a'
                }}>
                  {exp.jobTitle}
                </h3>
                <span style={{ 
                  fontSize: '0.9rem', 
                  color: '#666',
                  fontStyle: 'italic',
                  whiteSpace: 'nowrap',
                  marginLeft: '20px'
                }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '1rem', 
                color: '#666', 
                marginBottom: '8px',
                fontWeight: '600'
              }}>
                {exp.company} | {exp.location}
              </div>
              {exp.description && (
                <p style={{ 
                  margin: '8px 0', 
                  lineHeight: '1.6',
                  textAlign: 'justify'
                }}>
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            color: '#2563eb', 
            marginBottom: '20px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Education
          </h2>
          {education.map(edu => (
            <div key={edu.id} style={{ marginBottom: '20px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '5px'
              }}>
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  margin: '0', 
                  fontWeight: 'bold',
                  color: '#1a1a1a'
                }}>
                  {edu.degree}
                </h3>
                <span style={{ 
                  fontSize: '0.9rem', 
                  color: '#666',
                  fontStyle: 'italic'
                }}>
                  {edu.graduationDate}
                </span>
              </div>
              <div style={{ 
                fontSize: '1rem', 
                color: '#666',
                fontWeight: '600'
              }}>
                {edu.institution} | {edu.location}
              </div>
              {edu.gpa && (
                <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '3px' }}>
                  GPA: {edu.gpa}
                </div>
              )}
              {edu.relevant && (
                <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '3px' }}>
                  Relevant Coursework: {edu.relevant}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ 
          fontSize: '1.4rem', 
          color: '#2563eb', 
          marginBottom: '20px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Core Competencies
        </h2>
        {skills.technical.length > 0 && (
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#1a1a1a' }}>Technical Skills: </strong>
            <span>{skills.technical.join(' • ')}</span>
          </div>
        )}
        {skills.soft.length > 0 && (
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#1a1a1a' }}>Professional Skills: </strong>
            <span>{skills.soft.join(' • ')}</span>
          </div>
        )}
        {skills.languages.length > 0 && (
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#1a1a1a' }}>Languages: </strong>
            <span>{skills.languages.join(' • ')}</span>
          </div>
        )}
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            color: '#2563eb', 
            marginBottom: '20px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Key Projects
          </h2>
          {projects.map(project => (
            <div key={project.id} style={{ marginBottom: '25px' }}>
              <h3 style={{ 
                fontSize: '1.1rem', 
                margin: '0 0 5px 0', 
                fontWeight: 'bold',
                color: '#1a1a1a'
              }}>
                {project.title}
              </h3>
              {project.technologies && (
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: '#666', 
                  marginBottom: '8px',
                  fontStyle: 'italic'
                }}>
                  Technologies: {project.technologies}
                </div>
              )}
              <p style={{ 
                margin: '8px 0', 
                lineHeight: '1.6',
                textAlign: 'justify'
              }}>
                {project.description}
              </p>
              {(project.link || project.github) && (
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: '#2563eb',
                  marginTop: '8px'
                }}>
                  {project.link && <span>Live Demo: {project.link}</span>}
                  {project.github && (
                    <span>
                      {project.link && ' | '}
                      GitHub: {project.github}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template1;