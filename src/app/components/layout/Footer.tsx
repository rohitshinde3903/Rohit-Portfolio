'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Mail, Linkedin, Phone, Check } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function AwesomeContact() {
  const [copied, setCopied] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          x: 90,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      {/* Contact Section */}
      <section
        ref={sectionRef}
        id="contact"
        className="py-28 max-w-7xl mx-auto px-6 border-t border-border-subtle relative z-10 overflow-hidden"
      >
        {/* Background Parallax Watermark */}
        <div
          ref={watermarkRef}
          className="absolute -left-20 top-1/2 -translate-y-1/2 font-display text-[13rem] md:text-[17rem] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter leading-none -z-10"
          aria-hidden="true"
        >
          CONNECT
        </div>
        <div className="p-12 md:p-16 rounded-3xl bg-surface/80 border border-border-subtle backdrop-blur-2xl text-center relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-xs font-mono text-secondary mb-6 border border-border-subtle">
            <span>07 / INITIATE CONTACT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight text-primary mb-6 max-w-4xl mx-auto leading-tight">
            Let's build AI systems that don't just demo —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400 italic font-normal">
              they scale.
            </span>
          </h2>

          <p className="text-secondary max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed font-normal">
            Whether you have a complex RAG challenge, need production LLM fine-tuning and deployment, or want to discuss engineering roles, my inbox is always open.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <MagneticButton>
              <a
                href="mailto:rohitshinde3903@gmail.com"
                data-cursor-label="EMAIL"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-primary bg-accent hover:bg-accent-violet transition-all shadow-lg shadow-accent/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-5 h-5 text-amber-200" />
                <span>rohitshinde3903@gmail.com</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://linkedin.com/in/rohitshinde3903"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="LINKEDIN"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-primary bg-surface-elevated hover:bg-surface border border-border-subtle transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Linkedin className="w-5 h-5 text-accent" />
                <span>Connect on LinkedIn</span>
              </a>
            </MagneticButton>

            <button
              onClick={() => handleCopy('+917499273903', 'phone')}
              data-cursor-label="COPY"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl font-mono text-sm font-medium text-secondary bg-surface-elevated hover:bg-surface border border-border-subtle transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {copied === 'phone' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Phone className="w-4 h-4 text-secondary" />
              )}
              <span>{copied === 'phone' ? 'Copied +91 74992 73903' : '+91 74992 73903'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-surface/90 py-12 text-sm text-secondary relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="font-mono text-secondary text-xs">
              Designed &amp; Engineered by Rohit Shinde &bull; Pune, India
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
            <a
              className="text-secondary hover:text-primary transition-colors"
              href="https://github.com/rohitshinde3903"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="GITHUB"
            >
              GitHub
            </a>
            <a
              className="text-secondary hover:text-primary transition-colors"
              href="https://linkedin.com/in/rohitshinde3903"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="LINKEDIN"
            >
              LinkedIn
            </a>
            <a
              className="text-secondary hover:text-primary transition-colors"
              href="/Rohit_Shinde_CV-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="RESUME"
            >
              Resume
            </a>
            <a
              className="text-secondary hover:text-primary transition-colors"
              href="mailto:rohitshinde3903@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}