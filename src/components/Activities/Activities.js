import './Activities.css';
// import slide1 from '../../images/actSlide1.jpg';
import slide2 from '../../images/actSlide2.jpg';
// import slide3 from '../../images/actSlide3.jpg';
// import slide4 from '../../images/actSlide4.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper/modules";
import ActivitiesSlide from './ActivitiesSlide/ActivitiesSlide';
import tours from '../../data/tours';

const Activities = () => {

    const tourItem = tours.map(tour => {
       return (<SwiperSlide><ActivitiesSlide slide={slide2} key={tour.tourId} tour={tour}/></SwiperSlide>) 
    })


    console.log(tourItem)

    return (<div className="Activities">
        <>
            <div className='activitiesHeader'>
                <span>HUNDREDS OF</span>
                <h1>Activities for Everyoune</h1>
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
                    {tourItem}
                </Swiper>
            </div>
        </>
    </div >);
}

export default Activities;