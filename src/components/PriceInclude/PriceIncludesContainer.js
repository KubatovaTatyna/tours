import PriceIncludes from "./PriceIncludes/PriceIncludes";
import PriceNotIncludes from "./PriceNotIncludes/PriceNotIncludes";
import './PriceIncludesContainer.css'

const PriceInlcudesContainer = () => {
    return (<div className="PriceIncludesContainer row justify-content-between w-75 m-auto">
        <div className="PriceIncludes col-6">
            <h1>Price includes:</h1>
            <ul>
                <PriceIncludes />
            </ul>
        </div>
        <div className="PriceNotIncludes col-6">
            <h1>Price not includes:</h1>
            <ul>
                <PriceNotIncludes />
            </ul>
        </div>
    </div>);
}

export default PriceInlcudesContainer;