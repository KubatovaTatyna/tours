import './ActivitiesSlide.css'
const ActivitiesSlide = ({ slide }) => {
    return (
        <div className='ActivitiesSlide'>
            <img src={slide} alt='alt' />
            <div className='slideText'>
                <p>Hikking</p>
                <span>230 activites</span>
            </div>
        </div>);
}

export default ActivitiesSlide;