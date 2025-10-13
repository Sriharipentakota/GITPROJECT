# QR Code Generator - Deployment Guide

## Quick Deploy to Netlify

### Option 1: Drag & Drop Deploy
1. Build the project locally:
   ```
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Drag the `build` folder to Netlify's deploy area
4. Get your deployment URL (e.g., `https://amazing-site-123456.netlify.app`)
5. Update the `deployedUrl` in `QRCodeGenerator.jsx` with your actual URL

### Option 2: Git Deploy (Recommended)
1. Push this code to GitHub
2. Connect your GitHub repo to Netlify
3. Netlify will auto-deploy and give you a URL
4. Update the `deployedUrl` in the code with your real URL

### Option 3: Custom Domain
- If you have `hari-qrgenerator.netlify.app`, configure it in Netlify settings
- Or use your own custom domain

## After Deployment
1. Replace the URL in `QRCodeGenerator.jsx` line 23:
   ```javascript
   const deployedUrl = 'https://your-actual-netlify-url.netlify.app';
   ```
2. Redeploy with the correct URL
3. Test QR codes - they'll work on any device!

## Testing
- Generate a QR code locally
- Scan with your phone
- The link should open your deployed site
