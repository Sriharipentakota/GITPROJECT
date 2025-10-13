import React, { useState, useRef, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function QRScanner({ onScanSuccess, onScanError }) {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef(null);

  useEffect(() => {
    let scanner = null;
    
    const initScanner = () => {
      try {
        setIsScanning(true);
        scanner = new Html5QrcodeScanner(
          "qr-scanner-container",
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
            aspectRatio: 1.0,
            showTorchButtonIfSupported: true,
            showZoomSliderIfSupported: true,
            defaultZoomValueIfSupported: 1,
          },
          false
        );

        scanner.render(
          (decodedText) => {
            console.log("QR Code scanned:", decodedText);
            setScanResult(decodedText);
            onScanSuccess(decodedText);
            setIsScanning(false);
            // Don't clear scanner immediately, let parent handle it
          },
          (error) => {
            console.log("QR Scanner error:", error);
            // Only report actual errors, not scanning attempts
            if (error.includes("NotFoundException") === false) {
              onScanError(error);
            }
          }
        );

        scannerRef.current = scanner;
      } catch (error) {
        console.error("Failed to initialize scanner:", error);
        onScanError("Failed to initialize camera. Please check camera permissions.");
        setIsScanning(false);
      }
    };

    const timeoutId = setTimeout(initScanner, 100);

    return () => {
      clearTimeout(timeoutId);
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
      }
    };
  }, [onScanSuccess, onScanError]);

  return (
    <div className="qr-scanner">
      <h2>QR Code Scanner</h2>
      <p className="scanner-instructions">
        Point your camera at a QR code to scan it
      </p>
      <div id="qr-scanner-container" className="scanner-container"></div>
      {isScanning && (
        <div className="scanning-status">
          <p>📷 Camera is ready - point at QR code to scan</p>
        </div>
      )}
      {scanResult && (
        <div className="scan-result">
          <h3>Scanned Content:</h3>
          <p>{scanResult}</p>
        </div>
      )}
    </div>
  );
}

export default QRScanner;
