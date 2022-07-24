import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
    <div className='footer_main'>
        <div>
            <h1>Customer Service</h1>
            <br />
            <p>Contact Us</p>
            <br />
            <p>Order Status</p>
            <br />
            <p>Shipping</p>
            <br />
            <p>Return Policy & Exchange</p>
            <br />
            <p>Price Adjustments</p>
            <br />
            <p>Gift Card</p>
            <br />
            <p>FAQ</p>
            <br />
            <p>Product Rracalls</p>

        </div>
        <div>
        <h1>About Us</h1>
        <br />
            <p>Careers</p>
            <br />
            <p>Corporate Social Responsiblity</p>
            <br />
            <p>Diversity,Inclusion & Belonging</p>
            <br />
            <p>Return Policy & Exchange</p>
            <br />
            <p> Get Email Updates</p>
            <br />
            <p>Nordstrom Blog</p>
            <br />
            <p>The Thread</p>
            <br />
            <p>Nordy Prodcast</p>

        </div>
        <div>
        <h1>Stores & Services</h1>
        <br />
            <p>Find a Store</p>
            <br />
            <p>Free Style Help</p>
            <br />
            <p>Alteration & Tailoring</p>
            <br />
            <p>Pop--In Shop</p>
            <br />
            <p>Vartual Events</p>
            <br />
            <p>Spa Nordstrom</p>
            <br />
            <p>Nordstrom Restaurants</p>
            <br />
            <p>Nordstrom Local</p>

        </div>
        <div>
        <h1>Nordstrom card & rewards</h1>
        <br />
            <p>The Nordy Club Rewards</p>
            <br />
            <p>Pay My Bill</p>
            <br />
            <p>Shipping</p>
            <br />
            <p>Manage My Nordstrom Card</p>
            

        </div>
        <div>
        <h1>Nordstrom Inc.</h1>
        <br />
            <p>Nordstrom Rack</p>
            <br />
            <p>Nordstrom Canada</p>
            <br />
            <p>Investor Relations</p>
            <br />
            <p>Press Releases</p>
            <br />
            <p>Nordstrom Media Network</p>
            

        </div>
        <div >
        <FontAwesomeIcon icon={faMobileScreen}/>
        get our apps
        <br />
        <div className='icon'>
        <div><FontAwesomeIcon icon={faInstagram} /></div>
        <div><FontAwesomeIcon icon={faTwitter} /></div>
        <div><FontAwesomeIcon icon={faFacebook} /></div>
        </div>
        </div>
    </div>

    <div className='footer_last'>
        <p>Privacy</p>
        <p>Do Not Sell My Personal Information</p>
        <p>Terms & Conditions</p>
        <p>Interest-Based Ads</p>
        <p>©2022 Nordstrom, Inc.</p>

    </div>
   
    </>
  )
}

export default Footer