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

      <main>
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          {/* Hero Section */}
          <section className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-2">

            <HomeComponent />

            <ImageComponent />

          </section>


          {/* Other Sections */}
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