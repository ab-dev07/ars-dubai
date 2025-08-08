"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="https://chat.whatsapp.com/KD6dS5oH3cR1titZlW86jS?mode=ac_t"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300 animate-pulse"></div>
        <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300">
          <MessageSquare className="h-8 w-8 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </motion.a>

      {/* WhatsApp Tooltip */}
      <a
        href="https://chat.whatsapp.com/KD6dS5oH3cR1titZlW86jS?mode=ac_t"
        className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-900 to-black rounded-lg p-3 border border-green-500/20 shadow-lg shadow-green-500/10 whitespace-nowrap"
      >
        <div className="text-green-400 font-semibold text-sm">
          💬 Join My VIP WhatsApp
        </div>
        <div className="text-gray-300 text-xs">Get daily signals & tips!</div>
        <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </a>
    </motion.div>
  );
}
