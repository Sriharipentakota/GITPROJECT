/**
 * Application constants, design tokens, and template definitions
 */

export const QR_MODES = {
  TEXT: 'text',
  LINK: 'link',
  IMAGE: 'image'
};

export const FILE_SIZE_LIMITS = {
  IMAGE_MAX_SIZE_MB: 10,
  IMAGE_RECOMMENDED_SIZE_MB: 5,
  LOGO_MAX_SIZE_MB: 2
};

export const UPLOAD_SERVICES = {
  IMGBB: 'ImgBB',
  POST_IMAGES: 'PostImages'
};

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
      { id: 'security', label: 'Security', type: 'select', options: ['WPA/WPA2', 'WEP', 'None'], required: true },
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
  { id: 'all', label: 'All Templates' },
  { id: 'basic', label: 'Basic' },
  { id: 'web', label: 'Web & Social' },
  { id: 'contact', label: 'Contact' },
  { id: 'utilities', label: 'Utilities' },
  { id: 'media', label: 'Media' }
];

export const UI_MESSAGES = {
  MODES: {
    TEXT: {
      TITLE: 'Text',
      DESCRIPTION: 'QR code will show your text through a formatted app page.',
      INPUT_PLACEHOLDER: 'Enter any text, phone number, email, or message...',
      INPUT_LABEL: 'Text content'
    },
    LINK: {
      TITLE: 'Direct Link',
      DESCRIPTION: 'QR code contains the URL directly. Scanning opens the website immediately.',
      INPUT_PLACEHOLDER: 'https://example.com',
      INPUT_LABEL: 'URL / Hyperlink'
    },
    IMAGE: {
      TITLE: 'Image',
      DESCRIPTION: 'Upload an image. Scanning shows it directly in any browser.',
      HELPER_TEXT: 'Image is uploaded to cloud storage. Multiple backup services ensure reliability.'
    }
  },
  BUTTONS: {
    GENERATE: 'Generate QR Code',
    GENERATING: 'Generating...',
    UPLOADING: 'Uploading Image...',
    DOWNLOAD: 'Download PNG',
    CLEAR: 'Clear',
    TEST_LINK: 'Test Link',
    TEST_IMAGE: 'View Image',
    TEST_APP: 'Preview Content',
    SAVE: 'Save to Library',
    COPY: 'Copy Link'
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
  { path: '/create', label: 'Create', icon: '✦', title: 'Create QR Code' },
  { path: '/library', label: 'My QR Codes', icon: '◫', title: 'QR Code Library' },
  { path: '/templates', label: 'Templates', icon: '⊞', title: 'QR Templates' },
  { path: '/settings', label: 'Settings', icon: '⚙', title: 'Settings' }
];
