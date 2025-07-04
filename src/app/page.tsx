import Image from "next/image"

import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import SocialProof from "@/components/landing/SocialProof"
import Footer from "@/components/landing/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Features />
        <SocialProof />
      </main>
      <Footer />
    </div>
  )
}
