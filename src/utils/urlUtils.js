import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

/**
 * Gets the deployed URL for generating QR content.
 * In the APK the QR codes still point to the hosted web viewer so they work
 * when scanned by any camera — not just inside the app.
 */
export const getDeployedUrl = () => {
  if (process.env.REACT_APP_DEPLOYED_URL) {
    return process.env.REACT_APP_DEPLOYED_URL;
  }
  return 'https://hari-qrgenerator.netlify.app';
};

/**
 * Generates a view URL for plain-text QR content.
 */
export const generateViewUrl = (text) => {
  const baseUrl = getDeployedUrl();
  return `${baseUrl}/view?content=${encodeURIComponent(text)}`;
};

/**
 * Opens a URL externally.
 * On Android (APK) uses Capacitor Browser plugin so the system browser opens.
 * On web falls back to window.open.
 */
export const openUrlInNewTab = async (url) => {
  if (!url) return false;
  try {
    if (Capacitor.isNativePlatform()) {
      await Browser.open({ url });
      return true;
    }
    const w = window.open(url, '_blank', 'noopener,noreferrer');
    if (w) { w.focus(); return true; }
    return false;
  } catch (error) {
    console.error('Failed to open URL:', error);
    return false;
  }
};

/**
 * Downloads or saves a QR code PNG.
 *
 * - Native (APK): writes to the device's cache directory then opens the
 *   system share sheet so the user can save it to Photos/Files/Drive/etc.
 *   No WRITE_EXTERNAL_STORAGE permission needed on Android 10+.
 * - Web: triggers the browser's built-in <a download> flow.
 */
export const triggerFileDownload = async (dataURL, filename) => {
  if (!dataURL || !filename) {
    console.error('Data URL and filename are required for download');
    return;
  }

  if (Capacitor.isNativePlatform()) {
    try {
      // Strip the data URI header to get raw base64
      const base64Data = dataURL.includes(',') ? dataURL.split(',')[1] : dataURL;

      // Write to cache (no storage permission required)
      const result = await Filesystem.writeFile({
        path: filename,
        data: base64Data,
        directory: Directory.Cache,
        recursive: true,
      });

      // Open the system share sheet so the user can save where they want
      await Share.share({
        title: filename,
        url: result.uri,
        dialogTitle: 'Save or share your QR code',
      });
    } catch (err) {
      console.error('Native save failed:', err);
    }
    return;
  }

  // Web fallback — standard <a download> click
  try {
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Failed to trigger file download:', error);
  }
};
