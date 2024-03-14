import Link from "next/link"
import { IconType } from "react-icons"

import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine} from "react-icons/ri"

type socialItem = {
        url: string,
        icon: IconType
}

const Socials = () => {

        const socialMedia: socialItem[] = [
                {url: '', icon: RiYoutubeLine},
                {url: '', icon: RiInstagramLine},
                {url: '', icon: RiYoutubeLine}
        ]
        return (
                <ul className="flex items-center gap-x-5 text-lg">
                        {socialMedia.map((social: socialItem, key: number) => 
                                <li key={key}>
                                        <Link href={social.url} className="hover:text-accent transition-all duration-300">
                                                <social.icon />
                                        </Link>
                                </li>
                        )}
                </ul>
        )
}

export default Socials