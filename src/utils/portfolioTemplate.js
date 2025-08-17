// Modern, Creative, Interactive Portfolio Template - Unique Features

export const generatePortfolioHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generatePortfolioCSS(theme);
  const html = generatePortfolioHTML(sections, theme);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="description" content="Creative interactive portfolio: gallery, parallax, micro-interactions, and more.">
  <style>${css}</style>
</head>
<body>
  <nav class="creative-nav">
    <div class="creative-nav-inner">
      <span class="creative-logo">${theme.logo ? `<img src="${theme.logo}" alt="Logo" />` : "🌈"}</span>
      <div class="creative-links">
        <a href="#about" class="nav-icon" title="About"><span>👤</span></a>
        <a href="#projects" class="nav-icon" title="Projects"><span>🖼️</span></a>
        <a href="#contact" class="nav-icon" title="Contact"><span>✉️</span></a>
        <button id="theme-toggle" title="Toggle Theme" class="nav-icon" aria-label="Theme">🌗</button>
      </div>
    </div>
  </nav>
  <div class="portfolio-bg-parallax"></div>
  <main class="portfolio-container creative-scroll">
    ${html}
  </main>
  <div id="modal-overlay" class="modal-overlay"></div>
  ${generatePortfolioScripts()}
</body>
</html>`;
};

export const generatePortfolioCSS = (theme) => `
  :root {
    --primary: ${theme.primary || "#3498db"};
    --accent: ${theme.accent || "#ff77c6"};
    --bg1: #f7fafc;
    --bg2: #dbeafe;
    --card: #fff;
    --dark: #22223b;
    --shadow: 0 8px 32px 0 rgba(52,152,219, 0.14), 0 1.5px 10px #e3eaf2;
  }
  body {
    font-family: 'Inter', 'Helvetica', Arial, sans-serif;
    background: linear-gradient(115deg, var(--bg1) 60%, var(--bg2) 100%);
    color: var(--dark);
    min-height: 100vh;
    margin: 0;
    scroll-behavior: smooth;
    transition: background 0.5s, color 0.5s;
  }
  body.dark-mode {
    --bg1: #181824;
    --bg2: #23263a;
    --card: #23263a;
    --dark: #f8fafc;
    background: linear-gradient(120deg, var(--bg1) 65%, var(--bg2) 100%);
    color: var(--dark);
  }
  .portfolio-bg-parallax {
    position: fixed; z-index: -2; top: 0; left: 0; width: 100vw; height: 100vh;
    background: radial-gradient(circle at 30% 60%, var(--primary) 0%, transparent 70%),
                radial-gradient(circle at 70% 30%, var(--accent) 0%, transparent 60%);
    opacity: 0.16;
    animation: bgmove 25s linear infinite alternate;
    pointer-events: none;
  }
  @keyframes bgmove {
    0% {background-position: 30% 60%, 70% 30%;}
    100% {background-position: 60% 80%, 20% 90%;}
  }
  .creative-nav {
    position: sticky; top: 0; z-index: 100;
    background: var(--card);
    box-shadow: 0 2px 18px #eaf6fb33;
    padding: 0.6rem 1vw 0.6rem 1vw;
    margin-bottom: 1.1rem;
    animation: fadeInDown 0.95s cubic-bezier(.5,.01,.5,1.2);
    backdrop-filter: blur(16px);
  }
  @keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-38px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  .creative-nav-inner {
    max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;
  }
  .creative-logo img { width: 36px; height: 36px; border-radius: 50%; box-shadow: 0 1px 6px var(--primary)33; background: #fff; }
  .creative-links { display: flex; align-items: center; gap: 1.4rem; }
  .nav-icon {
    color: var(--primary); background: none; border: none; font-size: 1.2rem; text-align: center;
    border-radius: 7px; transition: background 0.18s, color 0.18s; cursor: pointer; outline: none;
    padding: 0.25rem 0.5rem;
  }
  .nav-icon:focus-visible, .nav-icon:hover { color: var(--accent); background: #eaf6fb33; }
  #theme-toggle { font-size: 1.15rem; }
  .portfolio-container {
    max-width: 1200px; margin: 0 auto; padding: 3.2rem 1.1rem 2.2rem 1.1rem;
    position: relative; z-index: 1;
    display: flex; flex-direction: column; gap: 60px;
    scroll-snap-type: y proximity;
  }
  .section { margin-bottom: 4rem; background: var(--card); border-radius: 16px; box-shadow: var(--shadow); padding: 2.5rem 2rem;}
  .section-title { font-size: 2.5rem; color: var(--primary); margin-bottom: 3rem; text-align: center; letter-spacing: 0.7px;}
  /* About */
  .about-hero {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 1.2rem; text-align: center;
    min-height: 60vh;
    background: linear-gradient(120deg, var(--primary)11 40%, var(--accent)22 100%);
    border-radius: 18px;
    box-shadow: 0 2px 20px var(--primary)22;
    animation: fadeInSection 1.2s cubic-bezier(.55,1.2,.4,1) both;
  }
  .about-avatar {
    width: 160px; height: 160px; border-radius: 50%; object-fit: cover;
    box-shadow: 0 10px 40px var(--primary)44, 0 2px 9px #0008;
    border: 7px solid var(--card);
    margin-bottom: 1.1rem;
    background: #fff;
    animation: profilepop 1.09s cubic-bezier(.62,1.8,.5,1.07) both;
  }
  @keyframes profilepop {
    0% { opacity: 0; transform: scale(.7);}
    60% { opacity: 0.7; transform: scale(1.09);}
    100% { opacity: 1; transform: scale(1);}
  }
  .about-name {
    font-size: clamp(2.2rem, 6vw, 3.3rem); font-weight: 800;
    background: linear-gradient(92deg, var(--primary), var(--accent) 70%);
    background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    letter-spacing: 1px; text-shadow: 0 0 22px var(--accent)22;
    margin-bottom: 0.2em;
    animation: textpop 1.4s cubic-bezier(.38,1.2,.35,1.04) both;
  }
  .about-title {
    font-size: clamp(1.1rem, 2.5vw, 1.7rem); color: var(--accent); font-weight: 600; margin-bottom: 1.2em; letter-spacing: 0.5px;
    animation: textpop 1.2s cubic-bezier(.38,1.2,.35,1.04) 0.1s both;
  }
  .about-bio {
    font-size: clamp(1rem, 2vw, 1.18rem); color: var(--dark); max-width: 600px; margin: 0 auto 1.2rem auto; line-height: 1.7; opacity: 0.94;
    animation: textpop 1.3s cubic-bezier(.38,1.2,.35,1.04) 0.15s both;
  }
  @keyframes textpop {
    0% { opacity: 0; transform: scale(.8);}
    80% { opacity: 0.85; transform: scale(1.09);}
    100% { opacity: 1; transform: scale(1);}
  }
  /* Gallery - Masonry, Modal, Filters */
  .gallery-filters {
    display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-bottom: 2rem;
  }
  .gallery-filter-btn {
    background: var(--bg1); color: var(--primary); border: none; border-radius: 12px; font-size: 1.02rem;
    padding: 0.5em 1.2em; font-weight: 700; cursor: pointer; transition: background 0.16s, color 0.15s, transform 0.13s; outline: none;
  }
  .gallery-filter-btn.active, .gallery-filter-btn:focus-visible, .gallery-filter-btn:hover {
    background: var(--primary); color: #fff; transform: scale(1.08); outline: 2px solid var(--accent);
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    animation: fadeInSection 1.1s cubic-bezier(.41,1.2,.4,1) both;
  }
  @keyframes fadeInSection {
    0% { opacity: 0; transform: translateY(40px) scale(.97);}
    100% { opacity: 1; transform: translateY(0) scale(1);}
  }
  .gallery-item {
    background: var(--card); border-radius: 22px; overflow: hidden; box-shadow: var(--shadow); transition: transform 0.3s cubic-bezier(.41,1.2,.4,1);
    position: relative; outline: none; cursor: pointer; min-width: 0;
  }
  .gallery-item:focus-visible, .gallery-item:hover {
    transform: scale(1.04) translateY(-6px);
    box-shadow: 0 12px 32px var(--primary)33;
    z-index: 5;
  }
  .gallery-item img { width: 100%; height: 220px; object-fit: cover; border-bottom: 1.5px solid var(--primary);}
  .gallery-content { padding: 1.5rem; position: relative; }
  .gallery-title { font-size: 1.34rem; color: var(--primary); font-weight: 700; margin-bottom: 0.6em;}
  .gallery-desc { color: var(--dark); opacity: 0.88; margin-bottom: 0.8em; font-size: 1.03rem; }
  .gallery-tech { display: flex; flex-wrap: wrap; gap: 0.5em; margin-bottom: 0.5em;}
  .gallery-tech-tag { background: var(--primary); color: #fff; padding: 0.22em 0.9em; border-radius: 8px; font-size: 0.91em; font-weight: 600;}
  .gallery-link { color: var(--accent); font-weight: 600; text-decoration: underline; font-size: 0.99rem;}
  .gallery-link:focus-visible, .gallery-link:hover { color: var(--primary);}
  /* Modal overlay for project details */
  .modal-overlay {
    display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100vw; height: 100vh;
    background: rgba(30,35,54,0.93); align-items: center; justify-content: center; transition: opacity 0.30s;
  }
  .modal-overlay.active { display: flex; animation: fadeInModal 0.3s cubic-bezier(.41,1.2,.4,1);}
  @keyframes fadeInModal {0%{opacity:0;}100%{opacity:1;}}
  .modal-content {
    background: var(--card); border-radius: 22px; padding: 2.2rem 2rem;
    box-shadow: 0 10px 32px var(--primary)33; position: relative; max-width: 540px; width: 98vw;
    animation: fadeInSection 0.7s cubic-bezier(.41,1.2,.4,1) both;
  }
  .modal-close {
    position: absolute; top: 11px; right: 13px; background: var(--accent); color: #fff; border-radius: 50%;
    width: 38px; height: 38px; border: none; font-size: 1.4rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center; transition: background 0.19s, transform 0.16s; outline: none;
  }
  .modal-close:focus-visible, .modal-close:hover { background: var(--primary); transform: scale(1.1);}
  /* Contact */
  .contact-section { background: var(--card); text-align: center; border-radius: 18px; box-shadow: var(--shadow);}
  .contact-form { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; margin: 0 auto 2.3rem auto; align-items: stretch;}
  .contact-form input, .contact-form textarea {
    background: var(--bg1); padding: 1.1rem 1.2rem; border: 1.5px solid #e0e0e0; border-radius: 8px;
    font-size: 1rem; color: var(--dark); margin-bottom: 0.1rem; font-family: inherit; outline: none; box-shadow: 0 1px 3px #eaf6fb;
    transition: border-color 0.17s, box-shadow 0.15s;
  }
  .contact-form input:focus, .contact-form textarea:focus {
    border-color: var(--primary); box-shadow: 0 2px 8px var(--primary)33;
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
  .contact-item { display: flex; align-items: center; gap: 0.7rem; background: var(--bg1); border-radius: 8px; padding: 0.8rem 1.3rem;
    color: var(--primary); font-size: 1.05rem; text-decoration: none; border: 1.5px solid #e0e0e0;
    box-shadow: 0 1.5px 8px #eaf6fb18; transition: border 0.14s, box-shadow 0.13s, background 0.13s; outline: none;}
  .contact-item:focus-visible, .contact-item:hover {
    background: var(--primary); color: #fff; border-color: var(--accent); outline: 2px solid var(--accent);
    box-shadow: 0 4px 15px var(--primary)22; transform: scale(1.05);
  }
  .social-icons { display: flex; gap: 1.3rem; justify-content: center; margin-top: 1rem;}
  .social-icon {
    color: var(--accent); font-size: 2rem; background: var(--bg1); border-radius: 50%;
    width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; transition: background 0.14s, color 0.17s, box-shadow 0.15s;
    box-shadow: 0 1.5px 8px #eaf6fb18; cursor: pointer; outline: none;
  }
  .social-icon:focus-visible, .social-icon:hover { background: var(--accent); color: #fff; box-shadow: 0 6px 18px var(--primary)33; }
  /* Responsive */
  @media (max-width: 900px) {
    .portfolio-container { max-width: 99vw;}
    .creative-nav-inner { max-width: 99vw;}
    .portfolio-container > .section { max-width: 99vw; }
    .gallery-grid { gap: 0.8rem;}
  }
  @media (max-width: 650px) {
    .portfolio-container { padding: 0 0.2rem 1.2rem 0.2rem;}
    .about-hero, .contact-section { padding: 1.1rem 0.2rem;}
    .portfolio-container > .section { border-radius: 13px;}
    .gallery-grid { gap: 0.6rem;}
    .contact-section { padding: 0.7rem 0;}
    .social-icons { gap: 0.7rem;}
  }
`;

const ensurePortfolioSections = (sections) => {
  const types = sections.map(s => s.type);
  const defaults = [
    {type: 'about', title: 'About Me', isVisible: true, data: {name: '', title: '', bio: '', avatar: '', skills: [], resume: ''}},
    {type: 'projects', title: 'Projects', isVisible: true, data: []},
    {type: 'contact', title: 'Contact', isVisible: true, data: {}},
  ];
  const result = [...sections];
  for (const def of defaults) {
    if (!types.includes(def.type)) result.push(def);
  }
  return result;
};

const generatePortfolioHTML = (sections, theme) => {
  const sec = ensurePortfolioSections(sections);
  let html = '';
  // About
  const about = sec.find(s => s.type === 'about') || {};
  html += `
    <section class="section about-hero" id="about">
      ${about.data?.avatar ? `<img src="${about.data.avatar}" class="about-avatar" alt="Profile" />` : ''}
      <div class="about-name">${about.data?.name || ''}</div>
      <div class="about-title">${about.data?.title || ''}</div>
      <div class="about-bio">${about.data?.bio || ''}</div>
    </section>
  `;
  // Projects - Masonry, Filters, Modal
  const projects = sec.find(s => s.type === 'projects') || {data: []};
  const categories = [...new Set(projects.data?.flatMap(p => p.categories || []))].filter(Boolean);
  html += `
    <section class="section" id="projects">
      <h2 class="section-title">${projects.title || "Projects"}</h2>
      <div class="gallery-filters">
        <button class="gallery-filter-btn active" data-category="all">All</button>
        ${categories.map(cat => `<button class="gallery-filter-btn" data-category="${cat}">${cat}</button>`).join('')}
      </div>
      <div class="gallery-grid">
        ${projects.data?.map((project, i) => `
          <div class="gallery-item" tabindex="0" data-index="${i}" data-categories="${(project.categories || []).join(',')}">
            ${project.image ? `<img src="${project.image}" alt="${project.title}"/>` : ""}
            <div class="gallery-content">
              <div class="gallery-title">${project.title || ''}</div>
              <div class="gallery-desc">${project.description || ''}</div>
              <div class="gallery-tech">${(project.technologies || []).map(tech => `<span class="gallery-tech-tag">${tech}</span>`).join('')}</div>
              <a href="#" class="gallery-link open-project-modal" data-index="${i}">View Details</a>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  // Contact
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

function generatePortfolioScripts() {
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
    const bg = document.querySelector('.portfolio-bg-parallax');
    if(bg) {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      bg.style.backgroundPosition = \`\${30 + x}% \${60 + y}%, \${70 - x}% \${30 - y}%\`;
    }
  });
  // Project filter
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const cards = document.querySelectorAll('.gallery-grid .gallery-item');
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
  const projects = Array.from(document.querySelectorAll('.gallery-item'));
  const allProjects = projects.map(p => ({
    title: p.querySelector('.gallery-title')?.textContent,
    img: p.querySelector('img')?.src,
    desc: p.querySelector('.gallery-desc')?.textContent,
    tech: Array.from(p.querySelectorAll('.gallery-tech-tag')).map(t=>t.textContent)
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
          <div style="color:var(--dark);opacity:.92">\${p.desc||''}</div>
          <div style="margin-top:1.2rem;display:flex;gap:0.6rem;flex-wrap:wrap;">
            \${p.tech.map(t=>'<span class="gallery-tech-tag">'+t+'</span>').join('')}
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
  const navLinks = document.querySelectorAll('.creative-links a');
  window.addEventListener('scroll', function() {
    let fromTop = window.scrollY+120;
    navLinks.forEach(link => {
      const section = document.getElementById(link.getAttribute('href').slice(1));
      if(section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active');
      } else link.classList.remove('active');
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