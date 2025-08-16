export const generateDarkModeHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateDarkModeCSS(theme);
  const html = generateDarkModeHTML(sections, theme);

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

export const generateDarkModeCSS = (theme) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #2d2d2d 100%);
    color: #e0e0e0;
    line-height: 1.6;
    min-height: 100vh;
  }
  
  .portfolio-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;
    position: relative;
  }
  
  .portfolio-container::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%);
    z-index: -1;
  }
  
  .section {
    margin-bottom: 4rem;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 16px;
    padding: 2.5rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  .section:last-child {
    margin-bottom: 0;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #00d4ff;
    text-align: center;
    margin-bottom: 2.5rem;
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }
  
  .about-section {
    text-align: center;
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(120, 119, 198, 0.1) 100%);
  }
  
  .name {
    font-size: 3.5rem;
    font-weight: 700;
    background: linear-gradient(45deg, #00d4ff, #7877c6, #ff77c6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    text-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
  }
  
  .title {
    font-size: 1.5rem;
    color: #b0b0b0;
    margin-bottom: 2rem;
    font-weight: 300;
  }
  
  .bio {
    font-size: 1.2rem;
    color: #c0c0c0;
    max-width: 700px;
    margin: 0 auto 2rem auto;
    line-height: 1.8;
  }
  
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .skill {
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(120, 119, 198, 0.2));
    color: #00d4ff;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(0, 212, 255, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  
  .skill:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
  
  .project-card {
    background: rgba(255, 255, 255, 0.03);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  }
  
  .project-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #00d4ff;
    margin-bottom: 1rem;
  }
  
  .project-description {
    color: #b0b0b0;
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  .tech-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .tech-tag {
    background: rgba(120, 119, 198, 0.3);
    color: #e0e0e0;
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid rgba(120, 119, 198, 0.5);
  }
  
  .project-link {
    color: #ff77c6;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .project-link:hover {
    color: #00d4ff;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  }
  
  .experience-list {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .experience-item {
    background: rgba(255, 255, 255, 0.02);
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    position: relative;
    border-left: 4px solid #00d4ff;
    backdrop-filter: blur(10px);
  }
  
  .experience-item::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 1rem;
    width: 12px;
    height: 12px;
    background: #00d4ff;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.7);
  }
  
  .company {
    font-size: 1.4rem;
    font-weight: 600;
    color: #00d4ff;
    margin-bottom: 0.5rem;
  }
  
  .position {
    font-size: 1.1rem;
    color: #ff77c6;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  .duration {
    color: #7877c6;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .contact-section {
    background: linear-gradient(135deg, rgba(120, 119, 198, 0.1) 0%, rgba(255, 119, 198, 0.1) 100%);
    text-align: center;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    text-decoration: none;
    color: #e0e0e0;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
  
  .contact-item:hover {
    transform: translateY(-3px);
    background: rgba(0, 212, 255, 0.1);
    border-color: rgba(0, 212, 255, 0.3);
    color: #00d4ff;
    box-shadow: 0 5px 20px rgba(0, 212, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    .portfolio-container {
      padding: 2rem 1rem;
    }
    
    .name {
      font-size: 2.5rem;
    }
    
    .section {
      padding: 1.5rem;
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

const generateDarkModeHTML = (sections, theme) => {
  const sectionHTML = sections
    .filter(section => section.isVisible)
    .map(section => generateDarkModeSectionHTML(section))
    .join('\n');

  return `<div class="portfolio-container">${sectionHTML}</div>`;
};

const generateDarkModeSectionHTML = (section) => {
  switch (section.type) {
    case 'about': return generateDarkModeAboutHTML(section);
    case 'projects': return generateDarkModeProjectsHTML(section);
    case 'experience': return generateDarkModeExperienceHTML(section);
    case 'contact': return generateDarkModeContactHTML(section);
    case 'education': return generateDarkModeEducationHTML(section);
    case 'certifications': return generateDarkModeCertificationsHTML(section);
    default: return '';
  }
};

const generateDarkModeAboutHTML = (section) => {
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

const generateDarkModeProjectsHTML = (section) => {
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
          ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>` : ''}
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

const generateDarkModeExperienceHTML = (section) => {
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

const generateDarkModeContactHTML = (section) => {
  const data = section.data;
  const contactItems = [];

  if (data.email) contactItems.push(`<a href="mailto:${data.email}" class="contact-item">📧 ${data.email}</a>`);
  if (data.phone) contactItems.push(`<a href="tel:${data.phone}" class="contact-item">📞 ${data.phone}</a>`);
  if (data.linkedin) contactItems.push(`<a href="${data.linkedin}" class="contact-item" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>`);
  if (data.github) contactItems.push(`<a href="${data.github}" class="contact-item" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>`);
  if (data.website) contactItems.push(`<a href="${data.website}" class="contact-item" target="_blank" rel="noopener noreferrer">🌐 Website</a>`);

  return `
    <div class="section contact-section">
        <h2 class="section-title">${section.title}</h2>
        <div class="contact-grid">${contactItems.join('')}</div>
    </div>
  `;
};

const generateDarkModeEducationHTML = (section) => {
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

const generateDarkModeCertificationsHTML = (section) => {
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
          ${cert.link ? `<a href="${cert.link}" class="project-link" target="_blank" rel="noopener noreferrer">Verify Certificate →</a>` : ''}
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
