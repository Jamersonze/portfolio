'use client'

import {
        HiHome,
        HiUser,
        HiViewColumns,
        HiRectangleGroup,
        HiEnvelope
} from 'react-icons/hi2'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = {
        name: string,
        path: string,
        icon: JSX.Element
}

export const navData = [
        {name: 'home', path: '/', icon: <HiHome />},
        {name: 'about', path: '/about', icon: <HiUser />},
        // {name: 'services', path: '/services', icon: <HiRectangleGroup />},
        {name: 'work', path: '/work', icon: <HiViewColumns />},
        {name: 'contact', path: '/contact', icon: <HiEnvelope />},
]



const Navigation = () => {
        const pathname = usePathname()

        return (
                <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-20 top-0 w-full xl:w-16 xl:maw-w-md xl:h-screen'>
                        <ul className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                                {navData.map((link: NavItem, index: number) => 
                                        <Link href={link.path} key={index}>
                                                <figure className={`relative flex items-center group`}>
                                                        <figcaption className="absolute mr-14 right-0 hidden xl:group-hover:flex">
                                                                <section className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                                                                        <span className='text-[12px] leading-none font-semibold capitalize'>{link.name}</span>
                                                                        <i className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"/>
                                                                </section>
                                                        </figcaption>
                                                        <i className={`${link.name}-icon ${link.path === pathname ? 'text-accent' : 'hover:text-red-300'} transition-all duration-300`}>
                                                                {link.icon}
                                                        </i>
                                                </figure>
                                        </Link>
                                )}
                        </ul>
                </nav>
        )}
export default Navigation