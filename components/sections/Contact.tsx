import Link from "next/link"
import { Mail } from "lucide-react"

import { Reveal } from "@/components/ui/motion/reveal"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

export default function ContactSection() {
  return (
    <Section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 py-24 text-center"
    >
      <Reveal>
        <h2
          id="contact-heading"
          className="text-3xl font-bold tracking-tight"
        >
          Let’s Build Something <span className="text-brand">Great</span>
        </h2>

        <p className="my-8 text-base text-muted-foreground">
          Open to collaborations, freelance opportunities, and product-focused
          engineering roles.
        </p>

        <Button asChild size="lg" variant="brand">
          <Link
            href="mailto:officialgilbert45@gmail.com"
            className="inline-flex items-center gap-2"
          >
            <Mail className="h-5 w-5" aria-hidden />
            Contact Me
          </Link>
        </Button>
      </Reveal>
    </Section>
  )
}
