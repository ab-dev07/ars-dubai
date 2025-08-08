"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/Image";
// import profile3 from '../../assets/profile3.jpeg'
import profile3 from "../../assets/trading2.mp4";
import profile from "../../assets/profile2.jpg";

export function AboutSection() {
  const achievements = [
    {
      icon: "🏆",
      title: "Top 1% Trader",
      desc: "Ranked globally",
      year: "2023",
    },
    {
      icon: "📖",
      title: "Best-Selling Author",
      desc: "3 trading books",
      year: "2022",
    },
    {
      icon: "🎓",
      title: "Mentor of the Year",
      desc: "Trading Academy",
      year: "2023",
    },
    {
      icon: "💎",
      title: "Legacy Earners Club ",
      desc: "Where Your First Million Begins",
      year: "2021",
    },
  ];

  const coreValues = [
    { icon: "🎯", title: "Precision", desc: "Every trade calculated" },
    { icon: "🛡️", title: "Protection", desc: "Risk management first" },
    { icon: "📚", title: "Education", desc: "Knowledge is power" },
    { icon: "🤝", title: "Integrity", desc: "Honest & transparent" },
  ];

  const quickStats = [
    { number: "50k", label: "Portfolio", color: "text-green-400" },
    { number: "95%", label: "Win Rate", color: "text-yellow-400" },
    { number: "8", label: "Years", color: "text-blue-400" },
  ];

  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-br from-black to-gray-900"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              The Man Behind The Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From a broke college dropout to an elite trader and mentor
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Philosophy Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-yellow-500/20">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  My Trading Philosophy
                </h3>
                <Quote className="h-8 w-8 text-yellow-400 mb-4" />
                <p className="text-gray-300 leading-relaxed mb-6">
                  "Trading isn't about being right all the time - it's about
                  being profitable over time. I focus on risk management first,
                  psychology second, and strategy third. This approach has made
                  me millions and can do the same for you."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src={profile}
                    width={48}
                    height={48}
                    alt="Arsdubai"
                    className="w-12 h-12 rounded-full border-2 border-yellow-500"
                  />
                  <div>
                    <div className="text-white font-semibold">Arsdubai</div>
                    <div className="text-yellow-400 text-sm">
                      Professional Forex King
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-700 text-center"
                >
                  <div className="text-3xl mb-2">{value.icon}</div>
                  <h4 className="text-white font-semibold mb-1">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Photo */}
            <div className="relative">
              <video
                // poster={video.thumbnail}
                // className="w-full h-90 object-cover"
                muted
                loop
                playsInline
                preload="metadata"
                controls
                autoPlay={true}
                src={profile3}
                className="w-auto h-auto object-contain rounded-2xl border border-yellow-500/30"
              />

              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3">
                <div className="text-yellow-400 font-bold">Arsdubai</div>
                <div className="text-gray-300 text-sm">
                  Professional Forex King
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-700"
                >
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievement Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-yellow-400">
            Major Achievements
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-yellow-500/20 shadow-lg shadow-yellow-500/10"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-white font-semibold mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm mb-2">{achievement.desc}</p>
                <div className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-1 rounded text-xs">
                  {achievement.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
