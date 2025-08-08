"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Crown, Sparkles, Zap, Play, Quote } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import profile from '../../assets/profile.jpg';
import profile from "../../assets/profile2.jpg";

const lifestyleImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    caption: "Trading from my Miami penthouse",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    caption: "Family vacation in the Maldives",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    caption: "My Lamborghini collection",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    caption: "Private jet to Dubai",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    caption: "Celebrating with my team",
  },
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section id="home" className="pt-20 pb-16 px-6 relative">
      <div className="container mx-auto text-center relative z-10">
        {/* Floating Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-10 left-10 hidden lg:block"
        >
          <div className="relative">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full p-4 shadow-lg shadow-yellow-500/25">
              <Crown className="h-8 w-8 text-black" />
            </div>
            {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-xs font-bold">1</span>
            </div> */}
          </div>
          <div className="text-center mt-2 text-sm text-yellow-400 font-semibold">
            Top 1% Trader
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute top-10 right-10 hidden lg:block"
        >
          <div className="relative">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-4 shadow-lg shadow-green-500/25">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <Sparkles className="absolute -top-1 -right-1 h-6 w-6 text-yellow-400 animate-pulse" />
          </div>
          <div className="text-center mt-2 text-sm text-green-400 font-semibold">
            $100k Portfolio
          </div>
        </motion.div>

        {/* Personal Brand Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="mb-6 relative">
            <div className="relative inline-block">
              <div className="relative">
                <Image
                  src={profile}
                  alt="Alex Thompson - The Golden Trader"
                  className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-yellow-500 shadow-2xl shadow-yellow-500/20 object-contain"
                />
                {/* <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center animate-pulse border-4 border-black">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div> */}
                {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <img
                    src="/placeholder.svg?height=60&width=120"
                    alt="Alex Thompson Signature"
                    className="h-8 opacity-80"
                  />
                </div> */}
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold px-4 py-1 shadow-lg">
                ✓ Verified Elite Trader
              </Badge>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <div className="text-yellow-400 text-lg font-semibold mb-2">
              👑 THE GOLDEN TRADER
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              From{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                $5K Loss
              </span>{" "}
              to{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                $50k Windfall
              </span>
            </h1>

            <div className="relative max-w-2xl mx-auto mb-6">
              <Quote className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-xl italic text-gray-300">
                "I don't just trade markets, I Shape 7-Figure Mindsets. My
                golden strategies have transformed over 5,000 lives."
              </p>
              <div className="text-yellow-400 font-semibold mt-2">
                - Arsdubai
              </div>
            </div>
          </motion.div>

          {/* Live Portfolio Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-green-500/30 shadow-2xl shadow-green-500/10 max-w-md mx-auto">
                <div className="text-lg text-green-400 mb-2 flex items-center justify-center">
                  <Zap className="h-5 w-5 mr-2 animate-pulse" />
                  🔥 LIVE Portfolio Value
                </div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [0.8, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                  className="text-4xl font-bold text-green-400"
                >
                  $55,404
                </motion.div>
                <div className="text-sm text-gray-300 mt-2">
                  +$12,450 today (+5.5%)
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-3 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <TrendingUp className="mr-2 h-5 w-5" />
            Get My Golden Strategies
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-8 py-3 bg-transparent backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Play className="mr-2 h-5 w-5" />
                Watch My Lifestyle
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl bg-gradient-to-br from-gray-900 to-black border-yellow-500/20">
              <DialogHeader>
                <DialogTitle className="text-yellow-400 text-2xl">
                  My Luxury Lifestyle
                </DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={
                    lifestyleImages[currentImageIndex]?.src ||
                    "/placeholder.svg"
                  }
                  alt="Lifestyle"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="space-y-4">
                  <p className="text-gray-300">
                    {lifestyleImages[currentImageIndex]?.caption}
                  </p>
                  <div className="flex space-x-2">
                    {lifestyleImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex
                            ? "bg-yellow-400"
                            : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
