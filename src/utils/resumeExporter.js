import jsPDF from 'jspdf'
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx'
import { saveAs } from 'file-saver'
import { ImageRun } from 'docx'

export async function exportToPDF(resumeData) {
  const doc = new jsPDF()
  const margin = 20
  const pageWidth = doc.internal.pageSize.width
  const pageHeight = doc.internal.pageSize.height
  const lineHeight = 6
  let yPosition = margin

  // Helper function to add text with word wrapping
  const addText = (text, fontSize = 10, fontStyle = 'normal', color = [0, 0, 0]) => {
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', fontStyle)
    doc.setTextColor(color[0], color[1], color[2])

    const lines = doc.splitTextToSize(text, pageWidth - 2 * margin)

    // Check if we need a new page
    if (yPosition + lines.length * lineHeight > pageHeight - margin) {
      doc.addPage()
      yPosition = margin
    }

    doc.text(lines, margin, yPosition)
    yPosition += lines.length * lineHeight + 2
  }

  const addSection = (title) => {
    if (yPosition > margin + 20) {
      yPosition += 5 // Add space before section
    }
    addText(title, 14, 'bold', [37, 99, 235]) // Blue color for sections
    yPosition += 3
  }
  //profile photo
  if (resumeData.personalInfo?.profilePhoto) {
    doc.addImage(
      resumeData.personalInfo.profilePhoto,
      'JPEG', // or 'PNG' depending on the file type
      margin, yPosition, 40, 40 // x, y, width, height
    )
    yPosition += 45
  }
  // Personal Information
  if (resumeData.personalInfo) {
    const { name, email, phone, location, linkedin, website } = resumeData.personalInfo

    if (name) {
      addText(name, 20, 'bold', [30, 41, 59]) // Dark color for name
      yPosition += 5
    }

    const contactInfo = []
    if (email) contactInfo.push(email)
    if (phone) contactInfo.push(phone)
    if (location) contactInfo.push(location)

    if (contactInfo.length > 0) {
      addText(contactInfo.join(' | '), 10, 'normal', [100, 116, 139])
    }

    const links = []
    if (linkedin) links.push(linkedin)
    if (website) links.push(website)

    if (links.length > 0) {
      addText(links.join(' | '), 9, 'normal', [37, 99, 235])
    }

    yPosition += 10
  }

  // Professional Summary
  if (resumeData.summary) {
    addSection('PROFESSIONAL SUMMARY')
    addText(resumeData.summary, 10, 'normal')
  }

  // Work Experience
  if (resumeData.experience && resumeData.experience.length > 0) {
    addSection('WORK EXPERIENCE')

    resumeData.experience.forEach((exp, index) => {
      if (exp.position) {
        addText(exp.position, 12, 'bold', [30, 41, 59])
      }

      const companyLine = []
      if (exp.company) companyLine.push(exp.company)
      if (exp.location) companyLine.push(exp.location)
      if (exp.duration) companyLine.push(exp.duration)

      if (companyLine.length > 0) {
        addText(companyLine.join(' | '), 10, 'italic', [100, 116, 139])
      }

      if (exp.description) {
        addText(exp.description, 10, 'normal')
      }

      if (index < resumeData.experience.length - 1) {
        yPosition += 3
      }
    })
  }

  // Education
  if (resumeData.education && resumeData.education.length > 0) {
    addSection('EDUCATION')

    resumeData.education.forEach((edu, index) => {
      if (edu.degree) {
        addText(edu.degree, 11, 'bold', [30, 41, 59])
      }

      const eduLine = []
      if (edu.school) eduLine.push(edu.school)
      if (edu.year) eduLine.push(edu.year)
      if (edu.gpa) eduLine.push(`GPA: ${edu.gpa}`)

      if (eduLine.length > 0) {
        addText(eduLine.join(' | '), 10, 'normal', [100, 116, 139])
      }

      if (index < resumeData.education.length - 1) {
        yPosition += 3
      }
    })
  }

  // Skills
  if (resumeData.skills && resumeData.skills.length > 0) {
    addSection('SKILLS')
    addText(resumeData.skills.join(' • '), 10, 'normal')
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
        addText(certLine.join(' | '), 10, 'normal')
      }
    })
  }

  // Projects
  if (resumeData.projects && resumeData.projects.length > 0) {
    addSection('PROJECTS')

    resumeData.projects.forEach((project, index) => {
      if (project.name) {
        addText(project.name, 11, 'bold', [30, 41, 59])
      }

      if (project.description) {
        addText(project.description, 10, 'normal')
      }

      const projectLinks = []
      if (project.url) projectLinks.push(`Demo: ${project.url}`)
      if (project.github) projectLinks.push(`Code: ${project.github}`)

      if (projectLinks.length > 0) {
        addText(projectLinks.join(' | '), 9, 'normal', [37, 99, 235])
      }

      if (index < resumeData.projects.length - 1) {
        yPosition += 3
      }
    })
  }

  // Save the PDF
  const fileName = `${resumeData.personalInfo?.name || 'Resume'}_ATS_Optimized.pdf`
  doc.save(fileName)
}

