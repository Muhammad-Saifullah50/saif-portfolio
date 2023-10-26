import { About, Contact, Education, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Projects } from "@/components";
import Footer from "@/components/Footer";

export default function Home() {
  return (<>
    <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Hero />
    </section>
    <About />
  </>)
}
