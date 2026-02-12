'use client'

import { useState } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

export default function Page() {

    const [Loading, setLoading] = useState(true)

    return (
        <div className="relative mx-auto w-80 h-80 sm:w-96 sm:h-96 mt-8">

            {Loading && (
                <Skeleton className="absolute inset-0 rounded-full" />
            )}

            <Image
                src="/me.jpg"
                alt="My Profile Image"
                fill
                className={`rounded-full object-cover transition-opacity duration-300 ${Loading ? "opacity-0" : "opacity-100"
                    }`}
                onLoad={() => setLoading(false)}
            />
        </div>
    )
}
