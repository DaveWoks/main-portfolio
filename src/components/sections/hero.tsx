import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
            Portfolio introduction
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Placeholder headline for a premium portfolio experience.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            This supporting text will be replaced with final portfolio copy. For
            now, it describes the work, systems, and outcomes at a high level.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button>
              View Work
            </Button>

            <Button variant="outline">
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
