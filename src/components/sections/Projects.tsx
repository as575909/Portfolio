import React, { useState } from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Tag from '../ui/Tag';
import { projects } from '../../lib/constants';
import { Calendar, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';

const ProjectCard: React.FC<{
  title: string;
  period: string;
  description: string;
  details: string[];
  technologies: string[];
  links: {
    appStore?: string;
    playStore?: string;
    github?: string;
    live?: string;
  };
  image: string;
  index: number;
}> = ({ 
  title, 
  period, 
  description, 
  details, 
  technologies, 
  links, 
  image,
  index
}) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
      className="overflow-hidden" 
      variant="elevated" 
      hoverEffect
      animationDelay={index * 200}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="flex items-center mt-2">
              <Calendar size={16} className="mr-1" />
              <span className="text-sm">{period}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
        
        <div className={`overflow-hidden transition-all duration-300 ${
          expanded ? 'max-h-96' : 'max-h-0'
        }`}>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
            {details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <Tag key={i} variant="primary">
              {tech}
            </Tag>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center gap-3 mt-4">
          {links.appStore && (
            <Button 
              href={links.appStore}
              variant="outline"
              size="sm"
              icon={<ExternalLink size={16} />}
            >
              App Store
            </Button>
          )}
          
          {links.playStore && (
            <Button 
              href={links.playStore}
              variant="outline"
              size="sm"
              icon={<ExternalLink size={16} />}
            >
              Play Store
            </Button>
          )}
          
          <Button 
            variant="primary"
            size="sm"
            onClick={toggleExpanded}
            icon={expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          >
            {expanded ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-white dark:bg-gray-900">
      <SectionTitle 
        title="My Projects" 
        subtitle="Some of my recent work and applications"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            period={project.period}
            description={project.description}
            details={project.details}
            technologies={project.technologies}
            links={project.links}
            image={project.image}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;