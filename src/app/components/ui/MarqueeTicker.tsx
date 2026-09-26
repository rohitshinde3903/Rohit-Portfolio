'use client';

import React from 'react';

const tickerItems = [
  "VIBE CODING PROMPTS ARE NOT ARCHITECTURE",
  "DETERMINISTIC RAG > BLIND GENERATION",
  "+38% Q&A ACCURACY &bull; GEMMA 3B FINE-TUNED",
  "-42% HALLUCINATIONS WITH CHROMADB",
  "-40% LATENCY VIA vLLM PAGEDATTENTION",
  "15+ PRODUCTION STARTUPS DELIVERED",
  "9.45 CGPA &bull; B.TECH AI & DATA SCIENCE",
  "ASYNC FASTAPI & DJANGO ON GCP CLOUD RUN",
  "PRODUCTION HARDENED AI SYSTEMS"
];

export default function MarqueeTicker() {
  return (
    <div className="w-full border-y border-border-subtle bg-surface/60 backdrop-blur-xl overflow-hidden py-3.5 select-none relative z-20">
      <div className="animate-marquee-smooth flex items-center gap-8 whitespace-nowrap">
        {/* Doubled for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-xs font-mono text-secondary tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 animate-pulse" />
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </div>
        ))}
      </div>
    </div>
  );
}
