import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToPDF = async (formData, templateId) => {
  const element = document.getElementById('resume-content');
  
  if (!element) {
    console.error('Resume content element not found');
    return;
  }

  try {
    // Set specific styles for PDF export
    const originalStyle = element.style.cssText;
    element.style.cssText = `
      ${originalStyle}
      transform: scale(1) !important;
      width: 210mm !important;
      min-height: 297mm !important;
      max-width: 210mm !important;
      margin: 0 !important;
      padding: 0 !important;
      box-shadow: none !important;
      border: none !important;
    `;

    // Create canvas from the resume content
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0
    });

    // Restore original styles
    element.style.cssText = originalStyle;

    // Calculate dimensions
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });
    
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;



    
    // If content fits on one page, add it directly
    if (imgHeight <= pageHeight) {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    } else {
      // If content is longer, fit it to one page by scaling
      const scaledHeight = pageHeight;
      const scaledWidth = (canvas.width * scaledHeight) / canvas.height;
      
      if (scaledWidth <= imgWidth) {
        // Center horizontally if scaled width is smaller
        const xOffset = (imgWidth - scaledWidth) / 2;
        pdf.addImage(imgData, 'PNG', xOffset, 0, scaledWidth, scaledHeight);
      } else {
        // Use full width and scale height proportionally
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, pageHeight);
      }
    }

    // Generate filename
    const fileName = `${formData.personalInfo.fullName || 'Resume'}_Template_${templateId}.pdf`;
    
    // Save the PDF
    pdf.save(fileName);
    
    console.log('PDF exported successfully');
  } catch (error) {
    console.error('Error exporting PDF:', error);
    alert('Error exporting PDF. Please try again.');
  }
};