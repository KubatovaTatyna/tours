import ActivitiesSlide from '../../Activities/ActivitiesSlide/ActivitiesSlide';
import './Slide.css';

const Slide = ({ item }) => {
    return (
        <div className='slide' key={item.itemId}>
            <ActivitiesSlide item={item}/>
        </div>
    );
}

export default Slide;