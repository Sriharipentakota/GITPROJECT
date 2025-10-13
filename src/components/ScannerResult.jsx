import React from 'react';
import { useNavigate } from 'react-router-dom';

function ScannerResult({ scannedText, onClear }) {
  const navigate = useNavigate();

  const handleViewFullPage = () => {
    navigate('/display', { state: { text: scannedText } });
  };

  const isUrl = (text) => {
    try {
      new URL(text);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="scanner-result">
      <h3>Scanned QR Code Content:</h3>
      <div className="result-content">
        <p className="scanned-text">{scannedText}</p>
        
        {isUrl(scannedText) && (
          <a 
            href={scannedText} 
            target="_blank" 
            rel="noopener noreferrer"
            className="external-link-btn"
          >
            Open URL
          </a>
        )}
        
        <button 
          onClick={handleViewFullPage}
          className="view-full-btn"
        >
          View in Full Page
        </button>
        
        <button 
          onClick={onClear}
          className="clear-result-btn"
        >
          Scan Another QR Code
        </button>
      </div>
    </div>
  );
}

export default ScannerResult;
