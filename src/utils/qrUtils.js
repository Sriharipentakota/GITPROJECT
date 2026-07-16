import QRCode from 'qrcode';

const DEFAULT_QR_OPTIONS = {
  width: 300,
  margin: 4,
  errorCorrectionLevel: 'M',
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  }
};

export const generateQRCodeDataURL = async (content, options = {}) => {
  if (!content || typeof content !== 'string') {
    throw new Error('Valid content string is required');
  }
  const qrOptions = {
    ...DEFAULT_QR_OPTIONS,
    ...options,
    color: {
      ...DEFAULT_QR_OPTIONS.color,
      ...(options.color || {})
    }
  };
  const dataURL = await QRCode.toDataURL(content, qrOptions);
  return dataURL;
};

/**
 * Generates QR code with optional centered logo overlay using Canvas API.
 * Requires error correction level Q or H when a logo is used.
 */
export const generateQRCodeWithLogo = async (content, options = {}, logoDataURL = null, logoSizePercent = 20) => {
  if (!content || typeof content !== 'string') {
    throw new Error('Valid content string is required');
  }

  const qrOptions = {
    ...DEFAULT_QR_OPTIONS,
    ...options,
    color: {
      dark: options.fgColor || options.color?.dark || '#000000',
      light: options.bgColor || options.color?.light || '#FFFFFF'
    }
  };

  const canvas = document.createElement('canvas');
  canvas.width = qrOptions.width || 300;
  canvas.height = qrOptions.width || 300;

  await QRCode.toCanvas(canvas, content, qrOptions);

  if (logoDataURL) {
    await drawLogoOnCanvas(canvas, logoDataURL, logoSizePercent);
  }

  return canvas.toDataURL('image/png');
};

async function drawLogoOnCanvas(canvas, logoDataURL, logoSizePercent) {
  const ctx = canvas.getContext('2d');
  const qrSize = canvas.width;
  const clampedPercent = Math.min(Math.max(logoSizePercent, 5), 35);
  const logoSize = Math.floor(qrSize * (clampedPercent / 100));
  const logoX = Math.floor((qrSize - logoSize) / 2);
  const logoY = Math.floor((qrSize - logoSize) / 2);
  const padding = 4;

  return new Promise((resolve) => {
    const logo = new Image();
    logo.onload = () => {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.roundRect
        ? ctx.roundRect(logoX - padding, logoY - padding, logoSize + padding * 2, logoSize + padding * 2, 6)
        : ctx.rect(logoX - padding, logoY - padding, logoSize + padding * 2, logoSize + padding * 2);
      ctx.fill();
      ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
      resolve();
    };
    logo.onerror = resolve;
    logo.src = logoDataURL;
  });
}

export const getQROptionsForContentType = (contentType) => {
  const base = { ...DEFAULT_QR_OPTIONS };
  switch (contentType) {
    case 'link':
      return { ...base, errorCorrectionLevel: 'M' };
    case 'image':
      return { ...base, errorCorrectionLevel: 'M', width: 350 };
    case 'wifi':
    case 'contact':
    case 'event':
      return { ...base, errorCorrectionLevel: 'Q' };
    default:
      return base;
  }
};

/**
 * Calculates a scannability quality score (0–100) and returns issues list.
 */
export const calculateQualityScore = (content, customization = {}) => {
  const { fgColor = '#000000', bgColor = '#ffffff', width = 300, margin = 4, ecl = 'M', logoDataURL = null, logoSizePercent = 20 } = customization;

  let score = 100;
  const issues = [];

  // ECL
  if (ecl === 'L') {
    score -= 15;
    issues.push({ level: 'warning', text: 'Low error correction (L) — consider M or Q for reliability' });
  } else if (ecl === 'H' && !logoDataURL) {
    score -= 3;
    issues.push({ level: 'info', text: 'High ECL (H) is best used when adding a logo' });
  }

  // Size
  if (width < 150) {
    score -= 25;
    issues.push({ level: 'error', text: 'QR code is too small — minimum 200px recommended for reliable scanning' });
  } else if (width < 200) {
    score -= 12;
    issues.push({ level: 'warning', text: 'Consider increasing size to at least 200px' });
  } else if (width >= 400) {
    issues.push({ level: 'info', text: 'Large QR — ideal for print and posters' });
  }

  // Margin / quiet zone
  if (margin < 1) {
    score -= 20;
    issues.push({ level: 'error', text: 'No quiet zone — scanners need margin around the QR code' });
  } else if (margin < 3) {
    score -= 8;
    issues.push({ level: 'warning', text: 'Small quiet zone — increase margin to 3–4 for better scanning' });
  }

  // Color contrast
  const contrast = getContrastRatio(fgColor, bgColor);
  if (contrast < 2) {
    score -= 30;
    issues.push({ level: 'error', text: 'Color contrast is too low — scanner may not read the QR code' });
  } else if (contrast < 4) {
    score -= 15;
    issues.push({ level: 'warning', text: 'Color contrast is low — dark foreground on light background works best' });
  } else if (contrast < 5) {
    score -= 5;
    issues.push({ level: 'warning', text: 'Contrast could be improved for more reliable scanning' });
  }

  // Data density
  const len = (content || '').length;
  if (len > 500) {
    score -= 20;
    issues.push({ level: 'warning', text: 'Content is very long — the QR will be dense and harder to scan' });
  } else if (len > 200) {
    score -= 8;
    issues.push({ level: 'info', text: 'Moderately long content — use ECL M or higher' });
  }

  // Logo size
  if (logoDataURL) {
    if (logoSizePercent > 30) {
      score -= 25;
      issues.push({ level: 'error', text: 'Logo is too large — keep it under 30% of the QR size' });
    } else if (logoSizePercent > 22) {
      score -= 10;
      issues.push({ level: 'warning', text: 'Logo is large — consider reducing or using ECL H' });
    }
    if (ecl === 'L' || ecl === 'M') {
      score -= 8;
      issues.push({ level: 'warning', text: 'Use error correction Q or H when adding a logo' });
    }
  }

  const clamped = Math.max(0, Math.min(100, Math.round(score)));
  let rating, ratingClass;
  if (clamped >= 85) { rating = 'Excellent'; ratingClass = 'excellent'; }
  else if (clamped >= 70) { rating = 'Good'; ratingClass = 'good'; }
  else if (clamped >= 50) { rating = 'Fair'; ratingClass = 'fair'; }
  else { rating = 'Poor'; ratingClass = 'poor'; }

  return { score: clamped, rating, ratingClass, issues };
};

function hexToLinearRGB(hex) {
  const clean = hex.replace('#', '').slice(0, 6);
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;
  return [r, g, b].map(c => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
}

function getLuminance(hex) {
  if (!hex || !hex.startsWith('#')) return 0;
  const [r, g, b] = hexToLinearRGB(hex);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function getContrastRatio(color1, color2) {
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
