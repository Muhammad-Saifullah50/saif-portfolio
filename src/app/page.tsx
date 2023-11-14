import { About, Contact, Education, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Projects } from "@/components";
import Footer from "@/components/Footer";

export default function Home() {
  return (<>
    <section className="relative bg-primary z-0">
      <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </section>
      {/* <About />
      <Experience />
      <Tech />
      <Education />
      <Projects /> */}
      {/* <Feedbacks /> */}
      {/* <section className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </section> */}
      <Footer />
    </section>
  </>)
}
