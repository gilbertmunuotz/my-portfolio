import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  return (
    <header>
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12"
        aria-label="Main"
      >
        <span className="font-display text-base font-semibold text-brand">
          gilbertmunuotz
        </span>
        <ModeToggle />
      </nav>
    </header>
  )
}
