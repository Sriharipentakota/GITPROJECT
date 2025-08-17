// Creative, Animated, Glassy Designer Portfolio Template

export const generateDesignerHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateDesignerCSS(theme);
  const html = generateDesignerHTML(sections, theme);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="description" content="Creative, animated, glassy designer portfolio with interactive and unique features.">
  <style>${css}</style>
</head>
<body>
  <nav class="designer-nav">
    <div class="designer-nav-inner">
      <span class="designer-logo">${theme.logo ? `<img src="${theme.logo}" alt="Logo" />` : "🎨"}</span>
      <div class="designer-links">
        <a href="#home" class="designer-nav-link" title="Home"><span>🏠</span></a>
        <a href="#about" class="designer-nav-link" title="About"><span>👤</span></a>
        <a href="#projects" class="designer-nav-link" title="Projects"><span>🖼️</span></a>
        <a href="#skills" class="designer-nav-link" title="Skills"><span>✨</span></a>
        <a href="#testimonials" class="designer-nav-link" title="Testimonials"><span>💬</span></a>
        <a href="#contact" class="designer-nav-link" title="Contact"><span>✉️</span></a>
        <button id="theme-toggle" title="Toggle Theme" class="designer-nav-link" aria-label="Theme">🌗</button>
      </div>
    </div>
  </nav>
  <div class="designer-bg-deco"></div>
  <main class="portfolio-container designer-scroll">
    ${html}
  </main>
  <div id="modal-overlay" class="designer-modal-overlay"></div>
  ${generateDesignerScripts()}
