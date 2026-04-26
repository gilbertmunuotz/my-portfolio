"use client"

import * as React from "react"
import { m, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

const defaultViewport = { once: true, margin: "-80px" } as const

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function Reveal({ children, className, delay = 0, duration = 0.5 }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <m.div
      className={cn(className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </m.div>
  )
}
