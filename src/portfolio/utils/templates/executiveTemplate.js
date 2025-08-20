// Executive Portfolio Template - Unique Two-Row Split Layout, Creative & Modern

export const generateExecutiveHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateExecutiveCSS(theme);
  const html = generateExecutiveHTML(sections, theme);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="description" content="Executive creative portfolio: two-row layout, summary, achievements, interactive cards, and more.">
  <style>${css}</style>
</head>
<body>
  <nav class="exec-nav">
    <div class="exec-nav-inner">
      <span class="exec-logo">${theme.logo ? `<img src="${theme.logo}" alt="Logo" />` : "🚀"}</span>
      <div class="exec-links">
        <a href="#about" class="exec-nav-link" title="About"><span>👤</span></a>
        <a href="#achievements" class="exec-nav-link" title="Achievements"><span>🏆</span></a>
        <a href="#projects" class="exec-nav-link" title="Projects"><span>💼</span></a>
        <a href="#contact" class="exec-nav-link" title="Contact"><span>✉️</span></a>
        <button id="theme-toggle" title="Toggle Theme" class="exec-nav-link" aria-label="Theme">🌗</button>
      </div>
    </div>
  </nav>
  <div class="exec-bg-parallax"></div>
  <main class="exec-main">
    ${html}
  </main>
  <div id="modal-overlay" class="exec-modal-overlay"></div>
  ${generateExecutiveScripts()}
