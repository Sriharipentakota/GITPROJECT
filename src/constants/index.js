/**
 * QR Experience Studio — Application Constants
 */

export const QR_MODES = { TEXT: 'text', LINK: 'link', IMAGE: 'image' };

export const FILE_SIZE_LIMITS = {
  IMAGE_MAX_SIZE_MB: 10,
  IMAGE_RECOMMENDED_SIZE_MB: 5,
  LOGO_MAX_SIZE_MB: 2
};

export const UPLOAD_SERVICES = { IMGBB: 'ImgBB', POST_IMAGES: 'PostImages' };

export const QR_LIBRARY_STORAGE_KEY = 'qr_studio_library_v1';
export const QR_SETTINGS_STORAGE_KEY = 'qr_studio_settings_v1';

export const DEFAULT_CUSTOMIZATION = {
  fgColor: '#000000',
  bgColor: '#ffffff',
  width: 300,
  margin: 4,
  ecl: 'M',
  logoDataURL: null,
  logoSizePercent: 20
};

export const ECL_OPTIONS = [
  { value: 'L', label: 'L — Low (7% recovery)', description: 'Smallest QR, lower density content' },
  { value: 'M', label: 'M — Medium (15% recovery)', description: 'Balanced choice for most use cases' },
  { value: 'Q', label: 'Q — Quartile (25% recovery)', description: 'Good for logos or damaged QR risk' },
  { value: 'H', label: 'H — High (30% recovery)', description: 'Best with logos, larger QR code' }
];

export const STYLE_PRESETS = [
  { id: 'classic', name: 'Classic', fgColor: '#000000', bgColor: '#ffffff' },
  { id: 'midnight', name: 'Midnight', fgColor: '#1e293b', bgColor: '#f8fafc' },
  { id: 'ocean', name: 'Ocean', fgColor: '#1d4ed8', bgColor: '#eff6ff' },
  { id: 'forest', name: 'Forest', fgColor: '#15803d', bgColor: '#f0fdf4' },
  { id: 'sunset', name: 'Sunset', fgColor: '#9f1239', bgColor: '#fff1f2' },
  { id: 'violet', name: 'Violet', fgColor: '#6d28d9', bgColor: '#f5f3ff' },
  { id: 'amber', name: 'Amber', fgColor: '#92400e', bgColor: '#fffbeb' },
  { id: 'slate', name: 'Slate', fgColor: '#334155', bgColor: '#f1f5f9' }
];

export const DESIGN_PRESETS = [
  { id: 'classic',       label: 'Classic',        fgColor: '#000000', bgColor: '#FFFFFF', category: 'standard' },
  { id: 'midnight',      label: 'Midnight',       fgColor: '#1e293b', bgColor: '#f8fafc', category: 'standard' },
  { id: 'ocean',         label: 'Ocean',          fgColor: '#1d4ed8', bgColor: '#eff6ff', category: 'color' },
  { id: 'forest',        label: 'Forest',         fgColor: '#15803d', bgColor: '#f0fdf4', category: 'color' },
  { id: 'sunset',        label: 'Sunset',         fgColor: '#9f1239', bgColor: '#fff1f2', category: 'color' },
  { id: 'violet',        label: 'Violet',         fgColor: '#6d28d9', bgColor: '#f5f3ff', category: 'color' },
  { id: 'amber',         label: 'Amber',          fgColor: '#92400e', bgColor: '#fffbeb', category: 'color' },
  { id: 'corporate',     label: 'Corporate',      fgColor: '#1e3a5f', bgColor: '#f8fafc', category: 'professional' },
  { id: 'high-contrast', label: 'High Contrast',  fgColor: '#000000', bgColor: '#FFFFFF', category: 'accessibility' },
  { id: 'slate',         label: 'Slate',          fgColor: '#334155', bgColor: '#f1f5f9', category: 'professional' },
];

