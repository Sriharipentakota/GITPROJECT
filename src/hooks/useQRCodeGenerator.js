/**
 * Custom hook for managing QR code generation state and operations
 * Encapsulates all QR code related logic in a reusable hook
 */
import { useState } from 'react';
import { generateQRCodeDataURL, getQROptionsForContentType } from '../utils/qrUtils';
import { generateViewUrl } from '../utils/urlUtils';
import { uploadToCloudStorage } from '../services/imageUploadService';
import { QR_MODES, UI_MESSAGES } from '../constants';

/**
 * Hook for managing QR code generation functionality
 * @returns {Object} - Object containing state and functions for QR code operations
 */
export const useQRCodeGenerator = () => {
  // State for QR code generation mode (text, link, image)
  const [mode, setMode] = useState(QR_MODES.TEXT);
  
  // State for text input content
  const [text, setText] = useState('');
  
  // State for selected image file
  const [selectedImage, setSelectedImage] = useState(null);
  
  // State for image preview data URL
  const [imagePreview, setImagePreview] = useState('');
  
  // State for generated QR code data URL
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');
  
  // State for loading indicator during generation/upload
  const [isLoading, setIsLoading] = useState(false);
  
  // State for error messages
  const [error, setError] = useState('');
  
  // State for the final generated URL that the QR code contains
  const [generatedUrl, setGeneratedUrl] = useState('');
  
  // State for tracking which upload service was used
  const [uploadService, setUploadService] = useState('');

  /**
   * Validates input based on current mode
   * @returns {string|null} - Error message if validation fails, null if valid
   */
  const validateInput = () => {
    if (mode === QR_MODES.IMAGE && !selectedImage) {
      return UI_MESSAGES.ERRORS.NO_IMAGE;
    }

    if (mode !== QR_MODES.IMAGE && !text.trim()) {
      return UI_MESSAGES.ERRORS.NO_TEXT;
    }

    if (mode === QR_MODES.LINK && !isValidUrl(text.trim())) {
      return UI_MESSAGES.ERRORS.INVALID_URL;
    }

    return null;
  };

  /**
   * Simple URL validation function
   * @param {string} url - URL to validate
   * @returns {boolean} - True if valid URL
   */
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  /**
   * Generates QR code based on current mode and input
   */
  const generateQRCode = async () => {
    // Validate input before proceeding
    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      let qrContent;
      let displayUrl;

      // Handle different modes
      if (mode === QR_MODES.IMAGE) {
        // Upload image to cloud storage
        const uploadResult = await uploadToCloudStorage(selectedImage);
        
        // For images, use direct image URL
        qrContent = uploadResult.directUrl;
        displayUrl = uploadResult.directUrl;
        
        // Track which service was used
        setUploadService(uploadResult.service);
        
      } else if (mode === QR_MODES.LINK) {
        // Direct link mode - use URL as-is
        qrContent = text.trim();
        displayUrl = text.trim();
        
      } else {
        // Text mode - generate view URL through app
        qrContent = generateViewUrl(text);
        displayUrl = qrContent;
      }

      // Store the generated URL
      setGeneratedUrl(displayUrl);

      // Generate QR code with appropriate options for content type
      const qrOptions = getQROptionsForContentType(mode);
      const dataURL = await generateQRCodeDataURL(qrContent, qrOptions);
      
      // Store the generated QR code
      setQrCodeDataURL(dataURL);
      
    } catch (err) {
      // Handle any errors during generation
      setError(`${UI_MESSAGES.ERRORS.GENERATION_FAILED}: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears all form data and generated content
   */
  const clearQRCode = () => {
    setText('');
    setSelectedImage(null);
    setImagePreview('');
    setQrCodeDataURL('');
    setGeneratedUrl('');
    setError('');
    setUploadService('');
  };

  /**
   * Updates the selected image and generates preview
   * @param {File} file - The selected image file
   */
  const updateSelectedImage = (file) => {
    setSelectedImage(file);
    setUploadService(''); // Reset service indicator
    
    if (file) {
      // Generate preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
  };

  // Return all state and functions
  return {
    // State
    mode,
    text,
    selectedImage,
    imagePreview,
    qrCodeDataURL,
    isLoading,
    error,
    generatedUrl,
    uploadService,
    
    // Actions
    setMode,
    setText,
    updateSelectedImage,
    generateQRCode,
    clearQRCode,
    setError
  };
};
