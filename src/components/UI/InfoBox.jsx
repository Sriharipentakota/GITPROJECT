/**
 * Reusable InfoBox component for displaying informational messages
 * Supports different types like info, success, warning, and error
 */
import React from 'react';

/**
 * InfoBox component for displaying messages with different styles
 * @param {Object} props - Component props
 * @param {string|React.ReactNode} props.children - Content to display
 * @param {string} props.type - Box type (info, success, warning, error)
 * @param {string} props.title - Optional title for the info box
 * @param {boolean} props.dismissible - Whether the box can be dismissed
 * @param {Function} props.onDismiss - Dismiss handler function
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 */
const InfoBox = ({
  children,
  type = 'info',
  title,
  dismissible = false,
  onDismiss,
  className = '',
  style = {},
  ...props
}) => {
  // Get appropriate styling based on type
  const getTypeStyles = () => {
    const baseStyles = {
      padding: '12px 16px',
      borderRadius: '6px',
      border: '1px solid',
      marginBottom: '1rem',
      position: 'relative'
    };

    switch (type) {
      case 'success':
        return {
          ...baseStyles,
          backgroundColor: '#d4edda',
          borderColor: '#c3e6cb',
          color: '#155724'
        };
      case 'warning':
        return {
          ...baseStyles,
          backgroundColor: '#fff3cd',
          borderColor: '#ffeaa7',
          color: '#856404'
        };
      case 'error':
        return {
          ...baseStyles,
          backgroundColor: '#f8d7da',
          borderColor: '#f5c6cb',
          color: '#721c24'
        };
      case 'info':
      default:
        return {
          ...baseStyles,
          backgroundColor: '#e7f3ff',
          borderColor: '#b3d7ff',
          color: '#0c5460'
        };
    }
  };

  // Get appropriate icon based on type
  const getTypeIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      case 'info':
      default:
        return 'ℹ️';
    }
  };

  // Handle dismiss action
  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  // Combine styles
  const combinedStyles = {
    ...getTypeStyles(),
    ...style
  };

  return (
    <div
      className={`info-box info-box-${type} ${className}`}
      style={combinedStyles}
      {...props}
    >
      {/* Dismiss button if dismissible */}
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="info-box-dismiss"
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            color: 'inherit',
            opacity: 0.7
          }}
          title="Dismiss"
        >
          ×
        </button>
      )}

      {/* Title section */}
      {title && (
        <div className="info-box-title" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
          <span className="info-box-icon" style={{ marginRight: '8px' }}>
            {getTypeIcon()}
          </span>
          {title}
        </div>
      )}

      {/* Content section */}
      <div className="info-box-content">
        {!title && (
          <span className="info-box-icon" style={{ marginRight: '8px' }}>
            {getTypeIcon()}
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
