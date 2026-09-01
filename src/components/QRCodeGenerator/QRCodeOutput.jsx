/**
 * QR code output component for displaying generated QR codes
 * Shows the QR code image with download and test functionality
 */
import React from 'react';
import { Button, InfoBox } from '../UI';
import { QR_MODES, UI_MESSAGES } from '../../constants';
import { generateDownloadFilename } from '../../utils/fileUtils';
import { triggerFileDownload, openUrlInNewTab } from '../../utils/urlUtils';

/**
 * Component for displaying generated QR code and related actions
 * @param {Object} props - Component props
 * @param {string} props.qrCodeDataURL - Generated QR code data URL
 * @param {string} props.mode - Current QR code mode
 * @param {string} props.generatedUrl - URL that the QR code contains
 * @param {string} props.uploadService - Upload service used for images
 * @param {Function} props.onClear - Clear handler function
 */
const QRCodeOutput = ({
  qrCodeDataURL,
  mode,
  generatedUrl,
  uploadService,
  onClear
}) => {
  /**
   * Handles QR code download
   */
  const handleDownload = () => {
    if (!qrCodeDataURL) return;
    
    // Generate filename with mode and timestamp
    const filename = generateDownloadFilename('qrcode', mode);
    
    // Trigger download
    triggerFileDownload(qrCodeDataURL, filename);
  };

  /**
   * Handles testing the generated URL
   */
  const handleTestUrl = () => {
    if (generatedUrl) {
      openUrlInNewTab(generatedUrl);
    }
  };

  /**
   * Gets the test button text based on mode
   */
  const getTestButtonText = () => {
    switch (mode) {
      case QR_MODES.LINK:
        return UI_MESSAGES.BUTTONS.TEST_LINK;
      case QR_MODES.IMAGE:
        return UI_MESSAGES.BUTTONS.TEST_IMAGE;
      case QR_MODES.TEXT:
      default:
        return UI_MESSAGES.BUTTONS.TEST_APP;
    }
  };

  /**
   * Gets appropriate scanning instructions based on mode
   */
  const getScanningInstructions = () => {
    switch (mode) {
      case QR_MODES.LINK:
        return (
          <ol>
            <li>🔗 Opens the website directly in your browser</li>
            <li>✨ No intermediate pages - instant access!</li>
          </ol>
        );
      case QR_MODES.IMAGE:
        return (
          <ol>
            <li>🖼️ Shows the image immediately in your device's browser</li>
            <li>📱 Works on any phone or tablet</li>
            <li>✨ No app installation required</li>
            <li>🔒 Images stored securely in the cloud</li>
          </ol>
        );
      case QR_MODES.TEXT:
      default:
        return (
          <ol>
            <li>📱 Scan the QR code with your mobile device</li>
            <li>🔗 A link will appear in your QR scanner app</li>
            <li>👆 Tap the link to open a formatted page</li>
            <li>📄 Your text will be displayed in a clean, readable format</li>
          </ol>
        );
    }
  };

  /**
   * Gets display text for the generated URL
   */
  const getDisplayUrl = () => {
    if (mode === QR_MODES.IMAGE) {
      return 'Direct image URL';
    }
    
    // Truncate long URLs for display
    if (generatedUrl.length > 50) {
      return `${generatedUrl.substring(0, 50)}...`;
    }
    
    return generatedUrl;
  };

  // Don't render if no QR code is generated
  if (!qrCodeDataURL) {
    return null;
  }

  return (
    <div className="qr-output">
      <h2>Generated QR Code</h2>
      
      {/* QR Code Display */}
      <div className="qr-code-container">
        <img src={qrCodeDataURL} alt="Generated QR Code" />
      </div>
      
      {/* Action Buttons */}
      <div className="button-group">
        <Button variant="download" onClick={handleDownload}>
          {UI_MESSAGES.BUTTONS.DOWNLOAD}
        </Button>
        <Button variant="test" onClick={handleTestUrl}>
          {getTestButtonText()}
        </Button>
        <Button variant="secondary" onClick={onClear}>
          {UI_MESSAGES.BUTTONS.CLEAR}
        </Button>
      </div>
      
      {/* QR Code Information */}
      <div className="qr-info">
        <p>
          <strong>QR Code contains:</strong>{' '}
          <a 
            href={generatedUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ wordBreak: 'break-all' }}
          >
            {getDisplayUrl()}
          </a>
        </p>
        
        {/* Upload service indicator for images */}
        {mode === QR_MODES.IMAGE && uploadService && (
          <p style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem' }}>
            <strong>Uploaded via:</strong> {uploadService} ✅
          </p>
        )}
        
        {/* Scanning instructions */}
        <div className="scanning-info">
          <h4>📱 How it works when scanned:</h4>
          {getScanningInstructions()}
        </div>
      </div>
    </div>
  );
};

export default QRCodeOutput;