/** Intent goals — map user intent to the best QR template */
export const INTENTS = [
  {
    id: 'share-website',
    label: 'Share a Website',
    description: 'Link to any URL — product page, portfolio, landing page',
    icon: '🌐',
    accentColor: '#6D6AFC',
    templateId: 'website',
    hint: 'Enter any https:// URL',
    category: 'web'
  },
  {
    id: 'share-image',
    label: 'Share an Image',
    description: 'Let anyone view a photo or graphic by scanning',
    icon: '🖼️',
    accentColor: '#EC4899',
    templateId: 'image',
    hint: 'Upload a JPG, PNG, or WebP image',
    category: 'media'
  },
  {
    id: 'publish-content',
    label: 'Publish Content',
    description: 'Share text, instructions, or training material',
    icon: '📄',
    accentColor: '#0EA5E9',
    templateId: 'text',
    hint: 'Write a message or paste content',
    category: 'content'
  },
  {
    id: 'create-event',
    label: 'Create Event QR',
    description: 'Scanning adds the event directly to a calendar',
    icon: '📅',
    accentColor: '#8B5CF6',
    templateId: 'event',
    hint: 'Set date, time, location, and description',
    category: 'utilities'
  },
  {
    id: 'share-wifi',
    label: 'Share Wi-Fi Access',
    description: 'Connect guests without typing the password',
    icon: '📶',
    accentColor: '#14B8A6',
    templateId: 'wifi',
    hint: 'Enter your network name and password',
    category: 'utilities'
  },
  {
    id: 'share-contact',
    label: 'Share Contact Details',
    description: 'Let people save your info to their contacts instantly',
    icon: '👤',
    accentColor: '#F59E0B',
    templateId: 'contact',
    hint: 'Name, phone, email, organization',
    category: 'contact'
  },
  {
    id: 'collect-feedback',
    label: 'Collect Feedback',
    description: 'Link to a survey, form, or feedback page',
    icon: '💬',
    accentColor: '#10B981',
    templateId: 'website',
    hint: 'Paste your form or survey URL',
    category: 'web'
  },
  {
    id: 'product-label',
    label: 'Product Label',
    description: 'Link customers to product details, support, or instructions',
    icon: '🏷️',
    accentColor: '#F43F5E',
    templateId: 'website',
    hint: 'Product page or support URL',
    category: 'web'
  },
];

/** Physical-world mockup scenes for the Preview Lab */
export const MOCKUP_SCENES = [
  {
    id: 'business-card',
    label: 'Business Card',
    icon: '💼',
    svgWidth: 340,
    svgHeight: 215,
    bgColor: '#FFFFFF',
    fgColor: '#1E293B',
    description: '85 × 54 mm — ISO 7810 ID-1',
    defaultQRSize: 72,
    defaultQRX: 252,
    defaultQRY: 71,
    minQRSize: 48,
    warningBelowSize: 56,
    maxQRSize: 120,
  },
  {
    id: 'a4-poster',
    label: 'A4 Poster',
    icon: '📄',
    svgWidth: 240,
    svgHeight: 340,
    bgColor: '#F8F9FA',
    fgColor: '#111827',
    description: '210 × 297 mm',
    defaultQRSize: 100,
    defaultQRX: 70,
    defaultQRY: 220,
    minQRSize: 60,
    warningBelowSize: 80,
    maxQRSize: 160,
  },
  {
    id: 'event-badge',
    label: 'Event Badge',
    icon: '🏷️',
    svgWidth: 240,
    svgHeight: 330,
    bgColor: '#1E1B4B',
    fgColor: '#EDE9FE',
    description: '80 × 110 mm lanyard badge',
    defaultQRSize: 90,
    defaultQRX: 75,
    defaultQRY: 195,
    minQRSize: 60,
    warningBelowSize: 70,
    maxQRSize: 140,
  },
  {
    id: 'product-label',
    label: 'Product Label',
    icon: '📦',
    svgWidth: 240,
    svgHeight: 160,
    bgColor: '#FFFFFF',
    fgColor: '#1E293B',
    description: '60 × 40 mm label',
    defaultQRSize: 70,
    defaultQRX: 155,
    defaultQRY: 45,
    minQRSize: 40,
    warningBelowSize: 56,
    maxQRSize: 100,
  },
  {
    id: 'table-card',
    label: 'Menu / Table',
    icon: '🍽️',
    svgWidth: 220,
    svgHeight: 310,
    bgColor: '#FEF9F0',
    fgColor: '#78350F',
    description: '70 × 100 mm table tent',
    defaultQRSize: 100,
    defaultQRX: 60,
    defaultQRY: 170,
    minQRSize: 60,
    warningBelowSize: 80,
    maxQRSize: 140,
  },
  {
    id: 'sticker',
    label: 'Sticker / Label',
    icon: '💻',
    svgWidth: 200,
    svgHeight: 200,
    bgColor: '#FFFFFF',
    fgColor: '#0F172A',
    description: '50 × 50 mm circular sticker',
    defaultQRSize: 140,
    defaultQRX: 30,
    defaultQRY: 30,
    minQRSize: 80,
    warningBelowSize: 100,
    maxQRSize: 160,
  },
];

