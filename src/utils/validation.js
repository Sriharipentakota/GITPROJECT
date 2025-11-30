/**
 * Validation utility functions for form inputs and data validation
 */

/**
 * Validates if a given string is a valid URL
 * @param {string} url - The URL string to validate
 * @returns {boolean} - True if valid URL, false otherwise
 */
export const isValidUrl = (url) => {
  try {
    // Create new URL object to test validity
    new URL(url);
    return true;
  } catch {
    // Return false if URL constructor throws an error
    return false;
  }
};

/**
 * Validates if a file is a valid image type
 * @param {File} file - The file object to validate
 * @returns {boolean} - True if valid image file, false otherwise
 */
export const isValidImageFile = (file) => {
  // Check if file exists and has a type property
  if (!file || !file.type) {
    return false;
  }
  
  // Check if file type starts with 'image/'
  return file.type.startsWith('image/');
};

/**
 * Validates file size against maximum allowed size
 * @param {File} file - The file object to validate
 * @param {number} maxSizeInMB - Maximum allowed size in megabytes
 * @returns {boolean} - True if file size is within limit, false otherwise
 */
export const isValidFileSize = (file, maxSizeInMB = 10) => {
  // Check if file exists and has size property
  if (!file || typeof file.size !== 'number') {
    return false;
  }
  
  // Convert MB to bytes and compare
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};

/**
 * Validates if text input is not empty after trimming whitespace
 * @param {string} text - The text to validate
 * @returns {boolean} - True if text has content, false otherwise
 */
export const hasValidTextContent = (text) => {
  // Check if text exists and has content after trimming
  return typeof text === 'string' && text.trim().length > 0;
};
