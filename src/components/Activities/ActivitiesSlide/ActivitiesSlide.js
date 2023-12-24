import { Link } from 'react-router-dom';
import './ActivitiesSlide.css'
const ActivitiesSlide = ({item}) => {
    return (
        <div className='ActivitiesSlide'>
            <Link to={'/tours/' + item.itemId}>
                <img className="d-block w-100 slide-image" src={item.image} alt={item.title} />
                <div className='slide-text'>
                    <h3>{item.name}</h3>
                    <p>{item.title}</p>
                </div>
            </Link>
        </div>);
}

export default ActivitiesSlide;