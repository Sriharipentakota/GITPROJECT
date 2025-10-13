import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

function QRCodeGenerator() {
  const [inputType, setInputType] = useState('text');
  const [textInput, setTextInput] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [imageDataUrl, setImageDataUrl] = useState('');
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (inputType === 'text' && textInput.trim()) {
      generateQRFromText(textInput);
    } else if (inputType === 'image' && imageDataUrl) {
      generateQRFromImage(imageDataUrl);
    } else {
      setQrCodeUrl('');
    }
  }, [textInput, imageDataUrl, inputType]);

  const generateQRFromText = async (text) => {
    try {
      const url = await QRCode.toDataURL(text, {
        width: 300,
        margin: 2,
        errorCorrectionLevel: 'M',
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCodeUrl(url);
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };

  const compressImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const maxSize = 400;

          if (width > height && width > maxSize) {
            height = (height * maxSize) / width;
            width = maxSize;
          } else if (height > maxSize) {
            width = (width * maxSize) / height;
            height = maxSize;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
          resolve(compressedDataUrl);
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const generateQRFromImage = async (dataUrl) => {
    try {
      setProcessing(true);
      const url = await QRCode.toDataURL(dataUrl, {
        width: 300,
        margin: 2,
        errorCorrectionLevel: 'L',
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCodeUrl(url);
      setProcessing(false);
    } catch (err) {
      console.error('Error generating QR code:', err);
      alert('Unable to generate QR code. Please try a different image.');
      setProcessing(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }

    try {
      setProcessing(true);
      setImageFile(file);

      const originalReader = new FileReader();
      originalReader.onload = () => {
        setImageDataUrl(originalReader.result);
      };
      originalReader.readAsDataURL(file);

      const compressedDataUrl = await compressImage(file);
      setImageDataUrl(compressedDataUrl);
      setProcessing(false);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Error processing image. Please try again.');
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.href = qrCodeUrl;
      link.download = `qrcode-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleInputTypeChange = (type) => {
    setInputType(type);
    setTextInput('');
    setImageFile(null);
    setImageDataUrl('');
    setQrCodeUrl('');
  };

  return (
    <div className="qr-generator">
      <h1>QR Code Generator</h1>

      <div className="input-type-selector">
        <button
          className={inputType === 'text' ? 'active' : ''}
          onClick={() => handleInputTypeChange('text')}
        >
          Text
        </button>
        <button
          className={inputType === 'image' ? 'active' : ''}
          onClick={() => handleInputTypeChange('image')}
        >
          Image
        </button>
      </div>

      <div className="input-section">
        {inputType === 'text' ? (
          <div className="text-input-container">
            <label htmlFor="text-input">Enter text to encode:</label>
            <textarea
              id="text-input"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Type something..."
              rows="4"
            />
          </div>
        ) : (
          <div className="image-input-container">
            <label htmlFor="image-input">Upload an image:</label>
            <input
              id="image-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={processing}
            />
            {processing && <p className="upload-status">Processing image...</p>}
            {imageFile && !processing && (
              <>
                <p className="file-name">Selected: {imageFile.name}</p>
                <div className="image-preview">
                  <img src={imageDataUrl} alt="Uploaded preview" />
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {qrCodeUrl && (
        <div className="qr-output">
          <h2>Generated QR Code</h2>
          <div className="qr-code-container">
            <img src={qrCodeUrl} alt="Generated QR Code" />
          </div>
          <button className="download-btn" onClick={handleDownload}>
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
