import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Homeimgslider = ({homeImageSliderPhoto}) => {


  
  return (
    <div>
        <Carousel autoPlay="true" infiniteLoop={true}  showArrows={false} showThumbs={false}>
            {
                homeImageSliderPhoto.map((d)=>(
                    <div  key={d.id}>
                        <img  src={d.img} />                    
                    </div>
                    )   
                    
                )
            }
                
                
                
            </Carousel>
    </div>
  )
}

export default Homeimgslider