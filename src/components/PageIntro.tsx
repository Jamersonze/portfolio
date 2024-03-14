'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const PageIntro = (
        {title, titleHighlight, description}: 
        {title: string, titleHighlight?: string, description?: string}
) => 
<section className='text-center flex xl: x-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
        <motion.h2 
                variants={fadeIn('up', .3)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-8'
        >
                {title}<span className='text-accent'>{titleHighlight ? titleHighlight : '.'}</span>
        </motion.h2>
        <motion.p 
                variants={fadeIn('up', .4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 max-w-[400px] mx-auto lg:mx-0'
        >
                {description}
        </motion.p>
</section>

export default PageIntro