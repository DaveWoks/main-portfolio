import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Systems", href: "#systems" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <a
            href="#top"
            className="text-base font-semibold tracking-[0.2em] text-white"
            aria-label="Home"
          >
            WDC
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button size="sm">
            Let&apos;s Talk
          </Button>
        </nav>
      </Container>
    </header>
  )
}
