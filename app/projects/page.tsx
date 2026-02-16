"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Momentam Apps",
    description:
      "Minimalist digital wallet for students with JWT authentication, secure PIN transactions, and analytics.",
    tech: ["React Native", "WebSockets", "JWT"],
    link: "https://momentam.io",
  },
  {
    title: "emAI Conference Website",
    description:
      "Official event platform built for scalability and user engagement.",
    tech: ["Next.js", "Prisma", "MySQL"],
    link: "https://emaiconference.com",
  },
  {
    title: "Fizbuz",
    description:
      "AI-powered chatbot app with local LLM integration and authentication system.",
    tech: ["React.js", "MySQL", "Express.js", "Sequelize", "Chart.js"],
    link: "https://fizbuz-delta.vercel.app/login",
  },
  {
    title: "remoteok",
    description:
      "AI-powered chatbot app with local LLM integration and authentication system.",
    tech: ["React Native", "Redux Toolkit", "Nativewind", "Expo"],
    link: "https://github.com/gilbertmunuotz/remoteok",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight mb-4">
        Latest <span className="text-green-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 border rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 hover:border-green-500 hover:text-green-500"
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
