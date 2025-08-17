// Professional Portfolio Template - Ultra Responsive, Stunning, Modern
export const generateProfessionalHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateProfessionalCSS(theme);
  const html = generateProfessionalHTML(sections, theme);
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="Professional portfolio: skills, experience, projects, certifications, and contact.">
    <meta name="theme-color" content="${theme.primary}">
    <style>${css}</style>
</head>
<body>
  <nav class="sticky-nav stunning-fade-in" aria-label="Main navigation">
    <div class="nav-inner">
      <span class="nav-title">${title}</span>
      <div class="nav-links">
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
  <main class="portfolio-container stunning-scroll">
    ${html}
  </main>
  ${generateStunningScripts()}
</body>
</html>`;
};

export const generateProfessionalCSS = (theme) => `
  :root {
    --primary: ${theme.primary || "#3498db"};
    --accent: ${theme.accent || "#34495e"};
    --surface: #fff;
    --surface-glass: rgba(255,255,255,0.85);
    --text: #2c3e50;
    --secondary: #7f8c8d;
    --text-secondary: #495057;
    --section-bg: #f8f9fa;
    --nav-bg: rgba(255,255,255,0.98);
    --nav-shadow: 0 2px 20px rgba(0,0,0,0.09);
  }
  body {
    font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    background: linear-gradient(120deg, var(--section-bg) 65%, #e4ecf5 100%);
    color: var(--text);
    line-height: 1.6;
    margin: 0;
    min-height: 100vh;
    scroll-behavior: smooth;
    transition: background 0.5s, color 0.5s;
  }
  body.dark-mode {
    --primary: #96d9fc;
    --accent: #18283a;
    --surface: #23272e;
    --surface-glass: rgba(35,39,46,0.92);
    --text: #f3f6fb;
    --secondary: #adb5bd;
    --text-secondary: #b8c2cc;
    --section-bg: #21242a;
    --nav-bg: #1a1d1fce;
  }
  /* === Sticky Nav === */
  .sticky-nav {
    position: sticky; top: 0; z-index: 9000;
    background: var(--nav-bg);
    box-shadow: var(--nav-shadow);
    padding: 0.72rem 0.9rem 0.7rem 0.9rem;
    animation: fadeInDown 1s cubic-bezier(.5,.01,.5,1.2);
    backdrop-filter: blur(16px);
  }
  @keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-40px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
  }
  .nav-title {
    font-size: clamp(1.12rem, 2vw, 1.22rem);
    font-weight: bold;
    color: var(--primary);
    letter-spacing: 0.04em;
    white-space: nowrap;
  }
  .nav-links {
    display: flex; align-items: center; gap: 1.17rem; flex-wrap: wrap;
  }
  .nav-links a {
    color: var(--text-secondary); background: none;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.02rem;
    font-weight: 500;
    letter-spacing: 1.2px;
    padding: 0.18em 0.96em;
    border-radius: 7px;
    transition: background 0.14s, color 0.19s;
    position: relative;
    outline: none;
  }
  .nav-links a:hover,
  .nav-links a.active,
  .nav-links a:focus-visible {
    color: var(--primary);
    background: linear-gradient(90deg, #eaf6fb 60%, #d0e7fa 100%);
    box-shadow: 0 2px 12px rgba(52,152,219,0.06);
    outline: 2px solid var(--primary);
  }
  #theme-toggle {
    background: none;
    border: none;
    font-size: 1.35em;
    cursor: pointer;
    color: var(--primary);
    transition: color 0.18s;
    border-radius: 7px;
    padding: 0.12em 0.67em;
  }
  #theme-toggle:active, #theme-toggle:focus-visible { color: var(--accent); outline: 2px solid var(--primary);}
  /* === Main Container & Scroll Snap === */
  .portfolio-container {
    max-width: 1050px;
    margin: 0 auto 0 auto;
    padding: 0 12px 32px 12px;
    display: flex;
    flex-direction: column;
    gap: 54px;
    scroll-snap-type: y proximity;
    background: transparent;
    min-height: 90vh;
  }
  .portfolio-container > section {
    scroll-snap-align: start;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--surface-glass);
    border-radius: 36px;
    box-shadow: 0 4px 44px 0 rgba(52,152,219, 0.10), 0 1.5px 10px #e3eaf2;
    padding: clamp(2.1rem, 4vw, 3.3rem) clamp(1.1rem, 6vw, 2.5rem);
    position: relative;
    opacity: 0;
    transform: translateY(60px) scale(.97);
    animation: fadeInSection 1.3s cubic-bezier(.55,1.2,.4,1) forwards;
    will-change: opacity, transform;
  }
  .portfolio-container > section.visible {
    opacity: 1 !important;
    transform: translateY(0) scale(1) !important;
    transition: opacity 0.55s, transform 0.7s;
  }
  @keyframes fadeInSection {
    0% { opacity: 0; transform: translateY(60px) scale(.97);}
    100% { opacity: 1; transform: translateY(0) scale(1);}
  }
  /* === About/Hero Section === */
  .about-section {
    justify-content: center;
    background: linear-gradient(120deg, var(--section-bg) 60%, #eaf6fb 100%);
    box-shadow: 0 4px 54px 0 rgba(52,152,219, 0.08), 0 0.4px 10px #e3eaf2;
    text-align: center;
    align-items: center;
    min-height: 72vh;
    padding-top: 3.3rem;
    padding-bottom: 3.1rem;
    display: flex;
    flex-direction: column;
    animation: aboutBg 2s cubic-bezier(.46,1.6,.5,1.07) both;
  }
  @keyframes aboutBg {
    0% { background: #fff;}
    100% { background: linear-gradient(120deg, var(--section-bg) 60%, #eaf6fb 100%);}
  }
  .avatar-creative {
    width: clamp(90px, 17vw, 160px);
    height: clamp(90px, 17vw, 160px);
    border-radius: 50%;
    margin-bottom: 1.28rem;
    object-fit: cover;
    border: 4.5px solid var(--primary);
    box-shadow: 0 8px 32px rgba(52,152,219,0.13);
    animation: avatarPop 1.2s cubic-bezier(.62,1.9,.5,1.05) both;
  }
  @keyframes avatarPop {
    0% { opacity: 0; transform: scale(.7) rotate(-7deg);}
    60% { opacity: 0.7; transform: scale(1.1) rotate(2deg);}
    100% { opacity: 1; transform: scale(1) rotate(0);}
  }
  .name {
    font-size: clamp(2.2rem, 6vw, 3.5rem);
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.6rem;
    letter-spacing: 1.1px;
    animation: creativeSlideUp 1.2s cubic-bezier(.61,1.3,.35,1.08) both;
  }
  .title {
    font-size: clamp(1.1rem, 2.5vw, 1.6rem);
    color: var(--secondary);
    margin-bottom: 2rem;
    font-style: italic;
    animation: creativeFadeIn 1.5s cubic-bezier(.46,1.4,.51,1.2) 0.3s both;
  }
  .bio {
    font-size: clamp(1rem, 2.2vw, 1.28rem);
    color: var(--accent);
    max-width: 650px;
    margin: 0 auto 2rem auto;
    line-height: 1.8;
    text-align: justify;
    opacity: 0.95;
    animation: creativeFadeInLong 1.7s cubic-bezier(.36,1.3,.55,1.13) 0.6s both;
  }
  @keyframes creativeFadeIn {0%{opacity:0;transform:translateY(10px);}100%{opacity:1;transform:translateY(0);}}
  @keyframes creativeFadeInLong {0%{opacity:0;} 80%{opacity:0.7;} 100%{opacity:1;}}
  @keyframes creativeSlideUp {0%{opacity:0;transform:translateY(30px);}100%{opacity:1;transform:translateY(0);}}
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.1rem;
    margin-bottom: 1rem;
    justify-content: center;
    animation: fadeInSection 1.1s cubic-bezier(.55,1.2,.4,1) 0.4s both;
  }
  .skill {
    background: var(--primary);
    color: white;
    padding: 0.7rem 1.3rem;
    border-radius: 24px;
    font-size: 1.01rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 12px rgba(52,152,219,0.06);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.17s, box-shadow 0.17s, background 0.17s;
    outline: none;
  }
  .skill:focus-visible, .skill:hover {
    background: var(--accent);
    color: #fff;
    transform: scale(1.08) rotate(-1deg);
    box-shadow: 0 6px 20px rgba(52,152,219,0.13);
  }
  .resume-download {
    display: inline-block;
    margin-top: 0.8rem;
    color: #fff;
    background: linear-gradient(90deg, var(--primary) 60%, var(--accent) 100%);
    padding: 0.83rem 1.54rem;
    border-radius: 22px;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.07rem;
    box-shadow: 0 2px 10px rgba(52,152,219,0.09);
    border: none;
    cursor: pointer;
    position: relative;
    transition: background 0.22s, box-shadow 0.2s, transform 0.18s;
  }
  .resume-download:focus-visible, .resume-download:hover {
    background: linear-gradient(90deg, var(--accent) 40%, var(--primary) 100%);
    transform: translateY(-2px) scale(1.05) rotate(-1deg);
    box-shadow: 0 8px 32px #8fd1fc22;
  }
  /* === Projects === */
  .projects-grid { 
    width: 100%;
    display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;
    justify-items: center;
    align-items: stretch;
    animation: fadeInSection 1.1s cubic-bezier(.41,1.2,.4,1) 0.2s both;
  }
  .project-card {
    background: var(--surface);
    padding: 2rem 1.5rem;
    border: 2px solid #dee2e6;
    border-radius: 16px;
    transition: all 0.37s cubic-bezier(.41,1.6,.6,1.1);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    opacity: 0.96;
    cursor: pointer;
    min-width: 0;
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    position: relative;
    overflow: hidden;
  }
  .project-card:focus-visible, .project-card:hover {
    box-shadow: 0 14px 32px rgba(52,152,219,0.13);
    border-color: var(--primary);
    transform: scale(1.03) translateY(-2px) rotate(-1deg);
    z-index: 1;
    background: #f5fafd;
  }
  .project-title {
    font-size: 1.33rem;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }
  .project-description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.7;
    text-align: justify;
    flex: 1;
  }
  .tech-container {
    display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;
  }
  .tech-tag {
    background: #e9ecef;
    color: var(--text-secondary);
    padding: 0.3rem 0.7rem;
    border-radius: 12px;
    font-size: 0.86rem;
    font-weight: 500;
    transition: background 0.18s, color 0.17s;
  }
  .tech-tag:focus-visible, .tech-tag:hover {
    background: var(--primary);
    color: #fff;
    transform: scale(1.09);
  }
  .project-link {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.92rem;
    position: relative;
    transition: color 0.14s;
    outline: none;
  }
  .project-link:after {
    content: '→';
    margin-left: 8px;
    font-size: 1.1em;
    transition: margin-left 0.19s;
  }
  .project-link:focus-visible, .project-link:hover { color: var(--accent);}
  .project-link:focus-visible:after, .project-link:hover:after { margin-left: 14px;}
  /* === Experience / Education / Certs === */
  .experience-list, .education-list, .certifications-list { width: 100%; max-width: 900px; margin: 0 auto; }
  .experience-item, .education-item, .certification-item {
    background: var(--surface);
    padding: 1.25rem 1.5rem;
    border-left: 6px solid var(--primary);
    margin-bottom: 1.2rem;
    box-shadow: 0 2px 7px rgba(0,0,0,0.04);
    border-radius: 11px;
    position: relative;
    overflow: hidden;
    transition: border 0.18s, box-shadow 0.19s;
    animation: fadeInSection 1.1s cubic-bezier(.55,1.2,.4,1) 0.1s both;
    opacity: 0.97;
    outline: none;
  }
  .experience-item:focus-visible, .experience-item:hover,
  .education-item:focus-visible, .education-item:hover,
  .certification-item:focus-visible, .certification-item:hover {
    border-left-color: var(--accent);
    box-shadow: 0 8px 32px rgba(52,152,219,0.09);
    background: #f8fbfd;
    transform: scale(1.015) translateX(4px);
  }
  .company, .institution, .certification-name {
    font-size: 1.19rem; font-weight: 700; color: var(--accent); margin-bottom: 0.3rem;
    letter-spacing: 0.4px;
  }
  .position, .degree, .issuer {
    font-size: 1.04rem;
    color: var(--primary);
    font-weight: 500;
    margin-bottom: 0.6rem;
  }
  .duration {
    color: var(--secondary);
    font-size: 0.95rem;
    font-style: italic;
    margin-bottom: 0.7rem;
  }
  .education-details, .certification-details {
    font-size: 0.97rem;
    color: var(--text-secondary);
    margin-bottom: 0.2rem;
  }
  .certification-link {
    color: var(--primary);
    text-decoration: underline;
    font-size: 0.92rem;
    transition: color 0.14s;
    outline: none;
  }
  .certification-link:focus-visible, .certification-link:hover { color: var(--accent);}
  /* === Contact === */
  .contact-section {
    background: var(--section-bg);
    padding: 3rem 2rem;
    margin: 0 -2rem;
    text-align: center;
    border-radius: 0 0 24px 24px;
    box-shadow: 0 -2px 18px rgba(52,152,219,0.02);
    width: 100vw;
    min-width: 0;
    max-width: 100vw;
    margin-left: calc(-1 * (50vw - 50%));
    margin-right: calc(-1 * (50vw - 50%));
  }
  .contact-section .section-title { opacity: 1;}
  .contact-form {
    display: flex; flex-direction: column; gap: 1.1rem; max-width: 400px; margin: 0 auto 2.3rem auto;
    align-items: stretch;
  }
  .contact-form input, .contact-form textarea {
    background: var(--surface);
    padding: 1.17rem 1.2rem;
    border: 1.5px solid #e0e0e0;
    border-radius: 7px;
    font-size: 1rem;
    color: var(--text);
    margin-bottom: 0.2rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.18s;
    box-shadow: 0 1px 3px #dbe7f3;
  }
  .contact-form input:focus, .contact-form textarea:focus {
    border-color: var(--primary);
    box-shadow: 0 2px 8px #96d9fc55;
  }
  .contact-form button {
    background: var(--primary);
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 19px;
    padding: 0.87rem 1.95rem;
    cursor: pointer;
    margin-top: 0.4rem;
    font-size: 1.12rem;
    box-shadow: 0 2px 8px #8fd1fc22;
    transition: background 0.19s, box-shadow 0.18s, transform 0.14s;
  }
  .contact-form button:focus-visible, .contact-form button:hover {
    background: var(--accent);
    box-shadow: 0 7px 25px #8fd1fc33;
    transform: scale(1.04) translateY(-1px);
  }
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    max-width: 600px;
    margin: 0 auto;
    animation: fadeInSection 1.1s cubic-bezier(.61,1.2,.45,1) 0.4s both;
  }
  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem;
    background: var(--surface);
    border: 2px solid #dee2e6;
    border-radius: 6px;
    text-decoration: none;
    color: var(--text-secondary);
    transition: all 0.3s cubic-bezier(.4,2,.5,1.2);
    font-weight: 500;
    overflow: hidden;
    z-index: 2;
    outline: none;
  }
  .contact-item:focus-visible, .contact-item:hover {
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 4px 18px #8fd1fc33;
    background: #f5fafd;
  }
  /* === Responsive Typography === */
  html { font-size: 16px;}
  @media (max-width: 1000px) {
    .portfolio-container { max-width: 98vw;}
    .nav-inner { max-width: 98vw;}
    .portfolio-container > section { max-width: 99vw; }
    .experience-list, .education-list, .certifications-list { max-width: 99vw;}
  }
  @media (max-width: 700px) {
    .portfolio-container { padding: 0 0 32px 0;}
    .about-section { padding-top: 2.1rem; padding-bottom: 2.1rem;}
    .portfolio-container > section { padding: 1.4rem 0.3rem; border-radius: 18px;}
    .experience-list, .education-list, .certifications-list { padding: 0 0.3rem;}
    .projects-grid { gap: 1.1rem;}
  }
  @media (max-width: 480px) {
    .name { font-size: 1.5rem;}
    .section-title { font-size: 1.12rem;}
    .nav-inner { flex-direction: column; gap: 1.3rem;}
    .nav-links { gap: 0.7rem;}
    .portfolio-container > section { min-height: 55vh;}
    .contact-section { padding: 1rem 0;}
  }
