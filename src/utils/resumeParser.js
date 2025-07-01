export const parseResumeData = (text) => {
  const data = {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    summary: '',
    objective: '',
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    awards: [],
    languages: [],
    interests: [],
    references: '',
    rawText: text
  }

  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0)
  const textLower = text.toLowerCase()

  // Enhanced name extraction
  data.name = extractName(lines)
  
  // Enhanced contact information extraction
  extractContactInfo(text, data)
  
  // Extract professional title
  data.title = extractTitle(lines, data.name)
  
  // Extract all sections with improved parsing
  data.summary = extractSection(text, ['summary', 'profile', 'about me', 'professional summary', 'career summary'])
  data.objective = extractSection(text, ['objective', 'career objective', 'professional objective'])
  
  // Enhanced experience parsing
  const experienceText = extractSection(text, ['experience', 'work experience', 'professional experience', 'employment history', 'work history'])
  if (experienceText) {
    data.experience = parseExperienceSection(experienceText)
  }
  
  // Enhanced education parsing
  const educationText = extractSection(text, ['education', 'academic background', 'educational background', 'qualifications', 'academic qualifications'])
  if (educationText) {
    data.education = parseEducationSection(educationText)
  }
  
  // Enhanced skills parsing
  const skillsText = extractSection(text, ['skills', 'technical skills', 'core competencies', 'competencies', 'technologies', 'expertise'])
  if (skillsText) {
    data.skills = parseSkillsSection(skillsText)
  }
  
  // Projects section
  const projectsText = extractSection(text, ['projects', 'key projects', 'notable projects', 'personal projects', 'academic projects'])
  if (projectsText) {
    data.projects = parseProjectsSection(projectsText)
  }
  
  // Certifications
  const certificationsText = extractSection(text, ['certifications', 'certificates', 'professional certifications', 'licenses'])
  if (certificationsText) {
    data.certifications = parseCertificationsSection(certificationsText)
  }
  
  // Awards and achievements
  const awardsText = extractSection(text, ['awards', 'achievements', 'honors', 'recognition', 'accomplishments'])
  if (awardsText) {
    data.awards = parseAwardsSection(awardsText)
  }
  
  // Languages
  const languagesText = extractSection(text, ['languages', 'language skills', 'linguistic skills'])
  if (languagesText) {
    data.languages = parseLanguagesSection(languagesText)
  }
  
  // Interests/Hobbies
  const interestsText = extractSection(text, ['interests', 'hobbies', 'personal interests', 'activities'])
  if (interestsText) {
    data.interests = parseInterestsSection(interestsText)
  }
  
  // References
  data.references = extractSection(text, ['references', 'professional references'])

  return data
}

const extractName = (lines) => {
  // Look for name in first few lines
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    const line = lines[i]
    if (line.length > 2 && line.length < 50 && 
        !line.includes('@') && !line.includes('http') && 
        !line.match(/^\d/) && !line.includes('|') &&
        line.split(' ').length >= 2 && line.split(' ').length <= 4 &&
        !line.toLowerCase().includes('resume') &&
        !line.toLowerCase().includes('cv')) {
      return line
    }
  }
  return 'Professional Name'
}

const extractContactInfo = (text, data) => {
  // Email
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
  const emailMatch = text.match(emailRegex)
  if (emailMatch) data.email = emailMatch[0]

  // Phone
  const phoneRegex = /(\+?1?[-.\s]?)?(\(?[0-9]{3}\)?[-.\s]?)?[0-9]{3}[-.\s]?[0-9]{4}/g
  const phoneMatch = text.match(phoneRegex)
  if (phoneMatch) data.phone = phoneMatch[0]

  // LinkedIn
  const linkedinRegex = /(linkedin\.com\/in\/[^\s]+|linkedin\.com\/pub\/[^\s]+)/gi
  const linkedinMatch = text.match(linkedinRegex)
  if (linkedinMatch) data.linkedin = linkedinMatch[0]

  // GitHub
  const githubRegex = /(github\.com\/[^\s]+)/gi
  const githubMatch = text.match(githubRegex)
  if (githubMatch) data.github = githubMatch[0]

  // Website
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g
  const urlMatch = text.match(urlRegex)
  if (urlMatch) {
    const nonSocialUrls = urlMatch.filter(url => 
      !url.includes('linkedin') && !url.includes('github')
    )
    if (nonSocialUrls.length > 0) data.website = nonSocialUrls[0]
  }

  // Location
  const locationRegex = /([A-Z][a-z]+,?\s+[A-Z]{2}|[A-Z][a-z]+,\s+[A-Z][a-z]+)/g
  const locationMatch = text.match(locationRegex)
  if (locationMatch) data.location = locationMatch[0]
}

