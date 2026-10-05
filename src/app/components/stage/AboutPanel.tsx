'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/app/data/portfolioData';

interface AboutPanelProps {
  onAdvance: () => void;
  isActive: boolean;
  cardStep?: number;
  onSetCardStep?: (step: number) => void;
}

export default function AboutPanel({
  onAdvance,
  isActive,
  cardStep = 1,
  onSetCardStep,
}: AboutPanelProps) {
  const { about } = portfolioData;

  const techStack = [
    'PyTorch',
    'CUDA C++',
    'TensorRT',
    'LangGraph',
    'vLLM',
    'Agentic AI',
    'Python',
    'FastAPI',
    'Qdrant',
    'Docker / K8s',
    'React',
    'TypeScript',
  ];

  return (
    <div className="relative w-full h-full flex-1 flex flex-col justify-between px-4 sm:px-10 md:px-16 pt-5 sm:pt-7 pb-12 select-none overflow-y-auto bg-obsidian text-slate-100">
      <div className="max-w-7xl mx-auto w-full space-y-6 sm:space-y-7">
        {/* Top HUD Telemetry Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 sm:pb-4 border-b border-zinc-800/80 gap-3">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-cyan-400 uppercase">
            <span className="w-2.5 h-2.5 bg-cyan-400 shadow-[0_0_10px_#00F0FF] inline-block" />
            <span>/ABOUT — IN PROCESS SINCE 2003</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>DIRECTIVE: COMPLETE EVERYTHING • SHIP REAL SYSTEMS</span>
          </div>
        </div>

        {/* Hero Identity Headline */}
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs sm:text-sm text-cyan-400 uppercase tracking-[0.25em] font-semibold">
              // OPERATING IDENTITY
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.08] mt-1">
              Precise. Efficient. Reliable.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Task-Oriented.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs sm:text-sm text-zinc-300 uppercase tracking-widest flex flex-wrap items-center gap-2"
          >
            <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded border border-white/15">
              AI GEEK
            </span>
            <span className="text-cyan-400 font-bold bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
              VIBE CODER
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">WITH SECURITY &amp; SCALABILITY NUANCES</span>
          </motion.p>
        </div>

        {/* Centerpiece Manifesto Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/95 to-black border border-white/10 relative overflow-hidden backdrop-blur-md shadow-2xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-3 border-b border-white/10 font-mono text-[11px] text-zinc-400 uppercase gap-2">
            <span className="flex items-center gap-2 text-zinc-300">
              <span className="inline-block w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
              THE CORE PHILOSOPHY
            </span>
            <span className="text-emerald-400 font-semibold tracking-widest">
              ZERO ABANDONED PROTOTYPES // 100% COMPLETION
            </span>
          </div>

          <p className="text-sm sm:text-lg lg:text-xl text-zinc-100 font-light leading-relaxed mt-3">
            I am unapologetically <span className="text-white font-bold">egoistic about shipping</span> and{' '}
            <span className="text-cyan-400 font-bold">completing everything</span> I start. I don’t leave
            ambitious concepts in prototype purgatory—I turn raw ideas into{' '}
            <span className="text-white font-semibold underline decoration-cyan-400/50 underline-offset-4">
              real-life working systems and production products
            </span>
            .
          </p>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2 font-sans">
            An AI Geek who codes in pure flow-state vibe, backed by deep architectural discipline around{' '}
            <span className="text-zinc-200 font-medium">Security and Scalability nuances</span>: hardened auth boundaries,
            context hygiene, low-latency inferencing, and distributed runtimes engineered to compute effortlessly under load.
          </p>
        </motion.div>

        {/* 4 Core Pillars Header & Interactive Progression Cue */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono pt-1">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-cyan-400 font-bold uppercase tracking-wider">// CORE DIRECTIVES</span>
            <span className="text-zinc-600">•</span>
            <span className="text-white font-semibold">
              CARD {cardStep} OF 4 REVEALED
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono">
              {cardStep < 4 ? (
                <span className="text-zinc-400">
                  Scroll down to reveal card [0{cardStep + 1}] &darr;
                </span>
              ) : (
                <span className="text-emerald-400 font-semibold animate-pulse">
                  All 4 cards finished • Scroll down to move to Projects &darr;
                </span>
              )}
            </span>

            {/* Clickable Card Step Pills */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((step) => (
                <button
                  key={step}
                  onClick={() => onSetCardStep?.(step)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    step <= cardStep
                      ? step === cardStep
                        ? 'w-7 bg-cyan-400 shadow-[0_0_10px_#00F0FF]'
                        : 'w-3.5 bg-zinc-400 hover:bg-zinc-300'
                      : 'w-2 bg-zinc-800 hover:bg-zinc-700'
                  }`}
                  aria-label={`Jump to card ${step}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid (Revealed one by one on scroll) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 font-mono">
          {about.traits?.map((trait, idx) => {
            const isRevealed = idx + 1 <= cardStep;
            const isCurrent = idx + 1 === cardStep;

            if (isRevealed) {
              return (
                <motion.div
                  key={trait.number}
                  initial={{ opacity: 0, y: 35, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSetCardStep?.(idx + 1)}
                  className={`p-4 sm:p-5 rounded-lg border transition-all duration-300 relative overflow-hidden shadow-xl cursor-pointer ${
                    isCurrent
                      ? 'bg-zinc-900 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)] ring-1 ring-cyan-400/40'
                      : 'bg-zinc-950/80 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {/* Subtle active glow flare */}
                  {isCurrent && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/15 rounded-full blur-xl pointer-events-none" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold ${isCurrent ? 'text-cyan-400' : 'text-zinc-400'}`}>
                      [{trait.number}]
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border font-bold ${
                        isCurrent
                          ? 'text-cyan-300 bg-cyan-400/20 border-cyan-400/40 shadow-sm'
                          : 'text-zinc-400 bg-zinc-900 border-zinc-800'
                      }`}
                    >
                      {isCurrent ? '● ACTIVE' : trait.tag}
                    </span>
                  </div>

                  <div
                    className={`text-sm sm:text-base font-bold uppercase tracking-tight ${
                      isCurrent ? 'text-white' : 'text-zinc-200'
                    }`}
                  >
                    {trait.title}
                  </div>

                  <div className="text-xs text-zinc-400 mt-2 leading-relaxed font-sans font-light">
                    {trait.description}
                  </div>
                </motion.div>
              );
            }

            // Locked slot for unrevealed cards
            return (
              <motion.div
                key={trait.number}
                initial={{ opacity: 0.35 }}
                animate={{ opacity: 0.5 }}
                onClick={() => onSetCardStep?.(idx + 1)}
                className="p-4 sm:p-5 rounded-lg border border-dashed border-zinc-800/80 bg-zinc-950/30 hover:border-zinc-700 hover:opacity-75 transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer group"
                title="Scroll down or click to reveal"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-zinc-600 font-bold">
                    [{trait.number}]
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-zinc-500 bg-zinc-900/60 px-1.5 py-0.5 rounded border border-zinc-800/60 font-mono">
                    LOCKED
                  </span>
                </div>

                <div className="my-auto py-2 text-center">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                    &darr; Scroll to Reveal
                  </div>
                  <div className="text-[11px] font-sans text-zinc-600 mt-1">
                    {trait.title}
                  </div>
                </div>

                <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-zinc-800 w-0" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Hardware Telemetry & Weaponry Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center pt-2">
          {/* Key Metrics */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-2.5 font-mono text-center">
            <div className="bg-zinc-950/80 p-2.5 sm:p-3 rounded border border-zinc-800">
              <div className="text-lg sm:text-xl font-black text-cyan-400">9.45</div>
              <div className="text-[9px] text-zinc-400 uppercase tracking-widest mt-0.5">CGPA Distinction</div>
            </div>
            <div className="bg-zinc-950/80 p-2.5 sm:p-3 rounded border border-zinc-800">
              <div className="text-lg sm:text-xl font-black text-white">&lt;50ms</div>
              <div className="text-[9px] text-zinc-400 uppercase tracking-widest mt-0.5">Inference TTFT</div>
            </div>
            <div className="bg-zinc-950/80 p-2.5 sm:p-3 rounded border border-zinc-800">
              <div className="text-lg sm:text-xl font-black text-emerald-400">100%</div>
              <div className="text-[9px] text-zinc-400 uppercase tracking-widest mt-0.5">Completion Rate</div>
            </div>
          </div>

          {/* Weaponry Arsenal Pills */}
          <div className="lg:col-span-7 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mr-1">
              ARSENAL:
            </span>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800 rounded hover:border-cyan-400/60 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Nav / Advance Button */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center pt-3 border-t border-zinc-800/80 shrink-0">
        <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
          02 // OPERATING DIRECTIVE
        </span>
        <button
          onClick={onAdvance}
          data-cursor-label="PROJECTS"
          className="group inline-flex items-center gap-2 font-mono text-xs text-cyan-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
        >
          <span>View Engineered Projects (04)</span>
          <span className="transform group-hover:translate-y-0.5 transition-transform">&darr;</span>
        </button>
      </div>
    </div>
  );
}
