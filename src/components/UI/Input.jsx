/**
 * Reusable Input component for text inputs, textareas, and file inputs
 * Provides consistent styling and behavior across different input types
 */
import React from 'react';

/**
 * Input component supporting multiple input types
 * @param {Object} props - Component props
 * @param {string} props.type - Input type (text, textarea, file, email, url, etc.)
 * @param {string} props.value - Input value (controlled component)
 * @param {Function} props.onChange - Change handler function
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.label - Label text for the input
 * @param {boolean} props.disabled - Whether input is disabled
 * @param {boolean} props.required - Whether input is required
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @param {string} props.id - Element ID
 * @param {number} props.rows - Number of rows for textarea
 * @param {string} props.accept - File accept types for file input
 */
const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  label,
  disabled = false,
  required = false,
  className = '',
  style = {},
  id,
  rows = 4,
  accept,
  ...props
}) => {
  // Handle input change
  const handleChange = (event) => {
    if (onChange) {
      // For file inputs, pass the files
      if (type === 'file') {
        onChange(event.target.files[0], event);
      } else {
        onChange(event.target.value, event);
      }
    }
  };

  // Generate unique ID if not provided
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  // Determine which input element to render
  const renderInput = () => {
    const commonProps = {
      id: inputId,
      value: type === 'file' ? undefined : value,
      onChange: handleChange,
      placeholder,
      disabled,
      required,
      className: `input-field input-${type} ${className}`,
      ...props
    };

    // Render textarea for multiline text input
    if (type === 'textarea') {
      return (
        <textarea
          {...commonProps}
          rows={rows}
          style={style}
        />
      );
    }

    // Render file input with accept attribute
    if (type === 'file') {
      return (
        <input
          {...commonProps}
          type="file"
          accept={accept}
          style={style}
        />
      );
    }

    // Render standard input for all other types
    return (
      <input
        {...commonProps}
        type={type}
        style={style}
      />
    );
  };

  return (
    <div className={`input-container ${className}`}>
      {/* Render label if provided */}
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="required-indicator">*</span>}
        </label>
      )}
      
      {/* Render the appropriate input element */}
      {renderInput()}
    </div>
  );
};

export default Input;
