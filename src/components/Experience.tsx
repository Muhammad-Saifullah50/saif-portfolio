'use client'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { textVariant } from '@/utils/motion'
import Image, { StaticImageData } from 'next/image'

type ExperienceProps = {
  experience: {
    title: string;
    company_name: string;
    icon: StaticImageData;
    iconBg: string;
    date: string;
    points: string[];
  }
}

const ExperienceCard = ({ experience }: ExperienceProps) => {
  return (
    <VerticalTimelineElement
         visible={true}
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={experience.icon}
            width={60}
            height={60}
            className='object-contain  '
            alt={experience.company_name}
          />
        </div>
      }
    >
      <div className=''>
        <h3 className=' text-white font-bold text-2xl '>{experience.title}</h3>
        <p className='text-secondary text-base font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-sm pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>)
}

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className="sectionSubText">What I have done so far</p>
        <h2 className="sectionHeadText">Work Exprerience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return (<ExperienceCard
              key={index}
              experience={experience}
            />)
          }

          )}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')


