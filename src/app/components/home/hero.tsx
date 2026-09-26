'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowRight, Zap, Cpu, FileDown } from 'lucide-react';
import HeroSceneCanvas from '../3d/HeroSceneCanvas';
import MagneticButton from '../ui/MagneticButton';

const telemetryStats = [
  { value: '+38%', label: 'Q&A Accuracy Gain', detail: 'EduAI SLM (Gemma 3B LoRA)' },
  { value: '-42%', label: 'Hallucination Cut', detail: 'Curriculum Vector RAG' },
  { value: '-40%', label: 'Inference Latency', detail: 'vLLM Serving Optimization' },
  { value: '15+', label: 'Startups Shipped', detail: 'Production AI & Backends' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staged entrance animation sequence
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          kickerRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          titleLine1Ref.current,
          { opacity: 0, y: 70, filter: 'blur(12px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 },
          '-=0.3'
        )
        .fromTo(
          titleLine2Ref.current,
          { opacity: 0, y: 60, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 },
          '-=0.6'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          statsRef.current ? statsRef.current.children : [],
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          scrollCueRef.current,
          { opacity: 0, y: 10 },
          { opacity: 0.7, y: 0, duration: 0.6 },
          '-=0.2'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[105vh] flex flex-col justify-between items-center px-6 pt-32 pb-12 overflow-hidden bg-background select-none"
    >
      {/* Three.js WebGL Interactive Ambient Background */}
      <HeroSceneCanvas />

      {/* Main Narrative Stack */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center my-auto">
        
        {/* Step 1: System Online Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-elevated/80 border border-border-subtle backdrop-blur-xl mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs text-secondary tracking-widest uppercase">
            PUNE, IN &bull; GENAI KERNEL ONLINE &bull; v4.2
          </span>
        </div>

        {/* Step 2: Role Metadata Kicker */}
        <div
          ref={kickerRef}
          className="font-mono text-xs sm:text-sm text-secondary tracking-widest uppercase mb-6 flex items-center justify-center gap-2"
        >
          <span className="text-accent font-bold">&gt;_</span> GenAI Engineer &bull; LLM &amp; RAG Architect &bull; Python Full-Stack
        </div>

        {/* Step 3: Massive Editorial Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold tracking-tight leading-[1.08] text-primary mb-8 max-w-5xl">
          <span ref={titleLine1Ref} className="block">
            Yes, you can build systems with vibe coding now.
          </span>
          <span ref={titleLine2Ref} className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400 italic font-normal">
            But you cannot build them like me.
          </span>
        </h1>

        {/* Step 4: Editorial Lead Paragraph */}
        <p
          ref={descRef}
          className="max-w-2xl mx-auto text-base sm:text-lg text-secondary leading-relaxed font-normal mb-10"
        >
          Anyone can prompt an AI to spit out a fragile toy wrapper. I architect hardened, low-latency intelligence — fine-tuning custom SLMs, engineering deterministic zero-hallucination RAG, cutting inference latency by 40%, and orchestrating scalable Python backends on Google Cloud.
        </p>

        {/* Step 5: Interactive Telemetry Metrics */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mb-10"
        >
          {telemetryStats.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-surface/80 border border-border-subtle backdrop-blur-xl text-left hover:border-accent/40 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-primary mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] font-mono text-muted mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Step 6: Magnetic Action Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton>
            <a
              href="#projects"
              data-cursor-label="VIEW"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-primary bg-accent hover:bg-accent-violet transition-all shadow-lg shadow-accent/20"
            >
              <Zap className="w-4 h-4 text-amber-200" />
              <span>Explore Deployments</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#vibe-vs-engineering"
              data-cursor-label="COMPARE"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-primary bg-surface-elevated/90 hover:bg-surface-elevated border border-border-subtle transition-all"
            >
              <Cpu className="w-4 h-4 text-secondary" />
              <span>The Architectural Difference</span>
            </a>
          </MagneticButton>

          <a
            href="/Rohit_Shinde_CV-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="PDF"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-medium text-secondary hover:text-primary bg-surface/50 border border-border-subtle transition-all"
          >
            <FileDown className="w-3.5 h-3.5 text-accent" />
            <span>CV</span>
          </a>
        </div>
      </div>

      {/* Step 7: Scroll Indicator */}
      <div
        ref={scrollCueRef}
        className="relative z-10 flex flex-col items-center gap-2 pt-6 text-muted text-xs font-mono tracking-widest uppercase pointer-events-none"
      >
        <span>Scroll to Explore Narrative</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-accent" />
      </div>
    </section>
  );
}
