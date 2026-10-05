'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, ProjectItem } from '@/app/data/portfolioData';
import { X, ExternalLink, Github, CheckCircle2, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

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

  const activeProject: ProjectItem | null =
    modalIndex !== null && modalIndex >= 0 && modalIndex < selectedProjects.length
      ? selectedProjects[modalIndex]
      : null;

  const handleNextProject = () => {
    if (modalIndex !== null) {
      if (modalIndex < selectedProjects.length - 1) {
        onSetModalIndex?.(modalIndex + 1);
      } else {
        onSetModalIndex?.(null);
        onAdvance();
      }
    }
  };

  const handlePrevProject = () => {
    if (modalIndex !== null) {
      if (modalIndex > 0) {
        onSetModalIndex?.(modalIndex - 1);
      } else {
        onSetModalIndex?.(null);
      }
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between px-4 sm:px-10 md:px-16 pt-20 sm:pt-24 pb-6 sm:pb-8 select-none overflow-y-auto bg-canvasLight text-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full my-auto space-y-6 sm:space-y-8">
        {/* Header with high-contrast inverted brutalist mode & SKIP button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-5 border-b-2 border-zinc-950 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-600 uppercase">
              <span className="w-2.5 h-2.5 bg-black inline-block" />
              <span>/PROJECTS — SELECTED ONLY (04)</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 mt-1.5">
              ENGINEERED ARTIFACTS
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-600 mt-1 max-w-xl">
              Curated system designs, neural architectures, and edge acceleration tools developed by Rohit Shinde.
            </p>
          </div>

          {/* Right Hand Side: Prominent SKIP Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onSkip || onAdvance}
              data-cursor-label="SKIP"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border-2 border-zinc-950 bg-white hover:bg-zinc-950 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none cursor-pointer"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
          {selectedProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSetModalIndex?.(idx)}
              data-cursor-label="INSPECT"
              className={`group border-2 border-zinc-950 bg-white p-5 sm:p-7 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer ${
                idx % 2 === 1 ? 'md:mt-3' : ''
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
                <div className="mt-3.5 flex flex-wrap gap-1.5 font-mono text-[11px]">
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
              <div className="mt-5 pt-3.5 border-t border-zinc-200 flex items-center justify-between">
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
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center pt-3 border-t-2 border-zinc-950 shrink-0">
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

      {/* Project Detail Modal Overlay with scroll progression & right-hand SKIP */}
      <AnimatePresence>
        {activeProject && modalIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={() => onSetModalIndex?.(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 25 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 25 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white text-zinc-950 max-w-3xl w-full border-4 border-zinc-950 shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] p-5 sm:p-8 max-h-[92vh] overflow-y-auto relative flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-zinc-950 mb-4 gap-2">
                <div className="flex items-center gap-2 font-mono text-xs text-blue-600 font-bold">
                  <span className="px-2 py-0.5 bg-blue-50 border border-blue-200 rounded">
                    PROJECT [{activeProject.number} / 04]
                  </span>
                  <span>·</span>
                  <span className="uppercase text-zinc-600">{activeProject.category}</span>
                </div>

                {/* Right hand side: SKIP button & Close button */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={onSkip || onAdvance}
                    data-cursor-label="SKIP"
                    className="px-3 py-1.5 bg-zinc-950 hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase transition-colors cursor-pointer shadow-sm"
                  >
                    SKIP TOUR [→]
                  </button>
                  <button
                    onClick={() => onSetModalIndex?.(null)}
                    className="p-1.5 bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-950 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="mb-3">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-zinc-950 leading-tight">
                  {activeProject.title}
                </h3>
                <p className="font-mono text-xs text-zinc-500 mt-1 uppercase">
                  ROLE: <span className="text-zinc-900 font-bold">{activeProject.role}</span>
                </p>
              </div>

              {/* Project Image */}
              <div className="h-44 sm:h-60 w-full overflow-hidden mb-5 border-2 border-zinc-950 bg-zinc-100 relative shadow-inner">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Architectural Breakdown */}
              <div className="space-y-2 mb-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-950 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-black inline-block" />
                  ARCHITECTURAL BREAKDOWN &amp; SYSTEMS FLOW
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {activeProject.longDescription}
                </p>
              </div>

              {/* Key Benchmarks */}
              <div className="mb-4 p-3.5 bg-zinc-50 border border-zinc-300 space-y-1.5">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">
                  KEY ACHIEVEMENTS &amp; BENCHMARKS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProject.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-mono text-xs text-zinc-900">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Arsenal */}
              <div className="mb-5">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-1.5 font-bold">
                  TECHNOLOGY ARSENAL
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 bg-zinc-100 border border-zinc-300 text-zinc-900 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Links & External Triggers */}
              <div className="pt-3.5 border-t border-zinc-200 flex flex-wrap items-center gap-3 mb-4">
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-mono text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-mono text-xs font-bold hover:bg-zinc-800 transition-colors shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}

                <button
                  onClick={() => onSetModalIndex?.(null)}
                  className="px-4 py-2 border border-zinc-950 font-mono text-xs text-zinc-950 hover:bg-zinc-100 transition-colors ml-auto"
                >
                  Back to Grid (Esc)
                </button>
              </div>

              {/* Stepper Navigation Footer */}
              <div className="pt-3 border-t-2 border-zinc-950 flex items-center justify-between font-mono text-xs">
                <button
                  disabled={modalIndex === 0}
                  onClick={handlePrevProject}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-950 hover:bg-zinc-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-bold uppercase"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev Project</span>
                </button>

                <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
                  <span>Project {modalIndex + 1} of {selectedProjects.length}</span>
                  <span className="hidden sm:inline">• Scroll &darr; to advance</span>
                </div>

                <button
                  onClick={handleNextProject}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 font-bold uppercase transition-colors shadow-sm text-white ${
                    modalIndex === selectedProjects.length - 1
                      ? 'bg-emerald-600 hover:bg-emerald-700'
                      : 'bg-zinc-950 hover:bg-blue-600'
                  }`}
                >
                  <span>
                    {modalIndex === selectedProjects.length - 1
                      ? 'Finish Tour (To Experience) →'
                      : 'Next Project (Scroll ↓)'}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
