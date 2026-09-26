'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '#home' },
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

  useEffect(() => {
    const handleScroll = () => {
      navigation.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveLink(item.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-surface-variant transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a className="flex items-center gap-2.5 group" href="#home">
          <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform font-headline text-lg">
            R
          </div>
          <span className="font-bold text-xl tracking-tight text-primary font-headline">
            Rohit Shinde<span className="text-secondary">.</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-surface-container-low border border-surface-variant backdrop-blur-md">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                activeLink === item.href
                  ? 'text-on-primary bg-primary shadow-sm'
                  : 'text-secondary hover:text-primary hover:bg-surface-container'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/Rohit_Shinde_CV-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium text-secondary hover:text-primary hover:bg-surface-container-high border border-outline-variant/40 transition-all font-mono text-xs"
          >
            <FileDown className="w-4 h-4" />
            <span>CV</span>
          </a>

          <a
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-on-primary bg-primary hover:bg-secondary transition-colors shadow-md hover:scale-[1.02] active:scale-[0.98]"
            href="#contact"
          >
            <Sparkles className="w-4 h-4" />
            <span>Let's Talk</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-xl md:hidden text-primary hover:bg-surface-container border border-surface-variant"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-surface-variant bg-surface-container-low px-6 py-4 shadow-xl"
          >
            <div className="flex flex-col gap-1.5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'px-4 py-2.5 rounded-xl text-sm font-medium transition-all',
                    activeLink === item.href
                      ? 'bg-primary text-on-primary font-semibold'
                      : 'text-secondary hover:text-primary hover:bg-surface-container'
                  )}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-surface-variant flex gap-2">
                <a
                  href="/Rohit_Shinde_CV-1.pdf"
                  target="_blank"
                  className="flex-1 py-2.5 text-center text-xs font-mono font-medium rounded-xl border border-outline-variant/40 text-primary hover:bg-surface-container"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex-1 py-2.5 text-center text-xs font-semibold rounded-xl bg-primary text-on-primary"
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