'use client'

import { Inter } from 'next/font/google'
import { Navbar } from './components/layout/Navbar'
import Loader from './components/Loader'
import '../app/globals.css'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { GridPattern } from './components/ui/grid-pattern'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 3000) // Adjust this timing to match your loader's total animation duration

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-foreground`}>
        {showLoader && <Loader />}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            strokeDasharray="4 4"
            className="absolute inset-x-0 inset-y-[-30%] h-[200%] w-full skew-y-12 fill-gray-700/50 stroke-gray-700/50"
            squares={[
              [0, 0],
              [1, 3],
              [2, 1],
              [4, 2],
              [6, 3],
              [8, 1],
              [10, 2],
              [12, 3],
            ]}
          />
        </div>
        <div className={cn(
          'transition-opacity duration-1000',
          showLoader ? 'opacity-0' : 'opacity-100'
        )}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}