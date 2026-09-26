'use client';

import Hero from './components/home/hero';
import MarqueeTicker from './components/ui/MarqueeTicker';
import VibeVsEngineering from './components/about/VibeVsEngineering';
import { AboutMe } from './components/about-me';
import InsightsSection from './components/insights';
import Skills from './components/about/Skills';
import ExperienceSection from './components/about/Experience';
import AchievementGrid from './components/about/Timeline';
import dynamic from 'next/dynamic';

const AwesomeContact = dynamic(() => import('./components/layout/Footer'), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10">
        {/* 00 / Editorial Kinetic Hero */}
        <Hero />

        {/* Continuous Kinetic Marquee Ticker */}
        <MarqueeTicker />

        {/* 01 / Vibe Coding vs. Deep Engineering Mastery */}
        <VibeVsEngineering />

        {/* 02 / Background & Ethos */}
        <AboutMe />

        {/* 03 / Production Case Studies */}
        <InsightsSection />

        {/* 04 / Core Architectural Specifications */}
        <Skills />

        {/* 05 / Professional Track Record */}
        <ExperienceSection />

        {/* 06 / Spotlight & Milestones */}
        <AchievementGrid />
        
        {/* 07 / Initiate Contact & Architectural Footer */}
        <AwesomeContact />
      </main>
    </div>
  );
}
