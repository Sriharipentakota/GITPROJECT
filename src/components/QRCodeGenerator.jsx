import React, { useState } from 'react';
import QRCode from 'qrcode';

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function QRCodeGenerator() {
  const [mode, setMode] = useState('text');
  const [text, setText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [uploadService, setUploadService] = useState(''); // Track which service was used

  // Primary service: ImgBB (most reliable, no expiration)
  const uploadToImgBB = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const imgbbApiKey = process.env.REACT_APP_IMGBB_API_KEY;
    
    if (!imgbbApiKey || imgbbApiKey === 'YOUR_IMGBB_API_KEY_HERE') {
      throw new Error('ImgBB API key not configured');
    }

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`ImgBB upload failed: ${response.status}`);
    }

    const data = await response.json();
    if (data.success) {
      return {
        url: data.data.url,
        directUrl: data.data.url,
        filename: imageFile.name,
        size: imageFile.size,
        service: 'ImgBB',
        deleteUrl: data.data.delete_url
      };
    } else {
      throw new Error('ImgBB upload failed');
    }
  };

  // Backup service 1: PostImages (no API key required)
  const uploadToPostImages = async (imageFile) => {
    const formData = new FormData();
    formData.append('upload', imageFile);
    formData.append('action', 'upload');

    const response = await fetch('https://postimages.org/json/rr', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`PostImages upload failed: ${response.status}`);
    }

    const data = await response.json();
    if (data.status === 'OK') {
      return {
        url: data.url,
        directUrl: data.url,
        filename: imageFile.name,
        size: imageFile.size,
        service: 'PostImages'
      };
    } else {
      throw new Error('PostImages upload failed');
    }
  };

  // Main upload function with multiple fallbacks
  const uploadToCloudStorage = async (imageFile) => {
    const uploadMethods = [
      { name: 'ImgBB', func: uploadToImgBB },
      { name: 'PostImages', func: uploadToPostImages }
    ];

    let lastError;

    for (const method of uploadMethods) {
      try {
        console.log(`Trying ${method.name}...`);
        const result = await method.func(imageFile);
        setUploadService(result.service || method.name);
        return result;
      } catch (error) {
        console.log(`${method.name} failed:`, error.message);
        lastError = error;
        continue;
      }
    }

    throw new Error(`All upload methods failed. Last error: ${lastError?.message}`);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }

    // Generous limit for cloud storage - 10MB
    const maxSize = 10 * 1024 * 1024; 
    if (file.size > maxSize) {
      setError(`Image must be smaller than 10MB`);
      return;
    }

    setError('');
    setSelectedImage(file);
    setUploadService(''); // Reset service indicator

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const generateQRCode = async () => {
    if (mode === 'image' && !selectedImage) {
      setError('Please select an image to generate QR code');
      return;
    }

    if (mode !== 'image' && !text.trim()) {
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

      if (mode === 'image') {
        // Upload image to cloud storage
        const uploadResult = await uploadToCloudStorage(selectedImage);
        
        // For images, always use direct image URL (no app interface needed)
        qrContent = uploadResult.directUrl;
        displayUrl = uploadResult.directUrl;
        
      } else if (mode === 'link') {
        // Direct link mode
        qrContent = text.trim();
        displayUrl = text.trim();
      } else {
        // Text mode - goes through app interface
        let deployedUrl;
        if (process.env.REACT_APP_DEPLOYED_URL) {
          deployedUrl = process.env.REACT_APP_DEPLOYED_URL;
        } else if (process.env.NODE_ENV === 'production' || window.location.hostname !== 'localhost') {
          deployedUrl = 'https://hari-qrgenerator.netlify.app';
        } else {
          deployedUrl = window.location.origin;
        }
        
        qrContent = `${deployedUrl}/view?content=${encodeURIComponent(text)}`;
        displayUrl = qrContent;
      }

      setGeneratedUrl(displayUrl);

      const dataURL = await QRCode.toDataURL(qrContent, {
        width: 300,
        margin: 2,
        errorCorrectionLevel: 'L',
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
    setSelectedImage(null);
    setImagePreview('');
    setQrCodeDataURL('');
    setGeneratedUrl('');
    setError('');
    setUploadService('');
  };

  const testUrl = () => {
    if (generatedUrl) {
      const newWindow = window.open(generatedUrl, '_blank');
      if (newWindow) newWindow.focus();
    }
  };

  return (
    <div className="qr-generator">
      <h1>QR Code Generator</h1>

      <div className="input-section">
        <div className="text-input-container">
          <label htmlFor="mode-select">Choose QR Content Type:</label>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
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
            <button
              type="button"
              className={`generate-btn${mode === 'image' ? ' active' : ''}`}
              style={{ 
                opacity: mode === 'image' ? 1 : 0.6,
                backgroundColor: mode === 'image' ? '#667eea' : '#ccc'
              }}
              onClick={() => setMode('image')}
            >
              🖼️ Image
            </button>
          </div>
          
          {/* Service Status Indicator */}
          {uploadService && (
            <div style={{ 
              padding: '8px 12px', 
              backgroundColor: '#d4edda', 
              border: '1px solid #c3e6cb', 
              borderRadius: '4px', 
              marginBottom: '1rem',
              fontSize: '0.9em',
              color: '#155724'
            }}>
              ✅ <strong>Upload Service:</strong> {uploadService}
            </div>
          )}
          
          <div style={{ marginBottom: '1rem', padding: '10px', backgroundColor: '#f0f8ff', borderRadius: '5px', fontSize: '0.9em' }}>
            {mode === 'link' ? (
              <p>🔗 <strong>Direct Link Mode:</strong> QR code will contain your URL directly. Scanning will open the website immediately.</p>
            ) : mode === 'image' ? (
              <div>
                <p>🖼️ <strong>Image Mode:</strong> Upload any image and generate a QR code that shows it directly when scanned.</p>
                <p style={{ fontSize: '0.8em', color: '#666', marginTop: '0.5rem' }}>
                  💡 <strong>Works with any image size - multiple backup services ensure reliability</strong>
                </p>
              </div>
            ) : (
              <p>📝 <strong>Text Mode:</strong> QR code will show your text in a formatted page through this app.</p>
            )}
          </div>

          {mode === 'image' ? (
            <div className="image-upload-container">
              <label htmlFor="image-input">Upload Image (up to 10MB):</label>
              <input
                id="image-input"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
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
              
              {imagePreview && (
                <div className="image-preview" style={{ 
                  marginBottom: '1rem',
                  textAlign: 'center',
                  padding: '1rem',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                  border: '2px solid #e0e0e0'
                }}>
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
                    {selectedImage?.name} ({(selectedImage?.size / 1024).toFixed(1)} KB)
                  </p>
                  <p style={{ fontSize: '0.7em', color: '#999' }}>
                    ✅ QR code will show this image directly when scanned
                  </p>
                </div>
              )}

              <div style={{ 
                padding: '10px', 
                backgroundColor: '#e7f3ff', 
                border: '1px solid #b3d7ff', 
                borderRadius: '5px', 
                marginBottom: '1rem',
                fontSize: '0.9em'
              }}>
                <p><strong>🖼️ How it works:</strong></p>
                <ol style={{ marginTop: '5px', paddingLeft: '20px' }}>
                  <li>Your image will be uploaded to secure cloud storage</li>
                  <li>QR code will contain the direct image URL</li>
                  <li>Scanning shows the image immediately in any device's browser</li>
                  <li>No intermediate pages - instant image display!</li>
                </ol>
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}

          <div className="button-group">
            <button 
              onClick={generateQRCode} 
              disabled={isLoading || (mode === 'image' ? !selectedImage : !text.trim())}
              className={`generate-btn ${(isLoading || (mode === 'image' ? !selectedImage : !text.trim())) ? 'disabled' : ''}`}
            >
              {isLoading ? (mode === 'image' ? 'Uploading Image...' : 'Generating...') : 'Generate QR Code'}
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
              Test {mode === 'link' ? 'Direct Link' : mode === 'image' ? 'Direct Image' : 'App Link'}
            </button>
          </div>
          
          <div className="qr-info">
            <p>
              <strong>QR Code contains:</strong> 
              <a href={generatedUrl} target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>
                {mode === 'image' 
                  ? 'Direct image URL' 
                  : generatedUrl.length > 50 ? `${generatedUrl.substring(0, 50)}...` : generatedUrl
                }
              </a>
            </p>
            
            {mode === 'image' && uploadService && (
              <p style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem' }}>
                <strong>Uploaded via:</strong> {uploadService} ✅
              </p>
            )}
            
            <div className="scanning-info">
              <h4>📱 How it works when scanned:</h4>
              {mode === 'link' ? (
                <ol>
                  <li>🔗 Opens the website directly in your browser</li>
                  <li>✨ No intermediate pages - instant access!</li>
                </ol>
              ) : mode === 'image' ? (
                <ol>
                  <li>🖼️ Shows the image immediately in your device's browser</li>
                  <li>📱 Works on any phone or tablet</li>
                  <li>✨ No app installation required</li>
                  <li>🔒 Images stored securely in the cloud</li>
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