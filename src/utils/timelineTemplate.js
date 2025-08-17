// Modern, Stunning, Creative, Interactive Timeline Portfolio Template

export const generateTimelineHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateTimelineCSS(theme);
  const html = generateTimelineHTML(sections, theme);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="description" content="Modern interactive portfolio: timeline, gallery, animated skills, and more.">
  <style>${css}</style>
</head>
<body>
  <aside class="timeline-sidebar">
    <div class="timeline-sidebar-inner">
      <img src="${theme.logo || ''}" alt="Logo" class="sidebar-logo" />
      <nav class="timeline-nav">
        <a href="#home" class="nav-icon" title="Home"><span>🏠</span></a>
        <a href="#about" class="nav-icon" title="About"><span>👤</span></a>
        <a href="#projects" class="nav-icon" title="Projects"><span>🖼️</span></a>
        <a href="#experience" class="nav-icon" title="Experience"><span>🕓</span></a>
        <a href="#education" class="nav-icon" title="Education"><span>🎓</span></a>
        <a href="#certifications" class="nav-icon" title="Certs"><span>🏅</span></a>
        <a href="#contact" class="nav-icon" title="Contact"><span>✉️</span></a>
        <button id="theme-toggle" title="Toggle Theme" class="nav-icon" aria-label="Theme">🌗</button>
      </nav>
    </div>
  </aside>
  <div class="creative-bg" id="home"></div>
  <main class="portfolio-container timeline-scroll">
    ${html}
  </main>
  <div id="modal-overlay" class="modal-overlay"></div>
  ${generateTimelineScripts()}
