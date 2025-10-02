
import Header from "@/component/header"
import Hero from "@/component/hero"
import About from "@/component/about"
import Treatments from "@/component/treatments"
import Contact from "@/component/contact"
import Footer from "@/component/footer"
import Gallery from "@/component/gallary"

export default function Home() {
  return (

    
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-green-50 overflow-hidden">
      <Header />
      <Hero />
      <About/>
      <Treatments />
      <Gallery/>
      <Contact />
      <Footer />

      
    </div>
  )
}
