import { useState } from 'react'
import Arrow from '../icons/Arrow'
import Star from '../icons/Star'
import Dot from '../icons/Dot'

export interface Testomonial {
    imageSrc: string
    name: string
    company: string
    stars: number
    quote: string
    active: boolean
}

export interface CarouselProps {
    testomonials: Testomonial[]
}

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
    const [activeTestomonialIndex, setActive] = useState(1)

    const onClickLeft = () => {
        props.testomonials[activeTestomonialIndex].active = false
        props.testomonials[activeTestomonialIndex - 1].active = true
        setActive(activeTestomonialIndex - 1)
    }
    const onClickRight = () => {
        props.testomonials[activeTestomonialIndex].active = false
        props.testomonials[activeTestomonialIndex + 1].active = true
        setActive(activeTestomonialIndex + 1)
    }
    const isLeftArrowDisabled = () => activeTestomonialIndex === 0
    const isRightArrowDisabled = () => activeTestomonialIndex === 2

    return (
        <div className='carousel'>
            <div>
                {props.testomonials.map(({ imageSrc, active }) => (
                    <img
                        className={active ? 'active' : 'inactive'}
                        src={imageSrc}
                    />
                ))}
            </div>
            <div className='carousel-text'>
                <h2>{props.testomonials[activeTestomonialIndex].name}</h2>
                <h3>{props.testomonials[activeTestomonialIndex].company}</h3>
                <span>
                    {Array.from(
                        Array(props.testomonials[activeTestomonialIndex].stars),
                        () => (
                            <Star />
                        )
                    )}
                </span>
                <p>{props.testomonials[activeTestomonialIndex].quote}</p>
            </div>
            <div className='carousel-buttons'>
                <button
                    disabled={isLeftArrowDisabled()}
                    onClick={() => onClickLeft()}
                >
                    <Arrow right={false} />
                </button>
                <span>
                    {Array.from(Array(3), (_, i) => (
                        <Dot active={activeTestomonialIndex === i} />
                    ))}
                </span>
                <button
                    disabled={isRightArrowDisabled()}
                    onClick={() => onClickRight()}
                >
                    <Arrow right />
                </button>
            </div>
        </div>
    )
}

export default Carousel
