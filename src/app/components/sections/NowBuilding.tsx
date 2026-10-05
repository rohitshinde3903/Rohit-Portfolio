'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Activity, Zap, Compass } from 'lucide-react';

interface BuildItem {
  id: string;
  category: 'AI SYSTEMS' | 'PRODUCTS' | 'EXPERIMENTS' | 'INFRASTRUCTURE';
  title: string;
  detail: string;
  status: 'ACTIVE' | 'TRAINING' | 'BENCHMARKING' | 'DEPLOYED';
  progress: number;
}

const buildItems: BuildItem[] = [
  {
    id: '1',
    category: 'AI SYSTEMS',
    title: 'Gemma 3B SLM Fine-Tuning with QLoRA',
    detail: 'Targeting domain-specific code intelligence on edge devices without cloud round-trips.',
    status: 'TRAINING',
    progress: 88,
  },
  {
    id: '2',
    category: 'PRODUCTS',
    title: 'StonesReviewsAI NFC Hardware Integration',
    detail: 'Production scale NFC tap-to-review automation pipeline handling business customer flows.',
    status: 'DEPLOYED',
    progress: 100,
  },
  {
    id: '3',
    category: 'EXPERIMENTS',
    title: 'Hierarchical Multi-Agent Orchestration',
    detail: 'LangGraph state graph with cyclic error recovery and deterministic validation loops.',
    status: 'ACTIVE',
    progress: 74,
  },
  {
    id: '4',
    category: 'INFRASTRUCTURE',
    title: 'Sub-50ms Hybrid Vector Search Benchmarks',
    detail: 'Evaluating Qdrant & pgvector indexing under high concurrent QPS workloads.',
    status: 'BENCHMARKING',
    progress: 62,
  },
];

export default function NowBuilding() {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 sm:px-12 bg-paper text-ink border-t border-paper-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Radar Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-paper-border gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25C98A] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0B3D2E]" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest font-semibold text-emerald-deep">
              LIVE RADAR / WHAT I&apos;M BUILDING RIGHT NOW
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-ink-muted">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-emerald-deep" />
              <span>PUNE, IN (18.52° N, 73.85° E)</span>
            </div>
            {timeString && (
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#25C98A]" />
                <span className="font-semibold text-ink">{timeString} IST</span>
              </div>
            )}
          </div>
        </div>

        {/* 4 Active Building Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {buildItems.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-paper-card border border-paper-border hover:border-emerald-deep/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-wider text-ink-muted uppercase">
                    {item.category}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      item.status === 'DEPLOYED'
                        ? 'bg-emerald-light/60 text-emerald-deep'
                        : item.status === 'TRAINING'
                        ? 'bg-amber-500/10 text-amber-800'
                        : item.status === 'BENCHMARKING'
                        ? 'bg-purple-500/10 text-purple-800'
                        : 'bg-[#25C98A]/20 text-emerald-deep'
                    }`}
                  >
                    ● {item.status}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-medium text-ink leading-snug mb-2">
                  {item.title}
                </h4>

                <p className="font-sans text-xs text-ink-muted leading-relaxed mb-4">
                  {item.detail}
                </p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-center font-mono text-[10px] text-ink-muted mb-1.5">
                  <span>VELOCITY</span>
                  <span className="font-semibold text-ink">{item.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-paper rounded-full overflow-hidden border border-paper-border">
                  <div
                    className="h-full bg-emerald-deep rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
