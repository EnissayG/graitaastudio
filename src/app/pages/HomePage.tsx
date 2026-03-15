import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
