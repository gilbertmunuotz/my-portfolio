import { ModeToggle } from '@/components/modeToggle'

export default function page() {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
                <span className="text-base font-semibold text-green-500">
                    gilbertmunuotz
                </span>

                <ModeToggle />
            </div>
        </section >
    )
}
