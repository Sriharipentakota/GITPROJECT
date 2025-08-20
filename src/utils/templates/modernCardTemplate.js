// Professional Modern Card Portfolio Template

export const generateModernCardCSS = (theme) => `
  body {
    font-family: ${theme.fontFamily};
    background: linear-gradient(135deg, ${theme.background} 60%, ${theme.accent} 100%);
    color: ${theme.text};
    margin: 0;
    min-height: 100vh;
  }
  .portfolio-container {
    max-width: 1100px;
    margin: 32px auto;
    padding: 2rem;
    background: rgba(255,255,255,0.98);
    border-radius: 28px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }
  .section-title {
    font-size: 2.1rem;
    color: ${theme.primary};
    margin-bottom: 2rem;
    border-left: 6px solid ${theme.accent};
    padding-left: 1rem;
    font-weight: 700;
    letter-spacing: 0.01em;
  }
  .about-section {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
    background: ${theme.surface};
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  }
  .avatar {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0,0,0,0.09);
    flex-shrink: 0;
    background: #fff;
  }
  .about-details {
    flex: 1;
  }
  .name {
    font-size: 2.8rem;
    font-weight: bold;
    color: ${theme.primary};
    margin-bottom: 0.5rem;
    letter-spacing: 0.01em;
  }
  .title {
    font-size: 1.35rem;
    color: ${theme.secondary};
    margin-bottom: 1rem;
    font-weight: 500;
  }
  .bio {
    font-size: 1.15rem;
    color: ${theme.textSecondary};
    margin-bottom: 1.2rem;
  }
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-bottom: 0.6rem;
  }
  .skill {
    background: ${theme.accent};
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 16px;
    font-size: 1.02rem;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
  .resume-download {
    display: inline-block;
    margin-top: 0.6rem;
    color: #fff;
    background: ${theme.primary};
    padding: 0.6rem 1.2rem;
    border-radius: 18px;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    transition: background 0.2s;
  }
  .resume-download:hover { background: ${theme.secondary}; }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }
  .project-card {
    background: ${theme.surface};
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.09);
    padding: 1.5rem;
    transition: box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    min-height: 260px;
  }
  .project-card:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  }
  .project-title {
    font-size: 1.35rem;
    color: ${theme.primary};
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .project-description {
    color: ${theme.textSecondary};
    margin-bottom: 1rem;
    flex: 1;
  }
  .tech-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.6rem;
  }
  .tech-tag {
    background: ${theme.primary};
    color: #fff;
    padding: 0.3rem 0.7rem;
    border-radius: 12px;
    font-size: 0.93rem;
    font-weight: 500;
  }
  .project-link {
    color: ${theme.accent};
    text-decoration: none;
    font-weight: 600;
    margin-top: 0.6rem;
    align-self: flex-start;
  }
  .project-link:hover {
    text-decoration: underline;
  }
  .experience-list, .education-list, .certifications-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }
  .experience-item, .education-item, .certification-card {
    background: ${theme.surface};
    border-radius: 14px;
    padding: 1.2rem 1.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    border-left: 4px solid ${theme.primary};
  }
  .company, .institution, .certification-name {
    font-size: 1.15rem;
    font-weight: bold;
    color: ${theme.primary};
    margin-bottom: 0.2rem;
  }
  .position, .degree, .issuer {
    font-size: 1.01rem;
    color: ${theme.secondary};
    margin-bottom: 0.2rem;
  }
  .duration {
    color: ${theme.textSecondary};
    font-size: 0.96rem;
    margin-bottom: 0.5rem;
  }
  .education-details, .certification-details {
    font-size: 0.97rem;
    color: ${theme.textSecondary};
    margin-bottom: 0.2rem;
  }
  .certification-link {
    color: ${theme.accent};
    text-decoration: none;
    display: inline-block;
    margin-top: 0.2rem;
  }
  .certification-link:hover { text-decoration: underline; }
  .contact-section {
    background: ${theme.surface};
    border-radius: 18px;
    padding: 2.2rem 1.5rem;
    margin-top: 2rem;
    text-align: center;
    box-shadow: 0 4px 16px rgba(0,0,0,0.09);
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 430px;
    margin: 0 auto 2rem auto;
  }
  .contact-form input, .contact-form textarea {
    padding: 0.7rem 1rem;
    border: 1px solid #d0d0d0;
    border-radius: 6px;
    font-size: 1rem;
    background: #fff;
  }
  .contact-form button {
    background: ${theme.primary};
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 19px;
    padding: 0.8rem 1.8rem;
    cursor: pointer;
    margin-top: 0.4rem;
    transition: background 0.2s;
  }
  .contact-form button:hover { background: ${theme.secondary}; }
  .contact-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 1.5rem;
  }
  .contact-item {
    background: ${theme.primary};
    color: #fff;
    padding: 0.8rem 1.2rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.03rem;
  }
  .contact-item:hover { background: ${theme.accent}; }
  @media (max-width: 900px) {
    .about-section { flex-direction: column; align-items: flex-start; }
    .portfolio-container { padding: 1rem; }
  }
  @media (max-width: 600px) {
    .projects-grid { grid-template-columns: 1fr; gap: 1rem; }
    .contact-grid { flex-direction: column; gap: 0.7rem; }
    .portfolio-container { padding: 0.4rem; }
    .about-section, .contact-section { padding: 1rem; }
  }
.about-photo {
        border-radius: 50%; object-fit: cover; width: 180px; height: 180px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.10);
        margin: 0 auto;
    }
`;

