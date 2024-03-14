'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import PageIntro from "@/components/PageIntro";
import Slider from "@/components/Slider";

const works = [
        {
                title: 'Feedget',
                description: 'Feedback widget criado em React utilizando SQLite ampliando meu conhecimento em arquitetura de sistemas distribuídos e em banco de dados móveis',
                image: {
                        path: '/bg-explosion.png',
                        alt: 'tchakabum'
                },
                links: {
                        prod: 'https://nlw-return-impulse-nine-bice.vercel.app',
                        repo: 'https://github.com/Jamersonze/NLWReturn'
                }
        }
]

const Work = () => 
<main className='h-full bg-primary/30 py-36 flex items-center'>
        <Circles />
        <article className="container mx-auto">
                <section className='flex flex-col xl:flex-row gap-x-8'>
                        <PageIntro title='Projetos' description='realizados' />
                        <motion.div 
                                variants={fadeIn('down', .6)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className='w-full xl:min-w-[65%]'
                        >
                                <Slider data={works} />
                        </motion.div>
                </section>
        </article>
        <Bulb />
</main>

export default Work