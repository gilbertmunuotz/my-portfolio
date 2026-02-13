import { ModeToggle } from '@/components/modeToggle'
import React from 'react'

export default function Home() {
    return (
        <section className='mx-12'>
            <div className='py-10 flex justify-between'>
                <div>
                    <span className="text-base text-green-500 font-medium">
                        gilbertmunuotz
                    </span>
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div >
            <div>
                <p className='py-2 text-left text-lg text-muted-foreground'>
                    A full-stack developer with over 4+ years of experience building scalable web and mobile applications. I specialize in crafting secure, efficient solutions using modern technologies like React Native, NextJS, Prisma, and MySQL.
                    From optimizing performance in large datasets to implementing robust authentication systems, I aim at solving challenging problems and delivering impactful results.
                    Always eager to learn and grow, I value collaboration and innovation, working well in dynamic environments to create meaningful, user-focused solutions.
                </p>
            </div>
        </section >
    )
}
