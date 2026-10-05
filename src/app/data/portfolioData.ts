export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  period: string;
  description: string;
  longDescription: string;
  tech: string[];
  metrics: string[];
  image: string;
  link?: string;
  github?: string;
  role: string;
}

export interface ExperienceNode {
  id: string;
  number: string;
  title: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
  coordinates: { x: number; y: number }; // Percentage coordinates on the constellation canvas
}

export const portfolioData = {
  personal: {
    name: 'ROHIT SHINDE',
    tagline: 'THE GAME CHANGER',
    introWhisper: '* EVERYTHING YOU SEE FROM NOW ON BELONGS TO ME, TO',
    roles: ['AI ENGINEER', 'SYSTEMS ARCHITECT', 'BUILDER', 'FULL STACK DEVELOPER'],
    rolesString: 'AI ENGINEER • SYSTEMS ARCHITECT • BUILDER • FULL STACK DEVELOPER • AI ARCHITECT',
    location: 'Pune, Maharashtra, India',
    coordinates: '18.5204° N, 73.8567° E',
    email: 'rohitshinde3903@gmail.com',
    phone: '+91 74992 73903',
    linkedin: 'https://linkedin.com/in/rohitshinde3903',
    github: 'https://github.com/rohitshinde3903',
    resumePdf: '/resume/Rohit_Shinde-ML.pdf',
  },

  hero: {
    headlinePrefix: 'I',
    headlineSuffix: 'AM',
    headlineMain: 'DIFFERENT.',
    subtitle: 'AI ENGINEER • SYSTEMS • BUILDER',
    portraitImage: '/images/image.png',
  },

  about: {
    tag: '/ABOUT',
    since: 'IN PROCESS SINCE 2003',
    headline: 'PRECISE. EFFICIENT. RELIABLE. TASK-ORIENTED.',
    lead: 'I turn ideas into real-life working systems & products—completing everything I start with zero compromise.',
    subLead: 'AI Geek • Vibe Coder with Security & Scalability Nuances • Systems Builder',
    personaStatement:
      'I am Precise, Efficient, Reliable, Task-Oriented, and unapologetically Egoistic about shipping. I complete everything I start, turning raw ideas into real-life, production-grade working systems and products.',
    geekManifesto:
      'I am an AI Geek and a Vibe Coder armed with deep Security and Scalability nuances. I combine flow-state prototyping speed with the architectural discipline required to make systems resilient, hardened, and high-throughput under pressure.',
    traits: [
      {
        number: '01',
        title: 'PRECISE & EFFICIENT',
        tag: 'ZERO_BLOAT',
        description: 'Surgical code execution. Optimal algorithmic pathways, low-latency compute, and zero fluff.',
      },
      {
        number: '02',
        title: 'RELIABLE & TASK-ORIENTED',
        tag: '100%_COMPLETION',
        description: 'Relentless drive to close every loop. Turning abstract concepts into shipped, working reality.',
      },
      {
        number: '03',
        title: 'EGOISTIC ABOUT EXCELLENCE',
        tag: 'HIGH_STANDARDS',
        description: 'No half-baked demos or sloppy hacks. Uncompromising pride in engineering craft and system longevity.',
      },
      {
        number: '04',
        title: 'AI GEEK // VIBE CODER',
        tag: 'SECURITY_&_SCALE',
        description: 'High-speed flow-state velocity built atop defense-in-depth, hardened auth, and distributed scale.',
      },
    ],
    distinctions: [
      { label: 'ACADEMICS', value: '9.45 CGPA Distinction' },
      { label: 'DISCIPLINE', value: 'Computer Engineering' },
      { label: 'SPECIALIZATION', value: 'GenAI & Autonomous Agent Systems' },
      { label: 'DELIVERY', value: 'Idea to Live Product' },
    ],
  },

  projects: [
    {
      id: 'vidyaai-platform',
      number: '01',
      title: 'VidyaAI — Educational AI Platform',
      category: 'Enterprise GenAI',
      description:
        'Comprehensive AI platform for schools powered by contextual RAG pipelines, vector database retrieval, and multi-provider model switching.',
      longDescription:
        'A comprehensive enterprise AI platform for educational institutions. VidyaAI uses contextual retrieval-augmented generation pipelines and vector database retrieval to provide grounded AI experiences. Its multi-provider model routing architecture enables dynamic provider switching while maintaining service continuity and a scalable backend architecture.',
      tech: [
        'RAG Engine',
        'Vector DB',
        'Multi-LLM Router',
        'FastAPI',
      ],
      metrics: [
        'Dynamic Provider Hot-Switching',
        'Zero-Downtime Architecture',
      ],
      image: '/images/vidyaai-web.jpg',
      link: 'https://vidyaai.eduaihub.in/login',
      role: 'GenAI Engineer & Systems Architect',
    },

    {
      id: 'vidyaai-mobile',
      number: '02',
      title: 'VidyaAI Mobile — Edge SLM',
      category: 'Edge AI',
      description:
        'Offline-first mobile application powered by a custom SLM fine-tuned on CBSE textbook data with on-device execution and an offline RAG pipeline.',
      longDescription:
        'An offline-first educational AI application designed to bring intelligent learning directly to mobile devices. VidyaAI Mobile uses a custom Small Language Model fine-tuned on CBSE textbook data, combined with an offline retrieval pipeline and on-device execution to provide AI assistance without requiring continuous internet connectivity.',
      tech: [
        'React Native',
        'Custom SLM',
        'Offline RAG',
        'PDF Ingestion',
      ],
      metrics: [
        '100% Offline Edge Inference',
      ],
      image: '/images/vidyaai-app.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.Vidya_AI.app&hl=en_IN',
      role: 'Edge AI Engineer',
    },

    {
      id: 'stones-academy',
      number: '03',
      title: 'Stones Academy',
      category: 'EdTech Platform',
      description:
        'Course hosting platform for 50+ premier schools with payment gateway, student portals, and tamper-proof cryptographic certificate system.',
      longDescription:
        'A production-ready EdTech platform designed for course distribution across 50+ premier schools. The platform combines course hosting, student portals, payment processing, and a cryptographic certificate system designed to make issued certificates tamper-resistant and verifiable.',
      tech: [
        'Next.js',
        'Razorpay',
        'SHA-256 Ledger',
        'Course Distribution',
      ],
      metrics: [
        '50+ Premier Schools',
        'Razorpay Integrated',
        'Tamper-Proof Certificates',
      ],
      image: '/images/stones-academy.jpg',
      link: 'https://stonesacademy.vercel.app/',
      role: 'Full Stack Engineer & Product Architect',
    },

    {
      id: 'eduai-slm',
      number: '04',
      title: 'EduAI SLM Fine-Tuning',
      category: 'SLMs & Vector RAG',
      description:
        'Fine-tuned Gemma 3B using LoRA and QLoRA for educational curricula with LlamaIndex and ChromaDB vector retrieval pipeline.',
      longDescription:
        'A domain-specific Small Language Model research and engineering project focused on educational AI. Gemma 3B was fine-tuned using LoRA and QLoRA for curriculum-specific knowledge, then combined with a LlamaIndex and ChromaDB vector retrieval pipeline to improve contextual grounding and reduce hallucinations.',
      tech: [
        'PyTorch',
        'Gemma 3B',
        'LoRA/QLoRA',
        'LlamaIndex',
        'vLLM',
      ],
      metrics: [
        '+38% Accuracy',
        '-42% Hallucinations',
      ],
      image: '/images/evs.png',
      link: 'https://github.com/rohitshinde3903',
      role: 'SLM Engineer & AI Researcher',
    },

    {
      id: 'ai-electronic-voting',
      number: '05',
      title: 'AI Electronic Voting',
      category: 'CV & Security',
      description:
        'Tamper-proof voting platform with real-time facial biometric authentication, dual-factor security, and anomaly-detection ML.',
      longDescription:
        'A security-focused electronic voting platform combining facial biometric authentication, dual-factor security, and machine-learning-based anomaly detection. The system uses computer vision to verify voter identity while additional authentication and monitoring layers strengthen the overall voting workflow.',
      tech: [
        'Python',
        'Django',
        'OpenCV',
        'Facial Biometrics',
        '2FA',
      ],
      metrics: [
        'Biometric Verification',
        'Dual-Factor Authentication',
        'ML Anomaly Detection',
      ],
      image: 'https://rohiit.is-a.dev/images/evs.png',
      link: 'https://github.com/rohitshinde3903/EVS-Flask.git',
      role: 'AI & Security Engineer',
    },

    {
      id: 'profo',
      number: '06',
      title: 'PROFO — Portfolio Engine',
      category: 'Full-Stack Web',
      description:
        'Developer profile management platform to consolidate resume, GitHub, and verified projects into a single authenticated link.',
      longDescription:
        'A full-stack developer profile management platform built to consolidate professional identity into one authenticated digital profile. PROFO brings together resumes, GitHub projects, social profiles, verified projects, and professional information into a single shareable engineering identity.',
      tech: [
        'Django',
        'Python',
        'REST APIs',
        'Tailwind CSS',
      ],
      metrics: [
        'Unified Engineering Profile',
      ],
      image: 'https://rohiit.is-a.dev/images/profo.png',
      link: 'https://profoui.onrender.com/',
      role: 'Full Stack Developer & Product Architect',
    },
  ] as ProjectItem[],
  experience: [
    {
      id: 'exp-eduai',
      number: '01',
      title: 'EduAI Hub',
      role: 'AI / GenAI Engineer — Machine Learning & AI Systems',
      period: '12/2025 – 06/2026',
      location: 'Pune, India',
      summary:
        'Led development of domain-specific ML & SLM systems, architecting end-to-end training, retrieval, and vLLM-based inference serving.',
      highlights: [
        'Fine-tuned Gemma 3B using LoRA, QLoRA, and progressive layer unfreezing, boosting domain Q&A accuracy by ~38%.',
        'Architected retrieval pipelines using LlamaIndex and ChromaDB, grounding curriculum outputs and reducing hallucinations by ~42%.',
        'Optimized inference infrastructure, reducing latency by ~40% via parameter-efficient techniques and vLLM serving.',
        'Established MLOps workflows using MLflow and Weights & Biases for experiment tracking, versioning, and reproducibility.',
        'Deployed production AI microservices with Python, FastAPI, Docker, and GCP Cloud Run with automated CI/CD.',
        'Designed multimodal ML workflows using Stable Diffusion, SDXL, and ControlNet for educational content generation.',
      ],
      tech: ['Gemma 3B', 'LoRA / QLoRA', 'LlamaIndex', 'ChromaDB', 'vLLM', 'FastAPI', 'Docker', 'GCP Cloud Run', 'MLflow', 'Weights & Biases', 'Stable Diffusion'],
      coordinates: { x: 15, y: 15 },
    },
    {
      id: 'exp-freelance',
      number: '02',
      title: 'Independent Projects',
      role: 'Freelance ML / AI Engineer',
      period: '01/2024 – Present',
      location: 'Remote',
      summary:
        'Delivering end-to-end ML, NLP, and intelligent automation systems for international clients from discovery through production deployment.',
      highlights: [
        'Engineered Python data-processing pipelines, reducing operational data-handling overhead by 70%.',
        'Built production REST APIs and asynchronous inference endpoints using FastAPI and Celery.',
        'Architected custom LLM integrations and agentic tool-use pipelines for enterprise automation.',
      ],
      tech: ['Python', 'FastAPI', 'Celery', 'NLP', 'Data Pipelines', 'Automation', 'LLM Tool Use'],
      coordinates: { x: 85, y: 35 },
    },
    {
      id: 'exp-stones',
      number: '03',
      title: 'Stones Web Services',
      role: 'Founder & Lead Engineer',
      period: '06/2021 – Present',
      location: 'Pune, India',
      summary:
        'Founded a digital solutions agency delivering cloud architectures, full-stack platforms, and ML integrations for 15+ startups and regional businesses.',
      highlights: [
        'Built production web apps and APIs with Python (FastAPI, Django) and React, integrating NLP and computer-vision modules.',
        'Managed containerized GCP infrastructure, deployment workflows, and automated CI/CD.',
        'Architected cryptographic tamper-proof ledger systems and secure client data platforms.',
      ],
      tech: ['FastAPI', 'Django', 'React', 'Computer Vision', 'GCP', 'Docker', 'CI/CD', 'PostgreSQL'],
      coordinates: { x: 15, y: 55 },
    },
    {
      id: 'exp-dypatil',
      number: '04',
      title: 'Dr. D. Y. Patil SOST',
      role: 'Machine Learning Researcher / Developer',
      period: '11/2024 – 04/2025',
      location: 'Pune, India',
      summary:
        'Researched and implemented Computer Vision, ML, and NLP techniques for an AI-powered electronic voting and identity-verification platform.',
      highlights: [
        'Developed ML-based fraud and anomaly-detection capabilities to identify suspicious voting activity.',
        'Researched computer-vision and facial-biometric recognition approaches for identity verification and anti-spoofing.',
        'Investigated diffusion-based synthetic data generation for security-model training and validation.',
        'Contributed to core architecture spanning machine learning, analytics, and cryptographic security components.',
      ],
      tech: ['PyTorch', 'OpenCV', 'Facial Recognition', 'Anomaly Detection', 'Diffusion Models', 'Security ML'],
      coordinates: { x: 85, y: 75 },
    },
    {
      id: 'exp-teknowell',
      number: '05',
      title: 'Teknowell EduTech',
      role: 'Technical Trainer (Python & Web Frameworks)',
      period: '08/2024 – 11/2024',
      location: 'Pune, India',
      summary:
        'Trained and mentored 50+ students in full-stack Python systems, software architecture, deployment pipelines, and debugging.',
      highlights: [
        'Trained 50+ students in Python, Django, Flask, REST APIs, React, Git, deployment, and software engineering practices.',
        'Mentored students on real-world project development, debugging, container deployment, and technical problem solving.',
        'Deconstructed advanced computing and systems concepts into clear mental models for diverse engineering backgrounds.',
      ],
      tech: ['Python', 'Django', 'Flask', 'REST APIs', 'React', 'Git', 'Software Engineering'],
      coordinates: { x: 15, y: 95 },
    },
  ] as ExperienceNode[],

  contact: {
    headline: 'LET’S BUILD SOMETHING DIFFERENT.',
    subhead: 'Have an idea? Want to collaborate?',
    description:
      'Whether you are building next-generation autonomous AI systems, seeking high-impact engineering leadership, or looking to discuss ambitious product architecture, my inbox is always open.',
  },
};