import Text from './../text'

const Action: React.FC = () => {
    return (
        <div className='action'>
            <div className='action-title'>
                <p>Design your</p>
                <p>dream space</p>
            </div>
            <p className='landingParagraph'>{Text.landingParagraph}</p>
            <div>
                <button className='button1'>Start a project &#8594;</button>
                <button className='button2'>View recent work &#8594;</button>
            </div>
        </div>
    )
}

export default Action
