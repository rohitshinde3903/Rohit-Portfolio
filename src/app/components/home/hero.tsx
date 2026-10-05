'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FileDown, ArrowRight, Zap, Sparkles } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import HeroSceneCanvas from '../3d/HeroSceneCanvas';
import { openAndDownloadResume } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '15+', label: 'Startups Shipped' },
  { value: '+38%', label: 'AI Accuracy Boost' },
  { value: '-40%', label: 'Latency Reduction' },
  { value: '9.45', label: 'CGPA Distinction' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const orbRing1Ref = useRef<HTMLDivElement>(null);
  const orbRing2Ref = useRef<HTMLDivElement>(null);
  const orbCoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. System status pill reveal
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, delay: 0.1, clearProps: 'filter' }
      )
        // 2. Headline reveals - line 1 then line 2 with blur-to-sharp
        .fromTo(
          line1Ref.current,
          { y: 50, opacity: 0, filter: 'blur(8px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.85, ease: 'power4.out', clearProps: 'filter' },
          '-=0.3'
        )
        .fromTo(
          line2Ref.current,
          { y: 50, opacity: 0, filter: 'blur(8px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.85, ease: 'power4.out', clearProps: 'filter' },
          '-=0.55'
        )
        // 3. Lead description
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0, filter: 'blur(4px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, clearProps: 'filter' },
          '-=0.4'
        )
        // 4. CTAs
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        )
        // 5. Quantitative telemetry stats strip
        .fromTo(
          statsRef.current ? statsRef.current.children : [],
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
          '-=0.2'
        )
        // 6. Scroll cue
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 0.7, duration: 0.5 },
          '-=0.1'
        );

      // Kinetic Motion Graphics: Continuous multi-axis rotation on purple orb rings
      if (orbRing1Ref.current) {
        gsap.to(orbRing1Ref.current, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: 'none',
        });
      }

      if (orbRing2Ref.current) {
        gsap.to(orbRing2Ref.current, {
          rotation: -360,
          duration: 28,
          repeat: -1,
          ease: 'none',
        });
      }

      if (orbCoreRef.current) {
        gsap.to(orbCoreRef.current, {
          scale: 1.15,
          opacity: 0.85,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden bg-bg select-none"
    >
      {/* 1. Interactive 3D WebGL Particle Nebula Background */}
      <HeroSceneCanvas />

      {/* 2. Kinetic Purple AI Motion Graphics Element (Orbital Ring Engine) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0">
        {/* Core radial ambient glow */}
        <div
          ref={orbCoreRef}
          className="w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-gradient-to-tr from-accent/25 via-accent-violet/20 to-cyan/15 blur-[90px]"
        />

        {/* Orbit ring 1 (clockwise rotating dashed ring with satellite nodes) */}
        <div
          ref={orbRing1Ref}
          className="absolute inset-0 -m-16 sm:-m-24 border border-dashed border-accent/25 rounded-full"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/60" />
          <div className="absolute -bottom-1.5 left-1/3 w-3 h-3 rounded-full bg-cyan shadow-md shadow-cyan/60" />
        </div>

        {/* Orbit ring 2 (counter-clockwise rotating concentric ring) */}
        <div
          ref={orbRing2Ref}
          className="absolute inset-0 -m-32 sm:-m-44 border border-border-dim rounded-full"
        >
          <div className="absolute top-1/4 -right-2 w-3.5 h-3.5 rounded-full bg-purple-400 shadow-md shadow-purple-400/50" />
          <div className="absolute bottom-1/4 -left-2 w-2.5 h-2.5 rounded-full bg-cyan shadow-sm shadow-cyan/50" />
        </div>
      </div>

      {/* Floating Architectural Coordinate Overlays */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 flex-col gap-2 font-mono text-[10px] text-text-dim tracking-widest pointer-events-none select-none border-l border-border-dim pl-4 py-3">
        <span className="text-accent font-bold">LOC // 18.5204° N</span>
        <span>GEO // 73.8567° E</span>
        <span className="text-text-muted">SYS // STABLE</span>
      </div>

      <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 flex-col items-end gap-2 font-mono text-[10px] text-text-dim tracking-widest pointer-events-none select-none border-r border-border-dim pr-4 py-3">
        <span className="text-accent font-bold">MODE // PRODUCTION</span>
        <span>RAG // DETERMINISTIC</span>
        <span className="text-text-muted">REV // 2026.04</span>
      </div>

      {/* Main Narrative Stack */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center my-auto">
        {/* Status Pill */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-bg-card/90 border border-border-lite backdrop-blur-xl mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
          <span className="font-mono text-[11px] text-text-secondary tracking-widest uppercase">
            PUNE, IN &bull; GENAI ARCHITECT &bull; v4.2
          </span>
        </div>

        {/* Meticulously Aligned Headline with Fully Visible Gradient */}
        <h1 className="font-display font-extrabold tracking-tight text-center max-w-4xl mx-auto flex flex-col items-center justify-center mb-6">
          <div className="overflow-hidden py-1 px-3">
            <span
              ref={line1Ref}
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] text-text-primary leading-[1.1] tracking-tight font-extrabold select-none"
            >
              I architect
            </span>
          </div>
          <div className="overflow-hidden py-2 px-3 mt-1 sm:mt-2">
            <span
              ref={line2Ref}
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] leading-[1.15] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan italic font-extrabold select-none filter drop-shadow-sm"
            >
              intelligent systems.
            </span>
          </div>
        </h1>

        {/* Lead Narrative Paragraph */}
        <p
          ref={descRef}
          className="max-w-xl mx-auto text-sm sm:text-base text-text-secondary leading-relaxed font-normal mb-8"
        >
          Anyone can prompt an AI to spit out a fragile toy wrapper. I architect hardened, production-grade intelligence — fine-tuning custom SLMs, engineering deterministic zero-hallucination RAG, cutting inference latency by 40%, and orchestrating scalable Python backends on Google Cloud.
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <MagneticButton>
            <a
              href="#projects"
              data-cursor-label="VIEW"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-accent hover:bg-accent-dark transition-all shadow-md shadow-accent/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Zap className="w-3.5 h-3.5 text-amber-200" />
              <span>Explore Deployments</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#manifesto"
              data-cursor-label="COMPARE"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm text-text-primary bg-bg-card/90 hover:bg-bg-hover border border-border-dim hover:border-border-lite transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>The Engineering Reality</span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={openAndDownloadResume}
              data-cursor-label="PDF"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full font-mono text-xs font-medium text-text-secondary hover:text-text-primary bg-bg-card/50 hover:bg-bg-hover border border-border-dim hover:border-border-lite transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-3.5 h-3.5 text-accent" />
              <span>CV</span>
            </button>
          </MagneticButton>
        </div>

        {/* Telemetry Stats Strip */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 w-full max-w-2xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl bg-bg-card/70 border border-border-dim backdrop-blur-md text-center hover:border-border-accent transition-colors duration-300"
            >
              <div className="text-xl sm:text-2xl font-display font-bold text-text-primary">
                {stat.value}
              </div>
              <div className="text-[11px] font-semibold text-text-secondary mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div
        ref={scrollRef}
        className="relative z-10 flex flex-col items-center gap-2 pt-6 text-text-dim text-[11px] font-mono tracking-widest uppercase pointer-events-none opacity-60"
      >
        <span>Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-text-dim to-transparent" />
      </div>
    </section>
  );
}