export async function exportToWord(resumeData) {
  const doc = new Document({
    sections: [{
      properties: {},
      children: createWordContent(resumeData)
    }]
  })

  const blob = await Packer.toBlob(doc)
  const fileName = `${resumeData.personalInfo?.name || 'Resume'}_ATS_Optimized.docx`
  saveAs(blob, fileName)
}

function createWordContent(resumeData) {
  const content = []
  //profile photo
  if (resumeData.personalInfo?.profilePhoto) {
    content.push(
      new Paragraph({
        children: [
          new ImageRun({
            data: resumeData.personalInfo.profilePhoto.split(',')[1], // Remove data:image/...;base64,
            transformation: { width: 80, height: 80 }
          })
        ],
        spacing: { after: 200 }
      })
    )
  }
  // Personal Information
  if (resumeData.personalInfo) {
    const { name, email, phone, location, linkedin, website } = resumeData.personalInfo

    if (name) {
      content.push(
        new Paragraph({
          children: [
            new TextRun({
              text: name,
              bold: true,
              size: 32,
              color: "1E293B"
            })
          ],
          spacing: { after: 200 }
        })
      )
    }

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
              size: 20,
              color: "64748B"
            })
          ],
          spacing: { after: 100 }
        })
      )
    }

    const links = []
    if (linkedin) links.push(linkedin)
    if (website) links.push(website)

    if (links.length > 0) {
      content.push(
        new Paragraph({
          children: [
            new TextRun({
              text: links.join(' | '),
              size: 18,
              color: "2563EB"
            })
          ],
          spacing: { after: 300 }
        })
      )
    }
  }

  // Professional Summary
  if (resumeData.summary) {
    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "PROFESSIONAL SUMMARY",
            bold: true,
            size: 24,
            color: "2563EB"
          })
        ],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      })
    )

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

  // Work Experience
  if (resumeData.experience && resumeData.experience.length > 0) {
    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "WORK EXPERIENCE",
            bold: true,
            size: 24,
            color: "2563EB"
          })
        ],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      })
    )

    resumeData.experience.forEach((exp, index) => {
      if (exp.position) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: exp.position,
                bold: true,
                size: 22,
                color: "1E293B"
              })
            ],
            spacing: { before: 100, after: 50 }
          })
        )
      }

      const companyLine = []
      if (exp.company) companyLine.push(exp.company)
      if (exp.location) companyLine.push(exp.location)
      if (exp.duration) companyLine.push(exp.duration)

      if (companyLine.length > 0) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: companyLine.join(' | '),
                italics: true,
                size: 20,
                color: "64748B"
              })
            ],
            spacing: { after: 100 }
          })
        )
      }

      if (exp.description) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: exp.description,
                size: 20
              })
            ],
            spacing: { after: index < resumeData.experience.length - 1 ? 200 : 300 }
          })
        )
      }
    })
  }

  // Education
  if (resumeData.education && resumeData.education.length > 0) {
    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "EDUCATION",
            bold: true,
            size: 24,
            color: "2563EB"
          })
        ],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      })
    )

    resumeData.education.forEach((edu, index) => {
      if (edu.degree) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: edu.degree,
                bold: true,
                size: 21,
                color: "1E293B"
              })
            ],
            spacing: { before: 100, after: 50 }
          })
        )
      }

      const eduLine = []
      if (edu.school) eduLine.push(edu.school)
      if (edu.year) eduLine.push(edu.year)
      if (edu.gpa) eduLine.push(`GPA: ${edu.gpa}`)

      if (eduLine.length > 0) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: eduLine.join(' | '),
                size: 20,
                color: "64748B"
              })
            ],
            spacing: { after: index < resumeData.education.length - 1 ? 200 : 300 }
          })
        )
      }
    })
  }

  // Skills
  if (resumeData.skills && resumeData.skills.length > 0) {
    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "SKILLS",
            bold: true,
            size: 24,
            color: "2563EB"
          })
        ],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      })
    )

    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: resumeData.skills.join(' • '),
            size: 20
          })
        ],
        spacing: { after: 300 }
      })
    )
  }

  // Certifications
  if (resumeData.certifications && resumeData.certifications.length > 0) {
    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "CERTIFICATIONS",
            bold: true,
            size: 24,
            color: "2563EB"
          })
        ],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      })
    )

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
                size: 20
              })
            ],
            spacing: { after: 100 }
          })
        )
      }
    })
  }

  // Projects
  if (resumeData.projects && resumeData.projects.length > 0) {
    content.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "PROJECTS",
            bold: true,
            size: 24,
            color: "2563EB"
          })
        ],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      })
    )

    resumeData.projects.forEach((project, index) => {
      if (project.name) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: project.name,
                bold: true,
                size: 21,
                color: "1E293B"
              })
            ],
            spacing: { before: 100, after: 50 }
          })
        )
      }

      if (project.description) {
        content.push(
          new Paragraph({
            children: [
              new TextRun({
                text: project.description,
                size: 20
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
                size: 18,
                color: "2563EB"
              })
            ],
            spacing: { after: index < resumeData.projects.length - 1 ? 200 : 100 }
          })
        )
      }
    })
  }

  return content
}