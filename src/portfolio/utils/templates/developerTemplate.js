// Creative Developer Portfolio Template - Coder Terminal/IDE Style

export const generateDeveloperHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateDeveloperCSS(theme);
  const html = generateDeveloperHTML(sections, theme);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="description" content="Developer creative portfolio: terminal/IDE, code cards, animated typing, and more.">
  <style>${css}</style>
</head>
<body>
  <nav class="dev-nav">
    <div class="dev-nav-inner">
      <span class="dev-logo">${theme.logo ? `<img src="${theme.logo}" alt="Logo" />` : "<span class='dev-cursor'>_</span>"}</span>
      <div class="dev-links">
        <a href="#about" class="dev-nav-link" title="About"><span>&lt;About/&gt;</span></a>
        <a href="#projects" class="dev-nav-link" title="Projects"><span>&lt;Projects/&gt;</span></a>
        <a href="#skills" class="dev-nav-link" title="Skills"><span>&lt;Skills/&gt;</span></a>
        <a href="#contact" class="dev-nav-link" title="Contact"><span>&lt;Contact/&gt;</span></a>
        <button id="theme-toggle" title="Toggle Theme" class="dev-nav-link" aria-label="Theme">🌗</button>
      </div>
    </div>
  </nav>
  <main class="portfolio-container dev-scroll">
    ${html}
  </main>
  <div id="modal-overlay" class="dev-modal-overlay"></div>
  ${generateDeveloperScripts()}
