/**
 * Reusable Dropdown/Select component with customizable options
 * Provides consistent styling and behavior for selection inputs
 */
import React from 'react';

/**
 * Dropdown component for selecting from multiple options
 * @param {Object} props - Component props
 * @param {Array} props.options - Array of option objects with value and label
 * @param {string|number} props.value - Currently selected value
 * @param {Function} props.onChange - Change handler function
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.label - Label text for the dropdown
 * @param {boolean} props.disabled - Whether dropdown is disabled
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @param {string} props.id - Element ID
 */
const Dropdown = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  disabled = false,
  className = '',
  style = {},
  id,
  ...props
}) => {
  // Handle selection change
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  };

  // Generate unique ID if not provided
  const selectId = id || `dropdown-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`dropdown-container ${className}`} style={style}>
      {/* Render label if provided */}
      {label && (
        <label htmlFor={selectId} className="dropdown-label">
          {label}
        </label>
      )}
      
      {/* Main select element */}
      <select
        id={selectId}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className="dropdown-select"
        {...props}
      >
        {/* Placeholder option */}
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        
        {/* Render all options */}
        {options.map((option) => {
          // Handle both string options and object options
          const optionValue = typeof option === 'string' ? option : option.value;
          const optionLabel = typeof option === 'string' ? option : option.label;
          
          return (
            <option key={optionValue} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
