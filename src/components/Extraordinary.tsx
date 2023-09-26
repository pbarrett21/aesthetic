import Text from '../text'
import useWindowDimensions from '../helpers/useWindowDimensions'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

const Extraordinary: React.FC = () => {
    const { width } = useWindowDimensions()
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        if (width < 670) {
            const tl = gsap.timeline({
                delay: 0,
                scrollTrigger: {
                    trigger: '.extraordinary.mobile',
                    start: 'top bottom',
                },
                defaults: {
                    duration: 0.8,
                    ease: 'power3.out',
                },
            })

            tl.fromTo('.bottom-panel.mobile', { x: -500 }, { x: 0 })
                .fromTo(
                    '.bottom-panel.mobile img',
                    { opacity: 0 },
                    { opacity: 1 }
                )
                .fromTo('.right-side.mobile', { x: 500 }, { x: 0 })

            return () => {
                tl.kill()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <div className='bottom-panel mobile'>
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
                        <div className='right-side mobile'>
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
