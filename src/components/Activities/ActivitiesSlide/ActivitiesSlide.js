import { Link } from 'react-router-dom';
import Slide from '../../Slider/Slide/Slide';
import './ActivitiesSlide.css'
const ActivitiesSlide = ({ tour }) => {
    return (
        <div className='ActivitiesSlide'>
            <Link to={'/tours/' + tour.itemId}>
                <Slide item={tour}/>
            </Link>
        </div>);
}

export default ActivitiesSlide;