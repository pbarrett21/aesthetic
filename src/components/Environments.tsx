import Text from '../text'
import useWindowDimensions from '../helpers/useWindowDimensions'
import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const Environments: React.FC = () => {
    const { width } = useWindowDimensions()
    const mobileH1 = useRef(null)
    const section1 = useRef(null)
    const section2 = useRef(null)
    const section3 = useRef(null)

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            delay: 0,
            scrollTrigger: {
                trigger: mobileH1.current,
                start: 'top center',
            },
            defaults: {
                overwrite: 'auto',
                duration: 0.8,
                ease: 'power3.out',
            },
        })

        if (width < 670) {
            tl.fromTo(section1.current, { x: -500 }, { x: 0 })
                .fromTo(section2.current, { x: -500 }, { x: 0 })
                .fromTo(section3.current, { x: -500 }, { x: 0 })
        }

        return () => {
            tl.kill()
        }
    }, [])

    if (width >= 670) {
        return (
            <>
                <div className='environments'>
                    <h1>Creating Environments Tailored to You</h1>
                    <div className='env-section'>
                        <h2>Commercial Design</h2>
                        <p>{Text.commercialDesign}</p>
                    </div>
                    <div className='environments-accent'>
                        <div>
                            <h2>Residential Design</h2>
                            <p>{Text.residentialDesign}</p>
                        </div>
                        <div>
                            <img src='/rotate.jpeg' />
                        </div>
                    </div>
                    <div className='env-section'>
                        <h2>Interior Styling</h2>
                        <p>{Text.interiorStyling}</p>
                    </div>
                </div>
                <hr />
            </>
        )
    } else {
        return (
            <>
                <div className='environments mobile'>
                    <h1 className='test' ref={mobileH1}>
                        Creating Environments Tailored to You
                    </h1>
                    <div ref={section1} className='env-section'>
                        <h2>Commercial Design</h2>
                        <p>{Text.commercialDesign}</p>
                    </div>
                    <div className='environments-accent'>
                        <div ref={section2}>
                            <h2>Residential Design</h2>
                            <p>{Text.residentialDesign}</p>
                        </div>
                        <div>
                            <img className='mobile-rotate' src='/rotate.jpeg' />
                        </div>
                    </div>
                    <div ref={section3} className='env-section'>
                        <h2>Interior Styling</h2>
                        <p>{Text.interiorStyling}</p>
                    </div>
                </div>
                <hr />
            </>
        )
    }
}

export default Environments
