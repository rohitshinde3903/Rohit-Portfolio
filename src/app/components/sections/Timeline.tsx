'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HandwrittenNote from '../ui/HandwrittenNote';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: '2023',
    phase: 'LEARNING & FOUNDATIONS',
    headline: 'Deep Python & System Fundamentals',
    desc: 'Mastered low-level Python, concurrent programming, relational database modeling, and distributed backend concepts. Built first algorithmic trading and automation scripts.',
    status: 'COMPLETED',
  },
  {
    year: '2024',
    phase: 'FOUNDING & DELIVERY',
    headline: 'Stones Web Services & 15+ Startups',
    desc: 'Founded technology agency delivering end-to-end applications for 15+ early-stage startups across AI engineering, REST microservices, Django, and GCP cloud containerization.',
    status: 'DELIVERED',
  },
  {
    year: '2025',
    phase: 'GENAI & SLM ARCHITECTURE',
    headline: 'Gemma 3B LoRA & Production RAG',
    desc: 'Led core AI development for EduAI Hub: domain fine-tuning Gemma 3B, reducing hallucinations by 42% via LlamaIndex + ChromaDB, and graduating with 9.45 CGPA in B.Tech AI & Data Science.',
    status: 'VERIFIED',
  },
  {
    year: '2026',
    phase: 'AUTONOMOUS PRODUCTS',
    headline: 'On-Device Edge SLMs & VidyaAI',
    desc: 'Architected offline-first React Native mobile SLM with local on-device inference, dynamic model provider abstraction, and scaling production GenAI platforms to thousands of active users.',
    status: 'ACTIVE NOW',
  },
  {
    year: 'FUTURE',
    phase: 'VENTURE SCALE',
    headline: 'Autonomous Intelligence Systems',
    desc: 'Engineering next-generation agentic workflows, sovereign SLMs, and AI products that think, reason, and operate autonomously.',
    status: 'EXPLORING',
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      );

      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%' },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      data-theme="dark"
      className="py-32 sm:py-44 px-6 sm:px-12 bg-[#07110D] text-[#FAF9F5] border-t border-[#25C98A]/20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#25C98A] uppercase tracking-widest mb-4">
              <span>08 / TRAJECTORY &bull; THE PATH</span>
              <span className="w-10 h-[1px] bg-white/10" />
              <HandwrittenNote rotate={-3} className="text-[#25C98A]">
                progression
              </HandwrittenNote>
            </div>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-white uppercase font-normal">
              THE <span className="italic text-[#25C98A] font-serif">JOURNEY.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-sm font-sans leading-relaxed">
            Not a static career chronology, but a continuous path of escalating technical ambition and product ownership.
          </p>
        </div>

        {/* The Progression Path */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-16">
          {milestones.map((item, idx) => (
            <div
              key={item.year}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="relative group"
            >
              {/* Path Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[#07110D] border-2 border-[#25C98A] group-hover:scale-125 group-hover:bg-[#25C98A] transition-all" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2 font-mono text-xs">
                <span className="text-2xl sm:text-3xl font-serif text-[#25C98A] font-semibold">
                  {item.year}
                </span>
                <span className="text-white/50 tracking-widest uppercase">
                  {item.phase} &bull; {item.status}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3 group-hover:text-[#25C98A] transition-colors">
                {item.headline}
              </h3>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans font-light max-w-2xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