/** Health check definitions used by QRHealthCenter */
export const HEALTH_CHECKS = {
  CONTENT: { id: 'content', label: 'Content present', weight: 20 },
  URL_VALID: { id: 'url_valid', label: 'URL valid', weight: 10 },
  HTTPS: { id: 'https', label: 'HTTPS used', weight: 5 },
  CONTRAST: { id: 'contrast', label: 'Color contrast', weight: 15 },
  SIZE: { id: 'size', label: 'QR size adequate', weight: 15 },
  MARGIN: { id: 'margin', label: 'Quiet zone sufficient', weight: 10 },
  ECL: { id: 'ecl', label: 'Error correction suitable', weight: 10 },
  DATA_DENSITY: { id: 'data_density', label: 'Data density manageable', weight: 10 },
  LOGO_SIZE: { id: 'logo_size', label: 'Logo size safe', weight: 5 },
};

/** QR Timeline event types */
export const TIMELINE_EVENTS = {
  CREATED:    { id: 'created',    label: 'Created',    icon: '✦' },
  UPDATED:    { id: 'updated',    label: 'Updated',    icon: '↻' },
  STYLED:     { id: 'styled',     label: 'Styled',     icon: '◈' },
  TESTED:     { id: 'tested',     label: 'Tested',     icon: '◎' },
  DOWNLOADED: { id: 'downloaded', label: 'Downloaded', icon: '↓' },
  SAVED:      { id: 'saved',      label: 'Saved',      icon: '◆' },
};

