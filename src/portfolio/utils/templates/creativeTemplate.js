export const generateCreativeHTMLExport = ({ sections, theme, title = 'My Portfolio' }) => {
  const css = generateCreativeCSS(theme);
  const html = generateCreativeHTML(sections, theme);

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>${css}</style>
</head>
<body>
    ${html}
</body>
</html>`;
};

export const generateCreativeCSS = (theme) => `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    color: #333;
    min-height: 100vh;
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .portfolio-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;
    position: relative;
  }
  
  .section {
    margin-bottom: 4rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 30px;
    padding: 3rem;
    backdrop-filter: blur(20px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    transform: perspective(1000px) rotateX(0deg);
    transition: all 0.3s ease;
  }
  
  .section:hover {
    transform: perspective(1000px) rotateX(2deg);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }
  
  .section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    transition: all 0.5s ease;
    opacity: 0;
  }
  
  .section:hover::before {
    opacity: 1;
    animation: shine 1s ease-in-out;
  }
  
  @keyframes shine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
  
  .section-title {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2.5rem;
    position: relative;
    color: #333;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    border-radius: 2px;
  }
  
  .about-section {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
    text-align: center;
  }
  
  .name {
    font-size: 4rem;
    font-weight: 700;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .title {
    font-size: 1.8rem;
    color: #666;
    margin-bottom: 2rem;
    font-weight: 400;
  }
  
  .bio {
    font-size: 1.3rem;
    color: #555;
    max-width: 700px;
    margin: 0 auto 2rem auto;
    line-height: 1.8;
  }
  
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .skill {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    transform: perspective(1000px) rotateY(0deg);
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .skill:hover {
    transform: perspective(1000px) rotateY(10deg) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
  }
  
  .project-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
    padding: 2.5rem;
    border-radius: 25px;
    transition: all 0.3s ease;
    border: 3px solid transparent;
    background-clip: padding-box;
    position: relative;
    overflow: hidden;
  }
  
  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25px;
    padding: 3px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    z-index: -1;
  }
  
  .project-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
  
  .project-title {
    font-size: 1.6rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .project-description {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  .tech-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }
  
  .tech-tag {
    background: linear-gradient(45deg, #45b7d1, #96ceb4);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }
  
  .project-link {
    color: #ff6b6b;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }
  
  .project-link:hover {
    color: #4ecdc4;
    text-shadow: 0 0 10px rgba(78, 205, 196, 0.5);
  }
  
  .experience-list {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .experience-item {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6));
    padding: 2.5rem;
    border-radius: 20px;
    margin-bottom: 2rem;
    position: relative;
    border-left: 6px solid;
    border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4) 1;
    transition: all 0.3s ease;
  }
  
  .experience-item:hover {
    transform: translateX(10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .company {
    font-size: 1.6rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .position {
    font-size: 1.2rem;
    color: #ff6b6b;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  .duration {
    color: #4ecdc4;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .contact-section {
    background: linear-gradient(135deg, rgba(69, 183, 209, 0.1), rgba(254, 202, 87, 0.1));
    text-align: center;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
    border-radius: 20px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
    font-weight: 500;
    border: 2px solid transparent;
  }
  
  .contact-item:hover {
    transform: translateY(-5px) scale(1.05);
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    color: white;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    .portfolio-container {
      padding: 2rem 1rem;
    }
    
    .name {
      font-size: 3rem;
    }
    
    .section {
      padding: 2rem;
      margin-bottom: 3rem;
    }
    
    .section-title {
      font-size: 2.5rem;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`;

const generateCreativeHTML = (sections, theme) => {
  const sectionHTML = sections
    .filter(section => section.isVisible)
    .map(section => generateCreativeSectionHTML(section))
    .join('\n');

  return `<div class="portfolio-container">${sectionHTML}</div>`;
};

const generateCreativeSectionHTML = (section) => {
  switch (section.type) {
    case 'about': return generateCreativeAboutHTML(section);
    case 'projects': return generateCreativeProjectsHTML(section);
    case 'experience': return generateCreativeExperienceHTML(section);
    case 'contact': return generateCreativeContactHTML(section);
    case 'education': return generateCreativeEducationHTML(section);
    case 'certifications': return generateCreativeCertificationsHTML(section);
    default: return '';
  }
};

const generateCreativeAboutHTML = (section) => {
  const data = section.data;
  const skillsHTML = data.skills?.map(skill =>
    `<span class="skill">${skill}</span>`
  ).join('') || '';

  return `
    <div class="section about-section">
        <h1 class="name">${data.name || ''}</h1>
        <h2 class="title">${data.title || ''}</h2>
        <p class="bio">${data.bio || ''}</p>
        ${skillsHTML ? `<div class="skills-container">${skillsHTML}</div>` : ''}
    </div>
  `;
};

const generateCreativeProjectsHTML = (section) => {
  const projects = section.data || [];
  const projectsHTML = projects.map(project => {
    const techHTML = project.technologies?.map(tech =>
      `<span class="tech-tag">${tech}</span>`
    ).join('') || '';

    return `
      <div class="project-card">
          <h3 class="project-title">${project.title || ''}</h3>
          <p class="project-description">${project.description || ''}</p>
          ${techHTML ? `<div class="tech-container">${techHTML}</div>` : ''}
          ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="section">
        <h2 class="section-title">${section.title}</h2>
        <div class="projects-grid">${projectsHTML}</div>
    </div>
  `;
};

const generateCreativeExperienceHTML = (section) => {
  const experiences = section.data || [];
  const experienceHTML = experiences.map(exp => `
    <div class="experience-item">
        <h3 class="company">${exp.company || ''}</h3>
        <h4 class="position">${exp.position || ''}</h4>
        <p class="duration">${exp.duration || ''}</p>
        <p>${exp.description || ''}</p>
    </div>
  `).join('');

  return `
    <div class="section">
        <h2 class="section-title">${section.title}</h2>
        <div class="experience-list">${experienceHTML}</div>
    </div>
  `;
};

const generateCreativeContactHTML = (section) => {
  const data = section.data;
  const contactItems = [];

  if (data.email) contactItems.push(`<a href="mailto:${data.email}" class="contact-item">📧 ${data.email}</a>`);
  if (data.phone) contactItems.push(`<a href="tel:${data.phone}" class="contact-item">📞 ${data.phone}</a>`);
  if (data.linkedin) contactItems.push(`<a href="${data.linkedin}" class="contact-item" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>`);
  if (data.github) contactItems.push(`<a href="${data.github}" class="contact-item" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>`);
  if (data.website) contactItems.push(`<a href="${data.website}" class="contact-item" target="_blank" rel="noopener noreferrer">🌐 Website</a>`);

  return `
    <div class="section contact-section">
        <h2 class="section-title">${section.title}</h2>
        <div class="contact-grid">${contactItems.join('')}</div>
    </div>
  `;
};

const generateCreativeEducationHTML = (section) => {
  const educationList = section.data || [];
  const educationHTML = educationList.map(edu => {
    const detailsHTML = [];
    if (edu.gpa) detailsHTML.push(`GPA: ${edu.gpa}`);
    if (edu.location) detailsHTML.push(`${edu.location}`);

    return `
      <div class="experience-item">
          <h3 class="company">${edu.institution || ''}</h3>
          <h4 class="position">${edu.degree || ''} ${edu.field ? `in ${edu.field}` : ''}</h4>
          <p class="duration">${edu.duration || ''}</p>
          ${detailsHTML.length > 0 ? `<p>${detailsHTML.join(' • ')}</p>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="section">
        <h2 class="section-title">${section.title}</h2>
        <div class="experience-list">${educationHTML}</div>
    </div>
  `;
};

const generateCreativeCertificationsHTML = (section) => {
  const certifications = section.data || [];
  const certificationsHTML = certifications.map(cert => {
    const detailsHTML = [];
    if (cert.date) detailsHTML.push(`Issued: ${cert.date}`);
    if (cert.credentialId) detailsHTML.push(`ID: ${cert.credentialId}`);

    return `
      <div class="experience-item">
          <h3 class="company">${cert.name || ''}</h3>
          <h4 class="position">${cert.issuer || ''}</h4>
          ${detailsHTML.length > 0 ? `<p class="duration">${detailsHTML.join(' • ')}</p>` : ''}
          ${cert.link ? `<a href="${cert.link}" class="project-link" target="_blank" rel="noopener noreferrer">Verify Certificate →</a>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="section">
        <h2 class="section-title">${section.title}</h2>
        <div class="experience-list">${certificationsHTML}</div>
    </div>
  `;
};
