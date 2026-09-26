'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Manifesto', href: '#vibe-vs-engineering' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Spotlight', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      navigation.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveLink(item.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-5 transition-all duration-300">
      <div
        className={cn(
          'max-w-7xl mx-auto px-6 h-16 rounded-2xl flex items-center justify-between transition-all duration-500',
          scrolled
            ? 'bg-surface/85 backdrop-blur-2xl border border-border-subtle shadow-2xl shadow-black/80'
            : 'bg-transparent border border-transparent'
        )}
      >
        {/* Brand Monogram & Name */}
        <a href="#home" className="flex items-center gap-2.5 group select-none">
          <div className="w-8 h-8 rounded-lg bg-accent text-primary flex items-center justify-center font-bold text-sm shadow-md shadow-accent/20 group-hover:scale-105 transition-transform font-display">
            R
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-primary">
            Rohit Shinde<span className="text-accent">.</span>
          </span>
        </a>

        {/* Minimal Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface-elevated/70 border border-border-subtle backdrop-blur-xl">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200',
                activeLink === item.href
                  ? 'text-primary bg-surface shadow-sm border border-border-focus'
                  : 'text-secondary hover:text-primary hover:bg-surface/50'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <MagneticButton>
            <a
              href="/Rohit_Shinde_CV-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="PDF"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-secondary hover:text-primary bg-surface-elevated/60 border border-border-subtle transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-accent" />
              <span>CV</span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              data-cursor-label="TALK"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-primary bg-accent hover:bg-accent-violet transition-all shadow-md shadow-accent/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Let's Talk</span>
            </a>
          </MagneticButton>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-xl lg:hidden text-primary bg-surface-elevated border border-border-subtle"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl border border-border-subtle bg-surface/95 backdrop-blur-2xl p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'px-4 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center justify-between',
                    activeLink === item.href
                      ? 'bg-accent/15 text-accent font-semibold border border-accent/30'
                      : 'text-secondary hover:text-primary hover:bg-surface-elevated'
                  )}
                >
                  <span>{item.name}</span>
                  {activeLink === item.href && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  )}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-border-subtle flex gap-2">
                <a
                  href="/Rohit_Shinde_CV-1.pdf"
                  target="_blank"
                  className="flex-1 py-2.5 text-center text-xs font-mono rounded-xl bg-surface-elevated text-secondary border border-border-subtle"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex-1 py-2.5 text-center text-xs font-semibold rounded-xl bg-accent text-primary"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}