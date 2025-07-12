'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '#Hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Spotlight', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-blue-500 rounded-md transform rotate-45 shadow-md flex items-center justify-center">
        <span className="text-white font-black text-lg transform -rotate-45 drop-shadow-sm">A</span>
      </div>
      <span className="text-2xl font-semibold tracking-wide bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        KANKSHA
      </span>
    </div>
  )
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md shadow-sm border-b border-purple-500/20 text-white transition-all duration-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <Logo />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium px-4 py-2 rounded-md transition-all duration-300',
                'text-gray-300 hover:text-white hover:scale-105',
                'hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-500/10'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/60 p-2 rounded-md"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 overflow-hidden',
          isMenuOpen ? 'max-h-96 py-4 px-4' : 'max-h-0'
        )}
      >
        <div className="flex flex-col space-y-3 border-t border-purple-500/20 pt-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'text-base font-medium rounded-md px-3 py-2 transition-all duration-200',
                'text-gray-300 hover:text-white hover:bg-purple-600/10'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
