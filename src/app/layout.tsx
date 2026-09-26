'use client';

import '../app/globals.css';
import { Navbar } from './components/layout/Navbar';
import SmoothScroll from './components/animations/SmoothScroll';
import CustomCursor from './components/ui/CustomCursor';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <title>Rohit Shinde &bull; GenAI Engineer &amp; LLM/RAG Architect</title>
        <meta
          name="description"
          content="Portfolio of Rohit Shinde — GenAI Engineer specializing in Large Language Models, Production RAG, Agentic AI, PyTorch, and Scalable Cloud Backends."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-background text-primary antialiased font-sans selection:bg-accent selection:text-primary">
        {/* Subtle Film Grain Noise Texture */}
        <div className="film-grain" aria-hidden="true" />

        {/* Custom Desktop Interactive Cursor */}
        <CustomCursor />

        {/* Smooth Scrolling Provider */}
        <SmoothScroll>
          <div
            className={cn(
              'relative z-10 transition-opacity duration-700 min-h-screen flex flex-col',
              mounted ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Navbar />
            <div className="flex-1">{children}</div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
