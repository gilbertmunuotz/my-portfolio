import { SiGithub, SiX } from '@icons-pack/react-simple-icons';

export default function Footer() {
    return (
        <footer className="border-t py-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">

                <div>
                    © {new Date().getFullYear()} All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/gilbertmunuotz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                    >
                        <SiGithub title="GitHub" size={28} className="hover:scale-110 hover:text-green-500 transition-transform" />
                    </a>

                    <a
                        href="https://x.com/gilbertmunuotz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X profile"
                    >
                        <SiX title="X" size={28} className="hover:scale-110 hover:text-green-500 transition-transform" />
                    </a>
                </div>

            </div>
        </footer>
    )
}
