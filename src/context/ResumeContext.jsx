import { createContext, useContext, useState } from 'react'

const ResumeContext = createContext()

export function useResumeContext() {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResumeContext must be used within a ResumeProvider')
  }
  return context
}

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(null)
  const [candidateType, setCandidateType] = useState('experienced') // 'fresher' or 'experienced'

  const updateSection = (sectionKey, data) => {
    console.log('Context updateSection called:', sectionKey, 'with data:', data)
    
    setResumeData(prev => {
      const newData = {
        ...prev,
        [sectionKey]: data
      }
      console.log('Context - Previous data:', prev)
      console.log('Context - New data after update:', newData)
      
      // Force a re-render by creating a completely new object
      return JSON.parse(JSON.stringify(newData))
    })
  }

  const createNewResume = (type = 'experienced') => {
    setCandidateType(type)
    
    const baseData = {
      candidateType: type,
      personalInfo: {
        name: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        website: '',
        github: ''
      },
      profilePhoto: null,
      summary: '',
      education: [],
      skills: [],
      languages: [],
      interests: [],
      portfolioInfo: {
        title: '',
        tagline: '',
        experience: '',
        availability: 'Available'
      },
      socialLinks: {
        twitter: '',
        instagram: '',
        dribbble: '',
        behance: '',
        medium: '',
        youtube: ''
      },
      testimonials: [],
      services: [],
      aboutMe: ''
    }

    if (type === 'fresher') {
      // Fresher-specific sections
      const fresherData = {
        ...baseData,
        academicProjects: [],
        internships: [],
        training: [],
        certifications: [],
        achievements: [],
        extracurricular: [],
        coursework: []
      }
      setResumeData(fresherData)
    } else {
      // Experienced candidate sections
      const experiencedData = {
        ...baseData,
        experience: [],
        projects: [],
        certifications: [],
        achievements: [],
        awards: []
      }
      setResumeData(experiencedData)
    }
  }

  const value = {
    resumeData,
    setResumeData,
    updateSection,
    createNewResume,
    candidateType,
    setCandidateType
  }

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  )
}