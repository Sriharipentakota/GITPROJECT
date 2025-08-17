// Creative Responsive Dark Mode Portfolio Template
// All professional, creative, and micro-interaction features preserved

export const generateDarkModeHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateDarkModeCSS(theme);
  const html = generateDarkModeHTML(sections, theme);

  // Add navigation, theme toggle, micro-interactions, and scroll snap/fade-in
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="Professional portfolio: skills, experience, projects, certifications, and contact.">
    <meta name="theme-color" content="#0c0c0c">
    <style>${css}</style>
</head>
<body>
  <nav class="sticky-nav stunning-fade-in" aria-label="Main Navigation">
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
  ${generateDarkModeScripts()}
</body>
</html>`;
};

// --- CSS ---
export const generateDarkModeCSS = (theme) => `
  :root {
    --primary: #00d4ff;
    --accent: #ff77c6;
    --surface: #191a23;
    --surface-glass: rgba(24,25,36,0.92);
    --text: #e0e0e0;
    --secondary: #7877c6;
    --text-secondary: #b0b0b0;
    --section-bg: #1a1a1a;
    --nav-bg: rgba(24,25,36,0.98);
    --glass-blur: 12px;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 70%, #2d2d2d 100%);
    color: var(--text);
    line-height: 1.6;
    min-height: 100vh;
    margin: 0;
    scroll-behavior: smooth;
    transition: background 0.5s, color 0.5s;
  }
  body.dark-mode {
    --primary: #8fd1fc;
    --accent: #ffb5fa;
    --surface: #16171d;
    --surface-glass: rgba(18,19,23,0.96);
    --text: #f0f5fc;
    --secondary: #b5b5ee;
    --text-secondary: #c8c8d8;
    --section-bg: #16171d;
    --nav-bg: #16171dce;
  }
  /* Sticky Navigation */
  .sticky-nav {
    position: sticky; top: 0; z-index: 1000;
    background: var(--nav-bg);
    box-shadow: 0 2px 22px rgba(0,0,0,0.21);
    padding: 0.7rem 1vw 0.7rem 1vw;
    backdrop-filter: blur(var(--glass-blur));
    animation: fadeInDown 1s cubic-bezier(.5,.01,.5,1.2);
  }
  @keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-38px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  .nav-inner {
    max-width: 1150px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
  }
  .nav-title {
    font-size: clamp(1.02rem, 2vw, 1.25rem);
    font-weight: 700;
    color: var(--primary);
    white-space: nowrap;
    letter-spacing: 0.04em;
  }
  .nav-links {
    display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
  }
  .nav-links a {
    color: var(--text-secondary);
    background: none;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.04rem;
    font-weight: 500;
    letter-spacing: 1.2px;
    padding: 0.19em 0.88em;
    border-radius: 7px;
    transition: background 0.14s, color 0.19s;
    position: relative;
    outline: none;
  }
  .nav-links a:hover,
  .nav-links a.active,
  .nav-links a:focus-visible {
    color: var(--primary);
    background: linear-gradient(90deg, #00d4ff22 60%, #ff77c633 100%);
    box-shadow: 0 2px 12px #00d4ff18;
    outline: 2px solid var(--primary);
  }
  #theme-toggle {
    margin-left: 12px;
    background: none;
    border: none;
    font-size: 1.25em;
    cursor: pointer;
    color: var(--primary);
    transition: color 0.15s;
    border-radius: 7px;
    padding: 0.13em 0.7em;
  }
  #theme-toggle:active, #theme-toggle:focus-visible { color: var(--accent); outline: 2px solid var(--primary);}
  /* Portfolio Container + Scroll Snap */
  .portfolio-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2vw 48px 2vw;
    display: flex;
    flex-direction: column;
    gap: 56px;
    scroll-snap-type: y proximity;
    position: relative;
  }
  .portfolio-container::before {
    content: '';
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.10) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.09) 0%, transparent 50%);
    z-index: -10;
    pointer-events: none;
  }
  .portfolio-container > .section {
    scroll-snap-align: start;
    margin: 0 auto;
    width: 100%;
    max-width: 930px;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--surface-glass);
    border-radius: 24px;
    box-shadow: 0 4px 40px 0 #00d4ff13, 0 2px 15px #1a1a1a;
    padding: clamp(2rem, 5vw, 3.3rem) clamp(0.8rem, 5vw, 2.6rem);
    position: relative;
    opacity: 0;
    transform: translateY(60px) scale(.97);
    animation: fadeInSection 1.3s cubic-bezier(.55,1.2,.4,1) forwards;
    will-change: opacity, transform;
  }
  .portfolio-container > .section.visible {
    opacity: 1 !important;
    transform: translateY(0) scale(1) !important;
    transition: opacity 0.55s, transform 0.7s;
  }
  @keyframes fadeInSection {
    0% { opacity: 0; transform: translateY(60px) scale(.97);}
    100% { opacity: 1; transform: translateY(0) scale(1);}
  }
  /* About Section */
  .about-section {
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.11) 0%, rgba(120, 119, 198, 0.13) 100%);
    text-align: center;
    align-items: center;
    min-height: 72vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: aboutBg 1.8s cubic-bezier(.46,1.6,.5,1.07) both;
  }
  @keyframes aboutBg {
    0% { background: #191a23;}
    100% { background: linear-gradient(135deg, rgba(0, 212, 255, 0.11) 0%, rgba(120, 119, 198, 0.13) 100%);}
  }
  .avatar-creative {
    width: clamp(86px, 15vw, 150px);
    height: clamp(86px, 15vw, 150px);
    border-radius: 50%;
    margin-bottom: 1.2rem;
    object-fit: cover;
    border: 4px solid var(--primary);
    box-shadow: 0 8px 32px rgba(0, 212, 255, 0.13);
    animation: avatarPop 1.2s cubic-bezier(.62,1.9,.5,1.05) both;
  }
  @keyframes avatarPop {
    0% { opacity: 0; transform: scale(.7) rotate(-7deg);}
    60% { opacity: 0.7; transform: scale(1.1) rotate(2deg);}
    100% { opacity: 1; transform: scale(1) rotate(0);}
  }
  .name {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    background: linear-gradient(45deg, #00d4ff, #7877c6, #ff77c6);
    background-clip: text; -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; text-shadow: 0 0 30px #00d4ff77;
    margin-bottom: 1rem; letter-spacing: 1px;
    animation: creativeSlideUp 1.3s cubic-bezier(.61,1.3,.35,1.08) both;
  }
  .title {
    font-size: clamp(1.1rem, 2.5vw, 1.65rem);
    color: #b0b0b0;
    margin-bottom: 2rem;
    font-weight: 300;
    animation: creativeFadeIn 1.6s cubic-bezier(.46,1.4,.51,1.2) 0.2s both;
  }
  .bio {
    font-size: clamp(1rem, 2vw, 1.22rem);
    color: #c0c0c0;
    max-width: 700px;
    margin: 0 auto 2rem auto;
    line-height: 1.8;
    opacity: 0.96;
    animation: creativeFadeInLong 1.8s cubic-bezier(.36,1.3,.55,1.13) 0.4s both;
  }
  @keyframes creativeFadeIn {0%{opacity:0;transform:translateY(10px);}100%{opacity:1;transform:translateY(0);}}
  @keyframes creativeFadeInLong {0%{opacity:0;} 80%{opacity:0.7;} 100%{opacity:1;}}
  @keyframes creativeSlideUp {0%{opacity:0;transform:translateY(30px);}100%{opacity:1;transform:translateY(0);}}
  .skills-container {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 1.1rem; margin-bottom: 1.3rem;
    animation: fadeInSection 1.1s cubic-bezier(.55,1.2,.4,1) 0.4s both;
  }
  .skill {
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.21), rgba(120, 119, 198, 0.21));
    color: var(--primary);
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    font-size: 1.01rem;
    font-weight: 500;
    border: 1px solid rgba(0, 212, 255, 0.3);
    backdrop-filter: blur(var(--glass-blur));
    transition: all 0.3s cubic-bezier(.41,1.6,.6,1.1);
    cursor: pointer;
    outline: none;
  }
  .skill:focus-visible, .skill:hover {
    transform: scale(1.08) translateY(-2px);
    background: linear-gradient(90deg, #ff77c6cc, #00d4ffcc);
    color: #23272e;
    box-shadow: 0 8px 28px #00d4ff33;
    outline: 2px solid #00d4ff;
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
    box-shadow: 0 2px 10px #00d4ff22;
    border: none;
    cursor: pointer;
    position: relative;
    transition: background 0.22s, box-shadow 0.2s, transform 0.18s;
  }
  .resume-download:focus-visible, .resume-download:hover {
    background: linear-gradient(90deg, var(--accent) 40%, var(--primary) 100%);
    transform: translateY(-2px) scale(1.06);
    box-shadow: 0 8px 32px #00d4ff22;
    outline: 2px solid var(--primary);
  }
  /* Projects Grid */
  .projects-grid { 
    width: 100%;
    display: grid; grid-template-columns: repeat(auto-fit, minmax(330px, 1fr)); gap: 2rem;
    justify-items: center; align-items: stretch;
    animation: fadeInSection 1.1s cubic-bezier(.41,1.2,.4,1) 0.2s both;
  }
  .project-card {
    background: rgba(255,255,255,0.03);
    padding: 2rem;
    border-radius: 12px;
    border: 1.5px solid rgba(255,255,255,0.07);
    transition: all 0.31s cubic-bezier(.41,1.6,.6,1.1);
    backdrop-filter: blur(var(--glass-blur));
    min-width: 0; width: 100%; max-width: 400px;
    display: flex; flex-direction: column; align-items: flex-start;
    position: relative;
    opacity: 0.97;
    cursor: pointer;
    overflow: hidden;
  }
  .project-card:focus-visible, .project-card:hover {
    transform: scale(1.03) translateY(-5px) rotate(-1deg);
    background: rgba(0, 212, 255, 0.08);
    border-color: var(--primary);
    box-shadow: 0 10px 30px #00d4ff33;
    outline: 2px solid var(--primary);
  }
  .project-title {
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 1rem;
  }
  .project-description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.7;
    flex: 1;
  }
  .tech-container {
    display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;
  }
  .tech-tag {
    background: rgba(120, 119, 198, 0.3);
    color: var(--text);
    padding: 0.45rem 0.78rem;
    border-radius: 15px;
    font-size: 0.88rem;
    font-weight: 500;
    border: 1px solid rgba(120, 119, 198, 0.5);
    transition: background 0.18s, color 0.17s, transform 0.13s;
    outline: none;
  }
  .tech-tag:focus-visible, .tech-tag:hover {
    background: var(--primary);
    color: #23272e;
    transform: scale(1.09);
    outline: 2px solid var(--primary);
  }
  .project-link {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.21s;
    font-size: 0.98rem;
    position: relative;
    outline: none;
  }
  .project-link:after {
    content: '→';
    margin-left: 8px;
    font-size: 1.07em;
    transition: margin-left 0.19s;
  }
  .project-link:focus-visible, .project-link:hover { color: var(--primary);}
  .project-link:focus-visible:after, .project-link:hover:after { margin-left: 14px;}
  /* Experience, Education, Certifications */
  .experience-list, .education-list, .certifications-list { width: 100%; max-width: 900px; margin: 0 auto;}
  .experience-item, .education-item, .certification-item {
    background: rgba(255,255,255,0.02);
    padding: 2rem;
    border-radius: 13px;
    margin-bottom: 1.5rem;
    position: relative;
    border-left: 4px solid var(--primary);
    backdrop-filter: blur(var(--glass-blur));
    outline: none;
    transition: border 0.18s, box-shadow 0.17s, background 0.17s;
    box-shadow: 0 2px 7px #1a1a1a70;
  }
  .experience-item:focus-visible, .experience-item:hover,
  .education-item:focus-visible, .education-item:hover,
  .certification-item:focus-visible, .certification-item:hover {
    border-left-color: var(--accent);
    box-shadow: 0 8px 32px #00d4ff33;
    background: rgba(0, 212, 255, 0.07);
  }
  .experience-item::before, .education-item::before, .certification-item::before {
    content: '';
    position: absolute;
    left: -6px; top: 1rem;
    width: 12px; height: 12px;
    background: var(--primary);
    border-radius: 50%;
    box-shadow: 0 0 15px #00d4ffbb;
  }
  .company, .institution, .certification-name {
    font-size: 1.23rem; font-weight: 600; color: var(--primary); margin-bottom: 0.5rem;
    letter-spacing: 0.4px;
  }
  .position, .degree, .issuer {
    font-size: 1.07rem;
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .duration {
    color: var(--secondary);
    font-size: 0.98rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .education-details, .certification-details { font-size: 0.97rem; color: var(--text-secondary); margin-bottom: 0.2rem;}
  .certification-link {
    color: var(--accent);
    text-decoration: underline;
    font-size: 0.98rem;
    transition: color 0.14s;
    outline: none;
  }
  .certification-link:focus-visible, .certification-link:hover { color: var(--primary);}
  /* Contact */
  .contact-section {
    background: linear-gradient(135deg, rgba(120, 119, 198, 0.14) 0%, rgba(255, 119, 198, 0.14) 100%);
    text-align: center;
    border-radius: 0 0 24px 24px;
    margin: 0 -2vw;
    box-shadow: 0 -2px 18px #00d4ff18;
    min-width: 0; max-width: 100vw;
  }
  .contact-form {
    display: flex; flex-direction: column; gap: 1.1rem; max-width: 400px; margin: 0 auto 2.2rem auto;
    align-items: stretch;
  }
  .contact-form input, .contact-form textarea {
    background: var(--surface);
    padding: 1.17rem 1.2rem;
    border: 1.5px solid #23272e;
    border-radius: 7px;
    font-size: 1rem;
    color: var(--text);
    margin-bottom: 0.2rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.17s, box-shadow 0.15s;
    box-shadow: 0 1px 3px #191a23;
  }
  .contact-form input:focus, .contact-form textarea:focus {
    border-color: var(--primary);
    box-shadow: 0 2px 8px #00d4ff55;
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
    box-shadow: 0 2px 8px #00d4ff22;
    transition: background 0.19s, box-shadow 0.18s, transform 0.14s;
  }
  .contact-form button:focus-visible, .contact-form button:hover {
    background: var(--accent);
    box-shadow: 0 7px 25px #00d4ff33;
    transform: scale(1.04) translateY(-1px);
    outline: 2px solid var(--primary);
  }
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    max-width: 700px;
    margin: 0 auto;
    animation: fadeInSection 1.1s cubic-bezier(.61,1.2,.45,1) 0.4s both;
  }
  .contact-item {
    display: flex; align-items: center; justify-content: center; gap: 1rem;
    padding: 1.2rem;
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    text-decoration: none;
    color: var(--text-secondary);
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(var(--glass-blur));
    transition: all 0.3s cubic-bezier(.41,1.6,.6,1.1);
    font-weight: 500;
    outline: none;
  }
  .contact-item:focus-visible, .contact-item:hover {
    transform: translateY(-3px) scale(1.07);
    background: rgba(0, 212, 255, 0.13);
    border-color: var(--primary);
    color: var(--primary);
    box-shadow: 0 5px 20px #00d4ff33;
    outline: 2px solid var(--primary);
  }
  /* Responsive Typography and Layout */
  html { font-size: 16px;}
  @media (max-width: 1050px) {
    .portfolio-container { max-width: 98vw;}
    .nav-inner { max-width: 98vw;}
    .portfolio-container > .section { max-width: 99vw; }
    .experience-list, .education-list, .certifications-list { max-width: 99vw;}
  }
  @media (max-width: 800px) {
    .portfolio-container { padding: 0 1vw 32px 1vw;}
    .about-section { padding: 1.7rem 0.6rem;}
    .portfolio-container > .section { padding: 1.4rem 0.2rem; border-radius: 18px;}
    .experience-list, .education-list, .certifications-list { padding: 0 0.2rem;}
    .projects-grid { gap: 1.1rem;}
  }
  @media (max-width: 500px) {
    .name { font-size: 1.6rem;}
    .section-title { font-size: 1.18rem;}
    .nav-inner { flex-direction: column; gap: 1.3rem;}
    .nav-links { gap: 0.7rem;}
    .portfolio-container > .section { min-height: 55vh;}
    .contact-section { padding: 1rem 0;}
  }
`;

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

const generateDarkModeHTML = (sections, theme) => {
  const sec = ensureRequiredSections(sections);
  return sec.filter(s => s.isVisible).map(s => generateDarkModeSectionHTML(s)).join('\n');
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

const generateDarkModeProjectsHTML = (section) => {
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

const generateDarkModeExperienceHTML = (section) => {
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

const generateDarkModeEducationHTML = (section) => {
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

const generateDarkModeCertificationsHTML = (section) => {
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
        ${cert.link ? `<a href="${cert.link}" class="certification-link" target="_blank" rel="noopener noreferrer">Verify Certificate →</a>` : ''}
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

const generateDarkModeContactHTML = (section) => {
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

function generateDarkModeScripts() {
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
      });
    }, { threshold: .2 }
  );
  document.querySelectorAll('.portfolio-container > .section').forEach(section => observer.observe(section));
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
        setTimeout(() => el.classList.remove('hover'), 350);
        e.preventDefault();
      }
    });
  });
})();
</script>
  `;
}