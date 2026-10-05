'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad), not touch screens
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Outer ring follows with an ultra-responsive 0.08s spring
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.08, ease: 'power2.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.08, ease: 'power2.out' });

    let isFirst = true;

    const onMouseMove = (e: MouseEvent) => {
      // Direct hardware-matched positioning with zero latency
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;

      if (isFirst) {
        isFirst = false;
        setIsVisible(true);
        gsap.set(ring, { x: e.clientX, y: e.clientY });
      } else {
        ringX(e.clientX);
        ringY(e.clientY);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-cursor-label], [data-cursor], a, button');
      if (target) {
        setIsHovering(true);
        const customLabel = target.getAttribute('data-cursor-label');
        setLabel(customLabel || '');
      } else {
        setIsHovering(false);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      {/* Zero-latency precision pointer dot (exact pixel alignment) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovering ? 'w-2 h-2 bg-accent shadow-sm shadow-accent' : 'w-1.5 h-1.5 bg-white'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Smooth, low-latency magnetic aura ring with high-contrast label */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovering && label
            ? 'w-20 h-20 bg-accent/20 border border-accent/70 backdrop-blur-[2px] flex items-center justify-center shadow-lg shadow-accent/30'
            : isHovering
            ? 'w-11 h-11 border border-accent/60 bg-accent/15'
            : 'w-7 h-7 border border-white/30 bg-white/[0.02]'
        }`}
        style={{ willChange: 'transform' }}
      >
        {label && isHovering && (
          <span className="font-mono text-[9px] text-white font-bold tracking-widest uppercase select-none drop-shadow">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
