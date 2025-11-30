/**
 * Hooks index file
 * Central export point for all custom hooks
 */

// Import all custom hooks
import { useQRCodeGenerator } from './useQRCodeGenerator';
import { usePreventNavigation } from './usePreventNavigation';

// Export all hooks for easy importing
export {
  useQRCodeGenerator,
  usePreventNavigation
};

// Default export as object for alternative import style
export default {
  useQRCodeGenerator,
  usePreventNavigation
};
