import Action from './Action'
import Brag from './Brag'

const Landing: React.FC = () => {
    return (
        <>
            <div className='landingPage'>
                <img
                    className='img1'
                    src='src/assets/room-small-cropped-2.jpeg'
                    alt='modern living room'
                />
                <Action />
                <Brag />
                <img
                    className='img2'
                    src='src/assets/room2-small.jpeg'
                    alt='modern house'
                />
            </div>
            <hr/>
        </>
    )
}

export default Landing
