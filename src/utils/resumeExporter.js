import jsPDF from 'jspdf'
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx'
import { saveAs } from 'file-saver'

export async function exportToPDF(resumeData) {
  const doc = new jsPDF()
  const margin = 20
  const pageWidth = doc.internal.pageSize.width
  const pageHeight = doc.internal.pageSize.height
  const lineHeight = 5
  let yPosition = margin

  // Helper function to add text with word wrapping
  const addText = (text, fontSize = 10, fontStyle = 'normal', color = [0, 0, 0], indent = 0) => {
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', fontStyle)
    doc.setTextColor(color[0], color[1], color[2])
    
    const maxWidth = pageWidth - 2 * margin - indent
    const lines = doc.splitTextToSize(text, maxWidth)
    
    // Check if we need a new page
    if (yPosition + lines.length * lineHeight > pageHeight - margin) {
      doc.addPage()
      yPosition = margin
    }
    
    doc.text(lines, margin + indent, yPosition)
    yPosition += lines.length * lineHeight + 2
  }

  const addSection = (title) => {
    if (yPosition > margin + 20) {
      yPosition += 8 // Add space before section
    }
    
    // Add a horizontal line above section (except for first section)
    if (yPosition > margin + 20) {
      doc.setDrawColor(0, 0, 0)
      doc.setLineWidth(0.5)
      doc.line(margin, yPosition - 4, pageWidth - margin, yPosition - 4)
      yPosition += 4
    }
    
    addText(title.toUpperCase(), 11, 'bold', [0, 0, 0])
    yPosition += 2
  }

  const addBulletPoint = (text) => {
    addText(`• ${text}`, 9, 'normal', [0, 0, 0], 5)
  }

  // Personal Information Header - Centered Layout
  if (resumeData.personalInfo) {
    const { name, email, phone, location, linkedin, website, github } = resumeData.personalInfo
    
    if (name) {
      // Center the name
      doc.setFontSize(16)
      doc.setFont('helvetica', 'bold')
      const nameWidth = doc.getTextWidth(name)
      const nameX = (pageWidth - nameWidth) / 2
      doc.text(name, nameX, yPosition)
      yPosition += 8
    }
    
    // Contact information in centered format
    const contactInfo = []
    if (email) contactInfo.push(email)
    if (phone) contactInfo.push(phone)
    if (location) contactInfo.push(location)
    
    if (contactInfo.length > 0) {
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      const contactText = contactInfo.join(' | ')
      const contactWidth = doc.getTextWidth(contactText)
      const contactX = (pageWidth - contactWidth) / 2
      doc.text(contactText, contactX, yPosition)
      yPosition += 5
    }
    
    // Links in centered format
    const links = []
    if (linkedin) links.push(linkedin)
    if (website) links.push(website)
    if (github) links.push(github)
    
    if (links.length > 0) {
      doc.setFontSize(8)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(0, 0, 200)
      const linksText = links.join(' | ')
      const linksWidth = doc.getTextWidth(linksText)
      const linksX = (pageWidth - linksWidth) / 2
      doc.text(linksText, linksX, yPosition)
      yPosition += 8
      doc.setTextColor(0, 0, 0) // Reset color
    }
  }

  // Professional Summary
  if (resumeData.summary) {
    addSection('PROFESSIONAL SUMMARY')
    addText(resumeData.summary, 10, 'normal')
  }

  // Technical Skills - Format as categories
  if (resumeData.skills && resumeData.skills.length > 0) {
    addSection('TECHNICAL SKILLS')
    
    // Group skills by categories (if possible) or display as comma-separated list
    const skillsText = resumeData.skills.join(', ')
    addText(skillsText, 10, 'normal')
  }

  // Professional Experience
  if (resumeData.experience && resumeData.experience.length > 0) {
    addSection('PROFESSIONAL EXPERIENCE')
    
    resumeData.experience.forEach((exp, index) => {
      // Job title and company on same line
      if (exp.position && exp.company) {
        const jobLine = `${exp.position} | ${exp.company}`
        addText(jobLine, 11, 'bold', [0, 0, 0])
      }
      
      // Duration and location on next line
      const detailsLine = []
      if (exp.duration) detailsLine.push(exp.duration)
      if (exp.location) detailsLine.push(exp.location)
      
      if (detailsLine.length > 0) {
        addText(detailsLine.join(' | '), 9, 'italic', [60, 60, 60])
      }
      
      if (exp.description) {
        // Split description into bullet points if it contains bullet characters
        const descriptions = exp.description.split(/[•·\n]/).filter(desc => desc.trim())
        descriptions.forEach(desc => {
          if (desc.trim()) {
            addBulletPoint(desc.trim())
          }
        })
      }
      
      if (index < resumeData.experience.length - 1) {
        yPosition += 4
      }
    })
  }

  // Projects
  if (resumeData.projects && resumeData.projects.length > 0) {
    addSection('PROJECTS')
    
    resumeData.projects.forEach((project, index) => {
      if (project.name) {
        addText(project.name, 10, 'bold', [0, 0, 0])
      }
      
      if (project.technologies) {
        addText(`Technologies: ${project.technologies}`, 9, 'italic', [60, 60, 60])
      }
      
      if (project.description) {
        addText(project.description, 9, 'normal')
      }
      
      const projectLinks = []
      if (project.url) projectLinks.push(`Demo: ${project.url}`)
      if (project.github) projectLinks.push(`Code: ${project.github}`)
      
      if (projectLinks.length > 0) {
        addText(projectLinks.join(' | '), 8, 'normal', [0, 0, 200])
      }
      
      if (index < resumeData.projects.length - 1) {
        yPosition += 3
      }
    })
  }

  // Education
  if (resumeData.education && resumeData.education.length > 0) {
    addSection('EDUCATION')
    
    resumeData.education.forEach((edu, index) => {
      if (edu.degree && edu.school) {
        const eduLine = `${edu.degree} | ${edu.school}`
        addText(eduLine, 10, 'bold', [0, 0, 0])
      }
      
      const eduDetails = []
      if (edu.year) eduDetails.push(edu.year)
      if (edu.gpa) eduDetails.push(`GPA: ${edu.gpa}`)
      
      if (eduDetails.length > 0) {
        addText(eduDetails.join(' | '), 9, 'normal', [60, 60, 60])
      }
      
      if (index < resumeData.education.length - 1) {
        yPosition += 3
      }
    })
  }

  // Certifications
  if (resumeData.certifications && resumeData.certifications.length > 0) {
    addSection('CERTIFICATIONS')
    
    resumeData.certifications.forEach((cert, index) => {
      const certLine = []
      if (cert.name) certLine.push(cert.name)
      if (cert.issuer) certLine.push(cert.issuer)
      if (cert.year) certLine.push(cert.year)
      
      if (certLine.length > 0) {
        addText(certLine.join(' | '), 9, 'normal')
      }
    })
  }

  // Key Achievements
  if (resumeData.achievements && resumeData.achievements.length > 0) {
    addSection('KEY ACHIEVEMENTS')
    
    resumeData.achievements.forEach(achievement => {
      addBulletPoint(achievement)
    })
  }

  // Languages
  if (resumeData.languages && resumeData.languages.length > 0) {
    addSection('LANGUAGES')
    
    const languagesList = resumeData.languages.map(lang => `${lang.language} (${lang.proficiency})`).join(', ')
    addText(languagesList, 9, 'normal')
  }

  // Interests (only if space allows)
  if (resumeData.interests && resumeData.interests.length > 0 && yPosition < pageHeight - 50) {
    addSection('INTERESTS')
    addText(resumeData.interests.join(', '), 9, 'normal')
  }

  // Save the PDF
  const fileName = `${resumeData.personalInfo?.name || 'Resume'}_ATS_Optimized.pdf`
  doc.save(fileName)
}

