
import Header from "@/component/header"
import Hero from "@/component/hero"
import About from "@/component/about"
import Treatments from "@/component/treatments"
import Booking from "@/component/booking"
import Contact from "@/component/contact"
import Footer from "@/component/footer"

export default function Home() {
  return (

    
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-green-50">
      <Header />
      <Hero />
      <About/>
      <Treatments />
      <Booking />
      <Contact />
      <Footer />

      
    </div>
  )
}
