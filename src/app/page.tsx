'use client';

import Hero from './components/home/hero';
import Skills from './components/about/Skills';
import ExperienceSection from './components/about/Experience';
import AchievementGrid from './components/about/Timeline';
import InsightsSection from './components/insights';
import { AboutMe } from './components/about-me';
import dynamic from 'next/dynamic';

const AwesomeContact = dynamic(() => import('./components/layout/Footer'), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10">
        {/* Editorial Hero Section */}
        <Hero />

        {/* 01 / Background & Ethos */}
        <AboutMe />

        {/* 02 / Featured Case Studies */}
        <InsightsSection />

        {/* 03 / Core Architectural Arsenal */}
        <Skills />

        {/* 04 / Professional Track Record */}
        <ExperienceSection />

        {/* 05 / Spotlight & Milestones */}
        <AchievementGrid />
        
        {/* 06 / Initiate Contact & Architectural Footer */}
        <AwesomeContact />
      </main>
    </div>
  );
}
