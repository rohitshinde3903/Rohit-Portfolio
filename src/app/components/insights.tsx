'use client';

import { useState } from 'react';
import { 
  Code2, Cloud, Lock, Github, ExternalLink, ArrowRight, 
  Sparkles, Terminal, Cpu, Layers, CheckCircle2, ShieldCheck
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function InsightsSection() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "EduAI SLM — Gemma 3B Fine-Tuning + RAG",
      badge: "Flagship GenAI Deployment",
      description: "Fine-tuned Gemma 3B on domain-specific educational curricula using LoRA, QLoRA, and progressive layer unfreezing. Paired with a production RAG pipeline using LlamaIndex and ChromaDB, reducing hallucinations by ~42% and latency by ~40% via vLLM.",
      tags: ["PyTorch", "Hugging Face", "LlamaIndex", "ChromaDB", "FastAPI", "GCP Cloud Run", "vLLM", "MLflow"],
      highlights: [
        "Fine-tuned Gemma 3B SLM improving domain Q&A accuracy by ~38%",
        "Architected vector RAG with LlamaIndex + ChromaDB grounding on curriculum PDFs",
        "Streamlined inference latency by ~40% using QLoRA, PEFT, and vLLM serving",
        "Established full LLMOps lifecycle tracking with MLflow and GCP Cloud Run CI/CD"
      ],
      githubUrl: "https://github.com/rohitshinde3903",
      liveUrl: "https://rohiit.is-a.dev",
      image: "/images/evs.png"
    },
    {
      title: "Multi-Modal Educational Content Pipeline",
      badge: "Generative Vision & Diffusion",
      description: "An end-to-end multimodal generative pipeline generating structured educational diagrams and lesson visuals directly from textual lecture prompts using Stable Diffusion SDXL, ControlNet, and custom LoRA adapters.",
      tags: ["Stable Diffusion SDXL", "ControlNet", "LoRA", "ComfyUI", "FastAPI", "PyTorch", "GCP"],
      highlights: [
        "Synthesizes diagrams and conceptual illustrations from raw lesson prompts",
        "Fine-tuned ControlNet constraints ensuring spatial accuracy in scientific diagrams",
        "Exposed via asynchronous FastAPI microservices with queue-based worker nodes",
        "Designed for plug-and-play LMS (Learning Management System) integration"
      ],
      githubUrl: "https://github.com/rohitshinde3903",
      liveUrl: "https://rohiit.is-a.dev",
      image: "/images/profo.png"
    },
    {
      title: "AI-Powered Electronic Voting Platform",
      badge: "Computer Vision & Security",
      description: "A tamper-proof electronic voting platform engineered for high-integrity institutional elections, featuring real-time facial biometric authentication, dual-factor security (2FA), and anomaly-detection ML models.",
      tags: ["Python", "Django", "FastAPI", "OpenCV", "Facial Biometrics", "2FA", "Anomaly Detection"],
      highlights: [
        "Live voter verification using computer vision facial feature matching",
        "Multi-layered 2FA ensuring singular ballot validation without identity leakage",
        "Real-time election telemetry and statistical fraud detection pipelines",
        "Encrypted ballot ledger ensuring cryptographic vote immutability"
      ],
      githubUrl: "https://github.com/rohitshinde3903/EVS-Flask.git",
      liveUrl: "https://rohiit.is-a.dev",
      image: "/images/evs.png"
    },
  ];

  const secondaryProjects = [
    {
      title: "PROFO: Profile & Portfolio Platform",
      category: "Full-Stack Web App",
      description: "Consolidated developer profile engine allowing users to share resume, GitHub, and custom credentials through a unified authenticated profile link.",
      tags: ["Django", "Python", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/rohitshinde3903/PROFO.git",
      liveUrl: "https://profoui.onrender.com/",
      icon: <Code2 className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Stones Web Services Solutions",
      category: "Startup AI Engineering",
      description: "Full-stack and AI product solutions for 15+ startups, delivering production Django/FastAPI services, OpenAI integrations, and cloud infrastructure on GCP.",
      tags: ["FastAPI", "OpenAI APIs", "GCP", "Docker"],
      githubUrl: "https://github.com/rohitshinde3903",
      liveUrl: "https://rohiit.is-a.dev",
      icon: <Layers className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "The Ekta Project: NGO Platform",
      category: "Modern Web Platform",
      description: "Accessible, animated web platform built to champion community outreach, volunteer management, and program visibility with a modern UX stack.",
      tags: ["Next.js", "React", "Framer Motion", "Tailwind"],
      githubUrl: "https://github.com/rohitshinde3903/the-ekta-project.git",
      liveUrl: "https://the-ekta-project.vercel.app/",
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 mb-4">
            <Cpu className="h-3.5 w-3.5 text-purple-400" />
            <span className="text-xs sm:text-sm font-mono text-purple-300">Engineered Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">AI & Full-Stack</span> Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Real-world systems delivering measurable performance gains in accuracy, latency, and automated generation.
          </p>
        </div>

        {/* Featured Project Showcase: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Project Navigation Switcher (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 4 }}
                onClick={() => setActiveProject(idx)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  activeProject === idx
                    ? 'bg-gradient-to-r from-purple-950/60 to-black border-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.2)]'
                    : 'bg-black/50 border-white/10 hover:border-purple-500/30 hover:bg-white/[0.02]'
                }`}
              >
                {activeProject === idx && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 via-indigo-400 to-cyan-400" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-cyan-400 tracking-wider">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-500">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-300">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-950/30 text-purple-300">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Project Detail View (7 cols) */}
          <motion.div 
            key={activeProject}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-gray-900/80 via-black to-gray-950 border border-purple-500/30 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(124,58,237,0.15)]"
          >
            {/* Project Image Preview Container */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black">
              <Image
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Badges on preview */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/70 border border-purple-500/40 text-xs font-mono text-purple-300 backdrop-blur-md">
                  {projects[activeProject].badge}
                </span>
              </div>

              {/* Action buttons inside image */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {projects[activeProject].githubUrl && (
                  <a
                    href={projects[activeProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-black/80 border border-white/20 text-white hover:border-purple-400 hover:text-purple-300 transition-all backdrop-blur-md"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {projects[activeProject].liveUrl && (
                  <a
                    href={projects[activeProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg transition-all"
                    title="View Live Platform"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-bold text-white mb-3">
              {projects[activeProject].title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light mb-6">
              {projects[activeProject].description}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Key Engineering Highlights
              </h4>
              <div className="space-y-2.5">
                {projects[activeProject].highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-mono text-gray-400 tracking-wider uppercase mb-2">
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-purple-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Secondary Projects Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Other Production Deployments</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light">Additional web platforms & startup systems</p>
            </div>
            <a
              href="https://github.com/rohitshinde3903"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Explore GitHub</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryProjects.map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.02] backdrop-blur-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {p.icon}
                    </div>
                    <span className="text-[11px] font-mono text-gray-400 px-2 py-0.5 rounded-full bg-white/5">
                      {p.category}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
                    {p.description}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
