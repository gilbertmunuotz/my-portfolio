import Image from "next/image"

import me from "@/public/me.webp"

export default function ProfileImage() {
  return (
    <section
      className="relative mx-auto mt-14 h-80 w-80 sm:h-96 sm:w-96"
      aria-label="Profile photo"
    >
      <Image
        src={me}
        alt="Portrait of Gilbert Munuo, full-stack developer"
        fill
        priority
        sizes="(max-width: 640px) 320px, 384px"
        className="rounded-full object-cover"
        placeholder="blur"
      />
    </section>
  )
}
