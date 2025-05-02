import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '',
  variant = 'default',
  hover = false,
  bordered = true,
  animate = true,
  glassmorphism = false,
  padding = 'default',
  as = 'div'
}) {
  // Base styles
  let baseStyles = "rounded-xl transition-all duration-300";
  
  // Variant styles
  const variantStyles = {
    default: "bg-white",
    primary: "bg-blue-50",
    gradient: "bg-gradient-to-br from-white to-blue-50",
    dark: "bg-gray-800 text-white",
    glass: "backdrop-filter backdrop-blur-md bg-white/40"
  };
  
  // Padding styles
  const paddingStyles = {
    none: "",
    sm: "p-3",
    default: "p-6",
    lg: "p-8",
    xl: "p-10"
  };
  
  // Hover effects
  const hoverStyles = hover ? "hover:shadow-xl hover:-translate-y-1" : "";
  
  // Border styles
  const borderStyles = bordered ? "border border-gray-100" : "";
  
  // Glassmorphism override
  if (glassmorphism) {
    baseStyles += " backdrop-filter backdrop-blur-md bg-white/60 border border-white/20";
  } else {
    baseStyles += ` ${variantStyles[variant]} ${borderStyles}`;
  }
  
  // Combined styles
  const cardStyles = `
    ${baseStyles}
    ${paddingStyles[padding]}
    ${hoverStyles}
    ${className}
  `;

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: hover ? { y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" } : {}
  };

  const Component = as;

  return animate ? (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.3 }}
      className={cardStyles}
    >
      {as === 'div' ? children : <Component className="h-full w-full">{children}</Component>}
    </motion.div>
  ) : (
    <div className={cardStyles}>
      {as === 'div' ? children : <Component className="h-full w-full">{children}</Component>}
    </div>
  );
}

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-lg font-bold text-gray-800 dark:text-white ${className}`} {...props}>
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