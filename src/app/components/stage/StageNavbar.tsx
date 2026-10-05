'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, Menu, X } from 'lucide-react';
import { openAndDownloadResume } from '@/lib/utils';

interface StageNavbarProps {
  activeStage: number;
  onSelectStage: (stage: number) => void;
}

const navItems = [
  { name: 'About', stage: 2 },
  { name: 'Projects', stage: 3 },
  { name: 'Experience', stage: 4 },
  { name: 'Contact', stage: 5 },
];

export default function StageNavbar({ activeStage, onSelectStage }: StageNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLightMode = activeStage === 3; // Stage 3 Projects is White/CanvasLight mode

  return (
    <>
      <AnimatePresence>
        {/* Navbar is completely hidden on Landing screen (activeStage === 0) */}
        {activeStage > 0 && (
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-[9000] backdrop-blur-md border-b transition-colors duration-500 ${
              isLightMode
                ? 'bg-canvasLight/90 border-zinc-300 text-zinc-950'
                : 'bg-obsidian/85 border-white/10 text-slate-100'
            }`}
          >
            <div className="max-w-7xl mx-auto px-3.5 sm:px-6 h-20 flex items-center justify-between gap-2">
              {/* Brand Name from prototype */}
              <button
                onClick={() => onSelectStage(1)}
                data-cursor-label="ROHIT"
                className="group flex items-center gap-2 sm:gap-3 text-left cursor-pointer shrink-0"
              >
                <span className={`font-display font-black text-xl sm:text-2xl tracking-tighter transition-colors ${
                  isLightMode ? 'text-zinc-950 group-hover:text-blue-600' : 'text-white group-hover:text-cyan-400'
                }`}>
                  ROHIT<span className={isLightMode ? 'text-zinc-400' : 'text-white/40'}>.</span>
                </span>
                <span className={`hidden sm:inline-block text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 rounded border ${
                  isLightMode
                    ? 'border-zinc-300 text-zinc-600 bg-black/5'
                    : 'border-white/10 text-zinc-400 bg-white/5'
                }`}>
                  THE GAME CHANGER
                </span>
              </button>

              {/* Navigation Links */}
              <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wider uppercase font-mono">
                {navItems.map((item) => {
                  const isActive = activeStage === item.stage;
                  return (
                    <button
                      key={item.name}
                      onClick={() => onSelectStage(item.stage)}
                      className={`transition-colors duration-200 cursor-pointer ${
                        isActive
                          ? isLightMode
                            ? 'text-blue-600 font-bold underline decoration-blue-600/40 underline-offset-4'
                            : 'text-cyan-400 font-bold underline decoration-cyan-400/40 underline-offset-4'
                          : isLightMode
                          ? 'text-zinc-600 hover:text-zinc-950'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </nav>

              {/* Status indicator / CTA Button */}
              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <div className={`hidden lg:flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border ${
                  isLightMode
                    ? 'text-zinc-700 bg-zinc-200/80 border-zinc-300'
                    : 'text-zinc-400 bg-zinc-900/80 border-zinc-800'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open for Systems AI Work</span>
                </div>

                <button
                  onClick={openAndDownloadResume}
                  data-cursor-label="CV"
                  className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase font-mono font-semibold tracking-wider rounded transition-all shadow-sm cursor-pointer ${
                    isLightMode
                      ? 'bg-zinc-950 text-white hover:bg-zinc-800'
                      : 'bg-white text-black hover:bg-zinc-200 hover:scale-[1.02]'
                  }`}
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </button>

                <button
                  onClick={() => onSelectStage(5)}
                  data-cursor-label="CONTACT"
                  className={`px-3 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs uppercase font-mono font-semibold tracking-wider rounded transition-all shadow-sm cursor-pointer ${
                    isLightMode
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-white text-black hover:bg-cyan-400 hover:scale-[1.02]'
                  }`}
                >
                  Get in Touch
                </button>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className={`p-1.5 sm:p-2 rounded md:hidden cursor-pointer ${
                    isLightMode ? 'text-black hover:bg-black/5' : 'text-white hover:bg-white/10'
                  }`}
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[9999] bg-obsidian text-slate-100 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                ROHIT SHINDE // THE GAME CHANGER
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded bg-white/10 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4 my-auto py-6">
              <button
                onClick={() => {
                  onSelectStage(1);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left font-display font-bold text-2xl sm:text-4xl text-white hover:text-cyan-400 py-2 border-b border-white/10"
              >
                HERO
              </button>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onSelectStage(item.stage);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left font-display font-bold text-2xl sm:text-4xl text-white hover:text-cyan-400 py-2 border-b border-white/10"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  openAndDownloadResume(e);
                }}
                className="w-full py-4 rounded bg-white text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
