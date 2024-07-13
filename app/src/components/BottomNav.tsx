import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function BottomNav() {
  return (
    <div>
      <section className='mt-6'>
        <h1 className='text-left text-xl font-medium mb-4 sm:text-center'>Any Inquieries Don't hesitate, Reach Me Out</h1>
        <div className="flex items-center content-evenly justify-evenly py-12" style={{ color: '#30c67c' }}>
          <a href="mailto:officialgilbert24@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
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
      </section>
    </div>
  )
}

export default BottomNav;