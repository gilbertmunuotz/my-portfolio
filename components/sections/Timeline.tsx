import { Reveal } from "@/components/ui/motion/reveal"
import { StaggerList } from "@/components/ui/motion/stagger-list"
import { Badge } from "@/components/ui/badge"
import { Section, SectionHeader } from "@/components/ui/section"
import { experiences } from "@/lib/data/experiences"
import { techStack } from "@/lib/data/tech-stack"

export default function ExperienceTimeline() {
  return (
    <Section
      id="journey"
      aria-labelledby="journey-heading"
      className="scroll-mt-20"
    >
      <SectionHeader
        id="journey-heading"
        title="Professional"
        accent="Journey"
      />

      <div className="relative grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="my-4 text-base font-semibold text-muted-foreground">
            Core Technologies
          </h3>
          <StaggerList className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-3 py-1.5 text-sm font-normal"
              >
                {tech}
              </Badge>
            ))}
          </StaggerList>
        </div>

        <div className="relative">
          <div
            className="absolute top-0 left-3 h-full w-px bg-border"
            aria-hidden
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 0.08} className="relative pl-10">
                <span
                  className="border-brand bg-background absolute top-1.5 left-0 h-6 w-6 rounded-full border-2"
                  aria-hidden
                />
                <p className="text-sm font-medium text-brand">{exp.year}</p>
                <h4 className="font-semibold">{exp.role}</h4>
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand underline-offset-2 transition-opacity hover:opacity-90"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
