import { useState } from "react"
import { motion } from 'framer-motion'
import { fadeIn } from "../../variants"

type Skill = {
        title: string,
        icons: JSX.Element[],
        stage?: null
}

type Award = {
        title: string,
        stage: string,
        icons?: null
}

type UserData = {
        skills: Skill[],
        awards: Award[],
        experience: Award[],
        credentials?: Award[]
}

const FeatureList = (
        {
                data, 
        }: {
                data: UserData
        }
) => {   
        const titles = []
        
        for (const entry in data){
                titles.push(entry)
        }

        

        const [index, setIndex] = useState('skills')

        return (
                <motion.section 
                        variants={fadeIn('left', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
                >
                        <ul className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                                {titles.map(title => (
                                      <li 
                                               key={title} 
                                               className={`${index === title ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' : 'hover:text-red-300 after:text-red-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                               onClick={() => setIndex(title)}
                                      >
                                               {title}
                                      </li>  
                                ))}
                        </ul>
                        <ul className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                                {data[index as keyof UserData].map((item, itemIndex) => {
                                        return (
                                                <li 
                                                        key={itemIndex}
                                                        className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                                                >
                                                        <p className="font-light mb-2 md:mb-0">{item.title}</p>
                                                        <div className="hidden md:flex">-</div>
                                                        <p>{item.stage}</p>
                                                        <ul className="flex gap-x-4">
                                                                {item.icons?.map((icon, iconIndex)=>{
                                                                        return (
                                                                                <li 
                                                                                        key={iconIndex}
                                                                                >
                                                                                        <i className="text-2xl text-white">
                                                                                                {icon}
                                                                                        </i>
                                                                                </li>
                                                                        )
                                                                })}
                                                        </ul>
                                                </li>
                                        )
                                })}
                        </ul>
                </motion.section>
        )
}

export default FeatureList