"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-500/20"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
          {/* Personal Logo */}
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-xl">AD</span>
          </div>
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Arsdubai
            </div>
            <div className="text-xs text-gray-400">The Golden Trader</div>
          </div>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {[
            "Home",
            "About",
            "Personal",
            "Videos",
            "Strategies",
            "Students",
            "Books",
            "Earnings",
            "Blog",
            "Contact",
          ].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#FFD700" }}
              className="hover:text-yellow-400 transition-colors cursor-pointer relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-3">
          {[
            { icon: Instagram, color: "from-pink-500 to-purple-600" },
            { icon: Twitter, color: "from-blue-400 to-blue-600" },
            { icon: Youtube, color: "from-red-500 to-red-600" },
            { icon: Linkedin, color: "from-blue-600 to-blue-800" },
          ].map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className={`w-8 h-8 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center cursor-pointer`}
            >
              <social.icon className="h-4 w-4 text-white" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
