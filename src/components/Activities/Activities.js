import slide2 from '../../images/actSlide2.jpg';
import ActivitiesSlide from './ActivitiesSlide/ActivitiesSlide';
import tours from '../../data/tours';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Activities.css';

const Activities = () => {

    const tourItem = tours.map(tour => {
        return (<ActivitiesSlide slide={slide2} key={tour.tourId} tour={tour} />)
    });


    const sliderSettings = {
        dots: true,
        arrows:true,
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

    return (<div className="Activities">
        <>
            <div className='activitiesHeader'>
                <span>HUNDREDS OF</span>
                <h1>Activities for Everyoune</h1>
            </div>
            <div className='slideContainer'>
                <Slider {...sliderSettings}>{tourItem}</Slider>
            </div>
        </>
    </div >);
}

export default Activities;