'use client'
import { Sora } from "next/font/google"
import { usePathname } from 'next/navigation'

import Header from "./Header"
import Navigation from "./Navigation"
import TopLeftImage from "./TopLeftImg"
import Transition from './Transition'
import FrozenRouter from "./FrozenRouter"

import {AnimatePresence, motion} from 'framer-motion'

const sora = Sora({
        subsets: ['latin'],
        variable: '--font-sora',
        weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

const Layout = ({
        children
}: {
        children: React.ReactNode
}) => {
        const pathname = usePathname()  
        return (
                <body className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
                        <TopLeftImage />
                        <Navigation />
                        <Header />
                        <AnimatePresence mode='wait'>
                                <motion.article key={pathname} className='h-full'>
                                        <Transition />
                                        <FrozenRouter>{children}</FrozenRouter>
                                </motion.article>
                        </AnimatePresence>
                </body>
        )
}

export default Layout