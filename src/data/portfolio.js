import { FiFileText, FiGithub, FiLinkedin } from "react-icons/fi";
import {
  expenseManagerDashboard,
  myimg,
  weatherapp,
  zeviDashboard,
} from "../assets";

export const portfolioData = {
  name: "Sahil Kumar",
  location: "Hyderabad, India",
  summary:
    "AI full-stack engineer with 2+ years across Bosch and Bijak, shipping production REST APIs, scalable React frontends, and AI-powered product features. I work across Java, Spring Boot, Python, FastAPI, React.js, and LLM integrations to build systems that are practical, performant, and ready for production.",
  hero: {
    title: "I build AI-powered full-stack products with strong backend systems and production-ready frontend experiences.",
    description:
      "Java, Python, Spring Boot, React.js, FastAPI, OpenAI API, Claude API, RAG, and agentic workflows come together in my work. I care about shipping useful AI features on top of clean architecture, reliable APIs, and scalable user experiences.",
    image: myimg,
  },
  metrics: [
    { value: "30+", label: "Production REST APIs and microservices shipped across business-critical modules" },
    { value: "35%", label: "Response load reduced through caching, refactoring, and query tuning" },
    { value: "250+", label: "DSA problems solved on LeetCode across core data structure topics" },
  ],
  focusAreas: [
    "LLM integration and agentic workflows",
    "Spring Boot and microservices",
    "React frontends for production apps",
    "RAG, prompt engineering, and structured outputs",
  ],
  experience: [
    {
      title: "Associate Software Engineer",
      company: "Bosch Global Software Technologies, Hyderabad",
      type: "Current Role",
      period: "Jan 2025 - Jan 2026",
      stack: ["Java", "Spring Boot", "JPA", "Hibernate", "MySQL", "JWT", "RBAC"],
      highlights: [
        "Architected 30+ production REST APIs using Java, Spring Boot, JPA, Hibernate, and MySQL across scalable microservice modules.",
        "Cut response load 35% and improved system performance 25% through Spring caching, query tuning, and API refactoring.",
        "Secured enterprise applications with JWT authentication and RBAC through Spring Security.",
        "Used Claude Code, GitHub Copilot, Cursor AI, and ChatGPT daily for coding, debugging, and documentation workflows.",
        "Contributed to sprint planning, architecture discussions, and code reviews in an Agile/Scrum environment.",
      ],
    },
    {
      title: "Software Development Engineer I",
      company: "Bijak, Gurugram",
      type: "Previous Role",
      period: "Dec 2023 - Oct 2024",
      stack: ["React.js", "Redux Toolkit", "Axios", "Code Splitting", "Reusable UI Systems"],
      highlights: [
        "Built modular React.js and Redux Toolkit frontends with lazy loading and code splitting to improve UI responsiveness.",
        "Integrated 15+ REST APIs via Axios for reliable low-latency client-server communication.",
        "Shipped a real-time cart system with optimized CRUD operations and reduced cart latency by 20%.",
        "Built a reusable UI component library that sped up feature delivery by 30% across modules.",
        "Reduced redundant API calls through debouncing and throttling on search and filter workflows.",
      ],
    },
  ],
  projectFilters: ["All", "AI", "Full Stack", "Backend"],
  projects: [
    {
      title: "CodePilot AI",
      description:
        "An AI coding assistant built with Python, FastAPI, Claude API, OpenAI API, prompt chaining, and GitHub API integration to answer repo-aware questions and generate development outputs from natural language prompts.",
      tags: ["AI", "Full Stack", "Backend"],
      outcomes: [
        "Built context-aware workflows that generate code, unit tests, and documentation from natural-language prompts.",
        "Designed a prompt-chaining flow with structured JSON outputs to automate multi-file coding tasks end to end.",
        "Integrated GitHub API support for automated commit summaries and pull request descriptions.",
      ],
      image: expenseManagerDashboard,
      source: "https://github.com/snapepotter20",
    },
    {
      title: "OrderCraft AI",
      description:
        "An AI-assisted inventory management platform with React.js, Spring Boot, MySQL, JWT, Docker, and Claude API, designed for Admin, Manager, and Warehouse Staff workflows.",
      tags: ["AI", "Full Stack", "Backend"],
      outcomes: [
        "Built a full-stack inventory platform backed by 25+ REST APIs using Spring Boot, Spring Data JPA, and MySQL.",
        "Added a Claude-powered natural-language query feature so staff can ask for stock and order status directly.",
        "Cut API load 30% via server-side pagination, caching, and query optimization.",
      ],
      image: zeviDashboard,
      source: "https://github.com/snapepotter20/OrderCraft-Frontend",
      backendSource: "https://github.com/snapepotter20/OrderCraft-Backend",
    },
    {
      title: "Weather App - SkyGazer",
      description:
        "A responsive full-stack weather application built with React.js, Node.js, and Tailwind CSS to present real-time weather conditions in a clean interface.",
      tags: ["Full Stack"],
      outcomes: [
        "Integrated real-time weather APIs with a responsive frontend workflow.",
        "Managed asynchronous data flows clearly across UI and backend layers.",
        "Focused on fast rendering, clean cards, and mobile-friendly presentation.",
      ],
      image: weatherapp,
      source: "https://github.com/snapepotter20/WeatherApp-SkyGazer_Frontend",
    },
  ],
  skillGroups: [
    {
      title: "AI & LLM Engineering",
      items: ["LLMs", "RAG", "Prompt Engineering", "Prompt Chaining", "Agentic AI", "MCP", "Function Calling", "Structured Outputs", "Claude API", "OpenAI API"],
    },
    {
      title: "AI-Assisted Dev",
      items: ["Claude Code", "Cursor AI", "GitHub Copilot", "ChatGPT", "Gemini", "Codex"],
    },
    {
      title: "Backend & Architecture",
      items: ["Java", "Python", "Spring Boot", "FastAPI", "REST APIs", "Microservices", "JWT", "RBAC", "Redis", "Kafka", "System Design"],
    },
    {
      title: "Frontend, Data & Ops",
      items: ["React.js", "Redux Toolkit", "JavaScript", "TypeScript", "Tailwind CSS", "MySQL", "PostgreSQL", "MongoDB", "AWS", "Docker", "GitHub Actions"],
    },
  ],
  education: {
    degree: "B.Tech in Electronics and Communication Engineering",
    school: "Chandigarh Group of Colleges",
    period: "2023",
    cgpa: "8.15 / 10",
  },
  achievements: [
    "Achieved Global Rank 3,724 in Google Kick Start Round C (2021).",
    "Solved 250+ DSA problems on LeetCode across arrays, strings, linked lists, stacks, and trees.",
  ],
  profiles: [
    {
      label: "LinkedIn",
      handle: "/in/sahilkumar-fullstack",
      note: "Professional updates, AI engineering work, and recent experience.",
      url: "https://linkedin.com/in/sahilkumar-fullstack",
      icon: <FiLinkedin size={18} />,
    },
    {
      label: "GitHub",
      handle: "@snapepotter20",
      note: "Code repositories, experiments, and full-stack builds.",
      url: "https://github.com/snapepotter20",
      icon: <FiGithub size={18} />,
    },
    {
      label: "LeetCode",
      handle: "jumboclif42",
      note: "Problem-solving depth across core DSA topics.",
      url: "https://leetcode.com/u/jumboclif42/",
      icon: <FiFileText size={18} />,
    },
    {
      label: "Resume",
      handle: "Latest PDF",
      note: "Updated AI full-stack engineer resume.",
      url: "https://drive.google.com/file/d/1HNNbUmlS8vebmTIPeggEwYYOqg0drJLs/view?usp=sharing",
      icon: <FiFileText size={18} />,
    },
  ],
  contact: {
    email: "skk280540@gmail.com",
    phone: "+91 8290977266",
  },
  aiPrompts: [
    "Ask me about building RAG systems",
    "Ask me about production REST APIs",
    "Ask me about AI-assisted developer tools",
    "Ask me about OrderCraft AI",
  ],
  links: {
    github: "https://github.com/snapepotter20",
    linkedin: "https://linkedin.com/in/sahilkumar-fullstack",
    leetcode: "https://leetcode.com/u/jumboclif42/",
    resume: "https://drive.google.com/file/d/1HNNbUmlS8vebmTIPeggEwYYOqg0drJLs/view?usp=sharing",
  },
};
