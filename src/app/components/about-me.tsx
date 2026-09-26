'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Code2, Cloud, Server, Database, Award, Sparkles, Rocket, 
  GitBranch, CheckCircle2, Shield, MapPin, Terminal, Flame
} from 'lucide-react';

export function AboutMe() {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'impact'>('overview');

  return (
    <div id="about" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 mb-4">
            <Terminal className="h-3.5 w-3.5 text-purple-400" />
            <span className="text-xs sm:text-sm font-mono text-purple-300">Neural Intelligence Dossier</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Rohit Shinde</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Architecting end-to-end AI applications, from custom fine-tuned SLMs and vector RAG to production cloud deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Holographic Avatar & Identity Card (4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-gray-900/90 via-black to-gray-950 border border-purple-500/30 shadow-[0_0_40px_rgba(147,51,234,0.15)] backdrop-blur-2xl text-center">
              
              {/* Holographic Avatar Frame */}
              <div className="relative mx-auto mb-6 w-44 h-44 sm:w-48 sm:h-48">
                {/* Rotating Cyber Halo */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 opacity-70 blur-md animate-spin-slow" />
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 opacity-90 p-[2px]">
                  <div className="w-full h-full rounded-full bg-black" />
                </div>
                
                {/* Image Container with guaranteed visibility */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 bg-gray-900 shadow-inner">
                  <Image
                    src="/images/rohit-profile.png"
                    alt="Rohit Shinde"
                    fill
                    sizes="(max-width: 768px) 192px, 192px"
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />
                </div>

                {/* Verified AI Engineer Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 border border-white/20 text-white font-mono text-xs font-semibold shadow-lg whitespace-nowrap flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  GenAI Engineer
                </div>
              </div>

              {/* Title & Location */}
              <h3 className="text-2xl font-bold text-white mt-4 mb-1">Rohit Shinde</h3>
              <p className="text-sm text-cyan-400 font-mono mb-4">
                LLMs &bull; RAG &bull; Agentic AI &bull; Full-Stack
              </p>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 mb-6 font-mono">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Pune, India &bull; Open to Remote / Hybrid / On-site
              </div>

              {/* Core Skill Chips */}
              <div className="space-y-2.5 text-left mb-6">
                {[
                  "LLM Fine-Tuning (LoRA, QLoRA, PEFT)",
                  "Production RAG (LlamaIndex, ChromaDB)",
                  "Python Backends (FastAPI, Django)",
                  "MLOps & Cloud (GCP Vertex AI, Docker)",
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="block w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all"
              >
                Initiate Collaboration
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Dossier Tabs (8 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Dossier Navigation Tabs */}
            <div className="flex gap-2 p-1.5 bg-black/60 border border-white/10 rounded-2xl backdrop-blur-xl">
              {[
                { id: 'overview', label: 'Executive Dossier', icon: <Terminal className="w-4 h-4" /> },
                { id: 'architecture', label: 'Architecture & Skills', icon: <Server className="w-4 h-4" /> },
                { id: 'impact', label: 'Key Milestones', icon: <Award className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="space-y-6"
              >
                <div className="p-6 sm:p-8 rounded-3xl bg-black/50 border border-white/10 backdrop-blur-xl">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Rocket className="text-purple-400 w-5 h-5" />
                    Engineering Philosophy
                  </h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base font-light">
                    <p>
                      I am <span className="text-white font-medium">Rohit Shinde</span>, a GenAI Engineer and Python Full-Stack Developer with <span className="text-purple-400 font-medium">4+ years of professional experience</span> building AI products across the entire lifecycle — from raw dataset curation and model fine-tuning to production serving and cloud deployment.
                    </p>
                    <p>
                      My primary focus is solving the real-world challenges of generative AI: <span className="text-cyan-400 font-medium">eliminating hallucinations with verifiable RAG</span>, <span className="text-purple-400 font-medium">compressing inference latency with QLoRA & vLLM</span>, and connecting LLMs to external systems via <span className="text-indigo-400 font-medium">agentic tool calling & multi-agent workflows</span>.
                    </p>
                    <p>
                      Whether leading the development of the <span className="text-white font-medium">EduAI SLM (fine-tuning Gemma 3B)</span>, deploying automated diffusion pipelines with <span className="text-white font-medium">Stable Diffusion SDXL & ControlNet</span>, or delivering software for <span className="text-white font-medium">15+ startups via Stones Web Services</span>, I bridge cutting-edge AI research with resilient production engineering.
                    </p>
                  </div>
                </div>

                {/* Key Numbers Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { number: "4+", label: "Years Experience", sub: "Python & AI Engineering" },
                    { number: "15+", label: "Startups Scaled", sub: "Via Stones Web Services" },
                    { number: "9.45", label: "Academic CGPA", sub: "B.Tech in AI & Data Science" },
                    { number: "100%", label: "Cloud Native", sub: "GCP, Docker, FastAPIs" },
                  ].map((card, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-purple-500/30 transition-all text-center">
                      <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        {card.number}
                      </div>
                      <div className="text-xs font-bold text-white mt-1">{card.label}</div>
                      <div className="text-[10px] text-gray-400 font-mono mt-0.5">{card.sub}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tab 2: Architecture & Skills */}
            {activeTab === 'architecture' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {[
                  {
                    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
                    title: "Generative AI & LLMs",
                    skills: ["Gemma 3B", "Llama 3", "Mistral", "GPT-4", "LoRA / QLoRA", "PEFT", "vLLM", "Prompt Engineering"]
                  },
                  {
                    icon: <Database className="w-5 h-5 text-cyan-400" />,
                    title: "RAG & Vector Pipelines",
                    skills: ["LlamaIndex", "LangChain", "ChromaDB", "FAISS", "Embeddings", "Reranking", "Document Processing"]
                  },
                  {
                    icon: <Server className="w-5 h-5 text-indigo-400" />,
                    title: "Backend & Microservices",
                    skills: ["FastAPI", "Django", "Flask", "REST APIs", "Async Python", "JWT & 2FA", "Microservices"]
                  },
                  {
                    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
                    title: "Cloud, MLOps & DevOps",
                    skills: ["GCP Vertex AI", "Cloud Run", "Docker", "MLflow", "Weights & Biases", "CI/CD", "Git"]
                  },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-black/50 border border-white/10 hover:border-purple-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">{item.icon}</div>
                      <h4 className="text-base font-bold text-white">{item.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300 font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Tab 3: Key Milestones */}
            {activeTab === 'impact' && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="space-y-4"
              >
                {[
                  {
                    title: "EduAI SLM — Fine-Tuning Gemma 3B",
                    badge: "2025 – 2026",
                    description: "Fine-tuned Gemma 3B using LoRA, QLoRA, and progressive layer unfreezing. Improved domain Q&A accuracy by ~38% and reduced latency by ~40% via vLLM serving.",
                    metric: "+38% Accuracy"
                  },
                  {
                    title: "Google Advanced Data Analytics Certification",
                    badge: "2024",
                    description: "Rigorous professional certification covering statistical modeling, predictive analytics, regression analysis, and machine learning pipelines.",
                    metric: "Verified Google Cert"
                  },
                  {
                    title: "Stones Web Services — 15+ Startups Built",
                    badge: "2021 – Present",
                    description: "Founded and scaled tech services delivering production AI/ML products, Django/FastAPI backends, and full-stack solutions for over 15 startups.",
                    metric: "15+ Startups"
                  }
                ].map((m, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-black/50 border border-white/10 hover:border-purple-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <h4 className="text-base font-bold text-white">{m.title}</h4>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/20">
                          {m.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                    <div className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold whitespace-nowrap">
                      {m.metric}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </motion.div>

        </div>
      </div>
    </div>
  );
}
