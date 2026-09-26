'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'AI / GenAI Engineer',
    company: 'EduAI Hub',
    location: 'Pune, India',
    period: 'Dec 2025 – Jun 2026',
    description: 'Led development of the EduAI SLM, fine-tuning Gemma 3B using LoRA, QLoRA, and progressive layer unfreezing, improving domain-specific Q&A accuracy by ~38%. Architected production RAG pipelines using LlamaIndex and ChromaDB, grounding responses in curriculum PDFs and reducing hallucinations by ~42%. Reduced inference latency by ~40% through vLLM-based serving optimization.',
    tags: ['Gemma 3B', 'LoRA / QLoRA', 'LlamaIndex', 'ChromaDB', 'vLLM', 'FastAPI', 'GCP Cloud Run', 'MLflow'],
  },
  {
    role: 'Founder / Python Full-Stack & AI Engineer',
    company: 'Stones Web Services',
    location: 'Pune, India',
    period: 'Jun 2021 – Present',
    description: 'Founded and delivered technology solutions for 15+ startups, covering AI engineering, backend architecture, REST APIs, and full-stack product development. Designed production applications using Django, FastAPI, React, and Python, incorporating OpenAI APIs, LangChain, RAG, and diffusion models deployed on GCP using Docker and CI/CD pipelines.',
    tags: ['Founding Engineer', 'Django', 'FastAPI', 'React', 'LangChain', 'GCP', 'Docker', 'REST APIs'],
  },
  {
    role: 'GenAI & Machine Learning Developer',
    company: 'Independent Client Deployments',
    location: 'Remote',
    period: 'Jan 2024 – Present',
    description: 'Delivered end-to-end GenAI and ML solutions for international clients, including LLM chatbots, RAG applications, AI analytics systems, and agentic workflows. Automated batch AI-generation workflows using Python and FastAPI, reducing manual operational effort by ~70%.',
    tags: ['GenAI Agents', 'RAG Pipelines', 'Diffusion Models', 'FastAPI', 'Python', 'Client Delivery'],
  },
  {
    role: 'R&D Specialist — Artificial Intelligence',
    company: 'Dr. D. Y. Patil School of Science & Technology',
    location: 'Pune, India',
    period: 'Nov 2024 – Apr 2025',
    description: 'Researched and implemented Computer Vision, NLP, and Machine Learning techniques for an AI-powered Electronic Voting System, including real-time biometric verification and fraud detection algorithms. Contributed to system architecture involving facial recognition and analytics.',
    tags: ['Computer Vision', 'Biometrics', 'Synthetic Data', 'NLP', 'Anomaly Detection'],
  },
  {
    role: 'Technical Trainer — Python & Full Stack',
    company: 'Teknowell EduTech',
    location: 'Pune, India',
    period: 'Aug 2024 – Nov 2024',
    description: 'Trained 50+ students in Python, Django, Flask, React, REST APIs, Git, deployment, and modern software development practices. Mentored junior engineers on project architecture, debugging, deployment, and technical interview preparation.',
    tags: ['Python 3', 'Django', 'React', 'REST APIs', 'Technical Mentorship'],
  },
];

export default function ExperienceSection() {
  return (
    <section 
      id="experience" 
      className="py-24 max-w-7xl mx-auto px-6 border-t border-surface-variant/60"
    >
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono text-secondary mb-4">
          <span>04 / PROFESSIONAL TRACK RECORD</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-primary">
          Experience &amp; Leadership
        </h2>
      </div>

      <div className="space-y-8 max-w-4xl">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary font-headline">
                  {exp.role}
                </h3>
                <div className="text-secondary font-mono text-sm mt-0.5">
                  {exp.company} &bull; {exp.location}
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-surface-container-high text-xs font-mono text-secondary w-fit border border-outline-variant/30">
                {exp.period}
              </span>
            </div>

            <p className="text-on-surface-variant mb-6 leading-relaxed text-sm md:text-base font-normal">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs font-mono text-secondary border border-outline-variant/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Academic Degree Distinction Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 rounded-3xl relative border border-secondary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-secondary tracking-widest uppercase">
                Academic Distinction &bull; 2021 — 2025
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-primary font-headline mt-1">
                B.Tech in Artificial Intelligence &amp; Data Science
              </h3>
              <p className="text-sm text-on-surface-variant mt-0.5">
                Dr. D. Y. Patil Vidyapeeth, Pune, India
              </p>
            </div>
          </div>

          <div className="sm:text-right shrink-0">
            <div className="inline-block px-4 py-2 rounded-xl bg-surface-container-high border border-outline-variant/40">
              <div className="text-xs font-mono text-secondary">Cumulative CGPA</div>
              <div className="text-2xl font-bold font-headline text-primary">
                9.45 <span className="text-xs text-secondary font-mono">/ 10.0</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
