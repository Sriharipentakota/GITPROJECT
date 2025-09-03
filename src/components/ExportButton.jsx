/**
 * Export Button Component
 * 
 * Provides export functionality for the portfolio in multiple formats (HTML, PDF, Word).
 * Features a dropdown menu with smooth animations and handles the export process.
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, FileText, File, Globe } from 'lucide-react';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';

const ExportButton = ({ portfolioData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Export as HTML
  const exportAsHTML = () => {
    // Get the current styles from the document
    const styles = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          return Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('\n');
        } catch (e) {
          return '';
        }
      })
      .join('\n');

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.personalInfo.name} - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Inter', sans-serif; 
          line-height: 1.6; 
          color: #374151;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .section { 
          margin-bottom: 60px; 
          background: white; 
          border-radius: 16px; 
          padding: 40px; 
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .header { 
          text-align: center; 
          margin-bottom: 60px; 
          background: linear-gradient(135deg, #3b82f6, #7c3aed);
          color: white;
          padding: 60px 40px;
          border-radius: 16px;
        }
        .header h1 { 
          font-size: 3rem; 
          font-weight: 800; 
          margin-bottom: 16px;
          background: linear-gradient(135deg, #ffffff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .header h2 { 
          font-size: 1.5rem; 
          font-weight: 300; 
          margin-bottom: 24px;
          opacity: 0.9;
        }
        .header p { 
          font-size: 1.1rem; 
          opacity: 0.8; 
          max-width: 600px; 
          margin: 0 auto 32px;
        }
        .contact-info { 
          display: flex; 
          justify-content: center; 
          gap: 32px; 
          flex-wrap: wrap;
        }
        .contact-item { 
          display: flex; 
          align-items: center; 
          gap: 8px;
          background: rgba(255,255,255,0.1);
          padding: 8px 16px;
          border-radius: 8px;
        }
        .section-title { 
          font-size: 2.5rem; 
          font-weight: 700; 
          margin-bottom: 32px;
          background: linear-gradient(135deg, #3b82f6, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
        }
        .skills { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 24px; 
        }
        .skill { 
          padding: 24px; 
          border: 1px solid #e5e7eb; 
          border-radius: 12px; 
          background: #f9fafb;
          transition: transform 0.2s;
        }
        .skill:hover { transform: translateY(-4px); }
        .skill-header { 
          display: flex; 
          align-items: center; 
          margin-bottom: 16px;
        }
        .skill-icon { 
          font-size: 2rem; 
          margin-right: 12px;
        }
        .skill-name { 
          font-size: 1.25rem; 
          font-weight: 600;
        }
        .skill-level { 
          display: flex; 
          justify-content: space-between; 
          margin-bottom: 8px;
        }
        .skill-bar { 
          width: 100%; 
          height: 8px; 
          background: #e5e7eb; 
          border-radius: 4px; 
          overflow: hidden;
        }
        .skill-progress { 
          height: 100%; 
          background: linear-gradient(135deg, #3b82f6, #7c3aed); 
          border-radius: 4px;
        }
        .projects { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
          gap: 32px; 
        }
        .project { 
          border: 1px solid #e5e7eb; 
          border-radius: 12px; 
          overflow: hidden;
          background: white;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .project:hover { 
          transform: translateY(-8px); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .project-image { 
          width: 100%; 
          height: 200px; 
          object-fit: cover;
        }
        .project-content { 
          padding: 24px;
        }
        .project-title { 
          font-size: 1.5rem; 
          font-weight: 700; 
          margin-bottom: 12px;
        }
        .project-description { 
          color: #6b7280; 
          margin-bottom: 16px;
        }
        .tech-tags { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 8px; 
          margin-bottom: 16px;
        }
        .tech-tag { 
          background: #dbeafe; 
          color: #1e40af; 
          padding: 4px 12px; 
          border-radius: 16px; 
          font-size: 0.875rem;
        }
        .project-links { 
          display: flex; 
          gap: 16px;
        }
        .project-link { 
          color: #3b82f6; 
          text-decoration: none; 
          font-weight: 500;
        }
        .experience-timeline { 
          position: relative;
        }
        .experience { 
          margin-bottom: 40px; 
          padding: 32px; 
          border-left: 4px solid #3b82f6; 
          background: #f8fafc;
          border-radius: 0 12px 12px 0;
          position: relative;
        }
        .experience::before {
          content: '';
          position: absolute;
          left: -8px;
          top: 32px;
          width: 12px;
          height: 12px;
          background: #3b82f6;
          border-radius: 50%;
        }
        .experience-header { 
          margin-bottom: 16px;
        }
        .experience-company { 
          font-size: 1.5rem; 
          font-weight: 700; 
          color: #1f2937;
        }
        .experience-position { 
          font-size: 1.25rem; 
          font-weight: 600; 
          color: #7c3aed; 
          margin-bottom: 8px;
        }
        .experience-meta { 
          color: #6b7280; 
          margin-bottom: 16px;
        }
        .achievements { 
          margin-top: 16px;
        }
        .achievements ul { 
          padding-left: 20px;
        }
        .achievements li { 
          margin-bottom: 8px; 
          color: #374151;
        }
        .contact-section { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 40px;
        }
        .contact-info-card { 
          background: #f9fafb; 
          padding: 32px; 
          border-radius: 12px;
        }
        .contact-item-detailed { 
          display: flex; 
          align-items: center; 
          margin-bottom: 24px;
        }
        .contact-icon { 
          width: 48px; 
          height: 48px; 
          background: #dbeafe; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          margin-right: 16px;
        }
        .social-links { 
          display: flex; 
          gap: 16px; 
          margin-top: 24px;
        }
        .social-link { 
          width: 48px; 
          height: 48px; 
          background: #374151; 
          color: white; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .container { padding: 16px; }
          .section { padding: 24px; margin-bottom: 32px; }
          .header { padding: 40px 24px; }
          .header h1 { font-size: 2rem; }
          .skills { grid-template-columns: 1fr; }
          .projects { grid-template-columns: 1fr; }
          .contact-section { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${portfolioData.personalInfo.name}</h1>
            <h2>${portfolioData.personalInfo.title}</h2>
            <p>${portfolioData.personalInfo.description}</p>
            <div class="contact-info">
                <div class="contact-item">📧 ${portfolioData.personalInfo.email}</div>
                <div class="contact-item">📱 ${portfolioData.personalInfo.phone}</div>
                <div class="contact-item">📍 ${portfolioData.personalInfo.location}</div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">${portfolioData.professionalSummary.title}</h2>
            <p>${portfolioData.professionalSummary.content}</p>
        </div>

        <div class="section">
            <h2 class="section-title">Skills & Expertise</h2>
            <div class="skills">
                ${portfolioData.skills.map(skill => `
                    <div class="skill">
                        <div class="skill-header">
                            <span class="skill-icon">${skill.icon}</span>
                            <span class="skill-name">${skill.name}</span>
                        </div>
                        <div class="skill-level">
                            <span>${skill.category}</span>
                            <span>${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Featured Projects</h2>
            <div class="projects">
                ${portfolioData.projects.map(project => `
                    <div class="project">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <div class="project-content">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <div class="tech-tags">
                                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                            <div class="project-links">
                                ${project.liveUrl ? `<a href="${project.liveUrl}" class="project-link">Live Demo</a>` : ''}
                                ${project.githubUrl ? `<a href="${project.githubUrl}" class="project-link">GitHub</a>` : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Professional Experience</h2>
            <div class="experience-timeline">
                ${portfolioData.experience.map(exp => `
                    <div class="experience">
                        <div class="experience-header">
                            <div class="experience-company">${exp.company}</div>
                            <div class="experience-position">${exp.position}</div>
                            <div class="experience-meta">${exp.startDate} - ${exp.endDate} | ${exp.location}</div>
                        </div>
                        <p>${exp.description}</p>
                        <div class="achievements">
                            <h4>Key Achievements:</h4>
                            <ul>
                                ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                            </ul>
                            <p><strong>Technologies:</strong> ${exp.technologies.join(', ')}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Contact Information</h2>
            <div class="contact-section">
                <div class="contact-info-card">
                    <h3>Get In Touch</h3>
                    <div class="contact-item-detailed">
                        <div class="contact-icon">📧</div>
                        <div>
                            <p><strong>Email</strong></p>
                            <p>${portfolioData.contactInfo.email}</p>
                        </div>
                    </div>
                    <div class="contact-item-detailed">
                        <div class="contact-icon">📱</div>
                        <div>
                            <p><strong>Phone</strong></p>
                            <p>${portfolioData.contactInfo.phone}</p>
                        </div>
                    </div>
                    <div class="contact-item-detailed">
                        <div class="contact-icon">📍</div>
                        <div>
                            <p><strong>Location</strong></p>
                            <p>${portfolioData.contactInfo.address}</p>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="${portfolioData.contactInfo.social.linkedin}" class="social-link">💼</a>
                        <a href="${portfolioData.contactInfo.social.github}" class="social-link">🐙</a>
                        <a href="${portfolioData.contactInfo.social.twitter}" class="social-link">🐦</a>
                        <a href="${portfolioData.contactInfo.social.instagram}" class="social-link">📷</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    saveAs(blob, `${portfolioData.personalInfo.name.replace(/\s+/g, '_')}_Portfolio.html`);
    setIsOpen(false);
  };

  // Export as PDF
  const exportAsPDF = async () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = margin;

    // Helper function to add text with word wrapping
    const addText = (text, fontSize = 12, isBold = false) => {
      pdf.setFontSize(fontSize);
      if (isBold) pdf.setFont(undefined, 'bold');
      else pdf.setFont(undefined, 'normal');
      
      const lines = pdf.splitTextToSize(text, pageWidth - 2 * margin);
      pdf.text(lines, margin, yPosition);
      yPosition += lines.length * fontSize * 0.5 + 5;
      
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = margin;
      }
    };

    // Add content
    addText(portfolioData.personalInfo.name, 20, true);
    addText(portfolioData.personalInfo.title, 16);
    addText(portfolioData.personalInfo.description, 12);
    addText(`Email: ${portfolioData.personalInfo.email} | Phone: ${portfolioData.personalInfo.phone}`, 10);
    yPosition += 10;

    addText(portfolioData.professionalSummary.title, 16, true);
    addText(portfolioData.professionalSummary.content, 12);
    yPosition += 10;

    addText('Skills & Expertise', 16, true);
    portfolioData.skills.forEach(skill => {
      addText(`${skill.name}: ${skill.level}%`, 10);
    });
    yPosition += 10;

    addText('Featured Projects', 16, true);
    portfolioData.projects.forEach(project => {
      addText(project.title, 14, true);
      addText(project.description, 10);
      addText(`Technologies: ${project.technologies.join(', ')}`, 10);
      if (project.liveUrl) addText(`Live URL: ${project.liveUrl}`, 10);
      yPosition += 5;
    });

    addText('Professional Experience', 16, true);
    portfolioData.experience.forEach(exp => {
      addText(`${exp.position} at ${exp.company}`, 14, true);
      addText(`${exp.startDate} - ${exp.endDate} | ${exp.location}`, 10);
      addText(exp.description, 10);
      exp.achievements.forEach(achievement => {
        addText(`• ${achievement}`, 10);
      });
      yPosition += 5;
    });

    pdf.save(`${portfolioData.personalInfo.name.replace(/\s+/g, '_')}_Portfolio.pdf`);
    setIsOpen(false);
  };

  // Export as Word
  const exportAsWord = () => {
    const content = `
${portfolioData.personalInfo.name}
${portfolioData.personalInfo.title}

${portfolioData.personalInfo.description}

Contact Information:
Email: ${portfolioData.personalInfo.email}
Phone: ${portfolioData.personalInfo.phone}
Location: ${portfolioData.personalInfo.location}

${portfolioData.professionalSummary.title}
${portfolioData.professionalSummary.content}

Skills & Expertise:
${portfolioData.skills.map(skill => `${skill.name}: ${skill.level}%`).join('\n')}

Featured Projects:
${portfolioData.projects.map(project => `
${project.title}
${project.description}
Technologies: ${project.technologies.join(', ')}
${project.liveUrl ? `Live URL: ${project.liveUrl}` : ''}
${project.githubUrl ? `GitHub: ${project.githubUrl}` : ''}
`).join('\n')}

Professional Experience:
${portfolioData.experience.map(exp => `
${exp.position} at ${exp.company}
${exp.startDate} - ${exp.endDate} | ${exp.location}
${exp.description}

Key Achievements:
${exp.achievements.map(achievement => `• ${achievement}`).join('\n')}

Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

Contact Information:
Email: ${portfolioData.contactInfo.email}
Phone: ${portfolioData.contactInfo.phone}
Address: ${portfolioData.contactInfo.address}
LinkedIn: ${portfolioData.contactInfo.social.linkedin}
GitHub: ${portfolioData.contactInfo.social.github}
`;

    const blob = new Blob([content], { type: 'application/msword' });
    saveAs(blob, `${portfolioData.personalInfo.name.replace(/\s+/g, '_')}_Portfolio.doc`);
    setIsOpen(false);
  };

  const exportOptions = [
    { label: 'Export as HTML', icon: Globe, action: exportAsHTML },
    { label: 'Export as PDF', icon: FileText, action: exportAsPDF },
    { label: 'Export as Word', icon: File, action: exportAsWord }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download size={18} />
        <span>Export</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {exportOptions.map((option, index) => (
              <motion.button
                key={option.label}
                onClick={option.action}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{ backgroundColor: '#f9fafb' }}
              >
                <option.icon size={16} className="text-gray-600" />
                <span className="text-gray-700">{option.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExportButton;