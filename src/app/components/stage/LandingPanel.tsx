'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/app/data/portfolioData';

interface LandingPanelProps {
  onAdvance: () => void;
  isActive: boolean;
  triggerExit?: boolean;
}

interface CharacterTrajectory {
  char: string;
  // Phase 1 (0.0s - 0.7s): Separation & 3D tilt
  p1: { x: number; y: number; z: number; rx: number; ry: number; rz: number; scale: number };
  // Phase 2 (0.7s - 1.85s): Extreme acceleration toward camera/face & passing through
  p2: { x: number; y: number; z: number; rx: number; ry: number; rz: number; scale: number };
  delay: number;
}

// Handcrafted 3D trajectory matrix for "ROHIT SHINDE"
const TRAJECTORIES_ROHIT: CharacterTrajectory[] = [
  {
    char: 'R',
    p1: { x: -90, y: -45, z: 260, rx: 25, ry: -35, rz: -18, scale: 1.5 },
    p2: { x: -440, y: -260, z: 1300, rx: 65, ry: -75, rz: -45, scale: 11 },
    delay: 0.02,
  },
  {
    char: 'O',
    p1: { x: -45, y: -80, z: 310, rx: 35, ry: -20, rz: -12, scale: 1.7 },
    p2: { x: -220, y: -380, z: 1500, rx: 80, ry: -30, rz: -25, scale: 12.5 },
    delay: 0.05,
  },
  {
    char: 'H',
    p1: { x: 0, y: -105, z: 350, rx: 45, ry: 0, rz: 8, scale: 1.8 },
    p2: { x: 0, y: -450, z: 1650, rx: 90, ry: 10, rz: 15, scale: 14 },
    delay: 0.09,
  },
  {
    char: 'I',
    p1: { x: 45, y: -75, z: 300, rx: 35, ry: 25, rz: 15, scale: 1.6 },
    p2: { x: 230, y: -350, z: 1450, rx: 75, ry: 45, rz: 30, scale: 11.5 },
    delay: 0.04,
  },
  {
    char: 'T',
    p1: { x: 95, y: -40, z: 250, rx: 20, ry: 40, rz: 22, scale: 1.5 },
    p2: { x: 440, y: -240, z: 1250, rx: 55, ry: 75, rz: 50, scale: 10.5 },
    delay: 0.07,
  },
];

const TRAJECTORIES_SHINDE: CharacterTrajectory[] = [
  {
    char: 'S',
    p1: { x: -105, y: 40, z: 270, rx: -25, ry: -35, rz: -22, scale: 1.6 },
    p2: { x: -470, y: 240, z: 1350, rx: -65, ry: -70, rz: -52, scale: 11 },
    delay: 0.03,
  },
  {
    char: 'H',
    p1: { x: -60, y: 75, z: 320, rx: -35, ry: -20, rz: -15, scale: 1.7 },
    p2: { x: -270, y: 360, z: 1550, rx: -80, ry: -35, rz: -30, scale: 12.5 },
    delay: 0.07,
  },
  {
    char: 'I',
    p1: { x: -20, y: 100, z: 360, rx: -45, ry: -10, rz: -8, scale: 1.9 },
    p2: { x: -100, y: 440, z: 1700, rx: -90, ry: -15, rz: -15, scale: 14.5 },
    delay: 0.11,
  },
  {
    char: 'N',
    p1: { x: 25, y: 100, z: 360, rx: -45, ry: 10, rz: 10, scale: 1.9 },
    p2: { x: 100, y: 440, z: 1700, rx: -90, ry: 15, rz: 15, scale: 14.5 },
    delay: 0.1,
  },
  {
    char: 'D',
    p1: { x: 65, y: 70, z: 310, rx: -30, ry: 25, rz: 18, scale: 1.7 },
    p2: { x: 280, y: 350, z: 1500, rx: -75, ry: 40, rz: 35, scale: 12 },
    delay: 0.05,
  },
  {
    char: 'E',
    p1: { x: 105, y: 35, z: 260, rx: -20, ry: 40, rz: 25, scale: 1.5 },
    p2: { x: 450, y: 220, z: 1300, rx: -55, ry: 70, rz: 55, scale: 10.5 },
    delay: 0.04,
  },
];

