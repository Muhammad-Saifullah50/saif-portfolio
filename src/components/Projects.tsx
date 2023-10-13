"use client"
import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'
import { github } from "../../public/assets"
import { SectionWrapper } from "@/hoc"
import { projects } from "@/constants"
import { fadeIn, textVariant } from "@/utils/motion"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type ProjectCardProps = {
  index: number;
  name: string;
  image: StaticImageData
  description: string;
  tags: { name: string; color: string; }[]
  source_code_link: string
}
const ProjectCard = ({ index, name, description, tags, image, source_code_link }: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl w-[300px] xs:w-[320px] sm:w-[360px] mx-auto sm:mx-0">

        <div className="relative w-full h-[230px] ">
          <Image
            src={image}
            alt={name}
            fill
            className="object-fill w-full h-full rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <Link href={source_code_link} target="_blank">
                <Image
                  src={github}
                  width={22}
                  height={22}
                  alt='github'
                  className="object-contai"
                />
              </Link>
            </div>
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <Link href={source_code_link} target="_blank">
                <Image
                  src={github}
                  width={22}
                  height={22}
                  alt='github'
                  className="object-contai"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-2xl">{name}</h3>
          <p className="mt-2 text-secondary text-sm">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-sm ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>

    </motion.div>
  )
}
const Projects = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className="sectionSubText">My Work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">

        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}

          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, 'projects')