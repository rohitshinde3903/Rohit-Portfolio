'use client'

import { useEffect, useState } from 'react';
import Hero from './components/home/hero';
import { GridPattern } from './components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import Skills from './components/about/Skills';
import AchievementGrid from './components/about/Timeline';
import InsightsSection from './components/insights';
import { AboutMe } from './components/about-me';
import dynamic from 'next/dynamic';

// Disable SSR for dynamic components using client-only features
const AwesomeContact = dynamic(() => import('./components/layout/Footer'), { ssr: false });
const ThankYouSection = dynamic(() => import('./components/Thankyou'), { ssr: false });

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          strokeDasharray="1 0"
          className="absolute inset-0 h-full w-full skew-y-12 fill-transparent stroke-white/20"
          squares={[
            [0, 0],
            [1, 3],
            [2, 1],
            [4, 2],
            [6, 3],
            [8, 1],
            [10, 2],
            [12, 3],
          ]}
        />
      </div>

      {/* Main */}
      <main className="relative z-10">
        {!showContent && (
          <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <div className="text-white text-2xl animate-pulse">Loading...</div>
          </div>
        )}

        <div className={cn('transition-opacity duration-1000', showContent ? 'opacity-100' : 'opacity-0')}>
          {/* Hero Section */}
          <div className="relative">
            <div className="absolute inset-0 z-0">
              <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                strokeDasharray="1 0"
                className="absolute inset-0 h-full w-full skew-y-12 fill-transparent stroke-white/0"
                squares={[
                  [0, 0],
                  [1, 3],
                  [2, 1],
                  [4, 2],
                  [6, 3],
                  [8, 1],
                  [10, 2],
                  [12, 3],
                ]}
              />
            </div>

            <div className="relative z-0 bg-transparent">
              <Hero />
            </div>
          </div>

          {/* About Section */}
          <section className="container mx-auto py-12 relative z-20">
            <AboutMe />
          </section>

          {/* Insights */}
          <InsightsSection />

          {/* Skills, Timeline, Footer */}
          <div className="relative z-20">
            <div className="bg-black/80 backdrop-blur-sm">
              <Skills />
            </div>
            <AchievementGrid />
            <ThankYouSection />
            <AwesomeContact />
          </div>
        </div>
      </main>
    </div>
  );
}
