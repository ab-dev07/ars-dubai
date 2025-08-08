"use client"

import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number }
}

export function AnimatedBackground({ mousePosition }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Interactive Cursor Glow */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse"></div>

      {/* Hexagonal Pattern */}
      <div className="absolute top-1/2 right-10 w-20 h-20 border border-yellow-500/20 transform rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 left-10 w-16 h-16 border border-yellow-400/30 rounded-full animate-ping"></div>
    </div>
  )
}
