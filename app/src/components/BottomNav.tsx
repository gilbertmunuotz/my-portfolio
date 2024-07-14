import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function BottomNav() {
  return (
    <div className={`dark:bg-custom-black dark:text-white`}>
      <section className='mx-8 pt-10'>
        <div className="contact">
          <div className="flex">
            <h1 className="text-left text-3xl font-semibold" style={{ color: '#30c67c' }}>Contact</h1>
            <h2 className='text-left text-xl font-medium mb-4'>Any Inquiries Don't hesitate, Reach Me Out</h2>
            <a href="mailto:officialgilbert45@gmail.com" target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
          </div>
        </div>


        <div className="footer">
          <div className="flex items-center content-evenly justify-evenly py-12" style={{ color: '#30c67c' }}>
            <a href="https://github.com/gilbertmunuotz" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://twitter.com/gilbertmunuotz" target="_blank" rel="noopener noreferrer">
              <XIcon />
            </a>
            <a href="https://www.instagram.com/gilbertmunuotz" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BottomNav;