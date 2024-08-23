import cyra from '/Cyra Recipe.png';
import johnD from '/John Deere.png';
import MyNote from '/My Note.png';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from "react";

function Collections() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3 * 1000); // Delay of 3 seconds
    return () => clearTimeout(timer);
  }, [])


  return (
    <div className={`dark:bg-custom-black dark:text-white`}>
      <section className="mx-8 pt-8">
        <div className="text-left text-3xl font-semibold" style={{ color: '#30c67c' }}>Projects</div>
        <h1 className="text-xl leading-7">For a couple years now I've been exploring a lot in the web dev field and I happened to have find these useful tools/projects to share with;</h1>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-4">
            <Skeleton variant="rectangular" width={400} height={300} animation="wave" />
            <Skeleton variant="rectangular" width={400} height={300} animation="wave" />
            <Skeleton variant="rectangular" width={400} height={300} animation="wave" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-4">

            <section className="rounded-lg shadow-xl py-6">
              <img src={cyra} alt="Portfolio app 1" />
              <div className="flex justify-between">
                <p className="text-xl mt-3 font-bold" style={{ color: '#30c67c' }}>Cyra Recipe</p>
                <button type="button" className="mt-2 bg-green-600 py-1 rounded-full px-2 text-lg">
                  <a href="https://dukani-eight.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </button>
              </div>
            </section>


            <section className="rounded-lg shadow-xl py-6">
              <img src={johnD} alt="Portfolio app 2" />
              <div className="flex justify-between">
                <p className="text-xl mt-3 font-bold" style={{ color: '#30c67c' }}>John Deere</p>
                <button type="button" className="mt-2 bg-green-600 py-1 rounded-full px-2 text-lg">
                  <a href="https://my-tours-three.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </button>
              </div>
            </section>

            <section className="rounded-lg shadow-xl py-6">
              <img src={MyNote} alt="Portfolio app 3" />
              <div className="flex justify-between">
                <p className="text-xl mt-3 font-bold" style={{ color: '#30c67c' }}>My Note</p>
                <button type="button" className="mt-2 bg-green-600 py-1 rounded-full px-2 text-lg">
                  <a href="https://mynote-client.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </button>
              </div>
            </section>

          </div>
        )}
      </section >
    </div >
  )
}

export default Collections;