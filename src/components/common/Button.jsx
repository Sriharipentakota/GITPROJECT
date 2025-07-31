/**
 * Reusable Button Component
 * 
 * This is a highly customizable button component that can be used throughout the application.
 * It supports different variants, sizes, states, and can render as different HTML elements.
 * 
 * Features:
 * - Multiple variants (primary, secondary, outline, ghost)
 * - Different sizes (sm, md, lg)
 * - Loading state with spinner
 * - Disabled state
 * - Icon support (left and right)
 * - Can render as button, link, or custom element
 * - Full accessibility support
 * - Responsive design
 * 
 * Usage Examples:
 * <Button variant="primary" size="lg">Click Me</Button>
 * <Button variant="outline" leftIcon={<Download />} loading>Download</Button>
 * <Button as="a" href="/link" variant="ghost">Link Button</Button>
 */

import React from 'react';
import { baseStyles, iconSizes, sizeStyles, variantStyles } from '../../utils/utils';

/**
 * Button Component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button style variant (primary, secondary, outline, ghost)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {boolean} props.loading - Show loading spinner
 * @param {boolean} props.disabled - Disable button
 * @param {React.ReactNode} props.leftIcon - Icon to show on the left
 * @param {React.ReactNode} props.rightIcon - Icon to show on the right
 * @param {string} props.className - Additional CSS classes
 * @param {string|React.Component} props.as - Element type to render as
 * @param {Function} props.onClick - Click handler
 * @param {Object} props.rest - Additional props to pass through
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  as: Component = 'button',
  onClick,
  ...rest
}) => {
 
  
  // Combine all styles into final className
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  // Handle click events - prevent action if loading or disabled
  const handleClick = (e) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };
  
  // Loading spinner component
  const LoadingSpinner = () => (
    <div className={`animate-spin rounded-full border-b-2 border-current ${iconSizes[size]} mr-2`}></div>
  );
  
  return (
    <Component
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      {...rest}
    >
      {/* Show loading spinner when loading state is true */}
      {loading && <LoadingSpinner />}
      
      {/* Show left icon if provided and not loading */}
      {leftIcon && !loading && (
        <span className={`${iconSizes[size]} mr-2 flex-shrink-0`}>
          {leftIcon}
        </span>
      )}
      
      {/* Button content/text */}
      <span className="flex-1">
        {children}
      </span>
      
      {/* Show right icon if provided */}
      {rightIcon && (
        <span className={`${iconSizes[size]} ml-2 flex-shrink-0`}>
          {rightIcon}
        </span>
      )}
    </Component>
  );
};

export default Button;