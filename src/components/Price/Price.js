import './Price.css';

const Price = () => {
    return ( <div className="Prices">
        <h1 className='mb-5'>Price</h1>
        <div className="prices-container row justify-content-center mt-5 mb-5">
            <div className="price col-sm-12 mb-4 mt-5">
                <div className="price-head">Group of 4-5:</div>
                <div className="price-body">  <strong>1380 $</strong>/person/tour</div>
            </div>
            <div className="price col-sm-12 mb-4 mt-5">
                <div className="price-head">Group of 4-5:</div>
                <div className="price-body"> <strong>1380 $</strong>/person/tour</div>
            </div>
            <div className="price col-sm-12 mb-4 mt-5">
                <div className="price-head">Group of 4-5:</div>
                <div className="price-body">  <strong>1380 $</strong>/person/tour</div>
            </div>
        </div>
    </div> );
}
 
export default Price;