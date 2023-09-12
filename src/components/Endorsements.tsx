import Carousel, { Testomonial } from './Carousel'
import Text from '../text'

const Endorsements: React.FC = () => {
    const testomonials: Testomonial[] = [
        {
            imageSrc: 'src/assets/head1.jpeg',
            name: 'Oliver Mitchell',
            company: 'CEO of StellarTech Solutions, Inc.',
            stars: 5,
            quote: Text.testomonial1,
            active: false
        },
        {
            imageSrc: 'src/assets/head2.jpeg',
            name: 'Sophia Reynolds',
            company: 'CEO of QuantumCraft Innovations',
            stars: 5,
            quote: Text.testomonial2,
            active: true
        },
        {
            imageSrc: 'src/assets/head3.jpeg',
            name: 'Isabella Morgan',
            company: 'CEO of Sunflower Enterprises Group',
            stars: 5,
            quote: Text.testomonial3,
            active: false
        },
    ]

    return (
        <div className='endorsements'>
            <h1>Don't just take our word for it.</h1>
            <Carousel testomonials={testomonials}/>
        </div>
    )
}

export default Endorsements
