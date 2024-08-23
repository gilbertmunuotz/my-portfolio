import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function BottomNav() {
  return (
    <div className="dark:bg-custom-black dark:text-white">
      <section className="mx-8 pt-10">
        <h1 className="text-left text-3xl font-semibold" style={{ color: '#30c67c' }}>Contact</h1>
        <div className="mt-1">
          <h2 className="text-left text-xl leading-7">Any Inquiries? Don't hesitate, mail me{' '}
            <a
              href="mailto:officialgilbert45@gmail.com"
              style={{ color: '#30c67c' }}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >Here!</a>
          </h2>
        </div>

        <div className="footer">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-20 sm:space-y-0 space-y-4 sm:mx-0 mx-4">
            <div className="space-x-6 text-center" style={{ color: '#30c67c' }}>
              <a href="https://github.com/gilbertmunuotz" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
              <a href="https://twitter.com/gilbertmunuotz" target="_blank" rel="noopener noreferrer">
                <XIcon />
              </a>
              <a href="https://instagram.com/gilbertmunuotz" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            </div>

            <div className="text-center">
              <p className="text-lg leading-7">&copy; 2023, All right Reserved.</p>
            </div>
          </div>
        </div>


      </section >
    </div >
  );
}

export default BottomNav;