import { forwardRef } from 'react';

const Input = forwardRef(({
  type = 'text',
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  className = '',
  required = false,
  disabled = false,
  variant = 'default',
  size = 'md',
  leadingIcon,
  trailingIcon,
  rounded = 'md',
  fullWidth = false,
  ...props
}, ref) => {
  // Size variants
  const sizeVariants = {
    sm: 'py-1.5 text-sm',
    md: 'py-2 text-base',
    lg: 'py-2.5 text-lg',
  };

  // Input variants
  const inputVariants = {
    default: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    filled: 'bg-gray-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-blue-500',
    outlined: 'bg-transparent border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    underlined: 'border-t-0 border-l-0 border-r-0 border-b-2 rounded-none px-0 border-gray-300 focus:border-blue-500 focus:ring-0'
  };

  // Rounded variants
  const roundedVariants = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  // Error state styling
  const errorStyle = error 
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500 text-red-900 placeholder-red-300' 
    : '';

  // Disabled styling
  const disabledStyle = disabled 
    ? 'bg-gray-100 cursor-not-allowed text-gray-500 border-gray-200' 
    : '';

  // Required styling for label
  const requiredStyle = required
    ? 'after:content-["*"] after:ml-0.5 after:text-red-500'
    : '';

  // Base class
  const inputBaseClass = `
    block px-3 w-full 
    shadow-sm border
    transition-colors duration-200
    focus:outline-none
    ${inputVariants[variant]}
    ${sizeVariants[size]}
    ${roundedVariants[rounded]}
    ${errorStyle}
    ${disabledStyle}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  // Helper text classes
  const helperTextClass = `mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`;

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label 
          htmlFor={id} 
          className={`block text-sm font-medium text-gray-700 mb-1 ${requiredStyle}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {leadingIcon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          className={`
            ${inputBaseClass}
            ${leadingIcon ? 'pl-10' : ''}
            ${trailingIcon ? 'pr-10' : ''}
          `}
          {...props}
        />
        {trailingIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {trailingIcon}
          </div>
        )}
      </div>
      {(helperText || error) && (
        <p className={helperTextClass}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
export default Input; 