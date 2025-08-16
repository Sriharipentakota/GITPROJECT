// Timeline Template - Placeholder
export const generateTimelineHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateTimelineCSS(theme);
  const html = generateTimelineHTML(sections, theme);
  return `<!DOCTYPE html><html><head><title>${title}</title><style>${css}</style></head><body>${html}</body></html>`;
};

export const generateTimelineCSS = (theme) => `
  body { font-family: Arial, sans-serif; background: #f5f5f5; color: #333; }
  .portfolio-container { max-width: 1000px; margin: 0 auto; padding: 2rem; }
  .section { margin-bottom: 3rem; }
  .section-title { font-size: 2rem; color: #2c3e50; margin-bottom: 2rem; text-align: center; }
  .timeline { position: relative; padding-left: 30px; }
  .timeline::before { content: ''; position: absolute; left: 15px; top: 0; bottom: 0; width: 2px; background: #3498db; }
  .timeline-item { position: relative; margin-bottom: 2rem; background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  .timeline-item::before { content: ''; position: absolute; left: -23px; top: 20px; width: 12px; height: 12px; background: #3498db; border-radius: 50%; }
`;

const generateTimelineHTML = (sections, theme) => {
  const sectionHTML = sections.filter(section => section.isVisible).map(section => {
    if (section.type === 'about') {
      const data = section.data;
      return `<div class="section"><h1>${data.name || ''}</h1><h2>${data.title || ''}</h2><p>${data.bio || ''}</p></div>`;
    }
    return `<div class="section"><h2 class="section-title">${section.title}</h2><div class="timeline">${generateTimelineItems(section)}</div></div>`;
  }).join('\n');
  return `<div class="portfolio-container">${sectionHTML}</div>`;
};

const generateTimelineItems = (section) => {
  if (section.type === 'experience' || section.type === 'education') {
    return (section.data || []).map(item => `
      <div class="timeline-item">
        <h3>${item.company || item.institution || ''}</h3>
        <h4>${item.position || item.degree || ''}</h4>
        <p>${item.duration || ''}</p>
        <p>${item.description || ''}</p>
      </div>
    `).join('');
  }
  return '<div class="timeline-item">Content available in full template</div>';
};
