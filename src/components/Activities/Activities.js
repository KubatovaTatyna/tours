import ActivitiesSlide from './ActivitiesSlide/ActivitiesSlide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Activities.css';
import Carousel from 'react-multi-carousel';

const Activities = ({ header, smallHeader, section }) => {
  const tour = section.map(e => {
    return (
      <ActivitiesSlide tour={e} key={e.itemId} />
    )
  });


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (<div className="Activities">
    <>
      <div className='activitiesHeader'>
        <span>{smallHeader}</span>
        <h1>{header}</h1>
      </div>
      <div className="slideContainer">
        <Carousel responsive={responsive}>{tour}</Carousel>
      </div>
    </>
  </div >);
}

export default Activities;