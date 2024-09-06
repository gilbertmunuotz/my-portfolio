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
                            strings: ["Fullstack Web Developer.", "Blockchain Enthusiast."],
                            autoStart: true,
                            loop: true,
                            delay: 30,
                            deleteSpeed: 30,
                        }}
                    />
                </h2>


                <p className="pt-10 pb-5 text-left text-xl leading-7 first-letter:text-2xl first-letter:font-bold">A web developer passionate about crafting engaging digital experiences. Currently, I'm expanding my skillset to mobile app development while exploring the potential of blockchain technology. I'm immersed in a dynamic learning environment. I'm eager to apply my knowledge to create innovative solutions that address real-world challenges. I thrive in collaborative teams and am constantly seeking new opportunities to learn and grow.</p>

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