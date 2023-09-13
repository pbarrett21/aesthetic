import Text from '../text'
import ImagePanel, { PanelProps } from './ImagePanel'

const Dreams: React.FC = () => {
    const panels: PanelProps[] = [
        {
            imageSrc: '/contemporary.jpeg',
            heading: 'Contemporary Chic Apartment',
            body: Text.contemporary,
            orientation: 'square'
        },
        {
            imageSrc: '/rustic.jpeg',
            heading: 'Rustic Retreat in the Suburbs',
            body: Text.rustic,
            orientation: 'portrait'
        },
        {
            imageSrc: '/spa.jpeg',
            heading: 'Minimalist Serenity Spa',
            body: Text.spa,
            orientation: 'portrait'
        },
        {
            imageSrc: '/elegant.jpeg',
            heading: 'Timeless Elegance in a Classic Home',
            body: Text.elegant,
            orientation: 'square'
        },
    ]

    return (
        <>
            <div className='dreams-header'>
                <h1>Where Dreams Take Shape</h1>
                <p>{Text.dreams}</p>
            </div>
            <div className='panels-container'>
                {panels.map(({imageSrc, heading, body, orientation}) => (
                    <ImagePanel
                        imageSrc={imageSrc}
                        heading={heading}
                        body={body}
                        orientation={orientation}
                    />
                ))}
            </div>
            <hr></hr>
        </>
    )
}

export default Dreams
