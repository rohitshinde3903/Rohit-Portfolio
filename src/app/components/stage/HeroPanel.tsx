'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/app/data/portfolioData';

interface HeroPanelProps {
  onAdvance: () => void;
  isActive: boolean;
}

export default function HeroPanel({ onAdvance, isActive }: HeroPanelProps) {
  const { hero, personal } = portfolioData;

  const tickerItems = [
    '◆ AI ENGINEER',
    'SYSTEMS DEVELOPER',
    'AI ARCHITECT',
    'HIGH PERFORMANCE RUNTIMES',
    'ROHIT SHINDE',
    'THE GAME CHANGER',
    'LOW-LATENCY KERNELS',
    'AGENTIC AI',
    'MLOPS & RAG',
  ];

  return (
    <div className="relative w-full h-full flex-1 flex flex-col justify-between items-center select-none overflow-hidden bg-obsidian text-slate-100 pb-2">
      {/* Main Unified Hero Stage Canvas (Strictly fits 100% within viewport) */}
      <section className="relative w-full flex-1 max-w-7xl mx-auto flex items-center justify-center min-h-0 px-2 sm:px-6 overflow-hidden">
        {/* Subtle Background Glow behind portrait */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        </div>

        {/* Upper Tier: "I" (Left Flank, level with head, above marquee) */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-2 xs:left-4 sm:left-8 md:left-14 lg:left-20 top-[4%] sm:top-[6%] md:top-[8%] font-display font-black text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter text-white pointer-events-none select-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
        >
          I
        </motion.h1>

        {/* Upper Tier: "AM" (Right Flank, level with head, above marquee) */}
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-2 xs:right-4 sm:right-8 md:right-14 lg:right-20 top-[4%] sm:top-[6%] md:top-[8%] font-display font-black text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter text-white pointer-events-none select-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
        >
          AM
        </motion.h1>

        {/* Middle Tier: Horizontal Travelling Headline Ticker passing behind portrait at chest level */}
        <div className="absolute top-[48%] -translate-y-1/2 inset-x-0 w-full overflow-hidden border-y border-white/15 bg-zinc-950/85 backdrop-blur-sm py-2 sm:py-2.5 z-15 shadow-xl">
          <div className="flex animate-ticker text-[11px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white whitespace-nowrap">
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="inline-flex items-center mx-3 sm:mx-4">
                <span
                  className={
                    item.includes('◆') || item.includes('ARCHITECT') || item.includes('GAME CHANGER')
                      ? 'text-cyan-400 font-semibold'
                      : 'text-white font-medium'
                  }
                >
                  {item}
                </span>
                <span className="mx-3 sm:mx-4 text-zinc-500">&bull;</span>
              </span>
            ))}
          </div>
        </div>

        {/* Center: Full Portrait Cutout overlaying the marquee line */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
          animate={
            isActive
              ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
              : { opacity: 0, scale: 1.04, filter: 'blur(6px)' }
          }
          whileHover={{
            scale: 1.035,
            y: -10,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-25 flex flex-col items-center justify-end h-full max-h-[76vh] group cursor-pointer pointer-events-auto select-none"
          data-cursor-label="ROHIT"
        >
          {/* Dynamic Cyan Aura on Hover */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-cyan-500/25 via-blue-500/15 to-transparent blur-3xl rounded-full scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />

          <img
            src={hero.portraitImage}
            alt="Rohit Shinde — Full portrait cutout"
            className="h-[44vh] xs:h-[48vh] sm:h-[54vh] md:h-[66vh] lg:h-[74vh] max-h-[560px] w-auto object-contain object-bottom pointer-events-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] group-hover:drop-shadow-[0_35px_65px_rgba(0,240,255,0.35)] transition-all duration-500"
          />
        </motion.div>

        {/* Lower Tier: "DIFFERENT" Across Bottom (100% visible on screen, scaled cleanly) */}
        <div className="absolute bottom-[1.5%] sm:bottom-[2.5%] md:bottom-[3%] inset-x-0 w-full text-center z-30 pointer-events-none select-none px-2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[clamp(2rem,7vw,6.5rem)] tracking-tight sm:tracking-normal md:tracking-wide text-white uppercase leading-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]"
          >
            DIFFERENT
          </motion.h1>
        </div>
      </section>

      
    </div>
  );
}
