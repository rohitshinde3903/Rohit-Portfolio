'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Spotlight', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <div className="flex items-center group cursor-pointer select-none">
      <h1 className="text-2xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors duration-300">
        Rohitt
      </h1>
    </div>
  )
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('#hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setScrollProgress(scrolled)

      setScrolled(scrollTop > 10)

      // Highlight active nav item
      navigation.forEach((item) => {
        const section = document.querySelector(item.href)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(item.href)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "backdrop-blur-xl bg-black/90 border-b border-white/10" : "backdrop-blur-md bg-black/50"
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex justify-center flex-1">
            <div className="flex space-x-1 relative">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300',
                    'text-gray-300 hover:text-white',
                    activeLink === item.href ? 'text-white' : ''
                  )}
                >
                  {item.name}
                  {activeLink === item.href && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                      layoutId="navIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none relative"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 border-t border-white/10 pt-2 pb-4 px-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-base px-4 py-3 rounded-lg transition-all relative',
                    'text-gray-300 hover:text-white',
                    'hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10',
                    activeLink === item.href ? 'bg-gradient-to-r from-purple-500/10 to-blue-500/10' : ''
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    {activeLink === item.href && (
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mr-3"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress */}
      <motion.div 
        className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.2 }}
      />
    </header>
  )
}
