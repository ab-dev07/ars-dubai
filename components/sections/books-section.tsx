"use client"

import { motion } from "framer-motion"
import { BookMarked, Star, Download, Eye, BookOpen, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { books } from "@/lib/data/books"
import { fadeInUp, staggerContainer } from "@/lib/utils/animations"

export function BooksSection() {
  const bookStats = [
    { number: "50K+", label: "Books Sold", icon: BookOpen },
    { number: "4.8/5", label: "Average Rating", icon: Star },
    { number: "47K", label: "Total Downloads", icon: Download },
    { number: "$108K", label: "Book Revenue", icon: DollarSign },
  ]

  return (
    <section id="books" className="py-16 px-6 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <BookMarked className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Best-Selling Trading Books
              </span>
            </h2>
            <Star className="h-8 w-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Over 50,000 copies sold worldwide. Get the knowledge that made me millions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {books.map((book, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-lg shadow-yellow-500/10 hover:border-yellow-400 transition-all duration-300">
                  {book.bestseller && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold">
                        #1 BESTSELLER
                      </Badge>
                    </div>
                  )}

                  {/* Book Cover */}
                  <div className="relative overflow-hidden">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 font-semibold">{book.rating}</span>
                        <span className="text-gray-300">({book.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{book.title}</h3>
                    <p className="text-yellow-400 text-sm mb-3">{book.subtitle}</p>
                    <p className="text-gray-300 text-sm mb-4">{book.description}</p>

                    {/* Book Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div className="bg-gray-800/50 rounded-lg p-2">
                        <div className="text-white font-semibold text-sm">{book.pages}</div>
                        <div className="text-gray-400 text-xs">Pages</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-2">
                        <div className="text-white font-semibold text-sm">{book.published}</div>
                        <div className="text-gray-400 text-xs">Published</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-2">
                        <div className="text-green-400 font-semibold text-sm">{book.downloads}</div>
                        <div className="text-gray-400 text-xs">Downloads</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-yellow-400">{book.price}</div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">Preview Available</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold">
                        <Download className="mr-2 h-4 w-4" />
                        Download Now
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Preview Book
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Book Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-yellow-400">Publishing Success</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {bookStats.map((stat, index) => (
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
