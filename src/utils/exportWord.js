import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

export const exportToWord = async (sections, theme, filename = 'portfolio.docx') => {
  try {
    const children = [];

    sections.forEach(section => {
      if (!section.isVisible) return;

      switch (section.type) {
        case 'about':
          children.push(...generateAboutSection(section.data));
          break;
        case 'projects':
          children.push(...generateProjectsSection(section.data, section.title));
          break;
        case 'experience':
          children.push(...generateExperienceSection(section.data, section.title));
          break;
        case 'contact':
          children.push(...generateContactSection(section.data, section.title));
          break;
      }

      // Add spacing between sections
      children.push(new Paragraph({ text: '' }));
    });

    const doc = new Document({
      sections: [{
        properties: {},
        children: children
      }]
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, filename);
    return true;
  } catch (error) {
    console.error('Error exporting to Word:', error);
    throw error;
  }
};

const generateAboutSection = (data) => {
  const paragraphs = [];

  if (data.name) {
    paragraphs.push(new Paragraph({
      children: [new TextRun({ text: data.name, bold: true, size: 32 })],
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.CENTER
    }));
  }

  if (data.title) {
    paragraphs.push(new Paragraph({
      children: [new TextRun({ text: data.title, size: 24 })],
      alignment: AlignmentType.CENTER
    }));
  }

  if (data.bio) {
    paragraphs.push(new Paragraph({
      children: [new TextRun({ text: data.bio })],
      alignment: AlignmentType.CENTER
    }));
  }

  if (data.skills && data.skills.length > 0) {
    paragraphs.push(new Paragraph({
      children: [new TextRun({ text: 'Skills: ' + data.skills.join(', '), bold: true })],
      alignment: AlignmentType.CENTER
    }));
  }

  return paragraphs;
};

const generateProjectsSection = (projects, title) => {
  const paragraphs = [];

  paragraphs.push(new Paragraph({
    children: [new TextRun({ text: title, bold: true, size: 28 })],
    heading: HeadingLevel.HEADING_2
  }));

  projects.forEach(project => {
    if (project.title) {
      paragraphs.push(new Paragraph({
        children: [new TextRun({ text: project.title, bold: true, size: 20 })],
        heading: HeadingLevel.HEADING_3
      }));
    }

    if (project.description) {
      paragraphs.push(new Paragraph({
        children: [new TextRun({ text: project.description })]
      }));
    }

    if (project.technologies && project.technologies.length > 0) {
      paragraphs.push(new Paragraph({
        children: [new TextRun({ text: 'Technologies: ' + project.technologies.join(', '), italics: true })]
      }));
    }

    if (project.link) {
      paragraphs.push(new Paragraph({
        children: [new TextRun({ text: 'Link: ' + project.link })]
      }));
    }

    paragraphs.push(new Paragraph({ text: '' })); // Add spacing
  });

  return paragraphs;
};

const generateExperienceSection = (experiences, title) => {
  const paragraphs = [];

  paragraphs.push(new Paragraph({
    children: [new TextRun({ text: title, bold: true, size: 28 })],
    heading: HeadingLevel.HEADING_2
  }));

  experiences.forEach(exp => {
    if (exp.company) {
      paragraphs.push(new Paragraph({
        children: [new TextRun({ text: exp.company, bold: true, size: 20 })],
        heading: HeadingLevel.HEADING_3
      }));
    }

    if (exp.position) {
      paragraphs.push(new Paragraph({
        children: [new TextRun({ text: exp.position, bold: true })]
      }));
    }

    if (exp.duration) {
      paragraphs.push(new Paragraph({
        children: [new TextRun({ text: exp.duration, italics: true })]
      }));
    }

    if (exp.description) {
      paragraphs.push(new Paragraph({
        children: [new TextRun({ text: exp.description })]
      }));
    }

    paragraphs.push(new Paragraph({ text: '' })); // Add spacing
  });

  return paragraphs;
};

const generateContactSection = (data, title) => {
  const paragraphs = [];

  paragraphs.push(new Paragraph({
    children: [new TextRun({ text: title, bold: true, size: 28 })],
    heading: HeadingLevel.HEADING_2
  }));

  const contactInfo = [];
  if (data.email) contactInfo.push(`Email: ${data.email}`);
  if (data.phone) contactInfo.push(`Phone: ${data.phone}`);
  if (data.linkedin) contactInfo.push(`LinkedIn: ${data.linkedin}`);
  if (data.github) contactInfo.push(`GitHub: ${data.github}`);
  if (data.website) contactInfo.push(`Website: ${data.website}`);

  contactInfo.forEach(info => {
    paragraphs.push(new Paragraph({
      children: [new TextRun({ text: info })]
    }));
  });

  return paragraphs;
};