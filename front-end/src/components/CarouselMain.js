import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "../styles/CarouselMain.css"

import srcFirstSlide from "../pics/Watch_Dogs_2_Logo_Ubisoft_Crop.gif";

class CarouselMain extends React.Component {
  render() {
    const holderSize = "650x300";
    const [firstSlideText, secondSlideText, thirdSlideText] = ["First Slide", "Second Slide", "Third Slide"];
    //const srcFirstSlide = `holder.js/${holderSize}?text=${firstSlideText}&bg=373940`;
    const srcSecondSlide = `holder.js/${holderSize}?text=${secondSlideText}&bg=373940`;
    const srcThirdSlide = `holder.js/${holderSize}?text=${thirdSlideText}&bg=373940`;

    //const srcFirstSlide = "../pics/Watch_Dogs_2_Logo_Ubisoft_Crop.gif"

    return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={srcFirstSlide}
      alt={firstSlideText}
      height="300"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={srcSecondSlide}
      alt={secondSlideText}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={srcThirdSlide}
      alt={thirdSlideText}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
  }
}

export default CarouselMain;