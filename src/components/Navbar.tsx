const Navbar: React.FC = () => {
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
            <a href=''>(555) 555-5555</a>
        </nav>
    )
}

export default Navbar