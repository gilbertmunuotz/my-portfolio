import { SiGithub, SiX } from "@icons-pack/react-simple-icons"

export default function Footer() {
    return (
        <footer>
            <div
                className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-6
          px-6
          py-8
          text-sm
          text-muted-foreground
          sm:flex-row
          sm:px-8
          lg:px-12
        "
            >
                <div className="tracking-tight">
                    © {new Date().getFullYear()} All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/gilbertmunuotz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                    >
                        <SiGithub
                            title="GitHub"
                            size={24}
                            className="
                transition-transform
                hover:scale-110
                hover:text-brand
              "
                        />
                    </a>

                    <a
                        href="https://x.com/gilbertmunuotz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X profile"
                    >
                        <SiX
                            title="X"
                            size={24}
                            className="
                transition-transform
                hover:scale-110
                hover:text-brand
              "
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}