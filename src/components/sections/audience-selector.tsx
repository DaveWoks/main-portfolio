import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

const audiences = ["Recruiters", "Engineers", "Clients", "Businesses"]

export function AudienceSelector() {
  return (
    <section id="audience-selector" className="py-12">
      <Container>
        <div className="flex flex-col gap-6 border-y border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <h2 className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
            View through a different lens
          </h2>

          <div className="flex flex-wrap gap-3">
            {audiences.map((audience) => (
              <Button key={audience} variant="outline" size="sm">
                {audience}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
