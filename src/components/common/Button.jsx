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
  // Base styles that apply to all button variants
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';
  
  // Variant-specific styles for different button appearances
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white focus:ring-gray-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };
  
  // Size-specific styles for different button sizes
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base',
    lg: 'px-6 py-3 text-base sm:px-8 sm:py-3 sm:text-lg',
  };
  
  // Icon size mapping based on button size
  const iconSizes = {
    sm: 'w-3 h-3 sm:w-4 sm:h-4',
    md: 'w-4 h-4 sm:w-5 sm:h-5',
    lg: 'w-5 h-5 sm:w-6 sm:h-6',
  };
  
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