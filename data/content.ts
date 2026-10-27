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
  position: "left-top" | "left-bottom" | "right-top" | "right-bottom";
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
  link: string;
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
    { value: 5, suffix: "+", decimals: 0, label: "Projects Completed" },
    { value: 3, suffix: "", decimals: 0, label: "Experiences" },
    { value: 5, suffix: "+", decimals: 0, label: "Certifications" },
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
    { name: "Next.js", category: "web" },
    { name: "TypeScript", category: "web" },
    { name: "Groq", category: "ai" },
    { name: "Selenium", category: "automation" },
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
      title: "Web Technologies",
      description: "Modern, responsive, and type-safe user interfaces.",
      skills: [
        { name: "Next.js (App Router)" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "React" },
        { name: "REST APIs" },
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
      liveUrl: "https://github.com/Kashish-coder06",
      githubUrl: "https://github.com/Kashish-coder06",
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
      liveUrl: "https://github.com/Kashish-coder06",
      githubUrl: "https://github.com/Kashish-coder06",
      featured: true,
    },
    {
      id: "bulk-whatsapp-automation",
      title: "Bulk WhatsApp Messaging Automation",
      shortDescription:
        "Robust automation tool using Selenium and Pandas to deliver personalized notifications without manual fatigue.",
      fullDescription:
        "Automated batch messaging system designed to dispatch personalized student and client updates from structured CSV/Excel sheets with intelligent random delays.",
      problem:
        "Broadcasting individual customized messages manually is exhausting, prone to clerical errors, and causes accounts to get rate-limited.",
      approach:
        "Utilized Selenium WebDriver with active session persistence, dynamic element detection, customizable message templates, and human-like throttling.",
      learned:
        "Deepened knowledge of browser automation architectures, headless Chrome drivers, anti-ban wait timers, and error recovery queues.",
      tags: ["Python", "Selenium", "Pandas", "Automation"],
      image: "/projects/bulk-whatsapp.svg",
      liveUrl: "https://github.com/Kashish-coder06",
      githubUrl: "https://github.com/Kashish-coder06",
      featured: true,
    },
    {
      id: "ai-vision-assistant",
      title: "AI Vision Assistant",
      shortDescription:
        "Modern web application combining computer vision models with Next.js and TypeScript.",
      fullDescription:
        "Interactive web application capable of analyzing images, recognizing text, describing visual scenes, and providing instant AI-driven answers.",
      problem:
        "Delivering smooth image uploads and instantaneous multimodal responses without interface freezing or layout jumping.",
      approach:
        "Constructed with Next.js 14 App Router, TypeScript, Tailwind CSS, client-side image compression, and streaming vision endpoints.",
      learned:
        "Refined modern React component composition, typed server actions, and accessibility patterns for visual analysis tools.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vision AI"],
      image: "/projects/vision-assistant.svg",
      liveUrl: "https://github.com/Kashish-coder06",
      githubUrl: "https://github.com/Kashish-coder06",
      featured: true,
    },
    {
      id: "project-banana",
      title: "Project Banana (AR Experience)",
      shortDescription:
        "AR-based QR menu scanning web experience where food items animate seamlessly across devices.",
      fullDescription:
        "Next-generation digital dining prototype where restaurant visitors scan tabletop QR codes to preview interactive 3D animated dishes right before ordering.",
      problem:
        "Static 2D paper menus provide little visual context for portion sizing and dish presentation.",
      approach:
        "Combined lightweight 3D web models with camera-based AR anchoring and mobile-optimized WebGL render pipelines.",
      learned:
        "Optimized 3D geometry and texture memory for low-latency smartphone browsers and responsive touch controls.",
      tags: ["AR / 3D", "JavaScript", "WebGL", "Mobile UX"],
      image: "/projects/project-banana.svg",
      liveUrl: "https://github.com/Kashish-coder06",
      githubUrl: "https://github.com/Kashish-coder06",
      featured: false,
    },
  ] as ProjectItem[],

  designWorks: [
    {
      id: "design-1",
      title: "Brand Identity & Vector Logos",
      category: "Branding",
      image: "/projects/design-brand.svg",
      link: "https://www.behance.net/vipernoon",
    },
    {
      id: "design-2",
      title: "Modern UI/UX Web Concepts",
      category: "UI/UX Design",
      image: "/projects/design-ui.svg",
      link: "https://www.behance.net/vipernoon",
    },
    {
      id: "design-3",
      title: "Social Media Campaign Visuals",
      category: "Digital Marketing",
      image: "/projects/design-social.svg",
      link: "https://www.behance.net/vipernoon",
    },
    {
      id: "design-4",
      title: "Typography & Event Posters",
      category: "Print & Vector",
      image: "/projects/design-poster.svg",
      link: "https://www.behance.net/vipernoon",
    },
  ] as DesignWorkItem[],

  experience: {
    heading: "My",
    headingHighlight: "Experience",
    subtitle: "My professional journey and educational background in technology",
    badgeCenter: "3 Experiences",
    items: [
      {
        id: "alkhidmat",
        role: "Volunteer Management Intern",
        company: "Alkhidmat Foundation Pakistan",
        duration: "June 2026 - Present",
        description:
          "Coordinating volunteer groups, managing community welfare operations, and streamlining communication pipelines for relief drives.",
        position: "left-top",
      },
      {
        id: "borlo-labs",
        role: "Generative AI Intern",
        company: "Borlo Labs",
        duration: "March 2026 - April 2026",
        description:
          "Explored RAG applications for intelligent knowledge retrieval, engineered FastAPI workflows for AI backends, and developed prompt chains.",
        position: "left-bottom",
      },
      {
        id: "gcuh-degree",
        role: "BS Information Technology",
        company: "Government College University Hyderabad",
        duration: "2024 - 2027 (Expected)",
        description:
          "Current CGPA: 3.80/4.0. Strong academic focus on Data Structures, Python, Database Management Systems, and Software Engineering.",
        position: "right-top",
      },
      {
        id: "digital-sindh",
        role: "Graphic Designer & Computer Operator",
        company: "Digital Sindh Institute of Management & Technology",
        duration: "October 2024",
        description:
          "Designed promotional visual content, digital banners, and handled administrative computer operations and data management.",
        position: "right-bottom",
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
