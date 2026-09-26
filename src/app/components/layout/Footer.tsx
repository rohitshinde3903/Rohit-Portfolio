'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Copy, Check } from 'lucide-react';

export default function AwesomeContact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-24 max-w-7xl mx-auto px-6 border-t border-surface-variant/60 relative"
      >
        <div className="glass-card p-12 md:p-16 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-container/40 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono text-secondary mb-6">
            <span>06 / INITIATE CONTACT</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight text-primary mb-6">
            Let's build the future of AI together.
          </h2>

          <p className="text-on-surface-variant max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed font-normal">
            Whether you have a complex RAG challenge, need production LLM architecture consulting, or want to discuss potential collaborations, my inbox is always open.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:rohitshinde3903@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-on-primary bg-primary hover:bg-secondary transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-5 h-5" />
              <span>rohitshinde3903@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/rohitshinde3903"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-primary bg-surface-container-low hover:bg-surface-container border border-outline-variant/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Linkedin className="w-5 h-5 text-secondary" />
              <span>Connect on LinkedIn</span>
            </a>

            <button
              onClick={() => handleCopy('+917499273903', 'phone')}
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl font-medium text-secondary bg-surface-container-low hover:bg-surface-container border border-outline-variant/50 transition-all text-sm font-mono hover:scale-[1.02] active:scale-[0.98]"
            >
              {copied === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Phone className="w-4 h-4 text-secondary" />}
              <span>{copied === 'phone' ? 'Copied +91 74992 73903' : '+91 74992 73903'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-variant bg-surface-container-low py-12 text-sm text-secondary relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="font-mono text-on-surface-variant text-xs">
              Designed &amp; Engineered by Rohit Shinde &bull; Pune, India
            </span>
          </div>

          <div className="flex items-center gap-6 font-medium text-sm">
            <a 
              className="text-secondary hover:text-primary transition-colors" 
              href="https://github.com/rohitshinde3903"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              className="text-secondary hover:text-primary transition-colors" 
              href="https://linkedin.com/in/rohitshinde3903"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              className="text-secondary hover:text-primary transition-colors" 
              href="/Rohit_Shinde_CV-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a 
              className="text-secondary hover:text-primary transition-colors" 
              href="mailto:rohitshinde3903@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}