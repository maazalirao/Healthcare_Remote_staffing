import React from 'react';
import Link from 'next/link';

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
  secondary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg',
  outline: 'bg-transparent border border-blue-300 text-white hover:bg-blue-600 hover:bg-opacity-10',
  ghost: 'bg-transparent hover:bg-blue-50 text-blue-600',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  white: 'bg-white text-blue-700 hover:bg-blue-50 border border-blue-100 shadow-md hover:shadow-lg',
  success: 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-md hover:shadow-lg',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  href,
  rounded = false,
  fullWidth = false,
  withAnimation = true,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    transition-all duration-300
    ${rounded ? 'rounded-full' : 'rounded-md'}
    ${fullWidth ? 'w-full' : ''}
    ${withAnimation ? 'transform hover:scale-105' : ''}
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default Button; 