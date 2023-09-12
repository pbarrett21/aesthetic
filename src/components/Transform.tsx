import Arrow from './Arrow'
import FooterIcon from './FooterIcon'

const Transform: React.FC = () => {
    return (
        <>
            <div className='action-call'>
                <h1>Ready to transform your space?</h1>
                <div className='big-arrow'>
                    <Arrow right />
                </div>
            </div>
            <nav className='footer'>
                <a href='/'>Aesthetic</a>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <ul className='footerLinks'>
                    <li>
                        <FooterIcon facebook />
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/pbarrett21/'>
                            <FooterIcon linkedin />
                        </a>
                    </li>
                    <li>
                        <FooterIcon twitter />
                    </li>
                    <li>
                        <FooterIcon instagram />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Transform
