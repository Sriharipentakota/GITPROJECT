import React, { useState } from 'react';
import QRCode from 'qrcode';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateQRCode = async () => {
    if (!text.trim()) {
      setError('Please enter some text to generate QR code');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const dataURL = await QRCode.toDataURL(text, {
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
    setError('');
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
          <button className="download-btn" onClick={downloadQRCode}>
            Download QR Code
          </button>
          <div className="qr-info">
            <p><strong>Encoded text:</strong> {text}</p>
            <p><em>Scan this QR code with any QR scanner to view the text</em></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
