import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'elevated';
  hoverEffect?: boolean;
  animationDelay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = false,
  animationDelay = 0,
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  const variantStyles = {
    default: 'bg-white dark:bg-gray-800 shadow-sm',
    outline: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    elevated: 'bg-white dark:bg-gray-800 shadow-md',
  };

  const hoverStyles = hoverEffect 
    ? 'hover:shadow-lg transform hover:-translate-y-1 transition-all' 
    : '';

  return (
    <div
      ref={ref}
      className={`rounded-lg overflow-hidden ${variantStyles[variant]} ${hoverStyles} ${className} transition-all duration-700`}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${animationDelay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;