"use client";

import { motion } from "framer-motion";
import { Play, Youtube, Eye, Heart, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { videos } from "@/lib/data/videos";
import { fadeInUp, staggerContainer } from "@/lib/utils/animations";

export function VideosSection() {
  const socialStats = [
    {
      platform: "TikTok",
      followers: "20k",
      icon: "🎵",
      color: "from-pink-500 to-purple-600",
      engagement: "12.5%",
    },
    {
      platform: "Instagram",
      followers: "43,33k",
      icon: "📸",
      color: "from-purple-500 to-pink-600",
      engagement: "8.7%",
    },
    {
      platform: "YouTube",
      followers: "50,23K",
      icon: "📺",
      color: "from-red-500 to-red-600",
      engagement: "15.2%",
    },
    {
      platform: "X",
      followers: "20k",
      icon: "🐦",
      color: "from-blue-400 to-blue-600",
      engagement: "6.3%",
    },
  ];

  return (
    <section
      id="videos"
      className="py-16 bg-gradient-to-br from-black to-gray-900"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Play className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Viral Trading Content
              </span>
            </h2>
            <Youtube className="h-8 w-8 text-red-500 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow my journey on social media - from trading tips to luxury
            lifestyle moments
          </p>
        </motion.div>

        {/* Social Media Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {socialStats.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all duration-300`}
              ></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-yellow-500/20 shadow-lg shadow-yellow-500/10 text-center">
                <div className="text-3xl mb-3">{social.icon}</div>
                <h3 className="text-white font-bold text-lg mb-1">
                  {social.platform}
                </h3>
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  {social.followers}
                </div>
                <div className="text-gray-400 text-sm">Followers</div>
                <Badge className="mt-2 bg-green-500/20 text-green-400 border-green-500/30">
                  {social.engagement} engagement
                </Badge>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {videos.map((video, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg shadow-yellow-500/10 hover:border-yellow-400 transition-all duration-300">
                  {/* Video Player */}
                  <video
                    src={video.src}
                    poster={video.thumbnail}
                    className="w-full h-90 object-cover"
                    muted

                    playsInline
                    preload="metadata"
                    controls
                  />

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {video.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {video.likes}
                        </div>
                      </div>
                      <Share2 className="h-4 w-4 hover:text-yellow-400 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-8 border border-yellow-500/20 shadow-2xl shadow-yellow-500/10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Follow My Journey
              </h3>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Get daily trading tips, luxury lifestyle content, and
                behind-the-scenes moments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-3 shadow-lg shadow-pink-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-2">🎵</span>
                  Follow on TikTok
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-3 shadow-lg shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <Youtube className="mr-2 h-5 w-5" />
                  Subscribe on YouTube
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
