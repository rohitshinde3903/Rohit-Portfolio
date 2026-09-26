'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Award, CheckCircle2, Cpu, Database, 
  Layers, Cloud, ShieldCheck, ExternalLink, Sparkles 
} from 'lucide-react';
import {
  FaPython, FaReact, FaNodeJs, FaJsSquare, FaDocker, FaAws, FaGitAlt
} from 'react-icons/fa';
import {
  SiNextdotjs, SiGit, SiTypescript, SiGooglecloud, SiTensorflow, SiPytorch, SiPandas, SiFastapi, SiDjango
} from 'react-icons/si';

type Skill = {
  name: string;
  info: string;
  level: number;
  badge?: string;
};

type Category = 'GenAI & LLMs' | 'Deep Learning & NLP' | 'Backend & Cloud' | 'Full-Stack & Web';

const categorizedSkills: Record<Category, Skill[]> = {
  "GenAI & LLMs": [
    { name: 'LangChain & LlamaIndex', info: 'RAG pipelines, agents & tool calling', level: 95, badge: 'Core' },
    { name: 'Fine-Tuning (LoRA / QLoRA)', info: 'PEFT, layer unfreezing & adaptation', level: 90, badge: 'Specialist' },
    { name: 'Open-Source SLMs (Gemma, Llama)', info: 'Gemma 3B, Llama 3, Mistral inference', level: 92, badge: 'Production' },
    { name: 'vLLM Serving Optimization', info: 'PagedAttention, KV cache, high-throughput', level: 88, badge: 'High Perf' },
    { name: 'Prompt Engineering & Agents', info: 'Function calling, structured output, CoT', level: 95, badge: 'Expert' },
    { name: 'Generative Vision (SDXL & ControlNet)', info: 'ComfyUI, LoRA, diffusion workflows', level: 85, badge: 'Multimodal' },
  ],
  "Deep Learning & NLP": [
    { name: 'PyTorch & Hugging Face', info: 'Transformers, fine-tuning & evaluation', level: 90, badge: 'Core' },
    { name: 'Vector DBs (ChromaDB / FAISS)', info: 'Embeddings, similarity search, indexing', level: 92, badge: 'RAG' },
    { name: 'NLP & Tokenization', info: 'NLTK, spaCy, text preprocessing', level: 88, badge: 'NLP' },
    { name: 'TensorFlow / Keras', info: 'Neural networks, computer vision', level: 80 },
    { name: 'Data Science (Pandas / NumPy)', info: 'Data cleaning, feature engineering, analytics', level: 92, badge: 'Analytics' },
    { name: 'MLOps (MLflow / W&B)', info: 'Experiment tracking & model governance', level: 85, badge: 'LLMOps' },
  ],
  "Backend & Cloud": [
    { name: 'FastAPI & Async Python', info: 'High-speed AI microservices & streaming', level: 95, badge: 'Microservices' },
    { name: 'Django & Django REST', info: 'Robust enterprise backend architecture', level: 92, badge: 'Production' },
    { name: 'Google Cloud Platform (GCP)', info: 'Vertex AI, Cloud Run, Cloud Functions', level: 88, badge: 'Cloud' },
    { name: 'Docker & Containerization', info: 'Multi-stage builds, GPU containers', level: 88, badge: 'DevOps' },
    { name: 'PostgreSQL & Databases', info: 'Relational data modeling & optimization', level: 85 },
    { name: 'CI/CD & Git Workflows', info: 'Automated test & deploy pipelines', level: 90 },
  ],
  "Full-Stack & Web": [
    { name: 'Python 3.x', info: 'Advanced OOP, async, type hinting', level: 96, badge: 'Expert' },
    { name: 'React & Next.js 15', info: 'Server Components, SSR, modern UI', level: 88, badge: 'Full-Stack' },
    { name: 'TypeScript & JavaScript', info: 'Type-safe scalable frontends', level: 85 },
    { name: 'Tailwind CSS & Framer Motion', info: 'Modern cybernetic styling & animations', level: 90 },
    { name: 'REST APIs & WebSockets', info: 'Bi-directional real-time communication', level: 92 },
    { name: 'Security (JWT & 2FA)', info: 'Authentication & cryptographic verification', level: 88 },
  ]
};

const certifications = [
  {
    title: 'Google Advanced Data Analytics',
    issuer: 'Google Career Certificates',
    date: '2024',
    badge: 'Professional Specialization',
    description: 'Mastery in statistical analysis, predictive modeling, machine learning algorithms, and high-dimensional data interpretation.',
    skills: ['Python', 'Statistical Modeling', 'Machine Learning', 'Data Visualization']
  },
  {
    title: 'The Power of Statistics in Data Science',
    issuer: 'Coursera / Stanford Academic',
    date: '2024',
    badge: 'Verified Credential',
    description: 'Foundations of probability, hypothesis testing, Bayesian inference, and distribution modeling for robust AI decision-making.',
    skills: ['Probability', 'Hypothesis Testing', 'Regression', 'Statistical Inference']
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("GenAI & LLMs");

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 mb-4">
            <Cpu className="h-3.5 w-3.5 text-purple-400" />
            <span className="text-xs sm:text-sm font-mono text-purple-300">Neural Tech Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Technical Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Specialized frameworks, foundational libraries, and cloud infrastructure engineered for production AI systems.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {Object.keys(categorizedSkills).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as Category)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white shadow-[0_0_25px_rgba(124,58,237,0.4)] border border-purple-400/30'
                  : 'bg-black/50 text-gray-400 border border-white/10 hover:border-purple-500/30 hover:text-white backdrop-blur-xl'
              }`}
            >
              {cat === 'GenAI & LLMs' && <Sparkles className="w-4 h-4 text-purple-300" />}
              {cat === 'Deep Learning & NLP' && <Layers className="w-4 h-4 text-cyan-300" />}
              {cat === 'Backend & Cloud' && <Cloud className="w-4 h-4 text-indigo-300" />}
              {cat === 'Full-Stack & Web' && <Terminal className="w-4 h-4 text-emerald-300" />}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-20"
        >
          {categorizedSkills[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.02] backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>
                  {skill.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/30">
                      {skill.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 font-light mb-5 leading-relaxed">
                  {skill.info}
                </p>
              </div>

              {/* Progress Bar Gauge */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5 font-mono">
                  <span className="text-gray-500 text-[11px]">Proficiency</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Credentials & Certifications */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 mb-3">
              <Award className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs font-mono text-blue-300">Verified Credentials</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Professional <span className="text-cyan-400">Certifications</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-black/50 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                    <p className="text-xs text-gray-400 font-mono">{cert.issuer} &bull; {cert.date}</p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-4">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s, i) => (
                    <span key={i} className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
