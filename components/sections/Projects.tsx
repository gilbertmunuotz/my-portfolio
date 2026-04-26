import { ExternalLink } from "lucide-react"

import { projects } from "@/lib/data/projects"
import { Reveal } from "@/components/ui/motion/reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/ui/section"

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20"
    >
      <SectionHeader
        id="projects-heading"
        className="mb-4"
        title="Latest"
        accent="Projects"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1}>
            <Card className="transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <Badge
                      key={`${project.title}-${t}-${i}`}
                      variant="outline"
                      className="text-xs font-normal"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-2 hover:border-brand hover:text-brand"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
