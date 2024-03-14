'use client'

import Slider from '@/components/Slider'
import Bulb from '@/components/Bulb'
import Circles from '@/components/Circles'
import PageIntro from '@/components/PageIntro'

import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'

import {
        RxCrop,
        RxDesktop,
        RxPencil2,
        RxRocket
} from 'react-icons/rx'

const serviceData = [
        {
                icon: <RxCrop />,
                title: 'Branding',
                description: 'Lorena de itapsuma'
        },
        {
                icon: <RxPencil2 />,
                title: 'Design',
                description: 'Lorena de itapsuma'
        },
        {
                icon: <RxDesktop />,
                title: 'Development',
                description: 'Lorena de itapsuma'
        },
        {
                icon: <RxRocket />,
                title: 'SEO',
                description: 'Lorena de itapsuma'
        }
]

export default () => 
<main className='h-full bg-primary/30 py-36 flex items-center'>
        <Circles />
        <article className="container mx-auto">
                <section className='flex flex-col xl:flex-row gap-x-8'>
                        <PageIntro title='Services' description='De novo, lorena?' />
                        <motion.div 
                                variants={fadeIn('down', .6)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className='w-full xl:min-w-[65%]'
                        >
                                <Slider data={serviceData} />
                        </motion.div>
                </section>
        </article>
        <Bulb/>
</main>