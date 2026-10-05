'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/app/data/portfolioData';
import { FileDown, Check, Copy } from 'lucide-react';
import { openAndDownloadResume } from '@/lib/utils';

interface ContactPanelProps {
  onBackToTop: () => void;
  isActive: boolean;
}

export default function ContactPanel({ onBackToTop, isActive }: ContactPanelProps) {
  const { personal } = portfolioData;
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative w-full h-full flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-24 pb-8 select-none overflow-y-auto bg-zinc-950 border-t border-zinc-800 text-slate-100"
    >
      <div className="max-w-7xl mx-auto w-full my-auto space-y-12">
        {/* Main Grid matching prototype */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-zinc-800/80">
          {/* Left Column: Heading & Call to action */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-400 uppercase">
              <span className="w-2 h-2 bg-cyan-400" />
              <span>INITIATE PROTOCOL</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none uppercase"
            >
              READY TO BUILD THE IMPOSSIBLE?
            </motion.h2>

            <p className="text-zinc-400 max-w-xl text-base sm:text-lg leading-relaxed font-sans">
              Whether you are architecting a new AI venture, need high-throughput low-latency inference systems, or require deep systems-level engineering.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personal.email}`}
                data-cursor-label="TALK"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold text-sm tracking-widest uppercase rounded hover:bg-cyan-400 transition-colors shadow-lg"
              >
                <span>{personal.email}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </a>

              <button
                onClick={openAndDownloadResume}
                data-cursor-label="CV"
                className="inline-flex items-center gap-2 px-6 py-4 border border-zinc-700 hover:border-zinc-400 font-mono text-xs text-zinc-300 uppercase tracking-widest rounded transition-colors cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </button>

              <button
                onClick={onBackToTop}
                data-cursor-label="TOP"
                className="px-6 py-4 border border-zinc-700 hover:border-zinc-400 font-mono text-xs text-zinc-300 uppercase tracking-widest rounded transition-colors cursor-pointer"
              >
                Back to Top ↑
              </button>
            </div>
          </div>

          {/* Right Column: Channels, Profiles & System Status */}
          <div className="lg:col-span-4 flex flex-col justify-between font-mono space-y-8">
            <div>
              <div className="text-xs uppercase text-zinc-400 tracking-wider mb-3">
                Channels &amp; Profiles
              </div>
              <div className="flex flex-col space-y-2 text-sm">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-cyan-400 transition-colors flex items-center justify-between py-1 border-b border-zinc-800"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-cyan-400 transition-colors flex items-center justify-between py-1 border-b border-zinc-800"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="text-left text-zinc-300 hover:text-cyan-400 transition-colors flex items-center justify-between py-1 border-b border-zinc-800 cursor-pointer"
                >
                  <span>Direct: {personal.phone}</span>
                  <span>{copiedType === 'phone' ? '✓' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* System Status Pill matching prototype */}
            <div className="bg-zinc-900/60 p-4 border border-zinc-800 rounded">
              <div className="text-xs text-zinc-400 uppercase tracking-wider">System Status</div>
              <div className="text-sm text-emerald-400 font-bold mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Active · Accepting Select Consultations</span>
              </div>
              <div className="text-xs text-zinc-400 mt-2 font-mono">
                Timezone: Asia/Kolkata (IST · UTC+5:30)
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row matching prototype */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Rohit Shinde · &ldquo;The Game Changer&rdquo; · All Rights Reserved.</p>
          <p>Hand-crafted based on notebook blueprint #2003</p>
        </div>
      </div>
    </footer>
  );
}
