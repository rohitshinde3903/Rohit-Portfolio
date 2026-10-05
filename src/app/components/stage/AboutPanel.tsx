'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/app/data/portfolioData';

interface AboutPanelProps {
  onAdvance: () => void;
  isActive: boolean;
}

export default function AboutPanel({ onAdvance, isActive }: AboutPanelProps) {
  const { about } = portfolioData;

  const techStack = [
    'PyTorch',
    'CUDA C++',
    'TensorRT',
    'LangGraph',
    'Python',
    'FastAPI',
    'vLLM',
    'Gemma 3B',
    'Qdrant',
    'Docker / K8s',
    'React',
    'TypeScript',
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-24 pb-8 select-none overflow-y-auto bg-obsidian text-slate-100">
      <div className="max-w-7xl mx-auto w-full my-auto space-y-8 sm:space-y-12">
        {/* Section Tag matching prototype */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-cyan-400 uppercase">
            <span className="w-2.5 h-2.5 bg-cyan-400 inline-block" />
            <span>/ABOUT — IN PROCESS SINCE 2003</span>
          </div>
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            PARADIGM: ZERO-COMPROMISE PERFORMANCE &amp; INTELLIGENCE
          </div>
        </div>

        {/* Big Manifesto Text & Spec Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Big Manifesto */}
          <div className="lg:col-span-8 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              I build high-throughput{' '}
              <span className="text-cyan-400 underline decoration-cyan-400/30">
                AI architectures
              </span>{' '}
              and distributed low-latency compute foundations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-xl text-zinc-400 font-light leading-relaxed"
            >
              Obsessed with breaking traditional algorithmic bottlenecks. Bridging the gap between raw hardware primitives (vector search, edge model quantization, async runtimes) and emergent foundation model architectures.
            </motion.p>

            {/* Key Pillars Grid */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-900 font-mono"
            >
              <div className="bg-zinc-900/60 p-4 rounded border border-zinc-800/80">
                <div className="text-2xl font-bold text-white">01</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase">Distributed Systems</div>
              </div>
              <div className="bg-zinc-900/60 p-4 rounded border border-zinc-800/80">
                <div className="text-2xl font-bold text-cyan-400">&lt;50ms</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase">Inference TTFT</div>
              </div>
              <div className="bg-zinc-900/60 p-4 rounded border border-zinc-800/80">
                <div className="text-2xl font-bold text-white">9.45</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase">CGPA Distinction</div>
              </div>
              <div className="bg-zinc-900/60 p-4 rounded border border-zinc-800/80">
                <div className="text-2xl font-bold text-white">2003</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase">Origin Year</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Deep Spec Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bg-zinc-950 p-6 sm:p-8 border border-zinc-800 rounded-lg relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">
              Tech Stack &amp; Weaponry
            </h3>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-zinc-900 text-zinc-200 border border-zinc-700 rounded hover:border-cyan-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                Core Engineering Mindset
              </h4>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-sans">
                &ldquo;Code that computes effortlessly under pressure is not accidental; it is sculpted with precision, hardware-awareness, and unrelenting curiosity.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Nav / Advance Button */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center pt-4 border-t border-zinc-800">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
          02 // MANIFESTO &amp; SPEC
        </span>
        <button
          onClick={onAdvance}
          data-cursor-label="WORKS"
          className="group inline-flex items-center gap-2 font-mono text-xs text-cyan-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
        >
          <span>View Engineered Artifacts</span>
          <span className="transform group-hover:translate-y-0.5 transition-transform">&darr;</span>
        </button>
      </div>
    </div>
  );
}
