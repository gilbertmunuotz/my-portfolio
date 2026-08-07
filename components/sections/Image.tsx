"use client"

import Image from "next/image"
import me from "@/public/me.webp"
import { m } from "framer-motion"


function Badge({
  label,
  className,
  delay = 0,
  duration = 3,
}: {
  label: string
  className: string
  delay?: number
  duration?: number
}) {
  return (
    <m.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, 0],
      }}
      transition={{
        repeat: Infinity,
        duration,
        delay,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
      }}
      className={`
        absolute
        flex
        items-center
        gap-2
        rounded-full
        border
        border-border/50
        bg-background/70
        px-3
        py-1.5
        font-mono
        text-xs
        font-medium
        tracking-tight
        shadow-lg
        backdrop-blur-xl
        transition
        ${className}
      `}
    >
      {label}
    </m.div>
  )
}

export default function ProfileImage() {
  return (
    <m.section
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center overflow-visible px-6">
      {/* Glow */}
      <div
        className="absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand/20 blur-3xl" />

      <m.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        relative 
        h-80 w-64
        sm:h-96 sm:w-72
        lg:h-107.5 lg:w-85
        overflow-hidden 
        rounded-[2rem] 
        border border-white/10 
        bg-white/5 
        shadow-2xl 
        backdrop-blur-xl
        "
      >
        <Image
          src={me}
          alt="Gilbert Munuo"
          fill
          className="object-cover"
          priority
        />
      </m.div>

      <Badge
        label="Next.js"
        className="-left-10 top-12"
        duration={3.5}
      />

      <Badge
        label="React"
        className="-right-10 top-20"
        delay={0.5}
        duration={4}
      />

      <Badge
        label="TypeScript"
        className="hidden sm:flex -left-6 bottom-28"
        delay={1}
        duration={3.8}
      />

      <Badge
        label="Python"
        className="-right-14 bottom-24"
        delay={0.8}
        duration={4.2}
      />

      <Badge
        label="AI / ML"
        className="left-8 -top-8"
        delay={0.3}
      />

      <Badge
        label="React Native"
        className="left-24 -bottom-8"
        delay={1.2}
      />

      <Badge
        label="Node.js"
        className="right-10 -bottom-10"
        delay={0.6}
      />

      <Badge
        label="Prisma"
        className="left-0 top-1/2"
        delay={1.5}
      />

      <Badge
        label="Docker"
        className="hidden sm:flex right-0 top-1/2"
        delay={1}
      />

      <Badge
        label="MySQL"
        className="hidden sm:flex left-16 top-28"
        delay={1.8}
      />

    </m.section>
  )
}