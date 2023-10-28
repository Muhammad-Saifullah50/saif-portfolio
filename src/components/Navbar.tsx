'use client'
import { navLinks } from "@/constants";
import { logo, menu, close } from "../../public/assets";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`paddingX  w-full flex fixed top-0 items-center py-5 z-20 ${scrolled ? 'bg-primary' : 'bg-transparent'}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href='/'
          onClick={() => { setActive('') }}
          className="flex space-x-2 items-center">
          <Image
            src={logo}
            alt="logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <p className="text-white font-bold text-[18px] cursor-pointer flex ">Muhammad Saifullah</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link: { id: string, title: string }) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* mobile naigation */}
        <div className="sm:hidden flex flex-1  justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            width={28}
            height={28}
            className="object-contain cursor-pointer"
            onClick={() => setToggle(prev => !prev)}
          />
          <div className=
            {`${!toggle
              ? 'hidden'
              : 'flex p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10'}`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link: { id: string, title: string }) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(prev => !prev)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
