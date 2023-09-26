import Text from '../text'
import useWindowDimensions from '../helpers/useWindowDimensions'
import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const Extraordinary: React.FC = () => {
    const { width } = useWindowDimensions()
    const panel = useRef(null)
    const left = useRef(null)
    const img = useRef(null)
    const right = useRef(null)

    useLayoutEffect(() => {
        const tl1 = gsap.timeline({
            delay: 0,
            scrollTrigger: {
                trigger: panel.current,
                // markers: true,
                start: 'top center',
            },
            defaults: {
                duration: 0.8,
                ease: 'power3.out',
            },
        })

        if (width < 670) {
            // tl1.fromTo(left.current, { x: -500 }, { x: 0 })
                // .fromTo(img.current, { opacity: 0 }, { opacity: 1 })
                // .fromTo(right.current, { x: 500 }, { x: 0 })

            return () => {
                tl1.kill()
            }
        }
    }, [])

    if (width >= 670) {
        return (
            <>
                <div className='extraordinary'>
                    <h1>Unveiling the Extraordinary</h1>
                    <div className='bottom-panel'>
                        <div className='left-side'>
                            <div>
                                <h2>Design Expertise</h2>
                                <p>{Text.designExpertise}</p>
                            </div>
                            <div>
                                <h2>Innovative Solutions</h2>
                                <p>{Text.innovative}</p>
                            </div>
                        </div>
                        <img src='/colorful.jpeg' />
                        <div className='right-side'>
                            <div>
                                <h2>Client-Centric Approach</h2>
                                <p>{Text.clientCentric}</p>
                            </div>
                            <div>
                                <h2>Tailored Budgeting</h2>
                                <p>{Text.tailored}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </>
        )
    } else {
        return (
            <>
                <div className='extraordinary mobile'>
                    <h1>Unveiling the Extraordinary</h1>
                    <div ref={panel} className='bottom-panel mobile'>
                        <div ref={left} className='left-side'>
                            <div>
                                <h2>Design Expertise</h2>
                                <p>{Text.designExpertise}</p>
                            </div>
                            <div>
                                <h2>Innovative Solutions</h2>
                                <p>{Text.innovative}</p>
                            </div>
                        </div>
                        <img ref={img} src='/colorful.jpeg' />
                        <div ref={right} className='right-side mobile'>
                            <div>
                                <h2>Client-Centric Approach</h2>
                                <p>{Text.clientCentric}</p>
                            </div>
                            <div>
                                <h2>Tailored Budgeting</h2>
                                <p>{Text.tailored}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </>
        )
    }
}

export default Extraordinary
