'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: 'power4.inOut',
            onComplete,
          });
        },
      });

      // Numerical counter from 00 to 100
      const counter = { val: 0 };
      tl.to(counter, {
        val: 100,
        duration: 1.2,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(counter.val).toString().padStart(2, '0');
          }
        },
      }, 0);

      // Loading line
      tl.to(lineRef.current, {
        scaleX: 1,
        duration: 1.2,
        ease: 'power2.inOut',
      }, 0);

      // Editorial Name Reveal
      tl.fromTo(
        nameRef.current,
        { y: 40, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' },
        0.1
      );

      // Subtitle Reveal
      tl.fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        0.3
      );

      // Hold briefly then exit
      tl.to({}, { duration: 0.25 });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#07110D] text-[#FAF9F5] flex flex-col justify-between p-8 sm:p-12 select-none"
    >
      {/* Top technical coordinates */}
      <div className="flex justify-between items-center font-mono text-[11px] tracking-widest text-[#25C98A]/70 uppercase">
        <span>LOC // 18.5204° N, 73.8567° E</span>
        <span>INDEX // 2026.04</span>
      </div>

      {/* Centerpiece title */}
      <div className="my-auto text-center max-w-3xl mx-auto">
        <h1
          ref={nameRef}
          className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-[#FAF9F5]"
        >
          ROHIT SHINDE
        </h1>
        <div
          ref={subRef}
          className="mt-4 font-mono text-xs sm:text-sm tracking-[0.3em] text-[#25C98A] uppercase"
        >
          GENAI / FULLSTACK / BUILDER
        </div>
      </div>

      {/* Bottom loading telemetry */}
      <div className="w-full max-w-md mx-auto">
        <div className="relative h-[1.5px] bg-white/10 w-full overflow-hidden mb-3">
          <div
            ref={lineRef}
            className="absolute inset-y-0 left-0 bg-[#25C98A] w-full origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
        <div className="flex justify-between items-center font-mono text-xs text-[#FAF9F5]/60">
          <span className="tracking-widest uppercase">INITIALIZING SYSTEM</span>
          <div className="font-mono text-sm text-[#25C98A] font-semibold tracking-wider">
            <span ref={counterRef}>00</span>
            <span className="text-white/40"> / 100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
