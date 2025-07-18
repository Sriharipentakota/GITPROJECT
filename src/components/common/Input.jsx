/**
 * Reusable Input Component
 * 
 * This is a comprehensive input component that supports various input types,
 * validation states, icons, and accessibility features. It's designed to be
 * used throughout the application for consistent styling and behavior.
 * 
 * Features:
 * - Multiple input types (text, email, password, textarea, etc.)
 * - Validation states (error, success, warning)
 * - Left and right icons
 * - Floating labels
 * - Helper text and error messages
 * - Disabled and readonly states
 * - Responsive design
 * - Full accessibility support
 * 
 * Usage Examples:
 * <Input label="Email" type="email" placeholder="Enter email" />
 * <Input label="Password" type="password" leftIcon={<Lock />} />
 * <Input type="textarea" rows={4} label="Message" />
 */

import React, { useState, forwardRef } from 'react';

/**
 * Input Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Input label text
 * @param {string} props.type - Input type (text, email, password, textarea, etc.)
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {Function} props.onBlur - Blur handler
 * @param {Function} props.onFocus - Focus handler
 * @param {boolean} props.required - Whether input is required
 * @param {boolean} props.disabled - Whether input is disabled
 * @param {boolean} props.readonly - Whether input is readonly
 * @param {string} props.error - Error message
 * @param {string} props.success - Success message
 * @param {string} props.helperText - Helper text
 * @param {React.ReactNode} props.leftIcon - Icon on the left
 * @param {React.ReactNode} props.rightIcon - Icon on the right
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.rows - Number of rows for textarea
 * @param {Object} props.rest - Additional props
 * @param {React.Ref} ref - Forwarded ref
 */
const Input = forwardRef(({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  required = false,
  disabled = false,
  readonly = false,
  error,
  success,
  helperText,
  leftIcon,
  rightIcon,
  className = '',
  rows = 4,
  ...rest
}, ref) => {
  // State for focus management
  const [isFocused, setIsFocused] = useState(false);
  
  // Generate unique ID for accessibility
  const inputId = rest.id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const helperTextId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;
  
  /**
   * Handle focus event
   * Updates focus state and calls provided onFocus handler
   */
  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };
  
  /**
   * Handle blur event
   * Updates focus state and calls provided onBlur handler
   */
  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };
  
  // Determine validation state for styling
  const hasError = Boolean(error);
  const hasSuccess = Boolean(success) && !hasError;
  const hasValue = Boolean(value);
  
  // Base input styles
  const baseInputStyles = 'w-full px-3 py-2.5 sm:px-4 sm:py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 text-sm sm:text-base';
  
  // Icon padding adjustments
  const leftPadding = leftIcon ? 'pl-9 sm:pl-10' : 'px-3 sm:px-4';
  const rightPadding = rightIcon ? 'pr-9 sm:pr-10' : 'px-3 sm:px-4';
  const iconPadding = leftIcon && rightIcon ? 'pl-9 sm:pl-10 pr-9 sm:pr-10' : 
                     leftIcon ? leftPadding : 
                     rightIcon ? rightPadding : 'px-3 sm:px-4';
  
  // State-based styles
  const stateStyles = hasError 
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50' 
    : hasSuccess 
    ? 'border-green-300 focus:border-green-500 focus:ring-green-500 bg-green-50'
    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white';
  
  // Disabled styles
  const disabledStyles = disabled 
    ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
    : 'hover:border-gray-400';
  
  // Combine all input styles
  const inputStyles = `${baseInputStyles} ${iconPadding} py-2.5 sm:py-3 ${stateStyles} ${disabledStyles} ${className}`;
  
  // Label styles with floating behavior
  const labelStyles = `block text-sm font-medium mb-1 sm:mb-2 transition-colors duration-200 ${
    hasError ? 'text-red-700' : 
    hasSuccess ? 'text-green-700' : 
    isFocused ? 'text-blue-600' : 'text-gray-700'
  }`;
  
  // Icon styles
  const iconStyles = 'absolute top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400';
  const leftIconStyles = `${iconStyles} left-3`;
  const rightIconStyles = `${iconStyles} right-3`;
  
  return (
    <div className="space-y-1 sm:space-y-2">
      {/* Label */}
      {label && (
        <label htmlFor={inputId} className={labelStyles}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {leftIcon && (
          <div className={leftIconStyles}>
            {leftIcon}
          </div>
        )}
        
        {/* Input Element */}
        {type === 'textarea' ? (
          <textarea
            ref={ref}
            id={inputId}
            className={inputStyles}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            readOnly={readonly}
            required={required}
            rows={rows}
            aria-describedby={
              error ? errorId : 
              helperText ? helperTextId : 
              undefined
            }
            aria-invalid={hasError}
            {...rest}
          />
        ) : (
          <input
            ref={ref}
            id={inputId}
            type={type}
            className={inputStyles}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            readOnly={readonly}
            required={required}
            aria-describedby={
              error ? errorId : 
              helperText ? helperTextId : 
              undefined
            }
            aria-invalid={hasError}
            {...rest}
          />
        )}
        
        {/* Right Icon */}
        {rightIcon && (
          <div className={rightIconStyles}>
            {rightIcon}
          </div>
        )}
      </div>
      
      {/* Helper Text, Error, or Success Message */}
      {(error || success || helperText) && (
        <div className="text-xs sm:text-sm">
          {error && (
            <p id={errorId} className="text-red-600 flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </p>
          )}
          
          {success && !error && (
            <p className="text-green-600 flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {success}
            </p>
          )}
          
          {helperText && !error && !success && (
            <p id={helperTextId} className="text-gray-500">
              {helperText}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

// Set display name for debugging
Input.displayName = 'Input';

export default Input;