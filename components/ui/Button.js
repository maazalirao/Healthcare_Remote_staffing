import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
  onClick = null,
  disabled = false,
  type = 'button',
  animate = true,
  icon = null
}) => {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Size styles
  const sizeStyles = {
    xs: "px-2.5 py-1.5 text-xs rounded",
    sm: "px-3 py-2 text-sm rounded-md",
    md: "px-4 py-2 text-sm rounded-lg",
    lg: "px-5 py-3 text-base rounded-lg",
    xl: "px-6 py-3.5 text-lg rounded-xl"
  };
  
  // Variant styles
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md hover:shadow-lg focus:ring-blue-500 border-0",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-500",
    success: "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-md hover:shadow-lg focus:ring-emerald-500 border-0",
    danger: "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white shadow-md hover:shadow-lg focus:ring-red-500 border-0",
    white: "bg-white hover:bg-gray-50 text-gray-800 shadow-md hover:shadow-lg focus:ring-gray-300 border border-gray-200",
    outline: "bg-transparent hover:bg-gray-50 text-blue-600 border border-blue-300 hover:border-blue-400 focus:ring-blue-500",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500",
    link: "bg-transparent text-blue-600 hover:text-blue-800 hover:underline p-0 focus:ring-0 shadow-none"
  };
  
  // Disabled styles
  const disabledStyles = "opacity-60 cursor-not-allowed";

  // Combined styles
  const buttonStyles = `
    ${baseStyles} 
    ${sizeStyles[size]} 
    ${variantStyles[variant]} 
    ${disabled ? disabledStyles : ''} 
    ${className}
  `;

  // Button props
  const buttonProps = {
    className: buttonStyles,
    disabled,
    type: href ? undefined : type,
    onClick: href ? undefined : onClick,
  };

  // Animation variants
  const buttonVariants = {
    tap: { scale: 0.98 },
    hover: { 
      y: -2,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
    }
  };

  // Content with optional icon
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  // Render as link or button
  if (href) {
    return animate ? (
      <motion.div 
        whileHover={!disabled && "hover"} 
        whileTap={!disabled && "tap"}
        variants={buttonVariants}
      >
        <Link href={href} className={buttonStyles} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    ) : (
      <Link href={href} className={buttonStyles} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return animate ? (
    <motion.button 
      {...buttonProps} 
      whileHover={!disabled && "hover"} 
      whileTap={!disabled && "tap"}
      variants={buttonVariants}
    >
      {content}
    </motion.button>
  ) : (
    <button {...buttonProps}>
      {content}
    </button>
  );
};

export default Button; 