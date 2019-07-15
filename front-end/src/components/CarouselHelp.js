import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "../styles/CarouselHelp.css"

import helpSrcImg from "../pics/under-construction.png"

class CarouselHelp extends React.Component {
  render() {
    const holderSize = "650x300";
    const firstSlideText = "First Slide";
    const srcFirstSlide = `holder.js/${holderSize}?text=${""}&bg=373940`;

    return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={srcFirstSlide}
      alt={firstSlideText}
    />
    <Carousel.Caption>
      <img
      className="d-block w-100"
      src={helpSrcImg}
      alt=""
      />
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
  }
}

export default CarouselHelp;