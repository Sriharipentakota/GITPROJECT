import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToPDF = async (formData, templateId) => {
  const element = document.getElementById('resume-content');
  
  if (!element) {
    console.error('Resume content element not found');
    return;
  }

  try {
    // Create canvas from the resume content
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    // Calculate dimensions
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Add the image to PDF
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
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