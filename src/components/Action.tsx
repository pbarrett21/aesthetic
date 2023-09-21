import Text from "./../text";
import Arrow from "../icons/Arrow";
import useWindowDimensions from "../helpers/useWindowDimensions";

const Action: React.FC = () => {
    const { width } = useWindowDimensions();

    return (
        <div className='action'>
            <h1>Design your dream space</h1>
            <p className='landingParagraph'>{Text.landingParagraph}</p>
            <div>
                <button className='button1'>
                    <span>
                        Start a project <Arrow right />
                    </span>
                </button>
                {width >= 640 && (
                    <button className='button2'>
                        <span>
                            View recent work <Arrow right />
                        </span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Action;
