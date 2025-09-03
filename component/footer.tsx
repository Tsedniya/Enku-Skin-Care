"use client"

import { Sparkles, Heart } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-rose-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-green-400 bg-clip-text text-transparent">
                  Enku Skin House
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Your premier destination for professional skin care treatments. We specialize exclusively in advanced skin
              care solutions designed to enhance your natural beauty and promote healthy, radiant skin.
            </p>
            <p className="text-sm text-gray-500">Licensed • Certified • Trusted by 100+ clients</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("treatments")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                <strong className="text-white">Phone:</strong> 0933219523 // 0972337071
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong> Yanchiwnesh@gmail.com
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Address:</strong> Bole Ambassador Hotel 2nd Floor
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Hours:</strong> Mon-Fri 9AM-6PM, Sat 9AM-4PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Enku Skin House. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
              <span className="text-gray-600">|</span>
              <button className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
              <span className="text-gray-600">|</span>
              <div className="flex items-center space-x-1 text-gray-400">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-rose-400 fill-current" />
                <span>for beautiful skin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