export const TEMPLATES = [
  {
    id: 'website',
    name: 'Website',
    icon: '🌐',
    color: '#3b82f6',
    colorClass: 'tmpl-blue',
    description: 'Link to any website or web page',
    category: 'web',
    fields: [
      { id: 'url', label: 'Website URL', placeholder: 'https://example.com', type: 'url', required: true }
    ],
    format: (data) => data.url || '',
    validate: (data) => {
      if (!data.url) return 'URL is required';
      try { new URL(data.url); return null; } catch { return 'Enter a valid URL (include https://)'; }
    }
  },
  {
    id: 'text',
    name: 'Text',
    icon: '📝',
    color: '#6366f1',
    colorClass: 'tmpl-indigo',
    description: 'Display a text message when scanned',
    category: 'basic',
    fields: [
      { id: 'text', label: 'Text Content', placeholder: 'Enter your message or text...', type: 'textarea', required: true }
    ],
    format: (data, deployedUrl) => {
      const base = deployedUrl || window.location.origin;
      return `${base}/view?content=${encodeURIComponent(data.text || '')}`;
    },
    validate: (data) => data.text ? null : 'Text content is required'
  },
  {
    id: 'image',
    name: 'Image',
    icon: '🖼️',
    color: '#ec4899',
    colorClass: 'tmpl-pink',
    description: 'Show an image when scanned',
    category: 'media',
    fields: [],
    format: (data) => data.imageUrl || '',
    validate: (data) => data.imageUrl ? null : 'Please upload an image'
  },
  {
    id: 'wifi',
    name: 'Wi-Fi',
    icon: '📶',
    color: '#22c55e',
    colorClass: 'tmpl-green',
    description: 'Auto-connect to Wi-Fi network',
    category: 'utilities',
    fields: [
      { id: 'ssid', label: 'Network Name (SSID)', placeholder: 'MyHomeWiFi', type: 'text', required: true },
      { id: 'password', label: 'Password', placeholder: 'Leave blank for open networks', type: 'password', required: false },
      { id: 'security', label: 'Security Type', type: 'select', options: ['WPA/WPA2', 'WEP', 'None'], required: true },
      { id: 'hidden', label: 'Hidden network', type: 'checkbox', required: false }
    ],
    format: (data) => {
      const sec = data.security === 'None' ? 'nopass' : data.security === 'WEP' ? 'WEP' : 'WPA';
      return `WIFI:S:${data.ssid || ''};T:${sec};P:${data.password || ''};H:${data.hidden ? 'true' : 'false'};;`;
    },
    validate: (data) => data.ssid ? null : 'Network name (SSID) is required'
  },
  {
    id: 'email',
    name: 'Email',
    icon: '✉️',
    color: '#f59e0b',
    colorClass: 'tmpl-amber',
    description: 'Compose an email when scanned',
    category: 'contact',
    fields: [
      { id: 'to', label: 'To (Email Address)', placeholder: 'recipient@example.com', type: 'email', required: true },
      { id: 'subject', label: 'Subject (optional)', placeholder: 'Hello!', type: 'text', required: false },
      { id: 'body', label: 'Body (optional)', placeholder: 'Email body text...', type: 'textarea', required: false }
    ],
    format: (data) => {
      let url = `mailto:${data.to || ''}`;
      const params = [];
      if (data.subject) params.push(`subject=${encodeURIComponent(data.subject)}`);
      if (data.body) params.push(`body=${encodeURIComponent(data.body)}`);
      if (params.length) url += `?${params.join('&')}`;
      return url;
    },
    validate: (data) => data.to ? null : 'Email address is required'
  },
  {
    id: 'phone',
    name: 'Phone',
    icon: '📞',
    color: '#06b6d4',
    colorClass: 'tmpl-cyan',
    description: 'Dial a number when scanned',
    category: 'contact',
    fields: [
      { id: 'phone', label: 'Phone Number', placeholder: '+1 555 123 4567', type: 'tel', required: true }
    ],
    format: (data) => `tel:${(data.phone || '').replace(/\s+/g, '')}`,
    validate: (data) => data.phone ? null : 'Phone number is required'
  },
  {
    id: 'sms',
    name: 'SMS',
    icon: '💬',
    color: '#8b5cf6',
    colorClass: 'tmpl-violet',
    description: 'Send a text message when scanned',
    category: 'contact',
    fields: [
      { id: 'phone', label: 'Phone Number', placeholder: '+1 555 123 4567', type: 'tel', required: true },
      { id: 'message', label: 'Message (optional)', placeholder: 'Pre-filled message text...', type: 'textarea', required: false }
    ],
    format: (data) => {
      const num = (data.phone || '').replace(/\s+/g, '');
      return `smsto:${num}${data.message ? ':' + data.message : ''}`;
    },
    validate: (data) => data.phone ? null : 'Phone number is required'
  },
  {
    id: 'contact',
    name: 'Contact Card',
    icon: '👤',
    color: '#db2777',
    colorClass: 'tmpl-rose',
    description: 'Save contact info (vCard) when scanned',
    category: 'contact',
    fields: [
      { id: 'firstName', label: 'First Name', placeholder: 'John', type: 'text', required: true },
      { id: 'lastName', label: 'Last Name', placeholder: 'Doe', type: 'text', required: false },
      { id: 'org', label: 'Organization', placeholder: 'Company Name', type: 'text', required: false },
      { id: 'title', label: 'Job Title', placeholder: 'Software Engineer', type: 'text', required: false },
      { id: 'phone', label: 'Phone', placeholder: '+1 555 123 4567', type: 'tel', required: false },
      { id: 'email', label: 'Email', placeholder: 'john@example.com', type: 'email', required: false },
      { id: 'website', label: 'Website', placeholder: 'https://example.com', type: 'url', required: false }
    ],
    format: (data) => {
      const fn = `${data.firstName || ''} ${data.lastName || ''}`.trim();
      let v = 'BEGIN:VCARD\nVERSION:3.0\n';
      v += `N:${data.lastName || ''};${data.firstName || ''};;;\n`;
      v += `FN:${fn}\n`;
      if (data.org) v += `ORG:${data.org}\n`;
      if (data.title) v += `TITLE:${data.title}\n`;
      if (data.phone) v += `TEL:${data.phone}\n`;
      if (data.email) v += `EMAIL:${data.email}\n`;
      if (data.website) v += `URL:${data.website}\n`;
      v += 'END:VCARD';
      return v;
    },
    validate: (data) => data.firstName ? null : 'First name is required'
  },
  {
    id: 'event',
    name: 'Event',
    icon: '📅',
    color: '#ef4444',
    colorClass: 'tmpl-red',
    description: 'Add to calendar when scanned (iCal)',
    category: 'utilities',
    fields: [
      { id: 'title', label: 'Event Title', placeholder: 'Team Meeting', type: 'text', required: true },
      { id: 'location', label: 'Location (optional)', placeholder: 'Conference Room A', type: 'text', required: false },
      { id: 'startDate', label: 'Start Date & Time', type: 'datetime-local', required: true },
      { id: 'endDate', label: 'End Date & Time (optional)', type: 'datetime-local', required: false },
      { id: 'description', label: 'Description (optional)', placeholder: 'Event details...', type: 'textarea', required: false }
    ],
    format: (data) => {
      const fmtDate = (d) => d ? d.replace(/[-:]/g, '').replace('T', 'T').substring(0, 15) + '00' : '';
      let ev = 'BEGIN:VEVENT\n';
      ev += `SUMMARY:${data.title || ''}\n`;
      if (data.location) ev += `LOCATION:${data.location}\n`;
      if (data.startDate) ev += `DTSTART:${fmtDate(data.startDate)}\n`;
      if (data.endDate) ev += `DTEND:${fmtDate(data.endDate)}\n`;
      if (data.description) ev += `DESCRIPTION:${data.description}\n`;
      ev += 'END:VEVENT';
      return ev;
    },
    validate: (data) => {
      if (!data.title) return 'Event title is required';
      if (!data.startDate) return 'Start date is required';
      return null;
    }
  },
  {
    id: 'social',
    name: 'Social Media',
    icon: '📱',
    color: '#0ea5e9',
    colorClass: 'tmpl-sky',
    description: 'Link to a social media profile',
    category: 'web',
    fields: [
      {
        id: 'platform', label: 'Platform', type: 'select',
        options: ['Instagram', 'Twitter / X', 'LinkedIn', 'Facebook', 'YouTube', 'TikTok', 'GitHub', 'Pinterest', 'Other'],
        required: true
      },
      { id: 'url', label: 'Profile URL', placeholder: 'https://instagram.com/username', type: 'url', required: true }
    ],
    format: (data) => data.url || '',
    validate: (data) => {
      if (!data.url) return 'Profile URL is required';
      try { new URL(data.url); return null; } catch { return 'Enter a valid profile URL'; }
    }
  }
];

