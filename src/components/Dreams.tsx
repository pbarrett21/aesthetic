import Text from '../text'
import ImagePanel, { PanelProps } from './ImagePanel'
import useWindowDimensions from '../helpers/useWindowDimensions'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

const Dreams: React.FC = () => {
    const { width } = useWindowDimensions()
    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {
        if (width < 670) {
            const tl = gsap.timeline({
                delay: 0,
                defaults: {
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.dreams-mobile .dreams-header.mobile h1',
                        start: 'top bottom',
                        markers: true,
                        immediateRender: false
                    },
                },
            })

            gsap.set('.panels-container .panel-0', { opacity: 0 })
            gsap.set('.panels-container .panel-1', { opacity: 0 })
            gsap.set('.panels-container .panel-2', { opacity: 0 })
            gsap.set('.panels-container .panel-3', { opacity: 0 })

            tl.to('.panels-container .panel-0', {
                opacity: 1,
            })
                .to('.panels-container .panel-1', {
                    opacity: 1,
                })
                .to('.panels-container .panel-2', {
                    opacity: 1,
                })
                .to('.panels-container .panel-3', {
                    opacity: 1,
                })

            return () => {
                tl.kill()
            }
        }
    })

    const panels: PanelProps[] = [
        {
            imageSrc: '/contemporary.jpeg',
            heading: 'Contemporary Chic Apartment',
            body: Text.contemporary,
            orientation: 'square',
        },
        {
            imageSrc: '/rustic.jpeg',
            heading: 'Rustic Retreat in the Suburbs',
            body: Text.rustic,
            orientation: 'portrait',
        },
        {
            imageSrc: '/spa.jpeg',
            heading: 'Minimalist Serenity Spa',
            body: Text.spa,
            orientation: 'portrait',
        },
        {
            imageSrc: '/elegant.jpeg',
            heading: 'Timeless Elegance in a Classic Home',
            body: Text.elegant,
            orientation: 'square',
        },
    ]

    if (width >= 670) {
        return (
            <>
                <div className='dreams-header'>
                    <h1>Where Dreams Take Shape</h1>
                    <p>{Text.dreams}</p>
                </div>
                <div className='panels-container'>
                    {panels.map(({ imageSrc, heading, body, orientation }) => (
                        <ImagePanel
                            key={heading}
                            imageSrc={imageSrc}
                            heading={heading}
                            body={body}
                            orientation={orientation}
                        />
                    ))}
                </div>
                <hr></hr>
            </>
        )
    } else {
        return (
            <div className='dreams-mobile'>
                <div className='dreams-header mobile'>
                    <h1>Where Dreams Take Shape</h1>
                    <p>{Text.dreams}</p>
                </div>
                <div className='panels-container'>
                    {panels.map(
                        ({ imageSrc, heading, body, orientation }, index) => (
                            <ImagePanel
                                mobile={true}
                                panelId={index}
                                key={heading}
                                imageSrc={imageSrc}
                                heading={heading}
                                body={body}
                                orientation={orientation}
                            />
                        )
                    )}
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default Dreams
