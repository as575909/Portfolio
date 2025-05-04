import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '../../lib/constants';
import { Briefcase, Calendar } from 'lucide-react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const TimelineItem: React.FC<{
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  isLast: boolean;
  index: number;
}> = ({ company, position, location, period, description, isLast, index }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`relative pb-12 ${!isLast ? 'mb-8' : ''} transition-all duration-700`}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {!isLast && (
        <div className="absolute left-7 top-14 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      )}
      
      <div className="flex items-start">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center z-10">
          <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
        </div>
        
        <div className="ml-6">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {position}
            </h3>
            <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
              {company}
            </span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
            <Calendar size={16} className="mr-1" />
            <span className="text-sm">{period}</span>
            {location && (
              <>
                <span className="mx-2">•</span>
                <span className="text-sm">{location}</span>
              </>
            )}
          </div>
          
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <ul className="list-disc list-inside space-y-2">
              {description.map((item, i) => (
                <li key={i} className="text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-gray-50 dark:bg-gray-800">
      <SectionTitle 
        title="Work Experience" 
        subtitle="My professional journey and career history"
      />
      
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            company={exp.company}
            position={exp.position}
            location={exp.location}
            period={exp.period}
            description={exp.description}
            isLast={index === experiences.length - 1}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;