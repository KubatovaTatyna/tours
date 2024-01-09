import location from '../../images/location.svg';
import durationImg from '../../images/duration.svg';
// import elevation from '../../images/elevation.svg';
// import season from '../../images/season.svg';
import './Details.css'

const Details = ({highlights, duration}) => {
    return (<div className="Details text-center mb-5">
        <h1 className='mb-5 text-center'>Details</h1>
        <div className="details-container container mt-5">
            <div className='row mb-5 w-75 m-auto'>
                <div className="d-location col-xs-12 mb-5 mt-5">
                    <img src={location} alt='location' className='w-25'/>
                    <h1>Location</h1>
                    <p className='new-line'>{highlights}</p>
                </div>
                <div className="d-duration col-xs-12 mb-5 mt-5">
                    <img src={durationImg} alt='duration' className='w-25' />
                    <h1>Duration</h1>
                    <p>{duration}</p>
                </div>
            </div>
        </div>
    </div>);
}

export default Details;