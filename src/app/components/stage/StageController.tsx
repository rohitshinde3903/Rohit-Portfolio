'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import PanelWrapper from './PanelWrapper';
import LandingPanel from './LandingPanel';
import HeroPanel from './HeroPanel';
import AboutPanel from './AboutPanel';
import ProjectsPanel from './ProjectsPanel';
import ExperiencePanel from './ExperiencePanel';
import ContactPanel from './ContactPanel';
import StageNavbar from './StageNavbar';

const STAGE_NAMES = ['LANDING', 'HERO', 'ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'];
const TOTAL_STAGES = 6;

export default function StageController() {
  const [activeStage, setActiveStage] = useState(0);
  const [triggerLandingExit, setTriggerLandingExit] = useState(false);
  const isThrottled = useRef(false);
  const touchStartY = useRef(0);

  // Check URL hash/query on mount for direct stage jumping (e.g. ?stage=1 or #hero)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const stageParam = params.get('stage');
      const hash = window.location.hash.toLowerCase();
      if (stageParam !== null) {
        const s = parseInt(stageParam, 10);
        if (!isNaN(s) && s >= 0 && s < TOTAL_STAGES) {
          setActiveStage(s);
          return;
        }
      }
      if (hash === '#hero') setActiveStage(1);
      else if (hash === '#about') setActiveStage(2);
      else if (hash === '#projects') setActiveStage(3);
      else if (hash === '#experience') setActiveStage(4);
      else if (hash === '#contact') setActiveStage(5);
    }
  }, []);

  const goToStage = useCallback((targetIndex: number) => {
    if (targetIndex >= 0 && targetIndex < TOTAL_STAGES) {
      setActiveStage(targetIndex);
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 750);
    }
  }, []);

  const nextStage = useCallback(() => {
    if (isThrottled.current) return;

    if (activeStage === 0) {
      // Trigger the 3D scattering & fly-through camera transition on LandingPanel
      isThrottled.current = true;
      setTriggerLandingExit(true);
    } else if (activeStage < TOTAL_STAGES - 1) {
      goToStage(activeStage + 1);
    }
  }, [activeStage, goToStage]);

  const prevStage = useCallback(() => {
    if (isThrottled.current) return;

    if (activeStage > 0) {
      if (activeStage === 1) {
        setTriggerLandingExit(false);
      }
      goToStage(activeStage - 1);
    }
  }, [activeStage, goToStage]);

  const handleLandingAdvance = useCallback(() => {
    setActiveStage(1);
    setTriggerLandingExit(false);
    setTimeout(() => {
      isThrottled.current = false;
    }, 600);
  }, []);

  // Wheel listener with throttle
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 25) return;
      if (isThrottled.current) return;

      if (e.deltaY > 0) {
        nextStage();
      } else {
        prevStage();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextStage, prevStage]);

  // Touch swipe listener for mobile devices
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isThrottled.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          nextStage();
        } else {
          prevStage();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextStage, prevStage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isThrottled.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        nextStage();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        prevStage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextStage, prevStage]);

  const isLightMode = activeStage === 3;

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-obsidian">
      {/* Persistent Navigation (Visible only from Hero stage onwards) */}
      <StageNavbar activeStage={activeStage} onSelectStage={goToStage} />

      {/* Floating Vertical Stage Indicator / Paginator (Visible only from Hero stage onwards) */}
      {activeStage > 0 && (
        <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[9000] hidden sm:flex flex-col items-center gap-3 select-none pointer-events-auto transition-opacity duration-500">
          {STAGE_NAMES.map((name, index) => {
            const isCurrent = index === activeStage;
            return (
              <button
                key={name}
                onClick={() => goToStage(index)}
                data-cursor-label={name}
                className="group flex items-center gap-2 p-1 focus:outline-none cursor-pointer"
                aria-label={`Jump to ${name}`}
              >
                <span
                  className={`font-mono text-[9px] tracking-wider uppercase transition-opacity duration-300 hidden group-hover:block ${
                    isLightMode ? 'text-black font-bold' : 'text-slate-100'
                  }`}
                >
                  {name}
                </span>
                <span
                  className={`transition-all duration-300 rounded-full ${
                    isCurrent
                      ? isLightMode
                        ? 'w-2 h-6 bg-zinc-950'
                        : 'w-2 h-6 bg-cyan-400 shadow-[0_0_8px_#00F0FF]'
                      : isLightMode
                      ? 'w-1.5 h-1.5 bg-black/20 hover:bg-black/60'
                      : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/60'
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Stage 0: Minimal Landing Screen (ONLY THE NAME) */}
      <PanelWrapper stageIndex={0} activeStage={activeStage} id="stage-landing">
        <LandingPanel
          onAdvance={handleLandingAdvance}
          isActive={activeStage === 0}
          triggerExit={triggerLandingExit}
        />
      </PanelWrapper>

      {/* Stage 1: Main Composite Hero (Portrait + Travelling Ticker + DIFFERENT) */}
      <PanelWrapper stageIndex={1} activeStage={activeStage} id="stage-hero">
        <HeroPanel onAdvance={() => goToStage(2)} isActive={activeStage === 1} />
      </PanelWrapper>

      {/* Stage 2: About Panel (IN PROCESS SINCE 2003) */}
      <PanelWrapper stageIndex={2} activeStage={activeStage} id="stage-about">
        <AboutPanel onAdvance={() => goToStage(3)} isActive={activeStage === 2} />
      </PanelWrapper>

      {/* Stage 3: Projects Panel (Turns White as in Sketch, 4 Selected Works) */}
      <PanelWrapper stageIndex={3} activeStage={activeStage} id="stage-projects" isLight={true}>
        <ProjectsPanel onAdvance={() => goToStage(4)} isActive={activeStage === 3} />
      </PanelWrapper>

      {/* Stage 4: Experience Panel (Turns Black again, Connected Graph) */}
      <PanelWrapper stageIndex={4} activeStage={activeStage} id="stage-experience">
        <ExperiencePanel onAdvance={() => goToStage(5)} isActive={activeStage === 4} />
      </PanelWrapper>

      {/* Stage 5: Contact Panel (LET'S BUILD SOMETHING DIFFERENT) */}
      <PanelWrapper stageIndex={5} activeStage={activeStage} id="stage-contact">
        <ContactPanel onBackToTop={() => goToStage(0)} isActive={activeStage === 5} />
      </PanelWrapper>
    </div>
  );
}
