import './About.css';
import slide1 from '../../images/aboutSlide1.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper/modules";
import AboutSlide from './AboutSlide/AboutSlide';

const About = () => {
    return (<div className="About" id='about'>
        <>
            <div className='aboutHeader'>
                <span>ABOUT US</span>
                <h1>Our Team</h1>
            </div>
            <div className='slideContainer'>
                <Swiper
                    // slidesPerView = {5}
                    // spaceBetween = {30}
                    breakpoints={{
                        230: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        980: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        }
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><AboutSlide slide={slide1} /></SwiperSlide>
                    <SwiperSlide><AboutSlide slide={slide1} /></SwiperSlide>
                    <SwiperSlide><AboutSlide slide={slide1} /></SwiperSlide>
                    <SwiperSlide><AboutSlide slide={slide1} /></SwiperSlide>
                    <SwiperSlide><AboutSlide slide={slide1} /></SwiperSlide>
                    <SwiperSlide><AboutSlide slide={slide1} /></SwiperSlide>
                    <SwiperSlide><AboutSlide slide={slide1} /></SwiperSlide>
                    <SwiperSlide><AboutSlide slide={slide1} /></SwiperSlide>
                </Swiper>
            </div>
        </>
    </div >);
}

export default About;