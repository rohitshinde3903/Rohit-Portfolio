export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  tech: string[];
  tags?: string[];
  metric: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  isPlayStore?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'vidyaai-web',
    number: '01',
    title: 'VidyaAI — End-to-End Educational AI Platform',
    category: 'Enterprise GenAI & Multi-LLM Orchestration',
    year: '2025 – 2026',
    tech: ['RAG & Context Engine', 'Vector Database', 'Multi-LLM Router', 'OpenAI / Claude / Gemini', 'FastAPI', 'Admin Control Panel'],
    metric: 'Dynamic Provider Hot-Switching • Zero-Downtime Migration',
    description:
      'Architected a comprehensive end-to-end AI platform for schools, teachers, and students powered by contextual RAG pipelines and vector database retrieval. Engineered a full administrative backend featuring a multi-provider abstraction layer, allowing admins to dynamically switch model providers between OpenAI, Anthropic Claude, Google Gemini, or their custom deployed fine-tuned AI models without code changes.',
    image: '/images/vidyaai-web.jpg',
    liveUrl: 'https://vidyaai.eduaihub.in/login',
  },
  {
    id: 'vidyaai-mobile',
    number: '02',
    title: 'VidyaAI Mobile — On-Device Edge SLM & Offline RAG',
    category: 'Edge AI & React Native Architecture',
    year: '2025 – 2026',
    tech: ['React Native', 'Custom Edge SLM', 'CBSE Curricula', 'Offline Vector RAG', 'PDF Ingestion', 'Bi-Directional Cloud Sync'],
    metric: '100% Offline Edge Inference • Isolated User Tenant RAG',
    description:
      'Engineered an offline-first mobile app in React Native powered by a custom SLM fine-tuned on CBSE school textbook data. Built on-device local execution, an offline context & RAG pipeline with custom user PDF ingestion, an online/offline toggle connecting seamlessly to the VidyaAI cloud backend, automatic bi-directional RAG synchronization, and strict tenant data isolation guaranteeing user documents remain completely private.',
    image: '/images/vidyaai-app.jpg',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.Vidya_AI.app&hl=en_IN',
    isPlayStore: true,
  },
  {
    id: 'stones-academy',
    number: '03',
    title: 'Stones Academy — School-Affiliated Learning Platform',
    category: 'EdTech Platform & Cryptographic Verification',
    year: '2025 – 2026',
    tech: ['Next.js', 'Razorpay Gateway', 'Cryptographic Ledger', 'SHA-256 Digest', 'Course Distribution', 'Interactive 3D'],
    metric: 'Razorpay Integrated • Tamper-Proof Cryptographic Certificates',
    description:
      'Custom-built course hosting and distribution platform affiliating with 50+ premier schools to deliver future-ready skills in AI, Python, and competitive academics. Built complete Razorpay payment gateway integration, school and student registration portals, cohort progress telemetry, and a tamper-proof cryptographic certificate system with SHA-256 ledger verification.',
    image: '/images/stones-academy.jpg',
    liveUrl: 'https://stonesacademy.vercel.app/',
  },
  {
    id: 'eduai-slm',
    number: '04',
    title: 'EduAI SLM Fine-Tuning & Knowledge RAG',
    category: 'Small Language Models & Vector RAG',
    year: '2025 – 2026',
    tech: ['PyTorch', 'Gemma 3B', 'LoRA / QLoRA', 'LlamaIndex', 'ChromaDB', 'vLLM Serving', 'GCP'],
    metric: '+38% Q&A Accuracy • -42% Hallucinations • -40% Latency',
    description:
      'Fine-tuned Gemma 3B using LoRA, QLoRA, and progressive layer unfreezing for specialized educational curricula. Coupled with a LlamaIndex and ChromaDB vector retrieval pipeline, achieving high factual accuracy while reducing inference latency by ~40% via vLLM PagedAttention serving.',
    image: '/images/evs.png',
    githubUrl: 'https://github.com/rohitshinde3903',
    liveUrl: 'https://rohiit.is-a.dev',
  },
  {
    id: 'electronic-voting',
    number: '05',
    title: 'AI-Powered Electronic Voting Platform',
    category: 'Computer Vision & Security',
    year: '2024 – 2025',
    tech: ['Python', 'Django', 'FastAPI', 'OpenCV', 'Facial Biometrics', '2FA Cryptography'],
    metric: 'Biometric Facial Verification & Dual-Factor 2FA',
    description:
      'A tamper-proof electronic voting platform engineered for high-integrity elections, featuring real-time facial biometric authentication, dual-factor security (2FA), real-time election telemetry, and anomaly-detection ML models.',
    image: '/images/evs.png',
    githubUrl: 'https://github.com/rohitshinde3903/EVS-Flask.git',
    liveUrl: 'https://rohiit.is-a.dev',
  },
  {
    id: 'profo-engine',
    number: '06',
    title: 'PROFO: Profile & Portfolio Management Engine',
    category: 'Full-Stack Web Architecture',
    year: '2024',
    tech: ['Django', 'Python', 'REST APIs', 'Authentication', 'Tailwind CSS'],
    metric: 'Unified Engineering Presence & Profile Management',
    description:
      'A full-stack developer profile management application allowing engineers to consolidate their resume, GitHub, and verified projects into a single authenticated, privacy-controlled public link.',
    image: '/images/profo.png',
    githubUrl: 'https://github.com/rohitshinde3903/PROFO.git',
    liveUrl: 'https://profoui.onrender.com/',
  },
];
