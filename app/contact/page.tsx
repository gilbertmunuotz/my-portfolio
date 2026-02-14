import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Something <span className="text-green-500">Great</span>
        </h2>

        <p className="text-muted-foreground mb-10">
          Open to collaborations, freelance opportunities, and
          product-focused engineering roles.
        </p>

        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact Me
        </Button>

      </div>
    </section>
  )
}