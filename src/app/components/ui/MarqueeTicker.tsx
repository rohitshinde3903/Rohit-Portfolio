'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tickerItems = [
  "VIBE CODING PROMPTS ARE NOT ARCHITECTURE",
  "DETERMINISTIC RAG > BLIND GENERATION",
  "+38% Q&A ACCURACY &bull; GEMMA 3B FINE-TUNED",
  "-42% HALLUCINATIONS WITH CHROMADB",
  "-40% LATENCY VIA vLLM PAGEDATTENTION",
  "15+ PRODUCTION STARTUPS DELIVERED",
  "9.45 CGPA &bull; B.TECH AI & DATA SCIENCE",
  "ASYNC FASTAPI & DJANGO ON GCP CLOUD RUN",
  "PRODUCTION HARDENED AI SYSTEMS"
];

export default function MarqueeTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Scroll velocity drive: scrubbing shifts the marquee in tandem with user scrolling
      if (trackRef.current && containerRef.current) {
        gsap.to(trackRef.current, {
          x: -250,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full border-y border-border-subtle bg-surface/60 backdrop-blur-xl overflow-hidden py-3.5 select-none relative z-20"
    >
      <div
        ref={trackRef}
        className="animate-marquee-smooth flex items-center gap-8 whitespace-nowrap will-change-transform"
      >
        {/* Doubled for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-xs font-mono text-secondary tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 animate-pulse" />
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </div>
        ))}
      </div>
    </div>
  );
}
