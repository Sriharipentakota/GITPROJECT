// Minimalist Portfolio Template (Enhanced UI/UX & Unique Features)
// - Animated intro section
// - Interactive skill bars
// - Expand/collapse for experience/education
// - Theme switcher (light/dark, pure CSS/JS)
// - Smooth section navigation w/ sticky nav
// - Download resume button
// - Ensures all required sections present

export const generateMinimalistHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateMinimalistCSS(theme);
  const html = generateMinimalistHTML(sections, theme);

  // --- Add theme switcher script, section nav, and expand/collapse logic ---
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="Professional portfolio: skills, experience, projects, certifications, and contact.">
    <style>${css}</style>
</head>
<body>
    ${generateMinimalistNav(sections)}
    ${html}
    ${generateMinimalistScripts()}
</body>
</html>`;
};

function ensureSections(sections) {
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
}

function generateMinimalistNav(sections) {
  // Sticky nav with section links and theme toggle
  const navLinks = [
    {type: 'about', label: 'About'},
    {type: 'experience', label: 'Experience'},
    {type: 'projects', label: 'Projects'},
    {type: 'education', label: 'Education'},
    {type: 'certifications', label: 'Certs'},
    {type: 'contact', label: 'Contact'},
  ];
  return `
  <nav class="sticky-nav">
    <span class="nav-title">Portfolio</span>
    <div class="nav-links">
      ${navLinks.map(nl => `<a href="#${nl.type}">${nl.label}</a>`).join('')}
      <button id="theme-toggle" aria-label="Switch Theme">🌗</button>
    </div>
  </nav>
  `;
}

export const generateMinimalistCSS = (theme) => `
  :root {
    --primary: ${theme.primary};
    --accent: ${theme.accent};
    --surface: #fff;
    --text: #333;
    --secondary: ${theme.secondary || "#888"};
    --text-secondary: #666;
    --skill-bar-bg: #eee;
    --skill-bar-fill: var(--primary);
    --nav-bg: rgba(255,255,255,0.96);
    --nav-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  body.dark-mode {
    --primary: ${theme.primaryDark || "#c9f"};
    --accent: ${theme.accentDark || "#222"};
    --surface: #18181a;
    --text: #eee;
    --secondary: #b5b5b5;
    --text-secondary: #aaa;
    --skill-bar-bg: #272730;
    --skill-bar-fill: ${theme.primaryDark || "#c9f"};
    --nav-bg: #17171b;
    --nav-shadow: 0 2px 8px rgba(0,0,0,0.28);
    background: #111;
    color: var(--text);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background: var(--surface);
    color: var(--text);
    line-height: 1.8;
    font-weight: 300;
    transition: background 0.3s, color 0.3s;
    min-height: 100vh;
  }
  .sticky-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--nav-bg);
    box-shadow: var(--nav-shadow);
    padding: 0.8rem 2rem;
    margin-bottom: 36px;
  }
  .nav-title {
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--primary);
    letter-spacing: 0.02em;
  }
  .nav-links {
    display: flex;
    gap: 1.7rem;
    align-items: center;
  }
  .nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 1.02rem;
    font-weight: 400;
    position: relative;
    transition: color 0.2s;
  }
  .nav-links a:hover,
  .nav-links a.active {
    color: var(--primary);
  }
  #theme-toggle {
    background: none;
    border: none;
    font-size: 1.3em;
    cursor: pointer;
    color: var(--primary);
    transition: color 0.2s;
  }
  #theme-toggle:active { color: var(--accent);}
  .portfolio-container {
    max-width: 820px;
    margin: 48px auto 60px auto;
    padding: 0 32px;
    background: var(--surface);
    border-radius: 20px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  }
  .section {
    margin-bottom: 64px;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 44px;
    scroll-margin-top: 80px;
  }
  .section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .section-title {
    font-size: 1.18rem;
    font-weight: 600;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 32px;
    text-align: left;
    background: none;
  }
  /* --- About Section --- */
  .about-section { text-align: left; background: none; box-shadow: none; }
  .about-avatar {
    float: left;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 2rem;
    margin-bottom: 0.7rem;
    border: 2px solid var(--primary);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  .name {
    font-size: 2.5rem;
    font-weight: 200;
    color: var(--primary);
    margin-bottom: 10px;
    letter-spacing: -1px;
    margin-top: 0;
  }
  .title {
    font-size: 1.08rem;
    color: var(--secondary);
    margin-bottom: 26px;
    font-weight: 400;
  }
  .bio {
    font-size: 1.09rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 28px;
    max-width: none;
    font-weight: 300;
  }
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    justify-content: flex-start;
    margin-bottom: 18px;
  }
  .skill-item {
    display: flex;
    align-items: center;
    gap: 0.7em;
  }
  .skill-label {
    background: transparent;
    color: var(--secondary);
    padding: 6px 15px;
    border: 1.2px solid #e0e0e0;
    border-radius: 20px;
    font-size: 0.91rem;
    font-weight: 300;
    transition: border-color .2s;
    cursor: pointer;
  }
  .skill-bar {
    display: inline-block;
    height: 7px;
    border-radius: 3.5px;
    background: var(--skill-bar-bg);
    width: 120px;
    margin-left: 10px;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
    transition: background 0.2s;
  }
  .skill-bar-fill {
    display: block;
    height: 100%;
    background: linear-gradient(90deg,var(--skill-bar-fill),var(--accent));
    width: 0;
    border-radius: 3.5px;
    transition: width 1.2s cubic-bezier(.6,.01,.4,1);
  }
  .resume-download {
    display: inline-block;
    margin-top: 0.5rem;
    color: #fff;
    background: var(--primary);
    padding: 0.56rem 1.12rem;
    border-radius: 18px;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.01rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    transition: background 0.2s;
  }
  .resume-download:hover { background: var(--accent);}
  /* --- Projects --- */
  .projects-grid { display: flex; flex-direction: column; gap: 24px; }
  .project-card { background: none; border-radius: 0; padding: 0 0 23px 0; border-bottom: 1px solid #f5f5f5;}
  .project-card:last-child { border-bottom: none;}
  .project-title { font-size: 1.15rem; font-weight: 600; color: var(--primary); margin-bottom: 7px;}
  .project-description { color: var(--text-secondary); margin-bottom: 11px; line-height: 1.6;}
  .tech-container { display: inline; margin-bottom: 12px; }
  .tech-tag { background: none; color: var(--secondary); padding: 0; border-radius: 0; font-size: 0.93rem; font-weight: 300; margin-right: 13px;}
  .project-link { color: var(--primary); text-decoration: underline; font-weight: 400; font-size: 0.96rem;}
  .exp-collapsible { border: none; background: none; padding: 0; color: var(--accent); font-size: 0.98rem; cursor: pointer; margin-bottom: 6px;}
  .exp-collapsible:after { content: ' ▼'; font-size: 0.89em;}
  .exp-collapsible.active:after { content: ' ▲'; }
  .experience-list, .education-list, .certifications-list {
    display: flex; flex-direction: column; gap: 10px;
  }
  .experience-item, .education-item, .certification-item {
    background: none; border-radius: 0; box-shadow: none; border-bottom: 1px solid #f5f5f5; margin-bottom: 5px; padding-bottom: 4px;
    position: relative;
  }
  .experience-item:last-child, .education-item:last-child, .certification-item:last-child { border-bottom: none; }
  .company, .institution, .certification-name { font-size: 1.09rem; font-weight: 500; color: var(--primary); margin-bottom: 2px;}
  .position, .degree, .issuer { font-size: 0.99rem; color: var(--secondary); margin-bottom: 1px;}
  .duration { color: var(--text-secondary); font-size: 0.91rem; margin-bottom: 6px;}
  .education-details, .certification-details { font-size: 0.94rem; color: var(--text-secondary); margin-bottom: 2px;}
  .certification-link { color: var(--accent); text-decoration: underline; font-size: 0.92rem;}
  /* --- Contact --- */
  .contact-section { background: none; text-align: left; }
  .contact-form { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; margin: 0 auto 1.5rem auto;}
  .contact-form input, .contact-form textarea { padding: 0.7rem 1rem; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 1rem; background: var(--surface);}
  .contact-form button { background: var(--primary); color: #fff; font-weight: 600; border: none; border-radius: 19px; padding: 0.8rem 1.8rem; cursor: pointer; margin-top: 0.4rem; transition: background 0.2s;}
  .contact-form button:hover { background: var(--accent);}
  .contact-grid { margin-top: 1.2rem;}
  .contact-item { display: inline-block; background: none; padding: 7px 0; border-radius: 0; text-decoration: none; color: var(--secondary); font-weight: 400; margin-right: 18px; transition: color 0.2s;}
  .contact-item:hover { color: var(--primary);}
  @media (max-width: 768px) {
    .portfolio-container { padding: 0 10px; margin: 25px auto;}
    .sticky-nav { padding: 0.8rem 1rem;}
    .nav-links { gap: 1rem;}
    .name { font-size: 2rem;}
    .about-avatar { width: 70px; height: 70px; margin-right: 1rem;}
    .section { margin-bottom: 40px; padding-bottom: 20px;}
  }
`;

const generateMinimalistHTML = (sections, theme) => {
  const sec = ensureSections(sections);
  return `<div class="portfolio-container">
    ${sec.filter(s => s.isVisible).map(s => generateMinimalistSectionHTML(s)).join('\n')}
  </div>`;
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
  const data = section.data || {};
  // Skill bar demo: { skill: "React", level: 90 } or just string
  const skills = Array.isArray(data.skills) ? data.skills : [];
  const skillsHTML = skills.map(skill =>
    typeof skill === 'string'
      ? `<span class="skill-label">${skill}</span>`
      : `<span class="skill-item"><span class="skill-label">${skill.skill}</span>
         <span class="skill-bar"><span class="skill-bar-fill" data-skill="${skill.level||70}"></span></span></span>`
  ).join('');
  return `
    <section class="section about-section" id="about">
      ${data.avatar ? `<img src="${data.avatar}" class="about-avatar" alt="${data.name || 'Avatar'}" />` : ''}
      <h1 class="name">${data.name || ''}</h1>
      <h2 class="title">${data.title || ''}</h2>
      <p class="bio">${data.bio || ''}</p>
      ${skillsHTML ? `<div class="skills-container">${skillsHTML}</div>` : ''}
      ${data.resume ? `<a href="${data.resume}" class="resume-download" download>Download Resume</a>` : ''}
    </section>
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
        <div class="project-title">${project.title || ''}</div>
        <div class="project-description">${project.description || ''}</div>
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

const generateMinimalistExperienceHTML = (section) => {
  const experiences = section.data || [];
  const experienceHTML = experiences.map((exp, i) => `
    <div class="experience-item">
      <button class="exp-collapsible" data-exp="${i}" tabindex="0">${exp.company || exp.title || 'Experience'} (${exp.duration || ''})</button>
      <div class="exp-content" style="display:none;">
        <div class="company">${exp.company || ''}</div>
        <div class="position">${exp.position || ''}</div>
        <div class="duration">${exp.duration || ''}</div>
        <div>${exp.description || ''}</div>
      </div>
    </div>
  `).join('');
  return `
    <section class="section" id="experience">
      <div class="section-title">${section.title || 'Experience'}</div>
      <div class="experience-list">${experienceHTML}</div>
    </section>
  `;
};

const generateMinimalistEducationHTML = (section) => {
  const educationList = section.data || [];
  const educationHTML = educationList.map((edu, i) => {
    const detailsHTML = [];
    if (edu.gpa) detailsHTML.push(`<span>GPA: ${edu.gpa}</span>`);
    if (edu.location) detailsHTML.push(`<span>${edu.location}</span>`);
    return `
      <div class="education-item">
        <button class="exp-collapsible" data-edu="${i}" tabindex="0">${edu.institution || edu.degree || 'Education'} (${edu.duration || ''})</button>
        <div class="exp-content" style="display:none;">
          <div class="institution">${edu.institution || ''}</div>
          <div class="degree">${edu.degree || ''}${edu.field ? ` in ${edu.field}` : ''}</div>
          <div class="education-details">${detailsHTML.join(' | ')}</div>
          <div class="duration">${edu.duration || ''}</div>
        </div>
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

const generateMinimalistCertificationsHTML = (section) => {
  const certifications = section.data || [];
  const certificationsHTML = certifications.map((cert, i) => {
    const detailsHTML = [];
    if (cert.date) detailsHTML.push(`<span>Issued: ${cert.date}</span>`);
    if (cert.credentialId) detailsHTML.push(`<span>ID: ${cert.credentialId}</span>`);
    return `
      <div class="certification-item">
        <button class="exp-collapsible" data-cert="${i}" tabindex="0">${cert.name || cert.issuer || 'Certification'}</button>
        <div class="exp-content" style="display:none;">
          <div class="certification-name"><strong>${cert.name || ''}</strong></div>
          <div class="issuer">${cert.issuer || ''}</div>
          <div class="certification-details">${detailsHTML.join(' ')}</div>
          ${cert.link ? `<a href="${cert.link}" class="certification-link" target="_blank" rel="noopener noreferrer">Verify →</a>` : ''}
        </div>
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

const generateMinimalistContactHTML = (section) => {
  const data = section.data || {};
  const contactItems = [];
  if (data.email) contactItems.push(`<a href="mailto:${data.email}" class="contact-item">${data.email}</a>`);
  if (data.phone) contactItems.push(`<a href="tel:${data.phone}" class="contact-item">${data.phone}</a>`);
  if (data.linkedin) contactItems.push(`<a href="${data.linkedin}" class="contact-item" target="_blank" rel="noopener noreferrer">LinkedIn</a>`);
  if (data.github) contactItems.push(`<a href="${data.github}" class="contact-item" target="_blank" rel="noopener noreferrer">GitHub</a>`);
  if (data.website) contactItems.push(`<a href="${data.website}" class="contact-item" target="_blank" rel="noopener noreferrer">Website</a>`);
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

// --- JS: Theme toggle, skill bars, expand/collapse, nav highlight ---
function generateMinimalistScripts() {
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
  // Use saved theme
  if(localStorage.getItem('portfolio-theme')) {
    if(localStorage.getItem('portfolio-theme') === 'dark') body.classList.add('dark-mode');
    else body.classList.remove('dark-mode');
  }
  // Expand/collapse
  document.querySelectorAll('.exp-collapsible').forEach(btn => {
    btn.addEventListener('click', function() {
      btn.classList.toggle('active');
      const content = btn.nextElementSibling;
      if(content) {
        if(content.style.display === 'block') content.style.display = 'none';
        else content.style.display = 'block';
      }
    });
    btn.addEventListener('keydown', function(e) {
      if(e.key === ' ' || e.key === 'Enter') { btn.click(); e.preventDefault(); }
    });
  });
  // Animate skill bars
  function animateSkillBars() {
    document.querySelectorAll('.skill-bar-fill').forEach(el => {
      el.style.width = '0';
      setTimeout(() => {
        el.style.width = (el.dataset.skill || 70) + '%';
      }, 400);
    });
  }
  animateSkillBars();
  // Nav highlight on scroll
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = Array.from(document.querySelectorAll('.section')).map(s => s.id && s);
  window.addEventListener('scroll', function() {
    let fromTop = window.scrollY+120;
    navLinks.forEach(link => {
      const section = document.getElementById(link.getAttribute('href').slice(1));
      if(section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active');
      } else link.classList.remove('active');
    });
  });
})();
</script>
  `;
}