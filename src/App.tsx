import { Navbar } from "@/components/navigation/navbar"
import { Hero } from "@/components/sections/hero"

export default function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <Hero />
      </main>
    </>
  )
}
