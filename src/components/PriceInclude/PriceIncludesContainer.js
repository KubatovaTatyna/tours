import PriceIncludes from "./PriceIncludes/PriceIncludes";
import PriceNotIncludes from "./PriceNotIncludes/PriceNotIncludes";
import './PriceIncludesContainer.css'

const PriceInlcudesContainer = ({included, excluded}) => {
    const priceIncluded = included.map(e => {
        return <PriceIncludes included={e}/>
    });
    const priceNotIncluded = excluded.map(e => {
        return <PriceNotIncludes excluded={e}/>
    });
    return (<div className="PriceIncludesContainer row justify-content-between w-75 m-auto">
        <div className="PriceIncludes col-6">
            <h1>Price includes:</h1>
            <ul>
                {priceIncluded}
            </ul>
        </div>
        <div className="PriceNotIncludes col-6">
            <h1>Price not includes:</h1>
            <ul>
                {priceNotIncluded}
            </ul>
        </div>
    </div>);
}

export default PriceInlcudesContainer;