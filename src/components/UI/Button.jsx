/**
 * Reusable Button component with multiple variants and states
 * Provides consistent styling and behavior across the application
 */
import React from 'react';
import { CSS_CLASSES } from '../../constants';

/**
 * Button component with support for different variants and states
 * @param {Object} props - Component props
 * @param {string} props.children - Button text or content
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.variant - Button variant (primary, secondary, download, test)
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {boolean} props.active - Whether button is in active state
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @param {string} props.type - Button type (button, submit, reset)
 */
const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  active = false,
  className = '',
  style = {},
  type = 'button',
  ...props
}) => {
  // Determine CSS class based on variant
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return CSS_CLASSES.BUTTON_SECONDARY;
      case 'download':
        return CSS_CLASSES.BUTTON_DOWNLOAD;
      case 'test':
        return CSS_CLASSES.BUTTON_TEST;
      case 'primary':
      default:
        return CSS_CLASSES.BUTTON_PRIMARY;
    }
  };

  // Build complete class name
  const buttonClass = [
    getVariantClass(),
    active ? CSS_CLASSES.BUTTON_ACTIVE : '',
    disabled ? CSS_CLASSES.BUTTON_DISABLED : '',
    className
  ].filter(Boolean).join(' ');

  // Handle click events (prevent if disabled)
  const handleClick = (event) => {
    if (disabled || !onClick) {
      return;
    }
    onClick(event);
  };

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
