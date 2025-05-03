import React from 'react';

const variants = {
  primary: 'bg-blue-100 text-blue-800',
  secondary: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  danger: 'bg-red-100 text-red-800',
  warning: 'bg-yellow-100 text-yellow-800',
  info: 'bg-indigo-100 text-indigo-800',
  outline: 'bg-transparent border border-current',
};

const sizes = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-0.5',
  lg: 'text-base px-3 py-1',
};

const Badge = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  rounded = true,
  bordered = false,
  withDot = false,
  dotColor,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center font-medium
    ${sizes[size] || sizes.md}
    ${variants[variant] || variants.primary}
    ${rounded ? 'rounded-full' : 'rounded'}
    ${bordered ? 'border border-current border-opacity-20' : ''}
    ${className}
  `;

  return (
    <span className={baseClasses} {...props}>
      {withDot && (
        <span 
          className={`inline-block w-2 h-2 rounded-full mr-1.5 ${
            dotColor ? `bg-${dotColor}` : 'bg-current'
          }`}
        />
      )}
      {children}
    </span>
  );
};

export default Badge; 