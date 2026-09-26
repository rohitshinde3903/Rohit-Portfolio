'use client';

import Hero from './components/home/hero';
import { GridPattern } from './components/ui/grid-pattern';
import Skills from './components/about/Skills';
import ExperienceSection from './components/about/Experience';
import AchievementGrid from './components/about/Timeline';
import InsightsSection from './components/insights';
import { AboutMe } from './components/about-me';
import dynamic from 'next/dynamic';

const AwesomeContact = dynamic(() => import('./components/layout/Footer'), { ssr: false });
const ThankYouSection = dynamic(() => import('./components/Thankyou'), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Cybernetic Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GridPattern
          width={48}
          height={48}
          x={-1}
          y={-1}
          strokeDasharray="1 3"
          className="absolute inset-0 h-full w-full skew-y-12 fill-transparent stroke-purple-500/10"
          squares={[
            [1, 3],
            [3, 1],
            [5, 4],
            [7, 2],
            [9, 5],
            [11, 2],
          ]}
        />
      </div>

      {/* Main Content Container */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Neural Dossier / About Me */}
        <section className="container mx-auto relative z-20">
          <AboutMe />
        </section>

        {/* Featured AI & Full-Stack Projects */}
        <InsightsSection />

        {/* Neural Tech Skills Matrix */}
        <div className="relative z-20">
          <Skills />
          <ExperienceSection />
          <AchievementGrid />
          
          {/* Outro & Contact Console */}
          <ThankYouSection />
          <AwesomeContact />
        </div>
      </main>
    </div>
  );
}
