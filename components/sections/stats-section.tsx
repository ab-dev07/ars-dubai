"use client"

import { motion } from "framer-motion"
import { Clock, Users, Award, DollarSign } from "lucide-react"

const stats = [
  {
    number: "8",
    label: "Years Trading",
    icon: Clock,
    gradient: "from-blue-400 to-blue-600",
    subtitle: "Since 2016",
  },
  {
    number: "1,203",
    label: "Lives Changed",
    icon: Users,
    gradient: "from-purple-400 to-purple-600",
    subtitle: "Students Worldwide",
  },
  {
    number: "95%",
    label: "Success Rate",
    icon: Award,
    gradient: "from-yellow-400 to-yellow-600",
    subtitle: "Proven Results",
  },
  {
    number: "$100k",
    label: "Student Profits",
    icon: DollarSign,
    gradient: "from-green-400 to-green-600",
    subtitle: "Combined Earnings",
  },
]

export function StatsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mb-12 mx-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, rotateY: -90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 shadow-lg shadow-yellow-500/10 h-[230px] transform transition-all duration-300 group-hover:shadow-yellow-500/25">
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:rotate-12 group-hover:scale-110`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-1 text-center">{stat.number}</div>
              <div className="text-gray-300 text-sm font-semibold text-center">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-1 text-center">{stat.subtitle}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
