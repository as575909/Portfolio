import React from 'react';
import { SectionProps } from '../../types';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;