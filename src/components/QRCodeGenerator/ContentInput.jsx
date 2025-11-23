/**
 * Content input component for handling different types of QR code content
 * Renders appropriate input based on selected mode (text, link, image)
 */
import React from 'react';
import { Input, InfoBox } from '../UI';
import { QR_MODES, UI_MESSAGES, FILE_SIZE_LIMITS } from '../../constants';
import { isValidImageFile, isValidFileSize } from '../../utils/validation';
import { formatFileSize } from '../../utils/fileUtils';

/**
 * Component for content input based on selected mode
 * @param {Object} props - Component props
 * @param {string} props.mode - Current QR code mode
 * @param {string} props.text - Text input value
 * @param {Function} props.onTextChange - Text change handler
 * @param {File} props.selectedImage - Selected image file
 * @param {Function} props.onImageChange - Image change handler
 * @param {string} props.imagePreview - Image preview data URL
 * @param {string} props.error - Error message to display
 * @param {Function} props.onErrorChange - Error change handler
 * @param {string} props.uploadService - Current upload service name
 */
const ContentInput = ({
  mode,
  text,
  onTextChange,
  selectedImage,
  onImageChange,
  imagePreview,
  error,
  onErrorChange,
  uploadService
}) => {
  /**
   * Handles image file selection with validation
   * @param {File} file - Selected image file
   */
  const handleImageUpload = (file) => {
    // Clear any existing errors
    if (error) {
      onErrorChange('');
    }

    // Check if file was selected
    if (!file) return;

    // Validate file type
    if (!isValidImageFile(file)) {
      onErrorChange(UI_MESSAGES.ERRORS.INVALID_IMAGE);
      return;
    }

    // Validate file size
    if (!isValidFileSize(file, FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB)) {
      onErrorChange(UI_MESSAGES.ERRORS.FILE_TOO_LARGE);
      return;
    }

    // File is valid, update selection
    onImageChange(file);
  };

  /**
   * Gets the appropriate mode description based on current mode
   */
  const getModeDescription = () => {
    switch (mode) {
      case QR_MODES.LINK:
        return UI_MESSAGES.MODES.LINK.DESCRIPTION;
      case QR_MODES.IMAGE:
        return UI_MESSAGES.MODES.IMAGE.DESCRIPTION;
      case QR_MODES.TEXT:
      default:
        return UI_MESSAGES.MODES.TEXT.DESCRIPTION;
    }
  };

  /**
   * Gets helper text for image mode
   */
  const getImageHelperText = () => {
    if (mode === QR_MODES.IMAGE) {
      return UI_MESSAGES.MODES.IMAGE.HELPER_TEXT;
    }
    return null;
  };

  return (
    <div className="content-input">
      {/* Upload service status indicator */}
      {uploadService && (
        <InfoBox type="success" style={{ fontSize: '0.9em' }}>
          <strong>Upload Service:</strong> {uploadService}
        </InfoBox>
      )}
      
      {/* Mode description */}
      <InfoBox type="info" style={{ fontSize: '0.9em' }}>
        <strong>{getModeDescription()}</strong>
        {getImageHelperText() && (
          <p style={{ fontSize: '0.8em', color: '#666', marginTop: '0.5rem' }}>
            💡 <strong>{getImageHelperText()}</strong>
          </p>
        )}
      </InfoBox>

      {/* Render input based on mode */}
      {mode === QR_MODES.IMAGE ? (
        <div className="image-upload-container">
          {/* Image file input */}
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            label={`Upload Image (up to ${FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB):`}
            style={{
              width: '100%',
              padding: '0.875rem',
              border: '2px dashed #667eea',
              borderRadius: '8px',
              background: '#f8f9ff',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          />
          
          {/* Image preview */}
          {imagePreview && (
            <div 
              className="image-preview" 
              style={{
                marginBottom: '1rem',
                textAlign: 'center',
                padding: '1rem',
                background: '#f8f9fa',
                borderRadius: '8px',
                border: '2px solid #e0e0e0'
              }}
            >
              <p>Preview:</p>
              <img 
                src={imagePreview} 
                alt="Preview" 
                style={{
                  maxWidth: '300px',
                  maxHeight: '300px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  objectFit: 'contain'
                }} 
              />
              <p style={{ fontSize: '0.8em', color: '#666', marginTop: '0.5rem' }}>
                {selectedImage?.name} ({formatFileSize(selectedImage?.size)})
              </p>
              <p style={{ fontSize: '0.7em', color: '#999' }}>
                ✅ QR code will show this image directly when scanned
              </p>
            </div>
          )}

          {/* How it works section for images */}
          <InfoBox type="info" style={{ fontSize: '0.9em' }}>
            <strong>🖼️ How it works:</strong>
            <ol style={{ marginTop: '5px', paddingLeft: '20px' }}>
              <li>Your image will be uploaded to secure cloud storage</li>
              <li>QR code will contain the direct image URL</li>
              <li>Scanning shows the image immediately in any device's browser</li>
              <li>No intermediate pages - instant image display!</li>
            </ol>
          </InfoBox>
        </div>
      ) : (
        /* Text/Link input */
        <Input
          type="textarea"
          value={text}
          onChange={onTextChange}
          label={
            mode === QR_MODES.LINK 
              ? UI_MESSAGES.MODES.LINK.INPUT_LABEL
              : UI_MESSAGES.MODES.TEXT.INPUT_LABEL
          }
          placeholder={
            mode === QR_MODES.LINK
              ? UI_MESSAGES.MODES.LINK.INPUT_PLACEHOLDER
              : UI_MESSAGES.MODES.TEXT.INPUT_PLACEHOLDER
          }
          rows={4}
        />
      )}
    </div>
  );
};

export default ContentInput;
