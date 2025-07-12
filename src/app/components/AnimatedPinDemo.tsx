'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PinContainer } from './ui/3d-pin'

export function AnimatedPinDemo({
  title,
  description,
  href,
  imageUrl,
}: {
  title: string
  description: string
  href: string
  imageUrl: string
}) {
  return (
    <motion.div
      className="h-auto w-full flex items-center justify-center"
      whileHover={{ scale: 1.04, rotate: 0.5 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <PinContainer title={title} href={href}>
        <motion.div
          className="flex basis-full flex-col p-5 tracking-tight text-white w-[20rem] h-[22rem] border border-purple-900 rounded-2xl shadow-lg bg-gradient-to-br from-black/60 to-slate-800 hover:shadow-purple-800/50 transition-all duration-300 group overflow-hidden"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-lg font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-slate-400 italic mt-1 mb-3">
            {description}
          </p>
          <motion.div
            className="flex-1 w-full rounded-xl bg-cover bg-center bg-no-repeat shadow-inner shadow-slate-900/40 transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          <motion.div
            className="mt-4 text-right text-xs text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            Click to learn more ↗
          </motion.div>
        </motion.div>
      </PinContainer>
    </motion.div>
  )
}
