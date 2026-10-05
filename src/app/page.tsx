'use client';

import React from 'react';
import StageController from './components/stage/StageController';

export default function Home() {
  return (
    <main className="w-full h-[100dvh] overflow-hidden bg-[#0A0A0A]">
      <StageController />
    </main>
  );
}