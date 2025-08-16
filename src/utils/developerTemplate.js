// Developer Template - Placeholder
export const generateDeveloperHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateDeveloperCSS(theme);
  const html = generateDeveloperHTML(sections, theme);
  return `<!DOCTYPE html><html><head><title>${title}</title><style>${css}</style></head><body>${html}</body></html>`;
};

export const generateDeveloperCSS = (theme) => `
  body { font-family: 'Courier New', monospace; background: #1a1a1a; color: #00ff00; line-height: 1.6; }
  .portfolio-container { max-width: 1000px; margin: 0 auto; padding: 2rem; background: #000; border: 2px solid #00ff00; }
  .section { margin-bottom: 3rem; padding: 1.5rem; border: 1px solid #333; background: #111; }
  .section-title { font-size: 1.8rem; color: #00ff00; margin-bottom: 1.5rem; }
  .section-title::before { content: '> '; }
  .code-block { background: #222; padding: 1rem; border-left: 4px solid #00ff00; margin: 1rem 0; }
  .terminal-prompt::before { content: '$ '; color: #00ff00; }
`;

const generateDeveloperHTML = (sections, theme) => {
  const sectionHTML = sections.filter(section => section.isVisible).map(section => {
    if (section.type === 'about') {
      const data = section.data;
      return `
        <div class="section">
          <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">${data.name || ''}</h1>
          <div class="terminal-prompt">echo "${data.title || ''}"</div>
          <div class="code-block">${data.bio || ''}</div>
        </div>
      `;
    }
    if (section.type === 'projects') {
      const projects = section.data || [];
      const projectsHTML = projects.map(project => `
        <div class="code-block">
          <div class="terminal-prompt">git clone ${project.title || ''}</div>
          <p>${project.description || ''}</p>
          ${project.technologies ? `<div>Technologies: ${project.technologies.join(', ')}</div>` : ''}
        </div>
      `).join('');
      return `<div class="section"><h2 class="section-title">${section.title}</h2>${projectsHTML}</div>`;
    }
    return `<div class="section"><h2 class="section-title">${section.title}</h2><p>// Content available in full template</p></div>`;
  }).join('\n');
  return `<div class="portfolio-container">${sectionHTML}</div>`;
};
