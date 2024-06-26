import { useState } from 'react'
import Arrow from '../icons/Arrow'
import Star from '../icons/Star'
import Dot from '../icons/Dot'
import useWindowDimensions from '../helpers/useWindowDimensions'

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
    const { width } = useWindowDimensions()

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

    if (width >= 670) {
        return (
            <div className='carousel'>
                <div>
                    {props.testomonials.map(({ imageSrc, active }) => (
                        <img
                            key={imageSrc}
                            className={active ? 'active' : 'inactive'}
                            src={imageSrc}
                        />
                    ))}
                </div>
                <div className='carousel-text'>
                    <h2>{props.testomonials[activeTestomonialIndex].name}</h2>
                    <h3>
                        {props.testomonials[activeTestomonialIndex].company}
                    </h3>
                    <span>
                        {Array.from(
                            Array(
                                props.testomonials[activeTestomonialIndex].stars
                            ),
                            (_, i) => (
                                <Star key={i}/>
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
                            <Dot
                                key={i}
                                active={activeTestomonialIndex === i}
                            />
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
    } else {
        return (
            <div className='carousel mobile'>
                <div>
                    {props.testomonials.map(({ imageSrc, active }) => (
                        <img
                            key={imageSrc}
                            className={active ? 'active' : 'inactive'}
                            src={imageSrc}
                        />
                    ))}
                </div>
                <div className='carousel-text'>
                    <h2>{props.testomonials[activeTestomonialIndex].name}</h2>
                    <h3>
                        {props.testomonials[activeTestomonialIndex].company}
                    </h3>
                    <span>
                        {Array.from(
                            Array(
                                props.testomonials[activeTestomonialIndex].stars
                            ),
                            (_, i) => (
                                <Star key={i}/>
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
                            <Dot key={i} active={activeTestomonialIndex === i} />
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
}

export default Carousel
