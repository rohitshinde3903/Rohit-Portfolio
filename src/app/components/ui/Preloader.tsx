'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

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

      // Counter animation
      const counter = { val: 0 };
      tl.to(counter, {
        val: 100,
        duration: 1.2,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(counter.val).toString().padStart(3, '0');
          }
        },
      }, 0);

      // Loading bar
      tl.to(barRef.current, {
        scaleX: 1,
        duration: 1.2,
        ease: 'power2.inOut',
      }, 0);

      // Name letters staggered reveal
      if (nameRef.current) {
        const letters = nameRef.current.querySelectorAll('.letter');
        tl.fromTo(
          letters,
          { y: 80, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.04,
            ease: 'power3.out',
          },
          0.1
        );
      }

      // Subtitle reveal
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        0.8
      );

      // Hold then exit
      tl.to({}, { duration: 0.5 });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  const name = 'ROHIT SHINDE';

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center"
    >
      {/* Name */}
      <div ref={nameRef} className="flex items-center gap-[2px] mb-4" style={{ perspective: '600px' }}>
        {name.split('').map((char, i) => (
          <span
            key={i}
            className="letter inline-block font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-text-primary tracking-tight"
            style={{ transformOrigin: 'bottom center' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>

      {/* Subtitle */}
      <div ref={subtitleRef} className="font-mono text-xs text-text-muted tracking-[0.3em] uppercase mb-12">
        GenAI Architect • Systems Engineer
      </div>

      {/* Loading bar */}
      <div className="w-48 sm:w-64 relative">
        <div className="h-[1px] bg-border-dim w-full" />
        <div
          ref={barRef}
          className="absolute top-0 left-0 h-[1px] bg-accent w-full origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
        <div className="flex justify-between mt-3">
          <span className="font-mono text-[10px] text-text-dim tracking-widest">LOADING</span>
          <span ref={counterRef} className="font-mono text-[10px] text-accent tracking-widest">
            000
          </span>
        </div>
      </div>
    </div>
  );
}
