import React from 'react';
import { useLocation } from 'react-router-dom';

function ViewPage() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const content = urlParams.get('content') || 'No content available';

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

  return (
    <div className="view-page standalone">
      <div className="view-container standalone-container">
        <div className="brand-header">
          <h1>📄 Your Message</h1>
          <p className="subtitle">Scanned from QR Code</p>
        </div>
        
        <div className="content-frame">
          <div className="content-display">
            <div className="content-text">
              {content}
            </div>
          </div>
        </div>
        
        <div className="footer-info">
          <div className="status-indicator">
            <span className="success-icon">✅</span>
            <span>Message delivered successfully</span>
          </div>
          <p className="close-instruction">Close this tab when finished reading</p>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;
