import React from 'react';

const Card = ({
  children,
  className = '',
  hover = false,
  hoverLift = false,
  glassMorphism = false,
  gradient = false,
  gradientDirection = 'to-r',
  gradientColors = 'from-blue-50 to-indigo-50',
  border = false,
  shadow = 'md',
  rounded = 'lg',
  padding = 'p-6',
  ...props
}) => {
  const shadowVariants = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const roundedVariants = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  };

  const baseClasses = `
    ${padding}
    ${roundedVariants[rounded] || 'rounded-lg'}
    ${shadowVariants[shadow] || 'shadow-md'}
    ${border ? 'border border-gray-200 dark:border-gray-700' : ''}
    ${glassMorphism ? 'glass-effect' : 'bg-white dark:bg-gray-800'}
    ${gradient ? `bg-gradient-${gradientDirection} ${gradientColors}` : ''}
    ${hover ? 'transition-all duration-300 hover:shadow-lg' : ''}
    ${hoverLift ? 'hover-lift' : ''}
    ${className}
  `;

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-lg font-bold text-gray-800 dark:text-gray-100 ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-sm text-gray-600 dark:text-gray-300 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`} {...props}>
    {children}
  </div>
);

export default Card; 