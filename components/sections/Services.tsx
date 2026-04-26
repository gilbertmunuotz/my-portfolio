import { Database, Globe, Server, Smartphone } from "lucide-react"

import { services } from "@/lib/data/services"
import { Reveal } from "@/components/ui/motion/reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/ui/section"

const iconMap = {
  server: Server,
  globe: Globe,
  smartphone: Smartphone,
  database: Database,
} as const

export default function Services() {
  return (
    <Section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20"
    >
      <SectionHeader
        id="services-heading"
        title="Technical"
        accent="Focus"
        description="My core engineering capabilities across backend systems, cross-platform applications, and performance-driven architecture."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon]
          return (
            <Reveal key={s.id} delay={i * 0.12}>
              <Card className="transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Icon className="h-6 w-6 text-brand" aria-hidden />
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {s.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
