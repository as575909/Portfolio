import React, { useState, useRef } from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { personalInfo } from '../../lib/constants';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactInfoItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}> = ({ icon, title, value, link }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h4>
        {link ? (
          <a 
            href={link} 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-700 dark:text-gray-300">{value}</p>
        )}
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    if (validate()) {
      setIsSubmitting(true);
      
      // EmailJS configuration
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = 'service_4h5uxhj';
      const templateId = 'template_x3c199v';
      const publicKey = '0IFYxSuUWZX82Q5zw';
      
      emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          
          // Reset submission status after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        })
        .catch((error) => {
          console.error('Failed to send email:', error.text);
          setIsSubmitting(false);
          setSubmitError('Failed to send your message. Please try again later.');
        });
    }
  };

  return (
    <Section id="contact" className="bg-white dark:bg-gray-900">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="Have a project in mind or want to discuss an opportunity? Let's talk!"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h3>
          
          <ContactInfoItem 
            icon={<Mail className="text-blue-600 dark:text-blue-400" size={24} />}
            title="Email"
            value={personalInfo.email}
            link={`mailto:${personalInfo.email}`}
          />
          
          {/* <ContactInfoItem 
            icon={<Phone className="text-blue-600 dark:text-blue-400" size={24} />}
            title="Phone"
            value={personalInfo.phone}
            link={`tel:${personalInfo.phone}`}
          /> */}
          
          <ContactInfoItem 
            icon={<MapPin className="text-blue-600 dark:text-blue-400" size={24} />}
            title="Location"
            value={personalInfo.location}
          />
          
          <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Professional Profiles
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can also connect with me on these platforms:
            </p>
            <div className="flex space-x-4">
              <a 
                href={`https://github.com/${personalInfo.github}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/ayush-singh-3a2b6916b/"
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send Me a Message
          </h3>
          
          {isSubmitted ? (
            <div className="bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-200 p-4 rounded-md flex items-center mb-6">
              <Check className="mr-2" size={20} />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          ) : null}
          
          {submitError ? (
            <div className="bg-red-100 dark:bg-red-800/30 text-red-800 dark:text-red-200 p-4 rounded-md flex items-center mb-6">
              <AlertCircle className="mr-2" size={20} />
              <span>{submitError}</span>
            </div>
          ) : null}
          
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-800'
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-800'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-800'
                }`}
                placeholder="Project Opportunity"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full p-3 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-800'
                }`}
                placeholder="Your message here..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
              )}
            </div>
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
              icon={isSubmitting ? null : <Send size={18} />}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;