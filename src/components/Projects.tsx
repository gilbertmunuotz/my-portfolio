// import Tanair from "/tanair.png";
// import Fizbuzz from "/fizbuzz.png";
// import MyNote from '/my note 2.png';
import Momentam from '/momentam.png';
import Remoteok from "/remoteok.png";
// import johnD from '/john deere 2.png';
import cyra from '/cyra recipe 2.png';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

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
        <h1 className="text-xl leading-7">For a couple years now I've been exploring a lot in the web dev field and I happened to have find these useful projects to share with;</h1>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-4">
            <Skeleton variant="rectangular" width={400} height={300} animation="wave" />
            <Skeleton variant="rectangular" width={400} height={300} animation="wave" />
            <Skeleton variant="rectangular" width={400} height={300} animation="wave" />
            {/* <Skeleton variant="rectangular" width={400} height={300} animation="wave" />
            <Skeleton variant="rectangular" width={400} height={300} animation="wave" />
            <Skeleton variant="rectangular" width={400} height={300} animation="wave" /> */}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-4">

            {/* <section className="rounded-lg shadow-xl py-6">
              <img src={Tanair} alt="Portfolio app 3" />
              <div className="flex justify-between">
                <p className="text-xl mt-3 font-bold ml-2" style={{ color: '#30c67c' }}>Tanair</p>
                <a
                  href="https://tanair-v1.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-green-600 py-1 rounded-full px-2 text-lg space-x-2 mr-2 flex items-center text-white">
                  <CollectionsBookmarkIcon />
                  <span>Demo</span>
                </a>

              </div>
            </section> */}


            <section className="rounded-lg shadow-xl py-6">
              <img src={Momentam} alt="Portfolio app 2" />
              <div className="flex justify-between">
                <p className="text-xl mt-3 font-bold ml-2" style={{ color: '#30c67c' }}>Momentam</p>
                <a
                  href="https://www.momentam.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-green-600 py-1 rounded-full px-2 text-lg space-x-2 mr-2 flex items-center text-white">
                  <CollectionsBookmarkIcon />
                  <span>Demo</span>
                </a>
              </div>
            </section>

            {/* <section className="rounded-lg shadow-xl py-6">
              <img src={MyNote} alt="Portfolio app 3" />
              <div className="flex justify-between">
                <p className="text-xl mt-3 font-bold ml-2" style={{ color: '#30c67c' }}>My Note</p>
                <a
                  href="https://mynote-client.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-green-600 py-1 rounded-full px-2 text-lg space-x-2 mr-2 flex items-center text-white">
                  <CollectionsBookmarkIcon />
                  <span>Demo</span>
                </a>
              </div>
            </section> */}

            <section className="rounded-lg shadow-xl py-6">
              <img src={cyra} alt="Portfolio app 1" />
              <div className="flex justify-between">
                <p className="text-xl mt-3 font-bold ml-2" style={{ color: '#30c67c' }}>Cyra Recipe</p>
                <a
                  href="https://dukani-eight.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-green-600 py-1 rounded-full px-2 text-lg space-x-2 mr-2 flex items-center text-white">
                  <CollectionsBookmarkIcon />
                  <span>Demo</span>
                </a>
              </div>
            </section>

            <section className="rounded-lg shadow-xl py-6">
              <img src={Remoteok} alt="Portfolio app 3" />
              <div className="flex justify-between mt-8">
                <p className="text-xl mt-3 font-bold ml-2" style={{ color: '#30c67c' }}>Remoteok</p>
                <a
                  href="https://github.com/gilbertmunuotz/remoteok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-green-600 py-1 rounded-full px-2 text-lg space-x-2 mr-2 flex items-center text-white">
                  <GitHubIcon />
                  <span>Github</span>
                </a>
              </div>
            </section>


            {/* <section className="rounded-lg shadow-xl py-6">
              <img src={Fizbuzz} alt="Portfolio app 1" />
              <div className="flex justify-between">
                <p className="text-xl mt-3 font-bold ml-2" style={{ color: '#30c67c' }}>Fizbuzz</p>
                <a
                  href="https://fizbuz-delta.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-green-600 py-1 rounded-full px-2 text-lg space-x-2 mr-2 flex items-center text-white">
                  <CollectionsBookmarkIcon />
                  <span>Demo</span>
                </a>
              </div>
            </section> */}

          </div>
        )}
      </section >
    </div >
  )
}

export default Collections;