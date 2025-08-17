// Compact Portfolio Template - Unique Card UI, Micro-Interactions, Responsive, Stunning Features

export const generateCompactHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateCompactCSS(theme);
  const html = generateCompactHTML(sections, theme);

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="Professional portfolio: skills, experience, projects, certifications, and contact.">
    <meta name="theme-color" content="${theme.primary || "#3498db"}">
    <style>${css}</style>
</head>
<body>
  <nav class="compact-sticky-nav" aria-label="Main navigation">
    <div class="compact-nav-inner">
      <span class="compact-nav-title">${title}</span>
      <div class="compact-nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
        <button id="theme-toggle" aria-label="Switch Theme">🌗</button>
      </div>
    </div>
  </nav>
  <main class="portfolio-container compact-scroll">
    ${html}
  </main>
  ${generateCompactScripts()}
</body>
</html>`;
};

// CSS
export const generateCompactCSS = (theme) => `
  :root {
    --primary: ${theme.primary || "#3498db"};
    --accent: ${theme.accent || "#27ae60"};
    --surface: #f8f9fa;
    --card-bg: #fff;
    --text: #23272e;
    --secondary: #888;
    --shadow: 0 4px 32px 0 rgba(52,152,219, 0.08), 0 1.5px 10px #e3eaf2;
  }
  body {
    font-family: 'Inter', 'Arial', sans-serif;
    background: linear-gradient(120deg, #f4f7fb 60%, #e9ecef 100%);
    color: var(--text);
    min-height: 100vh;
    scroll-behavior: smooth;
    margin: 0;
    transition: background 0.5s, color 0.5s;
  }
  body.dark-mode {
    --primary: #8fd1fc;
    --accent: #56e39f;
    --surface: #23272e;
    --card-bg: #181a20;
    --text: #e4e7ea;
    --secondary: #bbb;
    background: linear-gradient(135deg, #10121a 70%, #23272e 100%);
  }
  /* Sticky Navigation */
  .compact-sticky-nav {
    position: sticky; top: 0; z-index: 20;
    background: var(--card-bg);
    box-shadow: 0 2px 12px #eaf6fb44;
    padding: 0.6rem 0.5rem 0.6rem 0.5rem;
    margin-bottom: 0.5rem;
    animation: fadeInDown 1s cubic-bezier(.5,.01,.5,1.2);
  }
  @keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-40px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  .compact-nav-inner {
    max-width: 830px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
  }
  .compact-nav-title {
    font-size: 1.13rem;
    font-weight: bold;
    color: var(--primary);
    letter-spacing: 0.04em;
    white-space: nowrap;
  }
  .compact-nav-links {
    display: flex; align-items: center; gap: 1.02rem; flex-wrap: wrap;
  }
  .compact-nav-links a {
    color: var(--secondary); background: none;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.97rem;
    font-weight: 500;
    letter-spacing: 1.1px;
    padding: 0.15em 0.7em;
    border-radius: 5px;
    transition: background 0.13s, color 0.17s;
    position: relative;
    outline: none;
  }
  .compact-nav-links a:hover,
  .compact-nav-links a.active,
  .compact-nav-links a:focus-visible {
    color: var(--primary);
    background: linear-gradient(90deg, #eaf6fb 60%, #d0e7fa 100%);
    box-shadow: 0 1px 7px #eaf6fb44;
    outline: 2px solid var(--primary);
  }
  #theme-toggle {
    background: none;
    border: none;
    font-size: 1.26em;
    cursor: pointer;
    color: var(--primary);
    transition: color 0.14s;
    border-radius: 7px;
    padding: 0.12em 0.67em;
  }
  #theme-toggle:active, #theme-toggle:focus-visible { color: var(--accent); outline: 2px solid var(--primary);}
  /* Main Container + Scroll Snap */
  .portfolio-container {
    max-width: 830px;
    margin: 0 auto;
    padding: 1.5rem 0.3rem 2.2rem 0.3rem;
    display: flex;
    flex-direction: column;
    gap: 36px;
    scroll-snap-type: y proximity;
    background: transparent;
  }
  .portfolio-container > .section {
    scroll-snap-align: start;
    margin: 0 auto;
    width: 100%;
    max-width: 730px;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--card-bg);
    border-radius: 13px;
    box-shadow: var(--shadow);
    padding: clamp(1.2rem, 4vw, 2.1rem) clamp(0.7rem, 5vw, 1.4rem);
    position: relative;
    opacity: 0;
    transform: translateY(40px) scale(.97);
    animation: fadeInSection 1.05s cubic-bezier(.55,1.2,.4,1) forwards;
    will-change: opacity, transform;
  }
  .portfolio-container > .section.visible {
    opacity: 1 !important;
    transform: translateY(0) scale(1) !important;
    transition: opacity 0.45s, transform 0.57s;
  }
  @keyframes fadeInSection {
    0% { opacity: 0; transform: translateY(40px) scale(.97);}
    100% { opacity: 1; transform: translateY(0) scale(1);}
  }
  /* About Section */
  .about-section {
    background: var(--surface);
    text-align: center;
    align-items: center;
    min-height: 44vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: aboutBg 1.55s cubic-bezier(.46,1.6,.5,1.07) both;
    box-shadow: 0 2px 8px #eaf6fb22;
  }
  @keyframes aboutBg {
    0% { background: #fff;}
    100% { background: var(--surface);}
  }
  .avatar-compact {
    width: clamp(70px, 19vw, 110px);
    height: clamp(70px, 19vw, 110px);
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
    border: 3px solid var(--primary);
    box-shadow: 0 4px 16px var(--primary)33;
    animation: avatarPopC 1s cubic-bezier(.62,1.9,.5,1.05) both;
  }
  @keyframes avatarPopC {
    0% { opacity: 0; transform: scale(.7) rotate(-7deg);}
    60% { opacity: 0.7; transform: scale(1.04) rotate(2deg);}
    100% { opacity: 1; transform: scale(1) rotate(0);}
  }
  .name {
    font-size: clamp(1.4rem, 5vw, 2.1rem);
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 0.5rem;
    letter-spacing: 0.5px;
    animation: creativeSlideUp 1s cubic-bezier(.61,1.3,.35,1.08) both;
  }
  .title {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--secondary);
    margin-bottom: 1.1rem;
    animation: creativeFadeIn 1.2s cubic-bezier(.46,1.4,.51,1.2) 0.2s both;
  }
  .bio {
    font-size: clamp(0.95rem, 2vw, 1.07rem);
    color: var(--text);
    max-width: 500px;
    margin: 0 auto 1.3rem auto;
    line-height: 1.5;
    opacity: 0.93;
    animation: creativeFadeInLong 1.4s cubic-bezier(.36,1.3,.55,1.13) 0.3s both;
  }
  @keyframes creativeFadeIn {0%{opacity:0;transform:translateY(10px);}100%{opacity:1;transform:translateY(0);}}
  @keyframes creativeFadeInLong {0%{opacity:0;} 80%{opacity:0.7;} 100%{opacity:1;}}
  @keyframes creativeSlideUp {0%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0);}}
  .skills-container {
    display: flex; flex-wrap: wrap; gap: 0.7rem; margin-bottom: 1rem; justify-content: center;
    animation: fadeInSection 1.05s cubic-bezier(.55,1.2,.4,1) 0.25s both;
  }
  .skill {
    background: var(--primary);
    color: white;
    padding: 0.45rem 1.1rem;
    border-radius: 15px;
    font-size: 0.93rem;
    font-weight: 500;
    box-shadow: 0 1px 4px var(--primary)33;
    cursor: pointer;
    position: relative;
    transition: transform 0.15s, box-shadow 0.13s;
    outline: none;
  }
  .skill:focus-visible, .skill:hover {
    background: var(--accent);
    color: #fff;
    transform: scale(1.09) rotate(-1deg);
    box-shadow: 0 4px 14px var(--primary)33;
    outline: 2px solid var(--primary);
  }
  .resume-download {
    display: inline-block;
    margin-top: 0.7rem;
    color: #fff;
    background: linear-gradient(90deg, var(--primary) 60%, var(--accent) 100%);
    padding: 0.63rem 1.31rem;
    border-radius: 15px;
    font-weight: 600;
    text-decoration: none;
    font-size: 0.96rem;
    box-shadow: 0 2px 10px var(--primary)22;
    border: none;
    cursor: pointer;
    transition: background 0.18s, box-shadow 0.15s, transform 0.14s;
  }
  .resume-download:focus-visible, .resume-download:hover {
    background: linear-gradient(90deg, var(--accent) 40%, var(--primary) 100%);
    transform: translateY(-2px) scale(1.035);
    box-shadow: 0 8px 24px var(--primary)22;
  }
  /* Projects Grid */
  .projects-grid { 
    width: 100%;
    display: grid; grid-template-columns: repeat(auto-fit, minmax(255px, 1fr)); gap: 1.1rem;
    animation: fadeInSection 0.95s cubic-bezier(.41,1.2,.4,1) 0.1s both;
  }
  .project-card {
    background: var(--surface);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 190px;
    padding: 1rem 1.1rem;
    border-radius: 12px;
    border: none;
    box-shadow: 0 1.5px 14px #3498db13;
    outline: 2px solid transparent;
    position: relative;
    opacity: 0.95;
    transition: outline 0.13s, box-shadow 0.12s, transform 0.15s;
    cursor: pointer;
    overflow: visible;
  }
  .project-card:focus-visible, .project-card:hover {
    outline: 2px solid var(--primary);
    box-shadow: 0 8px 28px var(--primary)22;
    transform: scale(1.04) translateY(-4px);
    z-index: 2;
  }
  .project-card .project-title {
    font-size: 1.13rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 0.5rem;
    letter-spacing: 0.4px;
  }
  .project-description {
    color: var(--text);
    margin-bottom: 0.8rem;
    font-size: 0.96rem;
    flex: 1;
  }
  .tech-container {
    display: flex; flex-wrap: wrap; gap: 0.3rem; margin-bottom: 0.7rem;
  }
  .tech-tag {
    background: #e9ecef;
    color: #495057;
    padding: 0.21rem 0.7rem;
    border-radius: 7px;
    font-size: 0.8rem;
    font-weight: 500;
    transition: background 0.18s, color 0.17s, transform 0.13s;
    outline: none;
  }
  .tech-tag:focus-visible, .tech-tag:hover {
    background: var(--primary);
    color: #fff;
    transform: scale(1.09);
    outline: 2px solid var(--primary);
  }
  .project-link {
    color: var(--primary);
    text-decoration: none;
    font-size: 0.92rem;
    font-weight: 600;
    margin-top: 0.7rem;
    position: relative;
    outline: none;
    transition: color 0.13s;
  }
  .project-link:after {
    content: '→';
    margin-left: 8px;
    font-size: 1.06em;
    transition: margin-left 0.13s;
  }
  .project-link:focus-visible, .project-link:hover { color: var(--accent);}
  .project-link:focus-visible:after, .project-link:hover:after { margin-left: 14px;}
  .project-card .project-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(99deg, #3498db22 0%, #27ae6022 100%);
    opacity: 0;
    border-radius: 12px;
    z-index: 1;
    pointer-events: none;
    transition: opacity 0.25s;
  }
  .project-card:hover .project-card-overlay,
  .project-card:focus-visible .project-card-overlay {
    opacity: 1;
  }
  /* Experience, Education, Certifications */
  .experience-list, .education-list, .certifications-list { width: 100%; max-width: 700px; margin: 0 auto;}
  .experience-item, .education-item, .certification-item {
    background: var(--surface);
    padding: 1.05rem 1.2rem;
    border-radius: 9px;
    margin-bottom: 0.8rem;
    border-left: 4px solid var(--accent);
    box-shadow: 0 1.5px 7px #27ae6018;
    outline: none;
    transition: border 0.12s, box-shadow 0.12s, background 0.12s;
    position: relative;
  }
  .experience-item:focus-visible, .experience-item:hover,
  .education-item:focus-visible, .education-item:hover,
  .certification-item:focus-visible, .certification-item:hover {
    border-left-color: var(--primary);
    box-shadow: 0 7px 22px var(--accent)22;
    background: #eaf6fb;
    outline: 2px solid var(--primary);
  }
  .company, .institution, .certification-name {
    font-size: 1.07rem; font-weight: 600; color: var(--accent); margin-bottom: 0.3rem;
    letter-spacing: 0.3px;
  }
  .position, .degree, .issuer {
    font-size: 0.97rem;
    color: var(--primary);
    font-weight: 500;
    margin-bottom: 0.4rem;
  }
  .duration {
    color: var(--secondary);
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
  .education-details, .certification-details { font-size: 0.89rem; color: var(--secondary); margin-bottom: 0.15rem;}
  .certification-link {
    color: var(--primary);
    text-decoration: underline;
    font-size: 0.88rem;
    transition: color 0.13s;
    outline: none;
  }
  .certification-link:focus-visible, .certification-link:hover { color: var(--accent);}
  /* Contact */
  .contact-section {
    background: var(--surface);
    text-align: center;
    border-radius: 0 0 14px 14px;
    margin: 0 -0.3rem;
    box-shadow: 0 -2px 12px #27ae6011;
    min-width: 0; max-width: 100vw;
  }
  .contact-form {
    display: flex; flex-direction: column; gap: 0.7rem; max-width: 350px; margin: 0 auto 1.5rem auto;
    align-items: stretch;
  }
  .contact-form input, .contact-form textarea {
    background: var(--card-bg);
    padding: 0.9rem 1.1rem;
    border: 1.2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 0.97rem;
    color: var(--text);
    margin-bottom: 0.13rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.14s, box-shadow 0.13s;
    box-shadow: 0 1px 3px #eaf6fb;
  }
  .contact-form input:focus, .contact-form textarea:focus {
    border-color: var(--primary);
    box-shadow: 0 2px 7px var(--primary)33;
  }
  .contact-form button {
    background: var(--primary);
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 13px;
    padding: 0.7rem 1.4rem;
    cursor: pointer;
    margin-top: 0.32rem;
    font-size: 1.01rem;
    box-shadow: 0 2px 7px var(--primary)11;
    transition: background 0.13s, box-shadow 0.12s, transform 0.14s;
  }
  .contact-form button:focus-visible, .contact-form button:hover {
    background: var(--accent);
    box-shadow: 0 4px 13px var(--accent)22;
    transform: scale(1.03) translateY(-1px);
    outline: 2px solid var(--primary);
  }
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
    animation: fadeInSection 1.1s cubic-bezier(.61,1.2,.45,1) 0.3s both;
  }
  .contact-item {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
    padding: 0.8rem;
    background: var(--card-bg);
    border: 1px solid #dee2e6;
    border-radius: 4px;
    text-decoration: none;
    color: #495057;
    font-size: 0.98rem;
    transition: all 0.18s cubic-bezier(.41,1.6,.6,1.1);
    outline: none;
  }
  .contact-item:focus-visible, .contact-item:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: #eaf6fb;
    transform: scale(1.06);
    outline: 2px solid var(--primary);
  }
  /* Responsive */
  @media (max-width: 900px) {
    .portfolio-container { max-width: 99vw;}
    .compact-nav-inner { max-width: 99vw;}
    .portfolio-container > .section { max-width: 99vw; }
    .experience-list, .education-list, .certifications-list { max-width: 99vw;}
  }
  @media (max-width: 600px) {
    .portfolio-container { padding: 0 0 1.1rem 0;}
    .about-section { padding: 1.2rem 0.5rem;}
    .portfolio-container > .section { padding: 0.8rem 0.2rem; border-radius: 8px;}
    .experience-list, .education-list, .certifications-list { padding: 0 0.2rem;}
    .projects-grid { gap: 0.7rem;}
    .contact-section { padding: 0.7rem 0;}
  }
