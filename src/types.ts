export interface ExperienceType {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
}

export interface ProjectType {
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
}

export interface EducationType {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface CertificationType {
  title: string;
  issuer: string;
  date: string;
}

export interface SkillType {
  category: string;
  items: string[];
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}