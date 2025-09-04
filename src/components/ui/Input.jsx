import { forwardRef } from 'react';

/**
 * Reusable Input component with label and error states
 */
const Input = forwardRef(function Input({
  label,
  error,
  className = '',
  type = 'text',
  ...props
}, ref) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`
          w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
          transition-colors
          ${error ? 'border-red-300' : 'border-gray-300'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

export default Input;