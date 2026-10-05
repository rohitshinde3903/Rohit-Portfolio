'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);

  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Profile image container parallax float
      gsap.fromTo(
        imageContainerRef.current,
        { y: 50, scale: 0.98 },
        {
          y: -40,
          scale: 1.02,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );

      // 2. Philosophy card subtle counter-parallax float
      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current,
          { y: 35 },
          {
            y: -35,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }

      // 3. Subtle background watermark horizontal parallax drift
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          x: -80,
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-28 max-w-7xl mx-auto px-6 border-t border-border-subtle relative z-10 overflow-hidden"
    >
      {/* Background Architectural Monogram Parallax Watermark */}
      <div
        ref={watermarkRef}
        className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[14rem] md:text-[18rem] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter leading-none -z-10"
        aria-hidden="true"
      >
        ROHIT
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Architectural Photo Dossier (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-xs font-mono text-secondary border border-border-subtle">
            <span>02 / BACKGROUND &amp; ETHOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-primary leading-tight">
            Behind the architecture and the engineer.
          </h2>

          {/* Profile Photo Display with Cinematic Dark Frame */}
          <div
            ref={imageContainerRef}
            data-cursor-label="ROHIT"
            className="flex items-center gap-5 p-5 rounded-3xl bg-surface/80 border border-border-subtle backdrop-blur-xl shadow-2xl"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-border-focus bg-surface-elevated shadow-inner">
              <Image
                src="/images/image.png"
                alt="Rohit Shinde"
                fill
                sizes="128px"
                priority
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-primary">Rohit Shinde</h3>
              <p className="text-xs text-secondary font-mono flex items-center gap-1 mt-0.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Pune, India &bull; Open for Global Roles
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-mono font-medium">
                <Sparkles className="w-3 h-3" />
                GenAI &amp; Full-Stack Architect
              </span>
            </div>
          </div>

          <p className="text-secondary text-base leading-relaxed font-normal">
            I believe transformative AI is built at the intersection of rigorous mathematical precision and elegant systems design. My path started in core Python backend engineering before diving deep into deep learning, LLM fine-tuning, and retrieval architectures.
          </p>

          <p className="text-secondary leading-relaxed text-sm font-normal">
            When I am not tuning retrieval pipelines or fine-tuning models, you will find me designing resilient distributed services, optimizing quantization parameters, and mentoring upcoming developers.
          </p>

          {/* Quantitative Badges */}
          <div className="pt-2 flex flex-wrap gap-4">
            <div className="p-5 rounded-2xl bg-surface/70 border border-border-subtle flex-1 min-w-[140px]">
              <div className="text-3xl font-display font-bold text-primary">4+</div>
              <div className="text-xs text-secondary font-mono mt-0.5">Years in AI &amp; Python</div>
            </div>
            <div className="p-5 rounded-2xl bg-surface/70 border border-border-subtle flex-1 min-w-[140px]">
              <div className="text-3xl font-display font-bold text-accent">9.45</div>
              <div className="text-xs text-secondary font-mono mt-0.5">CGPA &bull; B.Tech AI &amp; DS</div>
            </div>
          </div>
        </div>

        {/* Right Column: Core Philosophy Card (7 cols) */}
        <div ref={textColRef} className="lg:col-span-7">
          <div className="p-8 md:p-12 rounded-3xl bg-surface/80 border border-border-subtle backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            {/* Ambient Background Gradient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8 relative z-10">
              Core Engineering Philosophy
            </h3>

            <ul className="space-y-8 relative z-10">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-accent text-primary flex items-center justify-center shrink-0 font-mono text-sm mt-1 shadow-md">
                  01
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary text-base md:text-lg mb-1">
                    Deterministic Guardrails over Blind Generation
                  </h4>
                  <p className="text-sm text-secondary leading-relaxed font-normal">
                    Every production LLM output must pass through rigorous verification layers and grounded vector retrieval to eliminate hallucinations and ensure factual compliance.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-accent text-primary flex items-center justify-center shrink-0 font-mono text-sm mt-1 shadow-md">
                  02
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary text-base md:text-lg mb-1">
                    Low Latency &amp; Memory Efficiency by Design
                  </h4>
                  <p className="text-sm text-secondary leading-relaxed font-normal">
                    Optimizing vector retrieval indices, model quantization (QLoRA, vLLM continuous batching), and async microservices to keep response times under sub-second thresholds.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-accent text-primary flex items-center justify-center shrink-0 font-mono text-sm mt-1 shadow-md">
                  03
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary text-base md:text-lg mb-1">
                    Developer Ergonomics &amp; Enterprise Scalability
                  </h4>
                  <p className="text-sm text-secondary leading-relaxed font-normal">
                    Building maintainable, well-tested Python and TypeScript codebases that scale effortlessly from early-stage MVP to enterprise-grade workloads.
                  </p>
                </div>
              </li>
            </ul>

            {/* Architectural Tags */}
            <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap gap-2 relative z-10">
              {[
                'LLM Fine-Tuning',
                'RAG Pipelines',
                'FastAPI Microservices',
                'GCP Cloud Run',
                'Docker GPU Containers',
                'PyTorch Transformers',
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-surface-elevated text-xs font-mono text-secondary border border-border-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
