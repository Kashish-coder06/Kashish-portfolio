export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  approach: string;
  learned: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  badge?: string;
  side: "left" | "right";
}

export interface EducationItem {
  institution: string;
  program: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface LanguageItem {
  code: string;
  name: string;
  percentage: number;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  linkText: string;
  verifyUrl: string;
  type: "cert" | "award";
}

export interface DesignWorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
}

export const siteContent = {
  personal: {
    name: "Kashish Kumari",
    shortName: "Kashish",
    headline: "Python Developer | Data Analytics | Graphic Design | Generative AI",
    subHeadline:
      "Python developer and data analytics learner who builds AI-powered tools, automations and clean visual designs.",
    location: "Hyderabad, Sindh, Pakistan",
    education: "BS Information Technology, Government College University Hyderabad (CGPA 3.80/4.0, 2024 to 2027)",
    currentLearning: "Data Science & AI at Saylani Mass I.T. Training (S.M.I.T)",
    tagline: "I build things at the intersection of code, data, and design, from RAG-powered chatbots to pixel-perfect graphics.",
    openTo: "Internships and entry-level roles in Python Development, Data Analytics, or Graphic Design",
    cvPath: "/Kashish_Kumari_CV.pdf",
    avatarHero: "/avatars/avatar-hero.png",
    avatarAbout: "/avatars/avatar-about.png",
    avatarExperience: "/avatars/avatar-experience.png",
  },

  socials: {
    email: "kashish06kumari@gmail.com",
    linkedin: "https://www.linkedin.com/in/kashishkumari06",
    github: "https://github.com/Kashish-coder06",
  },

  hero: {
    greeting: "Hi, I'm",
    typingRoles: [
      "Python Developer",
      "Data Analyst",
      "Graphic Designer",
      "GenAI Builder",
    ],
    ctaPrimary: "Download Resume",
    ctaSecondary: "Contact Me",
  },

  stats: [
    { value: 3.8, suffix: "", decimals: 2, label: "CGPA (GCUH)" },
    { value: 3, suffix: "+", decimals: 0, label: "Core Projects" },
    { value: 5, suffix: "", decimals: 0, label: "Experiences & Roles" },
    { value: 7, suffix: "+", decimals: 0, label: "Certifications" },
  ],

  about: {
    heading: "About",
    headingHighlight: "Me",
    bioParagraph1:
      "I'm a third-year BS IT student at Government College University Hyderabad (GCUH) with a CGPA of 3.80/4.0. I thrive at the convergence of programming logic, analytical insights, and aesthetic design.",
    bioParagraph2:
      "I've developed Generative AI applications including RAG pipelines and FastAPI microservices, automated complex bulk communication workflows in Python with Selenium, and designed visual brand identities. Currently, I'm expanding my advanced machine learning and data science expertise with S.M.I.T.",
    ctaText: "Hire Me",
  },

  marqueeSkills: [
    { name: "Python", category: "code" },
    { name: "Pandas", category: "data" },
    { name: "FastAPI", category: "code" },
    { name: "Tableau", category: "data" },
    { name: "Excel", category: "data" },
    { name: "LangChain", category: "ai" },
    { name: "Groq API", category: "ai" },
    { name: "RAG Systems", category: "ai" },
    { name: "Streamlit", category: "code" },
    { name: "Photoshop", category: "design" },
    { name: "Illustrator", category: "design" },
    { name: "Canva", category: "design" },
  ],

  skillsGrouped: [
    {
      title: "Programming & Data",
      description: "Data extraction, manipulation, and backend API engineering.",
      skills: [
        { name: "Python" },
        { name: "Pandas" },
        { name: "FastAPI" },
        { name: "Excel" },
        { name: "Tableau" },
        { name: "SQL & Data Analysis" },
      ],
    },
    {
      title: "Generative AI & Automation",
      description: "LLM agents, retrieval pipelines, and robotic web workflows.",
      skills: [
        { name: "RAG Architecture" },
        { name: "Prompt Engineering" },
        { name: "Groq API" },
        { name: "Selenium Automation" },
        { name: "AI Backend Workflows" },
      ],
    },
    {
      title: "AI Tools & Productivity",
      description: "Applied generative AI tools, prompt engineering, and smart development workflows.",
      skills: [
        { name: "LangChain" },
        { name: "Prompt Engineering" },
        { name: "Groq LLMs" },
        { name: "ChatGPT & Claude" },
        { name: "Streamlit UI" },
        { name: "AI Automation" },
      ],
    },
    {
      title: "Graphic Design",
      description: "Visual identity, UI layouts, typography, and vector assets.",
      skills: [
        { name: "Adobe Photoshop" },
        { name: "Adobe Illustrator" },
        { name: "Canva" },
        { name: "UI/UX Prototyping" },
        { name: "Digital Media Production" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "raasta-civic-platform",
      title: "Raasta — Civic Issue Platform",
      shortDescription:
        "Full-stack civic engagement and issue mapping application built during the Denning Hackathon.",
      fullDescription:
        "An innovative civic issue reporting and interactive map explorer platform. Empowers citizens to report local civic issues (potholes, water leaks, streetlights) with real-time geolocation mapping, live status histories, community upvotes, and administrative moderator workflows.",
      problem:
        "Citizens lack an accessible, transparent, real-time mechanism to report and track municipal infrastructure problems directly to responsible authorities.",
      approach:
        "Engineered with React 18, TypeScript, Tailwind CSS, Leaflet GIS mapping, Supabase backend integration, and a role-based moderator review dashboard.",
      learned:
        "Gained comprehensive experience in Leaflet interactive spatial mapping, geographic coordinate plotting, Supabase schema migrations, and high-pressure hackathon teamwork.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Leaflet GIS", "Supabase"],
      image: "/projects/raasta.png",
      liveUrl: "https://hackathon-project-team-triad-5jddxnsivxmouav55uwfc7.streamlit.app/",
      githubUrl: "https://github.com/Kashish-coder06/hackathon-project-team-TRIAD",
      featured: true,
    },
    {
      id: "whatsapp-chat-analyzer",
      title: "WhatsApp Chat Analyzer",
      shortDescription:
        "Full-featured analytics web app for exported WhatsApp chats with statistics, heatmaps, and word clouds.",
      fullDescription:
        "Parses multi-format chat exports from Android and iOS, extracts participant engagement statistics, visualizes daily and weekly message rhythms via heatmaps, and filters sentiment and top emojis.",
      problem:
        "Raw chat exports contain irregular timestamps, multi-line texts, and bracket variations across iOS and Android, making visual trend analysis challenging.",
      approach:
        "Built resilient regex parsers supporting 12h/24h and bracketed formats, integrated Pandas for grouped aggregations, and plotted interactive Plotly charts and WordClouds.",
      learned:
        "Mastered complex regex tokenization, custom multilingual stop-word filtering, and high-performance dataframe slicing.",
      tags: ["Python", "Streamlit", "Pandas", "Plotly", "Regex"],
      image: "/projects/whatsapp-analyzer.png",
      liveUrl: "https://whatsapp-analyzerapp.streamlit.app/",
      githubUrl: "https://github.com/Kashish-coder06/whatsapp-analyzer",
      featured: true,
    },
    {
      id: "kashish-bot",
      title: "KashishBot",
      shortDescription:
        "Conversational AI chatbot built with Python and the high-speed Groq API for rapid inference.",
      fullDescription:
        "An intelligent, ultra-fast conversational assistant engineered with Python and Groq LLMs. Features streaming responses, customizable system personas, context memory retention, and low-latency API handling.",
      problem:
        "Standard conversational interfaces often suffer from high token latency and clumsy context retention on local devices.",
      approach:
        "Integrated the Groq SDK with Llama-3 acceleration, engineered structured prompt memory buffers, and implemented responsive client feedback.",
      learned:
        "Gained deep hands-on expertise in Groq inference optimization, streaming token chunking, and deterministic prompt system guidelines.",
      tags: ["Python", "Groq API", "Generative AI", "Prompt Engineering"],
      image: "/projects/kashishbot.svg",
      githubUrl: "https://github.com/Kashish-coder06/AI_chatbot",
      featured: true,
    },
  ] as ProjectItem[],

  designWorks: [
    {
      id: "design-1",
      title: "Beauty & Skincare Campaign Ad",
      category: "Product & Ad Design",
      image: "/projects/showcase-beauty-square.jpg",
    },
    {
      id: "design-2",
      title: "Detailed Vector Eye Illustration",
      category: "Digital Illustration",
      image: "/projects/showcase-vector-eye.png",
    },
    {
      id: "design-3",
      title: "Musical Party Night Event Poster",
      category: "Flyer & Poster Design",
      image: "/projects/showcase-musical-party.jpg",
    },
    {
      id: "design-4",
      title: "GCUH IT Student's Society Social Media Post",
      category: "Social Media & Branding",
      image: "/projects/showcase-it-society.jpg",
    },
  ] as DesignWorkItem[],

  experience: {
    heading: "My",
    headingHighlight: "Experience",
    subtitle: "My professional journey, internships, and educational background in technology",
    badgeCenter: "5 Experiences & Roles",
    items: [
      {
        id: "datheon",
        role: "Python + Generative AI & LangChain Intern",
        company: "Datheon (AI Systems & Automation Studio)",
        duration: "Oct 2026 - Nov 05, 2026 (4 Weeks)",
        description:
          "Engineered AI workflows with LangChain, integrated LLM architectures, and built automated intelligent systems (Certificate ID: CERT-DT-2026-EPZNH).",
        side: "left",
      },
      {
        id: "borlo-labs",
        role: "Generative AI Intern",
        company: "Borlo Labs",
        duration: "March 2026 - April 2026",
        description:
          "Explored RAG applications for intelligent knowledge retrieval, engineered FastAPI workflows for AI backends, and developed prompt chains.",
        side: "left",
      },
      {
        id: "alkhidmat",
        role: "Volunteer Management Intern",
        company: "Alkhidmat Foundation Pakistan",
        duration: "June 2026 - Present",
        description:
          "Coordinating volunteer groups, managing community welfare operations, and streamlining communication pipelines for relief drives.",
        side: "left",
      },
      {
        id: "digital-sindh",
        role: "Graphic Designer & Computer Operator Intern",
        company: "Digital Sindh Institute of Management & Technology",
        duration: "October 2024",
        description:
          "Internship: Designed promotional visual content, marketing banners, and handled administrative computer operations and data management.",
        side: "right",
      },
      {
        id: "gcuh-degree",
        role: "BS Information Technology",
        company: "Government College University Hyderabad",
        duration: "2024 - 2027 (Expected)",
        description:
          "Current CGPA: 3.80/4.0. Strong academic focus on Data Structures, Python, Database Management Systems, and Software Engineering.",
        side: "right",
      },
    ] as ExperienceItem[],

    additionalEducation: [
      {
        institution: "Saylani Mass I.T. Training (S.M.I.T)",
        program: "Data Science & Artificial Intelligence",
        year: "2026 - 2027",
      },
      {
        institution: "Benazir Bhutto Shaheed Youth Development Program [BBSYDP]",
        program: "Multimedia Graphic Design",
        year: "2024",
      },
      {
        institution: "Govt. Vocational Training Center (Girls), Qasimabad",
        program: "Diploma in Information Technology & Computer Operator",
        year: "2024",
      },
    ] as EducationItem[],
  },

  certifications: [
    {
      title: "Python + Generative AI & LangChain Internship",
      issuer: "Datheon (AI Systems & Automation Studio)",
      linkText: "View Certificate",
      verifyUrl: "/certificates/datheon-certificate.png",
      type: "cert",
    },
    {
      title: "Denning Hyderabad Hackathon 2026-2027",
      issuer: "Denning Hyderabad Tech Gen Society @ DITE",
      linkText: "View Certificate",
      verifyUrl: "/certificates/hackathon-denning.jpg",
      type: "award",
    },
    {
      title: "Deloitte Australia: Data Analytics Job Simulation",
      issuer: "Deloitte / Forage",
      linkText: "View Certificate",
      verifyUrl: "https://www.linkedin.com/in/kashishkumari06",
      type: "cert",
    },
    {
      title: "Pandas Certification",
      issuer: "Kaggle / Professional",
      linkText: "View Certificate",
      verifyUrl: "https://www.linkedin.com/in/kashishkumari06",
      type: "cert",
    },
    {
      title: "HCAI AI V4.0 Certification",
      issuer: "Huawei / Academic",
      linkText: "View Certificate",
      verifyUrl: "https://www.linkedin.com/in/kashishkumari06",
      type: "cert",
    },
    {
      title: "AI For Beginners",
      issuer: "Saylani / S.M.I.T",
      linkText: "View Certificate",
      verifyUrl: "https://www.linkedin.com/in/kashishkumari06",
      type: "cert",
    },
    {
      title: "Operating Systems and You: Becoming a Power User",
      issuer: "Google / Coursera",
      linkText: "View Certificate",
      verifyUrl: "https://www.linkedin.com/in/kashishkumari06",
      type: "cert",
    },
    {
      title: "Honors: IT EXPO & Female Defend Yourself Award",
      issuer: "Academic & Tech Community",
      linkText: "View Honor",
      verifyUrl: "https://www.linkedin.com/in/kashishkumari06",
      type: "award",
    },
  ] as CertificationItem[],

  languages: [
    { code: "EN", name: "English", percentage: 95 },
    { code: "UR", name: "Urdu", percentage: 95 },
    { code: "SD", name: "Sindhi", percentage: 90 },
    { code: "HI", name: "Hindi", percentage: 80 },
  ] as LanguageItem[],

  contact: {
    heading: "Let's",
    headingHighlight: "Work Together",
    subtitle: "Open to internships and entry-level roles. Let's connect.",
    ctaBannerTitle: "Have an opportunity? Let's talk",
    ctaBannerSubtitle:
      "Whether you're looking for a Python developer, a data analytics intern, or creative design work, I'm ready to contribute.",
    buttonText: "Send Message",
  },
};
