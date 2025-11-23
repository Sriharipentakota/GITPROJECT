/**
 * Application constants and configuration values
 */

/**
 * QR Code content type modes
 */
export const QR_MODES = {
  TEXT: 'text',
  LINK: 'link', 
  IMAGE: 'image'
};

/**
 * File size limits in megabytes
 */
export const FILE_SIZE_LIMITS = {
  IMAGE_MAX_SIZE_MB: 10,
  IMAGE_RECOMMENDED_SIZE_MB: 5
};

/**
 * Upload service names for cloud storage providers
 */
export const UPLOAD_SERVICES = {
  IMGBB: 'ImgBB',
  POST_IMAGES: 'PostImages'
};

/**
 * UI messages and text content
 */
export const UI_MESSAGES = {
  MODES: {
    TEXT: {
      TITLE: '📝 Text',
      DESCRIPTION: 'QR code will show your text in a formatted page through this app.',
      INPUT_PLACEHOLDER: 'Enter text, phone number, email, or any message...',
      INPUT_LABEL: 'Enter text to encode:'
    },
    LINK: {
      TITLE: '🔗 Direct Link', 
      DESCRIPTION: 'QR code will contain your URL directly. Scanning will open the website immediately.',
      INPUT_PLACEHOLDER: 'e.g., https://example.com, https://github.com, https://youtube.com/watch?v=...',
      INPUT_LABEL: 'Enter hyperlink (URL):'
    },
    IMAGE: {
      TITLE: '🖼️ Image',
      DESCRIPTION: 'Upload any image and generate a QR code that shows it directly when scanned.',
      HELPER_TEXT: 'Works with any image size - multiple backup services ensure reliability'
    }
  },
  BUTTONS: {
    GENERATE: 'Generate QR Code',
    GENERATING: 'Generating...',
    UPLOADING: 'Uploading Image...',
    DOWNLOAD: 'Download QR Code',
    CLEAR: 'Clear',
    TEST_LINK: 'Test Direct Link',
    TEST_IMAGE: 'Test Direct Image', 
    TEST_APP: 'Test App Link'
  },
  ERRORS: {
    NO_IMAGE: 'Please select an image to generate QR code',
    NO_TEXT: 'Please enter some text or link to generate QR code',
    INVALID_URL: 'Please enter a valid URL (e.g., https://example.com)',
    INVALID_IMAGE: 'Please select a valid image file',
    FILE_TOO_LARGE: 'Image must be smaller than 10MB',
    UPLOAD_FAILED: 'All upload methods failed',
    GENERATION_FAILED: 'Failed to generate QR code'
  }
};

/**
 * CSS class names for consistent styling
 */
export const CSS_CLASSES = {
  BUTTON_PRIMARY: 'generate-btn',
  BUTTON_SECONDARY: 'clear-btn',
  BUTTON_DOWNLOAD: 'download-btn',
  BUTTON_TEST: 'test-url-btn',
  BUTTON_ACTIVE: 'active',
  BUTTON_DISABLED: 'disabled',
  ERROR_MESSAGE: 'error-message',
  SUCCESS_MESSAGE: 'success-message'
};
