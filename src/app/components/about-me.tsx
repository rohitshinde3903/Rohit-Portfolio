'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Code2, Sparkles, MapPin } from 'lucide-react';

export function AboutMe() {
  return (
    <section 
      id="about" 
      className="py-24 max-w-7xl mx-auto px-6 border-t border-surface-variant/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Background, Profile Photo & Ethos (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono text-secondary">
            <span>01 / BACKGROUND &amp; ETHOS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-primary leading-tight">
            Behind the architecture and the engineer.
          </h2>

          {/* Profile Photo Display in Warm Stone Frame */}
          <div className="flex items-center gap-5 p-4 rounded-2xl bg-surface-container-low border border-surface-variant">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-outline-variant/60 shadow-sm bg-surface-container">
              <Image
                src="/images/rohit-profile.png"
                alt="Rohit Shinde"
                fill
                sizes="112px"
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary font-headline">Rohit Shinde</h3>
              <p className="text-xs text-secondary font-mono mb-2">
                Pune, India &bull; Open for Remote / Hybrid
              </p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-mono font-medium">
                <Sparkles className="w-3 h-3 text-secondary" />
                GenAI &amp; Full-Stack Specialist
              </span>
            </div>
          </div>

          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            I believe transformative AI is built at the intersection of rigorous mathematical precision and elegant systems design. My path started in core Python backend engineering before diving deep into deep learning, LLM fine-tuning, and retrieval architectures.
          </p>

          <p className="text-on-surface-variant leading-relaxed text-sm md:text-base font-normal">
            Whether fine-tuning open-source models with LoRA/QLoRA, deploying low-latency vLLM microservices, or building full-stack products for 15+ startups, my commitment is to deterministic accuracy and high performance.
          </p>

          {/* Stat Badges */}
          <div className="pt-2 flex flex-wrap gap-4">
            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-variant flex-1 min-w-[140px]">
              <div className="text-3xl font-bold font-headline text-primary">4+</div>
              <div className="text-xs text-secondary font-mono mt-0.5">Years in AI &amp; Python</div>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-variant flex-1 min-w-[140px]">
              <div className="text-3xl font-bold font-headline text-primary">9.45</div>
              <div className="text-xs text-secondary font-mono mt-0.5">CGPA &bull; B.Tech AI &amp; DS</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Core Philosophy Card (7 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary-container rounded-full blur-2xl opacity-40 pointer-events-none" />

            <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-8">
              Core Engineering Philosophy
            </h3>

            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 font-mono text-sm mt-1 shadow-sm">
                  01
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base md:text-lg mb-1">
                    Deterministic Guardrails over Blind Generation
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Every production LLM output must pass through rigorous verification layers and grounded vector retrieval to eliminate hallucinations and ensure factual compliance.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 font-mono text-sm mt-1 shadow-sm">
                  02
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base md:text-lg mb-1">
                    Low Latency &amp; Memory Efficiency by Design
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Optimizing vector retrieval indices, model quantization (QLoRA, vLLM continuous batching), and async microservices to keep response times under sub-second thresholds.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 font-mono text-sm mt-1 shadow-sm">
                  03
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base md:text-lg mb-1">
                    Developer Ergonomics &amp; Enterprise Scalability
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Building maintainable, well-tested Python and TypeScript codebases that scale effortlessly from early-stage MVP to enterprise-grade workloads.
                  </p>
                </div>
              </li>
            </ul>

            {/* Architectural Tags */}
            <div className="mt-8 pt-6 border-t border-surface-variant flex flex-wrap gap-2">
              {[
                "LLM Fine-Tuning", "RAG Pipelines", "FastAPI", "GCP Cloud Run", "Docker", "PyTorch"
              ].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-surface-container-low text-xs font-mono text-secondary border border-outline-variant/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
