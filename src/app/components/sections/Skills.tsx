'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Skill = { name: string; info: string; level: number };
type Category = 'GenAI & LLMs' | 'Deep Learning & NLP' | 'Backend & Cloud' | 'Full-Stack & Web';

const categorizedSkills: Record<Category, Skill[]> = {
  'GenAI & LLMs': [
    { name: 'LangChain & LlamaIndex', info: 'RAG pipelines, agents & tool calling', level: 95 },
    { name: 'Model Fine-Tuning (LoRA / QLoRA)', info: 'PEFT, layer unfreezing & adaptation', level: 90 },
    { name: 'Open-Source SLMs', info: 'Gemma 3B, Llama 3, Mistral inference', level: 92 },
    { name: 'vLLM Serving', info: 'PagedAttention, KV cache, high-throughput', level: 88 },
    { name: 'Prompt Engineering & Agents', info: 'Function calling, structured output, CoT', level: 95 },
    { name: 'Generative Vision (SDXL)', info: 'ComfyUI, LoRA, diffusion workflows', level: 85 },
  ],
  'Deep Learning & NLP': [
    { name: 'PyTorch & Hugging Face', info: 'Transformers, fine-tuning & evaluation', level: 90 },
    { name: 'Vector DBs', info: 'ChromaDB, FAISS, embeddings, indexing', level: 92 },
    { name: 'NLP & Tokenization', info: 'NLTK, spaCy, text preprocessing', level: 88 },
    { name: 'TensorFlow / Keras', info: 'Neural networks, computer vision', level: 80 },
    { name: 'Data Science', info: 'Pandas, NumPy, feature engineering', level: 92 },
    { name: 'MLOps', info: 'MLflow, W&B, experiment tracking', level: 85 },
  ],
  'Backend & Cloud': [
    { name: 'FastAPI & Async Python', info: 'High-speed AI microservices & streaming', level: 95 },
    { name: 'Django & Django REST', info: 'Enterprise backend architecture', level: 92 },
    { name: 'Google Cloud Platform', info: 'Vertex AI, Cloud Run, Cloud Functions', level: 88 },
    { name: 'Docker', info: 'Multi-stage builds, GPU containers', level: 88 },
    { name: 'PostgreSQL', info: 'Relational data modeling', level: 85 },
    { name: 'CI/CD & Git', info: 'Automated test & deploy pipelines', level: 90 },
  ],
  'Full-Stack & Web': [
    { name: 'Python 3.x', info: 'Advanced OOP, async, type hinting', level: 96 },
    { name: 'React & Next.js', info: 'Server Components, SSR, modern UI', level: 88 },
    { name: 'TypeScript & JavaScript', info: 'Type-safe scalable frontends', level: 85 },
    { name: 'Tailwind CSS', info: 'Utility-first styling & design systems', level: 90 },
    { name: 'REST APIs & WebSockets', info: 'Bi-directional real-time communication', level: 92 },
    { name: 'Security (JWT & 2FA)', info: 'Authentication & cryptographic verification', level: 88 },
  ],
};

const certifications = [
  {
    title: 'Google Advanced Data Analytics',
    issuer: 'Google Career Certificates',
    date: '2024',
    skills: ['Python', 'Statistical Modeling', 'Machine Learning'],
  },
  {
    title: 'The Power of Statistics in Data Science',
    issuer: 'Coursera / Stanford Academic',
    date: '2024',
    skills: ['Probability', 'Hypothesis Testing', 'Regression'],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('GenAI & LLMs');
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, start: 'top 85%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-32 max-w-7xl mx-auto px-6 relative overflow-hidden">
      <div className="hr-glow mb-24" />

      <div ref={headerRef} className="mb-16">
        <span className="section-num block mb-4">04 / Technical Arsenal</span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-text-primary">
          Core{' '}<span className="text-gradient italic">arsenal.</span>
        </h2>
        <p className="text-text-secondary max-w-lg mt-4 text-sm leading-relaxed">
          Specialized frameworks, libraries, and cloud infrastructure for production reliability.
        </p>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {Object.keys(categorizedSkills).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as Category)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-accent text-white border border-accent shadow-lg shadow-accent/20'
                : 'bg-bg-card text-text-muted hover:text-text-primary border border-border-dim hover:border-border-lite'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
      >
        {categorizedSkills[activeCategory].map((skill, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-bg-card/60 border border-border-dim hover:border-border-accent backdrop-blur-sm group transition-all duration-300"
          >
            <div className="flex items-baseline justify-between mb-1.5">
              <h3 className="font-display font-bold text-text-primary text-sm group-hover:text-accent transition-colors">
                {skill.name}
              </h3>
              <span className="text-[10px] font-mono text-accent">{skill.level}%</span>
            </div>
            <p className="text-[11px] text-text-dim leading-relaxed mb-4">{skill.info}</p>
            <div className="w-full bg-bg-elevated rounded-full h-[3px] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-accent to-cyan"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Certifications */}
      <div className="pt-8 border-t border-border-dim">
        <h3 className="text-xl font-display font-bold text-text-primary mb-6">Verified Credentials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="p-6 rounded-xl bg-bg-card/60 border border-border-dim hover:border-border-accent transition-all">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-sm font-display font-bold text-text-primary">{cert.title}</h4>
                  <p className="text-[11px] text-text-dim font-mono">{cert.issuer} • {cert.date}</p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-glow border border-border-accent text-accent text-[10px] font-mono">
                  <ShieldCheck className="w-3 h-3" /> Verified
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {cert.skills.map((s, j) => (
                  <span key={j} className="px-2 py-0.5 rounded text-[10px] font-mono text-text-dim bg-bg-elevated border border-border-dim">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
