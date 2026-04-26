import HomeComponent from "../components/sections/Home"
import ImageComponent from "../components/sections/Image"
import ServiceComponent from "../components/sections/Services"
import TimelineComponent from "../components/sections/Timeline"
import ProjectComponent from "../components/sections/Projects"
import ContactComponent from "../components/sections/Contact"
import NavbarComponent from "../components/layouts/Navbar"
import FooterComponent from "../components/layouts/Footer"

export default function Page() {
  return (
    <>
      <NavbarComponent />
      <main className="w-full">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <HomeComponent />
          <ImageComponent />
          <ServiceComponent />
          <TimelineComponent />
          <ProjectComponent />
          <ContactComponent />
        </div>
      </main>
      <FooterComponent />
    </>
  )
}
