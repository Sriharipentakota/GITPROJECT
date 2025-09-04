import { motion } from 'framer-motion';

/**
 * Reusable Card component with hover animations
 */
function Card({ 
  children, 
  className = '', 
  hover = true, 
  onClick,
  ...props 
}) {
  const Component = motion.div;
  
  return (
    <Component
      className={`
        bg-white rounded-lg border border-gray-200 shadow-sm
        ${hover ? 'hover:shadow-md transition-shadow duration-200' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -2 } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Card;