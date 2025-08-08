"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, Clock, Dumbbell, Music, Camera, Coffee, Home, Car, Plane, Gamepad2, Weight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { timelineEvents } from "@/lib/data/timeline"

export function PersonalSection() {
  const hobbies = [
    { icon: Dumbbell, label: "Fitness", desc: "6AM daily", color: "from-green-400 to-green-600" },
    { icon: Music, label: "Jazz Piano", desc: "15 years", color: "from-purple-400 to-purple-600" },
    { icon: Camera, label: "Photography", desc: "Nature & Family", color: "from-orange-400 to-orange-600" },
    { icon: Coffee, label: "Coffee", desc: "Ethiopian Beans", color: "from-yellow-600 to-orange-600" },
  ]

  const luxuryItems = [
    { icon: Home, label: "Miami Penthouse", value: "$3.2M", status: "Dream House", color: "yellow" },
    { icon: Car, label: "Lamborghini Huracán", value: "2024", status: "Dream Car", color: "yellow" },
    { icon: Weight, label: "Fitness Club", value: "Gold", status: "Active", color: "green" },
  ]

  return (
    <section id="personal" className="py-16 bg-gradient-to-r from-yellow-500/5 to-transparent relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-pink-400 mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Life Beyond Trading
              </span>
            </h2>
            <Heart className="h-8 w-8 text-pink-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Success isn't just about money - it's about living life to the fullest with the people you love
          </p>
        </motion.div>

        {/* Enhanced Lifestyle Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Family & Personal with Popup */}
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-pink-500/20 hover:border-pink-400 transition-all duration-300 transform group-hover:scale-105">
                    <div className="flex items-center mb-4">
                      <Heart className="h-6 w-6 text-pink-400 mr-2 animate-pulse" />
                      <h3 className="text-xl font-semibold text-white">My Beautiful Family</h3>
                      <Sparkles className="h-5 w-5 text-yellow-400 ml-2" />
                    </div>
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Alex with family"
                      className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-gray-300 text-sm">
                      My wife Sarah and twin daughters Emma & Lily (age 4) are my biggest motivation. Click to see more
                      family moments! 👨‍👩‍👧‍👧
                    </p>
                    <Badge className="mt-2 bg-pink-500/20 text-pink-400 border-pink-500/30">
                      Click to View Gallery
                    </Badge>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-gradient-to-br from-gray-900 to-black border-pink-500/20">
                <DialogHeader>
                  <DialogTitle className="text-pink-400 text-2xl flex items-center">
                    <Heart className="h-6 w-6 mr-2" />
                    My Family - My Everything
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <img
                      src="/placeholder.svg?height=250&width=350"
                      alt="Family vacation"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <img
                      src="/placeholder.svg?height=250&width=350"
                      alt="Daughters playing"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg p-4 border border-pink-500/20">
                      <h4 className="text-white font-semibold mb-2">Sarah Thompson</h4>
                      <p className="text-gray-300 text-sm">
                        My incredible wife of 6 years. Former marketing executive who now manages our foundation helping
                        single mothers learn trading.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-500/20">
                      <h4 className="text-white font-semibold mb-2">Emma & Lily</h4>
                      <p className="text-gray-300 text-sm">
                        Our twin angels, age 4. They think daddy "plays with colorful charts" for work. They're already
                        showing interest in numbers!
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div> */}

          {/* Enhanced Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Gamepad2 className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-xl font-semibold text-white">My Passions</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-center group/hobby cursor-pointer"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${hobby.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover/hobby:shadow-lg transition-all duration-300`}
                      >
                        <hobby.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm font-semibold">{hobby.label}</span>
                      <div className="text-gray-500 text-xs">{hobby.desc}</div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">
                  Balance is key to success. When I'm not trading, you'll find me staying active, creating music, or
                  capturing life's beautiful moments.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Luxury Lifestyle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
                  <h3 className="text-xl font-semibold text-white">Dream Lifestyle And Goals</h3>
                  <Sparkles className="h-5 w-5 text-yellow-400 ml-2 animate-pulse" />
                </div>
                <div className="space-y-3">
                  {luxuryItems.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center justify-between bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-3 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <item.icon className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-300 text-sm">{item.label}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-sm font-semibold">{item.value}</span>
                        <Badge
                          className={`bg-${item.color}-500/20 text-${item.color}-400 border-${item.color}-500/30 text-xs`}
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Luxury car gallery */}
                {/* <div className="grid grid-cols-2 gap-3 mt-4">
                  <img
                    src="/placeholder.svg?height=120&width=200"
                    alt="Lamborghini Huracán"
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/placeholder.svg?height=120&width=200"
                    alt="Ferrari 488"
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/placeholder.svg?height=120&width=200"
                    alt="McLaren 720S"
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/placeholder.svg?height=120&width=200"
                    alt="Porsche 911 Turbo"
                    className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div> */}
                <div className="text-center mt-4">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold">
                    Living the Dream ✨
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Personal Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4 flex items-center justify-center">
              <Clock className="h-8 w-8 mr-3" />
              My Personal Journey
              <Sparkles className="h-8 w-8 ml-3 animate-pulse" />
            </h3>
            <p className="text-gray-300">From struggle to success - every step shaped who I am today</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg shadow-yellow-500/20"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: event.side === "left" ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center ${event.side === "right" ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Left/Right Content */}
                  <div
                    className={`w-full md:w-5/12 ${event.side === "right" ? "md:text-right" : ""
                      }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: event.side === "left" ? 5 : -5 }}
                      className="relative group"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all duration-300`}
                      ></div>
                      <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-yellow-500/20 shadow-lg shadow-yellow-500/10 hover:border-yellow-400 transition-all duration-300">
                        <div className="flex items-center mb-3">
                          <div className="text-2xl mr-3">{event.icon}</div>
                          <div className="text-yellow-400 font-bold text-lg">
                            {event.year}
                          </div>
                        </div>
                        <h4 className="text-white font-semibold text-xl mb-2">
                          {event.title}
                        </h4>
                        <p className="text-gray-300">{event.description}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Circle (Timeline Center) */}
                  <div className="w-full md:w-2/12 flex justify-center relative my-6 md:my-0">
                    {/* Vertical line */}
                    <div className="absolute top-0 bottom-0 w-1 bg-gray-700 md:block"></div>
                    {/* Circle */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      className={`relative z-10 w-8 h-8 bg-gradient-to-r ${event.color} rounded-full border-4 border-black shadow-lg`}
                    ></motion.div>
                  </div>

                  {/* Spacer for other side (desktop only) */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
