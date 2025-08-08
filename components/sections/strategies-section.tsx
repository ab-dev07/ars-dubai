"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Lightbulb, Trophy, Rocket, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis } from "recharts"
import { strategies } from "@/lib/data/strategies"

export function StrategiesSection() {
  const [currentStrategyIndex, setCurrentStrategyIndex] = useState(0)

  return (
    <section id="strategies" className="py-16 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                My Golden Strategies
              </span>
            </h2>
            <Trophy className="h-8 w-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The exact strategies that transformed my $10K account into life-changing gains. Proven, tested, and profitable.
          </p>
        </motion.div>

        {/* Strategy Selector */}
        <div className="flex  justify-center mb-12">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl p-2 border border-yellow-500/20">
            {strategies.map((strategy, index) => (
              <button
                key={index}
                onClick={() => setCurrentStrategyIndex(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all max-sm:w-full duration-300 ${currentStrategyIndex === index
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                  : "text-gray-300 hover:text-yellow-400"
                  }`}
              >
                {strategy.icon} {strategy.name}
              </button>
            ))}
          </div>
        </div>

        {/* Current Strategy Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${strategies[currentStrategyIndex].color} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl sm:mr-4 mb-4 sm:mb-0`}
              >
                {strategies[currentStrategyIndex].icon}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {strategies[currentStrategyIndex].name}
                </h3>
                <p className="text-yellow-400 text-sm sm:text-base">Signature Strategy</p>
              </div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg mb-6">
              {strategies[currentStrategyIndex].description}
            </p>

            {/* Strategy Stats */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Win Rate", value: strategies[currentStrategyIndex].winRate, color: "text-green-400" },
                { label: "Avg Return", value: strategies[currentStrategyIndex].avgReturn, color: "text-yellow-400" },
                { label: "Risk Level", value: strategies[currentStrategyIndex].riskLevel, color: "text-blue-400" },
                { label: "Timeframe", value: strategies[currentStrategyIndex].timeframe, color: "text-purple-400" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-700"
                >
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className={`text-lg sm:text-xl font-bold ${stat.color}`}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold mb-3">Key Features:</h4>
              {strategies[currentStrategyIndex].features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Chart */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-yellow-400">Weekly Performance</CardTitle>
                <CardDescription className="text-gray-400">Last 5 trading days</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    profit: { label: "Profit", color: "#FFD700" },
                  }}
                  className="h-[180px] sm:h-[200px] w-full mx-auto"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={strategies[currentStrategyIndex].chart}>
                      <defs>
                        <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#FFD700" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="day" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="profit"
                        stroke="#FFD700"
                        strokeWidth={3}
                        fill="url(#profitGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="mt-6 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-6 sm:px-8 py-3 shadow-lg shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Learn This Strategy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
