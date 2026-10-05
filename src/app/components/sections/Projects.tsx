'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HandwrittenNote from '../ui/HandwrittenNote';
import { ArrowUpRight, Github, ExternalLink, Smartphone, Globe, Radio, Shield, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const p1Ref = useRef<HTMLDivElement>(null);
  const p2Ref = useRef<HTMLDivElement>(null);
  const p3Ref = useRef<HTMLDivElement>(null);
  const p4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
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

      // Projects reveals
      [p1Ref.current, p2Ref.current, p3Ref.current, p4Ref.current].forEach((proj) => {
        if (!proj) return;
        gsap.fromTo(
          proj,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: proj, start: 'top 85%' },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 sm:py-44 px-6 sm:px-12 bg-paper text-ink border-t border-paper-border relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6 border-b border-paper-border pb-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-ink-muted uppercase tracking-widest mb-4">
              <span>05 / SELECTED RELEASES</span>
              <span className="w-10 h-[1px] bg-paper-border" />
              <HandwrittenNote rotate={-3}>
                production grade
              </HandwrittenNote>
            </div>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-ink font-normal uppercase">
              SELECTED <span className="italic text-emerald-deep font-serif">WORK.</span>
            </h2>
          </div>
          <p className="text-ink-muted max-w-sm text-sm font-sans leading-relaxed">
            Every project is conceived as an interactive digital story — blending software engineering, generative AI, and tactile product design.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-32 sm:space-y-44">
          
          {/* ========================================================================= */}
          {/* PROJECT 01: PROFO */}
          {/* ========================================================================= */}
          <div ref={p1Ref} className="relative group">
            {/* Metadata bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-ink-muted pb-4 border-b border-paper-border mb-8">
              <span className="text-emerald-deep font-bold">01 / SOCIAL PLATFORM &bull; 2024</span>
              <span>DJANGO &bull; PYTHON &bull; REST APIS &bull; POSTGRESQL</span>
              <span className="text-ink">STATUS // LIVE PRODUCTION</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left narrative (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-4xl sm:text-6xl text-ink font-normal tracking-tight">
                    PROFO
                  </h3>
                  <HandwrittenNote rotate={-4}>
                    unified identity
                  </HandwrittenNote>
                </div>

                <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-light">
                  A social-profile and personal identity management platform designed to consolidate an engineer&apos;s digital presence, verified portfolios, and GitHub milestones into a single authenticated, privacy-controlled public link.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['Django Backend', 'Python', 'REST APIs', 'PostgreSQL', 'Tailwind UI', 'Auth & Security'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-paper-card border border-paper-border font-mono text-[11px] text-ink-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="https://profoui.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="OPEN"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-deep hover:bg-dark text-paper text-xs font-mono font-semibold transition-all shadow-md"
                  >
                    <span>EXPLORE PROJECT</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/rohitshinde3903/PROFO.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="CODE"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-paper-border hover:bg-white text-ink font-mono text-xs transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>SOURCE</span>
                  </a>
                </div>
              </div>

              {/* Right Floating Browser UI (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl bg-paper-card border border-paper-border p-4 sm:p-6 shadow-2xl shadow-black/5 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
                  {/* Browser chrome header */}
                  <div className="flex items-center justify-between pb-4 border-b border-paper-border mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#E05D52]" />
                      <span className="w-3 h-3 rounded-full bg-[#E6A23C]" />
                      <span className="w-3 h-3 rounded-full bg-[#53C41A]" />
                    </div>
                    <span className="font-mono text-[11px] text-ink-muted">
                      https://profo.app/@rohitshinde
                    </span>
                    <Globe className="w-4 h-4 text-ink-muted" />
                  </div>

                  {/* Browser viewport image */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-white border border-paper-border">
                    <Image
                      src="/images/profo.png"
                      alt="PROFO Platform Interface"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PROJECT 02: StonesReviewsAI */}
          {/* ========================================================================= */}
          <div ref={p2Ref} className="relative group">
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-ink-muted pb-4 border-b border-paper-border mb-8">
              <span className="text-emerald-deep font-bold">02 / AI PRODUCT &bull; 2025</span>
              <span>NFC HARDWARE &bull; QR CODES &bull; LLM ENGINE &bull; NEXT.JS</span>
              <span className="text-ink">STATUS // DEPLOYED AT VENUES</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Phone / NFC Physical-to-Digital Flow Visual (7 cols) */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="rounded-3xl bg-[#0D1E17] text-[#FAF9F5] p-6 sm:p-8 border border-[#25C98A]/20 shadow-2xl relative overflow-hidden">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6 font-mono text-xs text-[#25C98A]">
                    <span className="flex items-center gap-1.5">
                      <Radio className="w-4 h-4 animate-pulse" />
                      PHYSICAL NFC TAP DETECTED
                    </span>
                    <span>13.56 MHz RFID</span>
                  </div>

                  {/* Visual Steps representation */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[#25C98A] block mb-1">01 / TAP</span>
                      <h4 className="font-serif text-lg text-white mb-2 font-normal">NFC Contact</h4>
                      <p className="text-white/60 text-[11px] leading-relaxed">Customer taps venue puck on physical counter.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[#25C98A] block mb-1">02 / PROMPT</span>
                      <h4 className="font-serif text-lg text-white mb-2 font-normal">AI Synthesis</h4>
                      <p className="text-white/60 text-[11px] leading-relaxed">Contextual LLM transforms key sentiments into reviews.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-[#25C98A]/40 bg-[#25C98A]/10">
                      <span className="text-[#25C98A] block mb-1">03 / PUBLISH</span>
                      <h4 className="font-serif text-lg text-white mb-2 font-normal">1-Click Post</h4>
                      <p className="text-white/60 text-[11px] leading-relaxed">Direct routing to verified Google Business profiles.</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center font-mono text-xs text-white/50">
                    <span>HARDWARE × SOFTWARE CONVERGENCE</span>
                    <span className="text-[#25C98A]">98.4% RETENTION</span>
                  </div>
                </div>
              </div>

              {/* Right narrative (5 cols) */}
              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-4xl sm:text-6xl text-ink font-normal tracking-tight">
                    StonesReviewsAI
                  </h3>
                  <HandwrittenNote rotate={4}>
                    physical &times; AI
                  </HandwrittenNote>
                </div>

                <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-light">
                  An end-to-end AI review acquisition experience combining physical NFC counter pucks and QR codes. Customers tap their phone, select their sentiment tags, and an automated generative engine drafts tailored, natural review options ready for 1-click publishing.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['NFC Architecture', 'Generative Prompts', 'FastAPI Backend', 'Google Maps API', 'Offline Fallback'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-paper-card border border-paper-border font-mono text-[11px] text-ink-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="https://stonesacademy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="OPEN"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-deep hover:bg-dark text-paper text-xs font-mono font-semibold transition-all shadow-md"
                  >
                    <span>EXPLORE PLATFORM</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PROJECT 03: FASTCLICK */}
          {/* ========================================================================= */}
          <div ref={p3Ref} className="relative group">
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-ink-muted pb-4 border-b border-paper-border mb-8">
              <span className="text-emerald-deep font-bold">03 / MOBILE DRIVER WORKFLOW &bull; 2025</span>
              <span>REACT NATIVE &bull; ANDROID ARCHITECTURE &bull; MAPS GPS &bull; WEBSOCKETS</span>
              <span className="text-ink">STATUS // FLEET ACTIVE</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left narrative (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-4xl sm:text-6xl text-ink font-normal tracking-tight">
                    FASTCLICK
                  </h3>
                  <HandwrittenNote rotate={-3}>
                    sub-second dispatch
                  </HandwrittenNote>
                </div>

                <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-light">
                  A high-velocity mobile driver dispatch application engineered for ride-hailing workflows. Features real-time GPS telemetry, background battery optimization, instant ride accept mechanics, route optimization, and live earnings reconciliation.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['React Native', 'Android Engine', 'WebSockets', 'Map Telemetry', 'Background Services', 'Real-Time Sync'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-paper-card border border-paper-border font-mono text-[11px] text-ink-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.Vidya_AI.app&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="APP"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-deep hover:bg-dark text-paper text-xs font-mono font-semibold transition-all shadow-md"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>PLAY STORE</span>
                  </a>
                  <a
                    href="https://github.com/rohitshinde3903"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="CODE"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-paper-border hover:bg-white text-ink font-mono text-xs transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>CODE REPO</span>
                  </a>
                </div>
              </div>

              {/* Right Mockup Phone Interface (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl bg-paper-card border border-paper-border p-6 shadow-2xl relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-paper border border-paper-border">
                    <Image
                      src="/images/vidyaai-app.jpg"
                      alt="Mobile App Interface"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PROJECT 04: INTELLIGENCE LAB (VidyaAI & Edge SLMs) */}
          {/* ========================================================================= */}
          <div ref={p4Ref} id="lab" className="relative group">
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-ink-muted pb-4 border-b border-paper-border mb-8">
              <span className="text-emerald-deep font-bold">04 / INTELLIGENCE LAB &bull; 2025 – 2026</span>
              <span>GEMMA 3B &bull; LoRA &bull; CHROMADB &bull; LLAMAINDEX &bull; vLLM &bull; GCP</span>
              <span className="text-ink">STATUS // PRODUCTION SYSTEM</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Terminal Window (7 cols) */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="rounded-3xl bg-[#07110D] text-[#FAF9F5] p-6 sm:p-8 border border-[#25C98A]/30 shadow-2xl relative overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs text-[#25C98A]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#25C98A] animate-pulse" />
                      <span>VIDYAAI // SLM RETRIEVAL ENGINE</span>
                    </div>
                    <span className="text-white/50">vLLM PAGEDATTENTION</span>
                  </div>

                  {/* Code & Terminal Telemetry */}
                  <div className="font-mono text-xs space-y-3 leading-relaxed text-white/80">
                    <div className="text-[#25C98A]">
                      &gt; model = AutoModelForCausalLM.from_pretrained(&quot;google/gemma-3b&quot;)
                    </div>
                    <div className="text-white/60">
                      &gt; peft_config = LoraConfig(r=16, lora_alpha=32, target_modules=[&quot;q_proj&quot;, &quot;v_proj&quot;])
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 my-4 text-[11px] text-[#FAF9F5]">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-white/60">DOMAIN ACCURACY:</span>
                        <span className="text-[#25C98A] font-bold">+38% (LoRA Tuned)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-white/60">HALLUCINATIONS:</span>
                        <span className="text-[#25C98A] font-bold">-42% (Curriculum RAG)</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-white/60">INFERENCE LATENCY:</span>
                        <span className="text-[#25C98A] font-bold">-40% (Continuous Batching)</span>
                      </div>
                    </div>
                    <div className="text-[#25C98A]/80">
                      [OK] 100% Deterministic context grounded. Zero drift detected.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right narrative (5 cols) */}
              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-4xl sm:text-6xl text-ink font-normal tracking-tight">
                    Intelligence Lab
                  </h3>
                  <HandwrittenNote rotate={-2}>
                    hardened AI
                  </HandwrittenNote>
                </div>

                <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-light">
                  Inside the engineer&apos;s laboratory: end-to-end SLM fine-tuning and deterministic vector retrieval architectures. Built with dynamic multi-provider model switching (OpenAI, Claude, Gemini, and custom local weights), allowing schools and enterprises to achieve high factual compliance at sub-second response times.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['Gemma 3B', 'LoRA / QLoRA', 'LlamaIndex', 'ChromaDB', 'vLLM Engine', 'GCP Cloud Run'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-paper-card border border-paper-border font-mono text-[11px] text-ink-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="https://vidyaai.eduaihub.in/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="OPEN"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-deep hover:bg-dark text-paper text-xs font-mono font-semibold transition-all shadow-md"
                  >
                    <span>LAUNCH VIDYAAI</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
