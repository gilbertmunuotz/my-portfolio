"use client"

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion"
import * as React from "react"

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}
