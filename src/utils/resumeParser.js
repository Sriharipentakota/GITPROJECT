import * as pdfjsLib from 'pdfjs-dist'
import mammoth from 'mammoth'
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.js?url'
// filepath: src/utils/resumeParser.js
import { getDocument } from "pdfjs-dist";

import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.js?url'
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

export async function parseResumeFile(file) {
  const fileType = file.type
  let text = ''

  try {
    // Accept PDF by MIME or extension
    if (
      fileType === 'application/pdf' ||
      file.name.toLowerCase().endsWith('.pdf')
    ) {
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await getDocument({ data: arrayBuffer }).promise

      // Extract text from all pages
      const textPromises = []
      for (let i = 1; i <= pdf.numPages; i++) {
        textPromises.push(extractTextFromPage(pdf, i))
      }

      const pageTexts = await Promise.all(textPromises)
      text = pageTexts.join('\n')
    } else if (
      fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      fileType === 'application/msword'
    ) {
      const arrayBuffer = await file.arrayBuffer()
      const result = await mammoth.extractRawText({ arrayBuffer })
      text = result.value
    } else {
      throw new Error('Unsupported file format')
    }

    // --- Resume validation: check for key sections ---
    const lowerText = text.toLowerCase()
    const sectionKeywords = [
      'experience',
      'education',
      'skills',
      'summary',
      'profile',
      'objective',
      'certification',
      'project'
    ]
    // Count how many section keywords are present
    const foundSections = sectionKeywords.filter(keyword => lowerText.includes(keyword))
    if (foundSections.length < 2) {
      throw new Error('The uploaded file does not appear to be a resume. Please upload a valid resume document.')
    }
    // --- End resume validation ---

    return parseResumeText(text)
  } catch (error) {
    console.error('Error parsing resume:', error)
    throw new Error(error.message || 'Failed to parse resume file')
  }
}
async function extractTextFromPage(pdf, pageNumber) {
  const page = await pdf.getPage(pageNumber)
  const textContent = await page.getTextContent()
  return textContent.items.map(item => item.str).join(' ')
}

function parseResumeText(text) {
  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0)

  const resumeData = {
    personalInfo: extractPersonalInfo(lines, text),
    summary: extractSummary(lines),
    experience: extractExperience(lines),
    education: extractEducation(lines),
    skills: extractSkills(lines),
    certifications: extractCertifications(lines),
    projects: extractProjects(lines)
  }

  return resumeData
}

// function extractPersonalInfo(lines, text) {
//   const personalInfo = {
//     name: '',
//     email: '',
//     phone: '',
//     location: '',
//     linkedin: '',
//     website: ''
//   }

//   // Extract name (usually first line or first substantial line)
//   personalInfo.name = lines[0] || ''

//   // Extract email
//   const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
//   const emailMatch = text.match(emailRegex)
//   if (emailMatch) {
//     personalInfo.email = emailMatch[0]
//   }

//   // Extract phone
//   const phoneRegex = /(\+?1?[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/
//   const phoneMatch = text.match(phoneRegex)
//   if (phoneMatch) {
//     personalInfo.phone = phoneMatch[0]
//   }

//   // Extract LinkedIn
//   const linkedinRegex = /linkedin\.com\/in\/[\w-]+/i
//   const linkedinMatch = text.match(linkedinRegex)
//   if (linkedinMatch) {
//     personalInfo.linkedin = 'https://' + linkedinMatch[0]
//   }

//   // Extract website/portfolio
//   const websiteRegex = /https?:\/\/[^\s]+/g
//   const websiteMatches = text.match(websiteRegex)
//   if (websiteMatches) {
//     const nonLinkedInUrls = websiteMatches.filter(url => !url.includes('linkedin.com'))
//     if (nonLinkedInUrls.length > 0) {
//       personalInfo.website = nonLinkedInUrls[0]
//     }
//   }