</body>
</html>`;
};

// --- Ensure all required sections ---
function ensureRequiredSectionsTimeline(sections) {
  const types = sections.map(s => s.type);
  const defaults = [
    {type: 'about', title: 'About Me', isVisible: true, data: {name: '', title: '', bio: '', avatar: '', skills: [], resume: '', timeline: []}},
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

// --- CSS ---
export const generateTimelineCSS = (theme) => `
  :root {
    --primary: ${theme.primary || "#3498db"};
    --accent: ${theme.accent || "#ff77c6"};
    --bg1: #1e2336;
    --bg2: #2a2d3e;
    --card: #23263a;
    --white: #fff;
    --shadow: 0 4px 32px 0 rgba(52,152,219, 0.16), 0 1.5px 10px #e3eaf2;
  }
  body {
    margin: 0;
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: var(--white);
    background: linear-gradient(120deg, var(--bg1) 55%, var(--bg2) 100%);
    overflow-x: hidden;
    min-height: 100vh;
    transition: background 0.6s, color 0.6s;
  }
  body.light-mode {
    --bg1: #f4f7fb;
    --bg2: #e9ecef;
    --card: #fff;
    --white: #2c3e50;
    color: #2c3e50;
  }
  .creative-bg {
    position: fixed;
    z-index: -2;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100vw; height: 100vh;
    animation: bgmove 24s linear infinite alternate;
    background: linear-gradient(115deg, var(--primary) 0 27%, var(--accent) 80% 100%);
    background-size: 200% 200%;
    filter: blur(0px);
    opacity: 0.85;
  }
  @keyframes bgmove {
    0% {background-position: 40% 60%;}
    100% {background-position: 80% 10%;}
  }
  /* Sidebar */
  .timeline-sidebar {
    position: fixed; top: 0; left: 0; height: 100vh; width: 70px; background: rgba(30,35,54,0.97);
    z-index: 1000; box-shadow: 2px 0 18px #23263a55;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
  }
  .timeline-sidebar-inner {
    display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
    height: 100vh; justify-content: space-between;
  }
  .sidebar-logo {
    width: 46px; height: 46px; margin: 1.1rem 0 1.5rem 0; border-radius: 50%; object-fit: cover; box-shadow: 0 0 12px var(--primary)55;
    background: #fff;
  }
  .timeline-nav { display: flex; flex-direction: column; gap: 1rem;}
  .nav-icon {
    color: var(--white); background: none; border: none; font-size: 1.4rem; text-align: center;
    border-radius: 9px; transition: background 0.17s, color 0.17s; cursor: pointer; outline: none;
    padding: 0.23rem 0;
  }
  .nav-icon:focus-visible, .nav-icon:hover { color: var(--primary); background: #23263a33; }
  #theme-toggle { font-size: 1.35rem; }
  /* Portfolio Container */
  .portfolio-container {
    margin: 0 auto;
    padding: 2.5rem 1.1rem 3rem 95px;
    max-width: 1100px;
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  /* Home/Intro Section */
  .timeline-intro {
    min-height: 87vh;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    text-align: center;
    position: relative;
  }
  .timeline-profile-img {
    width: 180px; height: 180px; border-radius: 50%;
    object-fit: cover; box-shadow: 0 8px 42px var(--primary)66, 0 2px 9px #0008;
    border: 6px solid var(--card);
    background: #fff;
    margin: 1.2rem 0 1.5rem 0;
    animation: profilepop 1.2s cubic-bezier(.62,1.9,.5,1.07) both;
  }
  @keyframes profilepop {
    0% { opacity: 0; transform: scale(.7);}
    60% { opacity: 0.7; transform: scale(1.09);}
    100% { opacity: 1; transform: scale(1);}
  }
  .timeline-name {
    font-size: clamp(2.6rem, 6vw, 4.5rem);
    font-weight: 800;
    margin-bottom: 0.2em;
    background: linear-gradient(90deg, var(--primary), var(--accent) 70%);
    background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
    text-shadow: 0 0 32px var(--accent)33;
    animation: textpop 1.8s cubic-bezier(.38,1.2,.35,1.04) both;
  }
  @keyframes textpop {
    0% { opacity: 0; transform: scale(.8);}
    80% { opacity: 0.85; transform: scale(1.09);}
    100% { opacity: 1; transform: scale(1);}
  }
  .timeline-tagline {
    font-size: clamp(1.2rem, 3vw, 2.1rem);
    font-weight: 400;
    color: var(--accent);
    margin-bottom: 1.3em;
    letter-spacing: 0.5px;
    animation: textpop 1.6s cubic-bezier(.38,1.2,.35,1.04) 0.1s both;
  }
  /* About - Timeline & Skillbars */
  .about-section {
    width: 100%; display: flex; flex-direction: column; align-items: center; gap: 2.2rem;
    background: var(--card); border-radius: 23px; box-shadow: var(--shadow);
    padding: 2.2rem 1.3rem 2.2rem 1.3rem; margin-bottom: 2.5rem;
  }
  .about-timeline {
    width: 100%; max-width: 650px; position: relative; margin: 0 auto;
    padding-left: 40px;
  }
  .about-timeline::before {
    content: ''; position: absolute; left: 18px; top: 0; bottom: 0; width: 3px; background: var(--primary);
    border-radius: 2px;
  }
  .about-timeline-item {
    position: relative; margin-bottom: 2rem; background: var(--surface); padding: 1.2rem 1.5rem;
    border-radius: 12px; box-shadow: 0 2px 7px #3498db22;
    animation: timelineFade 1.3s cubic-bezier(.46,1.2,.5,1.07) both;
  }
  .about-timeline-item::before {
    content: ''; position: absolute; left: -32px; top: 20px; width: 15px; height: 15px; background: var(--primary); border-radius: 50%;
    box-shadow: 0 0 17px var(--primary)44;
  }
  @keyframes timelineFade {
    0% { opacity: 0; transform: scale(.95) translateY(30px);}
    70% { opacity: 0.7; }
    100% { opacity: 1; transform: scale(1) translateY(0);}
  }
  .about-skillbars {
    width: 100%; max-width: 650px; margin: 0 auto;
    display: flex; flex-direction: column; gap: 1.2rem;
  }
  .skillbar-label { font-weight: 600; margin-bottom: 5px; }
  .skillbar {
    width: 100%; height: 18px; background: #2c365a; border-radius: 9px; overflow: hidden;
    box-shadow: 0 2px 9px #3498db20;
    position: relative;
  }
  .skillbar-progress {
    height: 100%; width: 0; background: linear-gradient(90deg, var(--primary), var(--accent) 80%);
    border-radius: 9px;
    transition: width 1.2s cubic-bezier(.6,.01,.4,1);
    box-shadow: 0 0 20px var(--primary)33;
    position: absolute;
    left: 0; top: 0;
  }
  .skillbar-value {
    position: absolute; right: 10px; top: 0; height: 100%; font-size: 0.92rem; color: var(--accent);
    font-weight: 700; display: flex; align-items: center;
  }
  /* Masonry Project Gallery */
  .projects-section { width: 100%; }
  .projects-filters {
    display: flex; gap: 0.8rem; margin-bottom: 2rem; flex-wrap: wrap; justify-content: center;
  }
  .filter-btn {
    background: var(--surface); color: var(--primary); border: none; border-radius: 13px;
    font-size: 1rem; padding: 0.57em 1.4em; font-weight: 600;
    cursor: pointer; box-shadow: 0 1px 4px #3498db22;
    transition: background 0.14s, color 0.16s, transform 0.13s;
    outline: none;
  }
  .filter-btn.active, .filter-btn:focus-visible, .filter-btn:hover {
    background: var(--primary); color: #fff; transform: scale(1.07);
    outline: 2px solid var(--accent);
  }
  .projects-masonry {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    width: 100%; margin: 0 auto;
    animation: fadeInSection 1.05s cubic-bezier(.41,1.2,.4,1) 0.1s both;
  }
  .project-card {
    background: var(--card);
    border-radius: 17px;
    box-shadow: 0 2px 14px #3498db22;
    padding: 1.3rem 1rem 1.6rem 1rem;
    outline: none;
    cursor: pointer; position: relative;
    transition: box-shadow 0.22s, transform 0.22s;
    animation: fadeInSection 1.15s cubic-bezier(.41,1.2,.4,1) both;
  }
  .project-card:focus-visible, .project-card:hover {
    box-shadow: 0 10px 28px var(--primary)44;
    transform: scale(1.04) translateY(-2px);
    z-index: 5;
  }
  .project-img {
    width: 100%; height: 180px; object-fit: cover; border-radius: 13px; margin-bottom: 1rem;
    background: #23263a;
    box-shadow: 0 1.5px 12px #23263a33;
    transition: box-shadow 0.15s, transform 0.1s;
  }
  .project-card:focus-visible .project-img, .project-card:hover .project-img {
    box-shadow: 0 7px 26px var(--primary)33;
    transform: scale(1.02);
  }
  .project-title { font-size: 1.22rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;}
  .project-description { font-size: 0.98rem; color: var(--white); opacity: 0.82; margin-bottom: 0.7rem;}
  .tech-container { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.7rem; }
  .tech-tag { background: var(--primary); color: #fff; padding: 0.23rem 0.7rem; border-radius: 9px; font-size: 0.82rem; font-weight: 600;}
  .project-link { color: var(--accent); text-decoration: underline; font-weight: 600; font-size: 0.95rem;}
  /* Modal overlay for project details */
  .modal-overlay {
    display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100vw; height: 100vh;
    background: rgba(30,35,54,0.91);
    align-items: center; justify-content: center;
    transition: opacity 0.30s;
  }
  .modal-overlay.active { display: flex; animation: fadeInModal 0.3s cubic-bezier(.41,1.2,.4,1);}
  @keyframes fadeInModal {0%{opacity:0;}100%{opacity:1;}}
  .modal-content {
    background: var(--card);
    border-radius: 19px;
    padding: 2.5rem 2.2rem;
    box-shadow: 0 10px 32px var(--primary)33;
    position: relative; max-width: 540px; width: 98vw;
    animation: fadeInSection 0.7s cubic-bezier(.41,1.2,.4,1) both;
  }
  .modal-close {
    position: absolute; top: 14px; right: 18px; background: var(--accent);
    color: #fff; border-radius: 50%; width: 38px; height: 38px;
    border: none; font-size: 1.45rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.19s, transform 0.16s;
    animation: closepop 1.1s cubic-bezier(.41,1.3,.4,1.2) both;
    outline: none;
  }
  @keyframes closepop {0%{transform:scale(.7);}100%{transform:scale(1);}}
  .modal-close:focus-visible, .modal-close:hover { background: var(--primary); transform: scale(1.1);}
  /* Contact */
  .contact-section { background: var(--card); text-align: center; border-radius: 23px; box-shadow: var(--shadow);}
  .contact-form { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; margin: 0 auto 2.3rem auto; align-items: stretch;}
  .contact-form input, .contact-form textarea {
    background: var(--surface);
    padding: 1.1rem 1.2rem; border: 1.5px solid #23263a; border-radius: 8px;
    font-size: 1rem; color: var(--white); margin-bottom: 0.1rem; font-family: inherit; outline: none; box-shadow: 0 1px 3px #23263a;
    transition: border-color 0.17s, box-shadow 0.15s;
  }
  .contact-form input:focus, .contact-form textarea:focus {
    border-color: var(--primary);
    box-shadow: 0 2px 8px var(--primary)33;
  }
  .contact-form button {
    background: var(--primary); color: #fff; font-weight: 600; border: none; border-radius: 13px;
    padding: 0.9rem 1.7rem; cursor: pointer; margin-top: 0.32rem; font-size: 1.01rem;
    box-shadow: 0 2px 7px var(--primary)22; transition: background 0.13s, box-shadow 0.12s, transform 0.14s;
  }
  .contact-form button:focus-visible, .contact-form button:hover {
    background: var(--accent); box-shadow: 0 4px 13px var(--accent)22; transform: scale(1.03) translateY(-1px);
    outline: 2px solid var(--primary);
  }
  .contact-grid { display: flex; justify-content: center; gap: 1.2rem; margin-top: 1.2rem; flex-wrap: wrap;}
  .contact-item { display: flex; align-items: center; gap: 0.7rem; background: var(--surface); border-radius: 8px; padding: 0.8rem 1.3rem;
    color: var(--primary); font-size: 1.05rem; text-decoration: none; border: 1.5px solid #23263a;
    box-shadow: 0 1.5px 8px #eaf6fb18; transition: border 0.14s, box-shadow 0.13s, background 0.13s;
    outline: none;}
  .contact-item:focus-visible, .contact-item:hover {
    background: var(--primary); color: #fff; border-color: var(--accent); outline: 2px solid var(--accent);
    box-shadow: 0 4px 15px var(--primary)22; transform: scale(1.05);
  }
  .social-icons { display: flex; gap: 1.3rem; justify-content: center; margin-top: 1rem;}
  .social-icon {
    color: var(--accent); font-size: 2rem; background: var(--surface); border-radius: 50%;
    width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; transition: background 0.14s, color 0.17s, box-shadow 0.15s;
    box-shadow: 0 1.5px 8px #eaf6fb18; cursor: pointer; outline: none;
  }
  .social-icon:focus-visible, .social-icon:hover { background: var(--accent); color: #fff; box-shadow: 0 6px 18px var(--primary)33; }
  /* Responsive */
  @media (max-width: 900px) {
    .portfolio-container { max-width: 99vw;}
    .timeline-sidebar { display:none !important;}
    .portfolio-container { padding-left: 0;}
  }
  @media (max-width: 650px) {
    .portfolio-container { padding: 0 0.2rem 1.2rem 0.2rem;}
    .about-section, .contact-section { padding: 1.1rem 0.2rem;}
    .portfolio-container > .section { border-radius: 13px;}
    .projects-masonry { gap: 0.6rem;}
    .contact-section { padding: 0.7rem 0;}
    .social-icons { gap: 0.7rem;}
  }
`;

// --- HTML ---
const generateTimelineHTML = (sections, theme) => {
  const sec = ensureRequiredSectionsTimeline(sections);
  let html = '';
  // Home/Intro
  const about = sec.find(s => s.type === 'about') || {};
  html += `
    <section class="section timeline-intro" id="home">
      ${about.data?.avatar ? `<img src="${about.data.avatar}" class="timeline-profile-img" alt="Profile" />` : ''}
      <div class="timeline-name">${about.data?.name || ''}</div>
      <div class="timeline-tagline">${about.data?.title || ''}</div>
      <p class="bio">${about.data?.bio || ''}</p>
    </section>
  `;
  // About Timeline + Skillbars
  html += `
    <section class="section about-section" id="about">
      <h2 class="section-title">${about.title || "About Me"}</h2>
      <div class="about-timeline">
        ${(about.data?.timeline || []).map(item => `
          <div class="about-timeline-item">
            <div class="timeline-title">${item.title || ''}</div>
            <div class="timeline-period">${item.period || ''}</div>
            <div class="timeline-desc">${item.description || ''}</div>
          </div>
        `).join('')}
      </div>
      <div class="about-skillbars">
        ${(about.data?.skills || []).map(skill =>
          `<div>
            <div class="skillbar-label">${typeof skill === "string" ? skill : skill.skill}</div>
            <div class="skillbar"><div class="skillbar-progress" data-skill="${typeof skill === "string" ? 100 : skill.level}"></div>
            <span class="skillbar-value">${typeof skill === "string" ? "100%" : (skill.level + "%")}</span></div>
          </div>`
        ).join('')}
      </div>
    </section>
  `;
  // Projects Section - Masonry Gallery, Category Filters, Modal
  const projects = sec.find(s => s.type === 'projects') || {data: []};
  const categories = [...new Set(projects.data?.flatMap(p => p.categories || []))].filter(Boolean);
  html += `
    <section class="section projects-section" id="projects">
      <h2 class="section-title">${projects.title || "Projects"}</h2>
      <div class="projects-filters">
        <button class="filter-btn active" data-category="all">All</button>
        ${categories.map(cat => `<button class="filter-btn" data-category="${cat}">${cat}</button>`).join('')}
      </div>
      <div class="projects-masonry">
        ${projects.data?.map((project, i) => `
          <div class="project-card" tabindex="0" data-index="${i}" data-categories="${(project.categories || []).join(',')}">
            ${project.image ? `<img src="${project.image}" class="project-img" alt="${project.title}">` : ""}
            <div class="project-title">${project.title || ''}</div>
            <div class="project-description">${project.description || ''}</div>
            <div class="tech-container">${(project.technologies || []).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}</div>
            <a href="#" class="project-link open-project-modal" data-index="${i}">View Details</a>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  // Experience Timeline
  const experience = sec.find(s => s.type === 'experience') || {data: []};
  html += `
    <section class="section" id="experience">
      <h2 class="section-title">${experience.title || "Experience"}</h2>
      <div class="about-timeline">
        ${(experience.data || []).map(item => `
          <div class="about-timeline-item">
            <div class="timeline-title">${item.company || ""}</div>
            <div class="timeline-period">${item.duration || ""}</div>
            <div class="timeline-desc">${item.position || ""} - ${item.description || ""}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  // Education Timeline
  const education = sec.find(s => s.type === 'education') || {data: []};
  html += `
    <section class="section" id="education">
      <h2 class="section-title">${education.title || "Education"}</h2>
      <div class="about-timeline">
        ${(education.data || []).map(item => `
          <div class="about-timeline-item">
            <div class="timeline-title">${item.institution || ""}</div>
            <div class="timeline-period">${item.duration || ""}</div>
            <div class="timeline-desc">${item.degree || ""} ${item.field || ""} - ${item.description || ""}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  // Certifications Timeline
  const certifications = sec.find(s => s.type === 'certifications') || {data: []};
  html += `
    <section class="section" id="certifications">
      <h2 class="section-title">${certifications.title || "Certifications"}</h2>
      <div class="about-timeline">
        ${(certifications.data || []).map(item => `
          <div class="about-timeline-item">
            <div class="timeline-title">${item.name || ""}</div>
            <div class="timeline-period">${item.date || ""}</div>
            <div class="timeline-desc">${item.issuer || ""} - ${item.credentialId || ""}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  // Contact Section
  const contact = sec.find(s => s.type === 'contact') || {data: {}};
  html += `
    <section class="section contact-section" id="contact">
      <h2 class="section-title">${contact.title || "Contact"}</h2>
      <form class="contact-form" method="POST" action="${contact.data.formAction || '#'}">
        <input type="text" name="name" placeholder="Your Name" required autocomplete="off">
        <input type="email" name="email" placeholder="Your Email" required autocomplete="off">
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div class="contact-grid">
        ${contact.data.email ? `<a href="mailto:${contact.data.email}" class="contact-item">📧 ${contact.data.email}</a>` : ''}
        ${contact.data.phone ? `<a href="tel:${contact.data.phone}" class="contact-item">📞 ${contact.data.phone}</a>` : ''}
        ${contact.data.linkedin ? `<a href="${contact.data.linkedin}" class="contact-item" target="_blank">💼 LinkedIn</a>` : ''}
        ${contact.data.github ? `<a href="${contact.data.github}" class="contact-item" target="_blank">🐙 GitHub</a>` : ''}
        ${contact.data.website ? `<a href="${contact.data.website}" class="contact-item" target="_blank">🌐 Website</a>` : ''}
      </div>
      <div class="social-icons">
        ${contact.data.socials?.map(s => `<a href="${s.link}" class="social-icon" target="_blank">${s.icon || "🌐"}</a>`).join('') || ''}
      </div>
    </section>
  `;
  return html;
};

// SCRIPTS
function generateTimelineScripts() {
  return `
<script>
(function() {
  // Theme toggle
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  if(window.matchMedia('(prefers-color-scheme: light)').matches) body.classList.add('light-mode');
  toggle?.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    localStorage.setItem('portfolio-theme', body.classList.contains('light-mode') ? 'light' : 'dark');
  });
  if(localStorage.getItem('portfolio-theme')) {
    if(localStorage.getItem('portfolio-theme') === 'light') body.classList.add('light-mode');
    else body.classList.remove('light-mode');
  }
  // Section fade-in on scroll
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: .15 }
  );
  document.querySelectorAll('.portfolio-container > .section').forEach(section => observer.observe(section));
  // Parallax background
  document.addEventListener('mousemove', function(e){
    const bg = document.querySelector('.creative-bg');
    if(bg) {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      bg.style.backgroundPosition = \`\${60 + x}% \${30 + y}%, \${30 - x}% \${60 - y}%\`;
    }
  });
  // Skill bar animation
  function animateSkillBars() {
    document.querySelectorAll('.skillbar-progress').forEach(bar => {
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = (bar.dataset.skill || 90) + "%";
      }, 400);
    });
  }
  animateSkillBars();
  // Project filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.projects-masonry .project-card');
  filterBtns.forEach(btn => btn.addEventListener('click', function(){
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.category;
    cards.forEach(card => {
      if(cat === "all" || (card.dataset.categories||"").split(",").map(c=>c.trim()).includes(cat)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }));
  // Project Modal
  const modal = document.getElementById('modal-overlay');
  const projects = Array.from(document.querySelectorAll('.project-card'));
  const allProjects = projects.map(p => ({
    title: p.querySelector('.project-title')?.textContent,
    img: p.querySelector('.project-img')?.src,
    desc: p.querySelector('.project-description')?.textContent,
    tech: Array.from(p.querySelectorAll('.tech-tag')).map(t=>t.textContent)
  }));
  document.querySelectorAll('.open-project-modal').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const idx = +link.dataset.index;
      const p = allProjects[idx];
      modal.innerHTML = \`
        <div class="modal-content">
          <button class="modal-close" aria-label="Close" tabindex="0">&times;</button>
          \${p.img ? '<img src="' + p.img + '" style="width:100%;border-radius:11px;margin-bottom:1.3rem">' : ''}
          <h2 style="font-size:1.35rem;color:var(--primary);margin-bottom:1.1rem">\${p.title}</h2>
          <div style="color:var(--white);opacity:.82">\${p.desc||''}</div>
          <div style="margin-top:1.2rem;display:flex;gap:0.6rem;flex-wrap:wrap;">
            \${p.tech.map(t=>'<span class="tech-tag">'+t+'</span>').join('')}
          </div>
        </div>
      \`;
      modal.classList.add('active');
      setTimeout(()=>modal.querySelector('.modal-close').focus(), 300);
      modal.querySelector('.modal-close').onclick = () => modal.classList.remove('active');
      modal.onclick = (e) => { if(e.target === modal) modal.classList.remove('active'); };
      modal.querySelector('.modal-content').onkeydown = (e) => {
        if(e.key === "Escape") modal.classList.remove('active');
      };
    });
  });
  // Nav highlight on scroll
  const navLinks = document.querySelectorAll('.timeline-nav a');
  window.addEventListener('scroll', function() {
    let fromTop = window.scrollY+120;
    navLinks.forEach(link => {
      const section = document.getElementById(link.getAttribute('href').slice(1));
      if(section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active');
      } else link.classList.remove('active');
    });
  });
  // Page transitions (fade on nav)
  document.querySelectorAll('.timeline-nav a').forEach(link => {
    link.addEventListener('click', function(e){
      const href = link.getAttribute('href');
      if(href && href.startsWith("#")) {
        e.preventDefault();
        document.body.style.transition = "opacity 0.5s";
        document.body.style.opacity = 0.1;
        setTimeout(() => {
          window.location.hash = href;
          document.body.style.opacity = 1;
        }, 350);
      }
    });
  });
  // Social icon micro-interactions
  document.querySelectorAll('.social-icon').forEach(el => {
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