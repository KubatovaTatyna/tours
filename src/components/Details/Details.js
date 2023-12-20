import location from '../../images/location.svg';
import duration from '../../images/duration.svg';
import elevation from '../../images/elevation.svg';
import season from '../../images/season.svg';
import './Details.css'

const Details = () => {
    return (<div className="Details text-center mb-5">
        <h1 className='mb-5 text-center'>Details</h1>
        <div className="details-container container">
            <div className='row mb-5 w-75 m-auto'>
                <div className="d-location col">
                    <img src={location} alt='location' className='w-25'/>
                    <p>Eastern Terskey Ala-Too Range, Issyk-Kul province, North Kyrgyzstan</p>
                </div>
                <div className="d-duration col">
                    <img src={duration} alt='duration' className='w-25' />
                    <p>Eastern Terskey Ala-Too Range, Issyk-Kul province, North Kyrgyzstan</p>
                </div>
            </div>
            <div className='row mb-5 w-75 m-auto'>
                <div className="d-elevation col">
                    <img src={elevation} alt='elevation' className='w-25' />
                    <p>Eastern Terskey Ala-Too Range, Issyk-Kul province, North Kyrgyzstan</p>
                </div>
                <div className="d-season col">
                    <img src={season} alt='season' className='w-25'/>
                    <p>Eastern Terskey Ala-Too Range, Issyk-Kul province, North Kyrgyzstan</p>
                </div>
            </div>
        </div>
    </div>);
}

export default Details;