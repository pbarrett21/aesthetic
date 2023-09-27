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
        if (width < 670) {
            gsap.set(left.current, { opacity: 0 })
            gsap.set(img.current, { opacity: 0 })
            gsap.set(right.current, { opacity: 0 })

            gsap.to(left.current, {
                opacity: 1,
                scrollTrigger: {
                    trigger: left.current,
                    start: 'top 65%',
                },
            })
            gsap.to(img.current, {
                opacity: 1,
                scrollTrigger: {
                    trigger: img.current,
                    start: 'top 65%',
                },
            })
            gsap.to(right.current, {
                opacity: 1,
                scrollTrigger: {
                    trigger: right.current,
                    start: 'top 65%',
                },
            })
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
