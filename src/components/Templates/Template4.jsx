import React from 'react';

const Template4 = ({ data, isPreview = false }) => {
  // Sample data for template preview
  const sampleData = {
    personalInfo: {
      fullName: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '+1 (555) 234-5678',
      address: 'Austin, TX',
      linkedin: 'linkedin.com/in/emilyrodriguez',
      github: 'github.com/emilyrodriguez',
      portfolio: 'emilyrodriguez.design',
      summary: 'Passionate data scientist with 4+ years of experience in machine learning, statistical analysis, and data visualization. Expert in Python, R, and cloud technologies.'
    },
    experience: [
      {
        id: 1,
        jobTitle: 'Senior Data Scientist',
        company: 'Analytics Corp',
        location: 'Austin, TX',
        startDate: '2022-08',
        endDate: '',
        current: true,
        description: 'Developed machine learning models that improved customer retention by 30%. Led data science initiatives for predictive analytics and business intelligence.'
      },
      {
        id: 2,
        jobTitle: 'Data Analyst',
        company: 'Tech Insights Ltd',
        location: 'Dallas, TX',
        startDate: '2020-06',
        endDate: '2022-07',
        current: false,
        description: 'Analyzed large datasets to identify business trends and opportunities. Created automated reporting systems that saved 20 hours per week.'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Master of Science in Data Science',
        institution: 'University of Texas at Austin',
        location: 'Austin, TX',
        graduationDate: '2020-05',
        gpa: '3.9/4.0',
        relevant: 'Machine Learning, Statistics, Data Mining, Big Data Analytics'
      }
    ],
    skills: {
      technical: ['Python', 'R', 'SQL', 'TensorFlow', 'AWS', 'Tableau', 'Apache Spark'],
      soft: ['Analytical Thinking', 'Problem Solving', 'Communication', 'Team Leadership'],
      languages: ['English (Native)', 'Spanish (Native)', 'Portuguese (Intermediate)']
    },
    projects: [
      {
        id: 1,
        title: 'Customer Churn Prediction Model',
        description: 'Built machine learning model using ensemble methods to predict customer churn with 92% accuracy. Implemented real-time scoring system using AWS Lambda.',
        technologies: 'Python, Scikit-learn, AWS, Docker, PostgreSQL',
        link: 'https://churn-model-demo.com',
        github: 'https://github.com/emily/churn-prediction',
        duration: '2 months'
      }
    ]
  };

  const displayData = isPreview ? sampleData : data;
  const { personalInfo, experience, education, skills, projects } = displayData;

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '0',
      backgroundColor: 'white',
      color: '#333'
    }}>
      {/* Left Sidebar Layout */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        minHeight: '100vh'
      }}>
        {/* Left Sidebar */}
        <div style={{ 
          backgroundColor: '#2d3748',
          color: 'white',
          padding: '40px 30px'
        }}>
          {/* Profile Section */}
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            {/* Profile Photo Placeholder */}
            <div style={{
              width: '120px',
              height: '120px',
              backgroundColor: '#4a5568',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#e2e8f0'
            }}>
              {personalInfo.fullName.split(' ').map(n => n[0]).join('')}
            </div>
            
            <h1 style={{ 
              fontSize: '1.5rem', 
              margin: '0 0 10px 0', 
              fontWeight: '700',
              lineHeight: '1.2'
            }}>
              {personalInfo.fullName}
            </h1>
            
            {personalInfo.summary && (
              <p style={{ 
                fontSize: '0.9rem',
                lineHeight: '1.4',
                opacity: '0.9',
                margin: '0'
              }}>
                {personalInfo.summary}
              </p>
            )}
          </div>

          {/* Contact Info */}
          <div style={{ marginBottom: '35px' }}>
            <h2 style={{ 
              fontSize: '1.1rem', 
              marginBottom: '15px',
              fontWeight: '600',
              color: '#e2e8f0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Contact
            </h2>
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>📧</span> {personalInfo.email}
              </div>
              <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>📱</span> {personalInfo.phone}
              </div>
              {personalInfo.address && (
                <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📍</span> {personalInfo.address}
                </div>
              )}
              {personalInfo.linkedin && (
                <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🔗</span> {personalInfo.linkedin}
                </div>
              )}
              {personalInfo.github && (
                <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>💻</span> {personalInfo.github}
                </div>
              )}
              {personalInfo.portfolio && (
                <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🌐</span> {personalInfo.portfolio}
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: '35px' }}>
            <h2 style={{ 
              fontSize: '1.1rem', 
              marginBottom: '15px',
              fontWeight: '600',
              color: '#e2e8f0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Skills
            </h2>
            
            {skills.technical.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ 
                  fontSize: '0.9rem', 
                  marginBottom: '10px',
                  color: '#cbd5e0',
                  fontWeight: '600'
                }}>
                  Technical
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {skills.technical.map((skill, index) => (
                    <span key={index} style={{
                      backgroundColor: '#4a5568',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {skills.soft.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ 
                  fontSize: '0.9rem', 
                  marginBottom: '10px',
                  color: '#cbd5e0',
                  fontWeight: '600'
                }}>
                  Soft Skills
                </h3>
                <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {skills.soft.map((skill, index) => (
                    <div key={index} style={{ marginBottom: '4px' }}>
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {skills.languages.length > 0 && (
              <div>
                <h3 style={{ 
                  fontSize: '0.9rem', 
                  marginBottom: '10px',
                  color: '#cbd5e0',
                  fontWeight: '600'
                }}>
                  Languages
                </h3>
                <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {skills.languages.map((language, index) => (
                    <div key={index} style={{ marginBottom: '4px' }}>
                      • {language}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div style={{ padding: '40px' }}>
          {/* Experience */}
          {experience.length > 0 && (
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                color: '#2d3748', 
                marginBottom: '25px',
                fontWeight: '700',
                borderBottom: '3px solid #2d3748',
                paddingBottom: '8px'
              }}>
                Experience
              </h2>
              {experience.map(exp => (
                <div key={exp.id} style={{ marginBottom: '30px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '8px'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.2rem', 
                      margin: '0', 
                      fontWeight: '600',
                      color: '#2d3748'
                    }}>
                      {exp.jobTitle}
                    </h3>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      color: '#718096',
                      fontWeight: '500',
                      whiteSpace: 'nowrap',
                      marginLeft: '20px'
                    }}>
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div style={{ 
                    fontSize: '1rem', 
                    color: '#4a5568', 
                    marginBottom: '12px',
                    fontWeight: '600'
                  }}>
                    {exp.company} • {exp.location}
                  </div>
                  {exp.description && (
                    <p style={{ 
                      margin: '0', 
                      lineHeight: '1.6',
                      color: '#2d3748',
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
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                color: '#2d3748', 
                marginBottom: '25px',
                fontWeight: '700',
                borderBottom: '3px solid #2d3748',
                paddingBottom: '8px'
              }}>
                Education
              </h2>
              {education.map(edu => (
                <div key={edu.id} style={{ marginBottom: '25px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '8px'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.1rem', 
                      margin: '0', 
                      fontWeight: '600',
                      color: '#2d3748',
                      lineHeight: '1.3'
                    }}>
                      {edu.degree}
                    </h3>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      color: '#718096',
                      fontWeight: '500'
                    }}>
                      {edu.graduationDate}
                    </span>
                  </div>
                  <div style={{ 
                    fontSize: '1rem', 
                    color: '#4a5568',
                    fontWeight: '600',
                    marginBottom: '5px'
                  }}>
                    {edu.institution} • {edu.location}
                  </div>
                  {edu.gpa && (
                    <div style={{ fontSize: '0.9rem', color: '#718096', marginBottom: '5px' }}>
                      GPA: {edu.gpa}
                    </div>
                  )}
                  {edu.relevant && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#718096',
                      lineHeight: '1.4'
                    }}>
                      Relevant Coursework: {edu.relevant}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                color: '#2d3748', 
                marginBottom: '25px',
                fontWeight: '700',
                borderBottom: '3px solid #2d3748',
                paddingBottom: '8px'
              }}>
                Projects
              </h2>
              {projects.map(project => (
                <div key={project.id} style={{ marginBottom: '30px' }}>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    margin: '0 0 8px 0', 
                    fontWeight: '600',
                    color: '#2d3748'
                  }}>
                    {project.title}
                  </h3>
                  {project.technologies && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#718096', 
                      marginBottom: '12px',
                      fontWeight: '500'
                    }}>
                      Technologies: {project.technologies}
                    </div>
                  )}
                  <p style={{ 
                    margin: '0 0 12px 0', 
                    lineHeight: '1.6',
                    color: '#2d3748',
                    textAlign: 'justify'
                  }}>
                    {project.description}
                  </p>
                  {(project.link || project.github) && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#4a5568',
                      display: 'flex',
                      gap: '15px',
                      flexWrap: 'wrap'
                    }}>
                      {project.link && (
                        <span>🔗 {project.link}</span>
                      )}
                      {project.github && (
                        <span>📁 {project.github}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template4;