
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
const HeroSlider = () => {
  return (
    <Carousel className="slider">
      <Carousel.Item interval={1000} className="slide">
        <img
          className="d-block w-100"
          src="https://www.mindtree.com/sites/default/files/styles/hero_value_banner_v2_1367x501/public/2022-01/Tech-beacon-Hero-banner-desktop.jpg?itok=Yq5cI4sH"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.mindtree.com/sites/default/files/styles/hero_value_banner_v2_1367x501/public/2022-01/Tech-beacon-Hero-banner-desktop.jpg?itok=Yq5cI4sH"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.mindtree.com/sites/default/files/styles/hero_value_banner_v2_1367x501/public/2022-01/Tech-beacon-Hero-banner-desktop.jpg?itok=Yq5cI4sH"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSlider;
