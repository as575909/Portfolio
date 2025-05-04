import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { skills, education, certifications } from '../../lib/constants';
import { GraduationCap, Award } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-gray-50 dark:bg-gray-800">
      <SectionTitle 
        title="Skills & Education" 
        subtitle="My technical expertise and academic background"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillCategory, index) => (
              <Card 
                key={index}
                className="p-6" 
                variant="elevated"
                animationDelay={index * 100}
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {skillCategory.category}
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="p-5" 
                  variant="elevated"
                  animationDelay={index * 150}
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{edu.period}</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {edu.score}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="p-4" 
                  variant="elevated"
                  animationDelay={index * 150 + 300}
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h4>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;