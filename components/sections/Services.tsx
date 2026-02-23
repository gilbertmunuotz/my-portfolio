"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Globe, Smartphone, Database } from "lucide-react"
import { motion, Variants } from "framer-motion"

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration: 0.6,
            ease: "easeOut"
        }
    })
}

export default function Page() {
    return (
        <section className="py-16 md:py-24">
            {/* Section Header */}
            <div className="mb-12">
                <h1 className="text-3xl font-bold tracking-tight">
                    Technical <span className="text-green-500">Focus</span>
                </h1>
                <p className="text-muted-foreground mt-4 text-base">
                    My core engineering capabilities across backend systems,
                    cross-platform applications, and performance-driven architecture.
                </p>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2">

                {/* Backend & API */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={cardVariants}
                    custom={0}
                >
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Server className="w-6 h-6 text-green-500" />
                            <CardTitle className="text-lg">
                                Backend & API Architecture
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">
                                Designing scalable REST APIs, implementing JWT/OAuth
                                authentication, and structuring efficient data layers using
                                Prisma and MySQL.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Web Apps */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={cardVariants}
                    custom={0.15}
                >
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Globe className="w-6 h-6 text-green-500" />
                            <CardTitle className="text-lg">
                                Modern Web Applications
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">
                                Building fast and scalable web applications with server-side rendering,
                               high performant routing and secure authentication & data flows.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Mobile Apps */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={cardVariants}
                    custom={0.3}
                >
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Smartphone className="w-6 h-6 text-green-500" />
                            <CardTitle className="text-lg">
                                Cross-Platform Mobile Apps
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">
                                Developing performant React Native Mobile applications with clean UI, best UX,
                                optimized state management, and scalable architecture style.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Database & Performance */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={cardVariants}
                    custom={0.45}
                >
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Database className="w-6 h-6 text-green-500" />
                            <CardTitle className="text-lg">
                                Database & Performance Optimization
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">
                                Designing performant schemas, optimizing complex queries, and managing massive
                                datasets with a focus on speed, scalability, and data integrity.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>

            </div>
        </section>
    )
}