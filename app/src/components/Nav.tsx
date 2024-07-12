import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function Nav() {
    return (
        <div>
            <nav className='py-10 flex justify-between'>
                <h1 className='text-xl'>gilbertmunuotz</h1>
                <ul className='flex items-center'>
                    <li>
                        <DarkModeIcon />
                        <LightModeIcon />
                    </li>
                    <li className=''>
                        <a className='text-white text-xl py-2 px-4 cursor-pointer rounded-lg shadow-md' href="#" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#0B785C' }}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;