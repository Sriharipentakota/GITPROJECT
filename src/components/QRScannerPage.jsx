import React, { useState } from 'react';
import QRScanner from './QRScanner';
import ScannerResult from './ScannerResult';

function QRScannerPage() {
  const [scannedText, setScannedText] = useState('');
  const [scanError, setScanError] = useState('');

  const handleScanSuccess = (decodedText) => {
    setScannedText(decodedText);
    setScanError('');
  };

  const handleScanError = (error) => {
    setScanError('Error scanning QR code. Please try again.');
  };

  const handleClearResult = () => {
    setScannedText('');
    setScanError('');
  };

  return (
    <div className="scanner-page">
      {!scannedText ? (
        <div>
          <QRScanner 
            onScanSuccess={handleScanSuccess}
            onScanError={handleScanError}
          />
          {scanError && (
            <div className="scan-error">
              {scanError}
            </div>
          )}
        </div>
      ) : (
        <ScannerResult 
          scannedText={scannedText}
          onClear={handleClearResult}
        />
      )}
    </div>
  );
}

export default QRScannerPage;
