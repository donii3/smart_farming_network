import Contact from "@/app/components/Contact";
import Service from "@/app/components/Service";
import Product from "@/app/components/Product";
import About from "@/app/components/About";

export default function Home() {
  return (
    // call components here <component_name />
    <div>
      <About />
      <Service />
      <Product />
      <Contact />
    </div>
  );
}