</body>
</html>`;
};

export const generateDeveloperCSS = (theme) => `
  :root {
    --primary: ${theme.primary || "#00ff00"};
    --accent: ${theme.accent || "#39c5bb"};
    --bg: #15171a;
    --bg2: #23242a;
    --panel: #111;
    --panel-border: #333;
    --terminal: #222;
    --code: #222;
    --text: #00ff00;
    --text2: #c3ffb3;
    --cursor: #fff;
  }
  body {
    font-family: 'Fira Mono', 'Consolas', 'Menlo', 'Courier New', monospace;
    background: linear-gradient(120deg, var(--bg) 65%, var(--bg2) 100%);
    color: var(--text);
    margin: 0;
    min-height: 100vh;
    scroll-behavior: smooth;
    transition: background 0.35s, color 0.35s;
    position: relative;
  }
  body.dark-mode {
    --primary: #00ff99;
    --accent: #00eaff;
    --bg: #101319;
    --bg2: #1a1f27;
    --panel: #181a20;
    --panel-border: #333;
    --terminal: #16241c;
    --code: #1e2127;
    --text: #c3ffb3;
    --text2: #fff;
    --cursor: #00ff99;
  }
  .dev-nav {
    position: sticky; top: 0; z-index: 100;
    background: var(--panel);
    box-shadow: 0 2px 18px #00ff0033;
    padding: 0.7rem 1vw 0.7rem 1vw;
    margin-bottom: 1.1rem;
    border-bottom: 2px solid var(--primary);
    animation: fadeInDown 0.8s cubic-bezier(.5,.01,.5,1.2);
    backdrop-filter: blur(8px);
  }
  @keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-32px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  .dev-nav-inner {
    max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;
  }
  .dev-logo img { width: 32px; height: 32px; border-radius: 6px; background: #fff; }
  .dev-cursor { color: var(--cursor); font-size: 2rem; animation: blink 1s steps(1) infinite;}
  @keyframes blink {0%, 49% {opacity:1;} 50%, 100%{opacity:0;}}
  .dev-links { display: flex; align-items: center; gap: 1.2rem; }
  .dev-nav-link {
    color: var(--primary); background: none; border: none; font-size: 1.05rem; text-align: center;
    border-radius: 7px; transition: background 0.16s, color 0.15s; cursor: pointer; outline: none;
    padding: 0.22rem 0.5rem;
    font-family: inherit;
  }
  .dev-nav-link:focus-visible, .dev-nav-link:hover { color: var(--accent); background: #00ff0012; }
  #theme-toggle { font-size: 1.10rem; }
  .portfolio-container {
    max-width: 1000px; margin: 0 auto; padding: 2rem 1vw 4rem 1vw; background: var(--panel); border: 2px solid var(--primary);
    border-radius: 16px; box-shadow: 0 8px 32px #00ff0022;
    display: flex; flex-direction: column; gap: 3.2rem;
    position: relative; z-index: 1;
    animation: fadeInSection 1.1s cubic-bezier(.41,1.2,.4,1) both;
  }
  @keyframes fadeInSection {
    0% { opacity: 0; transform: translateY(40px) scale(.97);}
    100% { opacity: 1; transform: translateY(0) scale(1);}
  }
  .section { margin-bottom: 3rem; padding: 1.7rem 1.3rem; border: 1.5px solid var(--panel-border); background: var(--terminal); border-radius: 12px; box-shadow: 0 1.5px 8px #00ff0033;}
  .section-title { font-size: 1.8rem; color: var(--primary); margin-bottom: 1.5rem; font-family: inherit; }
  .section-title::before { content: '> '; color: var(--accent);}
  .dev-hero {
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.7rem;
    text-align: center; min-height: 50vh;
  }
  .dev-avatar {
    width: 110px; height: 110px; border-radius: 50%; object-fit: cover; box-shadow: 0 8px 36px var(--primary)44;
    border: 4px solid var(--panel);
    background: #fff;
    margin-bottom: 1.2rem;
    animation: profilepop 1.09s cubic-bezier(.62,1.8,.5,1.07) both;
  }
  @keyframes profilepop {
    0% { opacity: 0; transform: scale(.7);}
    60% { opacity: 0.7; transform: scale(1.08);}
    100% { opacity: 1; transform: scale(1);}
  }
  .dev-name {
    font-size: clamp(2.1rem, 5vw, 3.1rem); font-weight: 800;
    background: linear-gradient(92deg, var(--primary), var(--accent) 70%);
    background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    letter-spacing: 1px; text-shadow: 0 0 18px var(--accent)11;
    margin-bottom: 0.2em;
    animation: typepop 1.5s cubic-bezier(.38,1.2,.35,1.04) both;
  }
  .dev-title {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem); color: var(--accent); font-weight: 600; margin-bottom: 1.1em; letter-spacing: 0.5px;
    animation: typepop 1.3s cubic-bezier(.38,1.2,.35,1.04) 0.1s both;
  }
  @keyframes typepop {
    0% { opacity: 0; transform: scale(.8);}
    80% { opacity: 0.85; transform: scale(1.09);}
    100% { opacity: 1; transform: scale(1);}
  }
  .dev-typed-bio {
    font-size: 1.07rem; color: var(--text2); max-width: 600px; margin: 0 auto 1.2rem auto; line-height: 1.7; opacity: 0.92;
    min-height: 2.5em; text-align: left; white-space: pre-wrap;
    font-family: inherit;
    border-left: 3px solid var(--primary);
    padding-left: 1em;
    background: #17191d;
    margin-bottom: 1.3rem;
    animation: fadeInSection 1.2s cubic-bezier(.41,1.2,.4,1) both;
  }
  .code-block {
    background: var(--code); padding: 1.2rem 1rem; border-left: 4px solid var(--primary); margin: 1.1rem 0 1.4rem 0;
    border-radius: 7px; font-size: 1.02rem; color: var(--text2);
    font-family: inherit;
    animation: fadeInSection 1.2s both;
    overflow-x: auto;
    position: relative;
  }
  .terminal-prompt::before { content: '$ '; color: var(--primary); font-weight: 700;}
  .dev-skills-grid {
    display: flex; flex-wrap: wrap; gap: 0.7rem; justify-content: flex-start; margin-bottom: 1.1rem;
    animation: fadeInSection 1.1s cubic-bezier(.55,1.2,.4,1) 0.25s both;
  }
  .dev-skill {
    background: var(--primary);
    color: #15171a;
    padding: 0.45rem 1.1rem;
    border-radius: 15px;
    font-size: 0.93rem;
    font-weight: 700;
    box-shadow: 0 1px 4px var(--primary)33;
    cursor: pointer;
    position: relative;
    transition: transform 0.15s, box-shadow 0.13s, background 0.16s;
    outline: none;
    letter-spacing: 0.5px;
  }
  .dev-skill:focus-visible, .dev-skill:hover {
    background: var(--accent);
    color: #fff;
    transform: scale(1.08) rotate(-1deg);
    box-shadow: 0 4px 14px var(--primary)33;
    outline: 2px solid var(--primary);
  }
  .dev-projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.3rem;
  }
  .dev-project-card {
    background: var(--panel); border-radius: 13px; box-shadow: 0 2px 11px var(--primary)13;
    padding: 1.13rem 1.1rem 1.1rem 1.2rem; outline: none; cursor: pointer; position: relative;
    transition: box-shadow 0.22s, transform 0.22s;
    font-family: inherit;
    animation: fadeInSection 1.09s cubic-bezier(.41,1.2,.4,1) both;
    min-width: 0;
  }
  .dev-project-card:focus-visible, .dev-project-card:hover {
    box-shadow: 0 10px 28px var(--primary)44; transform: scale(1.04) translateY(-2px); z-index: 5;
    background: var(--accent); color: #fff;
  }
  .dev-project-title { font-size: 1.13rem; font-weight: 700; color: var(--primary); margin-bottom: 0.6rem;}
  .dev-project-desc { color: var(--text2); opacity: 0.92; margin-bottom: 0.5em; font-size: 0.99rem;}
  .dev-project-tech { display: flex; flex-wrap: wrap; gap: 0.3em; margin-bottom: 0.6em;}
  .dev-project-tech-tag { background: var(--primary); color: #15171a; padding: 0.22em 0.8em; border-radius: 8px; font-size: 0.91em; font-weight: 600;}
  .dev-project-link { color: var(--accent); font-weight: 600; text-decoration: underline; font-size: 0.97rem;}
  .dev-project-link:focus-visible, .dev-project-link:hover { color: var(--primary);}
  /* Modal overlay for project details */
  .dev-modal-overlay {
    display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100vw; height: 100vh;
    background: rgba(30,35,54,0.92); align-items: center; justify-content: center; transition: opacity 0.30s;
  }
  .dev-modal-overlay.active { display: flex; animation: fadeInModal 0.3s cubic-bezier(.41,1.2,.4,1);}
  @keyframes fadeInModal {0%{opacity:0;}100%{opacity:1;}}
  .dev-modal-content {
    background: var(--panel); border-radius: 17px; padding: 2.2rem 2rem;
    box-shadow: 0 10px 32px var(--primary)33; position: relative; max-width: 540px; width: 98vw;
    animation: fadeInSection 0.7s cubic-bezier(.41,1.2,.4,1) both;
    font-family: inherit;
  }
  .dev-modal-close {
    position: absolute; top: 11px; right: 13px; background: var(--accent); color: #fff; border-radius: 50%;
    width: 38px; height: 38px; border: none; font-size: 1.4rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center; transition: background 0.19s, transform 0.16s; outline: none;
  }
  .dev-modal-close:focus-visible, .dev-modal-close:hover { background: var(--primary); transform: scale(1.1);}
  /* Contact */
  .dev-contact-section { background: var(--panel); border-radius: 13px; box-shadow: var(--shadow); padding: 2.2rem 2rem; text-align: center;}
  .dev-contact-title { font-size: 1.4rem; color: var(--primary); margin-bottom: 1.3rem; text-align: center;}
  .dev-contact-form { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; margin: 0 auto 1.5rem auto; align-items: stretch;}
  .dev-contact-form input, .dev-contact-form textarea {
    background: var(--code); padding: 1.1rem 1.2rem; border: 1.5px solid #333; border-radius: 7px;
    font-size: 1rem; color: var(--primary); margin-bottom: 0.1rem; font-family: inherit; outline: none; box-shadow: 0 1px 3px #23263a;
    transition: border-color 0.17s, box-shadow 0.15s;
  }
  .dev-contact-form input:focus, .dev-contact-form textarea:focus {
    border-color: var(--accent); box-shadow: 0 2px 8px var(--primary)33;
  }
  .dev-contact-form button {
    background: var(--primary); color: #15171a; font-weight: 700; border: none; border-radius: 9px;
    padding: 0.9rem 1.7rem; cursor: pointer; margin-top: 0.32rem; font-size: 1.01rem;
    box-shadow: 0 2px 7px var(--primary)22; transition: background 0.13s, box-shadow 0.12s, transform 0.14s;
    font-family: inherit;
  }
  .dev-contact-form button:focus-visible, .dev-contact-form button:hover {
    background: var(--accent); color: #fff; box-shadow: 0 4px 13px var(--accent)22; transform: scale(1.03) translateY(-1px);
    outline: 2px solid var(--primary);
  }
  .dev-contact-grid { display: flex; justify-content: center; gap: 1rem; margin-top: 1.1rem; flex-wrap: wrap;}
  .dev-contact-item { display: flex; align-items: center; gap: 0.7rem; background: var(--code); border-radius: 8px; padding: 0.7rem 1.1rem;
    color: var(--primary); font-size: 1.01rem; text-decoration: none; border: 1.2px solid #333;
    box-shadow: 0 1.5px 8px #00ff0044; transition: border 0.13s, box-shadow 0.13s, background 0.13s; outline: none;}
  .dev-contact-item:focus-visible, .dev-contact-item:hover {
    background: var(--primary); color: #15171a; border-color: var(--accent); outline: 2px solid var(--accent);
    box-shadow: 0 4px 15px var(--primary)22; transform: scale(1.045);
  }
  .dev-social-icons { display: flex; gap: 1.1rem; justify-content: center; margin-top: 1rem;}
  .dev-social-icon {
    color: var(--accent); font-size: 1.5rem; background: var(--code); border-radius: 50%;
    width: 37px; height: 37px; display: flex; align-items: center; justify-content: center; transition: background 0.12s, color 0.16s, box-shadow 0.15s;
    box-shadow: 0 1.5px 8px #00ff0033; cursor: pointer; outline: none;
  }
  .dev-social-icon:focus-visible, .dev-social-icon:hover { background: var(--accent); color: #fff; box-shadow: 0 6px 18px var(--primary)33; }
  /* Responsive */
  @media (max-width: 900px) {
    .portfolio-container { max-width: 99vw;}
    .dev-nav-inner { max-width: 99vw;}
    .dev-projects-grid { grid-template-columns: 1fr; gap: 0.7rem;}
  }
`;

const ensureDeveloperSections = (sections) => {
  const types = sections.map(s => s.type);
  const defaults = [
    { type: 'about', title: 'About Me', isVisible: true, data: { name: '', title: '', bio: '', avatar: '', skills: [], resume: '' } },
    { type: 'projects', title: 'Projects', isVisible: true, data: [] },
    { type: 'skills', title: 'Skills', isVisible: true, data: [] },
    { type: 'contact', title: 'Contact', isVisible: true, data: {} },
  ];
  const result = [...sections];
  for (const def of defaults) {
    if (!types.includes(def.type)) result.push(def);
  }
  return result;
};

const generateDeveloperHTML = (sections, theme) => {
  const sec = ensureDeveloperSections(sections);
  let html = '';
  // Hero/About
  const about = sec.find(s => s.type === 'about') || {};
  html += `
    <section class="section dev-hero" id="about">
      ${about.data?.avatar ? `<img src="${about.data.avatar}" class="dev-avatar" alt="Profile" />` : ''}
      <div class="dev-name">${about.data?.name || ''}</div>
      <div class="dev-title">${about.data?.title || ''}</div>
      <div class="dev-typed-bio" id="typed-bio">${about.data?.bio || ''}</div>
    </section>
  `;
  // Skills
  const skills = sec.find(s => s.type === 'skills') || {};
  html += `
    <section class="section" id="skills">
      <h2 class="section-title">${skills.title || "Skills"}</h2>
      <div class="dev-skills-grid">
        ${(skills.data || []).map(skill => `
          <span class="dev-skill" tabindex="0">${typeof skill === "string" ? skill : skill.skill}</span>
        `).join('')}
      </div>
    </section>
  `;
  // Projects
  const projects = sec.find(s => s.type === 'projects') || {};
  html += `
    <section class="section" id="projects">
      <h2 class="section-title">${projects.title || "Projects"}</h2>
      <div class="dev-projects-grid">
        ${(projects.data || []).map((project, i) => `
          <div class="dev-project-card" tabindex="0" data-index="${i}">
            <div class="dev-project-title">${project.title || ''}</div>
            <div class="dev-project-desc">${project.description || ''}</div>
            <div class="dev-project-tech">${(project.technologies || []).map(tech => `<span class="dev-project-tech-tag">${tech}</span>`).join('')}</div>
            <a href="#" class="dev-project-link open-project-modal" data-index="${i}">View Details</a>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  // Contact
  const contact = sec.find(s => s.type === 'contact') || { data: {} };
  html += `
    <section class="section dev-contact-section" id="contact">
      <div class="dev-contact-title">${contact.title || "Contact"}</div>
      <form class="dev-contact-form" method="POST" action="${contact.data.formAction || '#'}">
        <input type="text" name="name" placeholder="Your Name" required autocomplete="off">
        <input type="email" name="email" placeholder="Your Email" required autocomplete="off">
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div class="dev-contact-grid">
        ${contact.data.email ? `<a href="mailto:${contact.data.email}" class="dev-contact-item">📧 ${contact.data.email}</a>` : ''}
        ${contact.data.phone ? `<a href="tel:${contact.data.phone}" class="dev-contact-item">📞 ${contact.data.phone}</a>` : ''}
        ${contact.data.linkedin ? `<a href="${contact.data.linkedin}" class="dev-contact-item" target="_blank">💼 LinkedIn</a>` : ''}
        ${contact.data.github ? `<a href="${contact.data.github}" class="dev-contact-item" target="_blank">🐙 GitHub</a>` : ''}
        ${contact.data.website ? `<a href="${contact.data.website}" class="dev-contact-item" target="_blank">🌐 Website</a>` : ''}
      </div>
      <div class="dev-social-icons">
        ${contact.data.socials?.map(s => `<a href="${s.link}" class="dev-social-icon" target="_blank">${s.icon || "🌐"}</a>`).join('') || ''}
      </div>
    </section>
  `;
  return html;
};

function generateDeveloperScripts() {
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
  // Typed animated bio (simulate terminal typing)
  const typed = document.getElementById("typed-bio");
  if(typed && typed.textContent.length > 0) {
    const txt = typed.textContent;
    typed.textContent = "";
    let i = 0;
    function typeWriter() {
      if(i < txt.length) {
        typed.textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, txt.charAt(i-1) === "\n" ? 270 : 22);
      }
    }
    typeWriter();
  }
  // Project Modal
  const modal = document.getElementById('modal-overlay');
  const projects = Array.from(document.querySelectorAll('.dev-project-card'));
  const allProjects = projects.map(p => ({
    title: p.querySelector('.dev-project-title')?.textContent,
    desc: p.querySelector('.dev-project-desc')?.textContent,
    tech: Array.from(p.querySelectorAll('.dev-project-tech-tag')).map(t=>t.textContent)
  }));
  document.querySelectorAll('.open-project-modal').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const idx = +link.dataset.index;
      const p = allProjects[idx];
      modal.innerHTML = \`
        <div class="dev-modal-content">
          <button class="dev-modal-close" aria-label="Close" tabindex="0">&times;</button>
          <h2 style="font-size:1.18rem;color:var(--primary);margin-bottom:1.1rem">\${p.title}</h2>
          <div style="color:var(--text2);opacity:.97">\${p.desc||''}</div>
          <div style="margin-top:1.2rem;display:flex;gap:0.6rem;flex-wrap:wrap;">
            \${p.tech.map(t=>'<span class="dev-project-tech-tag">'+t+'</span>').join('')}
          </div>
        </div>
      \`;
      modal.classList.add('active');
      setTimeout(()=>modal.querySelector('.dev-modal-close').focus(), 300);
      modal.querySelector('.dev-modal-close').onclick = () => modal.classList.remove('active');
      modal.onclick = (e) => { if(e.target === modal) modal.classList.remove('active'); };
      modal.querySelector('.dev-modal-content').onkeydown = (e) => {
        if(e.key === "Escape") modal.classList.remove('active');
      };
    });
  });
  // Nav highlight on scroll
  const navLinks = document.querySelectorAll('.dev-links a');
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