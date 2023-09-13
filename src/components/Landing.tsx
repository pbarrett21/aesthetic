import Action from './Action'
import Brag from './Brag'

const Landing: React.FC = () => {
    return (
        <>
            <div className='landingPage'>
                <div className='img1-container'>
                    <img
                        className='img1'
                        src='/room1.jpeg'
                        alt='modern living room'
                    />
                </div>
                <Action />
                <Brag />
                <img
                    className='img2'
                    src='/room2.jpeg'
                    alt='modern house'
                />
            </div>
            <hr/>
        </>
    )
}

export default Landing
