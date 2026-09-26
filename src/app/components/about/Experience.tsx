'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, TrendingUp, Sparkles, Building2 } from 'lucide-react';

const experiences = [
  {
    role: 'AI / GenAI Engineer',
    company: 'EduAI Hub',
    location: 'Pune, India',
    period: 'Dec 2025 – Jun 2026',
    keyMetric: '+38% Q&A Accuracy &bull; -42% Hallucinations',
    highlights: [
      'Led development of the EduAI SLM, fine-tuning Gemma 3B using LoRA, QLoRA, and progressive layer unfreezing, improving domain-specific Q&A accuracy by ~38%.',
      'Architected production RAG pipelines using LlamaIndex and ChromaDB, grounding responses in curriculum PDFs and reducing hallucinations by ~42%.',
      'Reduced LLM inference latency by ~40% through QLoRA, PEFT, and vLLM-based serving optimization.',
      'Established an LLMOps workflow using MLflow and Weights & Biases for experiment tracking, versioning, and evaluation.',
      'Developed and deployed GenAI microservices using FastAPI, Docker, and GCP Cloud Run, supported by CI/CD pipelines.'
    ],
    tags: ['Gemma 3B', 'LoRA / QLoRA', 'LlamaIndex', 'ChromaDB', 'vLLM', 'FastAPI', 'GCP Cloud Run', 'MLflow'],
  },
  {
    role: 'GenAI & Machine Learning Developer',
    company: 'Independent Client Deployments',
    location: 'Remote',
    period: 'Jan 2024 – Present',
    keyMetric: '~70% Manual Ops Reduction',
    highlights: [
      'Delivered end-to-end GenAI and ML solutions for international clients, including LLM chatbots, RAG applications, AI analytics systems, and agentic workflows.',
      'Automated batch AI-generation workflows using Python and FastAPI, reducing manual operational effort by ~70%.',
      'Developed scalable backend APIs and AI services, integrating LLM and diffusion-model pipelines for multimodal applications.'
    ],
    tags: ['GenAI Agents', 'RAG Pipelines', 'Diffusion Models', 'FastAPI', 'Python', 'Client Delivery'],
  },
  {
    role: 'Founder / Python Full-Stack & AI Engineer',
    company: 'Stones Web Services',
    location: 'Pune, India',
    period: 'Jun 2021 – Present',
    keyMetric: '15+ Startups Shipped',
    highlights: [
      'Founded and delivered technology solutions for 15+ startups, covering AI engineering, backend development, APIs, and full-stack product development.',
      'Designed and developed production applications using Django, FastAPI, React, Python, and REST APIs, incorporating OpenAI APIs, LangChain, RAG, and diffusion models.',
      'Deployed production applications and AI services on GCP using Docker and CI/CD pipelines; led technical decisions across architecture and iteration.'
    ],
    tags: ['Founding Engineer', 'Django', 'FastAPI', 'React', 'LangChain', 'GCP', 'Docker', 'REST APIs'],
  },
  {
    role: 'R&D Specialist — Artificial Intelligence',
    company: 'Dr. D. Y. Patil School of Science & Technology',
    location: 'Pune, India',
    period: 'Nov 2024 – Apr 2025',
    keyMetric: 'Computer Vision & Biometrics R&D',
    highlights: [
      'Researched and implemented Computer Vision, NLP, and Machine Learning techniques for an AI-powered Electronic Voting System, including real-time fraud detection.',
      'Researched diffusion-based synthetic data generation for security-model training and contributed to system architecture involving facial recognition and analytics.'
    ],
    tags: ['Computer Vision', 'Biometrics', 'Synthetic Data', 'NLP', 'Anomaly Detection'],
  },
  {
    role: 'Technical Trainer — Python & Full Stack',
    company: 'Teknowell EduTech',
    location: 'Pune, India',
    period: 'Aug 2024 – Nov 2024',
    keyMetric: '50+ Engineers Trained',
    highlights: [
      'Trained 50+ students in Python, Django, Flask, React, REST APIs, Git, deployment, and software development practices.',
      'Mentored students on project architecture, debugging, deployment, and technical interview preparation.'
    ],
    tags: ['Python 3', 'Django', 'React', 'REST APIs', 'Technical Mentorship'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 mb-4">
            <Briefcase className="h-3.5 w-3.5 text-purple-400" />
            <span className="text-xs sm:text-sm font-mono text-purple-300">Operational Mission Logs</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Trajectory</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Proven track record leading GenAI SLM fine-tuning, architecting RAG pipelines, and founding full-stack tech solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12 mb-20">
          
          {/* Vertical Glowing Circuit Line */}
          <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-400 opacity-60" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)] z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-black/60 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl shadow-lg transition-all duration-300 group">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:items-end text-xs font-mono text-gray-400 gap-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-[11px]">
                      <MapPin className="w-3 h-3 text-gray-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Metric Callout */}
                {exp.keyMetric && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-300 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                    <span dangerouslySetInnerHTML={{ __html: exp.keyMetric }} />
                  </div>
                )}

                {/* Highlights List */}
                <ul className="space-y-2.5 mb-6">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 border border-white/5 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Degree / Honors Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-purple-950/40 via-black to-blue-950/40 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-950/50 border border-cyan-500/40 text-cyan-300 flex-shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                Academic Distinction &bull; 2021 – 2025
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                B.Tech in Artificial Intelligence & Data Science
              </h3>
              <p className="text-sm text-gray-300 font-light">
                Dr. D. Y. Patil Vidyapeeth, Pune, India
              </p>
            </div>
          </div>

          <div className="sm:text-right flex-shrink-0">
            <div className="inline-block px-4 py-2 rounded-2xl bg-black/80 border border-cyan-500/40 shadow-inner">
              <div className="text-xs font-mono text-gray-400">Cumulative GPA</div>
              <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                9.45 <span className="text-xs text-gray-500 font-normal">/ 10.0</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
