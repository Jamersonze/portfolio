import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { RxArrowTopRight } from 'react-icons/rx'
import Image from "next/image"
import Link from "next/link"

type Service = {
        title: string,
        description: string,
        icon: JSX.Element,
        image?: undefined,
        links?: undefined
}

type Work = {
        title: string,
        description: string,
        image?: {
                path: string,
                alt: string
        },
        links: {
                repo: string,
                prod: string
        },
        icon?: undefined
}

type Article = {
        title: string,
        description: string
}

const Slider = ({data} : {data: Service[] | Work[] | Article[]}) => {
        return (
                <Swiper
                        breakpoints={{
                                320: {
                                        slidesPerView: 1,
                                        spaceBetween: 15
                                },
                                640: {
                                        slidesPerView: 3,
                                        spaceBetween: 15
                                }
                        }}
                        freeMode={true}
                        pagination={{
                                clickable: true
                        }}
                        modules={[FreeMode ,Pagination]}
                        className="h-[240px] sm:h-[340px]"
                >
                        {
                                data.map((item, index) => 
                                        <SwiperSlide key={index} className="overflow-y-scroll scrollbar-thin">
                                                <section className={`bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group ${item.icon && 'cursor-pointer'} hover:bg-[rgba(89,65,169,.15)] transition-all duration-300`}>
                                                        {item.icon && <i className="text-4xl text-accent mb-4">{item.icon}</i>}
                                                        {item.image?.path && <Image src={item.image.path} alt={item.image.alt} width={400} height={400} />}
                                                        <article>
                                                                <h2 className="mb-2 text-lg">{item.title}</h2>
                                                                <p className="max-w-[350px] leading-normal">{item.description}</p>
                                                        </article>
                                                        {item.icon && <div className="text-3xl">
                                                                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                                                        </div>}
                                                        <div className="flex">
                                                                {item.links?.prod && 
                                                                <Link href={item.links.prod} className="relative flex items-center group" target="_blank">
                                                                        <button type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Demo</button>
                                                                </Link>}
                                                                {item.links?.repo && 
                                                                <Link href={item.links.repo} className="relative flex items-center group" target="_blank">
                                                                        <button type="button" className="text-black bg-orange-300 hover:bg-orange-400 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-200 dark:hover:bg-orange-300 focus:outline-none dark:focus:ring-orange-400">
                                                                                <code>{'<Github/>'}</code>
                                                                        </button>
                                                                </Link>}
                                                        </div>
                                                </section>
                                        </SwiperSlide>
                                )
                        }
                </Swiper>
        )
}

export default Slider