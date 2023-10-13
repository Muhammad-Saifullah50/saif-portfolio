import { About, Contact, Education, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from "@/components";

export default function Home() {
  return (<>
    <section className="relative bg-primary z-0">
      <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </section>
      <About />
      <Experience />
      <Tech />
      <Education/>
      <Works />
      <Feedbacks />
      <section className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </section>
    </section>
  </>)
}
