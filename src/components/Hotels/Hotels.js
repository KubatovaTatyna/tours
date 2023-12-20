import hotel1 from '../../images/hotel1.jpg';
import yellowStar from '../../images/yellowStar.jpg';
import Hotel from './Hotel/Hotel';

import './Hotels.css';

const Hotels = () => {
  return (<div className="Hotels">
    <div className="hotelsHeader">
      <span>BEAUTIES</span>
      <h1>Hotels and Appartements</h1>
    </div>
    <div className='HotelsCards'>
      <Hotel hotel={hotel1} star={yellowStar} />
      <Hotel hotel={hotel1} star={yellowStar} />
      <Hotel hotel={hotel1} star={yellowStar} />
    </div>
  </div>);
}

export default Hotels;