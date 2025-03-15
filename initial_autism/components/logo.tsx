"use client"

import { motion } from "framer-motion"

const bounceTransition = {
  y: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut"
  },
  rotate: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut",
    delay: 0.3
  }
}

export function Logo() {
  return (
    <motion.div
      className="flex items-center gap-4 select-none"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        animate={{
          y: ["0%", "-25%"],
          rotate: [-5, 5]
        }}
        transition={bounceTransition}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg">
          <motion.span 
            className="text-3xl filter drop-shadow-md"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌟
          </motion.span>
        </div>
        <motion.div
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black/10 rounded-full blur-sm"
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ duration: 0.6, yoyo: Infinity }}
        />
      </motion.div>
      <motion.div className="flex flex-col items-start">
        <motion.h1
          className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          style={{ 
            backgroundSize: "200% auto",
            transition: "0.5s",
          }}
        >
          SpectrumBuddy
        </motion.h1>
        <motion.span
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Your Magical Friend! ✨
        </motion.span>
      </motion.div>
    </motion.div>
  )
} 