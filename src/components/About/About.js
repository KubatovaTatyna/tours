import './About.css';
import Slider from 'react-slick';
import AboutSlide from './AboutSlide/AboutSlide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = ({aboutUs}) => {

    const aboutItem = aboutUs.map(person => {
        return (<AboutSlide slide={person.photo} key={person.personId} person={person} />)
    });

    console.log(aboutUs);


    const sliderSettings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (<div className="About">
        <>
            <div className='activitiesHeader'>
                <span>ABOUT US</span>
                <h1>Our Team</h1>
            </div>
            <div className='slideContainer'>
                <Slider {...sliderSettings}>{aboutItem}</Slider>
            </div>
        </>
    </div >);
}

export default About;
