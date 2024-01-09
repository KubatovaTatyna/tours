import './Price.css';

const Price = ({ prices }) => {
    const price = prices.map(e => {
        return (
            <div className="price col-sm-12 mb-4 mt-5">
                <div className="price-head">{e.priceHeader}</div>
                <div className="price-body">  <strong>{e.price}</strong>per person</div>
            </div>
        )
    })
    return (<div className="Prices">
        <h1 className='mb-5'>Price</h1>
        <div className="prices-container row justify-content-center mt-5 mb-5">
            {price}
        </div>
    </div>);
}

export default Price;