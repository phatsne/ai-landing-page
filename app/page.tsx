import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Challenges from "@/components/challenges"
import Features from "@/components/features"
import Process from "@/components/process"
import Partners from "@/components/partners"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Header />
      <Hero />
      <Challenges />
      <Features />
      <Process />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  )
}
