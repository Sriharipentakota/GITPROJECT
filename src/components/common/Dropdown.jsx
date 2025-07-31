/**
 * Reusable Dropdown Component
 * 
 * This is a flexible dropdown component that can be used for various purposes
 * like menus, select options, or action lists. It handles click outside to close,
 * keyboard navigation, and provides smooth animations.
 * 
 * Features:
 * - Click outside to close
 * - Keyboard navigation (Escape to close)
 * - Smooth open/close animations
 * - Customizable trigger element
 * - Flexible positioning
 * - Accessible with proper ARIA attributes
 * - Mobile-friendly touch interactions
 * 
 * Usage Example:
 * <Dropdown
 *   trigger={<Button>Open Menu</Button>}
 *   items={[
 *     { label: 'Option 1', onClick: () => {} },
 *     { label: 'Option 2', onClick: () => {} }
 *   ]}
 * />
 */

import React, { useState, useRef, useEffect } from 'react';
import { positionClasses } from '../../utils/utils';

/**
 * Dropdown Component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.trigger - Element that triggers the dropdown
 * @param {Array} props.items - Array of dropdown items
 * @param {string} props.position - Dropdown position (left, right, center)
 * @param {string} props.className - Additional CSS classes for dropdown container
 * @param {Function} props.onOpen - Callback when dropdown opens
 * @param {Function} props.onClose - Callback when dropdown closes
 */
const Dropdown = ({
  trigger,
  items = [],
  position = 'left',
  className = '',
  onOpen,
  onClose,
}) => {
  // State to track if dropdown is open
  const [isOpen, setIsOpen] = useState(false);

  // Refs for dropdown container and menu
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  /**
   * Toggle dropdown open/close state
   * Calls appropriate callbacks when state changes
   */
  const toggleDropdown = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (newState && onOpen) {
      onOpen();
    } else if (!newState && onClose) {
      onClose();
    }
  };

  /**
   * Close dropdown
   * Used by various event handlers
   */
  const closeDropdown = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  /**
   * Handle item click
   * Executes item's onClick handler and closes dropdown
   * 
   * @param {Object} item - The clicked item
   * @param {Event} event - Click event
   */
  const handleItemClick = (item, event) => {
    if (item.onClick) {
      item.onClick(event);
    }
    closeDropdown();
  };

  /**
   * Effect to handle click outside dropdown
   * Closes dropdown when user clicks outside of it
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside dropdown container
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    // Add event listener when dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  /**
   * Effect to handle keyboard events
   * Closes dropdown when Escape key is pressed
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeDropdown();
      }
    };

    // Add event listener when dropdown is open
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Trigger Element */}
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className={`absolute z-50 mt-2 ${positionClasses[position]} bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-48 animate-in fade-in slide-in-from-top-2 duration-200`}
          role="menu"
          aria-orientation="vertical"
        >
          {items.map((item, index) => (
            <div key={index}>
              {/* Regular Menu Item */}
              {!item.divider && (
                <button
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-3 ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    } ${item.className || ''}`}
                  onClick={(e) => !item.disabled && handleItemClick(item, e)}
                  disabled={item.disabled}
                  role="menuitem"
                >
                  {/* Item Icon */}
                  {item.icon && (
                    <span className="w-4 h-4 flex-shrink-0 text-gray-500">
                      {item.icon}
                    </span>
                  )}

                  {/* Item Content */}
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {item.label}
                    </div>
                    {item.description && (
                      <div className="text-xs text-gray-500 mt-1">
                        {item.description}
                      </div>
                    )}
                  </div>

                  {/* Item Badge/Status */}
                  {item.badge && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              )}

              {/* Divider */}
              {item.divider && (
                <div className="border-t border-gray-100 my-1" role="separator" />
              )}
            </div>
          ))}

          {/* Empty State */}
          {items.length === 0 && (
            <div className="px-4 py-2 text-sm text-gray-500 text-center">
              No options available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;