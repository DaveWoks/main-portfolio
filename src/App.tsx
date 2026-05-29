import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight">
          Main Portfolio
        </h1>

        <p className="mt-4 text-zinc-400 text-lg">
          Frontend system initialized successfully.
        </p>

        <div className="mt-8 flex gap-4">
          <Button>
            Launch Project
          </Button>

          <Button variant="outline">
            View Work
          </Button>
        </div>
      </div>
    </main>
  )
}