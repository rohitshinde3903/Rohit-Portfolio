'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/app/data/portfolioData';
import { ChevronRight, ChevronLeft, CheckCircle2, Calendar, MapPin } from 'lucide-react';

interface ExperiencePanelProps {
  onAdvance: () => void;
  isActive: boolean;
}

export default function ExperiencePanel({ onAdvance, isActive }: ExperiencePanelProps) {
  const { experience } = portfolioData;
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);

  const activeNode = experience[selectedNodeIndex];

  return (
    <div className="relative w-full h-full flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-24 pb-8 select-none overflow-y-auto bg-obsidian text-white border-t border-zinc-800">
      {/* Subtle ambient grid in background matching prototype */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full my-auto space-y-8 relative z-10">
        {/* Experience Section Heading matching prototype */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-cyan-400 uppercase">
            <span className="w-2.5 h-2.5 bg-cyan-400 inline-block" />
            <span>/EXPERIENCE — CONNECTED STORYLINE</span>
          </div>
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            MILESTONES &amp; ARCHITECTURAL IMPACT
          </div>
        </div>

        {/* Connected Nodes Selector Bar */}
        <div className="relative py-6 px-4 bg-zinc-950/80 rounded-xl border border-zinc-800/80 overflow-hidden">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-zinc-800 hidden md:block">
            <motion.div
              initial={{ width: '0%' }}
              animate={isActive ? { width: `${(selectedNodeIndex / (experience.length - 1)) * 100}%` } : {}}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="h-full bg-cyan-400 shadow-[0_0_12px_#00F0FF]"
            />
          </div>

          {/* Node Buttons */}
          <div className="relative z-10 flex flex-wrap md:flex-nowrap justify-between items-center gap-3">
            {experience.map((node, idx) => {
              const isSelected = idx === selectedNodeIndex;
              const isPast = idx < selectedNodeIndex;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeIndex(idx)}
                  data-cursor-label="NODE"
                  className={`group flex md:flex-col items-center gap-2.5 text-left md:text-center transition-all p-2 rounded-lg cursor-pointer ${
                    isSelected
                      ? 'scale-105 opacity-100'
                      : isPast
                      ? 'opacity-80 hover:opacity-100'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 relative ${
                      isSelected
                        ? 'bg-cyan-400 text-black ring-4 ring-cyan-400/30 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                        : isPast
                        ? 'bg-zinc-800 text-white border border-zinc-600'
                        : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                    }`}
                  >
                    <span>{node.number}</span>
                    {isSelected && (
                      <span className="absolute -inset-1 rounded-full border border-cyan-400 animate-ping opacity-60" />
                    )}
                  </div>

                  <div className="md:max-w-[130px]">
                    <span className="block font-display text-sm font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                      {node.title}
                    </span>
                    <span className="block font-mono text-[10px] text-zinc-400 tracking-wider">
                      {node.period}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Node Active Card with Brutalist node-glow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="w-full bg-zinc-950 p-6 sm:p-8 rounded-xl border border-cyan-500/30 node-glow relative overflow-hidden"
          >
            {/* Top Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-zinc-800">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-1">
                  <span className="font-bold">NODE [{activeNode.number}] // ACTIVE</span>
                  <span>·</span>
                  <span className="bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    {activeNode.period}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {activeNode.role}
                </h3>
                <div className="text-sm font-mono text-zinc-400 mt-1">
                  {activeNode.title}
                </div>
              </div>

              <div className="flex items-center gap-4 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeNode.location}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              {activeNode.summary}
            </p>

            {/* Highlights */}
            <div className="space-y-2 mb-6">
              {activeNode.highlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-zinc-300">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Tags & Next/Prev Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-800">
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-zinc-400">
                {activeNode.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={selectedNodeIndex === 0}
                  onClick={() => setSelectedNodeIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-700 font-mono text-xs text-white hover:bg-zinc-800 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>PREV</span>
                </button>
                <button
                  disabled={selectedNodeIndex === experience.length - 1}
                  onClick={() => setSelectedNodeIndex((prev) => Math.min(experience.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-700 font-mono text-xs text-white hover:bg-zinc-800 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Nav / Advance */}
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center pt-4 border-t border-zinc-800 relative z-10">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
          04 // EVOLUTIONARY TIMELINE
        </span>
        <button
          onClick={onAdvance}
          data-cursor-label="CONNECT"
          className="group inline-flex items-center gap-2 font-mono text-xs text-cyan-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
        >
          <span>Initiate Protocol</span>
          <span className="transform group-hover:translate-y-0.5 transition-transform">&darr;</span>
        </button>
      </div>
    </div>
  );
}
