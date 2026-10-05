'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HandwrittenNote from '../ui/HandwrittenNote';
import { MapPin, Sparkles, GraduationCap, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HumanBehindCode() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
          scrollTrigger: { trigger: headlineRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        textColRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: textColRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 85%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      data-theme="dark"
      className="py-32 sm:py-44 px-6 sm:px-12 bg-[#07110D] text-[#FAF9F5] border-t border-[#25C98A]/20 relative overflow-hidden"
    >
      {/* Background radial emerald aura */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#25C98A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#25C98A] uppercase tracking-widest mb-12">
          <span>06 / PHILOSOPHY &amp; ETHOS</span>
          <span className="w-10 h-[1px] bg-white/10" />
          <HandwrittenNote rotate={-3} className="text-[#25C98A]">
            the human element
          </HandwrittenNote>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Large Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h2
              ref={headlineRef}
              className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight uppercase text-white font-normal"
            >
              THE HUMAN <br />
              <span className="italic text-[#25C98A] font-serif">
                BEHIND THE CODE.
              </span>
            </h2>

            <div ref={textColRef} className="space-y-6 text-[#FAF9F5]/80 text-base sm:text-lg leading-relaxed font-sans font-light">
              <p>
                Code is simply the translation layer between imagination and reality. Before fine-tuning models or deploying distributed microservices, my driving force was pure curiosity — taking computers apart, breaking systems to understand their failure boundaries, and obsessing over why things work.
              </p>
              <p>
                In the age of autonomous intelligence, anyone can prompt an AI to write a demo. But real engineering is about resilience: building systems that don&apos;t hallucinate, services that don&apos;t fail under peak load, and products that genuinely change how people learn and work.
              </p>
              <p className="text-sm font-mono text-[#25C98A]">
                &gt; Founded Stones Web Services at 19 &bull; Delivered 15+ startups &bull; 9.45 CGPA Distinction in AI &amp; Data Science.
              </p>
            </div>

            {/* Handwritten Note Callout */}
            <div className="pt-4">
              <HandwrittenNote rotate={4} arrow="left" className="text-[#25C98A] text-lg">
                &ldquo;ship it, measure it, refine it&rdquo;
              </HandwrittenNote>
            </div>
          </div>

          {/* Right Portrait Dossier (5 cols) */}
          <div ref={imageRef} className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0D1E17] border border-[#25C98A]/20 shadow-2xl relative overflow-hidden">
              {/* Photo frame */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/40">
                <Image
                  src="/images/image.png"
                  alt="Rohit Shinde"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Bio Details */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <span className="text-white/50">NAME</span>
                  <span className="text-white font-bold text-sm font-serif">Rohit Shinde</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <span className="text-white/50">ROLE</span>
                  <span className="text-[#25C98A]">GenAI Architect</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <span className="text-white/50">LOCATION</span>
                  <span className="text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#25C98A]" /> Pune, India
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-white/50">ACADEMICS</span>
                  <span className="text-[#25C98A] font-bold">9.45 CGPA &bull; B.Tech AI &amp; DS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
