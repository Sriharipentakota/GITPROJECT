/**
 * Image upload service for handling cloud storage operations
 * Provides multiple upload providers with automatic fallback
 */

import { UPLOAD_SERVICES } from '../constants';

/**
 * Uploads image to ImgBB cloud storage service
 * @param {File} imageFile - The image file to upload
 * @returns {Promise<Object>} - Upload result with URL and metadata
 */
const uploadToImgBB = async (imageFile) => {
  // Create form data for the upload request
  const formData = new FormData();
  formData.append('image', imageFile);
  
  // Get API key from environment variables
  const imgbbApiKey = process.env.REACT_APP_IMGBB_API_KEY;
  
  // Check if API key is configured
  if (!imgbbApiKey || imgbbApiKey === 'YOUR_IMGBB_API_KEY_HERE') {
    throw new Error('ImgBB API key not configured');
  }

  // Make upload request to ImgBB API
  const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
    method: 'POST',
    body: formData,
  });

  // Check if request was successful
  if (!response.ok) {
    throw new Error(`ImgBB upload failed: ${response.status}`);
  }

  // Parse response data
  const data = await response.json();
  
  // Check if upload was successful
  if (data.success) {
    return {
      url: data.data.url,
      directUrl: data.data.url,
      filename: imageFile.name,
      size: imageFile.size,
      service: UPLOAD_SERVICES.IMGBB,
      deleteUrl: data.data.delete_url
    };
  } else {
    throw new Error('ImgBB upload failed');
  }
};

/**
 * Uploads image to PostImages cloud storage service (no API key required)
 * @param {File} imageFile - The image file to upload
 * @returns {Promise<Object>} - Upload result with URL and metadata
 */
const uploadToPostImages = async (imageFile) => {
  // Create form data for the upload request
  const formData = new FormData();
  formData.append('upload', imageFile);
  formData.append('action', 'upload');

  // Make upload request to PostImages API
  const response = await fetch('https://postimages.org/json/rr', {
    method: 'POST',
    body: formData,
  });

  // Check if request was successful
  if (!response.ok) {
    throw new Error(`PostImages upload failed: ${response.status}`);
  }

  // Parse response data
  const data = await response.json();
  
  // Check if upload was successful
  if (data.status === 'OK') {
    return {
      url: data.url,
      directUrl: data.url,
      filename: imageFile.name,
      size: imageFile.size,
      service: UPLOAD_SERVICES.POST_IMAGES
    };
  } else {
    throw new Error('PostImages upload failed');
  }
};

/**
 * Main upload function with multiple provider fallback
 * Tries multiple upload services in order until one succeeds
 * @param {File} imageFile - The image file to upload
 * @returns {Promise<Object>} - Upload result with URL and metadata
 */
export const uploadToCloudStorage = async (imageFile) => {
  // Define upload methods in priority order
  const uploadMethods = [
    { name: UPLOAD_SERVICES.IMGBB, func: uploadToImgBB },
    { name: UPLOAD_SERVICES.POST_IMAGES, func: uploadToPostImages }
  ];

  let lastError;

  // Try each upload method until one succeeds
  for (const method of uploadMethods) {
    try {
      console.log(`Attempting upload with ${method.name}...`);
      
      // Attempt upload with current method
      const result = await method.func(imageFile);
      
      console.log(`Upload successful with ${method.name}`);
      return result;
    } catch (error) {
      console.log(`${method.name} upload failed:`, error.message);
      lastError = error;
      
      // Continue to next method
      continue;
    }
  }

  // If all methods failed, throw error with details
  throw new Error(`All upload methods failed. Last error: ${lastError?.message}`);
};
