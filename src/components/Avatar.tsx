import Image from "next/image"

export default function Avatar() {
        return (
                <figure className="hidden xl:flex xl:max-w-none">
                        <Image src={'/avatar.png'} width={737} height={678} alt="" className="w-full h-full" />
                </figure>
        )
}