'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ShieldCheck, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Skill = {
  name: string;
  info: string;
  level: number;
};

type Category = 'GenAI & LLMs' | 'Deep Learning & NLP' | 'Backend & Cloud' | 'Full-Stack & Web';

const categorizedSkills: Record<Category, Skill[]> = {
  'GenAI & LLMs': [
    { name: 'LangChain & LlamaIndex', info: 'RAG pipelines, agents & tool calling', level: 95 },
    { name: 'Model Fine-Tuning (LoRA / QLoRA)', info: 'PEFT, layer unfreezing & adaptation', level: 90 },
    { name: 'Open-Source SLMs (Gemma, Llama)', info: 'Gemma 3B, Llama 3, Mistral inference', level: 92 },
    { name: 'vLLM Serving Optimization', info: 'PagedAttention, KV cache, high-throughput', level: 88 },
    { name: 'Prompt Engineering & Agents', info: 'Function calling, structured output, CoT', level: 95 },
    { name: 'Generative Vision (SDXL & ControlNet)', info: 'ComfyUI, LoRA, diffusion workflows', level: 85 },
  ],
  'Deep Learning & NLP': [
    { name: 'PyTorch & Hugging Face', info: 'Transformers, fine-tuning & evaluation', level: 90 },
    { name: 'Vector DBs (ChromaDB / FAISS)', info: 'Embeddings, similarity search, indexing', level: 92 },
    { name: 'NLP & Tokenization', info: 'NLTK, spaCy, text preprocessing', level: 88 },
    { name: 'TensorFlow / Keras', info: 'Neural networks, computer vision', level: 80 },
    { name: 'Data Science (Pandas / NumPy)', info: 'Data cleaning, feature engineering, analytics', level: 92 },
    { name: 'MLOps (MLflow / W&B)', info: 'Experiment tracking & model governance', level: 85 },
  ],
  'Backend & Cloud': [
    { name: 'FastAPI & Async Python', info: 'High-speed AI microservices & streaming', level: 95 },
    { name: 'Django & Django REST', info: 'Enterprise backend architecture & auth', level: 92 },
    { name: 'Google Cloud Platform (GCP)', info: 'Vertex AI, Cloud Run, Cloud Functions', level: 88 },
    { name: 'Docker & Containerization', info: 'Multi-stage builds, GPU containers', level: 88 },
    { name: 'PostgreSQL & Databases', info: 'Relational data modeling & optimization', level: 85 },
    { name: 'CI/CD & Git Workflows', info: 'Automated test & deploy pipelines', level: 90 },
  ],
  'Full-Stack & Web': [
    { name: 'Python 3.x', info: 'Advanced OOP, async, type hinting', level: 96 },
    { name: 'React & Next.js 15/16', info: 'Server Components, SSR, modern UI', level: 88 },
    { name: 'TypeScript & JavaScript', info: 'Type-safe scalable frontends', level: 85 },
    { name: 'Tailwind CSS', info: 'Architectural styling & typography', level: 90 },
    { name: 'REST APIs & WebSockets', info: 'Bi-directional real-time communication', level: 92 },
    { name: 'Security (JWT & 2FA)', info: 'Authentication & cryptographic verification', level: 88 },
  ],
};

const certifications = [
  {
    title: 'Google Advanced Data Analytics',
    issuer: 'Google Career Certificates',
    date: '2024',
    description: 'Mastery in statistical analysis, predictive modeling, machine learning algorithms, and high-dimensional data interpretation.',
    skills: ['Python', 'Statistical Modeling', 'Machine Learning', 'Data Visualization'],
  },
  {
    title: 'The Power of Statistics in Data Science',
    issuer: 'Coursera / Stanford Academic',
    date: '2024',
    description: 'Foundations of probability, hypothesis testing, Bayesian inference, and distribution modeling for robust AI decision-making.',
    skills: ['Probability', 'Hypothesis Testing', 'Regression', 'Statistical Inference'],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('GenAI & LLMs');
  const sectionRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          x: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-28 max-w-7xl mx-auto px-6 border-t border-border-subtle relative z-10 overflow-hidden"
    >
      {/* Background Parallax Watermark */}
      <div
        ref={watermarkRef}
        className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[13rem] md:text-[17rem] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter leading-none -z-10"
        aria-hidden="true"
      >
        ARSENAL
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-border-subtle pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-xs font-mono text-secondary mb-4 border border-border-subtle">
            <span>04 / TECHNICAL SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-primary">
            Core Architectural{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400 italic font-normal">
              Arsenal
            </span>
          </h2>
        </div>
        <p className="text-secondary max-w-md text-sm sm:text-base leading-relaxed font-normal">
          Specialized frameworks, foundational libraries, and cloud infrastructure engineered for production reliability.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2.5 mb-12">
        {Object.keys(categorizedSkills).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as Category)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-accent text-primary shadow-lg shadow-accent/20 border border-accent'
                : 'bg-surface/80 text-secondary hover:text-primary hover:bg-surface-elevated border border-border-subtle'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
      >
        {categorizedSkills[activeCategory].map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-surface/80 border border-border-subtle hover:border-accent/40 backdrop-blur-xl flex flex-col justify-between group transition-all duration-300"
          >
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-display font-bold text-primary text-lg group-hover:text-accent transition-colors">
                  {skill.name}
                </h3>
                <span className="text-xs font-mono text-accent font-semibold">{skill.level}%</span>
              </div>
              <p className="text-xs text-secondary font-normal leading-relaxed mb-6">
                {skill.info}
              </p>
            </div>

            {/* Subtle Minimalist Progress Line */}
            <div className="w-full bg-surface-elevated rounded-full h-1 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-accent rounded-full"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Verified Professional Credentials */}
      <div className="pt-8 border-t border-border-subtle">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-6">
          Verified Professional Credentials
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-surface/80 border border-border-subtle hover:border-accent/30 backdrop-blur-xl transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-xl font-display font-bold text-primary mb-1">{cert.title}</h4>
                  <p className="text-xs text-secondary font-mono">{cert.issuer} &bull; {cert.date}</p>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
              <p className="text-sm text-secondary leading-relaxed mb-6 font-normal">
                {cert.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-surface-elevated text-xs font-mono text-secondary border border-border-subtle"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
