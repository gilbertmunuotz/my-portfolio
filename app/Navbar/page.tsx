import { ModeToggle } from '@/components/modeToggle'

export default function page() {
    return (
        <div>
            <div className='max-w-6xl mx-auto py-10 flex justify-between'>
                <div>
                    <span className="text-base text-green-500 font-medium">
                        gilbertmunuotz
                    </span>
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div >
        </div>
    )
}
