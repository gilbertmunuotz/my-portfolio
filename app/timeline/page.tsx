"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
    {
        year: "2020 – 2023",
        role: "Ordinary Diploma in IT",
        company: "Dar es Salaam Institute of Technology",
    },
    {
        year: "2023 – 2024",
        role: "Computer Technician & Full-Stack Developer",
        company: "WorkSpace Computers Limited",
    },
    {
        year: "2024 – Present",
        role: "Independent Full-Stack Developer (Contract)",
        company: "Freelance",
    },
    {
        year: "2025 – Present",
        role: "Developer — emAI Conference",
        company: "EnhanceMind AI Conference",
    },
    {
        year: "Oct 2025 – Present",
        role: "Chief Technology Officer (CTO)",
        company: "Momentam.io",
    },
]

const techStack = [
    "Next.js",
    "React Native",
    "Prisma",
    "MySQL",
    "JWT Auth",
    "REST APIs",
    "TailwindCSS",
    "TypeScript",
]

export default function ExperienceTimeline() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <h2 className="text-3xl font-bold mb-16">
                    Professional <span className="text-green-500">Journey</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-16 relative">

                    {/* LEFT SIDE – Tech Stack */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Core Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: false }}
                                    className="px-4 py-2 text-sm border rounded-lg hover:bg-green-500/10 transition"
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE – Timeline */}
                    <div className="relative">

                        {/* Vertical Line */}
                        <div className="absolute left-3 top-0 h-full w-px bg-border" />

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: false }}
                                    className="relative pl-10"
                                >
                                    {/* Dot */}
                                    <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-green-500 bg-background" />

                                    <p className="text-sm text-green-500 font-medium">
                                        {exp.year}
                                    </p>
                                    <h4 className="font-semibold">{exp.role}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {exp.company}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}