"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-rose-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-green-400 bg-clip-text text-transparent">
              Enku Skin House
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-rose-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-rose-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("treatments")}
              className="text-gray-700 hover:text-rose-400 transition-colors"
            >
              Treatments
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-rose-400 transition-colors"
            >
              Gallery
            </button>
            
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-rose-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-rose-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("treatments")}
                className="text-left text-gray-700 hover:text-rose-400 transition-colors"
              >
                Treatments
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-gray-700 hover:text-rose-400 transition-colors"
              >
                Gallery
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white w-full"
              >
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}