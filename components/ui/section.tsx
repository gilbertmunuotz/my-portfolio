import * as React from "react"

import { cn } from "@/lib/utils"

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return <section className={cn("py-16 md:py-24", className)} {...props} />
}

type SectionHeaderProps = {
  id: string
  title: string
  accent: string
  description?: string
  className?: string
}

export function SectionHeader({
  id,
  title,
  accent,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 id={id} className="text-3xl font-bold tracking-tight">
        {title} <span className="text-brand">{accent}</span>
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-4 text-base">{description}</p>
      ) : null}
    </div>
  )
}
