import React from "react";
import { Carousel } from "react-bootstrap";
import "./../assets/css/slider.css";
import Slider1 from "./../assets/images/slider/img-3.jpg";
import Slider2 from "./../assets/images/slider/pexels-freestocksorg-291762.jpg";
import Slider3 from "./../assets/images/slider/img-7.jpg";
import Slider4 from "./../assets/images/slider/img-5.jpg";
import "../assets/css/slider.css";
const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="img d-block w-100" src={Slider1} alt="Slider Img" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="img d-block w-100" src={Slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="img d-block w-100" src={Slider3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="img d-block w-100" src={Slider4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
