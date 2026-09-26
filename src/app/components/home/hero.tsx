'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Terminal, Cpu, Zap, Download } from 'lucide-react';
import Link from 'next/link';
import IconCloud from '@/app/components/ui/icon-cloud';
import { motion } from 'framer-motion';

const slugs = [
  "python", "pytorch", "tensorflow", "react", "nextdotjs", "django",
  "fastapi", "docker", "github", "googlecloud", "postgresql",
  "firebase", "linux", "git", "langchain", "openai"
];

const roles = [
  "GenAI Engineer",
  "LLM & RAG Architect",
  "Agentic AI Specialist",
  "Python Full-Stack Developer"
];

const telemetryStats = [
  { label: "Q&A Accuracy Gain", value: "+38%", detail: "EduAI SLM (Gemma 3B)" },
  { label: "Hallucination Cut", value: "-42%", detail: "Production RAG Architecture" },
  { label: "Inference Latency", value: "-40%", detail: "QLoRA & vLLM Serving" },
  { label: "Startups Shipped", value: "15+", detail: "Full-Stack AI Solutions" }
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden pt-28 pb-16 px-4"
    >
      {/* Background Cyber-Nebula & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-cyan-500/10 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/15 blur-[100px]" />
      </div>

      {/* Cyber Grid Subtle Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      {/* 3D Tech sphere in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[120vw] sm:w-[80vw] h-[120vw] sm:h-[80vw] max-w-[900px] max-h-[900px]">
          <IconCloud iconSlugs={[...slugs, ...slugs]} />
        </div>
      </div>

      {/* Main Content Terminal Container */}
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 border border-purple-500/30 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.2)] mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs text-purple-300 font-medium tracking-wider uppercase">
            SYSTEM ONLINE &bull; GENAI KERNEL v4.2 ACTIVE
          </span>
        </motion.div>

        {/* Dynamic Role Rotator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-8 mb-3 flex items-center justify-center"
        >
          <span className="font-mono text-sm sm:text-base text-cyan-400 tracking-widest uppercase flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400 inline" />
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border-b border-cyan-500/50 pb-0.5"
            >
              {roles[roleIndex]}
            </motion.span>
          </span>
        </motion.div>

        {/* Giant Futuristic Headline */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]">
            Rohit
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.3)]">
            Shinde
          </span>
        </motion.h1>

        {/* Subtitle / Bio Pitch */}
        <motion.p
          className="text-base sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Engineering autonomous intelligence at the intersection of <span className="text-purple-400 font-medium">Large Language Models</span>, <span className="text-cyan-400 font-medium">Production RAG</span>, and scalable <span className="text-indigo-400 font-medium">Python Microservices</span>. 4+ years building production AI systems from architecture to cloud.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#projects"
            className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white font-semibold shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_45px_rgba(124,58,237,0.6)] transition-all flex items-center justify-center gap-3 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-300" />
              Explore Deployments
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black/60 border border-white/15 text-white font-medium hover:border-purple-500/50 hover:bg-purple-950/20 backdrop-blur-xl transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            Initiate Contact
          </Link>

          <a
            href="/Rohit_Shinde_CV-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:text-white hover:border-cyan-500/40 hover:bg-cyan-950/20 backdrop-blur-xl transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            CV Document
          </a>
        </motion.div>

        {/* Live Performance Telemetry Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {telemetryStats.map((stat, i) => (
            <div
              key={i}
              className="relative group p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl transition-all text-left overflow-hidden"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-400 font-mono mt-0.5">
                {stat.detail}
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-full blur-xl group-hover:bg-purple-500/15 transition-all" />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
