'use client'

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <section className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl font-bold tracking-tight">
          Let’s Build Something <span className="text-green-500">Great</span>
        </h2>

        <p className="text-muted-foreground text-base my-8">
          Open to collaborations, freelance opportunities, and
          product-focused engineering roles.
        </p>

        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white cursor-pointer"
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact Me
        </Button>
      </motion.div>
    </section>
  )
}