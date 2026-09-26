'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Terminal, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Spotlight', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(scrollTop > 20);

      navigation.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(item.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4">
      <div className={cn(
        "max-w-6xl mx-auto rounded-2xl transition-all duration-500 px-5 sm:px-6 py-3 flex items-center justify-between",
        scrolled 
          ? "bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.8)] shadow-purple-950/20" 
          : "bg-black/30 backdrop-blur-md border border-white/5"
      )}>
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group select-none">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
              <span className="font-mono text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                R
              </span>
            </div>
          </div>
          <span className="text-base sm:text-lg font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors">
            Rohit<span className="text-cyan-400 font-mono text-sm">.ai</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'relative text-xs font-mono px-3.5 py-2 rounded-xl transition-all duration-200',
                activeLink === item.href
                  ? 'text-white bg-white/10 shadow-inner'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              )}
            >
              {item.name}
              {activeLink === item.href && (
                <motion.div 
                  className="absolute bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                  layoutId="activeNavIndicator"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/Rohit_Shinde_CV-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/20 transition-all flex items-center gap-1.5"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            CV
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all"
          >
            Connect
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white p-2 rounded-xl bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl bg-black/95 border border-white/10 backdrop-blur-2xl p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'px-4 py-2.5 rounded-xl text-sm font-mono transition-all flex items-center justify-between',
                    activeLink === item.href
                      ? 'bg-purple-950/40 text-purple-300 border border-purple-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  <span>{item.name}</span>
                  {activeLink === item.href && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  )}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-white/10 flex gap-2">
                <a
                  href="/Rohit_Shinde_CV-1.pdf"
                  target="_blank"
                  className="flex-1 py-2 text-center text-xs font-mono rounded-xl bg-white/5 border border-white/10 text-gray-300"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex-1 py-2 text-center text-xs font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thin Futuristic Progress Bar */}
      <div className="max-w-6xl mx-auto h-[2px] w-full bg-transparent overflow-hidden mt-1 px-4">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-all duration-150 rounded-full"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}