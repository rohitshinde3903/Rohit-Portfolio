'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '@/app/data/portfolioData';
import { X, ExternalLink, Github, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  modalIndex: number | null;
  totalProjects: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  onSkip: () => void;
}

export default function ProjectDetailModal({
  project,
  modalIndex,
  totalProjects,
  onNext,
  onPrev,
  onClose,
  onSkip,
}: ProjectDetailModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project || modalIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-2 xs:p-3 sm:p-6 md:p-8 select-none"
        onClick={onClose}
      >
        <motion.div
          key={project.id}
          initial={{ scale: 0.94, y: 25, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.94, y: 25, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          data-modal-scroll="true"
          className="bg-white text-zinc-950 max-w-3xl w-full border-2 sm:border-4 border-zinc-950 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-3.5 sm:p-7 max-h-[92vh] sm:max-h-[88vh] overflow-y-auto overscroll-y-contain scroll-smooth relative flex flex-col justify-between [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-black/20 [&::-webkit-scrollbar-track]:bg-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header Bar */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between pb-2.5 sm:pb-3 border-b-2 border-zinc-950 mb-3 sm:mb-4 gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs text-blue-600 font-bold">
              <span className="px-2 sm:px-2.5 py-0.5 bg-blue-50 border border-blue-200 rounded">
                PROJECT [{project.number} / 0{totalProjects}]
              </span>
              <span>·</span>
              <span className="uppercase text-zinc-600 text-[10px] sm:text-xs">{project.category}</span>
            </div>

            {/* Right Hand Side: SKIP & Close Button */}
            <div className="flex items-center gap-1.5 sm:gap-2 ml-auto sm:ml-0">
              <button
                onClick={onSkip}
                data-cursor-label="SKIP"
                className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-zinc-950 hover:bg-blue-600 text-white font-mono text-[10px] sm:text-xs font-bold uppercase transition-colors cursor-pointer shadow-sm"
              >
                SKIP TOUR [→]
              </button>
              <button
                onClick={onClose}
                className="p-1 sm:p-1.5 bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-950 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Title & Role */}
          <div className="mb-3">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-zinc-950 leading-tight">
              {project.title}
            </h3>
            <p className="font-mono text-[11px] sm:text-xs text-zinc-500 mt-1 uppercase">
              ROLE: <span className="text-zinc-900 font-bold">{project.role}</span>
            </p>
          </div>

          {/* Project Image */}
          <div className="h-36 xs:h-44 sm:h-56 w-full overflow-hidden mb-3.5 sm:mb-4 border-2 border-zinc-950 bg-zinc-100 relative shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Architectural Breakdown */}
          <div className="space-y-1.5 mb-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-950 font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-black inline-block" />
              ARCHITECTURAL BREAKDOWN &amp; SYSTEMS FLOW
            </h4>
            <p className="font-sans text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Benchmarks & Metrics */}
          <div className="mb-4 p-3 bg-zinc-50 border border-zinc-300 space-y-1.5">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">
              KEY ACHIEVEMENTS &amp; BENCHMARKS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="flex items-center gap-2 font-mono text-xs text-zinc-900">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Arsenal */}
          <div className="mb-4">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-1.5 font-bold">
              TECHNOLOGY ARSENAL
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2.5 py-1 bg-zinc-100 border border-zinc-300 text-zinc-900 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Live System & Source Code Links */}
          <div className="pt-3 border-t border-zinc-200 flex flex-wrap items-center gap-3 mb-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-mono text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-mono text-xs font-bold hover:bg-zinc-800 transition-colors shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 border border-zinc-950 font-mono text-xs text-zinc-950 hover:bg-zinc-100 transition-colors ml-auto cursor-pointer"
            >
              Back to Grid (Esc)
            </button>
          </div>

          {/* Stepper Navigation Footer */}
          <div className="pt-3 border-t-2 border-zinc-950 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 font-mono text-xs">
            <button
              disabled={modalIndex === 0}
              onClick={onPrev}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 border border-zinc-950 hover:bg-zinc-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-bold uppercase text-[11px] sm:text-xs cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>

            <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] sm:text-[11px] order-last sm:order-none w-full sm:w-auto justify-center">
              <span>Project {modalIndex + 1} of {totalProjects}</span>
              <span className="hidden sm:inline">• Scroll &darr; to advance</span>
            </div>

            <button
              onClick={onNext}
              className={`inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 font-bold uppercase transition-colors shadow-sm text-white text-[11px] sm:text-xs cursor-pointer ${
                modalIndex === totalProjects - 1
                  ? 'bg-emerald-600 hover:bg-emerald-700'
                  : 'bg-zinc-950 hover:bg-blue-600'
              }`}
            >
              <span className="hidden xs:inline">
                {modalIndex === totalProjects - 1
                  ? 'Finish Tour (To Experience) →'
                  : 'Next Project (Scroll ↓)'}
              </span>
              <span className="inline xs:hidden">
                {modalIndex === totalProjects - 1 ? 'Finish →' : 'Next ↓'}
              </span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
