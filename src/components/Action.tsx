import Text from './../text'
import Arrow from '../icons/Arrow'

const Action: React.FC = () => {
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
                <button className='button2'>
                    <span>
                        View recent work <Arrow right />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Action
