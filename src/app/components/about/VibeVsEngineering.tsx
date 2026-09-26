'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VibeVsEngineering() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  const bgGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Initial entry reveal
      gsap.fromTo(
        leftCardRef.current,
        { opacity: 0, x: -40, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 35%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        rightCardRef.current,
        { opacity: 0, x: 40, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 35%',
            scrub: 1,
          },
        }
      );

      // 2. Continuous differential scroll parallax through the section
      // Left card (fragile toy) sinks slightly, right card (hardened engineering) elevates!
      gsap.to(leftCardRef.current, {
        y: 45,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.to(rightCardRef.current, {
        y: -45,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // 3. Background subtle ambient glow parallax drift
      if (bgGlowRef.current) {
        gsap.to(bgGlowRef.current, {
          y: -120,
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
      id="vibe-vs-engineering"
      className="py-28 max-w-7xl mx-auto px-6 relative z-10 overflow-hidden"
    >
      {/* Ambient Parallax Radial Glow */}
      <div
        ref={bgGlowRef}
        className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-border-subtle pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-xs font-mono text-secondary mb-4 border border-border-subtle">
            <span>01 / ARCHITECTURAL REALITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-primary">
            Vibe Coding vs.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400 italic font-normal">
              Deep Engineering
            </span>
          </h2>
        </div>
        <p className="text-secondary max-w-md text-sm sm:text-base leading-relaxed font-normal">
          The difference between an amateur prototype that demos well on social media and an enterprise-grade AI system built to handle real scale.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Card: The Vibe Coder's Wrapper */}
        <div
          ref={leftCardRef}
          data-cursor-label="TOY"
          className="p-8 md:p-12 rounded-3xl bg-surface/70 border border-red-500/20 backdrop-blur-xl flex flex-col justify-between hover:border-red-500/40 transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="px-3.5 py-1 rounded-full bg-red-950/40 text-red-400 text-xs font-mono font-medium border border-red-500/30 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                The Vibe Coding Illusion
              </span>
              <span className="text-xs font-mono text-muted">Fragile Prototype</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
              Prompt Wrappers &amp; Naive Generation
            </h3>

            <p className="text-sm text-secondary leading-relaxed mb-8">
              Cobbled together with basic LLM prompts, untested dependencies, and zero understanding of memory footprints or distributed concurrency.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { title: 'Hallucination Roulette', desc: 'No ground-truth anchoring. Answers sound plausible until they corrupt critical production data.' },
                { title: 'Crippling Inference Latency', desc: '3 to 6 second roundtrips with uncompressed API calls and zero caching or quantization.' },
                { title: 'Brittle State & Dependency Drift', desc: 'Complex prompt spaghetti with no unit tests, no schema validation, and zero monitoring.' },
                { title: 'Collapses Under Concurrent Traffic', desc: 'Fails silently as soon as 10+ simultaneous requests hit the unoptimized backend.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-primary">{item.title}</h4>
                    <p className="text-xs text-secondary leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-border-subtle text-xs font-mono text-muted">
            Result: Brittle toy demos that cannot withstand production environments.
          </div>
        </div>

        {/* Right Card: Rohit's Engineered Intelligence Architecture */}
        <div
          ref={rightCardRef}
          data-cursor-label="MASTER"
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-surface-elevated via-surface to-surface-elevated border-2 border-accent/40 shadow-2xl shadow-accent/10 backdrop-blur-2xl flex flex-col justify-between hover:border-accent transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <span className="px-3.5 py-1 rounded-full bg-accent text-primary text-xs font-mono font-medium shadow-md flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Hardened Engineering Reality
              </span>
              <span className="text-xs font-mono text-accent font-bold">Rohit Shinde</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3 relative z-10">
              Architected Intelligence &amp; Verified Scale
            </h3>

            <p className="text-sm text-secondary leading-relaxed mb-8 relative z-10">
              Rooted in 4+ years of production Python full-stack engineering, a 9.45 CGPA foundation in AI &amp; Data Science, and custom SLM fine-tuning.
            </p>

            <ul className="space-y-4 mb-8 relative z-10">
              {[
                { title: 'Deterministic RAG with -42% Hallucinations', desc: 'Production LlamaIndex + ChromaDB hybrid semantic retrieval with strict curriculum grounding.' },
                { title: 'SLM Fine-Tuning (+38% Domain Accuracy)', desc: 'Domain adaptation of Gemma 3B using LoRA, QLoRA, and progressive layer unfreezing.' },
                { title: 'Sub-Second Latency (-40% Inference Time)', desc: 'High-throughput serving clusters powered by vLLM PagedAttention and continuous batching.' },
                { title: 'Resilient Cloud-Native Python Services', desc: 'Dockerized asynchronous FastAPI & Django microservices deployed on GCP Cloud Run with CI/CD.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-primary">{item.title}</h4>
                    <p className="text-xs text-secondary leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-border-subtle flex items-center justify-between relative z-10">
            <span className="text-xs font-mono text-accent font-semibold">
              Result: Predictable, scalable, low-latency intelligence.
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-md bg-surface-elevated text-primary font-bold border border-border-subtle">
              15+ Startups Shipped
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
