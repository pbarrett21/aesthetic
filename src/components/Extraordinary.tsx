import Text from "../text";
import useWindowDimensions from "../helpers/useWindowDimensions";

const Extraordinary: React.FC = () => {
    const { width } = useWindowDimensions();

    if (width >= 670) {
        return (
            <>
                <div className='extraordinary'>
                    <h1>Unveiling the Extraordinary</h1>
                    <div className='bottom-panel'>
                        <div className='left-side'>
                            <div>
                                <h2>Design Expertise</h2>
                                <p>{Text.designExpertise}</p>
                            </div>
                            <div>
                                <h2>Innovative Solutions</h2>
                                <p>{Text.innovative}</p>
                            </div>
                        </div>
                        <img src='/colorful.jpeg' />
                        <div className='right-side'>
                            <div>
                                <h2>Client-Centric Approach</h2>
                                <p>{Text.clientCentric}</p>
                            </div>
                            <div>
                                <h2>Tailored Budgeting</h2>
                                <p>{Text.tailored}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </>
        );
    } else {
        return (
            <>
                <div className='extraordinary mobile'>
                    <h1>Unveiling the Extraordinary</h1>
                    <div className='bottom-panel mobile'>
                        <div className='left-side'>
                            <div>
                                <h2>Design Expertise</h2>
                                <p>{Text.designExpertise}</p>
                            </div>
                            <div>
                                <h2>Innovative Solutions</h2>
                                <p>{Text.innovative}</p>
                            </div>
                        </div>
                        <img src='/colorful.jpeg' />
                        <div className='right-side'>
                            <div>
                                <h2>Client-Centric Approach</h2>
                                <p>{Text.clientCentric}</p>
                            </div>
                            <div>
                                <h2>Tailored Budgeting</h2>
                                <p>{Text.tailored}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </>
        );
    }
};

export default Extraordinary;
