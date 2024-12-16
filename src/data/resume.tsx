import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Santiago Sarabia",
  initials: "SS",
  url: "https://santiagosarabia.com",
  location: "Bolivia",
  locationLink: "https://www.google.com/maps/place/bolivia",
  description:
    "Software Engineer, AI Enthusiast, SaaS Innovator, and community builder with a passion for leveraging Artificial Intelligence, SaaS, and Social Media to create impactful tools and thriving tech ecosystems.",
  summary:
    "I am Santiago Sarabia, a Software Engineer, AI Enthusiast, SaaS Innovator, and community builder with a passion for leveraging Artificial Intelligence, SaaS, and Social Media to create impactful tools and thriving tech ecosystems. As a dynamic leader and developer, I focus on empowering creators, businesses, and innovators—particularly in Latin America—to unlock new possibilities and scale global connections.",
  avatarUrl: "/me.webp",
  skills: [
    "Python",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Swift",
    "Flutter",
    "Dart",
    "Solidity",
    "AWS",
    "Firebase",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "SantiagoSarabiasainz@gmail.com",
    tel: "", // Add phone number
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sarabiaops",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santiagosarabia",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:santiagosarabiasainz@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/sarabiaops", // Add Twitter/X URL
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Inbound Tools",
      href: "https://inbound-tools.com",
      badges: [],
      location: "Remote/Hybrid",
      title: "Product Engineer",
      logoUrl: "/inbound-tools.webp",
      start: "September 2024",
      end: "Present",
      description:
        "Key contributor to AI-driven product development at Inbound Tools, delivering innovative solutions under SquadS Ventures.",
    },
    {
      company: "SquadS Ventures",
      href: "https://squads.ventures",
      badges: [],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "/squads-ventures.webp",
      start: "June 2024",
      end: "Present",
      description:
        "Spearheading the creation of innovative tech startups, including Inbound Tools and Boris Returns, leveraging SaaS and AI to build scalable businesses.",
    },
    {
      company: "Boris Returns",
      href: "https://borisreturns.com",
      badges: [],
      location: "Hybrid",
      title: "Product Engineer",
      logoUrl: "/boris-returns.webp",
      start: "June 2024",
      end: "September 2024",
      description:
        "Engineered SaaS products for logistics optimization under SquadS Ventures, focusing on scalability and operational efficiency.",
    },
    {
      company: "Boring Inc.",
      href: "https://boring.lat",
      badges: [],
      location: "Remote",
      title: "Co-Founder & CEO",
      logoUrl: "/boring.webp",
      start: "September 2023",
      end: "Present",
      description:
        "As the sole technical lead and CTO, developed and managed AI-integrated web and mobile applications, delivering smart automation and tailored solutions to clients worldwide.",
    },
    {
      company: "Domu",
      href: "https://domu.ai",
      badges: [],
      location: "Remote",
      title: "Fullstack AI Engineer",
      logoUrl: "/domu.webp",
      start: "April 2023",
      end: "September 2023",
      description:
        "Designed and implemented AI-powered tools to streamline processes and enhance operational efficiency.",
    },
  ],
  education: [
    {
      school: "Universidad del Valle",
      href: "https://www.univalle.edu/",
      degree: "Bachelor's in Systems Engineering",
      logoUrl: "/univalle.webp", // Add logo URL
      start: "2020",
      end: "2024",
    },
    {
      school: "Makers Fellowship",
      href: "https://makers.build",
      degree: "Coding Fellowship",
      logoUrl: "/makers-fellowship.webp", // Add logo URL
      start: "2023",
      end: "2023",
    },
    {
      school: "deeplearning.AI",
      href: "http://deeplearning.ai",
      degree: "Deep Learning Specialization",
      logoUrl: "./deep-learning-ai.webp", // Add logo URL
      start: "2023",
      end: "2023",
    },
    {
      school: "Various Platforms",
      href: "",
      degree:
        "50+ Technical Certifications & Courses from Udemy, DataCamp, Frontend Masters, and specialized programs in AI, web development, and data science",
      logoUrl: "", // Add logo URL
      start: "2020",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "AI Integration Projects",
      href: "", // Add project URL
      dates: "2023 - Present",
      active: true,
      description:
        "Developed and implemented various AI solutions including custom models, API integrations with OpenAI, Hugging Face, and LangChain, and monitoring systems for robust AI performance.",
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenAI API",
        "LangChain",
        "Hugging Face",
      ],
      links: [], // Add relevant links
      image: "", // Add project image
      video: "", // Add demo video URL
    },
    {
      title: "SaaS Platform Development",
      href: "", // Add project URL
      dates: "2023 - Present",
      active: true,
      description:
        "Created scalable SaaS platforms using modern web technologies and cloud infrastructure, focusing on user experience and system performance.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "AWS",
        "Firebase",
        "PostgreSQL",
      ],
      links: [], // Add relevant links
      image: "", // Add project image
      video: "", // Add demo video URL
    },
    {
      title: "Mobile Applications",
      href: "", // Add project URL
      dates: "2023 - Present",
      active: true,
      description:
        "Built native iOS/macOS applications and cross-platform solutions using Flutter, emphasizing user-centric design and performance.",
      technologies: ["Swift", "Flutter", "Dart", "Firebase", "REST APIs"],
      links: [], // Add relevant links
      image: "", // Add project image
      video: "", // Add demo video URL
    },
    {
      title: "Blockchain Solutions",
      href: "", // Add project URL
      dates: "2023 - Present",
      active: true,
      description:
        "Developed decentralized applications and smart contract integrations for various blockchain platforms.",
      technologies: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"],
      links: [], // Add relevant links
      image: "", // Add project image
      video: "", // Add demo video URL
    },
  ],
  hackathons: [], // Add hackathon entries following the same structure as the example
} as const;
