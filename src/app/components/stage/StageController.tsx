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
import ProjectDetailModal from './ProjectDetailModal';
import { portfolioData } from '@/app/data/portfolioData';

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

  const [aboutCardStep, setAboutCardStep] = useState(1);
  const [projectModalIndex, setProjectModalIndex] = useState<number | null>(null);
  const [experienceStep, setExperienceStep] = useState(1);
  const TOTAL_EXPERIENCE_STEPS = portfolioData.experience.length;

  const goToStage = useCallback((targetIndex: number) => {
    if (targetIndex >= 0 && targetIndex < TOTAL_STAGES) {
      if (targetIndex === 2) {
        // If coming backwards from Projects (3), show all 4 cards; otherwise start from card 1
        setAboutCardStep((prev) => (activeStage > 2 ? 4 : 1));
      }
      if (targetIndex !== 3) {
        setProjectModalIndex(null);
      }
      if (targetIndex === 4) {
        // If coming backwards from Contact (5), show all 5 experiences; otherwise start at 1
        setExperienceStep((prev) => (activeStage > 4 ? TOTAL_EXPERIENCE_STEPS : 1));
      }
      setActiveStage(targetIndex);
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 750);
    }
  }, [activeStage, TOTAL_EXPERIENCE_STEPS]);

  const handleSkipProjects = useCallback(() => {
    setProjectModalIndex(null);
    goToStage(4);
  }, [goToStage]);

  const handleSkipExperience = useCallback(() => {
    setExperienceStep(TOTAL_EXPERIENCE_STEPS);
    goToStage(5);
  }, [goToStage, TOTAL_EXPERIENCE_STEPS]);

  const nextStage = useCallback(() => {
    if (isThrottled.current) return;

    if (activeStage === 0) {
      // Trigger the 3D scattering & fly-through camera transition on LandingPanel
      isThrottled.current = true;
      setTriggerLandingExit(true);
    } else if (activeStage === 2 && aboutCardStep < 4) {
      // On About stage, reveal cards 1 -> 2 -> 3 -> 4 one by one on scroll
      setAboutCardStep((prev) => Math.min(4, prev + 1));
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 450);
    } else if (activeStage === 3) {
      // On Projects stage, open and step through project modals one by one
      if (projectModalIndex === null) {
        // First scroll on Projects page opens modal for Project 01
        setProjectModalIndex(0);
        isThrottled.current = true;
        setTimeout(() => {
          isThrottled.current = false;
        }, 450);
      } else if (projectModalIndex < 3) {
        // Scroll steps to next project (01 -> 02 -> 03 -> 04)
        setProjectModalIndex((prev) => (prev !== null ? prev + 1 : 0));
        isThrottled.current = true;
        setTimeout(() => {
          isThrottled.current = false;
        }, 450);
      } else {
        // After project 04 is finished, advance to Experience
        setProjectModalIndex(null);
        goToStage(4);
      }
    } else if (activeStage === 4 && experienceStep < TOTAL_EXPERIENCE_STEPS) {
      // On Experience stage, reveal experience nodes 1 -> 2 -> 3 -> 4 -> 5 one by one on scroll
      setExperienceStep((prev) => Math.min(TOTAL_EXPERIENCE_STEPS, prev + 1));
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 450);
    } else if (activeStage < TOTAL_STAGES - 1) {
      goToStage(activeStage + 1);
    }
  }, [activeStage, aboutCardStep, projectModalIndex, experienceStep, TOTAL_EXPERIENCE_STEPS, goToStage]);

  const prevStage = useCallback(() => {
    if (isThrottled.current) return;

    if (activeStage === 2 && aboutCardStep > 1) {
      // On About stage, step backwards through cards: 4 -> 3 -> 2 -> 1
      setAboutCardStep((prev) => Math.max(1, prev - 1));
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 450);
    } else if (activeStage === 3) {
      // On Projects stage, step backwards through project modals
      if (projectModalIndex !== null && projectModalIndex > 0) {
        setProjectModalIndex((prev) => (prev !== null ? prev - 1 : null));
        isThrottled.current = true;
        setTimeout(() => {
          isThrottled.current = false;
        }, 450);
      } else if (projectModalIndex === 0) {
        // From project 01, close modal back to Projects overview
        setProjectModalIndex(null);
        isThrottled.current = true;
        setTimeout(() => {
          isThrottled.current = false;
        }, 450);
      } else {
        // On Projects overview, scroll up returns to About
        goToStage(2);
      }
    } else if (activeStage === 4 && experienceStep > 1) {
      // On Experience stage, step backwards through experiences: 5 -> 4 -> 3 -> 2 -> 1
      setExperienceStep((prev) => Math.max(1, prev - 1));
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 450);
    } else if (activeStage === 4 && experienceStep === 1) {
      // On Experience stage at milestone 1, scroll up returns to Projects
      goToStage(3);
    } else if (activeStage > 0) {
      if (activeStage === 1) {
        setTriggerLandingExit(false);
      }
      goToStage(activeStage - 1);
    }
  }, [activeStage, aboutCardStep, projectModalIndex, experienceStep, goToStage]);

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

      if (e.key === 'Escape' && activeStage === 3 && projectModalIndex !== null) {
        setProjectModalIndex(null);
        return;
      }

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
  }, [nextStage, prevStage, activeStage, projectModalIndex]);

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
        <AboutPanel
          onAdvance={() => goToStage(3)}
          isActive={activeStage === 2}
          cardStep={aboutCardStep}
          onSetCardStep={(step) => setAboutCardStep(step)}
        />
      </PanelWrapper>

      {/* Stage 3: Projects Panel (Turns White as in Sketch, 4 Selected Works) */}
      <PanelWrapper stageIndex={3} activeStage={activeStage} id="stage-projects" isLight={true}>
        <ProjectsPanel
          onAdvance={() => goToStage(4)}
          isActive={activeStage === 3}
          modalIndex={projectModalIndex}
          onSetModalIndex={setProjectModalIndex}
          onSkip={handleSkipProjects}
        />
      </PanelWrapper>

      {/* Stage 4: Experience Panel (Turns Black again, Connected Graph) */}
      <PanelWrapper stageIndex={4} activeStage={activeStage} id="stage-experience">
        <ExperiencePanel
          onAdvance={() => goToStage(5)}
          isActive={activeStage === 4}
          experienceStep={experienceStep}
          onSetExperienceStep={(step) => setExperienceStep(step)}
          onSkip={handleSkipExperience}
        />
      </PanelWrapper>

      {/* Stage 5: Contact Panel (LET'S BUILD SOMETHING DIFFERENT) */}
      <PanelWrapper stageIndex={5} activeStage={activeStage} id="stage-contact">
        <ContactPanel onBackToTop={() => goToStage(0)} isActive={activeStage === 5} />
      </PanelWrapper>

      {/* Global Root-Level Project Detail Modal (Rendered above StageNavbar with z-[99999]) */}
      <ProjectDetailModal
        project={
          projectModalIndex !== null && projectModalIndex >= 0 && projectModalIndex < 4
            ? portfolioData.projects[projectModalIndex]
            : null
        }
        modalIndex={projectModalIndex}
        totalProjects={4}
        onNext={() => {
          if (projectModalIndex !== null) {
            if (projectModalIndex < 3) {
              setProjectModalIndex(projectModalIndex + 1);
            } else {
              setProjectModalIndex(null);
              goToStage(4);
            }
          }
        }}
        onPrev={() => {
          if (projectModalIndex !== null) {
            if (projectModalIndex > 0) {
              setProjectModalIndex(projectModalIndex - 1);
            } else {
              setProjectModalIndex(null);
            }
          }
        }}
        onClose={() => setProjectModalIndex(null)}
        onSkip={handleSkipProjects}
      />
    </div>
  );
}
