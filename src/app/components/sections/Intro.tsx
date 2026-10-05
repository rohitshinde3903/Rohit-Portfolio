'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HandwrittenNote from '../ui/HandwrittenNote';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        metaRef.current ? metaRef.current.children : [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: metaRef.current,
            start: 'top 88%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="py-32 sm:py-44 px-6 sm:px-12 bg-paper text-ink border-t border-paper-border relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Index Stamp */}
        <div className="flex items-center gap-3 font-mono text-xs text-ink-muted uppercase tracking-widest mb-12">
          <span>02 / EDITORIAL ETHOS</span>
          <span className="w-12 h-[1px] bg-paper-border" />
          <HandwrittenNote rotate={-3}>
            engineering &times; art
          </HandwrittenNote>
        </div>

        {/* Large Editorial Statement */}
        <div className="relative mb-12">
          <h2
            ref={headlineRef}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-ink font-normal"
          >
            I don&apos;t see technology as a stack.{' '}
            <span className="italic text-emerald-deep font-serif">
              I see it as a medium.
            </span>
          </h2>

          <div className="absolute -top-6 right-4 hidden md:block">
            <HandwrittenNote rotate={5} arrow="down">
              built from scratch
            </HandwrittenNote>
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-20">
          <div className="md:col-span-8">
            <p
              ref={textRef}
              className="text-lg sm:text-2xl text-ink-secondary leading-relaxed font-sans font-light"
            >
              I build AI systems, full-stack products, and experimental digital experiences where engineering meets creativity. From fine-tuning Small Language Models for low-latency edge inference to engineering zero-hallucination RAG pipelines, I turn ambiguous ideas into resilient software.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <HandwrittenNote rotate={-4} arrow="left">
              idea &rarr; system
            </HandwrittenNote>
          </div>
        </div>

        {/* Structured Metadata Dossier */}
        <div
          ref={metaRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-paper-border font-mono text-xs"
        >
          <div className="p-6 rounded-2xl bg-paper-card border border-paper-border">
            <span className="text-ink-muted uppercase tracking-widest block mb-1">
              LOCATION
            </span>
            <span className="text-base font-serif text-ink font-semibold">
              Pune, India &bull; Global Remote
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-paper-card border border-paper-border">
            <span className="text-ink-muted uppercase tracking-widest block mb-1">
              PRIMARY FOCUS
            </span>
            <span className="text-base font-serif text-emerald-deep font-semibold">
              GenAI / Full Stack / Product
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-paper-card border border-paper-border">
            <span className="text-ink-muted uppercase tracking-widest block mb-1">
              CURRENT MODE
            </span>
            <span className="text-base font-serif text-ink font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse" />
              Active Builder &bull; 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
