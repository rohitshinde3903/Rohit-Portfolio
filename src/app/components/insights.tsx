'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const projects = [
  {
    title: 'EduAI SLM Fine-Tuning & Knowledge RAG',
    category: 'Small Language Models & Vector RAG',
    year: '2025 – 2026',
    metric: '+38% Accuracy • -42% Hallucinations',
    description: 'Fine-tuned Gemma 3B using LoRA, QLoRA, and progressive layer unfreezing for specialized educational curricula. Coupled with a LlamaIndex and ChromaDB vector retrieval pipeline, achieving high factual accuracy while reducing inference latency by ~40% via vLLM serving.',
    tags: ['PyTorch', 'Gemma 3B', 'LlamaIndex', 'ChromaDB', 'vLLM', 'FastAPI', 'GCP'],
    image: '/images/evs.png',
    githubUrl: 'https://github.com/rohitshinde3903',
    liveUrl: 'https://rohiit.is-a.dev',
  },
  {
    title: 'Multi-Modal Educational Content Pipeline',
    category: 'Generative Vision & Diffusion',
    year: '2024',
    metric: 'Automated Diagram Synthesis',
    description: 'Architected an end-to-end multimodal generative pipeline generating structured educational diagrams and lesson visuals directly from textual lecture prompts using Stable Diffusion SDXL, ControlNet, and custom LoRA adapters exposed via FastAPI microservices.',
    tags: ['Stable Diffusion SDXL', 'ControlNet', 'LoRA', 'ComfyUI', 'FastAPI', 'Python'],
    image: '/images/profo.png',
    githubUrl: 'https://github.com/rohitshinde3903',
    liveUrl: 'https://rohiit.is-a.dev',
  },
  {
    title: 'AI-Powered Electronic Voting Platform',
    category: 'Computer Vision & Security',
    year: '2024 – 2025',
    metric: 'Biometric Facial Verification & 2FA',
    description: 'A tamper-proof electronic voting platform engineered for high-integrity elections, featuring real-time facial biometric authentication, dual-factor security (2FA), real-time election telemetry, and anomaly-detection ML models.',
    tags: ['Python', 'Django', 'FastAPI', 'OpenCV', 'Facial Biometrics', '2FA'],
    image: '/images/evs.png',
    githubUrl: 'https://github.com/rohitshinde3903/EVS-Flask.git',
    liveUrl: 'https://rohiit.is-a.dev',
  },
  {
    title: 'PROFO: Profile & Portfolio Management Engine',
    category: 'Full-Stack Web Architecture',
    year: '2024',
    metric: 'Consolidated Online Presence',
    description: 'A full-stack developer profile management application allowing engineers to consolidate their resume, GitHub, and verified projects into a single authenticated, privacy-controlled public link.',
    tags: ['Django', 'Python', 'REST APIs', 'Authentication', 'Tailwind CSS'],
    image: '/images/profo.png',
    githubUrl: 'https://github.com/rohitshinde3903/PROFO.git',
    liveUrl: 'https://profoui.onrender.com/',
  },
];

export default function InsightsSection() {
  return (
    <section
      id="projects"
      className="py-28 max-w-7xl mx-auto px-6 border-t border-border-subtle relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-border-subtle pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-xs font-mono text-secondary mb-4 border border-border-subtle">
            <span>03 / FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-primary">
            Production AI &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400 italic font-normal">
              Full-Stack Case Studies
            </span>
          </h2>
        </div>
        <p className="text-secondary max-w-md text-sm sm:text-base leading-relaxed font-normal">
          A curated selection of high-impact systems engineered for enterprise accuracy, low latency, and scaling startups.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="p-8 md:p-10 rounded-3xl bg-surface/80 border border-border-subtle hover:border-accent/40 backdrop-blur-2xl shadow-xl flex flex-col justify-between group transition-all duration-500"
          >
            <div>
              {/* Category & Year Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-surface-elevated text-xs font-mono text-accent border border-border-subtle">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-muted">{project.year}</span>
              </div>

              {/* Large Immersive Image Preview with Zoom Reveal */}
              {project.image && (
                <div
                  data-cursor-label="EXPLORE"
                  className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden mb-6 border border-border-subtle bg-surface-elevated"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                </div>
              )}

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-secondary mb-6 leading-relaxed text-sm sm:text-base font-normal">
                {project.description}
              </p>

              {/* Architectural Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-surface-elevated text-xs font-mono text-secondary border border-border-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer with Metric & Magnetic Action Links */}
            <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-mono text-accent font-semibold">
                {project.metric}
              </span>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <MagneticButton strength={0.3}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="CODE"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-secondary hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </MagneticButton>
                )}

                {project.liveUrl && (
                  <MagneticButton strength={0.3}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="LIVE"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-accent text-primary text-xs font-semibold hover:bg-accent-violet transition-all shadow-md shadow-accent/20"
                    >
                      <span>View Live</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </MagneticButton>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
