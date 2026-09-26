'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string>('');
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad), not touch
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use gsap.quickTo for instant, zero-lag fluid tracking
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power2.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power2.out' });

    let firstMove = true;

    const onMouseMove = (e: MouseEvent) => {
      if (firstMove) {
        firstMove = false;
        setIsVisible(true);
        // Position directly without transition on first frame
        gsap.set(cursor, { x: e.clientX, y: e.clientY });
      } else {
        xTo(e.clientX);
        yTo(e.clientY);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Contextual hover inspector
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
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${
        isHovering
          ? label
            ? 'w-16 h-16 bg-white text-black font-mono text-[10px] font-bold tracking-wider flex items-center justify-center shadow-xl shadow-black/40 scale-100'
            : 'w-10 h-10 border border-accent bg-accent/15 backdrop-blur-[2px] scale-110'
          : 'w-7 h-7 border border-white/40 bg-white/5'
      }`}
      style={{ willChange: 'transform' }}
    >
      {label && isHovering && (
        <span className="uppercase select-none">
          {label}
        </span>
      )}
    </div>
  );
}
