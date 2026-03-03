"use client"

import { motion } from "framer-motion";

const experiences = [
    {
        year: "2020 – 2023",
        role: "Ordinary Diploma in IT",
        company: "Dar es Salaam Institute of Technology",
        url: "https://www.dit.ac.tz",
    },
    {
        year: "2023 – 2024",
        role: "Computer Technician",
        company: "WorkSpace Computers Limited",
    },
    {
        year: "2024 – Present",
        role: "Independent Full-Stack Developer (Contract)",
        company: "Freelance",
    },
    {
        year: "June 2025 - September 2025",
        role: "Developer - emAI Conference",
        company: "EnhanceMind AI Conference",
        url: "https://emaiconference.com",
    },
    {
        year: "Oct 2025 – Present",
        role: "Chief Technology Officer (CTO)",
        company: "Momentam.io",
        url: "https://momentam.io",
    },
]

const techStack = [
    "Next Js",
    "React Native",
    "Prisma",
    "MySQL",
    "JWT Auth",
    "REST API's",
    "Tailwind CSS",
    "TypeScript",
    "Java",
    "Redux Toolkit",
    "React",
    "Spring Boot",
    "PostgreSQL",
    "Native wind",
    "Framer Motion",
    "Material UI",
    "Expo",
    "Express Js",
    "Shadcn UI",
    "Postman",
    "Render",
    "Sequelize",
    "Material UI",
    "Mongo DB",
    "Git",
    "Nest Js",
    "WebSocket",
    "Sonner",
    "Vercel",
    "Passport Js",
    "Railway",
    "Recharts",
    "Maven",
    "Node Mailer",
    "HeroUI",
    "Radix UI",
    "Uniwind",
]

export default function ExperienceTimeline() {
    return (
        <section className="py-16 md:py-24">
            {/* Section Title */}
            <h1 className="text-3xl font-bold tracking-tight">
                Professional <span className="text-green-500">Journey</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-16 relative">

                {/* LEFT SIDE – Tech Stack */}
                <div>
                    <h3 className="font-semibold text-muted-foreground my-4 text-base">Core Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: false }}
                                className="px-4 py-2 text-sm border cursor-pointer rounded-lg hover:bg-green-500/10 transition"
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
                                {exp.url ? (
                                    <a
                                        href={exp.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-green-400 hover:text-green-500 transition-colors"
                                    >
                                        {exp.company}
                                    </a>
                                ) : (
                                    <p className="text-sm text-muted-foreground">
                                        {exp.company}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>

    )
}