"use client"

import { useEffect, useState } from "react"
import { Award, Heart, Leaf, Users } from "lucide-react"

export default function About() {
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

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-rose-400 to-green-400 bg-clip-text text-transparent">
              Enku Skin House
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At Enku Skin House, we specialize exclusively in advanced skin care treatments designed to improve your
              skin health, texture, and glow. Our mission is simple — healthy skin is beautiful skin.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 5 years of experience and certified expertise in skin care, we focus solely on what we do best:
              transforming your skin through personalized, professional treatments that deliver real results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Heart,
              title: "Skin Care Focused",
              description: "We specialize exclusively in skin care treatments, ensuring expert knowledge and results.",
              delay: "delay-100",
            },
            {
              icon: Award,
              title: "Certified Experts",
              description:
                "Our team holds professional certifications in advanced skin care techniques and treatments.",
              delay: "delay-200",
            },
            {
              icon: Leaf,
              title: "Original Products",
              description:
                "We use only original products and organic products that are gentle yet effective on your skin.",
              delay: "delay-300",
            },
            {
              icon: Users,
              title: "Personalized Care",
              description:
                "Every treatment is customized to your unique skin type and specific concerns for optimal results.",
              delay: "delay-400",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-green-50 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? `opacity-100 translate-y-0 ${feature.delay}` : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
