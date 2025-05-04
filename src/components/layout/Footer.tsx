import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../../lib/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold text-gray-800 dark:text-white">Ayush Singh</p>
            <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a 
              href={`https://github.com/${personalInfo.github}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/ayush-singh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Ayush Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;