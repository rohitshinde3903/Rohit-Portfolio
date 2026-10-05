'use client';

import '../app/globals.css';
import CustomCursor from './components/ui/CustomCursor';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <title>Rohit Shinde — The Game Changer | AI Engineer &amp; Systems Architect</title>
        <meta
          name="description"
          content="Rohit Shinde — AI Engineer, Systems Architect, Builder. Transforming ideas into high-throughput systems and autonomous experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/images/icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-obsidian text-slate-100 font-sans antialiased selection:bg-white selection:text-black overflow-hidden select-none"
        suppressHydrationWarning
      >
        <div className="paper-grain" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
