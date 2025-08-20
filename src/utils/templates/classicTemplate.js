// Modified Portfolio Website Template according to your requirements

export const generateHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateCSS(theme);
  const html = generateHTML(sections, theme);

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="Professional portfolio of ${sections.find(s=>s.type==='about')?.data.name || 'User'}: skills, experience, projects, and contact.">
    <link rel="icon" type="image/png" href="${theme.logo || ''}">
    <style>
        ${css}
    </style>
</head>
<body>
    <header class="site-header">
      <div class="logo-title">
        ${theme.logo ? `<img src="${theme.logo}" alt="Logo" class="site-logo">` : ''}
        <span class="site-title">${title}</span>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        ${sections.some(s=>s.type==='blog') ? `<a href="#blog">Blog</a>` : ''}
        ${sections.some(s=>s.type==='resources') ? `<a href="#resources">Resources</a>` : ''}
      </nav>
    </header>
    ${html}
    <footer class="site-footer">
      <div>
        <a href="#privacy-policy">Privacy Policy</a> | 
        <a href="#legal">Legal Notice</a>
      </div>
      <div class="footer-socials">
        ${theme.socials?.map(social => `<a href="${social.link}" target="_blank" rel="noopener">${social.icon}</a>`).join('') || ''}
      </div>
      <div class="footer-copyright">
        &copy; ${new Date().getFullYear()} ${sections.find(s=>s.type==='about')?.data.name || ''}. All rights reserved.
      </div>
    </footer>
    ${generateLegalPolicyHTML()}
