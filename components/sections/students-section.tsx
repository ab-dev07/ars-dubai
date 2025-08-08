"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Users,
  DollarSign,
  Globe,
  Quote,
  Clock,
  Play,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { students } from "@/lib/data/students";
import { fadeInUp, staggerContainer } from "@/lib/utils/animations";
import Image from "next/image";

export function StudentsSection() {
  const communityStats = [
    {
      number: "5,247",
      label: "Students Taught",
      icon: Users,
      color: "from-blue-400 to-blue-600",
    },
    {
      number: "$200K",
      label: "Student Profits",
      icon: DollarSign,
      color: "from-green-400 to-green-600",
    },
    {
      number: "94%",
      label: "Success Rate",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      number: "12",
      label: "Countries",
      icon: Globe,
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section
      id="students"
      className="py-16 px-6 bg-gradient-to-r from-yellow-500/5 to-transparent"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Student Success Stories
              </span>
            </h2>
            <Trophy className="h-8 w-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real students, real results. Over 5,247 lives transformed through my
            golden strategies.
          </p>
        </motion.div>

        {/* Student Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {students.map((student, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="relative group">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${student.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all duration-300`}
                ></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-yellow-500/20 shadow-lg shadow-yellow-500/10 hover:border-yellow-400 transition-all duration-300 transform group-hover:scale-105">
                  {/* Student Header */}
                  <div className="flex items-center mb-4">
                    <Image
                      src={student.image || "/placeholder.svg"}
                      alt={student.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full border-2 border-yellow-500 mr-4 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {student.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {student.profession}, {student.age}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {student.location}
                      </p>
                    </div>
                  </div>

                  {/* Profit Display */}
                  <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg p-4 mb-4 border border-green-500/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">
                        Starting Capital
                      </span>
                      <span className="text-red-400 font-bold">
                        {student.before}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">
                        Current Portfolio
                      </span>
                      <span className="text-green-400 font-bold">
                        {student.after}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">
                        Total Profit
                      </span>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 font-bold">
                        {student.profit}
                      </Badge>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4">
                    <Quote className="h-6 w-6 text-yellow-400 mb-2" />
                    <p className="text-gray-300 italic leading-relaxed">
                      "{student.quote}"
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {student.timeframe}
                    </div>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                      ✓ Verified Results
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Student Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-yellow-400">
            Community Impact
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-yellow-500/20 shadow-lg shadow-yellow-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Community CTA */}
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
                Ready to Join Them?
              </h3>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Don't let another day pass watching others succeed. Your
                transformation starts with a single decision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-3 shadow-lg shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join 5,247 Successful Students
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-8 py-3 bg-transparent backdrop-blur-sm"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Success Stories
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
