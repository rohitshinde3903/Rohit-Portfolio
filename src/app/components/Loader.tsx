'use client'

import React, { useState, useEffect } from 'react'

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true)
  const [fillComplete, setFillComplete] = useState(false)
  const [slideUp, setSlideUp] = useState(false)
  const letters = 'ROHIT'.split('')

  useEffect(() => {
    const fillTimer = setTimeout(() => {
      setFillComplete(true)
      const slideTimer = setTimeout(() => {
        setSlideUp(true)
        const hideTimer = setTimeout(() => {
          setShowLoader(false)
        }, 1000)
        return () => clearTimeout(hideTimer)
      }, 1500)
      return () => clearTimeout(slideTimer)
    }, 2000)
    return () => clearTimeout(fillTimer)
  }, [])

  if (!showLoader) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div
        className={`transition-transform duration-1000 ease-in-out ${
          slideUp ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="relative flex flex-col items-center space-y-4">
          {/* Letter Blocks */}
          <div className="flex gap-6">
            {letters.map((letter, index) => (
              <div
                key={index}
                className="relative text-5xl sm:text-6xl md:text-7xl font-black tracking-wider"
              >
                {/* Base ghost letter */}
                <span className="text-gray-700/20">{letter}</span>

                {/* Fill letter with clip animation */}
                <div
                  className="absolute inset-0 text-white"
                  style={{
                    clipPath: fillComplete
                      ? 'inset(0 0 0 0)'
                      : 'inset(100% 0 0 0)',
                    transition: `clip-path 0.5s ease-in-out`,
                    transitionDelay: `${index * 0.12}s`,
                  }}
                >
                  {letter}
                </div>
              </div>
            ))}
          </div>

          {/* Underline Glow Animation */}
          <div
            className="h-[2px] w-48 bg-gradient-to-r from-purple-500 via-blue-400 to-transparent rounded-full"
            style={{
              opacity: fillComplete ? 1 : 0,
              transform: fillComplete ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'all 0.6s ease-in-out',
              transitionDelay: '0.8s',
              transformOrigin: 'left',
            }}
          />

          {/* Pulse Glow Border */}
          <div
            className={`absolute inset-0 border border-purple-400/10 rounded-xl blur-xl animate-pulse ${
              fillComplete ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            } transition-all duration-1000`}
          />
        </div>
      </div>
    </div>
  )
}

