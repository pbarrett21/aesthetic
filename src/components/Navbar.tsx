import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Hamburger from '../icons/Hamburger'
import X from '../icons/X'
import { gsap } from 'gsap'

const Navbar: React.FC = () => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const sideMenuRef = useRef<HTMLDivElement>(null)
    let menuLinks: HTMLElement[] = []

    const openMenu = () => {
        setSideMenuOpen(true)
    }

    const closeMenu = () => {
        setSideMenuOpen(false)
    }

    const setLinksInvisible = () => {
        menuLinks.forEach((link) => {
            gsap.set(link as GSAPTweenTarget, { autoAlpha: 0 })
        })
    }

    const setLinksInvisibleAnimated = () => {
        let delay = 0
        // iterate backwards ES2023
        menuLinks.findLast((link, index) => {
            if (index === 0) {
                gsap.to(link as GSAPTweenTarget, {
                    autoAlpha: 0,
                    delay: delay,
                    onComplete: () => {
                        gsap.to(sideMenuRef.current, {
                            autoAlpha: 0,
                            height: 0,
                            duration: 0.5,
                        })
                    },
                })
            } else {
                gsap.to(link as GSAPTweenTarget, { autoAlpha: 0, delay: delay })
            }
            delay += 0.015
        })
    }

    const setLinksVisible = () => {
        let delay = 0
        menuLinks.forEach((link) => {
            gsap.to(link as GSAPTweenTarget, { autoAlpha: 1, delay: delay })
            delay += 0.025
        })
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            sideMenuRef.current &&
            !sideMenuRef.current.contains(event.target as Node)
        ) {
            setSideMenuOpen(false)
        }
    }

    useLayoutEffect(() => {
        menuLinks = gsap.utils.toArray('.menuLinks li')
        if (sideMenuOpen) {
            setLinksInvisible()
            gsap.set(sideMenuRef.current, { autoAlpha: 0.75, height: 0 })
            gsap.to(sideMenuRef.current, {
                autoAlpha: 1,
                duration: 0.5,
                height: '50vh',
                onComplete: () => setLinksVisible(),
            })
        } else {
            setLinksInvisibleAnimated()
        }
    }, [sideMenuOpen])

    useEffect(() => {
        gsap.set(sideMenuRef.current, { autoAlpha: 0, height: 0 })
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return (
        <nav className='navBar'>
            <a href='/'>Aesthetic</a>
            <ul className='headerLinks'>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <span>(555) 555-5555</span>
            <button onClick={() => openMenu()}>
                <Hamburger />
            </button>
            <div ref={sideMenuRef} className='sideMenu'>
                <div className='top-menu'>
                    <button onClick={() => closeMenu()}>
                        <X />
                    </button>
                </div>
                <div>
                    <ul className='menuLinks'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