const generateAboutHTML = (section) => {
  const data = section.data || {};
  const skillsHTML = data.skills?.map(skill =>
    `<span class="skill">${skill}</span>`
  ).join('') || '';
  return `
    <section class="section about-section" id="about">
      <div class="about-details">
        <div class="name">${data.name || ''}</div>
        <div class="title">${data.title || ''}</div>
        <div class="bio">${data.bio || ''}</div>
        ${skillsHTML ? `<div class="skills-container">${skillsHTML}</div>` : ''}
        ${data.resume ? `<a href="${data.resume}" class="resume-download" download>Download Resume</a>` : ''}
      </div>
      <img src="${data.photo || 'https://via.placeholder.com/180'}" alt="Profile photo" class="about-photo">
    </section>
  `;
};

const generateProjectsHTML = (section) => {
  const projects = section.data || [];
  const projectsHTML = projects.map(project => {
    const techHTML = project.technologies?.map(tech =>
      `<span class="tech-tag">${tech}</span>`
    ).join('') || '';
    return `
      <div class="project-card">
        <div class="project-title">${project.title || ''}</div>
        <div class="project-description">${project.description || ''}</div>
        ${techHTML ? `<div class="tech-container">${techHTML}</div>` : ''}
        ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>` : ''}
      </div>
    `;
  }).join('');
  return `
    <section class="section" id="projects">
      <div class="section-title">${section.title || 'Projects'}</div>
      <div class="projects-grid">${projectsHTML}</div>
    </section>
  `;
};

const generateExperienceHTML = (section) => {
  const experiences = section.data || [];
  const experienceHTML = experiences.map(exp => `
    <div class="experience-item">
      <div class="company">${exp.company || ''}</div>
      <div class="position">${exp.position || ''}</div>
      <div class="duration">${exp.duration || ''}</div>
      <div>${exp.description || ''}</div>
    </div>
  `).join('');
  return `
    <section class="section" id="experience">
      <div class="section-title">${section.title || 'Experience'}</div>
      <div class="experience-list">${experienceHTML}</div>
    </section>
  `;
};

const generateEducationHTML = (section) => {
  const educationList = section.data || [];
  const educationHTML = educationList.map(edu => {
    const detailsHTML = [];
    if (edu.gpa) detailsHTML.push(`<span>GPA: ${edu.gpa}</span>`);
    if (edu.location) detailsHTML.push(`<span>${edu.location}</span>`);
    return `
      <div class="education-item">
        <div class="institution">${edu.institution || ''}</div>
        <div class="degree">${edu.degree || ''}${edu.field ? ` in ${edu.field}` : ''}</div>
        <div class="education-details">${detailsHTML.join(' | ')}</div>
        <div class="duration">${edu.duration || ''}</div>
      </div>
    `;
  }).join('');
  return `
    <section class="section" id="education">
      <div class="section-title">${section.title || 'Education'}</div>
      <div class="education-list">${educationHTML}</div>
    </section>
  `;
};

const generateCertificationsHTML = (section) => {
  const certifications = section.data || [];
  const certificationsHTML = certifications.map(cert => {
    const detailsHTML = [];
    if (cert.date) detailsHTML.push(`<span>Issued: ${cert.date}</span>`);
    if (cert.credentialId) detailsHTML.push(`<span>ID: ${cert.credentialId}</span>`);
    if (cert.link) detailsHTML.push(`<a href="${cert.link}" class="certification-link" target="_blank" rel="noopener noreferrer">Verify →</a>`);
    return `
      <div class="certification-card">
        <div class="certification-name"><strong>${cert.name || ''}</strong></div>
        <div class="issuer">${cert.issuer || ''}</div>
        <div class="certification-details">${detailsHTML.join(' ')}</div>
      </div>
    `;
  }).join('');
  return `
    <section class="section" id="certifications">
      <div class="section-title">${section.title || 'Certifications'}</div>
      <div class="certifications-grid">${certificationsHTML}</div>
    </section>
  `;
};

const generateContactHTML = (section) => {
  const data = section.data || {};
  const contactItems = [];
  if (data.email) contactItems.push(`<a href="mailto:${data.email}" class="contact-item">📧 ${data.email}</a>`);
  if (data.phone) contactItems.push(`<a href="tel:${data.phone}" class="contact-item">📞 ${data.phone}</a>`);
  if (data.linkedin) contactItems.push(`<a href="${data.linkedin}" class="contact-item" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>`);
  if (data.github) contactItems.push(`<a href="${data.github}" class="contact-item" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>`);
  if (data.website) contactItems.push(`<a href="${data.website}" class="contact-item" target="_blank" rel="noopener noreferrer">🌐 Website</a>`);
  return `
    <section class="section contact-section" id="contact">
      <div class="section-title">${section.title || 'Contact'}</div>
      <form class="contact-form" method="POST" action="${data.formAction || '#'}">
        <input type="text" name="name" placeholder="Your Name" required autocomplete="off">
        <input type="email" name="email" placeholder="Your Email" required autocomplete="off">
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div class="contact-grid">${contactItems.join('')}</div>
    </section>
  `;
};

function ensureMandatorySections(sections) {
  const types = sections.map(s => s.type);
  const defaults = [
    {type: 'about', title: 'About Me', isVisible: true, data: {name: '', title: '', bio: '', avatar: '', skills: []}},
    {type: 'experience', title: 'Experience', isVisible: true, data: []},
    {type: 'projects', title: 'Projects', isVisible: true, data: []},
    {type: 'contact', title: 'Contact', isVisible: true, data: {}},
    {type: 'certifications', title: 'Certifications', isVisible: true, data: []},
    {type: 'education', title: 'Education', isVisible: true, data: []},
  ];
  const result = [...sections];
  for (const def of defaults) {
    if (!types.includes(def.type)) result.push(def);
  }
  return result;
}

const generateModernCardHTML = (sections, theme) => {
  const sectionsWithMandatory = ensureMandatorySections(sections);
  return `
    <div class="portfolio-container">
      ${sectionsWithMandatory
        .filter(section => section.isVisible)
        .map(section => {
          switch (section.type) {
            case 'about': return generateAboutHTML(section);
            case 'projects': return generateProjectsHTML(section);
            case 'experience': return generateExperienceHTML(section);
            case 'education': return generateEducationHTML(section);
            case 'certifications': return generateCertificationsHTML(section);
            case 'contact': return generateContactHTML(section);
            default: return '';
          }
        }).join('\n')}
    </div>
  `;
};

export const generateModernCardHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateModernCardCSS(theme);
  const html = generateModernCardHTML(sections, theme);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="Professional portfolio: skills, experience, projects, certifications, and contact.">
  <style>
    ${css}
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
};