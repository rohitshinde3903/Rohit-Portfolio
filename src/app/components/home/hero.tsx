'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowDown, ArrowRight, Zap, Cpu, FileDown } from 'lucide-react';
import HeroSceneCanvas from '../3d/HeroSceneCanvas';
import MagneticButton from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const telemetryStats = [
  { value: '+38%', label: 'Q&A Accuracy', detail: 'Gemma 3B LoRA' },
  { value: '-42%', label: 'Hallucination Cut', detail: 'Curriculum RAG' },
  { value: '-40%', label: 'Inference Latency', detail: 'vLLM Serving' },
  { value: '15+', label: 'Startups Shipped', detail: 'Production AI' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const floatLeftRef = useRef<HTMLDivElement>(null);
  const floatRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -15, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, delay: 0.1 }
      )
        .fromTo(
          titleLine1Ref.current,
          { opacity: 0, y: 40, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 },
          '-=0.3'
        )
        .fromTo(
          titleLine2Ref.current,
          { opacity: 0, y: 40, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          statsRef.current ? statsRef.current.children : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          '-=0.3'
        )
        .fromTo(
          scrollCueRef.current,
          { opacity: 0 },
          { opacity: 0.6, duration: 0.5 },
          '-=0.2'
        );

      // Multi-plane Scrubbed Parallax on Scroll
      gsap.to([badgeRef.current, titleLine1Ref.current, titleLine2Ref.current], {
        y: 80,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      });

      gsap.to(descRef.current, {
        y: 110,
        opacity: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(ctaRef.current, {
        y: 140,
        opacity: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
        },
      });

      gsap.to(statsRef.current, {
        y: 170,
        opacity: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // Floating editorial badges with differential scroll drift
      if (floatLeftRef.current) {
        gsap.to(floatLeftRef.current, {
          y: -100,
          opacity: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      if (floatRightRef.current) {
        gsap.to(floatRightRef.current, {
          y: -60,
          opacity: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.3,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden bg-background select-none"
    >
      {/* Three.js WebGL Interactive Ambient Background */}
      <HeroSceneCanvas />

      {/* Floating Architectural Coordinate Overlays (Parallax-driven) */}
      <div
        ref={floatLeftRef}
        className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 flex-col gap-2 font-mono text-[10px] text-muted tracking-widest pointer-events-none select-none border-l border-border-subtle pl-4 py-3"
      >
        <span className="text-accent/80 font-bold">LOC // 18.5204° N</span>
        <span>GEO // 73.8567° E</span>
        <span className="text-secondary/60">SYS // STABLE</span>
      </div>

      <div
        ref={floatRightRef}
        className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 flex-col items-end gap-2 font-mono text-[10px] text-muted tracking-widest pointer-events-none select-none border-r border-border-subtle pr-4 py-3"
      >
        <span className="text-accent/80 font-bold">MODE // PRODUCTION</span>
        <span>RAG // DETERMINISTIC</span>
        <span className="text-secondary/60">REV // 2026.04</span>
      </div>

      {/* Main Narrative Stack */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center my-auto">
        
        {/* Step 1: System Status Pill */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-elevated/90 border border-border-subtle backdrop-blur-xl mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] text-secondary tracking-widest uppercase">
            PUNE, IN &bull; GENAI ARCHITECT &bull; v4.2
          </span>
        </div>

        {/* Step 2: Balanced, Editorial Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.12] text-primary mb-6 max-w-3xl">
          <span ref={titleLine1Ref} className="block">
            Yes, you can build systems with vibe coding now.
          </span>
          <span
            ref={titleLine2Ref}
            className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400 italic font-normal"
          >
            But you cannot build them like me.
          </span>
        </h1>

        {/* Step 3: Crisp Lead Paragraph */}
        <p
          ref={descRef}
          className="max-w-xl mx-auto text-sm sm:text-base text-secondary leading-relaxed font-normal mb-8"
        >
          Anyone can prompt an AI to spit out a fragile toy wrapper. I architect hardened, production-grade intelligence — fine-tuning custom SLMs, engineering deterministic zero-hallucination RAG, cutting inference latency by 40%, and orchestrating scalable Python backends on Google Cloud.
        </p>

        {/* Step 4: Magnetic Action Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <MagneticButton>
            <a
              href="#projects"
              data-cursor-label="VIEW"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-primary bg-accent hover:bg-accent-violet transition-all shadow-md shadow-accent/20"
            >
              <Zap className="w-3.5 h-3.5 text-amber-200" />
              <span>Explore Deployments</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#vibe-vs-engineering"
              data-cursor-label="COMPARE"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-primary bg-surface-elevated/90 hover:bg-surface-elevated border border-border-subtle transition-all"
            >
              <Cpu className="w-3.5 h-3.5 text-secondary" />
              <span>The Architectural Difference</span>
            </a>
          </MagneticButton>

          <a
            href="/Rohit_Shinde_CV-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="PDF"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl font-mono text-xs font-medium text-secondary hover:text-primary bg-surface/50 border border-border-subtle transition-all"
          >
            <FileDown className="w-3.5 h-3.5 text-accent" />
            <span>CV</span>
          </a>
        </div>

        {/* Step 5: Clean, Uncrowded Telemetry Strip */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-2xl"
        >
          {telemetryStats.map((stat, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-surface/60 border border-border-subtle backdrop-blur-md text-center hover:border-accent/40 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-display font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-[11px] font-semibold text-primary">
                {stat.label}
              </div>
              <div className="text-[9px] font-mono text-muted">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Step 6: Subtle Scroll Cue */}
      <div
        ref={scrollCueRef}
        className="relative z-10 flex items-center gap-2 pt-4 text-muted text-[11px] font-mono tracking-widest uppercase pointer-events-none opacity-60"
      >
        <span>Scroll to Explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-accent" />
      </div>
    </section>
  );
}
