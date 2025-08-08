"use client"

import { useState, useEffect } from "react"
import { AnimatedBackground } from "@/components/shared/animated-background"
import { Navigation } from "@/components/shared/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { AboutSection } from "@/components/sections/about-section"
import { PersonalSection } from "@/components/sections/personal-section"
import { VideosSection } from "@/components/sections/videos-section"
import { StrategiesSection } from "@/components/sections/strategies-section"
import { StudentsSection } from "@/components/sections/students-section"
import { BooksSection } from "@/components/sections/books-section"
import { EarningsSection } from "@/components/sections/earnings-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      <AnimatedBackground mousePosition={mousePosition} />
      <Navigation />

      <HeroSection />
      <StatsSection />
      <AboutSection />
      <PersonalSection />
      <VideosSection />
      <StrategiesSection />
      <StudentsSection />
      {/* <BooksSection /> */}
      <EarningsSection />
      {/* <BlogSection /> */}
      <ContactSection />

      <WhatsAppButton />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
