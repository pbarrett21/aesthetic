import Action from './Action'
import Brag from './Brag'
import useWindowDimensions from '../helpers/useWindowDimensions'
import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'

const Landing: React.FC = () => {
    const { width } = useWindowDimensions()

    useLayoutEffect(() => {
        const timeLine = gsap.timeline({
            delay: 0,
            defaults: {
                duration: 0.8,
                ease: 'power3.out',
            },
        })

        if (width < 640) {
            timeLine
            .fromTo('.img2-mobile', { x: 500 }, { x: 0 })
            .fromTo('.action', { opacity: 0 }, { opacity: 1 })
            .fromTo('.bottom', { x: -500 }, { x: 0 })
        }

        return () => {
            timeLine.kill()
        }
    }, [])

    if (width >= 640) {
        return (
            <>
                <div className='landingPage'>
                    <div className='img1-container'>
                        <img
                            className='img1'
                            src='/room1.jpeg'
                            alt='modern living room'
                        />
                    </div>
                    <Action />
                    <Brag />
                    <img
                        className='img2'
                        src='/room2.jpeg'
                        alt='modern house'
                    />
                </div>
                <hr />
            </>
        )
    } else {
        return (
            <>
                <div className='landingPage-mobile'>
                    <div className='top'>
                        <Action />
                        <img
                            className='img2-mobile'
                            src='/room2.jpeg'
                            alt='modern house'
                        />
                    </div>
                    <div className='bottom'>
                        <img
                            className='img1-mobile'
                            src='/room1.jpeg'
                            alt='modern living room'
                        />
                        <Brag />
                    </div>
                </div>
                <hr></hr>
            </>
        )
    }
}

export default Landing
