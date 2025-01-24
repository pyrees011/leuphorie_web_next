import React from 'react'

// framer
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function AnimatedButton({ className, children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={cn('w-full', className)}
    >
      { children }
    </motion.button>
  )
}
