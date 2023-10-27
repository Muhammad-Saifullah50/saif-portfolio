'use client'
import { motion } from 'framer-motion'
import { useState, useRef, ChangeEvent } from 'react'
import { EarthCanvas } from '.'
import { SectionWrapper } from '@/hoc'
import { slideIn } from '@/utils/motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const formRef = useRef()

  const handleChange = (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setform({ ...form, [name]: value })
  }
  const handleSumbit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY!,
        {
          from_name: form.name,
          to_name: 'Muhammad Saifullah',
          from_email: form.email,
          to_email: 'saifullahm2005@gmail.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert('Thanks for your message, I will reach you soon');
      setform({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      alert('Oops! something went wrong');
    } finally {
      setLoading(false);
    }

  }
  return (
    <div
      className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn('left', 'between', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className='sectionSubText'>Get in touch</p>
        <h3 className='sectionHeadText'>Contact.</h3>

        <form
          //@ts-ignore
          ref={formRef}
          onSubmit={handleSumbit}
          className='flex flex-col gap-8 mt-12'>
          <label htmlFor="" className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              required
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label htmlFor="" className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              required
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='What is your email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label htmlFor="" className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              required
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary  rounded-xl hover:bg-black-200'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'between', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')