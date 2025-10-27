import React, { useState } from 'react';
import QRCode from 'qrcode';

function isValidUrl(url) {
  try {
    // Accepts http, https, mailto, tel, etc.
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function QRCodeGenerator() {
  const [mode, setMode] = useState('text'); // 'text' or 'link'
  const [text, setText] = useState('');
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');

  const generateQRCode = async () => {
    if (!text.trim()) {
      setError('Please enter some text or link to generate QR code');
      return;
    }

    if (mode === 'link' && !isValidUrl(text.trim())) {
      setError('Please enter a valid URL (e.g., https://example.com)');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      let qrContent;
      let displayUrl;

      if (mode === 'link') {
        // For link mode, encode the URL directly in the QR code
        qrContent = text.trim();
        displayUrl = text.trim();
      } else {
        // For text mode, use the app's view page
        let deployedUrl;
        if (process.env.REACT_APP_DEPLOYED_URL) {
          deployedUrl = process.env.REACT_APP_DEPLOYED_URL;
        } else if (process.env.NODE_ENV === 'production' || window.location.hostname !== 'localhost') {
          deployedUrl = 'https://hari-qrgenerator.netlify.app';
        } else {
          deployedUrl = window.location.origin;
          console.warn('⚠️ Development mode: QR codes will only work locally. Deploy to production for mobile compatibility.');
        }
        
        qrContent = `${deployedUrl}/view?content=${encodeURIComponent(text)}`;
        displayUrl = qrContent;
      }

      setGeneratedUrl(displayUrl);

      const dataURL = await QRCode.toDataURL(qrContent, {
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
    link.download = `qrcode-${mode}-${Date.now()}.png`;
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
      const newWindow = window.open(
        generatedUrl, 
        '_blank',
        'noopener,noreferrer,menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes,width=800,height=600'
      );
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
          <label htmlFor="mode-select">Choose QR Content Type:</label>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <button
              type="button"
              className={`generate-btn${mode === 'text' ? ' active' : ''}`}
              style={{ 
                opacity: mode === 'text' ? 1 : 0.6,
                backgroundColor: mode === 'text' ? '#667eea' : '#ccc'
              }}
              onClick={() => setMode('text')}
            >
              📝 Text
            </button>
            <button
              type="button"
              className={`generate-btn${mode === 'link' ? ' active' : ''}`}
              style={{ 
                opacity: mode === 'link' ? 1 : 0.6,
                backgroundColor: mode === 'link' ? '#667eea' : '#ccc'
              }}
              onClick={() => setMode('link')}
            >
              🔗 Direct Link
            </button>
          </div>
          
          <div style={{ marginBottom: '1rem', padding: '10px', backgroundColor: '#f0f8ff', borderRadius: '5px', fontSize: '0.9em' }}>
            {mode === 'link' ? (
              <p>🔗 <strong>Direct Link Mode:</strong> QR code will contain your URL directly. Scanning will open the website immediately.</p>
            ) : (
              <p>📝 <strong>Text Mode:</strong> QR code will show your text in a formatted page through this app.</p>
            )}
          </div>

          <label htmlFor="text-input">
            {mode === 'link' ? 'Enter hyperlink (URL):' : 'Enter text to encode:'}
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={
              mode === 'link'
                ? 'e.g., https://example.com, https://github.com, https://youtube.com/watch?v=...'
                : 'Enter text, phone number, email, or any message...'
            }
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
              Test {mode === 'link' ? 'Direct Link' : 'App Link'}
            </button>
          </div>
          
          <div className="qr-info">
            <p>
              <strong>
                {mode === 'link' ? 'Direct URL:' : 'Original text:'}
              </strong> {text}
            </p>
            <p>
              <strong>QR Code contains:</strong> 
              <a href={generatedUrl} target="_blank" rel="noopener noreferrer">
                {generatedUrl}
              </a>
            </p>
            
            {mode === 'link' ? (
              <div className="link-mode-info">
                <p><em>🎯 <strong>Direct Link Mode:</strong> Scanning this QR code will immediately open the website in your browser</em></p>
                <p><em>📱 Perfect for sharing websites, social media profiles, videos, etc.</em></p>
              </div>
            ) : (
              <>
                {(window.location.hostname === 'localhost' && !process.env.REACT_APP_DEPLOYED_URL) ? (
                  <div className="dev-warning">
                    <p><em>⚠️ Development Mode Warning:</em></p>
                    <p><em>QR codes will only work on this computer. To make them work on mobile devices, deploy the app to production first.</em></p>
                  </div>
                ) : (
                  <p><em>📱 Scan this QR code with any device to view your text in a formatted page</em></p>
                )}
              </>
            )}
            
            <div className="workflow-info">
              <h4>How it works:</h4>
              {mode === 'link' ? (
                <ol>
                  <li>📱 Scan the QR code with your mobile device</li>
                  <li>🌐 Your browser will open directly to the website</li>
                  <li>✨ No intermediate pages - direct access!</li>
                </ol>
              ) : (
                <ol>
                  <li>📱 Scan the QR code with your mobile device</li>
                  <li>🔗 A link will appear in your QR scanner app</li>
                  <li>👆 Tap the link to open a formatted page</li>
                  <li>📄 Your text will be displayed in a clean, readable format</li>
                </ol>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;