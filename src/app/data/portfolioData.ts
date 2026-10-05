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
    headline: 'IN PROCESS\nSINCE 2003.',
    lead: 'I build things with code, AI and curiosity.',
    subLead: 'AI Engineer. Full Stack Developer. Builder. Problem Solver.',
    narrative: [
      'I don’t just write code. I build intelligent products and experiences that turn abstract complexity into high-throughput systems.',
      'From fine-tuning small language models on domain data to orchestrating multi-agent state graphs, I engineer software that learns, acts, and scales reliably.',
    ],
    distinctions: [
      { label: 'ACADEMICS', value: '9.45 CGPA Distinction' },
      { label: 'DISCIPLINE', value: 'Computer Engineering' },
      { label: 'SPECIALIZATION', value: 'GenAI & Autonomous Agent Systems' },
      { label: 'FOCUS', value: 'Zero-to-One Product Architecture' },
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
      image: 'https://rohiit.is-a.dev/images/vidyaai-web.jpg',
      link: 'https://vidyaai.eduaihub.in/login',
      github: 'https://github.com/rohitshinde3903',
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
      image: 'https://rohiit.is-a.dev/images/vidyaai-app.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.Vidya_AI.app&hl=en_IN',
      github: 'https://github.com/rohitshinde3903',
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
      image: 'https://rohiit.is-a.dev/images/stones-academy.jpg',
      link: 'https://stonesacademy.vercel.app/',
      github: 'https://github.com/rohitshinde3903',
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
      image: 'https://rohiit.is-a.dev/images/evs.png',
      link: 'https://github.com/rohitshinde3903',
      github: 'https://github.com/rohitshinde3903',
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
      github: 'https://github.com/rohitshinde3903/EVS-Flask.git',
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
      github: 'https://github.com/rohitshinde3903/PROFO.git',
      role: 'Full Stack Developer & Product Architect',
    },
  ] as ProjectItem[],

  experience: [
    {
      id: 'exp-1',
      number: '01',
      title: 'Engineering Foundations',
      role: 'Computer Engineering & Core CS',
      period: '2022 — 2023',
      location: 'Pune, India',
      summary: 'Mastered low-level data structures, algorithmic complexity, object-oriented systems, and Linux networking.',
      highlights: [
        'Graduated top of cohort with 9.45 CGPA distinction.',
        'Engineered distributed database prototypes and networking sockets in C/Python.',
        'Built full-stack web applications with Python & Django.',
      ],
      tech: ['C++', 'Python', 'Django', 'Data Structures', 'Linux'],
      coordinates: { x: 12, y: 35 },
    },
    {
      id: 'exp-2',
      number: '02',
      title: 'Product Engineering & SaaS',
      role: 'Full-Stack Software Engineer',
      period: '2023 — 2024',
      location: 'Pune / Remote',
      summary: 'Moved into zero-to-one product engineering, shipping responsive web apps, mobile automation, and cloud backends.',
      highlights: [
        'Designed and released Profo identity micro-site platform.',
        'Built Auto-Trip Android telematics and driver assistance service.',
        'Architected clean REST APIs and stateful React interfaces.',
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      coordinates: { x: 30, y: 70 },
    },
    {
      id: 'exp-3',
      number: '03',
      title: 'Deep Learning & MLOps',
      role: 'Machine Learning Practitioner',
      period: '2024',
      location: 'Remote',
      summary: 'Transitioned deep into neural network architectures, model training pipelines, and production containerization.',
      highlights: [
        'Trained and evaluated vision and NLP models using PyTorch & Hugging Face.',
        'Engineered CI/CD pipelines with Docker and automated testing.',
        'Deployed containerized inference services on Google Cloud Run.',
      ],
      tech: ['PyTorch', 'Hugging Face', 'Docker', 'Google Cloud (GCP)', 'FastAPI'],
      coordinates: { x: 52, y: 30 },
    },
    {
      id: 'exp-4',
      number: '04',
      title: 'GenAI & Production RAG',
      role: 'GenAI Systems Engineer',
      period: '2025',
      location: 'Pune, India',
      summary: 'Specialized in Large Language Models, hybrid retrieval (RAG), vector databases, and hardware IoT integration.',
      highlights: [
        'Engineered StonesReviewsAI combining physical NFC hardware with real-time LLM sentiment routing.',
        'Developed hybrid vector search pipelines with Qdrant and pgvector.',
        'Implemented deterministic structured outputs with Pydantic & LangChain.',
      ],
      tech: ['LangChain', 'OpenAI', 'Qdrant', 'RAG Pipelines', 'NFC Protocols'],
      coordinates: { x: 72, y: 65 },
    },
    {
      id: 'exp-5',
      number: '05',
      title: 'Autonomous Agent Systems',
      role: 'Agentic AI & SLM Architect',
      period: '2025 — Present',
      location: 'Pune, India',
      summary: 'Pushing the edge of autonomous multi-agent swarms, state-graph orchestration, and local Small Language Model fine-tuning.',
      highlights: [
        'Fine-tuning Gemma 3B SLM with QLoRA for private low-latency edge inference.',
        'Designing multi-agent state machines with cyclic self-healing loops via LangGraph.',
        'Pioneering self-synthesizing generative interfaces and voice-native agents.',
      ],
      tech: ['LangGraph', 'Gemma 3B', 'QLoRA', 'CrewAI', 'Edge AI'],
      coordinates: { x: 90, y: 38 },
    },
  ] as ExperienceNode[],

  contact: {
    headline: 'LET’S BUILD SOMETHING DIFFERENT.',
    subhead: 'Have an idea? Want to collaborate?',
    description:
      'Whether you are building next-generation autonomous AI systems, seeking high-impact engineering leadership, or looking to discuss ambitious product architecture, my inbox is always open.',
  },
};