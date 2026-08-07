"use client"

import { m, type Variants } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Home() {
  return (
    <m.section
      id="about"
      className="flex h-full flex-col justify-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <m.span
        variants={item}
        className="
          font-mono
          text-sm
          font-medium
          uppercase
          tracking-[0.2em]
          text-brand
          sm:text-base
        "
      >
        👋 Hi, I&apos;m
      </m.span>


      <m.h1
        variants={item}
        className="
          mt-4
          text-6xl
          font-extrabold
          leading-[0.95]
          tracking-[-0.05em]
          sm:text-7xl
          lg:text-8xl
        "
      >
        Gilbert
      </m.h1>


      <m.h2
        variants={item}
        className="
          mt-6
          font-mono
          text-xl
          font-medium
          tracking-tight
          text-muted-foreground
          sm:text-2xl
        "
      >
        <TypeAnimation
          sequence={[
            "Software Engineer..",
            2000,
            "Full Stack Developer..",
            2000,
            "AI Engineer...",
            2000,
            "ML Enthusiast...",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={true}
        />
      </m.h2>


      <m.p
        variants={item}
        className="
          mt-8
          max-w-xl
          text-base
          leading-7
          text-muted-foreground
          sm:text-lg
          sm:leading-8
        "
      >
        I build scalable web, mobile, and AI-powered applications focused on
        performance, usability, and solving real-world problems.
      </m.p>


      <m.div
        variants={item}
        whileHover={{ y: -3 }}
        className="mt-10"
      >
        <a
          href="#projects"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-brand
            px-7
            py-3
            text-sm
            font-semibold
            tracking-tight
            text-white
            shadow-lg
            transition-all
            hover:scale-105
          "
        >
          Explore My Work

          <ArrowDown
            size={18}
            className="transition-transform group-hover:translate-y-1"
          />
        </a>
      </m.div>

    </m.section>
  )
}