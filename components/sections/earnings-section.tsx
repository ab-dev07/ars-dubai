"use client"

import { motion } from "framer-motion"
import { BarChart3, PieChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts"
import { earningsBreakdown, yearlyEarnings } from "@/lib/data/earnings"

export function EarningsSection() {
  return (
    <section id="earnings" className="py-16 bg-gradient-to-r from-yellow-500/5 to-transparent">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Transparent Earnings Breakdown
              </span>
            </h2>
            <PieChart className="h-8 w-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete transparency – here’s exactly how I built my $1.2M empire
          </p>
        </motion.div>

        {/* Current Year Earnings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-8 border border-green-500/20 shadow-2xl shadow-green-500/10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">2024 Total Earnings</h3>
                <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  $624,000
                </div>
                <p className="text-green-400 text-xl mt-2">+75% from last year</p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {earningsBreakdown.map((source, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700">
                      <div className="text-2xl font-bold text-white mb-2">${source.amount.toLocaleString()}</div>
                      <div className="text-gray-300 mb-2">{source.source}</div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${source.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-yellow-400 text-sm mt-2">{source.percentage}%</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Yearly Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-yellow-500/20 shadow-lg shadow-yellow-500/10">
            <CardHeader>
              <CardTitle className="text-yellow-400 text-center text-2xl">8-Year Earnings Growth</CardTitle>
              <CardDescription className="text-gray-300 text-center">
                From struggling trader to multi-millionaire
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  amount: { label: "Earnings", color: "#FFD700" },
                }}
                className="h-[400px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yearlyEarnings}>
                    <defs>
                      <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#FFD700" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="amount"
                      stroke="#FFD700"
                      strokeWidth={4}
                      dot={{ fill: "#FFD700", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "#FFD700", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Monthly Performance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* This Month's Performance */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">December 2024 Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Trading Profits</span>
                  <span className="text-green-400 font-bold">+$52,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Course Sales</span>
                  <span className="text-yellow-400 font-bold">+$12,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Book Royalties</span>
                  <span className="text-blue-400 font-bold">+$4,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Mentorship</span>
                  <span className="text-purple-400 font-bold">+$6,800</span>
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between items-center text-lg">
                  <span className="text-white font-semibold">Total This Month</span>
                  <span className="text-green-400 font-bold">+$75,900</span>
                </div>
              </div>
            </div>
          </div>

          {/* Goals & Projections */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">2025 Goals</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Portfolio Target</span>
                    <span className="text-yellow-400 font-bold">$1M</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full"
                      style={{ width: "48%" }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">48% Complete ($480,000)</div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Students Target</span>
                    <span className="text-blue-400 font-bold">5,000</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full"
                      style={{ width: "52%" }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">52% Complete (2,600)</div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Annual Revenue</span>
                    <span className="text-green-400 font-bold">$500,000</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">60% Complete ($300,000)</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

  )
}
