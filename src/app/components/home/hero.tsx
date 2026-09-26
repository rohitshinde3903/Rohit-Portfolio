'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, User, FileDown } from 'lucide-react';
import Link from 'next/link';

const metrics = [
  {
    value: "+38%",
    label: "Q&A Accuracy Gain",
    detail: "EduAI SLM (Gemma 3B)"
  },
  {
    value: "-42%",
    label: "Hallucination Cut",
    detail: "Production RAG Architecture"
  },
  {
    value: "-40%",
    label: "Inference Latency",
    detail: "QLoRA & vLLM Serving"
  },
  {
    value: "15+",
    label: "Startups Shipped",
    detail: "Full-Stack AI Solutions"
  }
];

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-[88vh] flex flex-col items-center justify-center px-6 text-center max-w-7xl mx-auto pt-8 pb-16"
    >
      {/* System Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-secondary mb-8 shadow-sm backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
        <span className="tracking-widest uppercase">System Online &bull; GenAI Kernel v4.2 Active</span>
      </motion.div>

      {/* Role Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-mono text-secondary text-sm md:text-base tracking-widest uppercase mb-4 flex items-center justify-center gap-2"
      >
        <span className="text-primary font-bold">&gt;_</span> GenAI Engineer &bull; LLM &amp; RAG Architect
      </motion.div>

      {/* Editorial Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl mb-8 font-headline leading-[1.1] text-primary"
      >
        Engineering <span className="gradient-text italic font-normal">intelligence</span>
      </motion.h1>

      {/* Descriptive Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-3xl text-lg md:text-xl text-on-surface-variant font-normal leading-relaxed mb-12"
      >
        Crafting autonomous AI systems at the intersection of <span className="text-primary font-semibold">Large Language Models</span>, <span className="text-primary font-semibold">Production RAG</span>, and scalable <span className="text-primary font-semibold">Python Architectures</span>. 4+ years designing high-reliability AI solutions from scratch to cloud deployment.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-20"
      >
        <Link
          href="#projects"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-on-primary bg-primary hover:bg-secondary transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform text-amber-200" />
          <span>Explore Deployments</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          href="#about"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-primary bg-surface-container-low hover:bg-surface-container border border-outline-variant/50 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <User className="w-5 h-5 text-secondary" />
          <span>Read My Story</span>
        </Link>

        <a
          href="/Rohit_Shinde_CV-1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-secondary bg-surface-container-lowest hover:text-primary hover:bg-surface-container-low border border-outline-variant/40 transition-all font-mono text-sm hover:scale-[1.02] active:scale-[0.98]"
        >
          <FileDown className="w-4 h-4 text-primary" />
          <span>Download CV</span>
        </a>
      </motion.div>

      {/* Metrics Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="glass-card p-8 rounded-2xl text-left relative overflow-hidden group transition-all duration-300"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 font-headline">
              {metric.value}
            </div>
            <div className="text-base font-bold text-on-background mb-1">
              {metric.label}
            </div>
            <div className="text-xs text-secondary font-mono">
              {metric.detail}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
