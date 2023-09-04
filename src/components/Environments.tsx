import Text from "../text"

const Environments: React.FC = () => {
    return (
        <>
            <div className="environments">
                <h1>Creating Environments Tailored to You</h1>
                <div>
                    <h2>Commercial Design</h2>
                    <p>{Text.commercialDesign}</p>
                </div>
                <div className="environments-accent">
                    <h2>Residential Design</h2>
                    <p>{Text.residentialDesign}</p>
                </div>
                <div>
                    <h2>Interior Styling</h2>
                    <p>{Text.interiorStyling}</p>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Environments