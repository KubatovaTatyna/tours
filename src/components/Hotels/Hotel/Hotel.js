import './Hotel.css';

const Hotel = ({ hotel, star }) => {
    return (
        <div className='Hotel'>
            <div className='Card'>
                <img src={hotel} className='CardImage' alt='alt' />
                <div className='CartText'>
                    <div>
                        <h2>Reine</h2>
                        <p>$720</p>
                    </div>
                    <div className='Stars'>
                        <img src={star} alt='alt' />
                        <img src={star} alt='alt' />
                        <img src={star} alt='alt' />
                        <img src={star} alt='alt' />
                        <img src={star} alt='alt' />
                    </div>
                </div>
            </div>
        </div>);
}

export default Hotel;