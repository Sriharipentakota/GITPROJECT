/**
 * Resume Generator Utility
 * 
 * This utility handles the generation of professional ATS-friendly resumes
 * in both PDF and Word formats. It extracts data from the portfolio components
 * and formats them into a clean, professional resume layout.
 * 
 * Key Features:
 * - ATS-friendly formatting (simple layout, standard fonts, proper structure)
 * - PDF generation using jsPDF
 * - Word document generation using docx library
 * - Professional styling with consistent spacing
 * - Contact information, skills, experience, education, and projects sections
 */

import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, UnderlineType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Resume Data Structure
 * This object contains all the resume information that can be easily edited
 * All data is centralized here for easy maintenance and updates
 */
export const resumeData = {
  // Personal Information Section
  personalInfo: {
    name: 'Srihari Pentakota',
    title: 'Frontend Developer',
    email: 'sriharipentakota07@gmail.com',
    phone: '+91 6281997025',
    location: 'Anakapalle, Andhra Pradesh',
    naukari: 'https://www.naukri.com/mnjuser/profile',
    github: 'https://github.com/Sriharipentakota', 
    portfolio: 'Harideveloper.com',
    portfolioUrl: 'https://HariDeveloper.com'
  },

  // Professional Summary Section
  summary: 'Passionate Frontend Developer with over 2.5 years of experience specializing in React.js and modern JavaScript technologies. Skilled in building responsive, interactive web applications and delivering pixel-perfect user interfaces. Demonstrated ability to optimize website performance and collaborate effectively with designers and backend teams to achieve project goals', // ⚠️ CHANGE THIS: Replace with your professional summary

  // Technical Skills Section (organized by categories for ATS optimization)
  skills: {
    'Frontend Technologies': ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js'],
    'Styling & Frameworks': ['Tailwind CSS', 'SASS/SCSS', 'Bootstrap', 'CSS Grid', 'Flexbox'],
    'Tools & Technologies': ['Git', 'Webpack', 'Vite', 'npm/yarn', 'REST APIs', 'Responsive Design'],
    'Design & UX': ['UI/UX Implementation', 'Cross-browser Compatibility', 'Performance Optimization', 'Accessibility (A11y)']
  },

  // Work Experience Section
  experience: [
    // {
    //   title: 'Frontend Developer',
    //   company: 'Deloitte',
    //   location: 'Hyderabad, Telanagana',
    //   period: 'Feb 2023 - Present',
    //   achievements: [
    //     'Lead frontend development for multiple client projects using React and Vue.js',
    //     'Implemented responsive designs and improved website performance by 40%',
    //     'Mentored junior developers and established frontend coding standards',
    //     'Collaborated with UX/UI designers to create pixel-perfect implementations'
    //   ]
    // },
    // {
    //   title: 'Frontend Developer',
    //   company: 'Digital Creative Agency',
    //   location: 'San Francisco, CA',
    //   period: 'Mar 2020 - Dec 2021',
    //   achievements: [
    //     'Developed interactive web applications using modern JavaScript frameworks',
    //     'Created reusable component libraries and maintained design systems',
    //     'Optimized websites for SEO and accessibility compliance',
    //     'Worked closely with designers to implement creative and engaging user interfaces'
    //   ]
    // },
    {
      title: 'Frontend Developer',
      company: 'Deloitte',
      location: 'Hyderabad, Telanagana',
      period: 'Feb 2023 - Present',
      achievements: [
        'Built responsive websites using HTML5, CSS3, and JavaScript',
        'Implemented CSS animations and interactive elements',
        'Collaborated with backend developers for API integration',
        'Participated in code reviews and agile development processes'
      ]
    }
  ],

  // Education Section
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Aditya Degree College, Kakinada',
      period: '2019 - 2022',
      details: 'Focused on web development, user interface design, and software engineering principles'
    }
  ],

  // Key Projects Section
  projects: [
    // {
    //   name: 'E-Commerce Platform',
    //   company: 'TechFlow Solutions',
    //   technologies: 'React, Redux, Bootstrap',
    //   description: 'Led frontend development for a multi-vendor e-commerce platform serving 10,000+ users',
    //   type: 'client'
    // },
    // {
    //   name: 'Banking Dashboard Redesign',
    //   company: 'Digital Creative Agency',
    //   technologies: 'Vue.js, Chart.js, SCSS, REST APIs',
    //   description: 'Redesigned and developed responsive banking dashboard improving user engagement by 35%',
    //   type: 'client'
    // },
    {
      name: 'E-Commerce React Application',
      technologies: 'React, JavaScript, Tailwind CSS, Context API',
      description: 'Modern e-commerce frontend with product catalog, shopping cart, and responsive design',
      type: 'personal',
      liveUrl: 'https://your-ecommerce-demo.netlify.app', // ⚠️ CHANGE THIS: Add your live demo URL
      githubUrl: 'https://github.com/yourusername/ecommerce-react' // ⚠️ CHANGE THIS: Add your GitHub repo URL
    },
    {
      name: 'Interactive Dashboard',
      technologies: 'React, Chart.js, CSS Grid, Local Storage',
      description: 'Responsive admin dashboard with data visualization and real-time updates',
      type: 'personal',
      liveUrl: 'https://your-dashboard-demo.netlify.app', // ⚠️ CHANGE THIS: Add your live demo URL
      githubUrl: 'https://github.com/yourusername/interactive-dashboard' // ⚠️ CHANGE THIS: Add your GitHub repo URL
    },
    {
      name: 'Weather App PWA',
      technologies: 'Vanilla JS, PWA, Service Workers, CSS Animations',
      description: 'Progressive Web App with geolocation, offline functionality, and beautiful animations',
      type: 'personal',
      liveUrl: 'https://your-weather-app.netlify.app', // ⚠️ CHANGE THIS: Add your live demo URL
      githubUrl: 'https://github.com/yourusername/weather-pwa' // ⚠️ CHANGE THIS: Add your GitHub repo URL
    },
    {
      name: 'Task Management UI',
      technologies: 'Vue.js, Vuex, SCSS, Drag & Drop API',
      description: 'Beautiful task management interface with drag-and-drop functionality and smooth transitions',
      type: 'personal',
      liveUrl: 'https://your-task-manager.netlify.app', // ⚠️ CHANGE THIS: Add your live demo URL
      githubUrl: 'https://github.com/yourusername/task-manager' // ⚠️ CHANGE THIS: Add your GitHub repo URL
    }
  ],

  // Legacy projects array for backward compatibility
  legacyProjects: [
    {
      name: 'E-Commerce React Application',
      technologies: 'React, JavaScript, Tailwind CSS, Context API',
      description: 'Modern e-commerce frontend with product catalog, shopping cart, and responsive design'
    },
    {
      name: 'Interactive Dashboard',
      technologies: 'React, Chart.js, CSS Grid, Local Storage',
      description: 'Responsive admin dashboard with data visualization and real-time updates'
    },
    {
      name: 'Weather App PWA',
      technologies: 'Vanilla JS, PWA, Service Workers, CSS Animations',
      description: 'Progressive Web App with geolocation, offline functionality, and beautiful animations'
    }
  ],

  // Certifications Section
  certifications: [
    'React Developer Certification - Meta (Facebook), 2023',
    'JavaScript Algorithms and Data Structures - freeCodeCamp, 2022',
    'Responsive Web Design Certification - freeCodeCamp, 2021',
    'CSS Grid and Flexbox Mastery - CSS-Tricks, 2021',
    'Frontend Web Development Bootcamp - Udemy, 2020'
  ],

  // Interests Section
  interests: [
    'Open Source Contributions',
    'UI/UX Design Trends',
    'Web Performance Optimization',
    'Mobile App Development',
    'Photography',
    'Tech Blogging'
  ],

  // Languages Section
  languages: [
    { language: 'Telugu', proficiency: 'Native' },
    { language: 'English', proficiency: 'Conversational' },
    { language: 'Hindi', proficiency: 'Basic' }
  ]
};

