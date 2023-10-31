import { ComputersCanvas, ScrollBtn } from '.'
import Link from 'next/link'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 -mt-4">
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className='heroHeadText text-white'>Hi, I&apos;m <span className='text-[#915eff]'>Saif</span></h1>
          <p className='heroSubText mt-2 text-white-100'>I develop modern and <br className='sm:hidden block' /> professional web applications</p>
        </div>
      </div>

      <div className='hidden lg:block'>
        <ComputersCanvas />
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center' >
        <Link
          href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>

            <ScrollBtn />
          </div>
        </Link>

      </div>
    </section>)
}

export default Hero
