import Contact from "@/app/components/Contact";
import Service from "@/app/components/Service";
import Product from "@/app/components/Product";

export default function Home() {
  return (
    // call components here <component_name />
    <div>
      <h1>Hello World</h1>
      <Service />
      <Product />
      <Contact />
    </div>
  );
}
