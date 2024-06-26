import Text from '../text'
import ImagePanel, { PanelProps } from './ImagePanel'
import useWindowDimensions from '../helpers/useWindowDimensions'
import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'

const Dreams: React.FC = () => {
    const { width } = useWindowDimensions()

    useLayoutEffect(() => {
        if (width < 670) {
            const panels = gsap.utils.toArray<HTMLElement>('.panel')

            panels.forEach((panel) => {
                gsap.set(panel, { opacity: 0 })

                gsap.to(panel, {
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top 65%',
                    },
                })
            })
        }
    }, [])

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