</body>
</html>`;
};

export const generateDesignerCSS = (theme) => `
  :root {
    --primary: ${theme.primary || "#ff6b6b"};
    --accent: ${theme.accent || "#4ecdc4"};
    --glass: rgba(255,255,255,0.62);
    --glass-dark: rgba(28,28,38,0.55);
    --shadow: 0 8px 32px 0 rgba(255,107,107,0.11), 0 2px 12px #4ecdc433;
  }
  body {
    font-family: 'Poppins', 'Arial', sans-serif;
    background: linear-gradient(120deg, #ff9a9e 0%, #fecfef 60%, #f6d365 100%);
    color: #2c2c2c;
    min-height: 100vh;
    margin: 0;
    scroll-behavior: smooth;
    transition: background 0.5s, color 0.5s;
    overflow-x: hidden;
  }
  body.dark-mode {
    background: linear-gradient(115deg, #0e1218 70%, #23263a 100%);
    color: #f7fafc;
  }
  .designer-bg-deco {
    position: fixed; z-index: -1; top: 0; left: 0; width: 100vw; height: 100vh;
    background: 
      radial-gradient(circle at 30% 60%, var(--primary) 0%, transparent 65%),
      radial-gradient(circle at 80% 20%, var(--accent) 0%, transparent 50%),
      linear-gradient(135deg, #fff6 0%, #fff0 80%);
    opacity: 0.16;
    animation: bgfloat 30s linear infinite alternate;
    pointer-events: none;
  }
  @keyframes bgfloat {
    0% {background-position: 30% 60%, 80% 20%, 0 0;}
    100% {background-position: 50% 80%, 20% 70%, 100% 100%;}
  }
  .designer-nav {
    position: sticky; top: 0; z-index: 100;
    background: var(--glass);
    box-shadow: 0 2px 18px #f6d36533;
    padding: 0.7rem 1vw 0.7rem 1vw;
    margin-bottom: 1.1rem;
    animation: fadeInDown 0.95s cubic-bezier(.5,.01,.5,1.2);
    backdrop-filter: blur(16px);
  }
  @keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-38px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  .designer-nav-inner {
    max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;
  }
  .designer-logo img { width: 38px; height: 38px; border-radius: 50%; box-shadow: 0 1px 8px var(--primary)33; background: #fff; }
  .designer-links { display: flex; align-items: center; gap: 1.4rem; }
  .designer-nav-link {
    color: var(--primary); background: none; border: none; font-size: 1.32rem; text-align: center;
    border-radius: 10px; transition: background 0.17s, color 0.18s; cursor: pointer; outline: none;
    padding: 0.24rem 0.7rem;
    font-family: inherit;
  }
  .designer-nav-link:focus-visible, .designer-nav-link:hover { color: var(--accent); background: #fff3; }
  #theme-toggle { font-size: 1.19rem; }
  .portfolio-container {
    max-width: 1200px; margin: 0 auto; padding: 3.1rem 1.1rem 2.5rem 1.1rem;
    display: flex; flex-direction: column; gap: 60px;
    scroll-snap-type: y proximity; position: relative; z-index: 1;
  }
  .section {
    margin-bottom: 4rem;
    background: var(--glass);
    padding: 3rem 2.2rem;
    border-radius: 30px;
    box-shadow: var(--shadow);
    backdrop-filter: blur(18px);
    position: relative;
    animation: glassup 1.2s cubic-bezier(.44,1.2,.35,1.04) both;
  }
  @keyframes glassup {
    0% { opacity: 0; transform: translateY(60px) scale(.95);}
    100% { opacity: 1; transform: translateY(0) scale(1);}
  }
  .section-title {
    font-size: 2.8rem; color: var(--primary); margin-bottom: 2rem; text-align: center; font-weight: 400;
    letter-spacing: 0.7px; animation: floatTitle 1.7s cubic-bezier(.35,1.3,.45,1.1) both;
  }
  @keyframes floatTitle {
    0% { opacity: 0; transform: translateY(60px) scale(.85);}
    100% { opacity: 1; transform: translateY(0) scale(1);}
  }
  /* HOME/ABOUT - Centered w/ Animated BG + Avatar */
  .designer-hero {
    min-height: 65vh;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; gap: 1.5rem;
    position: relative;
  }
  .designer-avatar {
    width: 150px; height: 150px; border-radius: 50%; object-fit: cover;
    box-shadow: 0 10px 50px var(--primary)33, 0 2px 30px #fff8;
    border: 6px solid var(--glass);
    background: #fff;
    filter: drop-shadow(0 4px 16px #4ecdc4aa);
    margin-bottom: 1.1rem;
    animation: avatarfloat 2.8s ease-in-out infinite alternate;
  }
  @keyframes avatarfloat {
    0%   { transform: translateY(0) scale(1);}
    50%  { transform: translateY(-22px) scale(1.03);}
    100% { transform: translateY(0) scale(1);}
  }
  .designer-name {
    font-size: clamp(2.2rem, 6vw, 3.7rem); font-weight: 800;
    background: linear-gradient(92deg, var(--primary), var(--accent) 70%);
    background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    letter-spacing: 1px; text-shadow: 0 0 22px var(--accent)22;
    margin-bottom: 0.2em;
    animation: namepop 2s cubic-bezier(.38,1.2,.35,1.04) both;
  }
  @keyframes namepop {
    0% { opacity: 0; transform: scale(.85);}
    40% { opacity: .8; transform: scale(1.11);}
    100% { opacity: 1; transform: scale(1);}
  }
  .designer-title {
    font-size: clamp(1.21rem, 2.7vw, 2rem); color: var(--accent); font-weight: 600; margin-bottom: 1.2em; letter-spacing: 0.7px;
    animation: titlepop 2s cubic-bezier(.38,1.2,.35,1.04) 0.15s both;
  }
  @keyframes titlepop {
    0% { opacity: 0; transform: translateY(30px) scale(.9);}
    80% { opacity: 0.85; transform: scale(1.06);}
    100% { opacity: 1; transform: translateY(0) scale(1);}
  }
  .designer-bio {
    font-size: 1.2rem; color: #333; max-width: 600px; margin: 0 auto 1.9rem auto; line-height: 1.8; opacity: 0.93;
    animation: floatText 2s cubic-bezier(.38,1.2,.35,1.04) 0.25s both;
  }
  @keyframes floatText {
    0% { opacity: 0; transform: translateY(30px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  /* PROJECTS - Animated Cards Grid */
  .design-grid { 
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;
    animation: fadeInSection 0.9s cubic-bezier(.41,1.2,.4,1) 0.15s both;
  }
  .design-card {
    background: var(--glass);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: transform 0.5s cubic-bezier(.17,1.6,.33,1.1), box-shadow 0.2s;
    position: relative;
    outline: none;
    animation: cardpop 1.3s cubic-bezier(.44,1.25,.41,1.08) both;
  }
  @keyframes cardpop {
    0% { opacity: 0; transform: scale(.92) translateY(40px);}
    70% { opacity: 0.7; }
    100% { opacity: 1; transform: scale(1) translateY(0);}
  }
  .design-card:hover, .design-card:focus-visible {
    transform: scale(1.06) rotate(-1deg);
    box-shadow: 0 18px 38px var(--primary)44;
    z-index: 2;
  }
  .color-accent {
    background: linear-gradient(45deg, var(--primary), var(--accent));
    height: 5px;
    width: 100%;
    animation: accentmove 2.5s linear infinite alternate;
  }
  @keyframes accentmove {
    0% { background-position: 0 0;}
    100% { background-position: 100% 0;}
  }
  /* SKILLS - Animated progress bars + icons */
  .designer-skills-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 2.2rem;
    margin-top: 1.7rem;
    animation: fadeInSection 1s cubic-bezier(.65,1.1,.37,1.04) both;
  }
  .designer-skill-card {
    background: var(--glass);
    border-radius: 13px;
    box-shadow: 0 2px 12px var(--accent)22;
    padding: 1.3rem 1.2rem;
    display: flex; flex-direction: column; align-items: center;
    animation: glassup 1.2s cubic-bezier(.44,1.2,.35,1.04) both;
    outline: none;
    transition: box-shadow 0.19s, transform 0.19s;
    cursor: pointer;
  }
  .designer-skill-card:hover, .designer-skill-card:focus-visible {
    box-shadow: 0 8px 24px var(--accent)33;
    transform: scale(1.06) rotate(1deg);
  }
  .designer-skill-icon {
    font-size: 2.7rem; margin-bottom: 0.8rem; color: var(--primary); filter: drop-shadow(0 2px 4px var(--accent)33);
    animation: iconfade 2.5s cubic-bezier(.6,1.1,.37,1.03) both;
  }
  @keyframes iconfade {
    0% { opacity: 0; transform: scale(.7);}
    50% { opacity: 0.7; }
    100% { opacity: 1; transform: scale(1);}
  }
  .designer-skill-title { font-size: 1.14rem; color: var(--accent); font-weight: 700; margin-bottom: 0.7rem;}
  .designer-skill-bar-bg {
    width: 100%; height: 11px; background: #f7fafc; border-radius: 8px; margin-bottom: 0.6rem; position: relative;
    overflow: hidden;
    box-shadow: 0 1px 4px #ff6b6b33;
  }
  .designer-skill-bar {
    height: 100%;
    width: 0;
    background: linear-gradient(90deg, var(--primary), var(--accent) 90%);
    border-radius: 8px;
    box-shadow: 0 0 16px var(--accent)33;
    position: absolute; left: 0; top: 0;
    transition: width 1.4s cubic-bezier(.6,.01,.4,1);
  }
  .designer-skill-bar-val { position: absolute; right: 7px; top: -19px; font-size: .95em; color: var(--accent);}
  /* Testimonials - Animated Quotation Cards */
  .designer-testimonials-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.2rem; margin-top: 1.6rem;
  }
  .designer-testimonial-card {
    background: var(--glass);
    border-radius: 17px;
    box-shadow: 0 1.5px 8px var(--accent)33;
    padding: 1.6rem 1.2rem 1.3rem 1.2rem;
    position: relative;
    animation: glassup 1.1s cubic-bezier(.44,1.2,.35,1.04) both;
    min-width: 0;
    transition: box-shadow 0.19s, transform 0.13s;
  }
  .designer-testimonial-card:hover, .designer-testimonial-card:focus-visible {
    box-shadow: 0 8px 24px var(--primary)33;
    transform: scale(1.03) rotate(-1deg);
    z-index: 2;
  }
  .designer-testimonial-quote {
    font-size: 1.18rem; color: var(--primary); font-style: italic; margin-bottom: 1.2rem;
    animation: floatText 1.2s cubic-bezier(.38,1.2,.35,1.04) both;
  }
  .designer-testimonial-source {
    color: var(--accent); font-weight: 700; font-size: 1rem;
    display: block; margin-top: 0.8rem;
  }
  /* Contact - Animated form + icons */
  .designer-contact-section { background: var(--glass); border-radius: 20px; box-shadow: var(--shadow); padding: 2.3rem 1.8rem; text-align: center;}
  .designer-contact-title { font-size: 1.7rem; color: var(--primary); margin-bottom: 1.3rem; text-align: center;}
  .designer-contact-form { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; margin: 0 auto 1.5rem auto; align-items: stretch;}
  .designer-contact-form input, .designer-contact-form textarea {
    background: var(--glass); padding: 1.1rem 1.2rem; border: 1.5px solid var(--accent); border-radius: 9px;
    font-size: 1rem; color: var(--primary); margin-bottom: 0.1rem; font-family: inherit; outline: none; box-shadow: 0 1px 3px #fecfef;
    transition: border-color 0.17s, box-shadow 0.15s, background 0.15s;
  }
  .designer-contact-form input:focus, .designer-contact-form textarea:focus {
    border-color: var(--primary); box-shadow: 0 2px 8px var(--primary)33; background: #fff;
  }
  .designer-contact-form button {
    background: var(--primary); color: #fff; font-weight: 700; border: none; border-radius: 12px;
    padding: 0.9rem 1.7rem; cursor: pointer; margin-top: 0.32rem; font-size: 1.07rem;
    box-shadow: 0 2px 7px var(--accent)22; transition: background 0.13s, box-shadow 0.12s, transform 0.14s;
    font-family: inherit;
  }
  .designer-contact-form button:focus-visible, .designer-contact-form button:hover {
    background: var(--accent); color: #fff; box-shadow: 0 4px 13px var(--primary)22; transform: scale(1.03) translateY(-1px);
    outline: 2px solid var(--primary);
  }
  .designer-contact-grid { display: flex; justify-content: center; gap: 1rem; margin-top: 1.1rem; flex-wrap: wrap;}
  .designer-contact-item { display: flex; align-items: center; gap: 0.7rem; background: var(--glass); border-radius: 11px; padding: 0.8rem 1.3rem;
    color: var(--primary); font-size: 1.01rem; text-decoration: none; border: 1.3px solid var(--accent);
    box-shadow: 0 1.5px 8px #fecfef44; transition: border 0.13s, box-shadow 0.13s, background 0.13s; outline: none;}
  .designer-contact-item:focus-visible, .designer-contact-item:hover {
    background: var(--accent); color: #fff; border-color: var(--primary); outline: 2px solid var(--primary);
    box-shadow: 0 4px 15px var(--primary)22; transform: scale(1.045);
  }
  .designer-social-icons { display: flex; gap: 1.2rem; justify-content: center; margin-top: 0.9rem;}
  .designer-social-icon {
    color: var(--accent); font-size: 2rem; background: var(--glass); border-radius: 50%;
    width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; transition: background 0.15s, color 0.18s, box-shadow 0.15s;
    box-shadow: 0 1.5px 8px #f6d36544; cursor: pointer; outline: none;
  }
  .designer-social-icon:focus-visible, .designer-social-icon:hover { background: var(--primary); color: #fff; box-shadow: 0 6px 18px var(--accent)44; }
  /* Responsive */
  @media (max-width: 900px) {
    .portfolio-container { max-width: 99vw;}
    .designer-nav-inner { max-width: 99vw;}
    .portfolio-container > .section { max-width: 99vw; }
    .design-grid, .designer-skills-grid, .designer-testimonials-grid { gap: 1.1rem;}
  }
  @media (max-width: 650px) {
    .portfolio-container { padding: 0 0.2rem 1.2rem 0.2rem;}
    .designer-hero, .designer-contact-section { padding: 1.1rem 0.2rem;}
    .portfolio-container > .section { border-radius: 13px;}
    .design-grid, .designer-skills-grid, .designer-testimonials-grid { gap: 0.6rem;}
    .designer-contact-section { padding: 0.7rem 0;}
    .designer-social-icons { gap: 0.7rem;}
  }
`;

const ensureDesignerSections = (sections) => {
  const types = sections.map(s => s.type);
  const defaults = [
    {type: 'about', title: 'About Me', isVisible: true, data: {name: '', title: '', bio: '', avatar: '', socials: []}},
    {type: 'projects', title: 'Projects', isVisible: true, data: []},
    {type: 'skills', title: 'Skills', isVisible: true, data: []},
    {type: 'testimonials', title: 'Testimonials', isVisible: true, data: []},
    {type: 'contact', title: 'Contact', isVisible: true, data: {}},
  ];
  const result = [...sections];
  for (const def of defaults) {
    if (!types.includes(def.type)) result.push(def);
  }
  return result;
};

const generateDesignerHTML = (sections, theme) => {
  const sec = ensureDesignerSections(sections);
  let html = '';
  // About/Hero
  const about = sec.find(s => s.type === 'about') || {};
  html += `
    <section class="section designer-hero" id="about">
      ${about.data?.avatar ? `<img src="${about.data.avatar}" class="designer-avatar" alt="Profile" />` : ''}
      <div class="designer-name">${about.data?.name || ''}</div>
      <div class="designer-title">${about.data?.title || ''}</div>
      <div class="designer-bio">${about.data?.bio || ''}</div>
      <div class="designer-social-icons">
        ${(about.data?.socials || []).map(s => `<a href="${s.link}" class="designer-social-icon" target="_blank">${s.icon || "🌐"}</a>`).join('')}
      </div>
    </section>
  `;
  // Projects
  const projects = sec.find(s => s.type === 'projects') || {};
  html += `
    <section class="section" id="projects">
      <h2 class="section-title">${projects.title || "Projects"}</h2>
      <div class="design-grid">
        ${(projects.data || []).map((project, i) => `
          <div class="design-card" tabindex="0" data-index="${i}">
            <div class="color-accent"></div>
            <div style="padding: 2rem;">
              <h3 style="color: var(--primary); margin-bottom: 1rem;">${project.title || ''}</h3>
              <p style="color: #666; margin-bottom: 1rem;">${project.description || ''}</p>
              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
                ${(project.technologies || []).map(t => `<span class="designer-skill-bar-val">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  // Skills
  const skills = sec.find(s => s.type === 'skills') || {};
  html += `
    <section class="section" id="skills">
      <h2 class="section-title">${skills.title || "Skills"}</h2>
      <div class="designer-skills-grid">
        ${(skills.data || []).map(skill => `
          <div class="designer-skill-card" tabindex="0">
            <div class="designer-skill-icon">${skill.icon || "✨"}</div>
            <div class="designer-skill-title">${typeof skill === "string" ? skill : skill.title}</div>
            <div class="designer-skill-bar-bg">
              <div class="designer-skill-bar" style="width:0;" data-skill="${typeof skill === "string" ? 100 : skill.level || 90}"></div>
              <span class="designer-skill-bar-val">${typeof skill === "string" ? "100%" : (skill.level + "%")}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  // Testimonials
  const testimonials = sec.find(s => s.type === 'testimonials') || {};
  html += `
    <section class="section" id="testimonials">
      <h2 class="section-title">${testimonials.title || "Testimonials"}</h2>
      <div class="designer-testimonials-grid">
        ${(testimonials.data || []).map(t =>
          `<div class="designer-testimonial-card" tabindex="0">
            <div class="designer-testimonial-quote">"${t.quote || ''}"</div>
            <span class="designer-testimonial-source">- ${t.source || ''}</span>
          </div>`
        ).join('')}
      </div>
    </section>
  `;
  // Contact
  const contact = sec.find(s => s.type === 'contact') || {data: {}};
  html += `
    <section class="section designer-contact-section" id="contact">
      <div class="designer-contact-title">${contact.title || "Contact"}</div>
      <form class="designer-contact-form" method="POST" action="${contact.data.formAction || '#'}">
        <input type="text" name="name" placeholder="Your Name" required autocomplete="off">
        <input type="email" name="email" placeholder="Your Email" required autocomplete="off">
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div class="designer-contact-grid">
        ${contact.data.email ? `<a href="mailto:${contact.data.email}" class="designer-contact-item">📧 ${contact.data.email}</a>` : ''}
        ${contact.data.phone ? `<a href="tel:${contact.data.phone}" class="designer-contact-item">📞 ${contact.data.phone}</a>` : ''}
        ${contact.data.linkedin ? `<a href="${contact.data.linkedin}" class="designer-contact-item" target="_blank">💼 LinkedIn</a>` : ''}
        ${contact.data.github ? `<a href="${contact.data.github}" class="designer-contact-item" target="_blank">🐙 GitHub</a>` : ''}
        ${contact.data.website ? `<a href="${contact.data.website}" class="designer-contact-item" target="_blank">🌐 Website</a>` : ''}
      </div>
      <div class="designer-social-icons">
        ${contact.data.socials?.map(s => `<a href="${s.link}" class="designer-social-icon" target="_blank">${s.icon || "🌐"}</a>`).join('') || ''}
      </div>
    </section>
  `;
  return html;
};

// Animate skill bars and theme toggle
function generateDesignerScripts() {
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
  // Animate skill bars
  setTimeout(() => {
    document.querySelectorAll('.designer-skill-bar').forEach(bar => {
      bar.style.width = bar.getAttribute('data-skill') + "%";
    });
  }, 500);
})();
</script>
  `;
}