// Utility: Convert HTML to plain text with bullets
// ...existing code...
function htmlToPlainText(html) {
  if (!html) return '';
  // If achievements or description is an array, join with newlines
  if (Array.isArray(html)) {
    html = html.join('\n');
  }
  // Convert <li> to bullet points
  let text = html.replace(/<li[^>]*>/gi, '\n• ').replace(/<\/li>/gi, '');
  // Convert <br> and <p> to newlines
  text = text.replace(/<br\s*\/?>(?!\n)/gi, '\n')
             .replace(/<\/p>/gi, '\n')
             .replace(/<p[^>]*>/gi, '');
  // Remove all other HTML tags
  text = text.replace(/<[^>]+>/g, '');
  // Decode HTML entities
  const temp = document.createElement('div');
  temp.innerHTML = text;
  return temp.textContent || temp.innerText || '';
}
// ...existing code...
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

    let content = '';
    content += portfolioData.personalInfo.name + '\n';
    content += portfolioData.personalInfo.title + '\n\n';
    content += portfolioData.personalInfo.description + '\n\n';
    content += 'Contact Information:\n';
    content += 'Email: ' + portfolioData.personalInfo.email + '\n';
    content += 'Phone: ' + portfolioData.personalInfo.phone + '\n';
    content += 'Location: ' + portfolioData.personalInfo.location + '\n\n';
    content += portfolioData.professionalSummary.title + '\n';
    content += htmlToPlainText(portfolioData.professionalSummary.content) + '\n\n';
    content += 'Skills & Expertise:\n';
    content += portfolioData.skills.map(skill => skill.name + ': ' + skill.level + '%').join('\n') + '\n\n';
    content += 'Featured Projects:\n';
    portfolioData.projects.forEach(project => {
      content += project.title + '\n';
      content += htmlToPlainText(project.description) + '\n';
      content += 'Technologies: ' + project.technologies.join(', ') + '\n';
      if (project.liveUrl) content += 'Live URL: ' + project.liveUrl + '\n';
      if (project.githubUrl) content += 'GitHub: ' + project.githubUrl + '\n';
      content += '\n';
    });
    content += 'Professional Experience:\n';
    portfolioData.experience.forEach(exp => {
      content += exp.position + ' at ' + exp.company + '\n';
      content += exp.startDate + ' - ' + exp.endDate + ' | ' + exp.location + '\n';
      content += htmlToPlainText(exp.description) + '\n';
      content += 'Key Achievements:\n';
      content += htmlToPlainText(exp.achievements) + '\n';
      content += 'Technologies: ' + exp.technologies.join(', ') + '\n\n';
    });
    content += 'Contact Information:\n';
    content += 'Email: ' + portfolioData.contactInfo.email + '\n';
    content += 'Phone: ' + portfolioData.contactInfo.phone + '\n';
    content += 'Address: ' + portfolioData.contactInfo.address + '\n';
    content += 'LinkedIn: ' + portfolioData.contactInfo.social.linkedin + '\n';
    content += 'GitHub: ' + portfolioData.contactInfo.social.github + '\n';

    // Build HTML content for export
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${portfolioData.personalInfo.name} Portfolio</title>
    <style>
        /* Place your CSS styles here if needed for the exported HTML */
    </style>
</head>
<body>
    <!-- Place your HTML structure here if needed for the exported HTML -->
    <pre>${content}</pre>
</body>
</html>
`;

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
  addText(htmlToPlainText(portfolioData.professionalSummary.content), 12);
    yPosition += 10;

    addText('Skills', 16, true);
  addText(portfolioData.skills.map(skill => skill.name).join(', '), 10);
  yPosition += 10;

    addText('Featured Projects', 16, true);
    portfolioData.projects.forEach(project => {
      addText(project.title, 14, true);
      addText(htmlToPlainText(project.description), 10);
      addText(`Technologies: ${project.technologies.join(', ')}`, 10);
      if (project.liveUrl) addText(`Live URL: ${project.liveUrl}`, 10);
      yPosition += 5;
    });

    addText('Professional Experience', 16, true);
    portfolioData.experience.forEach(exp => {
      addText(`${exp.position} at ${exp.company}`, 14, true);
      addText(`${exp.startDate} - ${exp.endDate} | ${exp.location}`, 10);
      addText(htmlToPlainText(exp.description), 10);
      addText(htmlToPlainText(exp.achievements), 10);
      yPosition += 5;
    });

    pdf.save(`${portfolioData.personalInfo.name.replace(/\s+/g, '_')}_Portfolio.pdf`);
    setIsOpen(false);
  };

// Export as Word
const exportAsWord = () => {
  let content = '';
  content += `${portfolioData.personalInfo.title}\n\n`;
  content += `${portfolioData.personalInfo.description}\n\n`;
  content += `Email: ${portfolioData.personalInfo.email}\n`;
  content += `Phone: ${portfolioData.personalInfo.phone}\n`;
  content += `Location: ${portfolioData.personalInfo.location}\n\n`;
  content += `${portfolioData.professionalSummary.title}\n`;
  content += `${htmlToPlainText(portfolioData.professionalSummary.content)}\n\n`;
  content += `Skills & Expertise:\n`;
  content += portfolioData.skills.map(skill => `${skill.name}: ${skill.level}%`).join('\n') + '\n\n';
  content += `Featured Projects:\n`;
  portfolioData.projects.forEach(project => {
    content += `${project.title}\n`;
    content += `${htmlToPlainText(project.description)}\n`;
    content += `Technologies: ${project.technologies.join(', ')}\n`;
    if (project.liveUrl) content += `Live URL: ${project.liveUrl}\n`;
    if (project.githubUrl) content += `GitHub: ${project.githubUrl}\n`;
    content += '\n';
  });
  content += `Professional Experience:\n`;
  portfolioData.experience.forEach(exp => {
    content += `${exp.position} at ${exp.company}\n`;
    content += `${exp.startDate} - ${exp.endDate} | ${exp.location}\n`;
    content += `${htmlToPlainText(exp.description)}\n`;
    content += `Key Achievements:\n`;
    content += `${htmlToPlainText(exp.achievements)}\n`;
    content += `Technologies: ${exp.technologies.join(', ')}\n\n`;
  });
  content += `Contact Information:\n`;
  content += `Email: ${portfolioData.contactInfo.email}\n`;
  content += `Phone: ${portfolioData.contactInfo.phone}\n`;
  content += `Address: ${portfolioData.contactInfo.address}\n`;
  content += `LinkedIn: ${portfolioData.contactInfo.social.linkedin}\n`;
  content += `GitHub: ${portfolioData.contactInfo.social.github}\n`;

  // Create a Blob for Word (doc) format
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