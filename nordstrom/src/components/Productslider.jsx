import React from 'react';
// import './Productslider.css';
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";

import "react-multi-carousel/lib/styles.css";
import {images,responsive } from '../data/data'



const Productslider = () => {
  return (
    
    <Carousel
      ssr
      partialVisbile
      autoPlay={true}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map(data => {
        return (
          <Image
            draggable={false}
            style={{ width: "95%", height: "100%"}}
            src={data.photo}
          />
        );
      })}
    </Carousel>
  )
}

export default Productslider