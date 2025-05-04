import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  alignment = 'left'
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div 
      ref={ref}
      className={`mb-12 max-w-3xl ${alignmentClasses[alignment]} transition-transform duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-24 bg-blue-600 dark:bg-blue-500 mt-4 mb-6 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;