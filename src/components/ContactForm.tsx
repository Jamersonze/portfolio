'use client'
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import { BsArrowRight } from "react-icons/bs";

export default () => 
<motion.form 
        variants={fadeIn('down', .3)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex-1 flex flex-col gap-6 w-full mx-auto"
>
        <div className="flex gap-x-6 w-full">
                <input type="text" placeholder="name" className="input" />
                <input type="text" placeholder="email" className="input" />
        </div>
        <input type="text" placeholder="subject" className="input" />
        <textarea placeholder="Message" className="textarea" />
        <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let's talk</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
        </button>
</motion.form>