export default function LandingPanel({ onAdvance, isActive, triggerExit = false }: LandingPanelProps) {
  const { personal } = portfolioData;
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Parse words from personal.name
  const words = useMemo(() => {
    const raw = personal.name || 'ROHIT SHINDE';
    const split = raw.split(' ');
    return {
      first: split[0] || 'ROHIT',
      last: split.slice(1).join(' ') || 'SHINDE',
    };
  }, [personal.name]);

  // Match trajectory items to word characters
  const firstWordItems = useMemo(() => {
    return words.first.split('').map((c, i) => {
      const match = TRAJECTORIES_ROHIT[i] || {
        char: c,
        p1: { x: (i - 2) * 40, y: -60, z: 280, rx: 30, ry: (i - 2) * 15, rz: (i - 2) * 10, scale: 1.6 },
        p2: { x: (i - 2) * 180, y: -300, z: 1400, rx: 70, ry: (i - 2) * 30, rz: (i - 2) * 20, scale: 11 },
        delay: i * 0.03,
      };
      return { ...match, char: c };
    });
  }, [words.first]);

  const lastWordItems = useMemo(() => {
    return words.last.split('').map((c, i) => {
      const match = TRAJECTORIES_SHINDE[i] || {
        char: c,
        p1: { x: (i - 2.5) * 40, y: 60, z: 280, rx: -30, ry: (i - 2.5) * 15, rz: (i - 2.5) * 10, scale: 1.6 },
        p2: { x: (i - 2.5) * 180, y: 300, z: 1400, rx: -70, ry: (i - 2.5) * 30, rz: (i - 2.5) * 20, scale: 11 },
        delay: i * 0.03,
      };
      return { ...match, char: c };
    });
  }, [words.last]);

  const startTransition = useCallback(() => {
    if (isTransitioning || !isActive) return;
    setIsTransitioning(true);
  }, [isTransitioning, isActive]);

  // Handle external trigger (from scroll, touch, or keyboard via StageController)
  useEffect(() => {
    if (triggerExit && !isTransitioning && isActive) {
      startTransition();
    }
  }, [triggerExit, isTransitioning, isActive, startTransition]);

  // Complete the 3D transition after 1.85s of continuous camera movement
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        onAdvance();
      }, 1850);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, onAdvance]);

  // Reverse support: reset when returning back to LandingPanel from Hero
  useEffect(() => {
    if (isActive && !triggerExit) {
      setIsTransitioning(false);
    }
  }, [isActive, triggerExit]);

  return (
    <div
      onClick={startTransition}
      className="relative w-full h-full flex flex-col items-center justify-center select-none cursor-pointer overflow-hidden bg-obsidian"
      style={{
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
      }}
      data-cursor-label="ENTER"
    >
      {/* 
        Background layer:
        Starts solid #08080A.
        During the final phase of the transition (1.4s - 1.85s),
        fades to 0 to seamlessly uncover the HeroPanel behind it.
      */}
      <motion.div
        initial={false}
        animate={
          isTransitioning
            ? { opacity: [1, 1, 0] }
            : { opacity: 1 }
        }
        transition={
          isTransitioning
            ? { duration: 1.85, times: [0, 0.75, 1], ease: 'easeInOut' }
            : { duration: 0.4 }
        }
        className="absolute inset-0 bg-obsidian pointer-events-none z-0"
      />

      {/* 
        3D Stage: ONLY THE NAME in Syne brutalist typography.
        No metadata, no headers, no subtext, no arrows, no buttons.
        Clean cinematic negative space.
      */}
      <div
        className="relative z-10 flex flex-col items-center justify-center space-y-1 sm:space-y-3 pointer-events-none px-4"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Word 1: ROHIT */}
        <div
          className="flex items-center justify-center flex-nowrap"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {firstWordItems.map((item, idx) => (
            <motion.span
              key={`first-${idx}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={
                isTransitioning
                  ? {
                      x: [0, item.p1.x, item.p2.x],
                      y: [0, item.p1.y, item.p2.y],
                      z: [0, item.p1.z, item.p2.z],
                      scale: [1, item.p1.scale, item.p2.scale],
                      rotateX: [0, item.p1.rx, item.p2.rx],
                      rotateY: [0, item.p1.ry, item.p2.ry],
                      rotateZ: [0, item.p1.rz, item.p2.rz],
                      opacity: [1, 1, 0],
                      filter: ['blur(0px)', 'blur(0px)', 'blur(16px)'],
                    }
                  : {
                      x: 0,
                      y: 0,
                      z: 0,
                      scale: 1,
                      rotateX: 0,
                      rotateY: 0,
                      rotateZ: 0,
                      opacity: 1,
                      filter: 'blur(0px)',
                    }
              }
              transition={
                isTransitioning
                  ? {
                      duration: 1.8,
                      delay: item.delay,
                      times: [0, 0.38, 1],
                      ease: ['easeInOut', 'easeIn'],
                    }
                  : {
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
              style={{
                transformStyle: 'preserve-3d',
                display: 'inline-block',
                transformOrigin: '50% 50%',
                willChange: 'transform, opacity, filter',
              }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-display font-black text-white tracking-tighter leading-none mx-0.5 sm:mx-1 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            >
              {item.char}
            </motion.span>
          ))}
        </div>

        {/* Word 2: SHINDE */}
        <div
          className="flex items-center justify-center flex-nowrap"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {lastWordItems.map((item, idx) => (
            <motion.span
              key={`last-${idx}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={
                isTransitioning
                  ? {
                      x: [0, item.p1.x, item.p2.x],
                      y: [0, item.p1.y, item.p2.y],
                      z: [0, item.p1.z, item.p2.z],
                      scale: [1, item.p1.scale, item.p2.scale],
                      rotateX: [0, item.p1.rx, item.p2.rx],
                      rotateY: [0, item.p1.ry, item.p2.ry],
                      rotateZ: [0, item.p1.rz, item.p2.rz],
                      opacity: [1, 1, 0],
                      filter: ['blur(0px)', 'blur(0px)', 'blur(16px)'],
                    }
                  : {
                      x: 0,
                      y: 0,
                      z: 0,
                      scale: 1,
                      rotateX: 0,
                      rotateY: 0,
                      rotateZ: 0,
                      opacity: 1,
                      filter: 'blur(0px)',
                    }
              }
              transition={
                isTransitioning
                  ? {
                      duration: 1.8,
                      delay: item.delay,
                      times: [0, 0.38, 1],
                      ease: ['easeInOut', 'easeIn'],
                    }
                  : {
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
              style={{
                transformStyle: 'preserve-3d',
                display: 'inline-block',
                transformOrigin: '50% 50%',
                willChange: 'transform, opacity, filter',
              }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-display font-black text-white tracking-tighter leading-none mx-0.5 sm:mx-1 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            >
              {item.char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}