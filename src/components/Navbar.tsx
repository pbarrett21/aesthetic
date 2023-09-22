import { useState } from "react";
import Hamburger from "../icons/Hamburger";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
    const [mobileMenuHidden, setMobileMenuHidden] = useState(true);

    const showMenu = () => {
        setMobileMenuHidden(false);
    };

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
            <button onClick={() => showMenu()}>
                <Hamburger />
            </button>
            <MobileMenu hidden={mobileMenuHidden} />
        </nav>
    );
};

export default Navbar;
