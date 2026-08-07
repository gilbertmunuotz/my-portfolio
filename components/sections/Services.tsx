import { Database, Globe, Server, Smartphone } from "lucide-react"

import { services } from "@/lib/data/services"
import { Reveal } from "@/components/ui/motion/reveal"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon]

          return (
            <Reveal key={s.id} delay={i * 0.12}>
              <Card
                className="
                  flex
                  h-full
                  flex-col
                  transition-[transform,box-shadow]
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand/10
                    "
                  >
                    <Icon
                      className="h-5 w-5 text-brand"
                      aria-hidden
                    />
                  </div>

                  <CardTitle
                    className="
                      pt-1
                      text-lg
                      font-semibold
                      tracking-tight
                    "
                  >
                    {s.title}
                  </CardTitle>
                </CardHeader>


                <CardContent className="flex flex-1">
                  <p
                    className="
                      text-sm
                      leading-6
                      text-muted-foreground
                      sm:text-[15px]
                    "
                  >
                    {s.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}