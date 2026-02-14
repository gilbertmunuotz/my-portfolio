import HomeComponent from './home/page';
import ImageComponent from "./image/page";
import ServiceComponent from "./services/page";
import TimelineComponent from "./timeline/page";
import ProjectComponent from "./projects/page";
import ContactComponent from "./contact/page";
import NavbarComponent from "./Navbar/page";
import FooterComponent from "./footer/page";

export default function page() {
  return (
    <main className="w-full">
      <NavbarComponent/>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <HomeComponent />
        <ImageComponent />
        <ServiceComponent />
        <TimelineComponent />
        <ProjectComponent />
        <ContactComponent />
      </div>
      <FooterComponent />
    </main>
  )
}