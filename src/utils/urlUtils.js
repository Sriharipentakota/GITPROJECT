/**
 * URL utility functions for handling URL generation and manipulation
 */

/**
 * Gets the deployed URL based on environment configuration
 * @returns {string} - The appropriate base URL for the application
 */
export const getDeployedUrl = () => {
  // Check if REACT_APP_DEPLOYED_URL is set in environment
  if (process.env.REACT_APP_DEPLOYED_URL) {
    return process.env.REACT_APP_DEPLOYED_URL;
  }
  
  // Use production URL if in production or not on localhost
  if (process.env.NODE_ENV === 'production' || window.location.hostname !== 'localhost') {
    return 'https://hari-qrgenerator.netlify.app';
  }
  
  // Use current origin for development
  return window.location.origin;
};

/**
 * Generates a view URL for text content
 * @param {string} text - The text content to encode in URL
 * @returns {string} - Complete URL for viewing the text content
 */
export const generateViewUrl = (text) => {
  // Get the base deployed URL
  const baseUrl = getDeployedUrl();
  
  // Encode the text content for URL parameter
  const encodedContent = encodeURIComponent(text);
  
  // Return complete URL with encoded content parameter
  return `${baseUrl}/view?content=${encodedContent}`;
};

/**
 * Opens a URL in a new browser tab with focus
 * @param {string} url - The URL to open
 * @returns {boolean} - True if window was opened successfully, false otherwise
 */
export const openUrlInNewTab = (url) => {
  // Check if URL is provided
  if (!url) {
    return false;
  }
  
  try {
    // Open URL in new window/tab
    const newWindow = window.open(url, '_blank');
    
    // Focus the new window if it was created successfully
    if (newWindow) {
      newWindow.focus();
      return true;
    }
    
    return false;
  } catch (error) {
    // Handle popup blocker or other errors
    console.error('Failed to open URL in new tab:', error);
    return false;
  }
};

/**
 * Triggers a file download with specified data URL and filename
 * @param {string} dataURL - The data URL of the file to download
 * @param {string} filename - The name for the downloaded file
 */
export const triggerFileDownload = (dataURL, filename) => {
  // Check if required parameters are provided
  if (!dataURL || !filename) {
    console.error('Data URL and filename are required for download');
    return;
  }
  
  try {
    // Create a temporary anchor element
    const link = document.createElement('a');
    
    // Set download attributes
    link.href = dataURL;
    link.download = filename;
    
    // Temporarily add to DOM
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up by removing the element
    document.body.removeChild(link);
  } catch (error) {
    console.error('Failed to trigger file download:', error);
  }
};
