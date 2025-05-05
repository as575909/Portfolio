import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../lib/constants';
import Button from '../ui/Button';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import profileImage from '../../assets/ayush.jpeg';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Software Engineer';
  const typingSpeed = 100;
  const startDelay = 500;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Delay the start of typing
    timeout = setTimeout(() => {
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Ayush Singh</span>
            </h1>

            <div className="h-8 mb-6">
              <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium flex items-center">
                {typedText}
                <span className="inline-block w-1 h-6 bg-blue-600 dark:bg-blue-400 ml-1 animate-blink"></span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                showArrow
              >
                Contact Me
              </Button>
              <Button
                href="#projects"
                variant="outline"
                size="lg"
              >
                View My Work
              </Button>
            </div>

            <div className="flex space-x-4">
              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-singh-3a2b6916b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white from-blue-600 to-indigo-600 ring-8 ring-blue-600 dark:ring-blue-600">
                <img
                  src={profileImage}
                  alt="Ayush Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 dark:from-blue-500/10 dark:to-indigo-500/10"></div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};

export default Hero;