'use client';

import '../app/globals.css';
import { Navbar } from './components/layout/Navbar';
import SmoothScroll from './components/animations/SmoothScroll';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import { useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <title>Rohit Shinde — GenAI Architect & Systems Engineer</title>
        <meta
          name="description"
          content="Rohit Shinde — GenAI Engineer building production AI systems. Fine-tuning SLMs, engineering deterministic RAG, and architecting scalable Python backends."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/icon.ico" />
      </head>
      <body className="bg-bg text-text-primary antialiased font-sans" suppressHydrationWarning>
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />

        {loading && <Preloader onComplete={handlePreloaderComplete} />}

        <SmoothScroll>
          <div
            className={`relative z-10 transition-opacity duration-700 min-h-screen flex flex-col ${
              mounted && !loading ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Navbar />
            <div className="flex-1">{children}</div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}

