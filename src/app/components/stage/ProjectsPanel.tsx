'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, ProjectItem } from '@/app/data/portfolioData';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

interface ProjectsPanelProps {
  onAdvance: () => void;
  isActive: boolean;
}

export default function ProjectsPanel({ onAdvance, isActive }: ProjectsPanelProps) {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="relative w-full h-full flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-24 pb-8 select-none overflow-y-auto bg-canvasLight text-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full my-auto space-y-8">
        {/* Header for Projects in High-Contrast Inverted Mode matching prototype */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b-2 border-zinc-950 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-600 uppercase">
              <span className="w-2.5 h-2.5 bg-black inline-block" />
              <span>/PROJECTS — SELECTED ONLY (04)</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-zinc-950 mt-2">
              ENGINEERED ARTIFACTS
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-600 max-w-sm">
            Curated system designs, neural architectures, and distributed acceleration tools developed by Rohit Shinde.
          </p>
        </div>

        {/* 4 Projects Grid with Brutalist Hard Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              data-cursor-label="VIEW"
              className={`group border-2 border-zinc-950 bg-white p-6 sm:p-8 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer ${
                idx % 2 === 1 ? 'md:mt-4' : ''
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between font-mono text-xs border-b border-zinc-200 pb-3">
                  <span className="font-bold text-zinc-950 text-sm sm:text-base">
                    PROJECT [{project.number}]
                  </span>
                  <span className="px-2 py-0.5 bg-zinc-100 rounded text-zinc-600 text-[11px] uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold mt-4 text-zinc-950 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-zinc-100 border border-zinc-300 text-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  {project.metrics[0] || 'Hardware & Systems'}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold text-black group-hover:text-blue-600 transition-colors">
                  <span>View Architecture</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom Nav / Advance */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center pt-4 border-t-2 border-zinc-950">
        <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider">
          03 // CLICK ANY CARD TO INSPECT ARCHITECTURE
        </span>
        <button
          onClick={onAdvance}
          data-cursor-label="JOURNEY"
          className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-950 font-bold uppercase tracking-widest hover:text-blue-600 transition-colors cursor-pointer"
        >
          <span>Connected Storyline</span>
          <span className="transform group-hover:translate-y-0.5 transition-transform">&darr;</span>
        </button>
      </div>

      {/* Project Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-zinc-950 max-w-2xl w-full rounded-none border-2 border-zinc-950 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-950 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 font-mono text-xs text-blue-600 font-bold mb-2">
                <span>PROJECT [{selectedProject.number}]</span>
                <span>·</span>
                <span className="uppercase">{selectedProject.category}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-zinc-950 mb-2">
                {selectedProject.title}
              </h3>

              <p className="font-mono text-xs text-zinc-500 mb-5">
                ROLE: {selectedProject.role}
              </p>

              <div className="h-44 sm:h-56 w-full rounded overflow-hidden mb-6 border-2 border-zinc-950 bg-zinc-100">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-950 font-bold">
                  ARCHITECTURAL BREAKDOWN
                </h4>
                <p className="font-sans text-sm text-zinc-700 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="mb-6 p-4 bg-zinc-50 border border-zinc-300 space-y-2">
                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block">
                  KEY ACHIEVEMENTS &amp; BENCHMARKS
                </span>
                <div className="space-y-1.5">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-mono text-xs text-zinc-900">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Arsenal */}
              <div className="mb-6">
                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-2">
                  TECHNOLOGY ARSENAL
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 bg-zinc-100 border border-zinc-300 text-zinc-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-200 flex items-center gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white font-mono text-xs font-semibold hover:bg-blue-600 transition-colors shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 border border-zinc-950 font-mono text-xs text-zinc-950 hover:bg-zinc-100 transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