`;

// Ensure all required sections
function ensureRequiredSections(sections) {
  const types = sections.map(s => s.type);
  const defaults = [
    {type: 'about', title: 'About Me', isVisible: true, data: {name: '', title: '', bio: '', avatar: '', skills: [], resume: ''}},
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

// HTML Generators
const generateCompactHTML = (sections, theme) => {
  const sec = ensureRequiredSections(sections);
  return sec.filter(s => s.isVisible).map(s => generateCompactSectionHTML(s)).join('\n');
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
  const data = section.data || {};
  const skillsHTML = data.skills?.map(skill => 
    `<span class="skill" tabindex="0">${skill}</span>`
  ).join('') || '';
  return `
    <section class="section about-section" id="about">
      ${data.avatar ? `<img src="${data.avatar}" class="avatar-compact" alt="${data.name || 'Avatar'}" />` : ''}
      <h1 class="name">${data.name || ''}</h1>
      <h2 class="title">${data.title || ''}</h2>
      <p class="bio">${data.bio || ''}</p>
      ${skillsHTML ? `<div class="skills-container">${skillsHTML}</div>` : ''}
      ${data.resume ? `<a href="${data.resume}" class="resume-download" download>Download Resume</a>` : ''}
    </section>
  `;
};

const generateCompactProjectsHTML = (section) => {
  const projects = section.data || [];
  const projectsHTML = projects.map(project => {
    const techHTML = project.technologies?.map(tech =>
      `<span class="tech-tag" tabindex="0">${tech}</span>`
    ).join('') || '';
    return `
      <div class="project-card" tabindex="0">
        <div class="project-card-overlay"></div>
        <h3 class="project-title">${project.title || ''}</h3>
        <p class="project-description">${project.description || ''}</p>
        ${techHTML ? `<div class="tech-container">${techHTML}</div>` : ''}
        ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View →</a>` : ''}
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

const generateCompactExperienceHTML = (section) => {
  const experiences = section.data || [];
  const experienceHTML = experiences.map(exp => `
    <div class="experience-item" tabindex="0">
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

