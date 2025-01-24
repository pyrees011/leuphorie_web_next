import React from 'react'

// framer
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Navbar from '@/components/navbar/Navbar'

export default function AuthenticatedLayout({ children }) {
  return (
    <AnimatePresence mode="wait">
        <motion.div 
        className="flex over"
        key="main-content"
        initial={{ y : 100, opacity: 0 }}
        animate={{ y : 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        >
            <Navbar />
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </motion.div>
        {/* TODO: Add a footer */}
    </AnimatePresence>
  )
}