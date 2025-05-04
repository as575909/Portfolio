import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo, skills } from '../../lib/constants';
import { Code, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import Card from '../ui/Card';

const About: React.FC = () => {
  const stats = [
    { icon: <Code size={24} />, label: 'Years Experience', value: '2+' },
    { icon: <Briefcase size={24} />, label: 'Projects Completed', value: '10+' },
    { icon: <GraduationCap size={24} />, label: 'B.Tech in CSE', value: '7.61 GPA' },
    { icon: <Trophy size={24} />, label: 'Certifications', value: '3' },
  ];

  return (
    <Section id="about" className="bg-white dark:bg-gray-900">
      <SectionTitle 
        title="About Me" 
        subtitle="Get to know more about my background and skills"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Who am I?
          </h3>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I'm an experienced software engineer with over 2 years of professional experience, 
              specializing in modern web and mobile app development. Currently based in Pune, India,
              I bring a diverse skill set and a passion for creating efficient, user-friendly applications.
            </p>
            
            <p>
              My expertise spans across full-stack development with a focus on React, React Native, and related technologies.
              I pride myself on delivering high-quality solutions that meet client requirements and exceed expectations.
            </p>
            
            <p>
              What sets me apart is my ability to quickly adapt to new technologies and my commitment to continuous learning.
              I'm passionate about creating clean, efficient code and delivering seamless user experiences across multiple platforms.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                variant="elevated"
                className="p-4 flex flex-col items-center text-center"
                hoverEffect
                animationDelay={index * 100}
              >
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          My Skills
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.slice(0, 3).map((skillCategory, index) => (
            <Card 
              key={index}
              className="p-6" 
              variant="elevated"
              animationDelay={index * 150}
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
    </Section>
  );
};

export default About;