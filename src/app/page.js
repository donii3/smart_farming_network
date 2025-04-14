import Contact from "@/app/components/Contact";
import Service from "@/app/components/Service";
import Product from "@/app/components/Product";
import About from "@/app/components/About";
import Carousel from "@/app/components/Carousel";
import Benefit from "@/app/components/Benefit";

export default function Home() {
  return (
    // call components here <component_name />
    <div>
      <Carousel/>
      <About />
      <Service />
      <Benefit />
      <Product />
      <Contact />
    </div>
  );
}
