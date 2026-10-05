'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PanelWrapperProps {
  stageIndex: number;
  activeStage: number;
  children: React.ReactNode;
  className?: string;
  id?: string;
  isLight?: boolean;
}

export default function PanelWrapper({
  stageIndex,
  activeStage,
  children,
  className = '',
  id,
  isLight = false,
}: PanelWrapperProps) {
  const isCurrent = stageIndex === activeStage;
  const isPast = stageIndex < activeStage;
  const isFuture = stageIndex > activeStage;

  // Stacking depth calculation for past panels
  const depthDiff = activeStage - stageIndex;
  const pastScale = Math.max(0.92, 1 - depthDiff * 0.04);
  const pastOpacity = Math.max(0.15, 0.4 - depthDiff * 0.1);

  // Cinematic Layering Architecture:
  // - Stage 0 (Landing) is the entrance layer (z-index: 40).
  // - Stage 1 (Hero) sits directly behind Landing (z-index: 20, y: 0).
  // - When Landing scatters, Hero is revealed underneath.
  // - Stages 2-5 (About, Projects, Experience, Contact) rise up as physical cards from y: 100% to y: 0%.
  let yPosition = '0%';
  let zIndex = 10;
  let panelOpacity = 1;

  if (stageIndex === 0) {
    zIndex = 40;
    yPosition = '0%';
    panelOpacity = activeStage === 0 ? 1 : 0;
  } else if (stageIndex === 1) {
    zIndex = 20;
    yPosition = '0%';
    panelOpacity = isPast ? pastOpacity : 1;
  } else {
    zIndex = 20 + stageIndex * 10;
    yPosition = isFuture ? '100%' : '0%';
    panelOpacity = isCurrent ? 1 : isPast ? pastOpacity : 1;
  }

  // When stageIndex > 0 (Hero, About, Projects, Experience, Contact), StageNavbar is fixed at the top (h-20 = 80px).
  // The section content starts directly from the bottom edge of the navbar.
  const navbarSpacingClass = stageIndex > 0 ? 'pt-20' : '';

  return (
    <motion.section
      id={id}
      initial={false}
      animate={{
        y: yPosition,
        scale: isCurrent ? 1 : isPast ? pastScale : 1,
        opacity: panelOpacity,
        filter: isPast ? 'brightness(0.6)' : 'brightness(1)',
      }}
      transition={{
        duration: 0.85,
        ease: [0.19, 1, 0.22, 1], // Smooth physical luxury cubic bezier
      }}
      style={{
        zIndex,
        pointerEvents: isCurrent ? 'auto' : 'none',
      }}
      className={`fixed inset-0 w-full h-[100dvh] overflow-hidden flex flex-col ${
        stageIndex === 0 ? 'justify-center' : 'justify-start'
      } shadow-2xl ${
        isLight ? 'bg-canvasLight text-zinc-950' : 'bg-obsidian text-slate-100'
      } ${navbarSpacingClass} ${className}`}
    >
      {/* Subtle top edge border shadow simulating physical card edge on rising panels */}
      {stageIndex > 1 && (
        <div
          className={`absolute top-0 left-0 right-0 h-[1px] pointer-events-none ${
            isLight ? 'bg-black/10 shadow-sm' : 'bg-white/10 shadow-sm'
          }`}
        />
      )}

      {children}
    </motion.section>
  );
}
