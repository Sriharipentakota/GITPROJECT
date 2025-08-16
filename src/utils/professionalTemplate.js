export const generateProfessionalHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateProfessionalCSS(theme);
  const html = generateProfessionalHTML(sections, theme);

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>${css}</style>
</head>
<body>
    ${html}
</body>
</html>`;
};

export const generateProfessionalCSS = (theme) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    background: #f8f9fa;
    color: #2c3e50;
    line-height: 1.6;
  }
  
  .portfolio-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 3rem 2rem;
    background: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  }
  
  .section {
    margin-bottom: 3rem;
    padding: 2rem 0;
    border-bottom: 2px solid #ecf0f1;
  }
  
  .section:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #34495e;
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #3498db;
  }
  
  .about-section {
    text-align: center;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    padding: 3rem 2rem;
    margin: -3rem -2rem 3rem -2rem;
  }
  
  .name {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }
  
  .title {
    font-size: 1.3rem;
    color: #7f8c8d;
    margin-bottom: 2rem;
    font-style: italic;
  }
  
  .bio {
    font-size: 1.1rem;
    color: #34495e;
    max-width: 650px;
    margin: 0 auto 2rem auto;
    line-height: 1.8;
    text-align: justify;
  }
  
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
  }
  
  .skill {
    background: #3498db;
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .project-card {
    background: white;
    padding: 2rem;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .project-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-color: #3498db;
  }
  
  .project-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .project-description {
    color: #495057;
    margin-bottom: 1.5rem;
    line-height: 1.7;
    text-align: justify;
  }
  
  .tech-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .tech-tag {
    background: #e9ecef;
    color: #495057;
    padding: 0.3rem 0.6rem;
    border-radius: 3px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  
  .project-link {
    color: #3498db;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.9rem;
  }
  
  .project-link:hover {
    color: #2980b9;
    text-decoration: underline;
  }
  
  .experience-list {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .experience-item {
    background: white;
    padding: 2rem;
    border-left: 4px solid #3498db;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .company {
    font-size: 1.3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 0.3rem;
  }
  
  .position {
    font-size: 1.1rem;
    color: #3498db;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .duration {
    color: #7f8c8d;
    font-size: 0.95rem;
    font-style: italic;
    margin-bottom: 1rem;
  }
  
  .contact-section {
    background: #f8f9fa;
    padding: 3rem 2rem;
    margin: 0 -2rem;
    text-align: center;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem;
    background: white;
    border: 2px solid #dee2e6;
    border-radius: 6px;
    text-decoration: none;
    color: #495057;
    transition: all 0.3s ease;
    font-weight: 500;
  }
  
  .contact-item:hover {
    border-color: #3498db;
    color: #3498db;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    .portfolio-container {
      padding: 2rem 1rem;
    }
    
    .about-section {
      margin: -2rem -1rem 3rem -1rem;
      padding: 2rem 1rem;
    }
    
    .contact-section {
      margin: 0 -1rem;
      padding: 2rem 1rem;
    }
    
    .name {
      font-size: 2.5rem;
    }
    
    .section {
      padding: 1.5rem 0;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const generateProfessionalHTML = (sections, theme) => {
  const sectionHTML = sections
    .filter(section => section.isVisible)
    .map(section => generateProfessionalSectionHTML(section))
    .join('\n');

  return `<div class="portfolio-container">${sectionHTML}</div>`;
};

const generateProfessionalSectionHTML = (section) => {
  switch (section.type) {
    case 'about': return generateProfessionalAboutHTML(section);
    case 'projects': return generateProfessionalProjectsHTML(section);
    case 'experience': return generateProfessionalExperienceHTML(section);
    case 'contact': return generateProfessionalContactHTML(section);
    case 'education': return generateProfessionalEducationHTML(section);
    case 'certifications': return generateProfessionalCertificationsHTML(section);
    default: return '';
  }
};

const generateProfessionalAboutHTML = (section) => {
  const data = section.data;
  const skillsHTML = data.skills?.map(skill => 
    `<span class="skill">${skill}</span>`
  ).join('') || '';

  return `
    <div class="section about-section">
        <h1 class="name">${data.name || ''}</h1>
        <h2 class="title">${data.title || ''}</h2>
        <p class="bio">${data.bio || ''}</p>
        ${skillsHTML ? `<div class="skills-container">${skillsHTML}</div>` : ''}
    </div>
  `;
};

const generateProfessionalProjectsHTML = (section) => {
  const projects = section.data || [];
  const projectsHTML = projects.map(project => {
    const techHTML = project.technologies?.map(tech => 
      `<span class="tech-tag">${tech}</span>`
    ).join('') || '';
    
    return `
      <div class="project-card">
          <h3 class="project-title">${project.title || ''}</h3>
          <p class="project-description">${project.description || ''}</p>
          ${techHTML ? `<div class="tech-container">${techHTML}</div>` : ''}
          ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="section">
        <h2 class="section-title">${section.title}</h2>
        <div class="projects-grid">${projectsHTML}</div>
    </div>
  `;
};

const generateProfessionalExperienceHTML = (section) => {
  const experiences = section.data || [];
  const experienceHTML = experiences.map(exp => `
    <div class="experience-item">
        <h3 class="company">${exp.company || ''}</h3>
        <h4 class="position">${exp.position || ''}</h4>
        <p class="duration">${exp.duration || ''}</p>
        <p>${exp.description || ''}</p>
    </div>
  `).join('');

  return `
    <div class="section">
        <h2 class="section-title">${section.title}</h2>
        <div class="experience-list">${experienceHTML}</div>
    </div>
  `;
};

const generateProfessionalContactHTML = (section) => {
  const data = section.data;
  const contactItems = [];

  if (data.email) contactItems.push(`<a href="mailto:${data.email}" class="contact-item">✉ ${data.email}</a>`);
  if (data.phone) contactItems.push(`<a href="tel:${data.phone}" class="contact-item">☎ ${data.phone}</a>`);
  if (data.linkedin) contactItems.push(`<a href="${data.linkedin}" class="contact-item" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>`);
  if (data.github) contactItems.push(`<a href="${data.github}" class="contact-item" target="_blank" rel="noopener noreferrer">⚡ GitHub</a>`);
  if (data.website) contactItems.push(`<a href="${data.website}" class="contact-item" target="_blank" rel="noopener noreferrer">🌐 Website</a>`);

  return `
    <div class="section contact-section">
        <h2 class="section-title">${section.title}</h2>
        <div class="contact-grid">${contactItems.join('')}</div>
    </div>
  `;
};

const generateProfessionalEducationHTML = (section) => {
  const educationList = section.data || [];
  const educationHTML = educationList.map(edu => {
    const detailsHTML = [];
    if (edu.gpa) detailsHTML.push(`GPA: ${edu.gpa}`);
    if (edu.location) detailsHTML.push(`${edu.location}`);
    
    return `
      <div class="experience-item">
          <h3 class="company">${edu.institution || ''}</h3>
          <h4 class="position">${edu.degree || ''} ${edu.field ? `in ${edu.field}` : ''}</h4>
          <p class="duration">${edu.duration || ''}</p>
          ${detailsHTML.length > 0 ? `<p>${detailsHTML.join(' • ')}</p>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="section">
        <h2 class="section-title">${section.title}</h2>
        <div class="experience-list">${educationHTML}</div>
    </div>
  `;
};

const generateProfessionalCertificationsHTML = (section) => {
  const certifications = section.data || [];
  const certificationsHTML = certifications.map(cert => {
    const detailsHTML = [];
    if (cert.date) detailsHTML.push(`Issued: ${cert.date}`);
    if (cert.credentialId) detailsHTML.push(`ID: ${cert.credentialId}`);
    
    return `
      <div class="experience-item">
          <h3 class="company">${cert.name || ''}</h3>
          <h4 class="position">${cert.issuer || ''}</h4>
          ${detailsHTML.length > 0 ? `<p class="duration">${detailsHTML.join(' • ')}</p>` : ''}
          ${cert.link ? `<a href="${cert.link}" class="project-link" target="_blank" rel="noopener noreferrer">Verify Certificate</a>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="section">
        <h2 class="section-title">${section.title}</h2>
        <div class="experience-list">${certificationsHTML}</div>
    </div>
  `;
};
