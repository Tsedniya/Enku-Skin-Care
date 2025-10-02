"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-rose-400">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium tracking-wide uppercase">Premium Skin Care</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Skin Deserves{" "}
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-green-400 bg-clip-text text-transparent">
                  Expert Care
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Personalized Skin Care Treatments for Healthy, Radiant Skin
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("treatments")}
                size="lg"
                className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 group"
              >
                Explore Treatments
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("gallery")}
                variant="outline"
                size="lg"
                className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Our Gallery
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400">100+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">100%</div>
                <div className="text-sm text-gray-600">Original Products</div>
              </div>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-green-200 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/photo_4_2025-09-07_11-10-32.jpg"
                  alt="Glowing healthy skin treatment"
                  width={500}
                  height={600}
                  className="rounded-2xl object-cover w-full aspect-square sm:h-[600px] sm:aspect-auto"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <Sparkles className="h-6 w-6 text-rose-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
