export const generateHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateCSS(theme);
  const html = generateHTML(sections, theme);

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        ${css}
    </style>
</head>
<body>
    ${html}
</body>
</html>`;
};

export const generateCSS = (theme) => {
  return `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${theme.fontFamily};
        background: ${theme.background};
        color: ${theme.text};
        line-height: 1.6;
    }

    .portfolio-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .section {
        margin-bottom: 3rem;
    }

    .section:last-child {
        margin-bottom: 0;
    }

    .about-section {
        text-align: center;
        padding: ${theme.spacing.xl};
        background: ${theme.surface};
        border-radius: ${theme.borderRadius};
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .name {
        font-size: 3rem;
        font-weight: bold;
        color: ${theme.primary};
        margin-bottom: ${theme.spacing.sm};
    }

    .title {
        font-size: ${theme.fontSize.xl};
        color: ${theme.secondary};
        font-weight: normal;
        margin-bottom: ${theme.spacing.lg};
    }

    .bio {
        font-size: ${theme.fontSize.lg};
        color: ${theme.textSecondary};
        max-width: 600px;
        margin: 0 auto ${theme.spacing.lg} auto;
    }

    .skills-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: ${theme.spacing.sm};
    }

    .skill {
        background: ${theme.primary};
        color: white;
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        border-radius: ${theme.borderRadius};
        font-size: ${theme.fontSize.sm};
        font-weight: 500;
    }

    .section-title {
        font-size: 2.5rem;
        font-weight: bold;
        color: ${theme.primary};
        text-align: center;
        margin-bottom: ${theme.spacing.xl};
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }

    .project-card {
        background: ${theme.surface};
        padding: ${theme.spacing.lg};
        border-radius: ${theme.borderRadius};
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .project-card:hover {
        transform: translateY(-2px);
    }

    .project-title {
        font-size: ${theme.fontSize.xl};
        font-weight: bold;
        color: ${theme.text};
        margin-bottom: ${theme.spacing.md};
    }

    .project-description {
        color: ${theme.textSecondary};
        margin-bottom: ${theme.spacing.md};
    }

    .tech-container {
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacing.sm};
        margin-bottom: ${theme.spacing.md};
    }

    .tech-tag {
        background: ${theme.accent};
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: ${theme.borderRadius};
        font-size: ${theme.fontSize.sm};
        font-weight: 500;
    }

    .project-link {
        color: ${theme.primary};
        text-decoration: none;
        font-weight: 500;
    }

    .project-link:hover {
        text-decoration: underline;
    }

    .experience-list {
        max-width: 800px;
        margin: 0 auto;
    }

    .experience-item {
        background: ${theme.surface};
        padding: ${theme.spacing.lg};
        border-radius: ${theme.borderRadius};
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
        margin-bottom: ${theme.spacing.lg};
        position: relative;
    }

    .experience-item::before {
        content: '';
        position: absolute;
        left: -2px;
        top: 0;
        bottom: 0;
        width: 4px;
        background: ${theme.primary};
        border-radius: 2px;
    }

    .company {
        font-size: ${theme.fontSize.xl};
        font-weight: bold;
        color: ${theme.text};
        margin-bottom: 0.25rem;
    }

    .position {
        font-size: ${theme.fontSize.lg};
        color: ${theme.secondary};
        font-weight: 600;
        margin-bottom: 0.25rem;
    }

    .duration {
        color: ${theme.textSecondary};
        font-size: ${theme.fontSize.sm};
        font-weight: 500;
        margin-bottom: 1rem;
    }

    .contact-section {
        padding: ${theme.spacing.xl};
        background: ${theme.surface};
        border-radius: ${theme.borderRadius};
        text-align: center;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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
        gap: ${theme.spacing.md};
        padding: ${theme.spacing.md};
        background: ${theme.background};
        border-radius: ${theme.borderRadius};
        text-decoration: none;
        color: ${theme.text};
        transition: transform 0.2s ease;
    }

    .contact-item:hover {
        transform: translateY(-2px);
        background: ${theme.primary};
        color: white;
    }

    @media (max-width: 768px) {
        .portfolio-container {
            padding: 1rem;
        }

        .name {
            font-size: 2.5rem;
        }

        .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .contact-grid {
            grid-template-columns: 1fr;
        }
    }
  `;
};

export const generateCertificationsHTML = (section) => {
  const certifications = section.data || [];
  const certificationsHTML = certifications.map(cert => {
    const detailsHTML = [];
    if (cert.date) detailsHTML.push(`<span>Issued: ${cert.date}</span>`);
    if (cert.credentialId) detailsHTML.push(`<span>ID: ${cert.credentialId}</span>`);
    if (cert.link) detailsHTML.push(`<a href="${cert.link}" class="certification-link" target="_blank" rel="noopener noreferrer">Verify Certificate →</a>`);

    return `
      <div class="certification-card">
          <h3 class="certification-name">${cert.name || ''}</h3>
          <p class="issuer">${cert.issuer || ''}</p>
          <div class="certification-details">
              ${detailsHTML.join('')}
          </div>
      </div>
    `;
  }).join('');

  return `
    <div class="section contact-section">
        <h2 class="section-title">${section.title}</h2>
        <div class="certifications-grid">
            ${certificationsHTML}
        </div>
    </div>
  `;
};


export const generateEducationHTML = (section) => {
  const educationList = section.data || [];
  const educationHTML = educationList.map(edu => {
    const detailsHTML = [];
    if (edu.gpa) detailsHTML.push(`<span class="detail-item">GPA: ${edu.gpa}</span>`);
    if (edu.location) detailsHTML.push(`<span class="detail-item">${edu.location}</span>`);

    return `
      <div class="education-item">
          <h3 class="institution">${edu.institution || ''}</h3>
          <h4 class="degree">${edu.degree || ''} ${edu.field ? `in ${edu.field}` : ''}</h4>
          <p class="duration">${edu.duration || ''}</p>
          ${detailsHTML.length > 0 ? `<div class="education-details">${detailsHTML.join('')}</div>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="section contact-section">
        <h2 class="section-title">${section.title}</h2>
        <div class="education-list">
            ${educationHTML}
        </div>
    </div>
  `;
};

export const generateHTML = (sections, theme) => {
  const sectionHTML = sections
    .filter(section => section.isVisible)
    .map(section => generateSectionHTML(section, theme))
    .join('\n');

  return `
    <div class="portfolio-container">
        ${sectionHTML}
    </div>
  `;
};

export const generateSectionHTML = (section, theme) => {
  switch (section.type) {
    case 'about':
      return generateAboutHTML(section);
    case 'projects':
      return generateProjectsHTML(section);
    case 'experience':
      return generateExperienceHTML(section);
    case 'contact':
      return generateContactHTML(section);
    case 'education':
      return generateEducationHTML(section);
    case 'certifications':
      return generateCertificationsHTML(section);
    default:
      return '';
  }
};

export const generateAboutHTML = (section) => {
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

export const generateProjectsHTML = (section) => {
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
        <div class="projects-grid">
            ${projectsHTML}
        </div>
    </div>
  `;
};

export const generateExperienceHTML = (section) => {
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
        <div class="experience-list">
            ${experienceHTML}
        </div>
    </div>
  `;
};

export const generateContactHTML = (section) => {
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
        <div class="contact-grid">
            ${contactItems.join('')}
        </div>
    </div>
  `;
};

export const downloadHTML = (html, filename = 'portfolio.html') => {
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
