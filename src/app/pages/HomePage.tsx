import { Hero } from "../components/Hero";
import { StatsBar } from "../components/StatsBar";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
