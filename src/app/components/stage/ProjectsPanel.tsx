'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/app/data/portfolioData';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface ProjectsPanelProps {
  onAdvance: () => void;
  isActive: boolean;
  modalIndex?: number | null;
  onSetModalIndex?: (idx: number | null) => void;
  onSkip?: () => void;
}

export default function ProjectsPanel({
  onAdvance,
  isActive,
  modalIndex = null,
  onSetModalIndex,
  onSkip,
}: ProjectsPanelProps) {
  const { projects } = portfolioData;
  const selectedProjects = projects.slice(0, 4);

  return (
    <div className="relative w-full h-full flex flex-col justify-between px-4 sm:px-10 md:px-16 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 select-none overflow-y-auto bg-canvasLight text-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full space-y-5 sm:space-y-7">
        {/* Header with High-Contrast Inverted Brutalist Style & SKIP Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 sm:pb-5 border-b-2 border-zinc-950 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-600 uppercase">
              <span className="w-2.5 h-2.5 bg-black inline-block" />
              <span>/PROJECTS — SELECTED ONLY (04)</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mt-1.5">
              ENGINEERED ARTIFACTS
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-600 mt-1 max-w-xl">
              Curated system designs, neural architectures, and distributed acceleration tools developed by Rohit Shinde.
            </p>
          </div>

          {/* Right Hand Side: Prominent SKIP Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onSkip || onAdvance}
              data-cursor-label="SKIP"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border-2 border-zinc-950 bg-white hover:bg-zinc-950 hover:text-white font-mono text-xs font-black uppercase tracking-wider transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none cursor-pointer"
            >
              <span>SKIP TO EXPERIENCE</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Informative Step Bar */}
        <div className="flex items-center justify-between font-mono text-[11px] text-zinc-600 border-b border-zinc-300 pb-2">
          <span className="flex items-center gap-2 font-bold text-zinc-950 uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            INTERACTION: SCROLL DOWN TO INSPECT DOSSIERS ONE-BY-ONE (01 → 04)
          </span>
          <span className="hidden sm:inline text-zinc-500 uppercase">
            OR CLICK ANY CARD TO OPEN DIRECTLY
          </span>
        </div>

        {/* 4 Projects Grid with Brutalist Hard Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7">
          {selectedProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSetModalIndex?.(idx)}
              data-cursor-label="INSPECT"
              className={`group border-2 border-zinc-950 bg-white p-4 sm:p-6 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer ${
                idx % 2 === 1 ? 'md:mt-2' : ''
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between font-mono text-xs border-b border-zinc-200 pb-2.5">
                  <span className="font-bold text-zinc-950 text-sm">
                    PROJECT [{project.number}]
                  </span>
                  <span className="px-2 py-0.5 bg-zinc-100 rounded text-zinc-700 text-[10px] uppercase font-bold border border-zinc-200">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-black mt-3 text-zinc-950 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500 font-medium">
                  {project.metrics[0] || 'Hardware & Systems'}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold text-black group-hover:text-blue-600 transition-colors">
                  <span>Inspect Dossier</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center pt-4 border-t-2 border-zinc-950 shrink-0 mt-6">
        <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider">
          03 // CLICK CARD OR SCROLL DOWN TO INSPECT
        </span>
        <button
          onClick={onSkip || onAdvance}
          data-cursor-label="JOURNEY"
          className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-950 font-bold uppercase tracking-widest hover:text-blue-600 transition-colors cursor-pointer"
        >
          <span>Connected Storyline (Experience)</span>
          <span className="transform group-hover:translate-y-0.5 transition-transform">&darr;</span>
        </button>
      </div>
    </div>
  );
}
