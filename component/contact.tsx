"use client"
import { FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Instagram} from "lucide-react"

export default function Contact() {
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

    const element = document.getElementById("contact")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-rose-50 via-white to-green-50">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-rose-400 to-green-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your skin care journey? We're here to help you achieve the healthy, radiant skin you deserve.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-gray-800 mb-2">0933219523 // 0972337071</p>
                  <p className="text-gray-600">
                    Call us for immediate assistance or to book your appointment over the phone.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Yanchiwnesh@gmail.com</p>
                  <p className="text-gray-600">
                    Send us your questions or concerns, and we'll respond within 24 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Bole Ambassador Hotel 2nd Floor </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mon - Fri</span>
                      <span className="font-semibold text-gray-800">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold text-gray-800">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-800">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Card className="bg-gradient-to-br from-rose-100 to-pink-100 border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Stay updated with our latest skin care tips and special offers!
                </p>
                <div className="flex space-x-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/enku_skincare_" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full cursor-pointer hover:scale-110 transition-transform"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@enkuskincare" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full cursor-pointer hover:scale-110 transition-transform"
                  >
                    <FaTiktok className="h-5 w-5 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>


            <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Appointments only - no walk-ins</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>24-hour cancellation policy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Free consultation with first visit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>All products are cruelty-free</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </div>
    </section>
  )
}
