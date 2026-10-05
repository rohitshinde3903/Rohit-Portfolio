'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowDown, ArrowUpRight, Sparkles, FileDown } from 'lucide-react';
import HandwrittenNote from '../ui/HandwrittenNote';
import { openAndDownloadResume } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const line3Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const note1Ref = useRef<HTMLDivElement>(null);
  const note2Ref = useRef<HTMLDivElement>(null);
  const note3Ref = useRef<HTMLDivElement>(null);
  const note4Ref = useRef<HTMLDivElement>(null);
  const note5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Mono metadata stamp
      tl.fromTo(
        metaRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
        // 2. Large Editorial Headline staggered line reveal
        .fromTo(
          line1Ref.current,
          { y: 70, opacity: 0, filter: 'blur(8px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power4.out', clearProps: 'filter' },
          '-=0.3'
        )
        .fromTo(
          line2Ref.current,
          { y: 70, opacity: 0, filter: 'blur(8px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power4.out', clearProps: 'filter' },
          '-=0.65'
        )
        .fromTo(
          line3Ref.current,
          { y: 70, opacity: 0, filter: 'blur(8px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power4.out', clearProps: 'filter' },
          '-=0.65'
        )
        // 3. Supporting sub-statement
        .fromTo(
          subRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.4'
        )
        // 4. CTAs
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        )
        // 5. Handwritten annotations staggered pop
        .fromTo(
          [note1Ref.current, note2Ref.current, note3Ref.current, note4Ref.current, note5Ref.current],
          { scale: 0.7, opacity: 0, rotate: -10 },
          { scale: 1, opacity: 1, rotate: (i) => [-4, 6, -5, 4, -3][i], duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
          '-=0.2'
        );

      // Subtle Scroll Parallax on words and annotations (never fading out)
      gsap.to(line1Ref.current, {
        x: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(line2Ref.current, {
        x: 35,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.to(line3Ref.current, {
        x: -25,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
        },
      });

      // Differential drift on annotations
      if (note1Ref.current) {
        gsap.to(note1Ref.current, {
          y: -60,
          rotate: -12,
          scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
        });
      }
      if (note2Ref.current) {
        gsap.to(note2Ref.current, {
          y: 70,
          rotate: 15,
          scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 1.3 },
        });
      }
      if (note3Ref.current) {
        gsap.to(note3Ref.current, {
          y: -40,
          rotate: -8,
          scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 1.6 },
        });
      }
      if (note4Ref.current) {
        gsap.to(note4Ref.current, {
          y: 50,
          rotate: 10,
          scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 1.4 },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between px-6 sm:px-12 pt-28 pb-12 bg-paper text-ink overflow-hidden select-none"
    >
      {/* Top Technical Metadata Stamp */}
      <div
        ref={metaRef}
        className="max-w-6xl mx-auto w-full flex justify-between items-center font-mono text-[11px] sm:text-xs text-ink-muted uppercase tracking-widest border-b border-paper-border pb-4"
      >
        <span>ROHIT SHINDE / 2026</span>
        <span className="hidden sm:inline">PUNE, INDIA &bull; GENAI / PRODUCT</span>
        <span className="text-emerald-deep font-semibold">STATUS // ACTIVE &bull; BUILDING</span>
      </div>

      {/* Main Editorial Headline Composition */}
      <div className="relative my-auto max-w-5xl mx-auto w-full text-center py-8">
        
        {/* Floating Handwritten Annotation 1 (Top Left) */}
        <div ref={note1Ref} className="absolute -top-4 left-4 sm:left-12 hidden sm:block">
          <HandwrittenNote rotate={-6} arrow="down">
            LLMs &amp; RAG
          </HandwrittenNote>
        </div>

        {/* Floating Handwritten Annotation 2 (Top Right) */}
        <div ref={note2Ref} className="absolute -top-2 right-4 sm:right-16 hidden sm:block">
          <HandwrittenNote rotate={8} arrow="left">
            AGENTS
          </HandwrittenNote>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-serif leading-[0.88] tracking-tight uppercase flex flex-col items-center">
          <span
            ref={line1Ref}
            className="block text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] text-ink font-normal"
          >
            I TURN
          </span>
          <span
            ref={line2Ref}
            className="block text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] text-ink font-normal my-1 sm:my-2"
          >
            IDEAS INTO
          </span>
          <span
            ref={line3Ref}
            className="block text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] text-emerald-deep italic font-serif"
          >
            SYSTEMS.
          </span>
        </h1>

        {/* Floating Handwritten Annotation 3 (Bottom Left) */}
        <div ref={note3Ref} className="absolute bottom-6 left-2 sm:left-8 hidden sm:block">
          <HandwrittenNote rotate={-5} arrow="up">
            PRODUCTS
          </HandwrittenNote>
        </div>

        {/* Floating Handwritten Annotation 4 (Bottom Right) */}
        <div ref={note4Ref} className="absolute bottom-4 right-2 sm:right-12 hidden sm:block">
          <HandwrittenNote rotate={6} arrow="left">
            EXPERIMENTS
          </HandwrittenNote>
        </div>

        {/* Floating Handwritten Annotation 5 (Center Floating) */}
        <div ref={note5Ref} className="inline-block mt-3 sm:mt-4">
          <HandwrittenNote rotate={-2}>
            + boundless curiosity
          </HandwrittenNote>
        </div>

        {/* Supporting Editorial Subtitle */}
        <p
          ref={subRef}
          className="max-w-xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-ink-muted leading-relaxed font-sans"
        >
          GenAI Engineer &bull; Full-Stack Architect &bull; Digital Experience Builder
        </p>

        {/* Call-to-action actions */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-3.5 mt-8 sm:mt-10"
        >
          <a
            href="#projects"
            data-cursor-label="WORK"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-deep hover:bg-dark text-paper text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#intro"
            data-cursor-label="ABOUT"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-paper-card hover:bg-white border border-paper-border text-ink text-xs sm:text-sm font-medium tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Read Ethos</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
          </a>

          <button
            onClick={openAndDownloadResume}
            data-cursor-label="PDF"
            className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full font-mono text-xs text-ink-muted hover:text-ink bg-paper-card border border-paper-border transition-all"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-deep" />
            <span>CV</span>
          </button>
        </div>
      </div>

      {/* Bottom Editorial Coordinates & Scroll Cue */}
      <div className="max-w-6xl mx-auto w-full flex justify-between items-end border-t border-paper-border pt-4 text-ink-muted font-mono text-[11px]">
        <div>
          <span>SCROLL TO EXPLORE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse" />
          <span>AUTONOMOUS SYSTEMS</span>
        </div>
      </div>
    </section>
  );
}