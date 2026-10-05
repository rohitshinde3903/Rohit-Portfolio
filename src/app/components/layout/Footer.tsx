'use client';

import React from 'react';
import { openAndDownloadResume } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="border-t border-border-dim py-10 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-mono text-[11px] text-text-dim">
            Designed & Engineered by Rohit Shinde &bull; Pune, India
          </span>
        </div>
        <div className="flex items-center gap-5 font-mono text-[11px]">
          <a
            href="https://github.com/rohitshinde3903"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-text-primary transition-colors"
            data-cursor-label="GITHUB"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rohitshinde3903"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-text-primary transition-colors"
            data-cursor-label="LINKEDIN"
          >
            LinkedIn
          </a>
          <button
            onClick={openAndDownloadResume}
            className="text-text-dim hover:text-text-primary transition-colors"
            data-cursor-label="CV"
          >
            Resume
          </button>
          <a
            href="mailto:rohitshinde3903@gmail.com"
            className="text-text-dim hover:text-text-primary transition-colors"
            data-cursor-label="EMAIL"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}