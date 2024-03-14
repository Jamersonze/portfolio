import CountUp from "react-countup"

const CountUpText = ({
        start,
        end,
        duration,
        sign,
        layout,
        children
}: {
        start: number,
        end: number,
        duration: number,
        sign: string,
        layout?: string,
        children: React.ReactNode
}) => {
        return (
                <div className={`relative flex-1 ${layout}`}>
                        <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                <CountUp start={start} end={end} duration={duration} /> {sign}
                        </div>
                        <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>{children}</div>
                </div>
        )
}

export default CountUpText