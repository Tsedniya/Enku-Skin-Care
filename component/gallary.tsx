"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const galleryImages = [
    {
      src: "/photo_2025-09-07_11-47-46.jpg",
      alt: "Before and After Acne Treatment",
      title: "Acne Treatment",
      description: "our amazing specialized acne treatment program",
    },
    {
      src: "/photo_2025-09-07_11-47-34.jpg",
      alt: "Hydrating Facial Treatment Process",
      title: "Hydrating Facial Treatment",
      description: "Deep moisturizing treatment for glowing, healthy skin",
    },
    {
      src: "/photo_2025-10-01_15-44-14.jpg",
      alt: "Anti-Aging Treatment Results",
      title: "Hyluronic Acid For Dry Skin",
      description: "Visible reduction in fine lines and improved skin elasticity",
    },
    {
      src: "/photo_2025-10-01_15-43-57.jpg",
      alt: "Skin Brightening Before and After",
      title: "Micro needling",
      description: "Radiant, even-toned skin after our micro needling",
    },
    {
      src: "/photo_4_2025-09-07_11-10-32.jpg",
      alt: "Black Head Treatment Session",
      title: "Black Head Session",
      description: "Professional deep pore cleansing for clear, fresh skin",
    },
    {
      src: "/photo_2025-09-30_21-10-07.jpg",
      alt: "Green Micro Crystal",
      title: "Green Micro Crystal Treatment",
      description: "Professional green micro crystal treatment",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("gallery")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, galleryImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-rose-400 to-green-400 bg-clip-text text-transparent">
              Treatment Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the amazing transformations and professional treatments that have helped our clients achieve healthy,
            radiant skin.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Slider */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-[350px] lg:h-[450px] bg-black">
              <Image
                src={galleryImages[currentSlide].src || "/placeholder.svg"}
                alt={galleryImages[currentSlide].alt}
                fill
                className="object-contain transition-all duration-500"
              />

              {/* Overlay with content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {galleryImages[currentSlide].title}
                  </h3>
                  <p className="text-lg text-white/90 max-w-2xl">{galleryImages[currentSlide].description}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 group"
              >
                <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 group"
              >
                <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </button>

              {/* Auto-play control */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
              >
                {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  currentSlide === index
                    ? "ring-4 ring-rose-400 scale-110"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-contain bg-black"
                />
              </button>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-rose-400 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