/**
 * Generate PDF Resume
 * 
 * This function creates a professional ATS-friendly PDF resume using jsPDF
 * The layout is optimized for ATS systems with:
 * - Standard fonts (Arial/Helvetica)
 * - Clear section headers
 * - Consistent spacing
 * - Bullet points for achievements
 * - Professional formatting
 * 
 * @param {Object} data - Resume data object
 * @returns {Promise} - Promise that resolves when PDF is generated and downloaded
 */
export const generatePDFResume = async (data = resumeData) => {
  try {
    // Initialize jsPDF with letter size and portrait orientation
    const doc = new jsPDF('portrait', 'mm', 'letter');

    // Set up document properties for better ATS compatibility
    doc.setProperties({
      title: `${data.personalInfo.name} - Frontend Developer Resume`,
      subject: 'Frontend Developer Resume',
      author: data.personalInfo.name,
      creator: 'Portfolio Website'
    });

    let yPosition = 20; // Starting Y position for content
    const leftMargin = 20; // Left margin for all content
    const rightMargin = 195; // Right margin boundary
    const lineHeight = 6; // Standard line height for consistent spacing

    // Helper function to add text with automatic line wrapping
    const addText = (text, x, y, options = {}) => {
      const fontSize = options.fontSize || 10;
      const fontStyle = options.fontStyle || 'normal';
      const maxWidth = options.maxWidth || (rightMargin - x);

      doc.setFontSize(fontSize);
      doc.setFont('helvetica', fontStyle);

      // Split text into lines that fit within the specified width
      const lines = doc.splitTextToSize(text, maxWidth);

      // Add each line to the document
      lines.forEach((line, index) => {
        doc.text(line, x, y + (index * lineHeight));
      });

      // Return the Y position after adding all lines
      return y + (lines.length * lineHeight);
    };

    // Header Section - Name and Contact Information
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(data.personalInfo.name.toUpperCase(), leftMargin, yPosition);
    yPosition += 8;

    // Professional Title
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(data.personalInfo.title, leftMargin, yPosition);
    yPosition += 10;

    // Contact Information in a single line for space efficiency
    doc.setFontSize(9);
    const contactInfo = `${data.personalInfo.email} | ${data.personalInfo.phone} | ${data.personalInfo.location} | ${data.personalInfo.naukari}`;
    doc.text(contactInfo, leftMargin, yPosition);
    yPosition += 12;

    // Professional Summary Section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', leftMargin, yPosition);
    yPosition += 6;

    // Add horizontal line under section header
    doc.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += 4;

    // Summary content
    yPosition = addText(data.summary, leftMargin, yPosition, { fontSize: 10, maxWidth: rightMargin - leftMargin });
    yPosition += 8;

    // Technical Skills Section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('TECHNICAL SKILLS', leftMargin, yPosition);
    yPosition += 6;
    doc.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += 4;

    // Add skills by category for better ATS parsing
    Object.entries(data.skills).forEach(([category, skillList]) => {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`${category}:`, leftMargin, yPosition);

      doc.setFont('helvetica', 'normal');
      const skillsText = skillList.join(', ');
      yPosition = addText(skillsText, leftMargin + 45, yPosition, { fontSize: 10 });
      yPosition += 3;
    });
    yPosition += 5;

    // Professional Experience Section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL EXPERIENCE', leftMargin, yPosition);
    yPosition += 6;
    doc.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += 4;

    // Add each work experience
    data.experience.forEach((exp) => {
      // Job title and company
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(`${exp.title} - ${exp.company}`, leftMargin, yPosition);

      // Location and period on the right side
      doc.setFont('helvetica', 'normal');
      doc.text(`${exp.location} | ${exp.period}`, rightMargin - 60, yPosition);
      yPosition += 6;

      // Achievements as bullet points
      exp.achievements.forEach((achievement) => {
        doc.setFontSize(10);
        doc.text('•', leftMargin + 5, yPosition);
        yPosition = addText(achievement, leftMargin + 10, yPosition, { fontSize: 10, maxWidth: rightMargin - leftMargin - 10 });
        yPosition += 2;
      });
      yPosition += 4;
    });

    // Education Section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION', leftMargin, yPosition);
    yPosition += 6;
    doc.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += 4;

    data.education.forEach((edu) => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(edu.degree, leftMargin, yPosition);

      doc.setFont('helvetica', 'normal');
      doc.text(edu.period, rightMargin - 30, yPosition);
      yPosition += 5;

      doc.setFontSize(10);
      doc.text(edu.school, leftMargin, yPosition);
      yPosition += 4;

      if (edu.details) {
        yPosition = addText(edu.details, leftMargin, yPosition, { fontSize: 9 });
        yPosition += 4;
      }
    });

    // Key Projects Section
    yPosition += 4;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('KEY PROJECTS', leftMargin, yPosition);
    yPosition += 6;
    doc.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += 4;

    // Client Projects Subsection
    const clientProjects = data.projects.filter(p => p.type === 'client');
    if (clientProjects.length > 0) {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('Client Projects:', leftMargin, yPosition);
      yPosition += 5;

      clientProjects.forEach((project) => {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text(`${project.name} - ${project.company}`, leftMargin + 5, yPosition);
        yPosition += 4;

        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        doc.text(`Technologies: ${project.technologies}`, leftMargin + 5, yPosition);
        yPosition += 4;

        doc.setFont('helvetica', 'normal');
        yPosition = addText(project.description, leftMargin + 5, yPosition, { fontSize: 9 });
        yPosition += 5;
      });
      yPosition += 3;
    }

    // Personal Projects Subsection
    const personalProjects = data.projects.filter(p => p.type === 'personal');
    if (personalProjects.length > 0) {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('Personal Projects:', leftMargin, yPosition);
      yPosition += 5;

      personalProjects.forEach((project) => {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text(project.name, leftMargin + 5, yPosition);
        yPosition += 4;

        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        doc.text(`Technologies: ${project.technologies}`, leftMargin + 5, yPosition);
        yPosition += 4;

        doc.setFont('helvetica', 'normal');
        yPosition = addText(project.description, leftMargin + 5, yPosition, { fontSize: 9 });
        yPosition += 5;

        // Add Live Demo and GitHub links for personal projects
        if (project.liveUrl || project.githubUrl) {
          doc.setFontSize(8);
          doc.setFont('helvetica', 'italic');
          let linksText = '';
          if (project.liveUrl && project.githubUrl) {
            linksText = `Live Demo: ${project.liveUrl} | GitHub: ${project.githubUrl}`;
          } else if (project.liveUrl) {
            linksText = `Live Demo: ${project.liveUrl}`;
          } else if (project.githubUrl) {
            linksText = `GitHub: ${project.githubUrl}`;
          }
          yPosition = addText(linksText, leftMargin + 5, yPosition, { fontSize: 8 });
        }
      });
    }

    // Check if we need a new page
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }


    // Certifications Section
    if (data.certifications && data.certifications.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('CERTIFICATIONS', leftMargin, yPosition);
      yPosition += 6;
      doc.line(leftMargin, yPosition, rightMargin, yPosition);
      yPosition += 4;

      data.certifications.forEach((cert) => {
        doc.setFontSize(10);
        doc.text('•', leftMargin + 5, yPosition);
        doc.text(cert, leftMargin + 10, yPosition);
        yPosition += 5;
      });
    }
    yPosition += 4;

    // Interests Section
    if (data.interests && data.interests.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('INTERESTS', leftMargin, yPosition);
      yPosition += 6;
      doc.line(leftMargin, yPosition, rightMargin, yPosition);
      yPosition += 4;

      // Display interests in a comma-separated format for space efficiency
      const interestsText = data.interests.join(', ');
      yPosition = addText(interestsText, leftMargin, yPosition, { fontSize: 10 });
      yPosition += 6;
    }

    // Languages Section
    if (data.languages && data.languages.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('LANGUAGES', leftMargin, yPosition);
      yPosition += 6;
      doc.line(leftMargin, yPosition, rightMargin, yPosition);
      yPosition += 4;

      data.languages.forEach((lang) => {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text(`${lang.language}:`, leftMargin, yPosition);

        doc.setFont('helvetica', 'normal');
        doc.text(lang.proficiency, leftMargin + 25, yPosition);
        yPosition += 5;
      });
    }

    // Save the PDF with a professional filename
    const fileName = `${data.personalInfo.name.replace(/\s+/g, '_')}_Frontend_Developer_Resume.pdf`;
    doc.save(fileName);

    return Promise.resolve();
  } catch (error) {
    console.error('Error generating PDF resume:', error);
    throw new Error('Failed to generate PDF resume');
  }
};