</body>
</html>`;
};

// --- CSS ---
export const generateEducationHTML = (section) => {
  const educationList = section.data || [];
  const educationHTML = educationList.map(edu => `
    <div class="education-card">
      <h3 class="education-degree">${edu.degree || ''}</h3>
      <div class="education-meta">
        <span class="education-institution">${edu.institution || ''}${edu.college ? `, ${edu.college}` : ''}</span>
        ${edu.year ? `<span class="education-year"> | ${edu.year}</span>` : ''}
        ${edu.gpa ? `<span class="education-gpa"> | GPA: ${edu.gpa}</span>` : ''}
      </div>
    </div>
  `).join('');
  return `
    <section class="section education-section" id="education">
      <h2 class="section-title">Education</h2>
      <div class="education-list">${educationHTML}</div>
    </section>
  `;
};
export const generateCSS = (theme) => {
  return `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: ${theme.fontFamily}; background: ${theme.background}; color: ${theme.text}; line-height: 1.6; }
    a { color: ${theme.primary}; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .site-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 1rem 2rem; background: ${theme.surface}; box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      position: sticky; top: 0; z-index: 100;
    }
    .logo-title { display: flex; align-items: center; gap: 1rem; }
    .site-logo { height: 40px; }
    .site-title { font-size: 1.5rem; font-weight: bold; color: ${theme.primary}; }
    nav a { margin: 0 1rem; font-weight: 500; }
    .portfolio-container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
    .section { margin-bottom: 3rem; }
    .about-section {
        display: flex; align-items: center; flex-wrap: wrap; gap: 2.5rem;
        padding: ${theme.spacing.xl}; background: ${theme.surface}; border-radius: ${theme.borderRadius};
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07);
        min-height: 300px;
    }
    .about-photo {
        border-radius: 50%; object-fit: cover; width: 180px; height: 180px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.10);
        margin: 0 auto;
    }
    .about-content { flex: 1; min-width: 260px; }
    .name { font-size: 2.7rem; font-weight: bold; color: ${theme.primary}; margin-bottom: ${theme.spacing.sm}; }
    .title { font-size: ${theme.fontSize.xl}; color: ${theme.secondary}; font-weight: normal; margin-bottom: ${theme.spacing.lg}; }
    .bio { font-size: ${theme.fontSize.lg}; color: ${theme.textSecondary}; max-width: 600px; margin-bottom: ${theme.spacing.lg}; }
    .resume-download { display: inline-block; margin-top: 1rem; color: #fff; background: ${theme.primary};
      padding: 0.7rem 1.4rem; border-radius: 25px; font-weight: 600; transition: background 0.2s;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .resume-download:hover { background: ${theme.secondary}; color: #fff; }
    .section-title { font-size: 2.2rem; font-weight: bold; color: ${theme.primary}; text-align: center; margin-bottom: ${theme.spacing.xl}; }
    /* Portfolio Section */
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem; }
    .project-card { background: ${theme.surface}; padding: ${theme.spacing.lg}; border-radius: ${theme.borderRadius};
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); transition: transform 0.3s; }
    .project-card:hover { transform: translateY(-2px) scale(1.01); }
    .project-title { font-size: ${theme.fontSize.xl}; font-weight: bold; color: ${theme.text}; margin-bottom: ${theme.spacing.md}; }
    .project-description { color: ${theme.textSecondary}; margin-bottom: ${theme.spacing.md}; }
    .case-study-link { display: block; font-size: 0.97rem; color: ${theme.accent}; margin-bottom: 0.5rem; }
    .project-link { color: ${theme.primary}; text-decoration: none; font-weight: 500; }
    .project-link:hover { text-decoration: underline; }
    .tech-container { display: flex; flex-wrap: wrap; gap: ${theme.spacing.sm}; margin-bottom: ${theme.spacing.md}; }
    .tech-tag { background: ${theme.accent}; color: white; padding: 0.25rem 0.7rem; border-radius: ${theme.borderRadius};
      font-size: ${theme.fontSize.sm}; font-weight: 500; }
    /* Skills, Awards & Certifications */
    .skills-section, .certifications-section, .awards-section { text-align: center; }
    .skills-container { display: flex; flex-wrap: wrap;  gap: ${theme.spacing.sm}; }
    .skill { background: ${theme.primary}; color: white; padding: ${theme.spacing.sm} ${theme.spacing.md};
      border-radius: ${theme.borderRadius}; font-size: ${theme.fontSize.sm}; font-weight: 500; }
    .certifications-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; }
    .certification-card { background: ${theme.surface}; padding: 1rem 1.5rem; border-radius: ${theme.borderRadius};
      min-width: 220px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.06); }
    .certification-link { display: block; margin-top: 4px; color: ${theme.accent}; }
    /* Testimonials & Logos */
    .testimonials-section { background: #fcfcfc; border-radius: ${theme.borderRadius}; padding: 2rem 1rem; }
    .testimonial-list { display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; }
    .testimonial-card { background: #fff; border-radius: ${theme.borderRadius}; box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      padding: 1.4rem; max-width: 350px; min-width: 250px; }
    .testimonial-text { font-style: italic; color: #575757; margin-bottom: 1rem; }
    .testimonial-author { font-weight: bold; color: ${theme.primary}; }
    .company-logos { display: flex; flex-wrap: wrap; gap: 1.2rem; justify-content: center; margin: 2rem 0; }
    .company-logo { max-height: 48px; max-width: 120px; }
    /* Contact Page */
    .contact-section { padding: ${theme.spacing.xl}; background: ${theme.surface}; border-radius: ${theme.borderRadius};
      text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    .contact-form { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; margin: 0 auto 2rem auto; }
    .contact-form input, .contact-form textarea { padding: 0.7rem 1rem; border: 1px solid #d0d0d0; border-radius: 5px; font-size: 1rem; }
    .contact-form button { background: ${theme.primary}; color: #fff; font-weight: 600; border: none; border-radius: 19px; padding: 0.8rem 1.8rem; cursor: pointer; margin-top: 0.4rem; }
    .contact-form button:hover { background: ${theme.secondary}; }
    .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; max-width: 800px; margin: 0 auto; }
    .contact-item { display: flex; align-items: center; gap: ${theme.spacing.md}; padding: ${theme.spacing.md}; background: ${theme.background}; border-radius: ${theme.borderRadius}; text-decoration: none; color: ${theme.text}; transition: transform 0.2s; }
    .contact-item:hover { transform: translateY(-2px); background: ${theme.primary}; color: #fff; }
    /* Blog & Resources */
    .blog-section, .resources-section { background: #f9f9fa; border-radius: ${theme.borderRadius}; padding: 2rem 1rem; }
    .blog-list, .resources-list { display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; }
    .blog-card, .resource-card { background: #fff; border-radius: ${theme.borderRadius}; box-shadow: 0 2px 10px rgba(0,0,0,0.06); padding: 1.4rem; max-width: 370px; min-width: 200px; }
    /* Footer & Legal */
    .site-footer { background: #f5f5f5; padding: 2rem 1rem; text-align: center; border-top: 1px solid #eaeaea; }
    .footer-socials a { display: inline-block; margin: 0 0.4rem; font-size: 1.3em; }
    @media (max-width: 900px) {
      .about-section { flex-direction: column; align-items: center; }
    }
    @media (max-width: 768px) {
      .portfolio-container { padding: 1rem; }
      .name { font-size: 2.2rem; }
      .projects-grid { grid-template-columns: 1fr; gap: 1rem; }
      .contact-grid, .testimonial-list, .blog-list, .resources-list { grid-template-columns: 1fr; flex-direction: column; }
    }
  `;
};

// --- HTML Generators ---

export const generateHTML = (sections, theme) => {
  const sectionHTML = sections
    .filter(section => section.isVisible)
    .map(section => generateSectionHTML(section, theme))
    .join('\n');
  return `<main class="portfolio-container">${sectionHTML}</main>`;
};

export const generateSectionHTML = (section, theme) => {
  switch (section.type) {
    case 'about':
      return generateAboutHTML(section);
    case 'projects':
      return generateProjectsHTML(section);
    case 'skills':
      return generateSkillsHTML(section);
    case 'certifications':
      return generateCertificationsHTML(section);
    case 'awards':
      return generateAwardsHTML(section);
    case 'testimonials':
      return generateTestimonialsHTML(section);
    case 'companies':
      return generateCompanyLogosHTML(section);
    case 'contact':
      return generateContactHTML(section);
    case 'blog':
      return generateBlogHTML(section);
    case 'resources':
      return generateResourcesHTML(section);
    default:
      return '';
  }
};

export const generateAboutHTML = (section) => {
  const data = section.data;
const skillsHTML = data.skills?.map(skill =>
    `<span class="skill">${skill}</span>`
  ).join('') || '';
console.log(data,"data");
  return `
    <section class="section about-section" id="about">
      <img src="${data.photo || 'https://via.placeholder.com/180'}" alt="Profile photo" class="about-photo">
      <div class="about-content">
        <h1 class="name">${data.name || ''}</h1>
        <h2 class="title">${data.title || ''}</h2>
        <p class="bio">${data.bio || ''}</p>
        ${skillsHTML ? `<div class="skills-container">${skillsHTML}</div>` : ''}
        ${data.resume ? `<a href="${data.resume}" class="resume-download" download>Download Resume</a>` : ''}
      </div>
    </section>
  `;
};

export const generateSkillsHTML = (section) => {
console.log(skills,"skill");
  const data = section.data || {};
  const skillsHTML = data.skills?.map(skill => `<span class="skill">${skill}</span>`).join('') || '';
  return `
    <section class="section skills-section" id="skills">
      <h2 class="section-title">Skills &amp; Expertise</h2>
      <div class="skills-container">${skillsHTML}</div>
    </section>
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
          <div class="certification-details">${detailsHTML.join('')}</div>
      </div>
    `;
  }).join('');
  return `
    <section class="section certifications-section" id="certifications">
        <h2 class="section-title">Certifications</h2>
        <div class="certifications-grid">${certificationsHTML}</div>
    </section>
  `;
};

export const generateAwardsHTML = (section) => {
  const awards = section.data || [];
  const awardsHTML = awards.map(a => `
    <div class="certification-card">
      <h3 class="certification-name">${a.title || ''}</h3>
      <div>${a.issuer ? `<span>${a.issuer}</span>` : ''}${a.date ? ` | <span>${a.date}</span>` : ''}</div>
      <div>${a.description || ''}</div>
    </div>
  `).join('');
  return `
    <section class="section awards-section" id="awards">
      <h2 class="section-title">Awards</h2>
      <div class="certifications-grid">${awardsHTML}</div>
    </section>
  `;
};

export const generateProjectsHTML = (section) => {
  const projects = section.data || [];
  const projectsHTML = projects.map(project => {
    const techHTML = project.technologies?.map(tech => `<span class="tech-tag">${tech}</span>`).join('') || '';
    return `
      <div class="project-card">
        <h3 class="project-title">${project.title || ''}</h3>
        <p class="project-description">${project.description || ''}</p>
        ${project.caseStudy ? `<a href="${project.caseStudy}" class="case-study-link" target="_blank">View Case Study</a>` : ''}
        ${techHTML ? `<div class="tech-container">${techHTML}</div>` : ''}
        ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>` : ''}
      </div>
    `;
  }).join('');
  return `
    <section class="section" id="portfolio">
      <h2 class="section-title">Portfolio</h2>
      <div class="projects-grid">${projectsHTML}</div>
    </section>
  `;
};

export const generateTestimonialsHTML = (section) => {
  const testimonials = section.data || [];
  const testimonialsHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-text">"${t.text || ''}"</div>
      <div class="testimonial-author">${t.author || ''}${t.company ? `, ${t.company}` : ''}</div>
    </div>
  `).join('');
  return `
    <section class="section testimonials-section" id="testimonials">
      <h2 class="section-title">Testimonials</h2>
      <div class="testimonial-list">${testimonialsHTML}</div>
    </section>
  `;
};

export const generateCompanyLogosHTML = (section) => {
  const logos = section.data || [];
  const logosHTML = logos.map(l => `<img src="${l.logo}" alt="${l.name}" class="company-logo">`).join('');
  return `
    <section class="section companies-section">
      <div class="company-logos">${logosHTML}</div>
    </section>
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
  if (data.socials) {
    data.socials.forEach(s => contactItems.push(`<a href="${s.link}" class="contact-item" target="_blank" rel="noopener">${s.icon}</a>`));
  }
  return `
    <section class="section contact-section" id="contact">
      <h2 class="section-title">${section.title || 'Contact'}</h2>
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

export const generateBlogHTML = (section) => {
  const articles = section.data || [];
  const articlesHTML = articles.map(a => `
    <div class="blog-card">
      <h3>${a.title}</h3>
      <div>${a.date ? `<span>${a.date}</span>` : ''}</div>
      <p>${a.excerpt || ''}</p>
      ${a.link ? `<a href="${a.link}" target="_blank" rel="noopener">Read More →</a>` : ''}
    </div>
  `).join('');
  return `
    <section class="section blog-section" id="blog">
      <h2 class="section-title">Blog</h2>
      <div class="blog-list">${articlesHTML}</div>
    </section>
  `;
};

export const generateResourcesHTML = (section) => {
  const resources = section.data || [];
  const resourcesHTML = resources.map(r => `
    <div class="resource-card">
      <h4>${r.title}</h4>
      <p>${r.description || ''}</p>
      <a href="${r.link}" download>Download</a>
    </div>
  `).join('');
  return `
    <section class="section resources-section" id="resources">
      <h2 class="section-title">Resources</h2>
      <div class="resources-list">${resourcesHTML}</div>
    </section>
  `;
};

export const generateLegalPolicyHTML = () => `
  <section id="privacy-policy" style="display:none;">
    <h2>Privacy Policy</h2>
    <p>This website does not collect personal data except as submitted through the contact form. Your information will never be shared or sold.</p>
  </section>
  <section id="legal" style="display:none;">
    <h2>Legal Notice</h2>
    <p>All content &copy; ${new Date().getFullYear()}. For inquiries, contact the site owner via the contact form.</p>
  </section>
`;

// Download function remains unchanged
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