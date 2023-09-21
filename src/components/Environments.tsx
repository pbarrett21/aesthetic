import Text from "../text";
import useWindowDimensions from "../helpers/useWindowDimensions";

const Environments: React.FC = () => {
    const { width, height } = useWindowDimensions();

    if (width >= 670) {
        return (
            <>
                <div className='environments'>
                    <h1>Creating Environments Tailored to You</h1>
                    <div className='env-section'>
                        <h2>Commercial Design</h2>
                        <p>{Text.commercialDesign}</p>
                    </div>
                    <div className='environments-accent'>
                        <div>
                            <h2>Residential Design</h2>
                            <p>{Text.residentialDesign}</p>
                        </div>
                        <div>
                            <img src='/rotate.jpeg' />
                        </div>
                    </div>
                    <div className='env-section'>
                        <h2>Interior Styling</h2>
                        <p>{Text.interiorStyling}</p>
                    </div>
                </div>
                <hr />
            </>
        );
    } else {
        return (
            <>
                <div className='environments mobile'>
                    <h1>Creating Environments Tailored to You</h1>
                    <div className='env-section'>
                        <h2>Commercial Design</h2>
                        <p>{Text.commercialDesign}</p>
                    </div>
                    <div className='environments-accent'>
                        <div>
                            <h2>Residential Design</h2>
                            <p>{Text.residentialDesign}</p>
                        </div>
                        <div>
                            <img className='mobile-rotate' src='/rotate.jpeg' />
                        </div>
                    </div>
                    <div className='env-section'>
                        <h2>Interior Styling</h2>
                        <p>{Text.interiorStyling}</p>
                    </div>
                </div>
                <hr />
            </>
        );
    }
};

export default Environments;
