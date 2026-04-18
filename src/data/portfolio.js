import { FiFileText, FiGithub, FiLinkedin } from "react-icons/fi";
import {
  expenseManagerDashboard,
  myimg,
  weatherapp,
  zeviDashboard,
} from "../assets";

export const portfolioData = {
  name: "Sahil Kumar",
  location: "Gurugram, India",
  summary:
    "Fullstack-focused software engineer with experience building scalable products, secure APIs, and maintainable UI systems. I enjoy blending polished interfaces with solid backend architecture so products feel fast, stable, and thoughtful in real-world use.",
  hero: {
    title: "I design interfaces that feel premium and engineer systems that stay reliable under load.",
    description:
      "React, Redux Toolkit, Angular, Spring Boot, REST APIs, JWT-based security, and performance optimization all come together in my work. I care about clarity in code as much as impact in the final experience.",
    image: myimg,
  },
  metrics: [
    { value: "2+", label: "Hands-on software roles across product and enterprise environments" },
    { value: "200+", label: "DSA problems solved on LeetCode with strong problem-solving depth" },
    { value: "JWT + RBAC", label: "Production-grade secure flows built for real systems" },
  ],
  focusAreas: [
    "Scalable React architecture",
    "Secure API integration",
    "Performance optimization",
    "Clean UI systems",
  ],
  experience: [
    {
      title: "Associate Software Engineer",
      company: "Bosch Global Software Technologies",
      type: "Current Role",
      period: "Jan 2025 - Jan 2026",
      stack: ["Angular", "Spring Security", "Spring Boot", "JWT", "RBAC"],
      highlights: [
        "Developed scalable frontend applications and dashboards using Angular with real-time data integration.",
        "Implemented debouncing techniques to optimize API calls and improve UI responsiveness.",
        "Designed and implemented Spring Security with JWT-based authentication and RBAC.",
        "Built and scheduled cron jobs in Spring Boot for production workflows.",
        "Integrated big frontend features and secure data flows for enterprise-facing use cases.",
      ],
    },
    {
      title: "SDE-1",
      company: "Bijak",
      type: "Previous Role",
      period: "Dec 2023 - Oct 2024",
      stack: ["React.js", "Redux Toolkit", "CRUD", "Date Picker Components"],
      highlights: [
        "Built frontend features using React.js and Redux Toolkit for scalable state management.",
        "Created real-time inventory management flows with CRUD support.",
        "Integrated CKEditor for dynamic component-driven workflows.",
        "Implemented date range picker components and reusable modules for efficient data filtering.",
      ],
    },
  ],
  projectFilters: ["All", "Full Stack", "Frontend", "Backend"],
  projects: [
    {
      title: "OrderCraft",
      description:
        "A full-stack order and inventory workflow platform aligned with the project mentioned in your resume, focused on operational clarity, secure access, and smooth business-facing interactions.",
      tags: ["Full Stack", "Frontend", "Backend"],
      outcomes: [
        "Built an inventory-oriented dashboard flow for managing orders and data-heavy operational screens.",
        "Split the architecture cleanly across frontend and backend repositories for maintainability.",
        "Focused on practical business workflows where secure actions, structured data, and clear UI all matter.",
      ],
      image: zeviDashboard,
      source: "https://github.com/snapepotter20/OrderCraft-Frontend",
      backendSource: "https://github.com/snapepotter20/OrderCraft-Backend",
    },
    {
      title: "Weather App - SkyGazer",
      description:
        "A responsive weather product using React, Node.js, and Tailwind CSS to surface current conditions, atmospheric pressure, and wind data in a clean interface.",
      tags: ["Full Stack", "Frontend"],
      outcomes: [
        "Used real-time API integration to keep weather data fresh and useful.",
        "Managed asynchronous state flows clearly across the UI and backend.",
        "Focused on responsive layout, readable cards, and polished frontend behavior.",
      ],
      image: weatherapp,
      source: "https://github.com/snapepotter20/WeatherApp-SkyGazer_Frontend",
    },
    {
      title: "Expense Manager",
      description:
        "A finance console for tracking expenses with month-wise filtering, CSV import support, vendor rule management, and anomaly detection surfaced in a dashboard-first interface.",
      tags: ["Full Stack", "Backend"],
      outcomes: [
        "Organized expense data into categories, vendors, and anomaly summaries for fast decision-making.",
        "Included workflow-focused features like CSV upload, vendor rules, and dashboard refresh controls.",
        "Structured the app as separate frontend and backend codebases for cleaner full-stack development.",
      ],
      image: expenseManagerDashboard,
      source: "https://github.com/snapepotter20/ExpenseManager-Frontend",
      backendSource: "https://github.com/snapepotter20/ExpenseManager-Backend",
    },
  ],
  skillGroups: [
    {
      title: "Frontend Systems",
      items: ["React.js", "Redux Toolkit", "Angular", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend Foundations",
      items: ["Node.js", "Spring Boot", "REST APIs", "Microservices", "JWT", "RBAC"],
    },
    {
      title: "Data & Cloud",
      items: ["MongoDB", "MySQL", "AWS EC2", "AWS S3", "Docker"],
    },
    {
      title: "Workflow & Quality",
      items: ["Git", "GitHub", "Postman", "Jira", "JUnit", "Mockito"],
    },
  ],
  education: {
    degree: "B.Tech in Electronics and Communication Engineering",
    school: "Chandigarh Group of Colleges",
    period: "2023",
    cgpa: "8.15 / 10",
  },
  achievements: [
    "Ranked 3724 in Google Kick Start Round C (2021).",
    "Solved 200+ DSA problems on LeetCode.",
  ],
  profiles: [
    {
      label: "LinkedIn",
      handle: "/in/sahil-kumar-5487561ba",
      note: "Professional updates, experience, and work history.",
      url: "https://www.linkedin.com/in/sahil-kumar-5487561ba/",
      icon: <FiLinkedin size={18} />,
    },
    {
      label: "GitHub",
      handle: "@snapepotter20",
      note: "Source code, experiments, and shipped side projects.",
      url: "https://github.com/snapepotter20",
      icon: <FiGithub size={18} />,
    },
    {
      label: "LeetCode",
      handle: "jumboclif42",
      note: "Problem-solving practice with strong DSA coverage.",
      url: "https://leetcode.com/jumboclif42/",
      icon: <FiFileText size={18} />,
    },
    {
      label: "Resume",
      handle: "Latest PDF",
      note: "Detailed timeline, technical depth, and achievements.",
      url: "https://drive.google.com/file/d/101vaMxH8mPmj2HFL5DL9iEhKU5uFSWL-/view?usp=sharing",
      icon: <FiFileText size={18} />,
    },
  ],
  contact: {
    email: "skk280540@gmail.com",
    phone: "+91 8290977266",
  },
  links: {
    github: "https://github.com/snapepotter20",
    linkedin: "https://www.linkedin.com/in/sahil-kumar-5487561ba/",
    leetcode: "https://leetcode.com/jumboclif42/",
    resume: "https://drive.google.com/file/d/101vaMxH8mPmj2HFL5DL9iEhKU5uFSWL-/view?usp=sharing",
  },
};
