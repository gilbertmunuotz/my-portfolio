'use client'

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

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
          asChild
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <Link
            href="mailto:officialgilbert45@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            Contact Me
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}