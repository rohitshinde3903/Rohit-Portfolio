'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/app/data/portfolioData';
import { CheckCircle2, MapPin, ArrowRight } from 'lucide-react';

interface ExperiencePanelProps {
  onAdvance: () => void;
  isActive: boolean;
  onSkip?: () => void;
}

export default function ExperiencePanel({
  onAdvance,
  isActive,
  onSkip,
}: ExperiencePanelProps) {
  const { experience } = portfolioData;
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  const scrollToNode = (idx: number) => {
    setActiveNodeIndex(idx);
    nodeRefs.current[idx]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <div
      data-section-scroll="true"
      className="relative w-full h-full flex-1 flex flex-col justify-between px-4 sm:px-8 md:px-16 pt-5 sm:pt-7 pb-16 overflow-y-auto overscroll-y-contain scroll-smooth bg-obsidian text-white border-t border-zinc-800/80 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-track]:bg-transparent"
    >
      {/* Subtle ambient grid in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-6 sm:space-y-8 relative z-10">
        {/* Experience Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 sm:pb-5 border-b border-zinc-800 gap-4">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-xs tracking-widest text-cyan-400 uppercase">
              <span className="w-2.5 h-2.5 bg-cyan-400 shadow-[0_0_10px_#00F0FF] inline-block" />
              <span>/EXPERIENCE — CONNECTED STORYLINE (05)</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mt-1.5">
              CAREER TRAJECTORY &amp; IMPACT
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1 max-w-xl">
              Chronological milestones across production GenAI, autonomous systems research, and full-stack architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onSkip || onAdvance}
              data-cursor-label="SKIP"
              className="px-3.5 py-1.5 border border-cyan-400/60 bg-cyan-500/10 hover:bg-cyan-400 hover:text-black font-mono text-[11px] font-bold text-cyan-300 uppercase tracking-wider rounded transition-all shadow-sm cursor-pointer"
            >
              Skip to Contact →
            </button>
          </div>
        </div>

        {/* Interactive Step Telemetry Bar & Quick Jumps */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 sm:p-3.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold uppercase tracking-wider">
              CONNECTED STORYLINE // 5 CAREER MILESTONES
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 hidden md:inline">
              Scroll down to inspect all nodes or click pills to jump &darr;
            </span>
          </div>

          {/* Clickable Quick Jump Pills */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline mr-1">
              JUMP:
            </span>
            {experience.map((node, idx) => (
              <button
                key={node.id}
                onClick={() => scrollToNode(idx)}
                data-cursor-label={`NODE ${node.number}`}
                className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold transition-all duration-200 cursor-pointer ${
                  activeNodeIndex === idx
                    ? 'bg-cyan-400 text-black shadow-[0_0_10px_#00F0FF]'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600'
                }`}
                title={node.title}
              >
                {node.number}
              </button>
            ))}
          </div>
        </div>

        {/* The Connected Thread Stage (Alternating Left -> Right connected by a glowing thread) */}
        <div className="relative py-4">
          {/* Central Glowing Vertical Thread Spine (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] hidden lg:block pointer-events-none">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 w-[2px] bg-gradient-to-b from-cyan-400/20 via-cyan-400 to-cyan-400/20 shadow-[0_0_12px_#00F0FF]" />
            {/* Pulsing Dashed Overlay */}
            <div className="absolute inset-0 w-[2px] border-r-2 border-dashed border-cyan-400/70" />
          </div>

          {/* Left Glowing Vertical Thread Spine (Mobile/Tablet) */}
          <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-[2px] block lg:hidden pointer-events-none">
            <div className="absolute inset-0 w-[2px] bg-gradient-to-b from-cyan-400/20 via-cyan-400 to-cyan-400/20 shadow-[0_0_10px_#00F0FF]" />
            <div className="absolute inset-0 w-[2px] border-r-2 border-dashed border-cyan-400/70" />
          </div>

          {/* Alternating Experience Nodes (All rendered along the scrollable thread) */}
          <div className="space-y-8 sm:space-y-12">
            {experience.map((node, idx) => {
              const isEven = idx % 2 === 0; // Even: Left on desktop, Odd: Right on desktop

              return (
                <div
                  ref={(el) => {
                    nodeRefs.current[idx] = el;
                  }}
                  key={node.id}
                  className="relative flex flex-col lg:flex-row items-center"
                >
                  {/* Central Thread Node Connector Point (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 hidden lg:flex items-center justify-center z-20 pointer-events-none">
                    <div className="relative flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-obsidian border-2 border-cyan-400 flex items-center justify-center font-mono text-xs font-bold text-cyan-300 shadow-[0_0_16px_rgba(0,240,255,0.6)]">
                        {node.number}
                      </div>
                      <span className="absolute -inset-1 rounded-full border border-cyan-400 animate-ping opacity-40" />
                    </div>
                  </div>

                  {/* Mobile Left Thread Node Connector Point */}
                  <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-8 flex lg:hidden items-center justify-center z-20 pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-obsidian border-2 border-cyan-400 flex items-center justify-center font-mono text-[11px] font-bold text-cyan-300 shadow-[0_0_12px_#00F0FF]">
                      {node.number}
                    </div>
                  </div>

                  {/* Horizontal Branching Thread Connector (Desktop) */}
                  <div
                    className={`hidden lg:block absolute top-[2.85rem] h-[2px] bg-gradient-to-r from-cyan-400 to-cyan-400/20 shadow-[0_0_8px_#00F0FF] pointer-events-none ${
                      isEven ? 'right-[50%] w-[3.5%]' : 'left-[50%] w-[3.5%]'
                    }`}
                  />

                  {/* Card Container (Alternating Left / Right) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full pl-12 sm:pl-16 lg:pl-0 lg:w-[46.5%] ${
                      isEven ? 'lg:mr-auto' : 'lg:ml-auto'
                    }`}
                  >
                    <div className="group bg-zinc-950/90 hover:bg-zinc-900/90 p-5 sm:p-7 rounded-xl border border-zinc-800/90 hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden shadow-2xl hover:shadow-[0_0_35px_rgba(0,240,255,0.18)]">
                      {/* Corner Accent Glow */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />

                      {/* Header with Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-zinc-800">
                        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold">
                          <span>NODE [{node.number}]</span>
                          <span>·</span>
                          <span className="text-white font-semibold">{node.title}</span>
                        </div>

                        <div className="flex items-center gap-2 font-mono text-[11px]">
                          <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-bold">
                            {node.period}
                          </span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <div className="mt-3.5">
                        <h3 className="font-display text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {node.role}
                        </h3>

                        <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 mt-1">
                          <span className="flex items-center gap-1 text-zinc-300">
                            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                            {node.location}
                          </span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans font-light">
                        {node.summary}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="mt-4 space-y-2">
                        {node.highlights.map((point, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Pills */}
                      <div className="mt-5 pt-3.5 border-t border-zinc-800/80 flex flex-wrap gap-1.5 font-mono text-[11px]">
                        {node.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-cyan-400/50 hover:text-white transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Nav / Advance to Contact */}
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center pt-5 border-t border-zinc-800 relative z-10 shrink-0 mt-8">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
          04 // CONNECTED STORYLINE (05 MILESTONES)
        </span>
        <button
          onClick={onAdvance}
          data-cursor-label="CONTACT"
          className="group inline-flex items-center gap-2 font-mono text-xs text-cyan-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
        >
          <span>Ready to Build (Contact)</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
