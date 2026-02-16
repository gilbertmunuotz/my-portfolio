"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Momentam Mobile Apps",
    description: "Real-time event photography marketplace where users can book photographers, select photo packages, and receive images instantly, while photographers manage bookings and deliver photos seamlessly.",
    tech: ["React Native", "Expo", "Node.js", "JWT", "REST API's"],
    link: "https://momentam.io",
  },
  {
    title: "emAI Conference Website",
    description: "Official event platform for the EnhanceMind AI Conference, designed to support large-scale engagement, Hands-on Workshops, speaker showcases, Networking Opportunities and inclusive AI-focused programming.",
    tech: ["Next.js", "Shadcn UI", "Framer Motion", "Tailwind CSS"],
    link: "https://emaiconference.com",
  },
  {
    title: "Fizbuz",
    description: "A full-stack, responsive expense tracking web application with intuitive UI, featuring interactive income and expense visualizations, monthly summaries, categorized transaction management, and real-time updates.",
    tech: ["React.js", "Redux Toolkit", "Express.js", "Sequelize", "Chart.js", "MySQL", "Render"],
    link: "https://fizbuz-delta.vercel.app/login",
  },
  {
    title: "RemoteOK Mobile App",
    description: "Mobile app that aggregates remote job listings from public APIs, allowing users to browse categorized opportunities and apply via external links.",
    tech: ["React Native", "Redux Toolkit", "Nativewind", "Expo"],
    link: "https://github.com/gilbertmunuotz/remoteok",
  },
  {
    title: "Cyra Recipe",
    description: "Online Recipe search application that retrieves detailed cooking instructions, ingredient lists and time frame based on user input queries. Just type in your ingredients or dish name and browse through a variety of recipes tailored to meet your needs.",
    tech: ["React", "Tailwind CSS", "Vercel", "REST API's"],
    link: "https://dukani-eight.vercel.app",
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
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-2 hover:border-green-500 hover:text-green-500"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="mr-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
