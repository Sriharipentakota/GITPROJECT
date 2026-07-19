/**
 * Image upload service — ImgBB only.
 *
 * PostImages was removed: it does not set CORS headers so requests from
 * capacitor://localhost are blocked by the WebView. ImgBB supports CORS.
 *
 * Requires env var: REACT_APP_IMGBB_API_KEY
 */

import { UPLOAD_SERVICES } from '../constants';

const uploadToImgBB = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const imgbbApiKey = process.env.REACT_APP_IMGBB_API_KEY;
  if (!imgbbApiKey || imgbbApiKey === 'YOUR_IMGBB_API_KEY_HERE') {
    throw new Error('ImgBB API key not configured. Set REACT_APP_IMGBB_API_KEY in your .env file.');
  }

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`ImgBB upload failed: ${response.status}`);
  }

  const data = await response.json();
  if (!data.success) {
    throw new Error('ImgBB upload failed: server returned success=false');
  }

  return {
    url: data.data.url,
    directUrl: data.data.url,
    filename: imageFile.name,
    size: imageFile.size,
    service: UPLOAD_SERVICES.IMGBB,
    deleteUrl: data.data.delete_url,
  };
};

export const uploadToCloudStorage = async (imageFile) => {
  return await uploadToImgBB(imageFile);
};
