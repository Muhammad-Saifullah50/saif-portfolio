'use client'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { education } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { textVariant } from '@/utils/motion'
import Image, { StaticImageData } from 'next/image'

type ExperienceProps = {
    education: {
        title: string;
        from: string;
        icon: StaticImageData;
        iconBg: string;
        date: string;
        points: string[];
    }
}

const EducationCard = ({ education }: ExperienceProps) => {
    return (
        <VerticalTimelineElement
            visible={true}
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={education.date}
            iconStyle={{ background: education.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <Image
                        src={education.icon}
                        width={60}
                        height={60}
                        className='object-contain  '
                        alt={education.from}
                    />
                </div>
            }
        >
            <div className=''>
                <h3 className=' text-white font-bold text-2xl '>{education.title}</h3>
                <p className='text-secondary text-base font-semibold' style={{ margin: 0 }}>{education.from}</p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {education.points.map((point, index) => (
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

const Education = () => {
    return (
        <>
            <motion.div
                variants={textVariant()}
            >
                <p className="sectionSubText">What I have studied</p>
                <h2 className="sectionHeadText">My Education.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {education.map((education, index) => {
                        return (<EducationCard
                            key={index}
                            education={education}
                        />)
                    }

                    )}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Education, 'education')