const extractTitle = (lines, name) => {
  const titleKeywords = ['developer', 'engineer', 'manager', 'analyst', 'designer', 'consultant', 'specialist', 'coordinator', 'director', 'lead', 'senior', 'junior', 'architect', 'scientist', 'researcher']
  
  for (let i = 0; i < Math.min(8, lines.length); i++) {
    const line = lines[i]
    if (line === name) continue
    
    const lineLower = line.toLowerCase()
    for (const keyword of titleKeywords) {
      if (lineLower.includes(keyword) && line.length < 80) {
        return line
      }
    }
  }
  return ''
}

const extractSection = (text, keywords) => {
  const textLower = text.toLowerCase()
  
  for (const keyword of keywords) {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i')
    const match = textLower.match(regex)
    if (match) {
      const index = match.index
      const startIndex = text.indexOf('\n', index)
      const endIndex = findNextSectionStart(text, startIndex + 1)
      if (startIndex !== -1) {
        return text.substring(startIndex, endIndex).trim()
      }
    }
  }
  
  return null
}

const findNextSectionStart = (text, startIndex) => {
  const sectionKeywords = [
    'experience', 'education', 'skills', 'projects', 'certifications', 
    'awards', 'languages', 'interests', 'references', 'objective',
    'summary', 'qualifications', 'achievements', 'hobbies'
  ]
  let minIndex = text.length
  
  for (const keyword of sectionKeywords) {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i')
    const match = text.toLowerCase().substring(startIndex).match(regex)
    if (match) {
      const index = startIndex + match.index
      if (index < minIndex) {
        minIndex = index
      }
    }
  }
  
  return minIndex
}

const parseExperienceSection = (section) => {
  const lines = section.split('\n').filter(line => line.trim().length > 0)
  const experiences = []
  let currentExp = null

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    if (isJobTitleLine(line) || isCompanyLine(line)) {
      if (currentExp) {
        experiences.push(currentExp)
      }
      
      const duration = extractDuration(line)
      const parts = line.replace(duration, '').split(/[-–|@]/g).map(p => p.trim())
      
      currentExp = {
        title: parts[0] || line,
        company: parts[1] || '',
        duration: duration,
        location: extractLocationFromLine(line),
        description: []
      }
    } else if (currentExp && line.length > 0) {
      if (line.startsWith('•') || line.startsWith('-') || line.startsWith('*')) {
        currentExp.description.push(line.substring(1).trim())
      } else {
        currentExp.description.push(line)
      }
    }
  }
  
  if (currentExp) {
    experiences.push(currentExp)
  }
  
  return experiences.map(exp => ({
    ...exp,
    description: exp.description.join(' ')
  }))
}

const parseEducationSection = (section) => {
  const lines = section.split('\n').filter(line => line.trim().length > 0)
  const education = []
  let currentEd = null

  for (const line of lines) {
    const trimmedLine = line.trim()
    
    if (isDegreeOrSchoolLine(trimmedLine)) {
      if (currentEd) {
        education.push(currentEd)
      }
      
      const year = extractYear(trimmedLine)
      const parts = trimmedLine.replace(year, '').split(/[-–|@]/g).map(p => p.trim())
      
      currentEd = {
        degree: parts[0] || trimmedLine,
        institution: parts[1] || '',
        year: year,
        gpa: extractGPA(trimmedLine),
        description: []
      }
    } else if (currentEd && trimmedLine.length > 0) {
      currentEd.description.push(trimmedLine)
    }
  }
  
  if (currentEd) {
    education.push(currentEd)
  }
  
  return education.map(ed => ({
    ...ed,
    description: ed.description.join(' ')
  }))
}

const parseSkillsSection = (section) => {
  const skills = []
  const lines = section.split('\n').filter(line => line.trim().length > 0)
  
  for (const line of lines) {
    const trimmedLine = line.trim()
    
    // Split by common delimiters
    const skillsInLine = trimmedLine.split(/[,•·|;\n]/)
      .map(skill => skill.trim().replace(/^[-*•]/, '').trim())
      .filter(skill => skill.length > 0 && skill.length < 50)
    
    skills.push(...skillsInLine)
  }
  
  return [...new Set(skills)].slice(0, 30) // Remove duplicates and limit
}

const parseProjectsSection = (section) => {
  const lines = section.split('\n').filter(line => line.trim().length > 0)
  const projects = []
  let currentProject = null

  for (const line of lines) {
    const trimmedLine = line.trim()
    
    if (isProjectTitleLine(trimmedLine)) {
      if (currentProject) {
        projects.push(currentProject)
      }
      
      currentProject = {
        name: trimmedLine.replace(/^[-•*]/, '').trim(),
        description: [],
        technologies: []
      }
    } else if (currentProject && trimmedLine.length > 0) {
      if (trimmedLine.toLowerCase().includes('technologies') || trimmedLine.toLowerCase().includes('tech stack')) {
        const techMatch = trimmedLine.match(/(?:technologies|tech stack):?\s*(.+)/i)
        if (techMatch) {
          currentProject.technologies = techMatch[1].split(/[,|]/).map(t => t.trim())
        }
      } else {
        currentProject.description.push(trimmedLine.replace(/^[-•*]/, '').trim())
      }
    }
  }
  
  if (currentProject) {
    projects.push(currentProject)
  }
  
  return projects.map(project => ({
    ...project,
    description: project.description.join(' ')
  }))
}

