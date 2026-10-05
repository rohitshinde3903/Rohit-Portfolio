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
    // Disable on touch / mobile devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Outer ring follows with smooth spring
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.1, ease: 'power2.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.1, ease: 'power2.out' });

    let isFirst = true;

    const onMouseMove = (e: MouseEvent) => {
      // 0ms delay hardware-accurate central dot
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
        if (customLabel) {
          setLabel(customLabel);
        } else if (target.tagName.toLowerCase() === 'a' && target.getAttribute('target') === '_blank') {
          setLabel('OPEN');
        } else if (target.closest('#projects')) {
          setLabel('VIEW');
        } else {
          setLabel('');
        }
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
      {/* Central pointer dot with mix-blend-mode */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-opacity duration-150 mix-blend-difference ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovering ? 'w-2 h-2 bg-[#25C98A]' : 'w-1.5 h-1.5 bg-white'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Trailing magnetic ring with contextual pill label */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovering && label
            ? 'w-20 h-20 bg-[#0B3D2E]/90 border border-[#25C98A] text-[#FAF9F5] shadow-xl flex items-center justify-center scale-100'
            : isHovering
            ? 'w-12 h-12 border-2 border-[#25C98A] bg-[#25C98A]/10 scale-110'
            : 'w-8 h-8 border border-[#111111]/30 dark:border-white/30 scale-100'
        }`}
        style={{ willChange: 'transform' }}
      >
        {label && isHovering && (
          <span className="font-mono text-[9px] text-[#25C98A] font-bold tracking-widest uppercase select-none">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