</body>
</html>`;
};

export const generateExecutiveCSS = (theme) => `
  :root {
    --primary: ${theme.primary || "#007bff"};
    --accent: ${theme.accent || "#ff8c42"};
    --bg1: #f4f9fb;
    --bg2: #dee8f5;
    --dark: #1c2233;
    --surface: #fff;
    --shadow: 0 6px 28px 0 rgba(0,123,255,0.13), 0 1.5px 10px #e3eaf2;
  }
  body {
    font-family: 'Inter', 'Times New Roman', serif;
    background: linear-gradient(120deg, var(--bg1) 60%, var(--bg2) 100%);
    color: var(--dark);
    margin: 0;
    min-height: 100vh;
    scroll-behavior: smooth;
    transition: background 0.3s, color 0.3s;
  }
  body.dark-mode {
    --bg1: #15192b;
    --bg2: #202537;
    --surface: #23263a;
    --dark: #f4f7fa;
    background: linear-gradient(120deg, var(--bg1) 60%, var(--bg2) 100%);
    color: var(--dark);
  }

  .exec-bg-parallax {
    position: fixed; z-index: -1; top: 0; left: 0; width: 100vw; height: 100vh;
    background: radial-gradient(circle at 25% 75%, var(--primary) 0%, transparent 60%),
      radial-gradient(circle at 70% 20%, var(--accent) 0%, transparent 60%);
    opacity: 0.095;
    animation: execbgmove 20s linear infinite alternate;
    pointer-events: none;
  }
  @keyframes execbgmove {
    0% {background-position: 25% 75%, 70% 20%;}
    100% {background-position: 45% 90%, 25% 70%;}
  }
  .exec-nav {
    position: sticky; top: 0; z-index: 100;
    background: var(--surface);
    box-shadow: 0 2px 18px #7bb6f633;
    padding: 0.7rem 1vw 0.7rem 1vw;
    margin-bottom: 1.1rem;
    animation: fadeInDown 0.95s cubic-bezier(.5,.01,.5,1.2);
    backdrop-filter: blur(11px);
  }
  @keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-38px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  .exec-nav-inner {
    max-width: 1120px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;
  }
  .exec-logo img { width: 34px; height: 34px; border-radius: 50%; box-shadow: 0 1px 6px var(--primary)33; background: #fff; }
  .exec-links { display: flex; align-items: center; gap: 1.2rem; }
  .exec-nav-link {
    color: var(--primary); background: none; border: none; font-size: 1.16rem; text-align: center;
    border-radius: 7px; transition: background 0.16s, color 0.15s; cursor: pointer; outline: none;
    padding: 0.22rem 0.5rem;
  }
  .exec-nav-link:focus-visible, .exec-nav-link:hover { color: var(--accent); background: #eaf6fb33; }
  #theme-toggle { font-size: 1.10rem; }
  /* Two-row split layout */
  .exec-main {
    max-width: 1120px; margin: 0 auto; display: flex; flex-direction: column; gap: 2.5rem;
    min-height: 90vh;
  }
  .exec-row {
    display: flex; flex-direction: row; gap: 2.5rem; width: 100%;
    min-height: 380px;
    margin-bottom: 2.8rem;
  }
  .exec-row .exec-col {
    flex: 1 1 0; min-width: 0; background: var(--surface); border-radius: 18px; box-shadow: var(--shadow); padding: 2.2rem 2rem; position: relative;
    display: flex; flex-direction: column; justify-content: center;
    animation: fadeInSection 1.1s cubic-bezier(.41,1.2,.4,1) both;
  }
  @keyframes fadeInSection {
    0% { opacity: 0; transform: translateY(40px) scale(.97);}
    100% { opacity: 1; transform: translateY(0) scale(1);}
  }
  .exec-avatar {
    width: 130px; height: 130px; border-radius: 50%; object-fit: cover;
    box-shadow: 0 8px 36px var(--primary)44;
    border: 6px solid var(--surface);
    margin: 0 auto 1.1rem auto; display: block;
    background: #fff;
    animation: profilepop 1.09s cubic-bezier(.62,1.8,.5,1.07) both;
  }
  @keyframes profilepop {
    0% { opacity: 0; transform: scale(.7);}
    60% { opacity: 0.7; transform: scale(1.06);}
    100% { opacity: 1; transform: scale(1);}
  }
  .exec-name {
    font-size: 2.3rem; font-weight: 900;
    background: linear-gradient(90deg, var(--primary), var(--accent) 80%);
    background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    letter-spacing: 1px; text-align: center;
    margin-bottom: 0.25em;
    animation: textpop 1.1s cubic-bezier(.38,1.2,.35,1.04) both;
  }
  .exec-title {
    font-size: 1.23rem; color: var(--accent); font-weight: 700; margin-bottom: 1.1em; letter-spacing: 0.5px; text-align: center;
    animation: textpop 1.01s cubic-bezier(.38,1.2,.35,1.04) 0.1s both;
  }
  @keyframes textpop {
    0% { opacity: 0; transform: scale(.84);}
    80% { opacity: 0.85; transform: scale(1.09);}
    100% { opacity: 1; transform: scale(1);}
  }
  .exec-summary {
    background: linear-gradient(120deg, var(--primary)13 20%, var(--accent)12 100%);
    padding: 1.3rem 1.3rem 1.3rem 1.3rem;
    border-radius: 13px;
    color: var(--dark);
    font-size: 1.07rem;
    font-weight: 500;
    margin-bottom: 1.1rem;
    box-shadow: 0 2px 12px var(--primary)11;
    border-left: 5px solid var(--primary);
  }
  .exec-row .exec-col.achievements-col {
    background: linear-gradient(115deg, var(--surface) 60%, var(--accent)11 100%);
    align-items: flex-start;
  }
  .exec-achievement-title {
    font-size: 1.22rem; font-weight: 700; color: var(--primary); margin-bottom: 1.1rem; letter-spacing: 0.5px;
  }
  .exec-achievement-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 1.3rem;
  }
  .achievement-item {
    background: var(--surface); border-radius: 11px; padding: 1.2rem 1.1rem;
    box-shadow: 0 2px 11px var(--accent)13;
    border-left: 4px solid var(--primary);
    transition: transform 0.18s, box-shadow 0.16s;
    animation: fadeInSection 1.1s cubic-bezier(.41,1.2,.4,1) both;
    cursor: pointer;
    outline: none;
    position: relative;
  }
  .achievement-item:focus-visible, .achievement-item:hover {
    background: var(--primary); color: #fff; box-shadow: 0 8px 24px var(--primary)24; transform: scale(1.045) translateY(-2px);
    outline: 2px solid var(--accent);
  }
  /* Projects & Contact (Second row) */
  .exec-section-title { font-size: 2rem; color: var(--primary); margin-bottom: 2rem; text-align: center; letter-spacing: 0.7px;}
  .exec-projects-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem;
  }
  .exec-project-card {
    background: var(--surface); border-radius: 15px; box-shadow: 0 2px 10px var(--primary)13;
    padding: 1.3rem 1.1rem 1.6rem 1.1rem; outline: none; cursor: pointer; position: relative;
    transition: box-shadow 0.22s, transform 0.22s;
    animation: fadeInSection 1.09s cubic-bezier(.41,1.2,.4,1) both;
    min-width: 0;
  }
  .exec-project-card:focus-visible, .exec-project-card:hover {
    box-shadow: 0 10px 28px var(--primary)44; transform: scale(1.04) translateY(-2px); z-index: 5;
    background: var(--accent); color: #fff;
  }
  .exec-project-title { font-size: 1.13rem; font-weight: 700; color: var(--primary); margin-bottom: 0.6rem;}
  .exec-project-desc { color: var(--dark); opacity: 0.88; margin-bottom: 0.5em; font-size: 1.03rem;}
  .exec-project-tech { display: flex; flex-wrap: wrap; gap: 0.3em; margin-bottom: 0.6em;}
  .exec-project-tech-tag { background: var(--primary); color: #fff; padding: 0.22em 0.8em; border-radius: 8px; font-size: 0.91em; font-weight: 600;}
  .exec-project-link { color: var(--accent); font-weight: 600; text-decoration: underline; font-size: 0.97rem;}
  .exec-project-link:focus-visible, .exec-project-link:hover { color: var(--primary);}
  /* Modal overlay for project details */
  .exec-modal-overlay {
    display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100vw; height: 100vh;
    background: rgba(30,35,54,0.95); align-items: center; justify-content: center; transition: opacity 0.30s;
  }
  .exec-modal-overlay.active { display: flex; animation: fadeInModal 0.3s cubic-bezier(.41,1.2,.4,1);}
  @keyframes fadeInModal {0%{opacity:0;}100%{opacity:1;}}
  .exec-modal-content {
    background: var(--surface); border-radius: 19px; padding: 2.2rem 2rem;
    box-shadow: 0 10px 32px var(--primary)33; position: relative; max-width: 540px; width: 98vw;
    animation: fadeInSection 0.7s cubic-bezier(.41,1.2,.4,1) both;
  }
  .exec-modal-close {
    position: absolute; top: 11px; right: 13px; background: var(--accent); color: #fff; border-radius: 50%;
    width: 38px; height: 38px; border: none; font-size: 1.4rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center; transition: background 0.19s, transform 0.16s; outline: none;
  }
  .exec-modal-close:focus-visible, .exec-modal-close:hover { background: var(--primary); transform: scale(1.1);}
  /* Contact */
  .exec-contact-col {
    background: var(--surface); border-radius: 18px; box-shadow: var(--shadow); padding: 2.2rem 2rem; position: relative;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    animation: fadeInSection 1.1s cubic-bezier(.41,1.2,.4,1) both;
    min-width: 0;
  }
  .exec-contact-title { font-size: 1.5rem; color: var(--primary); margin-bottom: 1.3rem; text-align: center;}
  .exec-contact-form { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; margin: 0 auto 1.5rem auto; align-items: stretch;}
  .exec-contact-form input, .exec-contact-form textarea {
    background: var(--bg1); padding: 1.1rem 1.2rem; border: 1.5px solid #e0e0e0; border-radius: 8px;
    font-size: 1rem; color: var(--dark); margin-bottom: 0.1rem; font-family: inherit; outline: none; box-shadow: 0 1px 3px #eaf6fb;
    transition: border-color 0.17s, box-shadow 0.15s;
  }
  .exec-contact-form input:focus, .exec-contact-form textarea:focus {
    border-color: var(--primary); box-shadow: 0 2px 8px var(--primary)33;
  }
  .exec-contact-form button {
    background: var(--primary); color: #fff; font-weight: 600; border: none; border-radius: 13px;
    padding: 0.9rem 1.7rem; cursor: pointer; margin-top: 0.32rem; font-size: 1.01rem;
    box-shadow: 0 2px 7px var(--primary)22; transition: background 0.13s, box-shadow 0.12s, transform 0.14s;
  }
  .exec-contact-form button:focus-visible, .exec-contact-form button:hover {
    background: var(--accent); box-shadow: 0 4px 13px var(--accent)22; transform: scale(1.03) translateY(-1px);
    outline: 2px solid var(--primary);
  }
  .exec-contact-grid { display: flex; justify-content: center; gap: 1.1rem; margin-top: 1.1rem; flex-wrap: wrap;}
  .exec-contact-item { display: flex; align-items: center; gap: 0.7rem; background: var(--bg1); border-radius: 8px; padding: 0.8rem 1.3rem;
    color: var(--primary); font-size: 1.01rem; text-decoration: none; border: 1.5px solid #e0e0e0;
    box-shadow: 0 1.5px 8px #eaf6fb18; transition: border 0.14s, box-shadow 0.13s, background 0.13s; outline: none;}
  .exec-contact-item:focus-visible, .exec-contact-item:hover {
    background: var(--primary); color: #fff; border-color: var(--accent); outline: 2px solid var(--accent);
    box-shadow: 0 4px 15px var(--primary)22; transform: scale(1.05);
  }
  /* Responsive */
  @media (max-width: 950px) {
    .exec-main { max-width: 99vw;}
    .exec-row { flex-direction: column; gap: 2rem; }
    .exec-row .exec-col, .exec-row .achievements-col, .exec-contact-col { border-radius: 13px;}
    .exec-projects-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 650px) {
    .exec-nav-inner, .exec-main { padding: 0;}
    .exec-row .exec-col, .exec-contact-col { padding: 1.2rem 0.7rem;}
    .exec-row { margin-bottom: 1.3rem;}
    .exec-projects-grid { gap: 0.7rem;}
  }
`;

const ensureExecutiveSections = (sections) => {
  const types = sections.map(s => s.type);
  const defaults = [
    { type: 'about', title: 'About Me', isVisible: true, data: { name: '', title: '', bio: '', avatar: '', summary: '' } },
    { type: 'achievements', title: 'Achievements', isVisible: true, data: [] },
    { type: 'projects', title: 'Projects', isVisible: true, data: [] },
    { type: 'contact', title: 'Contact', isVisible: true, data: {} },
  ];
  const result = [...sections];
  for (const def of defaults) {
    if (!types.includes(def.type)) result.push(def);
  }
  return result;
};

const generateExecutiveHTML = (sections, theme) => {
  const sec = ensureExecutiveSections(sections);
  const about = sec.find(s => s.type === 'about') || {};
  const achievements = sec.find(s => s.type === 'achievements') || {};
  const projects = sec.find(s => s.type === 'projects') || {};
  const contact = sec.find(s => s.type === 'contact') || {};
  // First row: About (left) + Achievements (right)
  let html = `
    <div class="exec-main">
      <div class="exec-row">
        <div class="exec-col">
          ${about.data?.avatar ? `<img src="${about.data.avatar}" class="exec-avatar" alt="Profile" />` : ''}
          <div class="exec-name">${about.data?.name || ''}</div>
          <div class="exec-title">${about.data?.title || ''}</div>
          <div class="exec-summary"><h3>Executive Summary</h3><p>${about.data?.bio || ''}</p></div>
        </div>
        <div class="exec-col achievements-col">
          <div class="exec-achievement-title">${achievements.title || 'Achievements'}</div>
          <div class="exec-achievement-grid">
            ${(achievements.data || []).map(a =>
    `<div class="achievement-item" tabindex="0">
                <div style="font-weight:700;color:var(--accent);margin-bottom:0.4rem;">${a.title || ''}</div>
                <div>${a.description || ''}</div>
              </div>`
  ).join('')}
          </div>
        </div>
      </div>
      <!-- Second row: Projects (left) + Contact (right) -->
      <div class="exec-row">
        <div class="exec-col">
          <div class="exec-section-title">${projects.title || 'Projects'}</div>
          <div class="exec-projects-grid">
            ${(projects.data || []).map((project, i) => `
              <div class="exec-project-card" tabindex="0" data-index="${i}">
                <div class="exec-project-title">${project.title || ''}</div>
                <div class="exec-project-desc">${project.description || ''}</div>
                <div class="exec-project-tech">${(project.technologies || []).map(tech => `<span class="exec-project-tech-tag">${tech}</span>`).join('')}</div>
                <a href="#" class="exec-project-link open-project-modal" data-index="${i}">View Details</a>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="exec-contact-col">
          <div class="exec-contact-title">${contact.title || "Contact"}</div>
          <form class="exec-contact-form" method="POST" action="${contact.data.formAction || '#'}">
            <input type="text" name="name" placeholder="Your Name" required autocomplete="off">
            <input type="email" name="email" placeholder="Your Email" required autocomplete="off">
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div class="exec-contact-grid">
            ${contact.data.email ? `<a href="mailto:${contact.data.email}" class="exec-contact-item">📧 ${contact.data.email}</a>` : ''}
            ${contact.data.phone ? `<a href="tel:${contact.data.phone}" class="exec-contact-item">📞 ${contact.data.phone}</a>` : ''}
            ${contact.data.linkedin ? `<a href="${contact.data.linkedin}" class="exec-contact-item" target="_blank">💼 LinkedIn</a>` : ''}
            ${contact.data.github ? `<a href="${contact.data.github}" class="exec-contact-item" target="_blank">🐙 GitHub</a>` : ''}
            ${contact.data.website ? `<a href="${contact.data.website}" class="exec-contact-item" target="_blank">🌐 Website</a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
  return html;
};

function generateExecutiveScripts() {
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
  // Parallax
  document.addEventListener('mousemove', function(e){
    const bg = document.querySelector('.exec-bg-parallax');
    if(bg) {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      bg.style.backgroundPosition = \`\${25 + x}% \${75 + y}%, \${70 - x}% \${20 - y}%\`;
    }
  });
  // Project Modal
  const modal = document.getElementById('modal-overlay');
  const projects = Array.from(document.querySelectorAll('.exec-project-card'));
  const allProjects = projects.map(p => ({
    title: p.querySelector('.exec-project-title')?.textContent,
    desc: p.querySelector('.exec-project-desc')?.textContent,
    tech: Array.from(p.querySelectorAll('.exec-project-tech-tag')).map(t=>t.textContent)
  }));
  document.querySelectorAll('.open-project-modal').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const idx = +link.dataset.index;
      const p = allProjects[idx];
      modal.innerHTML = \`
        <div class="exec-modal-content">
          <button class="exec-modal-close" aria-label="Close" tabindex="0">&times;</button>
          <h2 style="font-size:1.20rem;color:var(--primary);margin-bottom:1.1rem">\${p.title}</h2>
          <div style="color:var(--dark);opacity:.92">\${p.desc||''}</div>
          <div style="margin-top:1.2rem;display:flex;gap:0.6rem;flex-wrap:wrap;">
            \${p.tech.map(t=>'<span class="exec-project-tech-tag">'+t+'</span>').join('')}
          </div>
        </div>
      \`;
      modal.classList.add('active');
      setTimeout(()=>modal.querySelector('.exec-modal-close').focus(), 300);
      modal.querySelector('.exec-modal-close').onclick = () => modal.classList.remove('active');
      modal.onclick = (e) => { if(e.target === modal) modal.classList.remove('active'); };
      modal.querySelector('.exec-modal-content').onkeydown = (e) => {
        if(e.key === "Escape") modal.classList.remove('active');
      };
    });
  });
  // Nav highlight on scroll
  const navLinks = document.querySelectorAll('.exec-links a');
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