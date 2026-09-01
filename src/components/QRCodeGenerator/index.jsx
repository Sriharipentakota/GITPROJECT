/**
 * Main QR Code Generator component
 * Refactored for better modularity and maintainability
 */
import React from 'react';
import { Button, InfoBox } from '../UI';
import ModeSelector from './ModeSelector';
import ContentInput from './ContentInput';
import QRCodeOutput from './QRCodeOutput';
import { useQRCodeGenerator } from '../../hooks/useQRCodeGenerator';
import { QR_MODES, UI_MESSAGES } from '../../constants';

/**
 * Main QR Code Generator component with modular architecture
 */
const QRCodeGenerator = () => {
  // Use custom hook for QR code generation logic
  const {
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
  } = useQRCodeGenerator();

  /**
   * Determines if the generate button should be disabled
   */
  const isGenerateDisabled = () => {
    if (isLoading) return true;
    
    // Check mode-specific requirements
    if (mode === QR_MODES.IMAGE) {
      return !selectedImage;
    }
    
    return !text.trim();
  };

  /**
   * Gets the appropriate button text based on loading state and mode
   */
  const getGenerateButtonText = () => {
    if (isLoading) {
      return mode === QR_MODES.IMAGE 
        ? UI_MESSAGES.BUTTONS.UPLOADING 
        : UI_MESSAGES.BUTTONS.GENERATING;
    }
    
    return UI_MESSAGES.BUTTONS.GENERATE;
  };

  /**
   * Renders error message with troubleshooting tips if applicable
   */
  const renderErrorMessage = () => {
    if (!error) return null;

    return (
      <InfoBox type="error">
        {error}
        {/* Show troubleshooting tips for upload failures */}
        {error.includes('All upload methods failed') && (
          <div style={{ marginTop: '10px', fontSize: '0.9em' }}>
            <strong>Troubleshooting:</strong>
            <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
              <li>Check your internet connection</li>
              <li>Try a smaller image (under 5MB)</li>
              <li>Ensure the image format is JPG, PNG, or GIF</li>
              <li>Wait a moment and try again</li>
            </ul>
          </div>
        )}
      </InfoBox>
    );
  };

  return (
    <div className="qr-generator">
      {/* Page Title */}
      <h1>QR Code Generator</h1>

      {/* Input Section */}
      <div className="input-section">
        <div className="text-input-container">
          {/* Mode Selection */}
          <ModeSelector 
            currentMode={mode} 
            onModeChange={setMode} 
          />
          
          {/* Content Input */}
          <ContentInput
            mode={mode}
            text={text}
            onTextChange={setText}
            selectedImage={selectedImage}
            onImageChange={updateSelectedImage}
            imagePreview={imagePreview}
            error={error}
            onErrorChange={setError}
            uploadService={uploadService}
          />

          {/* Action Buttons */}
          <div className="button-group">
            <Button 
              onClick={generateQRCode} 
              disabled={isGenerateDisabled()}
              variant="primary"
            >
              {getGenerateButtonText()}
            </Button>
            
            {/* Clear button - only show if QR code exists */}
            {qrCodeDataURL && (
              <Button 
                onClick={clearQRCode}
                variant="secondary"
              >
                {UI_MESSAGES.BUTTONS.CLEAR}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Error Display */}
      {renderErrorMessage()}

      {/* QR Code Output */}
      <QRCodeOutput
        qrCodeDataURL={qrCodeDataURL}
        mode={mode}
        generatedUrl={generatedUrl}
        uploadService={uploadService}
        onClear={clearQRCode}
      />
    </div>
  );
};

export default QRCodeGenerator;
