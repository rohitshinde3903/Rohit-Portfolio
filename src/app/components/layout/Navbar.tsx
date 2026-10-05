'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { openAndDownloadResume } from '@/lib/utils';

const navItems = [
  { name: 'WORK', href: '#projects', index: '01' },
  { name: 'ABOUT', href: '#intro', index: '02' },
  { name: 'STACK', href: '#stack', index: '03' },
  { name: 'LAB', href: '#lab', index: '04' },
  { name: 'EXPERIENCE', href: '#timeline', index: '05' },
  { name: 'CONTACT', href: '#contact', index: '06' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [activeItem, setActiveItem] = useState('#projects');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect dark section for automatic navbar theme inversion
      const darkSections = document.querySelectorAll('[data-theme="dark"]');
      let currentlyDark = false;
      darkSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentlyDark = true;
        }
      });
      setIsDarkSection(currentlyDark);

      // Track active section
      navItems.forEach((item) => {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveItem(item.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-5 pointer-events-none">
        <div
          className={`max-w-6xl mx-auto h-14 px-5 rounded-full flex items-center justify-between transition-all duration-500 pointer-events-auto ${
            isDarkSection
              ? 'bg-[#0D1E17]/90 border border-[#25C98A]/20 text-[#FAF9F5] shadow-2xl backdrop-blur-xl'
              : scrolled
              ? 'bg-[#FAF9F5]/90 border border-black/10 text-[#111111] shadow-lg shadow-black/5 backdrop-blur-xl'
              : 'bg-[#FAF9F5]/60 border border-black/5 text-[#111111] backdrop-blur-md'
          }`}
        >
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 group select-none"
            data-cursor-label="ROHIT"
          >
            <span className="font-mono text-xs font-semibold tracking-widest uppercase">
              ROHIT <span className={isDarkSection ? 'text-[#25C98A]' : 'text-[#0B3D2E]'}>/</span> SHINDE
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-[11px] tracking-wider">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  activeItem === item.href
                    ? isDarkSection
                      ? 'bg-[#25C98A]/15 text-[#25C98A] font-semibold'
                      : 'bg-[#0B3D2E] text-[#FAF9F5] font-semibold'
                    : isDarkSection
                    ? 'text-[#FAF9F5]/70 hover:text-[#FAF9F5]'
                    : 'text-[#77746D] hover:text-[#111111]'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={openAndDownloadResume}
              data-cursor-label="CV"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-[11px] font-semibold transition-all duration-300 ${
                isDarkSection
                  ? 'bg-[#25C98A] text-[#07110D] hover:bg-[#25C98A]/90'
                  : 'bg-[#0B3D2E] text-[#FAF9F5] hover:bg-[#07110D]'
              }`}
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`p-2 rounded-full md:hidden transition-colors ${
                isDarkSection ? 'text-[#FAF9F5] hover:bg-white/10' : 'text-[#111111] hover:bg-black/5'
              }`}
              aria-label="Open index menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Editorial Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9990] bg-[#07110D] text-[#FAF9F5] flex flex-col justify-between p-8 sm:p-12"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-6">
              <span className="font-mono text-xs tracking-widest text-[#25C98A] uppercase">
                ROHIT SHINDE &bull; EDITORIAL INDEX
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Index Items */}
            <div className="my-auto space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="overflow-hidden">
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-baseline justify-between py-2 border-b border-white/5 hover:border-[#25C98A]/40 transition-colors"
                  >
                    <span className="font-serif text-4xl sm:text-6xl text-[#FAF9F5] group-hover:text-[#25C98A] transition-colors italic">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs text-white/40 group-hover:text-[#25C98A] transition-colors">
                      /{item.index}
                    </span>
                  </a>
                </div>
              ))}
            </div>

            {/* Footer with Resume Action */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="font-mono text-xs text-white/50">
                PUNE, INDIA &bull; GENAI ENGINEER
              </div>
              <button
                onClick={(e) => {
                  setIsMenuOpen(false);
                  openAndDownloadResume(e);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25C98A] text-[#07110D] font-mono text-xs font-bold uppercase tracking-wider"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
