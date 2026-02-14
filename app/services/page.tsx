import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Server, Globe, Smartphone, Database } from "lucide-react"

export default function Page() {
    return (
        <section className="mx-14">
            <div className="my-5">
                {/* Section Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Technical <span className="text-green-500">Focus</span>
                    </h1>
                    <p className="text-muted-foreground mt-4 text-base">
                        My core engineering capabilities across backend systems,
                        cross-platform applications, and performance-driven architecture.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 cursor-pointer">
                    {/* Backend & API */}
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Server className="w-6 h-6 text-green-500" />
                            <CardTitle className="text-lg">Backend & API Architecture</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Designing scalable REST APIs, implementing JWT/OAuth
                                authentication, and structuring efficient data layers using
                                Prisma and MySQL.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Web Apps */}
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Globe className="w-6 h-6 text-green-500" />
                            <CardTitle className="text-lg">Modern Web Applications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Building production-grade Next.js applications with SSR,
                                optimized routing, and secure user workflows.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Mobile Apps */}
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Smartphone className="w-6 h-6 text-green-500" />
                            <CardTitle className="text-lg">Cross-Platform Mobile Apps</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Developing performant React Native applications with clean UX,
                                optimized state management, and scalable architecture.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Database & Performance */}
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Database className="w-6 h-6 text-green-500" />
                            <CardTitle className="text-lg">Database & Performance Optimization</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Crafting efficient schemas, optimizing queries, and managing
                                large datasets for reliability and speed.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}