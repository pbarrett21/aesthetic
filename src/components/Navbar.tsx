import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Hamburger from '../icons/Hamburger'
import X from '../icons/X'
import { gsap } from 'gsap'

const Navbar: React.FC = () => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const sideMenuRef = useRef<HTMLDivElement>(null)

    const openMenu = () => {
        setSideMenuOpen(true)
        gsap.fromTo(
            sideMenuRef,
            { height: 0, width: 0, duration: 1 },
            { height: '50vh', width: '60vw' }
        )
    }

    const closeMenu = () => {
        setSideMenuOpen(false)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            sideMenuRef.current &&
            !sideMenuRef.current.contains(event.target as Node)
        ) {
            setSideMenuOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return (
        <nav className='navBar'>
            <a href='/'>Aesthetic</a>
            <ul>
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
            {sideMenuOpen ? (
                <div ref={sideMenuRef} className='sideMenu'>
                    <div className='top-menu'>
                        <button onClick={() => closeMenu()}>
                            <X />
                        </button>
                    </div>
                    <div></div>
                </div>
            ) : null}
        </nav>
    )
}

export default Navbar
