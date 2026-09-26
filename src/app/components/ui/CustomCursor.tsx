'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [label, setLabel] = useState<string>('');
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad), not touch
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setIsEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Use fast lerping with quickSetter for high performance
    const setCursorX = gsap.quickSetter(cursor, 'x', 'px');
    const setCursorY = gsap.quickSetter(cursor, 'y', 'px');
    const setDotX = gsap.quickSetter(dot, 'x', 'px');
    const setDotY = gsap.quickSetter(dot, 'y', 'px');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDotX(mouseX);
      setDotY(mouseY);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Contextual hover inspector
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-cursor], a, button, [role="button"]');
      if (target) {
        setIsHovering(true);
        const customLabel = target.getAttribute('data-cursor-label');
        if (customLabel) {
          setLabel(customLabel);
        } else {
          setLabel('');
        }
      } else {
        setIsHovering(false);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);

    // RAF loop for buttery smooth cursor follower
    let rafId: number;
    const loop = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;
      setCursorX(currentX);
      setCursorY(currentY);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* Central precise micro dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />

      {/* Outer fluid aura ring with contextual label */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center transition-all duration-200 ease-out select-none ${
          isHovering
            ? label
              ? 'w-16 h-16 -ml-8 -mt-8 bg-white text-black font-mono text-[10px] font-bold tracking-wider shadow-lg shadow-black/50'
              : 'w-12 h-12 -ml-6 -mt-6 border border-white/60 bg-white/10 backdrop-blur-[2px]'
            : 'w-8 h-8 -ml-4 -mt-4 border border-white/30 bg-transparent'
        } ${isClicking ? 'scale-75' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      >
        {label && (
          <span ref={labelRef} className="animate-fade-in uppercase">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
