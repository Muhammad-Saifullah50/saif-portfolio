"use client"
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/hoc'
import { testimonials } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'
import Image from 'next/image'

type FeedbackCardProps = {
  index: number
  testimonial: string
  name: string
  designation: string
  company: string
}

const FeedbackCard = ({ index, testimonial, name, designation, company }: FeedbackCardProps) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-white font-black text-[48px]'>&quot;</p>
      <div className="mt-1">
        <p className='text-white tracking-wide text-[18px]'>{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-10">
          <div className='flex flex-1 flex-col'>
            <p className='text-white font-medium text-[16px]'><span className='blue-text-gradient'>@</span>{name}</p> 
            <p className='mt-1 text-secondary'>{designation} of {company}</p>

          </div>
          <Image
          src='/assets/avatar.png'
          width={40}
          height={40}
          alt='avatar'
          className='rounded-full object-contain bg-black-100 p-1'
          />
        </div>
      </div>

    </motion.div>
  )
}
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className='padding bg-tertiary rounded-2xl min-h-[300px]'>
        <motion.div
          variants={textVariant()}
        >
          <p className='sectionSubText'>What others say</p>
          <h2 className='sectionHeadText'>Testimonials.</h2>
        </motion.div>
      </div>

      <div className='paddingX -mt-20 pb-14 flex flex-wrap gap-7'>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')