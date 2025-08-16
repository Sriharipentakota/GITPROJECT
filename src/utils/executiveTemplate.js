// Executive Template - Placeholder
export const generateExecutiveHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateExecutiveCSS(theme);
  const html = generateExecutiveHTML(sections, theme);
  return `<!DOCTYPE html><html><head><title>${title}</title><style>${css}</style></head><body>${html}</body></html>`;
};

export const generateExecutiveCSS = (theme) => `
  body { font-family: 'Times New Roman', serif; background: #f8f9fa; color: #2c3e50; line-height: 1.6; }
  .portfolio-container { max-width: 900px; margin: 0 auto; padding: 3rem 2rem; background: white; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
  .section { margin-bottom: 3rem; padding: 2rem 0; border-bottom: 1px solid #dee2e6; }
  .section-title { font-size: 2.2rem; color: #2c3e50; margin-bottom: 2rem; text-align: center; font-weight: 700; }
  .executive-summary { background: #f8f9fa; padding: 2rem; border-left: 4px solid #007bff; margin-bottom: 2rem; }
  .achievement-item { background: #fff; padding: 1.5rem; margin-bottom: 1rem; border: 1px solid #dee2e6; border-radius: 6px; }
`;

const generateExecutiveHTML = (sections, theme) => {
  const sectionHTML = sections.filter(section => section.isVisible).map(section => {
    if (section.type === 'about') {
      const data = section.data;
      return `
        <div class="section">
          <h1 style="font-size: 2.8rem; text-align: center; margin-bottom: 1rem;">${data.name || ''}</h1>
          <h2 style="text-align: center; color: #6c757d; margin-bottom: 2rem;">${data.title || ''}</h2>
          <div class="executive-summary">
            <h3>Executive Summary</h3>
            <p>${data.bio || ''}</p>
          </div>
        </div>
      `;
    }
    return `<div class="section"><h2 class="section-title">${section.title}</h2><p>Content available in full template</p></div>`;
  }).join('\n');
  return `<div class="portfolio-container">${sectionHTML}</div>`;
};
