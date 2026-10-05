'use client';

import React from 'react';

interface HandwrittenNoteProps {
  children?: React.ReactNode;
  text?: string;
  rotate?: number;
  rotation?: number;
  className?: string;
  arrow?: 'left' | 'right' | 'down' | 'up' | 'none';
  arrowDirection?: 'left' | 'right' | 'down' | 'up' | 'none' | 'down-left' | 'down-right' | 'up-left' | 'up-right';
}

export default function HandwrittenNote({
  children,
  text,
  rotate,
  rotation = -3,
  className = '',
  arrow,
  arrowDirection = 'none',
}: HandwrittenNoteProps) {
  const content = children || text;
  const rot = rotate !== undefined ? rotate : rotation;
  const dir = arrow || (arrowDirection === 'down-left' ? 'left' : arrowDirection === 'down-right' ? 'right' : arrowDirection === 'up-left' ? 'left' : arrowDirection === 'up-right' ? 'right' : arrowDirection);

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-hand text-emerald-deep font-semibold tracking-wide select-none pointer-events-none ${className}`}
      style={{
        transform: `rotate(${rot}deg)`,
      }}
    >
      {dir === 'left' && (
        <svg className="w-4 h-4 text-emerald-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      )}
      <span>{content}</span>
      {dir === 'right' && (
        <svg className="w-4 h-4 text-emerald-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
      {dir === 'down' && (
        <svg className="w-4 h-4 text-emerald-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      )}
      {dir === 'up' && (
        <svg className="w-4 h-4 text-emerald-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      )}
    </span>
  );
}
