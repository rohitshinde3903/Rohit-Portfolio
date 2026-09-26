'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "EduAI SLM Fine-Tuning & Knowledge RAG",
    category: "Small Language Models & RAG",
    year: "2025 – 2026",
    metric: "+38% Accuracy • -42% Hallucinations",
    description: "Fine-tuned Gemma 3B using LoRA, QLoRA, and progressive layer unfreezing for specialized educational curricula. Coupled with a LlamaIndex and ChromaDB vector retrieval pipeline, achieving high factual accuracy while reducing inference latency by ~40% via vLLM serving.",
    tags: ["PyTorch", "Gemma 3B", "LlamaIndex", "ChromaDB", "vLLM", "FastAPI", "GCP"],
    image: "/images/evs.png",
    githubUrl: "https://github.com/rohitshinde3903",
    liveUrl: "https://rohiit.is-a.dev"
  },
  {
    title: "Multi-Modal Educational Content Pipeline",
    category: "Generative Vision & Diffusion",
    year: "2024",
    metric: "Automated Diagram Synthesis",
    description: "Architected an end-to-end multimodal generative pipeline generating structured educational diagrams and lesson visuals directly from textual lecture prompts using Stable Diffusion SDXL, ControlNet, and custom LoRA adapters exposed via FastAPI microservices.",
    tags: ["Stable Diffusion SDXL", "ControlNet", "LoRA", "ComfyUI", "FastAPI", "Python"],
    image: "/images/profo.png",
    githubUrl: "https://github.com/rohitshinde3903",
    liveUrl: "https://rohiit.is-a.dev"
  },
  {
    title: "AI-Powered Electronic Voting Platform",
    category: "Computer Vision & Security",
    year: "2024 – 2025",
    metric: "Biometric Facial Verification & 2FA",
    description: "A tamper-proof electronic voting platform engineered for high-integrity elections, featuring real-time facial biometric authentication, dual-factor security (2FA), real-time election telemetry, and anomaly-detection ML models.",
    tags: ["Python", "Django", "FastAPI", "OpenCV", "Facial Biometrics", "2FA"],
    image: "/images/evs.png",
    githubUrl: "https://github.com/rohitshinde3903/EVS-Flask.git",
    liveUrl: "https://rohiit.is-a.dev"
  },
  {
    title: "PROFO: Profile & Portfolio Management Engine",
    category: "Full-Stack Web Architecture",
    year: "2024",
    metric: "Consolidated Online Presence",
    description: "A full-stack developer profile management application allowing engineers to consolidate their resume, GitHub, and verified projects into a single authenticated, privacy-controlled public link.",
    tags: ["Django", "Python", "REST APIs", "Authentication", "Tailwind CSS"],
    image: "/images/profo.png",
    githubUrl: "https://github.com/rohitshinde3903/PROFO.git",
    liveUrl: "https://profoui.onrender.com/"
  }
];

export default function InsightsSection() {
  return (
    <section 
      id="projects" 
      className="py-24 max-w-7xl mx-auto px-6 border-t border-surface-variant/60"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono text-secondary mb-4">
            <span>02 / FEATURED WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-primary">
            Production AI &amp; Full-Stack Case Studies
          </h2>
        </div>
        <p className="text-on-surface-variant max-w-md text-base leading-relaxed">
          A curated selection of high-impact systems engineered for enterprise accuracy, low latency, and scaling startups.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card p-8 md:p-10 rounded-3xl flex flex-col justify-between group transition-all duration-300"
          >
            <div>
              {/* Category & Year Row */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono text-secondary">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-secondary">{project.year}</span>
              </div>

              {/* Optional Project Screenshot Preview */}
              {project.image && (
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-outline-variant/30 bg-surface-container">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
                </div>
              )}

              {/* Title & Description */}
              <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-4 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-on-surface-variant mb-6 leading-relaxed text-sm md:text-base font-normal">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-surface-container-low text-xs font-mono text-on-surface-variant border border-outline-variant/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer with Metric & Links */}
            <div className="pt-6 border-t border-surface-variant flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-semibold text-primary font-mono">
                {project.metric}
              </span>
              
              <div className="flex items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    <span>View Platform</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