const generateCompactEducationHTML = (section) => {
  const educationList = section.data || [];
  const educationHTML = educationList.map(edu => {
    const detailsHTML = [];
    if (edu.gpa) detailsHTML.push(`GPA: ${edu.gpa}`);
    if (edu.location) detailsHTML.push(`${edu.location}`);
    return `
      <div class="education-item" tabindex="0">
        <div class="institution">${edu.institution || ''}</div>
        <div class="degree">${edu.degree || ''}${edu.field ? ` in ${edu.field}` : ''}</div>
        <div class="education-details">${detailsHTML.join(' • ')}</div>
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

const generateCompactCertificationsHTML = (section) => {
  const certifications = section.data || [];
  const certificationsHTML = certifications.map(cert => {
    const detailsHTML = [];
    if (cert.date) detailsHTML.push(`Issued: ${cert.date}`);
    if (cert.credentialId) detailsHTML.push(`ID: ${cert.credentialId}`);
    return `
      <div class="certification-item" tabindex="0">
        <div class="certification-name">${cert.name || ''}</div>
        <div class="issuer">${cert.issuer || ''}</div>
        <div class="certification-details">${detailsHTML.join(' • ')}</div>
        ${cert.link ? `<a href="${cert.link}" class="certification-link" target="_blank" rel="noopener noreferrer">Verify →</a>` : ''}
      </div>
    `;
  }).join('');
  return `
    <section class="section" id="certifications">
      <div class="section-title">${section.title || 'Certifications'}</div>
      <div class="certifications-list">${certificationsHTML}</div>
    </section>
  `;
};

const generateCompactContactHTML = (section) => {
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

// Micro-interactions, scroll snap fade-in, theme toggle, nav highlight
function generateCompactScripts() {
  return `
<script>
(function() {
  // Theme toggle
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) body.classList.add('dark-mode');
  toggle?.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    localStorage.setItem('portfolio-theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
  if(localStorage.getItem('portfolio-theme')) {
    if(localStorage.getItem('portfolio-theme') === 'dark') body.classList.add('dark-mode');
    else body.classList.remove('dark-mode');
  }
  // Section fade-in on scroll (intersection observer)
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: .2 }
  );
  document.querySelectorAll('.portfolio-container > .section').forEach(section => observer.observe(section));
  // Nav highlight on scroll
  const navLinks = document.querySelectorAll('.compact-nav-links a');
  window.addEventListener('scroll', function() {
    let fromTop = window.scrollY+120;
    navLinks.forEach(link => {
      const section = document.getElementById(link.getAttribute('href').slice(1));
      if(section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active');
      } else link.classList.remove('active');
    });
  });
  // Keyboard nav micro-interaction
  document.querySelectorAll(
    '.skill, .project-card, .experience-item, .education-item, .certification-item, .contact-item'
  ).forEach(el => {
    el.addEventListener('keydown', e => {
      if(e.key === ' ' || e.key === 'Enter') {
        el.classList.add('hover');
        setTimeout(() => el.classList.remove('hover'), 350);
        e.preventDefault();
      }
    });
  });
})();
</script>
  `;
}