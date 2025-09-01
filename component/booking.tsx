"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Booking() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    date: "",
    time: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("booking")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
    alert("Thank you! Your appointment request has been submitted. We will contact you shortly to confirm.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="booking" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Book Your{" "}
            <span className="bg-gradient-to-r from-rose-400 to-green-400 bg-clip-text text-transparent">
              Appointment
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your skin? Schedule your personalized treatment today and take the first step towards
            healthier, more radiant skin.
          </p>
        </div>

        {/* Booking Form Only */}
        <div className="max-w-3xl mx-auto">
          <Card
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800">Schedule Your Treatment</CardTitle>
              <CardDescription>
                Fill out the form below and we'll contact you to confirm your appointment within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treatment">Preferred Treatment *</Label>
                  <Select onValueChange={(value) => handleInputChange("treatment", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Personalized Skin Care Consultation</SelectItem>
                      <SelectItem value="deep-cleansing">Deep Skin Cleansing</SelectItem>
                      <SelectItem value="hydrating">Hydrating Facial Treatment</SelectItem>
                      <SelectItem value="anti-aging">Anti-Aging Skin Therapy</SelectItem>
                      <SelectItem value="acne-control">Acne & Blemish Control</SelectItem>
                      <SelectItem value="brightening">Brightening & Glow Enhancement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Select onValueChange={(value) => handleInputChange("time", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Notes (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Any specific concerns or questions about your skin?"
                    rows={4}
                  />
                </div>

               <Button
                type="submit"
                className="mx-auto block bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white py-2.5 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                Submit Appointment Request
              </Button>

              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

