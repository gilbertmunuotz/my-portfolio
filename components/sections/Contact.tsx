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
      className="scroll-mt-20"
    >
      <Reveal className="max-w-2xl">

        <h2
          id="contact-heading"
          className="
            text-4xl
            font-bold
            tracking-[-0.03em]
            sm:text-5xl
          "
        >
          Let&apos;s Build Something Great
        </h2>


        <p
          className="
            my-8
            max-w-xl
            text-base
            leading-7
            text-muted-foreground
            sm:text-lg
            sm:leading-8
          "
        >
          Open to collaborations, freelance opportunities, and product-focused
          engineering roles.
        </p>


        <Button
          asChild
          size="lg"
          variant="brand"
          className="
            font-medium
            tracking-tight
          "
        >
          <Link
            href="mailto:officialgilbert45@gmail.com"
            className="inline-flex items-center gap-2"
          >
            <Mail
              className="h-5 w-5"
              aria-hidden
            />

            Contact Me
          </Link>
        </Button>

      </Reveal>
    </Section>
  )
}