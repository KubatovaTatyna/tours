import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurTeam.css';
import OurTeamSlide from './OurTeamSlide/OurTeamSlide';
import Carousel from 'react-multi-carousel';
import SliderComponent from '../Slider/SliderComponent';

const OurTeam = ({ourTeam}) => {

    return (<div className="OurTeam">
        <>
            <div className='ourTeamHeader'>
                <span>ABOUT US</span>
                <h1>Our Team</h1>
            </div>
            <div className='slideContainer'>
              <SliderComponent section={ourTeam}/>
            </div>
        </>
    </div >);
}

export default OurTeam;