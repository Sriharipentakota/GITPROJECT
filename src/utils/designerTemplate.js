// Designer Template - Placeholder
export const generateDesignerHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateDesignerCSS(theme);
  const html = generateDesignerHTML(sections, theme);
  return `<!DOCTYPE html><html><head><title>${title}</title><style>${css}</style></head><body>${html}</body></html>`;
};

export const generateDesignerCSS = (theme) => `
  body { font-family: 'Arial', sans-serif; background: linear-gradient(45deg, #ff9a9e, #fecfef, #fecfef, #f6d365); color: #333; }
  .portfolio-container { max-width: 1200px; margin: 0 auto; padding: 3rem; }
  .section { margin-bottom: 4rem; background: rgba(255,255,255,0.9); padding: 3rem; border-radius: 20px; backdrop-filter: blur(10px); }
  .section-title { font-size: 3rem; color: #ff6b6b; margin-bottom: 2rem; text-align: center; font-weight: 300; }
  .design-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
  .design-card { background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
  .design-card:hover { transform: scale(1.05); }
  .color-accent { background: linear-gradient(45deg, #ff6b6b, #4ecdc4); height: 4px; }
`;

const generateDesignerHTML = (sections, theme) => {
  const sectionHTML = sections.filter(section => section.isVisible).map(section => {
    if (section.type === 'about') {
      const data = section.data;
      return `
        <div class="section">
          <h1 style="font-size: 4rem; text-align: center; margin-bottom: 1rem; background: linear-gradient(45deg, #ff6b6b, #4ecdc4); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.name || ''}</h1>
          <h2 style="text-align: center; color: #666; margin-bottom: 2rem; font-weight: 300;">${data.title || ''}</h2>
          <p style="text-align: center; font-size: 1.2rem; line-height: 1.8; max-width: 600px; margin: 0 auto;">${data.bio || ''}</p>
        </div>
      `;
    }
    if (section.type === 'projects') {
      const projects = section.data || [];
      const projectsHTML = projects.map(project => `
        <div class="design-card">
          <div class="color-accent"></div>
          <div style="padding: 2rem;">
            <h3 style="color: #ff6b6b; margin-bottom: 1rem;">${project.title || ''}</h3>
            <p style="color: #666; margin-bottom: 1rem;">${project.description || ''}</p>
          </div>
        </div>
      `).join('');
      return `<div class="section"><h2 class="section-title">${section.title}</h2><div class="design-grid">${projectsHTML}</div></div>`;
    }
    return `<div class="section"><h2 class="section-title">${section.title}</h2><p style="text-align: center; color: #666;">Content available in full template</p></div>`;
  }).join('\n');
  return `<div class="portfolio-container">${sectionHTML}</div>`;
};
