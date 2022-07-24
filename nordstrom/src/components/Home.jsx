import React from 'react';
import { Image, Box } from '@chakra-ui/react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Homeimgslider from './Homeimgslider';
import Productslider from './Productslider';
import {homeImageSliderPhoto,homeImageSliderPhoto2,homeImageSliderPhoto3,homeImageSliderPhoto4} from '../data/data'

const home = () => {
  

  return (
    <div className='home_main'>
        <Box className='home_1' >
        <Homeimgslider homeImageSliderPhoto={homeImageSliderPhoto}/>
        </Box>
        <br />
        <div className='home_2'>
          <div className='home_child_1'>
            <div className='home_child_2'>
              <div><h1>SELECTED CLEARANCE</h1></div>
              <div><h1>EXTRA 25% OFF</h1></div>
            
            

            </div>
            <div className='home_child_3'>
              <p>Online and in stores through July 24—hurry, the best deals go fast. Exclusions apply.</p>
              <div><u>sale</u></div>
              <div><u>Exclusions & Restrictions</u></div>
            </div>
          </div>
        </div>

        <Box className='home_1' >
        <Homeimgslider homeImageSliderPhoto={homeImageSliderPhoto2}/>
        </Box>
        <br />
        <br />
        <hr className='home_7' />
        <br />
        {/* Product slider page start */}
        <div style={{width:'95%', margin:'auto'}}><Productslider /></div>
        {/* Product slider page end */}
        <br />
        <hr className='home_7' /> 
        
        <br />
        <br />
        <div className='home_dblimg'>
          <div><Box className='home_3' >
               <Homeimgslider homeImageSliderPhoto={homeImageSliderPhoto3}/>
               </Box>
         </div>
          <div className='home_4'>
               <img src='	https://n.nordstrommedia.com/id/7b92827d-490b-4494-9804-15ecc3dc735b.jpeg?h=522&w=804'/>
          </div>
       </div>

       <div className='home_5'>
            <div>
              <p>You're invited to our beauty events, classes, livestreams and more.</p>
              <u>RSVP Now</u>
            </div>

            <div>
            <p>Shop the sale with a stylist to find the best deals, handpicked just for you.</p>
            <u>Learn More</u>
            </div>
          </div>

          <div className='home_6'>         
            <img src='https://n.nordstrommedia.com/id/44648fdb-be56-4600-addb-6d3c7ba21f2c.jpeg?h=200&w=1608' />
          </div>

          <hr className='home_7' />
          <br />
          <br />
          
          <div className='home_8'><b>NEW & NOTEWORTHY</b></div>
          <br />
          
          <Box className='home_1' >
            <Homeimgslider homeImageSliderPhoto={homeImageSliderPhoto4}/>
          </Box>
          <br />
          <br />
          <br />
          

        
        
    </div>
  )
}

export default home