import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurTeam.css';
import OurTeamSlide from './OurTeamSlide/OurTeamSlide';
import Carousel from 'react-multi-carousel';
import SliderComponent from '../Slider/SliderComponent';

const OurTeam = ({ ourTeam }) => {

    return (<div className="OurTeam" id='about'>
        <>
            <div className='ourTeamHeader'>
                <span>ABOUT US</span>
                <h1>Our Team</h1>
            </div>
            <div className='aboutText w-100 m-auto text-center'>We are a passionate team of travel experts dedicated to make your journeys extraordinary and memorable. We have been working in the tourism industry since 2018. Our goal is to show you the untouched beauty of our wonderful country, immerse you into nomadic lifestyle, introduce you our diverse culture and create unforgettable memories.
                Our team specializes in organizing group and individual tours in Kyrgyzstan as well as in Kazakhstan. We can make a suitable itinerary for everyone. We do our best to meet your preferences and requirements.
                Join us on our tours and let's make lifelong memories together!</div>
            <div className='slideContainer'>
                <SliderComponent section={ourTeam} />
            </div>
        </>
    </div >);
}

export default OurTeam;