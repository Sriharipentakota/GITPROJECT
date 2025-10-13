import React, { useState } from 'react';
import QRCode from 'qrcode';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');

  const generateQRCode = async () => {
    if (!text.trim()) {
      setError('Please enter some text to generate QR code');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Smart URL detection with environment variable support
      let deployedUrl;
      
      // Priority: Environment variable > Production check > Localhost fallback
      if (process.env.REACT_APP_DEPLOYED_URL) {
        deployedUrl = process.env.REACT_APP_DEPLOYED_URL;
      } else if (process.env.NODE_ENV === 'production' || window.location.hostname !== 'localhost') {
        // Use the actual deployed URL - UPDATE THIS with your real Netlify URL
        deployedUrl = 'https://hari-qrgenerator.netlify.app';
      } else {
        // Development mode: warn user and use localhost (won't work on mobile)
        deployedUrl = window.location.origin;
        console.warn('⚠️ Development mode: QR codes will only work locally. Deploy to production for mobile compatibility.');
      }
      
      const encodedText = encodeURIComponent(text);
      const displayUrl = `${deployedUrl}/view?content=${encodedText}`;
      
      setGeneratedUrl(displayUrl);
      
      const dataURL = await QRCode.toDataURL(displayUrl, {
        width: 300,
        margin: 2,
        errorCorrectionLevel: 'M',
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCodeDataURL(dataURL);
    } catch (err) {
      setError('Failed to generate QR code: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeDataURL) return;

    const link = document.createElement('a');
    link.href = qrCodeDataURL;
    link.download = `qrcode-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearQRCode = () => {
    setText('');
    setQrCodeDataURL('');
    setGeneratedUrl('');
    setError('');
  };

  const testUrl = () => {
    if (generatedUrl) {
      // Open in new window/tab with specific features
      const newWindow = window.open(
        generatedUrl, 
        '_blank',
        'noopener,noreferrer,menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes,width=800,height=600'
      );
      
      // Optional: Focus the new window
      if (newWindow) {
        newWindow.focus();
      }
    }
  };

  return (
    <div className="qr-generator">
      <h1>QR Code Generator</h1>

      <div className="input-section">
        <div className="text-input-container">
          <label htmlFor="text-input">Enter text to encode:</label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text, URL, phone number, email, or any message..."
            rows="4"
          />
          
          <div className="button-group">
            <button 
              onClick={generateQRCode} 
              disabled={isLoading || !text.trim()}
              className={`generate-btn ${(isLoading || !text.trim()) ? 'disabled' : ''}`}
            >
              {isLoading ? 'Generating...' : 'Generate QR Code'}
            </button>
            
            {qrCodeDataURL && (
              <button 
                onClick={clearQRCode}
                className="clear-btn"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {qrCodeDataURL && (
        <div className="qr-output">
          <h2>Generated QR Code</h2>
          <div className="qr-code-container">
            <img src={qrCodeDataURL} alt="Generated QR Code" />
          </div>
          
          <div className="button-group">
            <button className="download-btn" onClick={downloadQRCode}>
              Download QR Code
            </button>
            <button className="test-url-btn" onClick={testUrl}>
              Test Link
            </button>
          </div>
          
          <div className="qr-info">
            <p><strong>Original text:</strong> {text}</p>
            <p><strong>Generated URL:</strong> <a href={generatedUrl} target="_blank" rel="noopener noreferrer">{generatedUrl}</a></p>
            
            {(window.location.hostname === 'localhost' && !process.env.REACT_APP_DEPLOYED_URL) ? (
              <div className="dev-warning">
                <p><em>⚠️ Development Mode Warning:</em></p>
                <p><em>QR codes will only work on this computer. To make them work on mobile devices, deploy the app to production first.</em></p>
              </div>
            ) : (
              <p><em>📱 Scan this QR code with any device to open a clickable link that displays your text</em></p>
            )}
            
            <p><em>🌐 Works on any device when deployed - QR codes link to your production site</em></p>
            <div className="workflow-info">
              <h4>How it works:</h4>
              <ol>
                <li>📱 Scan the QR code with your mobile device</li>
                <li>🔗 A clickable link will appear in your QR scanner app</li>
                <li>👆 Tap the link to open a new web page</li>
                <li>📄 The original text will be displayed centered on the page</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
