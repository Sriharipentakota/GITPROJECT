export const generateMinimalistHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateMinimalistCSS(theme);
  const html = generateMinimalistHTML(sections, theme);

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

export const generateMinimalistCSS = (theme) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background: #ffffff;
    color: #333333;
    line-height: 1.8;
    font-weight: 300;
  }
  
  .portfolio-container {
    max-width: 800px;
    margin: 60px auto;
    padding: 0 40px;
  }
  
  .section {
    margin-bottom: 80px;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 60px;
  }
  
  .section:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  
  .section-title {
    font-size: 1.2rem;
    font-weight: 400;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 40px;
    text-align: left;
  }
  
  .about-section {
    text-align: left;
    padding: 0;
    background: transparent;
    box-shadow: none;
  }
  
  .name {
    font-size: 2.8rem;
    font-weight: 200;
    color: #333;
    margin-bottom: 10px;
    letter-spacing: -1px;
  }
  
  .title {
    font-size: 1.1rem;
    color: #888;
    margin-bottom: 30px;
    font-weight: 300;
  }
  
  .bio {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.8;
    margin-bottom: 30px;
    max-width: none;
  }
  
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: flex-start;
  }
  
  .skill {
    background: transparent;
    color: #666;
    padding: 8px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 300;
  }
  
  .projects-grid {
    display: block;
  }
  
  .project-card {
    background: transparent;
    padding: 0 0 40px 0;
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom: 40px;
  }
  
  .project-card:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  
  .project-title {
    font-size: 1.3rem;
    font-weight: 400;
    color: #333;
    margin-bottom: 10px;
  }
  
  .project-description {
    color: #666;
    margin-bottom: 20px;
    line-height: 1.7;
  }
  
  .tech-container {
    display: inline;
    margin-bottom: 15px;
  }
  
  .tech-tag {
    background: transparent;
    color: #888;
    padding: 0;
    border-radius: 0;
    font-size: 0.9rem;
    font-weight: 300;
    margin-right: 15px;
  }
  
  .project-link {
    color: #333;
    text-decoration: underline;
    font-weight: 300;
    font-size: 0.9rem;
  }
  
  .experience-list {
    max-width: none;
  }
  
  .experience-item {
    background: transparent;
    padding: 0 0 30px 0;
    border-radius: 0;
    box-shadow: none;
    margin-bottom: 30px;
    position: relative;
    border-bottom: 1px solid #f5f5f5;
  }
  
  .experience-item:last-child {
    border-bottom: none;
  }
  
  .experience-item::before {
    display: none;
  }
  
  .company {
    font-size: 1.2rem;
    font-weight: 400;
    color: #333;
    margin-bottom: 5px;
  }
  
  .position {
    font-size: 1rem;
    color: #666;
    font-weight: 300;
    margin-bottom: 5px;
  }
  
  .duration {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
  
  .contact-section {
    background: transparent;
    padding: 0;
    text-align: left;
    box-shadow: none;
  }
  
  .contact-grid {
    display: block;
    margin-top: 20px;
  }
  
  .contact-item {
    display: block;
    background: transparent;
    padding: 8px 0;
    border-radius: 0;
    text-decoration: none;
    color: #666;
    font-weight: 300;
    margin-bottom: 10px;
    transition: color 0.2s ease;
  }
  
  .contact-item:hover {
    transform: none;
    background: transparent;
    color: #333;
  }
  
  @media (max-width: 768px) {
    .portfolio-container {
      padding: 0 20px;
      margin: 40px auto;
    }
    
    .name {
      font-size: 2.2rem;
    }
    
    .section {
      margin-bottom: 60px;
      padding-bottom: 40px;
    }
  }
`;

const generateMinimalistHTML = (sections, theme) => {
  const sectionHTML = sections
    .filter(section => section.isVisible)
    .map(section => generateMinimalistSectionHTML(section))
    .join('\n');

  return `<div class="portfolio-container">${sectionHTML}</div>`;
};

const generateMinimalistSectionHTML = (section) => {
  switch (section.type) {
    case 'about': return generateMinimalistAboutHTML(section);
    case 'projects': return generateMinimalistProjectsHTML(section);
    case 'experience': return generateMinimalistExperienceHTML(section);
    case 'contact': return generateMinimalistContactHTML(section);
    case 'education': return generateMinimalistEducationHTML(section);
    case 'certifications': return generateMinimalistCertificationsHTML(section);
    default: return '';
  }
};

const generateMinimalistAboutHTML = (section) => {
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

const generateMinimalistProjectsHTML = (section) => {
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

const generateMinimalistExperienceHTML = (section) => {
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

const generateMinimalistContactHTML = (section) => {
  const data = section.data;
  const contactItems = [];

  if (data.email) contactItems.push(`<a href="mailto:${data.email}" class="contact-item">${data.email}</a>`);
  if (data.phone) contactItems.push(`<a href="tel:${data.phone}" class="contact-item">${data.phone}</a>`);
  if (data.linkedin) contactItems.push(`<a href="${data.linkedin}" class="contact-item" target="_blank" rel="noopener noreferrer">LinkedIn</a>`);
  if (data.github) contactItems.push(`<a href="${data.github}" class="contact-item" target="_blank" rel="noopener noreferrer">GitHub</a>`);
  if (data.website) contactItems.push(`<a href="${data.website}" class="contact-item" target="_blank" rel="noopener noreferrer">Website</a>`);

  return `
    <div class="section contact-section">
        <h2 class="section-title">${section.title}</h2>
        <div class="contact-grid">${contactItems.join('')}</div>
    </div>
  `;
};

const generateMinimalistEducationHTML = (section) => {
  const educationList = section.data || [];
  const educationHTML = educationList.map(edu => {
    const detailsHTML = [];
    if (edu.gpa) detailsHTML.push(`<span class="detail-item">GPA: ${edu.gpa}</span>`);
    if (edu.location) detailsHTML.push(`<span class="detail-item">${edu.location}</span>`);
    
    return `
      <div class="experience-item">
          <h3 class="company">${edu.institution || ''}</h3>
          <h4 class="position">${edu.degree || ''} ${edu.field ? `in ${edu.field}` : ''}</h4>
          <p class="duration">${edu.duration || ''}</p>
          ${detailsHTML.length > 0 ? `<div class="education-details">${detailsHTML.join(' • ')}</div>` : ''}
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

const generateMinimalistCertificationsHTML = (section) => {
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