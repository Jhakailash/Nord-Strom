import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  return (
    <>
    <div className='top_black'>
      <p>Get a $40 Bonus Note! An exclusive offer for new 
        Nordstrom credit cardmembers. Restrictions apply. <a style={{color:"white"}}href=''>Apply Now</a> </p>
    </div>

    {/* singnin section start */}

    {/* <div class="navbar">
  
        <div className="dropdown">
                <button class="dropbtn">Sign in
                <i className="fa fa-caret-down"></i>
                </button>
                <FontAwesomeIcon icon={faLock} />

                <div className="dropdown-content">
                
                    <div className="row">
                        <div style={{margin:"10px"}}>
                            <button className="signinbtn" >
                             SIGN IN/CREATE ACCOUNT
                            </button></div>
                        <div className='signinContent'>
                            <h3>Your Account</h3>
                            <p><a>Your Product</a></p>
                            <p><a>Wishlist</a></p>
                            <p><a>Your Product</a></p>
                            <p><a>Wishlist</a></p>
                            <p><a>Your Product</a></p>
                            <p><a>Wishlist</a></p>
                        </div>                    
                    </div>
                </div>
        </div> 
    </div> */}

    {/* signin section end */}

    {/* my menu */}
        {/* <div class="header2">
                <div class="logoDiv">
                    <p class="logo">NORDSTROM</p>
                </div>
                <div class="navList">
                    <ul class="listStyle">
                        <li id="annSale">Anniversary Sale</li>
                        <li id="women">Women</li>
                        <li id="men">Men</li>
                        <li id="kids">Kids</li>
                        <li id="activeWear">Activewear</li>
                        <li id="home">Home</li>
                        <li id="gifts">Gifts</li>
                        <li id="beauty">Beauty</li>
                        <li id="designer">Designer</li>
                        <li id="sale">Sale</li>
                        <li id="brands">Brands</li>
                    </ul>
                </div>
                <div class="navRight">
                    <div class="search">
                        <img src="images/outline_search_black_24dp.png"/>
                        <p>Search</p>
                    </div>
                    <select name="sign in" id="signIn">
                        <option id="signInOption">Sign In</option>
                    </select>
                    
                </div>
            </div> */}
        

    {/* menu ending */}




    {/* <div className='middle_navbar'>
        <c>NORDSTROM</c>
        <input type="text" placeholder='Search for products or brands'/>
        <p>Sign in</p>
        bag
    </div> */}
    </>
  )
}

export default Navbar