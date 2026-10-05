'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { openAndDownloadResume } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Manifesto', href: '#manifesto' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) setScrollProgress((window.scrollY / totalScroll) * 100);
      setScrolled(window.scrollY > 40);

      navigation.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) setActiveLink(item.href);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-accent to-cyan transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
        <div
          className={`max-w-7xl mx-auto px-5 h-14 rounded-full flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'bg-bg/85 backdrop-blur-2xl border border-border-dim shadow-2xl shadow-black/50'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Brand with animated kinetic purple monogram */}
          <a href="#home" className="flex items-center gap-2.5 group select-none">
            <div className="relative">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent to-purple-700 text-white flex items-center justify-center font-bold text-xs font-display group-hover:scale-110 transition-transform shadow-md shadow-accent/40">
                R
              </div>
              <span className="absolute -inset-0.5 rounded-md bg-accent/30 blur-sm -z-10 group-hover:bg-accent/60 transition-all animate-pulse-soft" />
            </div>
            <span className="font-display font-bold text-base tracking-tight text-text-primary hidden sm:inline">
              Rohit<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-bg-card/50 border border-border-dim backdrop-blur-xl">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono transition-all duration-200 ${
                  activeLink === item.href
                    ? 'text-text-primary bg-bg-elevated border border-border-lite'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <MagneticButton>
              <button
                onClick={openAndDownloadResume}
                data-cursor-label="CV"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono text-text-muted hover:text-text-primary bg-bg-card/60 hover:bg-bg-hover border border-border-dim hover:border-border-lite transition-all"
              >
                <FileDown className="w-3.5 h-3.5 text-accent" />
                <span>CV</span>
              </button>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                data-cursor-label="TALK"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-accent hover:bg-accent-dark transition-all shadow-md shadow-accent/20"
              >
                <Sparkles className="w-3 h-3 text-amber-200" />
                <span>Let's Talk</span>
              </a>
            </MagneticButton>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full lg:hidden text-text-primary bg-bg-card border border-border-dim"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl border border-border-dim bg-bg/95 backdrop-blur-2xl p-4 shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all ${
                      activeLink === item.href
                        ? 'bg-accent/10 text-accent border border-accent/20'
                        : 'text-text-muted hover:text-text-primary hover:bg-bg-hover'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-3 mt-2 border-t border-border-dim flex gap-2">
                  <button
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      openAndDownloadResume(e);
                    }}
                    className="flex-1 py-2.5 text-center text-xs font-mono rounded-xl bg-bg-elevated text-text-muted hover:text-text-primary border border-border-dim flex items-center justify-center gap-1.5"
                  >
                    <FileDown className="w-3.5 h-3.5 text-accent" />
                    <span>Download CV</span>
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex-1 py-2.5 text-center text-xs font-medium rounded-xl bg-accent text-white flex items-center justify-center"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
