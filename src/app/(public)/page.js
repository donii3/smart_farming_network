import Contact from "@/components/Contact";
import Service from "@/components/Service";
import Product from "@/components/Product";
import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Benefit from "@/components/Benefit";

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