export async function exportToWord(resumeData) {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: 720,    // 0.5 inch
            right: 720,  // 0.5 inch
            bottom: 720, // 0.5 inch
            left: 720,   // 0.5 inch
          },
        },
      },
      children: createWordContent(resumeData)
    }]
  })

  const blob = await Packer.toBlob(doc)
  const fileName = `${resumeData.personalInfo?.name || 'Resume'}_ATS_Optimized.docx`
  saveAs(blob, fileName)
}

function createWordContent(resumeData) {
  const content = []

  // Personal Information Header - Centered
  if (resumeData.personalInfo) {
    const { name, email, phone, location, linkedin, website, github } = resumeData.personalInfo
    
    if (name) {
      content.push(
        new Paragraph({
          children: [
            new TextRun({
              text: name,
              bold: true,
              size: 28,
              color: "000000"
            })
          ],
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 }
        })
      )
    }
    
    // Contact information
    const contactInfo = []
    if (email) contactInfo.push(email)
    if (phone) contactInfo.push(phone)
    if (location) contactInfo.push(location)
    
    if (contactInfo.length > 0) {
      content.push(
        new Paragraph({
          children: [
            new TextRun({
              text: contactInfo.join(' | '),
              size: 18,
              color: "404040"
            })
          ],
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 }
        })
      )
    }
    
    // Links
    const links = []
    if (linkedin) links.push(linkedin)
    if (website) links.push(website)
    if (github) links.push(github)
    
    if (links.length > 0) {
      content.push(
        new Paragraph({
          children: [
            new TextRun({
              text: links.join(' | '),
              size: 16,
              color: "0000CC"
            })
          ],
          alignment: AlignmentType.CENTER,
          spacing: { after: 300 }
        })
      )
    }
  }

  // Helper function to add section headers with horizontal line
  const addSectionHeader = (title) => {
    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: title.toUpperCase(),
            bold: true,
            size: 22,
            color: "000000"
          })
        ],
        spacing: { before: 200, after: 100 },
        border: {
          bottom: {
            color: "000000",
            space: 1,
            style: "single",
            size: 6
          }
        }
      })
    )
  }

  // Professional Summary
  if (resumeData.summary) {
    addSectionHeader('PROFESSIONAL SUMMARY')
    
    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: resumeData.summary,
            size: 20
          })
        ],
        spacing: { after: 300 }
      })
    )
  }

  // Technical Skills
  if (resumeData.skills && resumeData.skills.length > 0) {
    addSectionHeader('TECHNICAL SKILLS')
    
    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: resumeData.skills.join(', '),
            size: 20
          })
        ],
        spacing: { after: 300 }
      })
    )
  }

  // Professional Experience
  if (resumeData.experience && resumeData.experience.length > 0) {
    addSectionHeader('PROFESSIONAL EXPERIENCE')
    
    resumeData.experience.forEach((exp, index) => {
      // Job title and company
      if (exp.position && exp.company) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${exp.position} | ${exp.company}`,
                bold: true,
                size: 22,
                color: "000000"
              })
            ],
            spacing: { before: 100, after: 50 }
          })
        )
      }
      
      // Duration and location
      const detailsLine = []
      if (exp.duration) detailsLine.push(exp.duration)
      if (exp.location) detailsLine.push(exp.location)
      
      if (detailsLine.length > 0) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: detailsLine.join(' | '),
                italics: true,
                size: 18,
                color: "404040"
              })
            ],
            spacing: { after: 100 }
          })
        )
      }
      
      if (exp.description) {
        // Split description into bullet points
        const descriptions = exp.description.split(/[•·\n]/).filter(desc => desc.trim())
        descriptions.forEach(desc => {
          if (desc.trim()) {
            content.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: `• ${desc.trim()}`,
                    size: 20
                  })
                ],
                spacing: { after: 50 }
              })
            )
          }
        })
      }
      
      if (index < resumeData.experience.length - 1) {
        content.push(
          new Paragraph({
            children: [new TextRun({ text: "", size: 20 })],
            spacing: { after: 200 }
          })
        )
      }
    })
  }

  // Projects
  if (resumeData.projects && resumeData.projects.length > 0) {
    addSectionHeader('PROJECTS')
    
    resumeData.projects.forEach((project, index) => {
      if (project.name) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: project.name,
                bold: true,
                size: 20,
                color: "000000"
              })
            ],
            spacing: { before: 100, after: 50 }
          })
        )
      }
      
      if (project.technologies) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `Technologies: ${project.technologies}`,
                italics: true,
                size: 18,
                color: "404040"
              })
            ],
            spacing: { after: 50 }
          })
        )
      }
      
      if (project.description) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: project.description,
                size: 18
              })
            ],
            spacing: { after: 100 }
          })
        )
      }
      
      const projectLinks = []
      if (project.url) projectLinks.push(`Demo: ${project.url}`)
      if (project.github) projectLinks.push(`Code: ${project.github}`)
      
      if (projectLinks.length > 0) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: projectLinks.join(' | '),
                size: 16,
                color: "0000CC"
              })
            ],
            spacing: { after: index < resumeData.projects.length - 1 ? 200 : 300 }
          })
        )
      }
    })
  }

  // Education
  if (resumeData.education && resumeData.education.length > 0) {
    addSectionHeader('EDUCATION')
    
    resumeData.education.forEach((edu, index) => {
      if (edu.degree && edu.school) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${edu.degree} | ${edu.school}`,
                bold: true,
                size: 20,
                color: "000000"
              })
            ],
            spacing: { before: 100, after: 50 }
          })
        )
      }
      
      const eduDetails = []
      if (edu.year) eduDetails.push(edu.year)
      if (edu.gpa) eduDetails.push(`GPA: ${edu.gpa}`)
      
      if (eduDetails.length > 0) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: eduDetails.join(' | '),
                size: 18,
                color: "404040"
              })
            ],
            spacing: { after: index < resumeData.education.length - 1 ? 200 : 300 }
          })
        )
      }
    })
  }

  // Certifications
  if (resumeData.certifications && resumeData.certifications.length > 0) {
    addSectionHeader('CERTIFICATIONS')
    
    resumeData.certifications.forEach((cert, index) => {
      const certLine = []
      if (cert.name) certLine.push(cert.name)
      if (cert.issuer) certLine.push(cert.issuer)
      if (cert.year) certLine.push(cert.year)
      
      if (certLine.length > 0) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: certLine.join(' | '),
                size: 18
              })
            ],
            spacing: { after: 100 }
          })
        )
      }
    })
  }

  // Key Achievements
  if (resumeData.achievements && resumeData.achievements.length > 0) {
    addSectionHeader('KEY ACHIEVEMENTS')
    
    resumeData.achievements.forEach(achievement => {
      content.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `• ${achievement}`,
              size: 18
            })
          ],
          spacing: { after: 50 }
        })
      )
    })
  }

  // Languages
  if (resumeData.languages && resumeData.languages.length > 0) {
    addSectionHeader('LANGUAGES')
    
    const languagesList = resumeData.languages.map(lang => `${lang.language} (${lang.proficiency})`).join(', ')
    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: languagesList,
            size: 18
          })
        ],
        spacing: { after: 300 }
      })
    )
  }

  // Interests
  if (resumeData.interests && resumeData.interests.length > 0) {
    addSectionHeader('INTERESTS')
    
    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: resumeData.interests.join(', '),
            size: 18
          })
        ],
        spacing: { after: 100 }
      })
    )
  }

  return content
}