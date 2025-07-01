import mammoth from 'mammoth'

export const extractTextFromWord = async (file) => {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const result = await mammoth.extractRawText({ arrayBuffer })
    
    if (result.messages && result.messages.length > 0) {
      console.warn('Word parsing warnings:', result.messages)
    }
    
    return result.value || ''
  } catch (error) {
    console.error('Error extracting text from Word document:', error)
    throw new Error('Failed to extract text from Word document. Please ensure the document is a valid .docx file.')
  }
}