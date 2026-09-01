/**
 * File utility functions for handling file operations and formatting
 */

/**
 * Converts file size from bytes to a human-readable format
 * @param {number} bytes - File size in bytes
 * @param {number} decimals - Number of decimal places (default: 1)
 * @returns {string} - Formatted file size string
 */
export const formatFileSize = (bytes, decimals = 1) => {
  // Return '0 Bytes' for zero or invalid input
  if (!bytes || bytes === 0) return '0 Bytes';

  // Define size units in order
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  
  // Calculate the appropriate unit index
  const unitIndex = Math.floor(Math.log(bytes) / Math.log(1024));
  
  // Calculate the size in the appropriate unit
  const size = bytes / Math.pow(1024, unitIndex);
  
  // Return formatted string with specified decimal places
  return `${size.toFixed(decimals)} ${sizes[unitIndex]}`;
};

/**
 * Reads a file and returns its data URL representation
 * @param {File} file - The file object to read
 * @returns {Promise<string>} - Promise that resolves to data URL string
 */
export const readFileAsDataURL = (file) => {
  return new Promise((resolve, reject) => {
    // Check if file is provided
    if (!file) {
      reject(new Error('No file provided'));
      return;
    }

    // Create new FileReader instance
    const reader = new FileReader();
    
    // Set up success handler
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    
    // Set up error handler
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    // Start reading the file as data URL
    reader.readAsDataURL(file);
  });
};

/**
 * Generates a download filename with timestamp
 * @param {string} prefix - Filename prefix
 * @param {string} mode - QR code mode (text, link, image)
 * @param {string} extension - File extension (default: 'png')
 * @returns {string} - Generated filename
 */
export const generateDownloadFilename = (prefix = 'qrcode', mode = 'text', extension = 'png') => {
  // Get current timestamp
  const timestamp = Date.now();
  
  // Combine prefix, mode, timestamp and extension
  return `${prefix}-${mode}-${timestamp}.${extension}`;
};
