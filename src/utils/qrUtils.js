/**
 * QR Code utility functions for QR code generation and configuration
 */
import QRCode from 'qrcode';

/**
 * Default QR code generation options
 */
const DEFAULT_QR_OPTIONS = {
  width: 300,
  margin: 2,
  errorCorrectionLevel: 'L',
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  }
};

/**
 * Generates a QR code data URL from content
 * @param {string} content - The content to encode in the QR code
 * @param {Object} options - Optional QR code generation options
 * @returns {Promise<string>} - Promise that resolves to QR code data URL
 */
export const generateQRCodeDataURL = async (content, options = {}) => {
  try {
    // Check if content is provided
    if (!content || typeof content !== 'string') {
      throw new Error('Valid content string is required');
    }
    
    // Merge provided options with defaults
    const qrOptions = { ...DEFAULT_QR_OPTIONS, ...options };
    
    // Generate QR code data URL
    const dataURL = await QRCode.toDataURL(content, qrOptions);
    
    return dataURL;
  } catch (error) {
    // Re-throw with more descriptive error message
    throw new Error(`Failed to generate QR code: ${error.message}`);
  }
};

/**
 * Gets QR code configuration options based on content type
 * @param {string} contentType - The type of content (text, link, image)
 * @returns {Object} - Optimized QR code options for the content type
 */
export const getQROptionsForContentType = (contentType) => {
  const baseOptions = { ...DEFAULT_QR_OPTIONS };
  
  switch (contentType) {
    case 'link':
      // Higher error correction for URLs (in case of damage)
      return {
        ...baseOptions,
        errorCorrectionLevel: 'M'
      };
    
    case 'image':
      // Higher error correction for image URLs (longer content)
      return {
        ...baseOptions,
        errorCorrectionLevel: 'M',
        width: 350 // Slightly larger for better scanning
      };
    
    case 'text':
    default:
      // Default options for text content
      return baseOptions;
  }
};
