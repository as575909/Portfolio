import { ExperienceType, ProjectType, EducationType, CertificationType, SkillType } from '../types';

export const personalInfo = {
  name: "Ayush Singh",
  title: "Software Engineer",
  location: "Pune, India",
  phone: "+917524067988",
  email: "as575909@gmail.com",
  github: "as575909",
  summary: "Experienced software engineer adept at meeting targets, delivering high-quality output, and tackling challenges. Seeking to leverage 2+ years of experience into a software engineer role, with a keen interest in becoming a skilled full-stack engineer. Eager learner committed to growth."
};

export const experiences: ExperienceType[] = [
  {
    company: "Damco Solutions Pvt. Ltd.",
    position: "Software Engineer",
    location: "Noida, UP",
    period: "Jan 2023 - Present",
    description: [
      "Developed reusable UI components for an internal framework project, improving scalability and integration efficiency.",
      "Worked on Walletz App, a Middle East-focused payment gateway similar to Paytm, leading UI development and transaction flow optimizations.",
      "Led the end-to-end development of MyFojo, an Indian food discovery and delivery app, enhancing user engagement and integrating seamless ordering of recipes and restaurant food.",
      "Built and optimized a Cab Sharing App (Canada-based), a ride-sharing/car-pooling platform, improving app performance by 35%, reducing lagging issues, and ensuring a smooth user experience.",
      "Currently leading the development of a Medical App (US-based) that connects medical practitioners worldwide and enables article discovery, content sharing, and networking.",
      "Developed the web version of the medical app using React Native Expo, leveraging GraphQL APIs for a 40% improvement in data fetching speed compared to REST APIs."
    ]
  },
  {
    company: "LearnoVate Ecommerce",
    position: "Web Developer Intern",
    location: "",
    period: "Sep 2021 - Dec 2021",
    description: [
      "Contributed as a Web Developer Intern, specializing in JavaScript and React.js.",
      "Successfully executed front-end development tasks, collaborated on interactive features, and gained hands-on experience in crafting dynamic and responsive web solutions."
    ]
  }
];

export const projects: ProjectType[] = [
  {
    title: "MyFojo (Food & Beverages Application)",
    period: "Nov 2023 - May 2024",
    description: "Developed a comprehensive cross-platform mobile app enabling users to order food, search recipes, and purchase ingredients within a unified interface.",
    details: [
      "Implemented advanced search and filter functionalities with seamless state management using Redux Toolkit and Redux Saga.",
      "Integrated Firebase for real-time database and push notifications, enhancing user engagement and retention.",
      "Focused on intuitive UI/UX and robust cart/order management for smooth transaction flows."
    ],
    technologies: ["React Native", "Redux Toolkit", "Redux Saga", "Firebase", "TypeScript", "Android", "iOS"],
    links: {
      appStore: "#",
      playStore: "#"
    },
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "COREO (Cab Sharing Application)",
    period: "June 2023 - Apr 2023",
    description: "Engineered a dynamic ride-sharing platform where users can seamlessly switch between rider or driver roles based on daily preference.",
    details: [
      "Designed and implemented real-time ride booking and location tracking using Firebase and Maps API.",
      "Integrated role-based authentication and conditionally rendered user flows, improving usability and flexibility.",
      "Migrated from REST to GraphQL API, optimizing performance and reducing payload sizes by 35%.",
      "Emphasized scalability and modular architecture, preparing the app for future feature extensions."
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "GraphQL", "Firebase", "Android", "iOS", "React Native Expo"],
    links: {
      appStore: "#",
      playStore: "#"
    },
    image: "https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const education: EducationType[] = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science Engineering",
    period: "2019 - 2023",
    score: "7.61"
  },
  {
    institution: "Sant Atulanand Convent School",
    degree: "Senior Secondary",
    period: "2016 - 2018",
    score: "85.00%"
  }
];

export const certifications: CertificationType[] = [
  {
    title: "Become A React Native Developer (Roadmap)",
    issuer: "Linkedin Learning",
    date: "May 2023"
  },
  {
    title: "Web Development Complete Bootcamp",
    issuer: "Udemy",
    date: "May 2022"
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "GeeksforGeeks",
    date: "October 2021"
  }
];

export const skills: SkillType[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "C/C++"]
  },
  {
    category: "Frameworks",
    items: ["ReactJs", "React Native", "Redux (Toolkit/Saga/Persist)", "Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Developer Tools",
    items: ["VS Code", "Postman", "Android Studio", "Xcode", "Testflight", "Jira", "Deployment & Release", "AWS", "Git", "BitBucket"]
  },
  {
    category: "Skills",
    items: ["Problem Solving", "Data Structures", "Unit Testing", "Bug Fixing", "Debugging", "Root Cause Analysis", "Object-Oriented Programming (OOP)"]
  },
  {
    category: "Languages",
    items: ["English", "Hindi"]
  }
];

export const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" }
];