// SliderComponent.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide from './Slide/Slide';
import './SliderComponent.css'; // Include your own styles

const SliderComponent = ({ section, header, smallHeader }) => {

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

  const slides = section.map((item) => (
    <Slide item={item}/>
  ));

  return (
    <div className="Slider">
      <div className="sliderHeader">
        <span>{smallHeader}</span>
        <h1>{header}</h1>
      </div>
      <div className="slideContainer">
        <Carousel responsive={responsive}>{slides}</Carousel>
      </div>
    </div>
  );
};

export default SliderComponent;
