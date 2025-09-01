"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Sparkles, Sun, Zap, Star, User } from "lucide-react"

export default function Treatments() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("treatments")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const treatments = [
    {
      icon: Droplets,
      title: "Deep Skin Cleansing",
      description: "Removes impurities and unclogs pores for a fresh, clear complexion.",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Sparkles,
      title: "Hydrating Facial Treatment",
      description: "Deep moisture boost to combat dryness and dullness.",
      color: "from-rose-400 to-pink-400",
    },
    {
      icon: Star,
      title: "Anti-Aging Skin Therapy",
      description: "Helps reduce the appearance of fine lines and improves skin elasticity.",
      color: "from-purple-400 to-indigo-400",
    },
    {
      icon: Zap,
      title: "Acne & Blemish Control",
      description: "Targeted treatments for breakouts and problem skin.",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Sun,
      title: "Brightening & Glow Enhancement",
      description: "Revives tired, uneven skin for a radiant, glowing look.",
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: User,
      title: "Personalized Skin Care Consultation",
      description: "Skin analysis and treatment recommendations based on your unique needs.",
      color: "from-teal-400 to-cyan-400",
    },
  ]

  return (
    <section id="treatments" className="py-20 px-4 bg-gradient-to-br from-rose-50 via-white to-green-50">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-rose-400 to-green-400 bg-clip-text text-transparent">
              Skin Care Treatments
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of professional skin care treatments, each designed to address specific
            skin concerns and enhance your natural beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm ${
                isVisible ? `opacity-100 translate-y-0 delay-${index * 100}` : "opacity-0 translate-y-10"
              }`}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${treatment.color} rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <treatment.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-rose-600 transition-colors">
                  {treatment.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">{treatment.description}</CardDescription>
             
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
        
        </div>
      </div>
    </section>
  )
}
