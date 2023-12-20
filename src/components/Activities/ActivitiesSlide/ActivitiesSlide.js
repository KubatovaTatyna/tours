import { Link } from 'react-router-dom';
import './ActivitiesSlide.css'
const ActivitiesSlide = ({ slide, tour }) => {
    return (
        <div className='ActivitiesSlide'>
            <Link to={'/tours/' + tour.tourId}>
                <img src={slide} alt='alt' />
                <div className='slideText'>
                    <p>{tour.header}</p>
                    <span>{tour.aboutText}</span>
                </div>
            </Link>
        </div>);
}

export default ActivitiesSlide;