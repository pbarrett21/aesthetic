import Arrow from "../icons/Arrow";
import FooterIcon from "../icons/FooterIcon";
import useWindowDimensions from "../helpers/useWindowDimensions";

const Transform: React.FC = () => {
    const { width } = useWindowDimensions();

    if (width >= 670) {
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
                    <ul className='footerNav'>
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
        );
    } else {
        return (
            <div className='call-mobile'>
                <div className='action-call mobile'>
                    <h1>Ready to transform your space?</h1>
                    <div className='big-arrow'>
                        <Arrow right />
                    </div>
                </div>
                <nav className='footer'>
                    <a href='/'>Aesthetic</a>
                    <ul className='footerNav'>
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
            </div>
        );
    }
};

export default Transform;
