import Text from "../text"

const Environments: React.FC = () => {
    return (
        <>
            <div className="environments">
                <h1>Creating Environments Tailored to You</h1>
                <div className="env-section">
                    <h2>Commercial Design</h2>
                    <p>{Text.commercialDesign}</p>
                </div>
                <div className="environments-accent">
                    <div>
                        <h2>Residential Design</h2>
                        <p>{Text.residentialDesign}</p>
                    </div>
                    <div>
                        <img src="src/assets/rotate.jpeg"/>
                    </div>
                </div>
                <div className="env-section">
                    <h2>Interior Styling</h2>
                    <p>{Text.interiorStyling}</p>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Environments