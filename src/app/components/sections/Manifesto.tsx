'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hypeProblems = [
  { title: 'Hallucination Roulette', desc: 'No ground-truth anchoring. Answers sound plausible until they corrupt production data.' },
  { title: 'Crippling Latency', desc: '3-6s roundtrips with zero caching, quantization, or serving optimization.' },
  { title: 'Brittle Architecture', desc: 'Prompt spaghetti with no tests, no schema validation, no monitoring.' },
  { title: 'Cannot Scale', desc: 'Fails silently when 10+ concurrent requests hit the unoptimized backend.' },
];

const engineeringReality = [
  { title: 'Deterministic RAG', desc: 'LlamaIndex + ChromaDB hybrid retrieval with strict curriculum grounding. -42% hallucinations.' },
  { title: 'SLM Fine-Tuning', desc: 'Gemma 3B adapted via LoRA, QLoRA, and progressive layer unfreezing. +38% domain accuracy.' },
  { title: 'Sub-Second Inference', desc: 'vLLM PagedAttention with continuous batching. -40% inference latency.' },
  { title: 'Cloud-Native Scale', desc: 'Dockerized async FastAPI & Django microservices on GCP Cloud Run with CI/CD.' },
];

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      );

      // Left card slide in from left
      gsap.fromTo(
        leftRef.current,
        { x: -60, opacity: 0, scale: 0.97 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 },
        }
      );

      // Right card slide in from right
      gsap.fromTo(
        rightRef.current,
        { x: 60, opacity: 0, scale: 0.97 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 },
        }
      );

      // Differential parallax
      gsap.to(leftRef.current, {
        y: 40,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
      });
      gsap.to(rightRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="manifesto" className="py-32 max-w-7xl mx-auto px-6 relative overflow-hidden">
      <div className="hr-glow mb-24" />

      <div ref={headerRef} className="mb-20">
        <span className="section-num block mb-4">01 / Manifesto</span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-text-primary max-w-4xl">
          The gap between{' '}
          <span className="text-gradient italic">AI hype</span> and{' '}
          <span className="text-gradient italic">real engineering.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: The Hype */}
        <div
          ref={leftRef}
          className="p-8 md:p-10 rounded-2xl bg-bg-card/80 border border-red-500/10 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="font-mono text-xs text-red-400/80 tracking-widest uppercase">The AI Hype</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary mb-6">
            Prompt Wrappers & Naive Generation
          </h3>
          <ul className="space-y-5">
            {hypeProblems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">{item.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-border-dim">
            <span className="font-mono text-[10px] text-text-dim tracking-wider">Result: Brittle demos that collapse in production.</span>
          </div>
        </div>

        {/* Right: My Reality */}
        <div
          ref={rightRef}
          className="p-8 md:p-10 rounded-2xl bg-bg-card/80 border border-accent/20 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/[0.06] rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-emerald" />
              <span className="font-mono text-xs text-accent-light tracking-widest uppercase">My Engineering</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary mb-6">
              Architected Intelligence & Verified Scale
            </h3>
            <ul className="space-y-5">
              {engineeringReality.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">{item.title}</h4>
                    <p className="text-xs text-text-muted leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border-dim flex items-center justify-between">
              <span className="font-mono text-[10px] text-accent tracking-wider">Predictable, scalable, low-latency intelligence.</span>
              <span className="font-mono text-[10px] text-text-muted px-2.5 py-1 rounded-md bg-bg-elevated border border-border-dim">15+ Startups</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
