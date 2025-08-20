import { createContext, useContext, useState, useEffect } from 'react'

const ResumeContext = createContext()

export function useResumeContext() {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResumeContext must be used within a ResumeProvider')
  }
  return context
}

export function ResumeProvider({ children }) {
  // Helper to get initial resume data structure
  const getInitialResumeData = (type) => {
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
    };
    if (type === 'fresher') {
      return {
        ...baseData,
        academicProjects: [],
        internships: [],
        training: [],
        certifications: [],
        achievements: [],
        extracurricular: [],
        coursework: []
      };
    } else {
      return {
        ...baseData,
        experience: [],
        projects: [],
        certifications: [],
        achievements: [],
        awards: []
      };
    }
  };
  // Load resumeData and candidateType from localStorage if available
  const [candidateType, setCandidateType] = useState(() => {
    return localStorage.getItem('candidateType') || 'experienced';
  });
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // If candidateType is missing, fallback to state
        if (!parsed.candidateType) {
          return getInitialResumeData(candidateType);
        }
        return parsed;
      } catch {
        return getInitialResumeData(candidateType);
      }
    }
    return getInitialResumeData(candidateType);
  });

  // On mount, if resumeData is missing candidateType, initialize it
  useEffect(() => {
    if (!resumeData || !resumeData.candidateType) {
      setResumeData(getInitialResumeData(candidateType));
    }
    // eslint-disable-next-line
  }, []);
  // Persist resumeData to localStorage whenever it changes
  useEffect(() => {
    if (resumeData) {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
    }
  }, [resumeData]);

  // Persist candidateType to localStorage whenever it changes
  useEffect(() => {
    if (candidateType) {
      localStorage.setItem('candidateType', candidateType);
    }
  }, [candidateType]);
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
  setCandidateType(type);
  setResumeData(getInitialResumeData(type));
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