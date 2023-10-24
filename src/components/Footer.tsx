import Image from "next/image"
import Link from "next/link"
import { logo } from "../../public/assets"
import { socialLinks } from "@/constants"


const Footer = () => {
    return (
        <footer className=" paddingX py-4 flex justify-between bg-primary items-center w-full max-w-7xl mx-auto">
            <div className="left flex items-center justify-center ">
                <Link
                    href='/'
                    className="flex space-x-2 items-center">
                    <Image
                        src={logo}
                        alt="logo"
                        width={36}
                        height={36}
                        className="object-contain"
                    />
                    <p className="hidden sm:block text-white font-bold text-[18px] cursor-pointer  ">Developer Saif</p>
                </Link>
            </div>

            <div className="middle flex items-center text-secondary text-sm">
                <p>Copyright © {new Date().getFullYear()} &nbsp; &nbsp;</p>
                <p className="hidden md:block">All Rights Reserved</p>
            </div>
            <div className="right flex gap-3">

                {socialLinks.map((link) => (
                    <Link key={link.title} href={link.url} target="_blank">
                        <div className="bg-zinc-800 rounded-full p-1">
                            <Image
                                src={link.img}
                                alt={link.title}
                                width={20}
                                height={20} 
                                className={link.title === 'LinkedIn' ? 'invert' : ''}
                                />
                        </div>
                    </Link>
                ))}


            </div>
        </footer>
    )
}

export default Footer