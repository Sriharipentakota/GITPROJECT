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

  const updateSection = (sectionKey, data) => {
    setResumeData(prev => ({
      ...prev,
      [sectionKey]: data
    }))
  }

  const value = {
    resumeData,
    setResumeData,
    updateSection
  }

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  )
}