/**
 * Generate Word Document Resume
 * 
 * This function creates a professional ATS-friendly Word document resume using docx library
 * The document structure is optimized for ATS systems with:
 * - Standard formatting
 * - Clear section headers
 * - Proper paragraph structure
 * - Professional styling
 * 
 * @param {Object} data - Resume data object
 * @returns {Promise} - Promise that resolves when Word document is generated and downloaded
 */
export const generateWordResume = async (data = resumeData) => {
  try {
    // Create a new document with professional settings
    const doc = new Document({
      creator: data.personalInfo.name,
      title: `${data.personalInfo.name} - Frontend Developer Resume`,
      description: 'Professional Frontend Developer Resume',
      styles: {
        paragraphStyles: [
          {
            id: 'heading1',
            name: 'Heading 1',
            basedOn: 'Normal',
            next: 'Normal',
            run: {
              size: 28,
              bold: true,
              color: '000000',
            },
            paragraph: {
              spacing: { after: 200 },
            },
          },
          {
            id: 'heading2',
            name: 'Heading 2',
            basedOn: 'Normal',
            next: 'Normal',
            run: {
              size: 24,
              bold: true,
              color: '000000',
            },
            paragraph: {
              spacing: { before: 200, after: 100 },
            },
          },
        ],
      },
      sections: [
        {
          properties: {},
          children: [
            // Header - Name and Title
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: data.personalInfo.name.toUpperCase(),
                  bold: true,
                  size: 32,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: data.personalInfo.title,
                  size: 24,
                }),
              ],
            }),

            // Contact Information
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `${data.personalInfo.email} | ${data.personalInfo.phone} | ${data.personalInfo.location}`,
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `LinkedIn: ${data.personalInfo.naukari} | GitHub: ${data.personalInfo.github}`,
                  size: 20,
                }),
              ],
            }),

            // Professional Summary Section
            new Paragraph({
              children: [
                new TextRun({
                  text: 'PROFESSIONAL SUMMARY',
                  bold: true,
                  size: 24,
                  underline: { type: UnderlineType.SINGLE },
                }),
              ],
              spacing: { before: 400, after: 200 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: data.summary,
                  size: 22,
                }),
              ],
              spacing: { after: 200 },
            }),

            // Technical Skills Section
            new Paragraph({
              children: [
                new TextRun({
                  text: 'TECHNICAL SKILLS',
                  bold: true,
                  size: 24,
                  underline: { type: UnderlineType.SINGLE },
                }),
              ],
              spacing: { before: 300, after: 200 },
            }),

            // Add skills by category
            ...Object.entries(data.skills).map(([category, skillList]) =>
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${category}: `,
                    bold: true,
                    size: 22,
                  }),
                  new TextRun({
                    text: skillList.join(', '),
                    size: 22,
                  }),
                ],
                spacing: { after: 100 },
              })
            ),

            // Professional Experience Section
            new Paragraph({
              children: [
                new TextRun({
                  text: 'PROFESSIONAL EXPERIENCE',
                  bold: true,
                  size: 24,
                  underline: { type: UnderlineType.SINGLE },
                }),
              ],
              spacing: { before: 300, after: 200 },
            }),

            // Add each work experience
            ...data.experience.flatMap((exp) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${exp.title} - ${exp.company}`,
                    bold: true,
                    size: 22,
                  }),
                  new TextRun({
                    text: ` | ${exp.location} | ${exp.period}`,
                    size: 22,
                  }),
                ],
                spacing: { before: 200, after: 100 },
              }),
              ...exp.achievements.map(achievement =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `• ${achievement}`,
                      size: 22,
                    }),
                  ],
                  spacing: { after: 50 },
                })
              ),
            ]),

            // Education Section
            new Paragraph({
              children: [
                new TextRun({
                  text: 'EDUCATION',
                  bold: true,
                  size: 24,
                  underline: { type: UnderlineType.SINGLE },
                }),
              ],
              spacing: { before: 300, after: 200 },
            }),

            ...data.education.flatMap((edu) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: edu.degree,
                    bold: true,
                    size: 22,
                  }),
                  new TextRun({
                    text: ` | ${edu.period}`,
                    size: 22,
                  }),
                ],
                spacing: { after: 50 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: edu.school,
                    size: 22,
                  }),
                ],
                spacing: { after: 50 },
              }),
              ...(edu.details ? [new Paragraph({
                children: [
                  new TextRun({
                    text: edu.details,
                    size: 20,
                  }),
                ],
                spacing: { after: 100 },
              })] : []),
            ]),

            // Key Projects Section
            new Paragraph({
              children: [
                new TextRun({
                  text: 'PROJECTS',
                  bold: true,
                  size: 24,
                  underline: { type: UnderlineType.SINGLE },
                }),
              ],
              spacing: { before: 300, after: 200 },
            }),

            // Client Projects Subsection
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Client Projects:',
                  bold: true,
                  size: 22,
                }),
              ],
              spacing: { after: 100 },
            }),

            ...data.projects.filter(p => p.type === 'client').flatMap((project) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${project.name} - ${project.company}`,
                    bold: true,
                    size: 20,
                  }),
                ],
                spacing: { after: 50 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Technologies: ${project.technologies}`,
                    italic: true,
                    size: 18,
                  }),
                ],
                spacing: { after: 50 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: project.description,
                    size: 20,
                  }),
                ],
                spacing: { after: 100 },
              }),
            ]),

            // Personal Projects Subsection
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Personal Projects:',
                  bold: true,
                  size: 22,
                }),
              ],
              spacing: { before: 100, after: 100 },
            }),

            ...data.projects.filter(p => p.type === 'personal').flatMap((project) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: project.name,
                    bold: true,
                    size: 20,
                  }),
                ],
                spacing: { after: 50 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Technologies: ${project.technologies}`,
                    italic: true,
                    size: 18,
                  }),
                ],
                spacing: { after: 50 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: project.description,
                    size: 20,
                  }),
                ],
                spacing: { after: 150 },
              }),
            ]),

            // Certifications Section
            ...(data.certifications && data.certifications.length > 0 ? [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'CERTIFICATIONS',
                    bold: true,
                    size: 24,
                    underline: { type: UnderlineType.SINGLE },
                  }),
                ],
                spacing: { before: 300, after: 200 },
              }),
              ...data.certifications.map(cert =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `• ${cert}`,
                      size: 22,
                    }),
                  ],
                  spacing: { after: 100 },
                })
              ),
            ] : []),

            // Interests Section
            ...(data.interests && data.interests.length > 0 ? [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'INTERESTS',
                    bold: true,
                    size: 24,
                    underline: { type: UnderlineType.SINGLE },
                  }),
                ],
                spacing: { before: 300, after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: data.interests.join(', '),
                    size: 22,
                  }),
                ],
                spacing: { after: 200 },
              }),
            ] : []),

            // Languages Section
            ...(data.languages && data.languages.length > 0 ? [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'LANGUAGES',
                    bold: true,
                    size: 24,
                    underline: { type: UnderlineType.SINGLE },
                  }),
                ],
                spacing: { before: 300, after: 200 },
              }),
              ...data.languages.map(lang =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${lang.language}: `,
                      bold: true,
                      size: 22,
                    }),
                    new TextRun({
                      text: lang.proficiency,
                      size: 22,
                    }),
                  ],
                  spacing: { after: 100 },
                })
              ),
            ] : []),
          ],
        },
      ],
    });

    // Generate the document blob directly (browser-compatible)
    const blob = await Packer.toBlob(doc);

    const fileName = `${data.personalInfo.name.replace(/\s+/g, '_')}_Frontend_Developer_Resume.docx`;
    saveAs(blob, fileName);

    return Promise.resolve();
  } catch (error) {
    console.error('Error generating Word resume:', error);
    throw new Error('Failed to generate Word resume');
  }
};