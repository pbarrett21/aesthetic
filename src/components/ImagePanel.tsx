export interface PanelProps {
    imageSrc: string
    heading: string
    body: string
    orientation: 'square' | 'portrait'
}

const ImagePanel: React.FC<PanelProps> = (props: PanelProps) => {
    return (
        <div>
            <img src={props.imageSrc} className={'img-' + props.orientation} />
            <h2>{props.heading}</h2>
            <p>{props.body}</p>
            <button>&#8594;</button>
        </div>
    )
}

export default ImagePanel