export const TEMPLATE_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'basic', label: 'Basic' },
  { id: 'web', label: 'Web & Social' },
  { id: 'contact', label: 'Contact' },
  { id: 'utilities', label: 'Utilities' },
  { id: 'media', label: 'Media' }
];

export const UI_MESSAGES = {
  MODES: {
    TEXT: { TITLE: 'Text', DESCRIPTION: 'QR code will show your text through a formatted app page.', INPUT_PLACEHOLDER: 'Enter any text...', INPUT_LABEL: 'Text content' },
    LINK: { TITLE: 'Direct Link', DESCRIPTION: 'QR code contains the URL directly.', INPUT_PLACEHOLDER: 'https://example.com', INPUT_LABEL: 'URL / Hyperlink' },
    IMAGE: { TITLE: 'Image', DESCRIPTION: 'Upload an image. Scanning shows it in any browser.', HELPER_TEXT: 'Image is uploaded to cloud storage.' }
  },
  BUTTONS: {
    GENERATE: 'Generate QR Code', GENERATING: 'Generating...', UPLOADING: 'Uploading Image...',
    DOWNLOAD: 'Download PNG', CLEAR: 'Clear', TEST_LINK: 'Test Link',
    TEST_IMAGE: 'View Image', TEST_APP: 'Preview Content', SAVE: 'Save to Library', COPY: 'Copy Link'
  },
  ERRORS: {
    NO_IMAGE: 'Please upload an image to generate a QR code',
    NO_TEXT: 'Please enter content to generate a QR code',
    INVALID_URL: 'Please enter a valid URL including https://',
    INVALID_IMAGE: 'Please select a valid image file (JPG, PNG, GIF, WebP)',
    FILE_TOO_LARGE: `Image must be under ${FILE_SIZE_LIMITS.IMAGE_MAX_SIZE_MB}MB`,
    UPLOAD_FAILED: 'All upload methods failed',
    GENERATION_FAILED: 'Failed to generate QR code'
  }
};

export const CSS_CLASSES = {
  BUTTON_PRIMARY: 'btn btn-primary',
  BUTTON_SECONDARY: 'btn btn-secondary',
  BUTTON_DOWNLOAD: 'btn btn-success',
  BUTTON_TEST: 'btn btn-warning',
  BUTTON_DANGER: 'btn btn-danger',
  BUTTON_GHOST: 'btn btn-ghost',
  BUTTON_ACTIVE: 'active',
  BUTTON_DISABLED: 'disabled',
  ERROR_MESSAGE: 'alert alert-error',
  SUCCESS_MESSAGE: 'alert alert-success'
};

export const NAV_ITEMS = [
  { path: '/studio', label: 'Studio', icon: '✦', title: 'QR Experience Studio' },
  { path: '/library', label: 'Library', icon: '◫', title: 'QR Code Library' },
  { path: '/templates', label: 'Templates', icon: '⊞', title: 'QR Templates' },
  { path: '/settings', label: 'Settings', icon: '⚙', title: 'Settings' }
];
