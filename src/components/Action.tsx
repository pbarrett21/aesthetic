import Text from './../text'
import Arrow from './Arrow'

const Action: React.FC = () => {
    return (
        <div className='action'>
            <div className='action-title'>
                <p>Design your</p>
                <p>dream space</p>
            </div>
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
