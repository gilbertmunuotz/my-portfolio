import me from "/me2.jpeg";
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import Typewritter from 'typewriter-effect';

function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3 * 1000); // Delay of 3 seconds
        return () => clearTimeout(timer);
    }, [])


    return (
        <div className={`dark:bg-custom-black dark:text-white`}>
            <section className="mx-8">
                <h1 className='text-3xl font-semibold' style={{ color: '#30c67c' }}>Gilbert Munuo</h1>
                <h2 className='font-medium font-serif text-xl'>
                    <Typewritter
                        options={{
                            strings: ["Fullstack Developer...", "Blockchain Enthusiast..."],
                            autoStart: true,
                            loop: true,
                            delay: 30,
                            deleteSpeed: 30,
                        }}
                    />
                </h2>


                <p className="pt-10 pb-5 text-left text-xl leading-7 first-letter:text-2xl first-letter:font-bold">A full-stack developer with over four years of experience building scalable web and mobile applications. I specialize in crafting secure, efficient solutions using modern technologies like React Native, NextJS, Prisma, and MySQL. From optimizing performance in large datasets to implementing robust authentication systems, I thrive on solving challenging problems and delivering impactful results. Always eager to learn and grow, I’m exploring emerging technologies like blockchain to stay ahead in the industry. I value collaboration and innovation, working well in dynamic environments to create meaningful, user-focused solutions.
                </p>

                {loading ? (
                    <div className="flex justify-center items-center">
                        <Skeleton variant='circular' width={450} height={400} animation={"wave"} />
                    </div>
                ) : (
                    <div className="relative mx-auto w-max mt-8">
                        <img src={me} className='rounded-full h-80 sm:h-96 object-fit sm:w-96 mx-auto' alt="Gilbert Munuo Image" />
                    </div>
                )}
            </section>
        </div>
    )
}

export default Home;