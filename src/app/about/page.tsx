'use client'
import {
        FaHtml5,
        FaCss3,
        FaJs,
        FaReact,
        FaWordpress,
        FaFigma
} from 'react-icons/fa'

import {
        SiNextdotjs,
        SiFramer,
        SiAdobexd,
        SiAdobephotoshop
} from 'react-icons/si'

import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'


// Components
import Avatar from '@/components/Avatar'
import Circles from '@/components/Circles'
import FeatureList from '@/components/FeatureList'
import CountUpText from '@/components/CountUpText'


const aboutData = {
  skills: [
    {
      title: 'Tecnologias',
      icons: [
        <FaHtml5 key={0} />,
        <FaCss3 key={0} />,
        <FaJs key={0} />,
        <FaReact key={0} />,
        <SiNextdotjs key={0} />,
        <SiFramer key={0} />
      ]
    }
  ],
  awards: [
    {
      title: 'Google Cloud Computing Foundations',
      stage: '2023'
    },
    {
      title: 'Github introduction to version control and remote files',
      stage: '2022'
    },
    {
      title: 'Complete FrontEnd Web Development and Design HTML CSS JS',
      stage: '2022'
    }
  ],
  experience: [
    {
      title: 'Software Engineer Intern - Liferay LATAM',
      stage: '2021 - 2023'
    }
  ],
  credentials: []
};

const About = () => {
        return (
                <main className='h-full bg-primary/30 py-32 text-center xl:text-left'>
                        <Circles />
                        <motion.section 
                                variants={fadeIn('right', .2)} 
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className='hidden xl:flex absolute bottom-0 -left-[370px] -z-10'>
                                <Avatar />
                        </motion.section>
                        <section className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
                                <article className='flex-1 flex flex-col justify-center'>
                                	<motion.h2 
                                    variants={fadeIn('right', 0.2)}
                                    initial='hidden'
                                    animate='show'
                                    exit='hidden'
                                    className='h2'
                                    >
                                    Desenvolvendo <span className='text-accent'>soluções</span> dos problemas.
                                  </motion.h2>
                                  <motion.p 
                                    variants={fadeIn('right', 0.4)}
                                    initial='hidden'
                                    animate='show'
                                    exit='hidden'
                                    className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
                                    >
                                      Comecei minha formação com o curso de computação gráfica e desde então mergulhei no mundo da programação onde encontrei minha paixão.
                                  </motion.p>
                                  <motion.section 
                                    variants={fadeIn('right', 0.6)}
                                    initial='hidden'
                                    animate='show'
                                    exit='hidden'
                                    className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
                                  >
                                    <article className='flex flex-1 xl:gap-x-6'>
                                      <CountUpText start={0} end={2} duration={5} sign='+' layout='after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>Anos de experiência</CountUpText>
                                      {/* <CountUpText start={0} end={250} duration={5} sign='+' layout='after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>Sactisfied Clients</CountUpText> */}
                                      <CountUpText start={0} end={6} duration={5} sign='+' layout='after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>Projetos</CountUpText>
                                      <CountUpText start={0} end={8} duration={5} sign='+'>Certificações</CountUpText>
                                    </article>
                                  </motion.section>
                                </article>
                                <FeatureList data={aboutData}/>
                        </section>
                </main>
        )

}

export default About