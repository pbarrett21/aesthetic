import Arrow from "../icons/Arrow"

export interface PanelProps {
    imageSrc: string
    heading: string
    body: string
    orientation: 'square' | 'portrait'
}

const ImagePanel: React.FC<PanelProps> = (props: PanelProps) => {
    return (
        <div className='panel'>
            <img src={props.imageSrc} className={'img-' + props.orientation} />
            <h2>{props.heading}</h2>
            <p>{props.body}</p>
            <button><Arrow right/></button>
        </div>
    )
}

export default ImagePanel
