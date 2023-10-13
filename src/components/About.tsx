'use client'
import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'
import { services } from "@/constants"
import { fadeIn, textVariant } from "@/utils/motion"
import Image, { StaticImageData } from "next/image"
import { SectionWrapper } from "@/hoc"

type ServiceCardProps = {
  index: number,
  title: string,
  icon: StaticImageData
}
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt classname='xs:w-[250px] w-full '>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          //@ts-ignore
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 w-64 h-64 flex justify-evenly items-center flex-col"
        >
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="object-contain"
          />
          <h3 className="text-white text-xl font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <><motion.div variants={textVariant()}>
      <p className="sectionSubText">INTRODUCTION</p>
      <h2 className="sectionHeadText">Overview.</h2>
    </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl">
        I am a web developer skilled in modern technologies like Next.js 13, React.js 18, TypeScript 5 and many more related frontend and backend technologies. I have a knack of crafting high-performance web applications, leveraging Next.js 13, React.js, TypeScript, Prisma ORM and MongoDB as my primary tools.
        Lets work together to bring your exciting ideas to life!
      </motion.p>

      <div className="flex flex-wrap mt-20 gap-10 ">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')