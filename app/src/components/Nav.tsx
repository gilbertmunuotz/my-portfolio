import { RootState } from "../library/store";
import { toggleDarkMode } from '../app/themeSlice';
import { useSelector, useDispatch } from 'react-redux';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function Nav() {

    const dispatch = useDispatch();
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    return (
        <div className={`dark:bg-custom-black dark:text-white`}>
            <section className="mx-8">
                <nav className='py-10 flex justify-between'>
                    <h1 className='text-xl sm:animate-bounce'>gilbertmunuotz</h1>
                    <ul className='flex items-center'>
                        <li>
                            <button onClick={() => dispatch(toggleDarkMode())}>
                                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                            </button>

                        </li>
                        <li className='ml-2'>
                            <a className='text-white text-xl py-2 px-4 cursor-pointer rounded-lg shadow-md' href="Curriculum Vitae.pdf" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#30c67c' }}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Nav;