`;

const ensureRequiredSections = (sections) => {
  // Guarantee all required sections
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
};

const generateProfessionalHTML = (sections, theme) => {
  const sec = ensureRequiredSections(sections);
  return sec.filter(s => s.isVisible).map(s => generateProfessionalSectionHTML(s)).join('\n');
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
  const data = section.data || {};
  const skillsHTML = data.skills?.map(skill =>
    `<span class="skill" tabindex="0">${skill}</span>`
  ).join('') || '';
  return `
    <section class="section about-section" id="about">
      ${data.avatar ? `<img src="${data.avatar}" class="avatar-creative" alt="${data.name || 'Avatar'}" />` : ''}
      <h1 class="name">${data.name || ''}</h1>
      <h2 class="title">${data.title || ''}</h2>
      <p class="bio">${data.bio || ''}</p>
      ${skillsHTML ? `<div class="skills-container">${skillsHTML}</div>` : ''}
      ${data.resume ? `<a href="${data.resume}" class="resume-download" download>Download Resume</a>` : ''}
    </section>
  `;
};

const generateProfessionalProjectsHTML = (section) => {
  const projects = section.data || [];
  const projectsHTML = projects.map(project => {
    const techHTML = project.technologies?.map(tech =>
      `<span class="tech-tag" tabindex="0">${tech}</span>`
    ).join('') || '';
    return `
      <div class="project-card" tabindex="0">
          <h3 class="project-title">${project.title || ''}</h3>
          <p class="project-description">${project.description || ''}</p>
          ${techHTML ? `<div class="tech-container">${techHTML}</div>` : ''}
          ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>` : ''}
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

const generateProfessionalExperienceHTML = (section) => {
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

const generateProfessionalEducationHTML = (section) => {
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

const generateProfessionalCertificationsHTML = (section) => {
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
        ${cert.link ? `<a href="${cert.link}" class="certification-link" target="_blank" rel="noopener noreferrer">Verify Certificate</a>` : ''}
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

const generateProfessionalContactHTML = (section) => {
  const data = section.data || {};
  const contactItems = [];
  if (data.email) contactItems.push(`<a href="mailto:${data.email}" class="contact-item">✉ ${data.email}</a>`);
  if (data.phone) contactItems.push(`<a href="tel:${data.phone}" class="contact-item">☎ ${data.phone}</a>`);
  if (data.linkedin) contactItems.push(`<a href="${data.linkedin}" class="contact-item" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>`);
  if (data.github) contactItems.push(`<a href="${data.github}" class="contact-item" target="_blank" rel="noopener noreferrer">⚡ GitHub</a>`);
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

function generateStunningScripts() {
  return `
<script>
(function() {
  // Theme switcher
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
        // else entry.target.classList.remove('visible');
      });
    }, { threshold: .2 }
  );
  document.querySelectorAll('.portfolio-container > section').forEach(section => observer.observe(section));
  // Nav highlight on scroll
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', function() {
    let fromTop = window.scrollY+120;
    navLinks.forEach(link => {
      const section = document.getElementById(link.getAttribute('href').slice(1));
      if(section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active');
      } else link.classList.remove('active');
    });
  });
  // Accessibility: keyboard nav micro-interaction
  document.querySelectorAll(
    '.skill, .project-card, .experience-item, .education-item, .certification-item, .contact-item'
  ).forEach(el => {
    el.addEventListener('keydown', e => {
      if(e.key === ' ' || e.key === 'Enter') {
        el.classList.add('hover');
        setTimeout(() => el.classList.remove('hover'), 400);
        e.preventDefault();
      }
    });
  });
})();
</script>
  `;
}