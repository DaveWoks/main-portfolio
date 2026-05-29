import { Navbar } from "@/components/navigation/navbar"
import { AudienceSelector } from "@/components/sections/audience-selector"
import { Hero } from "@/components/sections/hero"

export default function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <Hero />
        <AudienceSelector />
      </main>
    </>
  )
}
