'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Mail, Linkedin, Github, Phone, Copy, Check, ArrowUpRight, FileDown } from 'lucide-react';
import { openAndDownloadResume } from '@/lib/utils';
import HandwrittenNote from '../ui/HandwrittenNote';
import MagneticButton from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      data-theme="dark"
      className="py-32 sm:py-48 px-6 sm:px-12 bg-[#07110D] text-[#FAF9F5] border-t border-[#25C98A]/20 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0B3D2E]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#25C98A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Index */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#FAF9F5]/50 uppercase tracking-widest mb-10">
          <span>07 / CONNECT & COLLABORATE</span>
          <span className="w-10 h-[1px] bg-white/20" />
          <span className="text-[#25C98A] font-semibold">GET IN TOUCH</span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="relative mb-16">
          <h2
            ref={titleRef}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-[#FAF9F5] tracking-tight leading-[0.95]"
          >
            HAVE AN IDEA? <br />
            <span className="italic text-[#25C98A]">LET&apos;S BUILD IT.</span>
          </h2>

          <div className="hidden md:block absolute -top-8 right-12">
            <HandwrittenNote
              text="inbox is always open for bold systems"
              arrowDirection="down-left"
              rotation={4}
            />
          </div>
        </div>

        {/* Central Action Area */}
        <div ref={ctaRef} className="space-y-12">
          {/* Main Magnetic CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton strength={0.35}>
              <a
                href="mailto:rohitshinde3903@gmail.com"
                data-cursor-label="EMAIL"
                className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-full bg-[#25C98A] hover:bg-[#25C98A]/90 text-[#07110D] font-mono text-sm sm:text-base font-bold tracking-wider transition-all duration-300 shadow-2xl shadow-[#25C98A]/30"
              >
                <span>START A CONVERSATION</span>
                <span className="w-9 h-9 rounded-full bg-[#07110D] text-[#25C98A] flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </a>
            </MagneticButton>

            <button
              onClick={openAndDownloadResume}
              data-cursor-label="RESUME"
              className="inline-flex items-center gap-3 px-8 py-5 rounded-full border border-white/20 hover:border-[#25C98A] text-[#FAF9F5] hover:text-[#25C98A] font-mono text-xs sm:text-sm tracking-wider uppercase transition-colors"
            >
              <FileDown className="w-4 h-4 text-[#25C98A]" />
              <span>DOWNLOAD RESUME / CV</span>
            </button>
          </div>

          {/* Quick Contact Dossier Bar */}
          <div className="pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#25C98A]/40 transition-colors">
              <div className="font-mono text-[11px] text-[#FAF9F5]/50 uppercase tracking-widest mb-2 flex items-center justify-between">
                <span>EMAIL</span>
                <Mail className="w-3.5 h-3.5 text-[#25C98A]" />
              </div>
              <a
                href="mailto:rohitshinde3903@gmail.com"
                className="font-sans text-sm font-medium text-[#FAF9F5] hover:text-[#25C98A] transition-colors break-all block mb-3"
              >
                rohitshinde3903@gmail.com
              </a>
              <button
                onClick={() => handleCopy('rohitshinde3903@gmail.com', 'email')}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#25C98A] hover:underline"
              >
                {copiedType === 'email' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copiedType === 'email' ? 'COPIED TO CLIPBOARD' : 'COPY ADDRESS'}</span>
              </button>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#25C98A]/40 transition-colors">
              <div className="font-mono text-[11px] text-[#FAF9F5]/50 uppercase tracking-widest mb-2 flex items-center justify-between">
                <span>PHONE / WHATSAPP</span>
                <Phone className="w-3.5 h-3.5 text-[#25C98A]" />
              </div>
              <p className="font-sans text-sm font-medium text-[#FAF9F5] block mb-3">
                +91 74992 73903
              </p>
              <button
                onClick={() => handleCopy('+917499273903', 'phone')}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#25C98A] hover:underline"
              >
                {copiedType === 'phone' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copiedType === 'phone' ? 'COPIED NUMBER' : 'COPY NUMBER'}</span>
              </button>
            </div>

            {/* LinkedIn */}
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#25C98A]/40 transition-colors">
              <div className="font-mono text-[11px] text-[#FAF9F5]/50 uppercase tracking-widest mb-2 flex items-center justify-between">
                <span>NETWORK</span>
                <Linkedin className="w-3.5 h-3.5 text-[#25C98A]" />
              </div>
              <a
                href="https://linkedin.com/in/rohitshinde3903"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="LINKEDIN"
                className="font-sans text-sm font-medium text-[#FAF9F5] hover:text-[#25C98A] transition-colors flex items-center gap-1.5"
              >
                <span>in/rohitshinde3903</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#25C98A]" />
              </a>
              <span className="block mt-3 font-mono text-[10px] text-[#FAF9F5]/40">
                ACTIVE FOR DISCUSSIONS
              </span>
            </div>

            {/* GitHub */}
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#25C98A]/40 transition-colors">
              <div className="font-mono text-[11px] text-[#FAF9F5]/50 uppercase tracking-widest mb-2 flex items-center justify-between">
                <span>CODE REPOSITORIES</span>
                <Github className="w-3.5 h-3.5 text-[#25C98A]" />
              </div>
              <a
                href="https://github.com/rohitshinde3903"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="GITHUB"
                className="font-sans text-sm font-medium text-[#FAF9F5] hover:text-[#25C98A] transition-colors flex items-center gap-1.5"
              >
                <span>rohitshinde3903</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#25C98A]" />
              </a>
              <span className="block mt-3 font-mono text-[10px] text-[#FAF9F5]/40">
                OPEN SOURCE & LAB REPOS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
