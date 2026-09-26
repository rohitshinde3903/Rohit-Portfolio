'use client';

import { Inter } from 'next/font/google';
import { Navbar } from './components/layout/Navbar';
import Loader from './components/Loader';
import '../app/globals.css';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { GridPattern } from './components/ui/grid-pattern';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Rohit Shinde | GenAI Engineer & Python Full-Stack Architect</title>
        <meta name="description" content="Portfolio of Rohit Shinde — GenAI Engineer specializing in LLMs, RAG, Agentic AI, PyTorch, FastAPI, and Cloud MLOps." />
      </head>
      <body className={`${inter.className} bg-[#030307] text-foreground`}>
        {showLoader && <Loader />}
        
        <div className={cn(
          'transition-opacity duration-700 min-h-screen flex flex-col',
          showLoader ? 'opacity-0' : 'opacity-100'
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
