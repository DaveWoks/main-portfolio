import type { ReactNode } from "react"

import { Container } from "@/components/layout/container"

type SectionShellProps = {
  id: string
  title: string
  children: ReactNode
}

export function SectionShell({ id, title, children }: SectionShellProps) {
  return (
    <section id={id} className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>

        {children}
      </Container>
    </section>
  )
}
