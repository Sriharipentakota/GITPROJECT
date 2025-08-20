import jsPDF from 'jspdf';

export const exportToPDF = async (sections, theme, filename = 'portfolio.pdf') => {
  try {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    let yPosition = margin;

    // Set font
    pdf.setFont('helvetica');

    // Helper function to add new page if needed
    const checkPageBreak = (requiredHeight) => {
      if (yPosition + requiredHeight > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
      }
    };

    // Helper function to wrap text
    const wrapText = (text, maxWidth, fontSize) => {
      pdf.setFontSize(fontSize);
      return pdf.splitTextToSize(text, maxWidth);
    };

    // Add header with name and title
    const aboutSection = sections.find(s => s.type === 'about');
    if (aboutSection?.data) {
      // Name
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(40, 40, 40);
      pdf.text(aboutSection.data.name || 'Professional Portfolio', margin, yPosition);
      yPosition += 12;

      // Title
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(80, 80, 80);
      pdf.text(aboutSection.data.title || '', margin, yPosition);
      yPosition += 15;

      // Add line separator
      pdf.setDrawColor(200, 200, 200);
      pdf.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 10;
    }

    // Process each section
    sections.forEach((section) => {
      if (!section.isVisible) return;

      checkPageBreak(20);

      // Section title
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(60, 60, 60);
      pdf.text(section.title.toUpperCase(), margin, yPosition);
      yPosition += 12;

      // Section content based on type
      switch (section.type) {
        case 'about':
          if (section.data.bio) {
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(80, 80, 80);
            const bioLines = wrapText(section.data.bio, contentWidth, 11);
            bioLines.forEach(line => {
              checkPageBreak(6);
              pdf.text(line, margin, yPosition);
              yPosition += 6;
            });
            yPosition += 5;
          }

          if (section.data.skills && section.data.skills.length > 0) {
            pdf.setFontSize(12);
            pdf.setFont('helvetica', 'bold');
            pdf.text('CORE COMPETENCIES', margin, yPosition);
            yPosition += 8;

            pdf.setFontSize(10);
            pdf.setFont('helvetica', 'normal');
            const skillsText = section.data.skills.join(' • ');
            const skillLines = wrapText(skillsText, contentWidth, 10);
            skillLines.forEach(line => {
              checkPageBreak(5);
              pdf.text(line, margin, yPosition);
              yPosition += 5;
            });
          }
          break;

        case 'experience':
          if (section.data && Array.isArray(section.data)) {
            section.data.forEach((exp, index) => {
              checkPageBreak(25);

              // Company and position
              pdf.setFontSize(12);
              pdf.setFont('helvetica', 'bold');
              pdf.setTextColor(40, 40, 40);
              pdf.text(exp.company || '', margin, yPosition);

              pdf.setFont('helvetica', 'normal');
              pdf.text(exp.position || '', margin + 80, yPosition);
              yPosition += 7;

              // Duration
              pdf.setFontSize(10);
              pdf.setTextColor(100, 100, 100);
              pdf.text(exp.duration || '', margin, yPosition);
              yPosition += 8;

              // Description
              if (exp.description) {
                pdf.setFontSize(10);
                pdf.setTextColor(80, 80, 80);
                const descLines = wrapText(exp.description, contentWidth, 10);
                descLines.forEach(line => {
                  checkPageBreak(5);
                  pdf.text(line, margin, yPosition);
                  yPosition += 5;
                });
              }

              if (index < section.data.length - 1) {
                yPosition += 8;
              }
            });
          }
          break;

        case 'projects':
          if (section.data && Array.isArray(section.data)) {
            section.data.forEach((project, index) => {
              checkPageBreak(20);

              // Project title
              pdf.setFontSize(12);
              pdf.setFont('helvetica', 'bold');
              pdf.setTextColor(40, 40, 40);
              pdf.text(project.title || '', margin, yPosition);
              yPosition += 7;

              // Description
              if (project.description) {
                pdf.setFontSize(10);
                pdf.setFont('helvetica', 'normal');
                pdf.setTextColor(80, 80, 80);
                const descLines = wrapText(project.description, contentWidth, 10);
                descLines.forEach(line => {
                  checkPageBreak(5);
                  pdf.text(line, margin, yPosition);
                  yPosition += 5;
                });
                yPosition += 3;
              }

              // Technologies
              if (project.technologies && project.technologies.length > 0) {
                pdf.setFontSize(9);
                pdf.setTextColor(100, 100, 100);
                const techText = 'Technologies: ' + project.technologies.join(', ');
                const techLines = wrapText(techText, contentWidth, 9);
                techLines.forEach(line => {
                  checkPageBreak(4);
                  pdf.text(line, margin, yPosition);
                  yPosition += 4;
                });
              }

              // Link
              if (project.link) {
                pdf.setFontSize(9);
                pdf.setTextColor(60, 120, 180);
                pdf.text(project.link, margin, yPosition);
                yPosition += 5;
              }

              if (index < section.data.length - 1) {
                yPosition += 8;
              }
            });
          }
          break;

        case 'contact':
          if (section.data) {
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(80, 80, 80);

            const contactInfo = [];
            if (section.data.email) contactInfo.push(`Email: ${section.data.email}`);
            if (section.data.phone) contactInfo.push(`Phone: ${section.data.phone}`);
            if (section.data.linkedin) contactInfo.push(`LinkedIn: ${section.data.linkedin}`);
            if (section.data.github) contactInfo.push(`GitHub: ${section.data.github}`);
            if (section.data.website) contactInfo.push(`Website: ${section.data.website}`);

            contactInfo.forEach(info => {
              checkPageBreak(6);
              pdf.text(info, margin, yPosition);
              yPosition += 6;
            });
          }
          break;
      }

      yPosition += 15; // Space between sections
    });

    // Save the PDF
    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    throw error;
  }
};