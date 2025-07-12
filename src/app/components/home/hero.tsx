'use client';

import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import IconCloud from '@/app/components/ui/icon-cloud';
import { motion } from 'framer-motion';

const slugs = [
  "typescript", "javascript", "python", "java", "react", "nextdotjs", "nodejs", "express",
  "tailwindcss", "firebase", "vercel", "docker", "github", "figma", "postgresql",
  "mysql", "bash", "linux", "vscode", "html5", "css3"
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bgX = (mousePosition.x / window.innerWidth) * 100;
  const bgY = (mousePosition.y / window.innerHeight) * 100;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden mt-4"
      style={{
        background: `radial-gradient(circle at ${bgX}% ${bgY}%, rgba(70, 20, 120, 0.15), rgba(0, 0, 0, 0.95))`
      }}
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-800/10 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-700/10 blur-[80px] animate-float-medium" />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-purple-500/15 blur-[60px] animate-float-fast" />
      </div>

      {/* Tech sphere */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[200vw] h-[200vw] opacity-10 animate-spin-slow">
          <IconCloud iconSlugs={[...slugs, ...slugs]} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mt-5 px-4 w-full max-w-4xl" style={{marginTop: '20px'}}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-mono text-purple-400 rounded-full bg-purple-900/30 border border-purple-500/20 mb-4">
            FULL-STACK DEVELOPER/AI/ML ENGINEER/DATA SCIENTIST/DATA ANALYST
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Rohit Shinde
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting digital experiences at the intersection of design and technology.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            href="#projects"
            className="relative group px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-xl transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 blur opacity-0 group-hover:opacity-30 transition-opacity" />
          </Link>

          <Link
            href="#contact"
            className="px-6 py-3.5 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all"
          >
            Let's Talk
          </Link>
        </motion.div>

        {/* Tech pill indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {['React', 'Next.js', 'Node', 'Python', 'AI/ML'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-white/80 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="w-px h-16 bg-gradient-to-t from-purple-500/30 to-transparent" />
        <span className="mt-2 text-xs text-white/50">Explore more</span>
      </motion.div>
    </section>
  );
}