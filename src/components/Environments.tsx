import Text from "../text"

const Environments: React.FC = () => {
    return (
        <>
            <h1>Creating Environments Tailored to You</h1>
            <div>
                <h2>Commercial Design</h2>
                <p>{Text.commercialDesign}</p>
            </div>
            <div>
                <h2>Residential Design</h2>
                <p>{Text.residentialDesign}</p>
            </div>
            <div>
                <h2>Interior Styling</h2>
                <p>{Text.interiorStyling}</p>
            </div>
        </>
    )
}

export default Environments