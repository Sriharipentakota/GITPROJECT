import React from 'react';
import { useLocation } from 'react-router-dom';

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function ViewPage() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const content = urlParams.get('content');
  const type = urlParams.get('type') || 'text';
  
  // Image-specific parameters
  const imageData = urlParams.get('data'); // For compressed images
  const mimeType = urlParams.get('mimetype'); // For compressed images
  const filename = urlParams.get('filename');
  const imageUrl = urlParams.get('url'); // For cloud-stored images

  // Disable browser back button functionality
  React.useEffect(() => {
    // Disable back button
    const disableBackButton = () => {
      window.history.pushState(null, '', window.location.href);
    };
    
    // Push initial state
    window.history.pushState(null, '', window.location.href);
    
    // Listen for back button attempts
    const handlePopState = (event) => {
      window.history.pushState(null, '', window.location.href);
    };
    
    window.addEventListener('popstate', handlePopState);
    
    // Disable right-click context menu (optional)
    const disableRightClick = (e) => {
      e.preventDefault();
    };
    
    // Disable common keyboard shortcuts (optional)
    const disableKeyboardShortcuts = (e) => {
      // Disable F5, Ctrl+R (refresh)
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        e.preventDefault();
      }
      // Disable Ctrl+W (close tab)
      if (e.ctrlKey && e.key === 'w') {
        e.preventDefault();
      }
      // Disable Alt+Left (back)
      if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault();
      }
    };
    
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableKeyboardShortcuts);
    
    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableKeyboardShortcuts);
    };
  }, []);

  const renderContent = () => {
    // Handle cloud-stored images
    if (type === 'image-url' && imageUrl) {
      return (
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
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{ display: 'none', padding: '2rem', background: '#f8d7da', borderRadius: '8px', color: '#721c24' }}>
            <p>⚠️ Unable to load image. The image may have been removed or the link has expired.</p>
            <p style={{ fontSize: '0.9em', marginTop: '1rem' }}>Original filename: {filename}</p>
          </div>
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
    }

    // Handle compressed images (Base64)
    if (type === 'image' && imageData && mimeType) {
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
    }

    // Handle direct links
    if (type === 'link' && isValidUrl(content)) {
      return (
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
    }

    // Handle text content
    return content || 'No content available';
  };

  const getContentTitle = () => {
    if (type === 'image-url' || type === 'image') {
      return '🖼️ Your Image';
    }
    return '📄 Your Message';
  };

  const getSuccessMessage = () => {
    if (type === 'image-url') {
      return 'Cloud image loaded successfully';
    }
    if (type === 'image') {
      return 'Compressed image loaded successfully';
    }
    return 'Message delivered successfully';
  };

  return (
    <div className="view-page standalone">
      <div className="view-container standalone-container">
        <div className="brand-header">
          <h1>{getContentTitle()}</h1>
          <p className="subtitle">Scanned from QR Code</p>
        </div>
        
        <div className="content-frame">
          <div className="content-display">
            <div className="content-text">
              {renderContent()}
            </div>
          </div>
        </div>
        
        <div className="footer-info">
          <div className="status-indicator">
            <span className="success-icon">✅</span>
            <span>{getSuccessMessage()}</span>
          </div>
          <p className="close-instruction">
            Close this tab when finished {(type === 'image-url' || type === 'image') ? 'viewing' : 'reading'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;