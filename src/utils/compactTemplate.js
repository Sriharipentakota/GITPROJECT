export const generateCompactHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateCompactCSS(theme);
  const html = generateCompactHTML(sections, theme);

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

export const generateCompactCSS = (theme) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background: #ffffff;
    color: #333;
    line-height: 1.4;
    font-size: 14px;
  }
  
  .portfolio-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1.5rem;
  }
  
  .section {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
  }
  
  .section-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
  }
  
  .about-section {
    text-align: center;
    background: #f8f9fa;
  }
  
  .name {
    font-size: 2rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  .title {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
  }
  
  .bio {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }
  
  .skill {
    background: #3498db;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
  }
  
  .projects-grid {
    display: grid;
    gap: 1rem;
  }
  
  .project-card {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 4px;
    border-left: 4px solid #3498db;
  }
  
  .project-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  .project-description {
    color: #666;
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
  }
  
  .tech-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-bottom: 0.8rem;
  }
  
  .tech-tag {
    background: #e9ecef;
    color: #495057;
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
    font-size: 0.75rem;
  }
  
  .project-link {
    color: #3498db;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
  }
  
  .experience-list {
    display: grid;
    gap: 1rem;
  }
  
  .experience-item {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 4px;
    border-left: 4px solid #27ae60;
  }
  
  .company {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.3rem;
  }
  
  .position {
    font-size: 0.95rem;
    color: #27ae60;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }
  
  .duration {
    color: #666;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
  
  .contact-section {
    background: #f8f9fa;
    text-align: center;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    text-decoration: none;
    color: #495057;
    font-size: 0.9rem;
    transition: all 0.2s ease;
  }
  
  .contact-item:hover {
    border-color: #3498db;
    color: #3498db;
  }
  
  @media (max-width: 768px) {
    .portfolio-container {
      padding: 1rem;
    }
    
    .name {
      font-size: 1.8rem;
    }
    
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const generateCompactHTML = (sections, theme) => {
  const sectionHTML = sections
    .filter(section => section.isVisible)
    .map(section => generateCompactSectionHTML(section))
    .join('\n');

  return `<div class="portfolio-container">${sectionHTML}</div>`;
};

const generateCompactSectionHTML = (section) => {
  switch (section.type) {
    case 'about': return generateCompactAboutHTML(section);
    case 'projects': return generateCompactProjectsHTML(section);
    case 'experience': return generateCompactExperienceHTML(section);
    case 'contact': return generateCompactContactHTML(section);
    case 'education': return generateCompactEducationHTML(section);
    case 'certifications': return generateCompactCertificationsHTML(section);
    default: return '';
  }
};

const generateCompactAboutHTML = (section) => {
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

const generateCompactProjectsHTML = (section) => {
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
          ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View →</a>` : ''}
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

const generateCompactExperienceHTML = (section) => {
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

const generateCompactContactHTML = (section) => {
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

const generateCompactEducationHTML = (section) => {
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

const generateCompactCertificationsHTML = (section) => {
  const certifications = section.data || [];
  const certificationsHTML = certifications.map(cert => {
    const detailsHTML = [];
    if (cert.date) detailsHTML.push(`${cert.date}`);
    if (cert.credentialId) detailsHTML.push(`ID: ${cert.credentialId}`);
    
    return `
      <div class="experience-item">
          <h3 class="company">${cert.name || ''}</h3>
          <h4 class="position">${cert.issuer || ''}</h4>
          ${detailsHTML.length > 0 ? `<p class="duration">${detailsHTML.join(' • ')}</p>` : ''}
          ${cert.link ? `<a href="${cert.link}" class="project-link" target="_blank" rel="noopener noreferrer">Verify →</a>` : ''}
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
