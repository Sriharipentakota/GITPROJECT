/**
 * Refactored View Page component for displaying QR code content
 * Modular design with improved code organization and clear documentation
 */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePreventNavigation } from '../../hooks/usePreventNavigation';
import { isValidUrl } from '../../utils/validation';

/**
 * Main ViewPage component for displaying scanned QR code content
 */
const ViewPage = () => {
  // Get URL parameters from current location
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  
  // Extract content parameters from URL
  const content = urlParams.get('content');
  const type = urlParams.get('type') || 'text';
  const imageData = urlParams.get('data'); // For compressed images
  const mimeType = urlParams.get('mimetype'); // For compressed images
  const filename = urlParams.get('filename');
  const imageUrl = urlParams.get('url'); // For cloud-stored images

  // Use custom hook to prevent navigation
  usePreventNavigation({
    disableBackButton: true,
    disableRightClick: true,
    disableKeyboardShortcuts: true
  });

  /**
   * Renders content based on type and available data
   */
  const renderContent = () => {
    // Handle cloud-stored images
    if (type === 'image-url' && imageUrl) {
      return renderCloudImage();
    }

    // Handle compressed images (Base64)
    if (type === 'image' && imageData && mimeType) {
      return renderCompressedImage();
    }

    // Handle direct links
    if (type === 'link' && isValidUrl(content)) {
      return renderDirectLink();
    }

    // Handle text content
    return renderTextContent();
  };

  /**
   * Renders cloud-stored image content
   */
  const renderCloudImage = () => (
    <div className="image-content" style={{ textAlign: 'center', width: '100%' }}>
      <img 
        src={imageUrl} 
        alt={filename || 'Shared Image'} 
        style={{
          maxWidth: '100%',
          maxHeight: '80vh',
          objectFit: 'contain',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
        onError={(e) => {
          // Hide image and show error message if loading fails
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      {/* Error fallback message */}
      <div style={{ 
        display: 'none', 
        padding: '2rem', 
        background: '#f8d7da', 
        borderRadius: '8px', 
        color: '#721c24' 
      }}>
        <p>⚠️ Unable to load image. The image may have been removed or the link has expired.</p>
        <p style={{ fontSize: '0.9em', marginTop: '1rem' }}>Original filename: {filename}</p>
      </div>
      {/* Filename display */}
      {filename && (
        <p style={{ 
          marginTop: '1rem', 
          fontSize: '0.9rem', 
          color: '#666',
          fontStyle: 'italic'
        }}>
          ☁️ {filename} (Cloud Storage)
        </p>
      )}
    </div>
  );

  /**
   * Renders compressed image content from Base64 data
   */
  const renderCompressedImage = () => {
    const imageSrc = `data:${mimeType};base64,${imageData}`;
    
    return (
      <div className="image-content" style={{ textAlign: 'center', width: '100%' }}>
        <img 
          src={imageSrc} 
          alt={filename || 'Shared Image'} 
          style={{
            maxWidth: '100%',
            maxHeight: '70vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}
        />
        {/* Filename display for compressed images */}
        {filename && (
          <p style={{ 
            marginTop: '1rem', 
            fontSize: '0.9rem', 
            color: '#666',
            fontStyle: 'italic'
          }}>
            🗜️ {filename} (Compressed)
          </p>
        )}
      </div>
    );
  };

  /**
   * Renders direct link content
   */
  const renderDirectLink = () => (
    <a
      href={content}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#667eea',
        textDecoration: 'underline',
        fontWeight: 700,
        fontSize: '1.3em',
        wordBreak: 'break-all'
      }}
    >
      {content}
    </a>
  );

  /**
   * Renders text content or fallback message
   */
  const renderTextContent = () => {
    return content || 'No content available';
  };

  /**
   * Gets appropriate title based on content type
   */
  const getContentTitle = () => {
    if (type === 'image-url' || type === 'image') {
      return '🖼️ Your Image';
    }
    return '📄 Your Message';
  };

  /**
   * Gets success message based on content type
   */
  const getSuccessMessage = () => {
    if (type === 'image-url') {
      return 'Cloud image loaded successfully';
    }
    if (type === 'image') {
      return 'Compressed image loaded successfully';
    }
    return 'Message delivered successfully';
  };

  /**
   * Gets appropriate action text based on content type
   */
  const getActionText = () => {
    return (type === 'image-url' || type === 'image') ? 'viewing' : 'reading';
  };

  return (
    <div className="view-page standalone">
      <div className="view-container standalone-container">
        {/* Header Section */}
        <div className="brand-header">
          <h1>{getContentTitle()}</h1>
          <p className="subtitle">Scanned from QR Code</p>
        </div>
        
        {/* Content Display Section */}
        <div className="content-frame">
          <div className="content-display">
            <div className="content-text">
              {renderContent()}
            </div>
          </div>
        </div>
        
        {/* Footer Information */}
        <div className="footer-info">
          {/* Success Status Indicator */}
          <div className="status-indicator">
            <span className="success-icon">✅</span>
            <span>{getSuccessMessage()}</span>
          </div>
          
          {/* User Instructions */}
          <p className="close-instruction">
            Close this tab when finished {getActionText()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
