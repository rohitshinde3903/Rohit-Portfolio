'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

type Skill = {
  name: string;
  info: string;
  level: number;
};

type Category = 'GenAI & LLMs' | 'Deep Learning & NLP' | 'Backend & Cloud' | 'Full-Stack & Web';

const categorizedSkills: Record<Category, Skill[]> = {
  "GenAI & LLMs": [
    { name: 'LangChain & LlamaIndex', info: 'RAG pipelines, agents & tool calling', level: 95 },
    { name: 'Model Fine-Tuning (LoRA / QLoRA)', info: 'PEFT, layer unfreezing & adaptation', level: 90 },
    { name: 'Open-Source SLMs (Gemma, Llama)', info: 'Gemma 3B, Llama 3, Mistral inference', level: 92 },
    { name: 'vLLM Serving Optimization', info: 'PagedAttention, KV cache, high-throughput', level: 88 },
    { name: 'Prompt Engineering & Agents', info: 'Function calling, structured output, CoT', level: 95 },
    { name: 'Generative Vision (SDXL & ControlNet)', info: 'ComfyUI, LoRA, diffusion workflows', level: 85 },
  ],
  "Deep Learning & NLP": [
    { name: 'PyTorch & Hugging Face', info: 'Transformers, fine-tuning & evaluation', level: 90 },
    { name: 'Vector DBs (ChromaDB / FAISS)', info: 'Embeddings, similarity search, indexing', level: 92 },
    { name: 'NLP & Tokenization', info: 'NLTK, spaCy, text preprocessing', level: 88 },
    { name: 'TensorFlow / Keras', info: 'Neural networks, computer vision', level: 80 },
    { name: 'Data Science (Pandas / NumPy)', info: 'Data cleaning, feature engineering, analytics', level: 92 },
    { name: 'MLOps (MLflow / W&B)', info: 'Experiment tracking & model governance', level: 85 },
  ],
  "Backend & Cloud": [
    { name: 'FastAPI & Async Python', info: 'High-speed AI microservices & streaming', level: 95 },
    { name: 'Django & Django REST', info: 'Enterprise backend architecture & auth', level: 92 },
    { name: 'Google Cloud Platform (GCP)', info: 'Vertex AI, Cloud Run, Cloud Functions', level: 88 },
    { name: 'Docker & Containerization', info: 'Multi-stage builds, GPU containers', level: 88 },
    { name: 'PostgreSQL & Databases', info: 'Relational data modeling & optimization', level: 85 },
    { name: 'CI/CD & Git Workflows', info: 'Automated test & deploy pipelines', level: 90 },
  ],
  "Full-Stack & Web": [
    { name: 'Python 3.x', info: 'Advanced OOP, async, type hinting', level: 96 },
    { name: 'React & Next.js 15', info: 'Server Components, SSR, modern UI', level: 88 },
    { name: 'TypeScript & JavaScript', info: 'Type-safe scalable frontends', level: 85 },
    { name: 'Tailwind CSS', info: 'Architectural styling & typography', level: 90 },
    { name: 'REST APIs & WebSockets', info: 'Bi-directional real-time communication', level: 92 },
    { name: 'Security (JWT & 2FA)', info: 'Authentication & cryptographic verification', level: 88 },
  ]
};

const certifications = [
  {
    title: 'Google Advanced Data Analytics',
    issuer: 'Google Career Certificates',
    date: '2024',
    description: 'Mastery in statistical analysis, predictive modeling, machine learning algorithms, and high-dimensional data interpretation.',
    skills: ['Python', 'Statistical Modeling', 'Machine Learning', 'Data Visualization']
  },
  {
    title: 'The Power of Statistics in Data Science',
    issuer: 'Coursera / Stanford Academic',
    date: '2024',
    description: 'Foundations of probability, hypothesis testing, Bayesian inference, and distribution modeling for robust AI decision-making.',
    skills: ['Probability', 'Hypothesis Testing', 'Regression', 'Statistical Inference']
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("GenAI & LLMs");

  return (
    <section 
      id="skills" 
      className="py-24 max-w-7xl mx-auto px-6 border-t border-surface-variant/60"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono text-secondary mb-4">
            <span>03 / TECHNICAL SPECIFICATIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-primary">
            Core Architectural Arsenal
          </h2>
        </div>
        <p className="text-on-surface-variant max-w-md text-base leading-relaxed">
          Specialized frameworks, foundational libraries, and cloud infrastructure engineered for production reliability.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-12">
        {Object.keys(categorizedSkills).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as Category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container border border-outline-variant/40'
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
            className="glass-card p-6 rounded-2xl flex flex-col justify-between group transition-all"
          >
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-bold text-primary text-lg font-headline group-hover:text-secondary transition-colors">
                  {skill.name}
                </h3>
                <span className="text-xs font-mono text-secondary">{skill.level}%</span>
              </div>
              <p className="text-xs text-on-surface-variant font-normal leading-relaxed mb-6">
                {skill.info}
              </p>
            </div>

            {/* Subtle Minimalist Progress Line */}
            <div className="w-full bg-surface-container rounded-full h-1 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Verified Certifications */}
      <div className="pt-8 border-t border-surface-variant">
        <h3 className="text-2xl font-bold font-headline text-primary mb-6">
          Verified Professional Credentials
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-xl font-bold text-primary font-headline mb-1">{cert.title}</h4>
                  <p className="text-xs text-secondary font-mono">{cert.issuer} &bull; {cert.date}</p>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                {cert.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((s, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-surface-container text-xs font-mono text-secondary border border-outline-variant/30">
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
