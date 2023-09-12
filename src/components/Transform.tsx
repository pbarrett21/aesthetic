import Arrow from './Arrow'

const Transform: React.FC = () => {
    return (
        <>
            <div className='action-call'>
                <h1>Ready to transform your space?</h1>
                <div className='big-arrow'>
                    <Arrow right />
                </div>
            </div>
            <nav>
                <a href='/'>Aesthetic</a>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li>FB</li>
                    <li>LI</li>
                    <li>X</li>
                    <li>IG</li>
                </ul>
            </nav>
        </>
    )
}

export default Transform
