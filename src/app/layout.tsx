'use client';

import '../app/globals.css';
import { Navbar } from './components/layout/Navbar';
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
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Rohit Shinde — LLM & RAG Architect</title>
        <meta name="description" content="Rohit Shinde — GenAI Engineer specializing in Large Language Models, Production RAG, Agentic AI, and Scalable Python Architectures." />
      </head>
      <body className="bg-background text-on-background antialiased selection:bg-secondary-container selection:text-on-secondary-container font-sans">
        {/* Subtle Ambient Background Lighting */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
        <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-secondary-container/30 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none z-0" />

        <div className={cn(
          "relative z-10 transition-opacity duration-700 min-h-screen flex flex-col",
          mounted ? "opacity-100" : "opacity-0"
        )}>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
