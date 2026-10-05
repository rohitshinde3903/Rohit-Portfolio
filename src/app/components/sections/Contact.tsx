'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Mail, Linkedin, Phone, Check, Copy } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 max-w-7xl mx-auto px-6 relative overflow-hidden">
      <div className="hr-glow mb-24" />

      <div ref={contentRef} className="p-10 md:p-16 rounded-2xl bg-bg-card/60 border border-border-dim backdrop-blur-sm text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan/[0.04] rounded-full blur-[80px] pointer-events-none" />

        <span className="section-num block mb-6">07 / Contact</span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-text-primary mb-4 max-w-4xl mx-auto leading-tight">
          Let's build systems that{' '}
          <span className="text-gradient italic">actually scale.</span>
        </h2>

        <p className="text-text-secondary max-w-xl mx-auto text-sm sm:text-base mb-10 leading-relaxed">
          Complex RAG challenge? Need production LLM fine-tuning? Want to discuss engineering roles? My inbox is always open.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
          <MagneticButton>
            <a
              href="mailto:rohitshinde3903@gmail.com"
              data-cursor-label="EMAIL"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-sm bg-accent hover:bg-accent-dark text-white transition-all shadow-lg shadow-accent/20"
            >
              <Mail className="w-4 h-4" />
              rohitshinde3903@gmail.com
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="https://linkedin.com/in/rohitshinde3903"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="LINKEDIN"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-sm bg-bg-elevated hover:bg-bg-hover text-text-primary border border-border-lite transition-all"
            >
              <Linkedin className="w-4 h-4 text-accent" />
              LinkedIn
            </a>
          </MagneticButton>

          <button
            onClick={() => handleCopy('+917499273903', 'phone')}
            data-cursor-label="COPY"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs text-text-muted bg-bg-elevated hover:bg-bg-hover border border-border-dim transition-all"
          >
            {copied === 'phone' ? (
              <Check className="w-3.5 h-3.5 text-emerald" />
            ) : (
              <Phone className="w-3.5 h-3.5" />
            )}
            {copied === 'phone' ? 'Copied!' : '+91 74992 73903'}
          </button>
        </div>
      </div>
    </section>
  );
}
