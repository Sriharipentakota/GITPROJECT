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