const parseCertificationsSection = (section) => {
  return section.split('\n')
    .filter(line => line.trim().length > 0)
    .map(line => {
      const trimmed = line.trim().replace(/^[-•*]/, '').trim()
      const year = extractYear(trimmed)
      return {
        name: trimmed.replace(year, '').trim(),
        year: year,
        issuer: extractIssuer(trimmed)
      }
    })
}

const parseAwardsSection = (section) => {
  return section.split('\n')
    .filter(line => line.trim().length > 0)
    .map(line => {
      const trimmed = line.trim().replace(/^[-•*]/, '').trim()
      const year = extractYear(trimmed)
      return {
        name: trimmed.replace(year, '').trim(),
        year: year
      }
    })
}

const parseLanguagesSection = (section) => {
  return section.split('\n')
    .filter(line => line.trim().length > 0)
    .map(line => line.trim().replace(/^[-•*]/, '').trim())
    .filter(lang => lang.length > 0)
}

const parseInterestsSection = (section) => {
  const interests = []
  const lines = section.split('\n').filter(line => line.trim().length > 0)
  
  for (const line of lines) {
    const trimmedLine = line.trim().replace(/^[-•*]/, '').trim()
    const interestsInLine = trimmedLine.split(/[,•·|;\n]/)
      .map(interest => interest.trim())
      .filter(interest => interest.length > 0)
    
    interests.push(...interestsInLine)
  }
  
  return interests
}

// Helper functions
const isJobTitleLine = (line) => {
  const jobKeywords = ['developer', 'engineer', 'manager', 'analyst', 'designer', 'consultant', 'specialist', 'coordinator', 'director', 'lead', 'senior', 'junior', 'architect', 'scientist']
  const lineLower = line.toLowerCase()
  
  return jobKeywords.some(keyword => lineLower.includes(keyword)) ||
         line.match(/\b(inc|llc|corp|ltd|company|technologies|solutions|systems)\b/i) ||
         line.includes('-') ||
         line.includes('|') ||
         line.includes('@')
}

const isCompanyLine = (line) => {
  return line.match(/\b(inc|llc|corp|ltd|company|technologies|solutions|systems|group|associates)\b/i)
}

const isDegreeOrSchoolLine = (line) => {
  const educationKeywords = ['bachelor', 'master', 'phd', 'degree', 'university', 'college', 'school', 'institute', 'academy']
  const lineLower = line.toLowerCase()
  
  return educationKeywords.some(keyword => lineLower.includes(keyword)) ||
         line.match(/\b(bs|ba|ms|ma|phd|mba|bsc|msc|btech|mtech)\b/i)
}

const isProjectTitleLine = (line) => {
  return line.length < 100 && 
         !line.toLowerCase().includes('description') &&
         !line.toLowerCase().includes('responsibilities') &&
         (line.includes(':') || line.match(/^[-•*]/) || line.match(/^\d+\./))
}

const extractDuration = (text) => {
  const yearRegex = /\b(19|20)\d{2}\b/g
  const years = text.match(yearRegex)
  
  if (years && years.length >= 2) {
    return `${years[0]} - ${years[years.length - 1]}`
  } else if (years && years.length === 1) {
    const presentRegex = /present|current|now/i
    if (presentRegex.test(text)) {
      return `${years[0]} - Present`
    }
    return years[0]
  }
  
  const monthYearRegex = /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+(19|20)\d{2}/gi
  const monthYear = text.match(monthYearRegex)
  
  if (monthYear && monthYear.length >= 2) {
    return `${monthYear[0]} - ${monthYear[monthYear.length - 1]}`
  }
  
  return ''
}

const extractYear = (text) => {
  const yearRegex = /\b(19|20)\d{2}\b/g
  const years = text.match(yearRegex)
  return years ? years[years.length - 1] : ''
}

const extractGPA = (text) => {
  const gpaRegex = /gpa:?\s*(\d+\.?\d*)/i
  const match = text.match(gpaRegex)
  return match ? match[1] : ''
}

const extractLocationFromLine = (text) => {
  const locationRegex = /([A-Z][a-z]+,?\s+[A-Z]{2}|[A-Z][a-z]+,\s+[A-Z][a-z]+)/g
  const match = text.match(locationRegex)
  return match ? match[0] : ''
}

const extractIssuer = (text) => {
  const issuers = ['microsoft', 'google', 'amazon', 'aws', 'cisco', 'oracle', 'ibm', 'adobe', 'salesforce']
  const textLower = text.toLowerCase()
  
  for (const issuer of issuers) {
    if (textLower.includes(issuer)) {
      return issuer.charAt(0).toUpperCase() + issuer.slice(1)
    }
  }
  
  return ''
}