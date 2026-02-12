import HomeComponent from './home/page';
import ImageComponennt from "./image/page";
import ServiceComponent from "./services/page";

export default function page() {
  return <>
    <HomeComponent />
    <ImageComponennt />
    <ServiceComponent />
  </>
}