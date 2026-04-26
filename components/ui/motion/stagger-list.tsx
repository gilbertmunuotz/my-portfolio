"use client"

import * as React from "react"
import { m, useReducedMotion, type Variants } from "framer-motion"

const defaultViewport = { once: true, margin: "-80px" } as const

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.05,
    },
  },
}

const childVar: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

type StaggerListProps = {
  children: React.ReactNode
  className?: string
}

export function StaggerList({ children, className }: StaggerListProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={container}
    >
      {React.Children.map(children, (child, i) => (
        <m.div
          key={React.isValidElement(child) && child.key != null ? String(child.key) : i}
          variants={childVar}
        >
          {child}
        </m.div>
      ))}
    </m.div>
  )
}
