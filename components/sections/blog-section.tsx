"use client"

import { motion } from "framer-motion"
import { BookOpen, MessageCircle, Eye, ThumbsUp, Share2, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/data/blog"
import { fadeInUp, staggerContainer } from "@/lib/utils/animations"

export function BlogSection() {
  const blogStats = [
    { number: "80k", label: "Monthly Readers", icon: Eye },
    { number: "69", label: "Published Articles", icon: BookOpen },
    { number: "50", label: "Guest Writers", icon: MessageCircle },
    { number: "$30K", label: "Writer Payments", icon: ThumbsUp },
  ]

  return (
    <section id="blog" className="py-16 px-6 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Golden Trading Blog
              </span>
            </h2>
            <MessageCircle className="h-8 w-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get paid up to $500 per article! Share your trading insights and join our community of writers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold shadow-lg shadow-yellow-500/25"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Write for Us - Earn $500!
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Writer Community
            </Button>
          </div>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl shadow-yellow-500/10">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Featured Article"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white font-bold">FEATURED</Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Alex Thompson"
                      className="w-10 h-10 rounded-full border-2 border-yellow-500"
                    />
                    <div>
                      <div className="text-white font-semibold">Alex Thompson</div>
                      <div className="text-gray-400 text-sm">Dec 15, 2024 • 12 min read</div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    How I Made $127K This Month Using One Simple Strategy
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    December has been my best month yet. I'll break down exactly how I used the Golden Cross strategy to
                    generate $127,450 in profits, including the specific trades, timing, and risk management techniques
                    that made it possible.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        47.2K views
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        2.1K likes
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        389 comments
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg shadow-yellow-500/10 hover:border-yellow-400 transition-all duration-300 cursor-pointer">
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          post.category === "Psychology"
                            ? "bg-purple-500/80"
                            : post.category === "Success Story"
                              ? "bg-green-500/80"
                              : "bg-blue-500/80"
                        } text-white`}
                      >
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-sm">
                      <div className="flex items-center bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
                        <Eye className="h-3 w-3 mr-1" />
                        <span className="text-white">{post.views}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                        {post.readTime}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img
                          src="/placeholder.svg?height=32&width=32"
                          alt={post.author}
                          className="w-8 h-8 rounded-full border border-yellow-500"
                        />
                        <span className="text-gray-300 text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-400">
                        <div className="flex items-center">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          {post.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          {post.comments}
                        </div>
                        <Share2 className="h-4 w-4 hover:text-yellow-400 cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-yellow-400">Blog Performance</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {blogStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-yellow-500/20 shadow-lg shadow-yellow-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-black" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
