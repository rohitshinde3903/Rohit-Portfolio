'use client';

import React from 'react';
import { ArrowUp, FileDown, Heart } from 'lucide-react';
import { openAndDownloadResume } from '@/lib/utils';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      data-theme="dark"
      className="bg-[#07110D] text-[#FAF9F5] border-t border-white/10 py-16 px-6 sm:px-12 select-none"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Tier: Big Logo & Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#25C98A] uppercase block mb-1">
              PORTFOLIO EDITION // 2026
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF9F5] tracking-tight">
              ROHIT SHINDE
            </h3>
            <p className="font-mono text-xs text-[#FAF9F5]/60 mt-1">
              GenAI Engineer &bull; LLMs & RAG &bull; Agentic AI &bull; Full-Stack Builder
            </p>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor-label="TOP"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-xs text-[#FAF9F5] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#25C98A]" />
          </button>
        </div>

        {/* Middle Tier: Navigation Links & Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs text-[#FAF9F5]/70">
          {/* Index Sitemap */}
          <div>
            <span className="text-[10px] text-[#FAF9F5]/40 uppercase tracking-widest block mb-4">
              INDEX SITEMAP
            </span>
            <div className="flex flex-col space-y-2">
              <a href="#projects" className="hover:text-[#25C98A] transition-colors">01 / FEATURED WORK</a>
              <a href="#intro" className="hover:text-[#25C98A] transition-colors">02 / CORE PHILOSOPHY</a>
              <a href="#stack" className="hover:text-[#25C98A] transition-colors">03 / TECHNICAL STACK</a>
              <a href="#about" className="hover:text-[#25C98A] transition-colors">04 / THE HUMAN BEHIND CODE</a>
              <a href="#digital-world" className="hover:text-[#25C98A] transition-colors">05 / 3D NEURAL REALM</a>
              <a href="#lab" className="hover:text-[#25C98A] transition-colors">06 / EXPERIMENTAL LAB</a>
              <a href="#contact" className="hover:text-[#25C98A] transition-colors">07 / GET IN TOUCH</a>
            </div>
          </div>

          {/* Channels */}
          <div>
            <span className="text-[10px] text-[#FAF9F5]/40 uppercase tracking-widest block mb-4">
              EXTERNAL CHANNELS
            </span>
            <div className="flex flex-col space-y-2">
              <a
                href="https://linkedin.com/in/rohitshinde3903"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25C98A] transition-colors"
                data-cursor-label="OPEN"
              >
                LinkedIn &rarr;
              </a>
              <a
                href="https://github.com/rohitshinde3903"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25C98A] transition-colors"
                data-cursor-label="OPEN"
              >
                GitHub &rarr;
              </a>
              <button
                onClick={openAndDownloadResume}
                className="text-left hover:text-[#25C98A] transition-colors flex items-center gap-1.5"
                data-cursor-label="CV"
              >
                <span>Curriculum Vitae (PDF)</span>
                <FileDown className="w-3 h-3 text-[#25C98A]" />
              </button>
              <a
                href="mailto:rohitshinde3903@gmail.com"
                className="hover:text-[#25C98A] transition-colors"
                data-cursor-label="EMAIL"
              >
                Email Dispatch &rarr;
              </a>
            </div>
          </div>

          {/* Coordinates & Technical Specs */}
          <div>
            <span className="text-[10px] text-[#FAF9F5]/40 uppercase tracking-widest block mb-4">
              TELEMETRY & TECH SPEC
            </span>
            <div className="space-y-1.5 text-[#FAF9F5]/60 text-[11px] leading-relaxed">
              <p>LOCATION: Pune, Maharashtra, India</p>
              <p>COORDINATES: 18.5204° N, 73.8567° E</p>
              <p>TIMEZONE: IST (UTC +05:30)</p>
              <p className="pt-2 text-[#25C98A]">
                ENGINEERED WITH NEXT.JS 16, REACT 19, GSAP, THREE.JS, LENIS & TAILWIND CSS
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Distinctions */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#FAF9F5]/50">
          <div>
            &copy; {new Date().getFullYear()} Rohit Shinde. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25C98A] animate-pulse" />
            <span>&ldquo;I don&apos;t just write code. I build intelligent products and experiences.&rdquo;</span>
          </div>
        </div>
      </div>
    </footer>
  );
}