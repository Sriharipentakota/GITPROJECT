/**
 * Custom hook for preventing browser back button functionality
 * Used in standalone view pages where back navigation should be disabled
 */
import { useEffect } from 'react';

/**
 * Hook to disable browser back button and common navigation shortcuts
 * @param {Object} options - Configuration options
 * @param {boolean} options.disableBackButton - Whether to disable back button (default: true)
 * @param {boolean} options.disableRightClick - Whether to disable right-click context menu (default: true)
 * @param {boolean} options.disableKeyboardShortcuts - Whether to disable keyboard shortcuts (default: true)
 */
export const usePreventNavigation = ({
  disableBackButton = true,
  disableRightClick = true,
  disableKeyboardShortcuts = true
} = {}) => {
  
  useEffect(() => {
    // Array to store cleanup functions
    const cleanupFunctions = [];

    // Disable back button functionality
    if (disableBackButton) {
      // Push initial state to prevent going back
      window.history.pushState(null, '', window.location.href);
      
      // Handle back button attempts
      const handlePopState = (event) => {
        // Push state again to prevent navigation
        window.history.pushState(null, '', window.location.href);
      };
      
      // Add event listener
      window.addEventListener('popstate', handlePopState);
      
      // Add cleanup function
      cleanupFunctions.push(() => {
        window.removeEventListener('popstate', handlePopState);
      });
    }

    // Disable right-click context menu
    if (disableRightClick) {
      const handleContextMenu = (event) => {
        event.preventDefault();
      };
      
      // Add event listener
      document.addEventListener('contextmenu', handleContextMenu);
      
      // Add cleanup function
      cleanupFunctions.push(() => {
        document.removeEventListener('contextmenu', handleContextMenu);
      });
    }

    // Disable common keyboard shortcuts
    if (disableKeyboardShortcuts) {
      const handleKeyDown = (event) => {
        // Disable F5 and Ctrl+R (refresh)
        if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
          event.preventDefault();
        }
        
        // Disable Ctrl+W (close tab)
        if (event.ctrlKey && event.key === 'w') {
          event.preventDefault();
        }
        
        // Disable Alt+Left Arrow (back navigation)
        if (event.altKey && event.key === 'ArrowLeft') {
          event.preventDefault();
        }
        
        // Disable Backspace key (back navigation in some browsers)
        if (event.key === 'Backspace' && 
            event.target.tagName !== 'INPUT' && 
            event.target.tagName !== 'TEXTAREA') {
          event.preventDefault();
        }
      };
      
      // Add event listener
      document.addEventListener('keydown', handleKeyDown);
      
      // Add cleanup function
      cleanupFunctions.push(() => {
        document.removeEventListener('keydown', handleKeyDown);
      });
    }

    // Cleanup function to remove all event listeners
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [disableBackButton, disableRightClick, disableKeyboardShortcuts]);
};
