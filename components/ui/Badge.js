import { motion } from 'framer-motion';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  animated = false,
  glow = false,
  pill = false,
  outline = false,
  icon = null
}) {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center font-medium";
  
  // Size styles
  const sizeStyles = {
    xs: "px-1.5 py-0.5 text-xs",
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base"
  };
  
  // Shape styles
  const shapeStyles = pill ? "rounded-full" : "rounded-md";
  
  // Variant styles (solid)
  const solidVariantStyles = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-purple-100 text-purple-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-cyan-100 text-cyan-800",
    dark: "bg-gray-800 text-white"
  };
  
  // Variant styles (outline)
  const outlineVariantStyles = {
    default: "bg-transparent border border-gray-300 text-gray-700",
    primary: "bg-transparent border border-blue-300 text-blue-700",
    secondary: "bg-transparent border border-purple-300 text-purple-700",
    success: "bg-transparent border border-green-300 text-green-700",
    danger: "bg-transparent border border-red-300 text-red-700",
    warning: "bg-transparent border border-yellow-300 text-yellow-700",
    info: "bg-transparent border border-cyan-300 text-cyan-700",
    dark: "bg-transparent border border-gray-600 text-gray-800"
  };
  
  // Gradient styles for glow
  const glowStyles = glow ? {
    default: "shadow-sm",
    primary: "shadow-blue-100 shadow-sm",
    secondary: "shadow-purple-100 shadow-sm",
    success: "shadow-green-100 shadow-sm",
    danger: "shadow-red-100 shadow-sm",
    warning: "shadow-yellow-100 shadow-sm",
    info: "shadow-cyan-100 shadow-sm",
    dark: "shadow-gray-200 shadow-sm"
  } : {};

  // Select correct variant style based on outline prop
  const variantStyles = outline ? outlineVariantStyles[variant] : solidVariantStyles[variant];
  const glowStyle = glow ? glowStyles[variant] : '';
  
  // Combined styles
  const badgeStyles = `
    ${baseStyles} 
    ${sizeStyles[size]} 
    ${shapeStyles} 
    ${variantStyles} 
    ${glowStyle}
    ${className}
  `;

  // Animation variants for pulse effect
  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return animated ? (
    <motion.span 
      className={badgeStyles}
      variants={pulseAnimation}
      animate="animate"
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </motion.span>
  ) : (
    <span className={badgeStyles}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
} 