//   return personalInfo
// }
function extractPersonalInfo(lines, text) {
  const personalInfo = {
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: ''
  }

  // Improved name extraction
  const sectionKeywords = [
    'summary', 'profile', 'objective', 'experience', 'education', 'skills', 'certification', 'project'
  ]
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
  const phoneRegex = /(\+?1?[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/

  personalInfo.name = lines.find(line =>
    line.length > 1 &&
    !emailRegex.test(line) &&
    !phoneRegex.test(line) &&
    !sectionKeywords.some(keyword => line.toLowerCase().includes(keyword))
  ) || ''

  // Extract email
  const emailMatch = text.match(emailRegex)
  if (emailMatch) {
    personalInfo.email = emailMatch[0]
  }

  // Extract phone
  const phoneMatch = text.match(phoneRegex)
  if (phoneMatch) {
    personalInfo.phone = phoneMatch[0]
  }

  // Extract LinkedIn
  const linkedinRegex = /linkedin\.com\/in\/[\w-]+/i
  const linkedinMatch = text.match(linkedinRegex)
  if (linkedinMatch) {
    personalInfo.linkedin = 'https://' + linkedinMatch[0]
  }

  // Extract website/portfolio
  const websiteRegex = /https?:\/\/[^\s]+/g
  const websiteMatches = text.match(websiteRegex)
  if (websiteMatches) {
    const nonLinkedInUrls = websiteMatches.filter(url => !url.includes('linkedin.com'))
    if (nonLinkedInUrls.length > 0) {
      personalInfo.website = nonLinkedInUrls[0]
    }
  }

  return personalInfo
}

function extractSummary(lines) {
  const summaryKeywords = ['summary', 'profile', 'objective', 'about']
  const summaryIndex = lines.findIndex(line =>
    summaryKeywords.some(keyword => line.toLowerCase().includes(keyword))
  )

  if (summaryIndex === -1) return ''

  // Find the next section or take next 3-5 lines
  let endIndex = summaryIndex + 1
  while (endIndex < lines.length && endIndex < summaryIndex + 6) {
    const line = lines[endIndex].toLowerCase()
    if (line.includes('experience') || line.includes('education') || line.includes('skills')) {
      break
    }
    endIndex++
  }

  return lines.slice(summaryIndex + 1, endIndex).join(' ')
}

function extractExperience(lines) {
  const experiences = []
  const experienceKeywords = ['experience', 'employment', 'work history', 'professional experience']

  const startIndex = lines.findIndex(line =>
    experienceKeywords.some(keyword => line.toLowerCase().includes(keyword))
  )

  if (startIndex === -1) return experiences

  let currentExperience = null
  let inExperienceSection = true

  for (let i = startIndex + 1; i < lines.length && inExperienceSection; i++) {
    const line = lines[i]
    const lowerLine = line.toLowerCase()

    // Check if we've reached another section
    if (lowerLine.includes('education') || lowerLine.includes('skills') ||
      lowerLine.includes('certification') || lowerLine.includes('project')) {
      inExperienceSection = false
      break
    }

    // Check if this line looks like a job title/company
    if (line.length > 0 && !line.startsWith(' ') && !line.startsWith('\t')) {
      if (currentExperience) {
        experiences.push(currentExperience)
      }
      currentExperience = {
        position: line,
        company: '',
        duration: '',
        location: '',
        description: ''
      }
    } else if (currentExperience && line.length > 0) {
      // Add to description
      currentExperience.description += (currentExperience.description ? ' ' : '') + line
    }
  }

  if (currentExperience) {
    experiences.push(currentExperience)
  }

  return experiences
}

function extractEducation(lines) {
  const education = []
  const educationKeywords = ['education', 'academic', 'degree', 'university', 'college']

  const startIndex = lines.findIndex(line =>
    educationKeywords.some(keyword => line.toLowerCase().includes(keyword))
  )

  if (startIndex === -1) return education

  let currentEducation = null
  let inEducationSection = true

  for (let i = startIndex + 1; i < lines.length && inEducationSection; i++) {
    const line = lines[i]
    const lowerLine = line.toLowerCase()

    // Check if we've reached another section
    if (lowerLine.includes('experience') || lowerLine.includes('skills') ||
      lowerLine.includes('certification') || lowerLine.includes('project')) {
      inEducationSection = false
      break
    }

    if (line.length > 0 && !line.startsWith(' ') && !line.startsWith('\t')) {
      if (currentEducation) {
        education.push(currentEducation)
      }
      currentEducation = {
        degree: line,
        school: '',
        year: '',
        location: '',
        gpa: ''
      }
    }
  }

  if (currentEducation) {
    education.push(currentEducation)
  }

  return education
}

function extractSkills(lines) {
  const skills = []
  const skillsKeywords = ['skills', 'technical skills', 'competencies', 'technologies']

  const startIndex = lines.findIndex(line =>
    skillsKeywords.some(keyword => line.toLowerCase().includes(keyword))
  )

  if (startIndex === -1) return skills

  let inSkillsSection = true

  for (let i = startIndex + 1; i < lines.length && inSkillsSection; i++) {
    const line = lines[i]
    const lowerLine = line.toLowerCase()

    // Check if we've reached another section
    if (lowerLine.includes('experience') || lowerLine.includes('education') ||
      lowerLine.includes('certification') || lowerLine.includes('project')) {
      inSkillsSection = false
      break
    }

    if (line.length > 0) {
      // Split by common separators
      const lineSkills = line.split(/[,•·\|\/]/).map(skill => skill.trim()).filter(skill => skill.length > 0)
      skills.push(...lineSkills)
    }
  }

  return [...new Set(skills)] // Remove duplicates
}

function extractCertifications(lines) {
  const certifications = []
  const certKeywords = ['certification', 'certificate', 'credentials', 'licenses']

  const startIndex = lines.findIndex(line =>
    certKeywords.some(keyword => line.toLowerCase().includes(keyword))
  )

  if (startIndex === -1) return certifications

  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i]
    const lowerLine = line.toLowerCase()

    if (lowerLine.includes('experience') || lowerLine.includes('education') ||
      lowerLine.includes('skills') || lowerLine.includes('project')) {
      break
    }

    if (line.length > 0) {
      certifications.push({
        name: line,
        issuer: '',
        year: '',
        url: ''
      })
    }
  }

  return certifications
}

function extractProjects(lines) {
  const projects = []
  const projectKeywords = ['projects', 'personal projects', 'side projects', 'portfolio']

  const startIndex = lines.findIndex(line =>
    projectKeywords.some(keyword => line.toLowerCase().includes(keyword))
  )

  if (startIndex === -1) return projects

  let currentProject = null

  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i]
    const lowerLine = line.toLowerCase()

    if (lowerLine.includes('experience') || lowerLine.includes('education') ||
      lowerLine.includes('skills') || lowerLine.includes('certification')) {
      break
    }

    if (line.length > 0 && !line.startsWith(' ') && !line.startsWith('\t')) {
      if (currentProject) {
        projects.push(currentProject)
      }
      currentProject = {
        name: line,
        description: '',
        technologies: [],
        url: '',
        github: ''
      }
    } else if (currentProject && line.length > 0) {
      currentProject.description += (currentProject.description ? ' ' : '') + line
    }
  }

  if (currentProject) {
    projects.push(currentProject)
  }

  return projects
}