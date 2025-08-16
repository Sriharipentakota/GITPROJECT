// Portfolio Template - Placeholder
export const generatePortfolioHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generatePortfolioCSS(theme);
  const html = generatePortfolioHTML(sections, theme);
  return `<!DOCTYPE html><html><head><title>${title}</title><style>${css}</style></head><body>${html}</body></html>`;
};

export const generatePortfolioCSS = (theme) => `
  body { font-family: 'Helvetica', sans-serif; background: #fff; color: #333; }
  .portfolio-container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
  .section { margin-bottom: 4rem; }
  .section-title { font-size: 2.5rem; color: #2c3e50; margin-bottom: 3rem; text-align: center; }
  .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
  .gallery-item { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
  .gallery-item:hover { transform: translateY(-5px); }
  .gallery-item img { width: 100%; height: 200px; object-fit: cover; }
  .gallery-content { padding: 1.5rem; }
`;

const generatePortfolioHTML = (sections, theme) => {
  const sectionHTML = sections.filter(section => section.isVisible).map(section => {
    if (section.type === 'about') {
      const data = section.data;
      return `<div class="section"><h1>${data.name || ''}</h1><h2>${data.title || ''}</h2><p>${data.bio || ''}</p></div>`;
    }
    if (section.type === 'projects') {
      const projects = section.data || [];
      const projectsHTML = projects.map(project => `
        <div class="gallery-item">
          <div class="gallery-content">
            <h3>${project.title || ''}</h3>
            <p>${project.description || ''}</p>
          </div>
        </div>
      `).join('');
      return `<div class="section"><h2 class="section-title">${section.title}</h2><div class="gallery-grid">${projectsHTML}</div></div>`;
    }
    return `<div class="section"><h2 class="section-title">${section.title}</h2><p>Content available in full template</p></div>`;
  }).join('\n');
  return `<div class="portfolio-container">${sectionHTML}</div>`;
};
