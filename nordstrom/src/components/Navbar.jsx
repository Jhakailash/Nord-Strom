import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCartShopping, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import 
{ Box,
   Button, Center,
   Heading, 
   PinInput, 
   PinInputField, 
   Text,useDisclosure,
   Input,
   Menu,
   Stack,
   Select,
   MenuList,
   MenuItem,
   MenuButton } 
from '@chakra-ui/react';
import {ChevronDownIcon} from "@chakra-ui/icons";
import { Grid, GridItem } from '@chakra-ui/react';
import Signin from './Signin';
import { Link } from "react-router-dom";


const Navbar = ({size}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isOpenModal, onOpen:onOpenModal, onClose:onCloseModal } = useDisclosure();
  return (
    <>
    <div className='top_bar'>
      <p>Get a $40 Bonus Note! An exclusive offer for new 
        Nordstrom credit cardmembers. Restrictions apply</p>
    </div>

    <div className='middle_bar'>
      <div className='middle_bar1'>
        <p className='logo'><Link to="/">NORDSTROM</Link></p>
      </div>
      <div className='middle_bar2'>
      <Input placeholder='Search for products or brands' size='lg' />
      </div>
      <div className='middle_bar3'>
      <Menu style={{textAlign:'right'}} isOpen={isOpen}>
          <MenuButton as={Button} onMouseEnter={onOpen}
                onMouseLeave={onClose} rightIcon={<ChevronDownIcon />}>
          Sign In
            </MenuButton>
            <MenuList width="100%" onMouseEnter={onOpen} onMouseLeave={onClose}>
            <Center bg='tomato' color='white' style={{width:'80%', margin:'auto'}}>
              <Button bg="tomato"><Link to="/create/account">Sign In|Create Account</Link></Button>
            </Center>
            <b>Your Account</b>
            <MenuItem>Purchases</MenuItem>
            <MenuItem>Wish List</MenuItem>
            <MenuItem>The Nordy Club Rewards</MenuItem>
            <MenuItem>Shipping Addresses</MenuItem>
            <MenuItem>Payment Methods</MenuItem>
            <MenuItem>Looks</MenuItem>
            <MenuItem>Pay & Manage Nordstrom Card</MenuItem>
            <MenuItem>Pay & Manage Nordstrom Card</MenuItem>
            <b>Account Setting</b>
            <MenuItem>Passeord & Personal Info</MenuItem>
            <MenuItem>Email & Mail Prefrences</MenuItem>
            <MenuItem>Store & Events</MenuItem>
            <br />
            <b>we're here to help, 24/7</b>
            </MenuList>
        </Menu>
      </div>
      <div className='middle_bar4'><Link to="cart"><FontAwesomeIcon icon={faCartShopping} /><span className='cart_count'>{size}</span></Link></div>
    </div>


    <br />
    <hr className='hr'/>
    <div className='bottom_bar'>
      <Grid templateColumns='repeat(12, 1fr)' gap={12}>
        <GridItem w='170%' h='10' ><Link to="product/list">Anniversary Sale</Link></GridItem>
        <GridItem w='95%' h='10' ><Link to="product/list">Women</Link></GridItem>
        <GridItem w='60%' h='10' ><Link to="product/list">Men</Link></GridItem>
        <GridItem w='50%' h='10' ><Link to="product/list">Kids</Link></GridItem>
        <GridItem w='160%' h='10' ><Link to="product/list">Young Adult</Link></GridItem>
        <GridItem w='100%' h='10' ><Link to="product/list">Activewear</Link></GridItem>
        <GridItem w='75%' h='10' ><Link to="product/list">Home</Link></GridItem>
        <GridItem w='80%' h='10' ><Link to="product/list">Beauty</Link></GridItem>
        <GridItem w='100%' h='10' ><Link to="product/list">Designer</Link></GridItem>
        <GridItem w='60%' h='10' ><Link to="product/list">Gifts</Link></GridItem>
        <GridItem w='50%' h='10' ><Link to="product/list">Sale</Link></GridItem>
        <GridItem w='80%' h='10' ><Link to="product/list">Brands</Link></GridItem> 
      </Grid>
    </div>
    
    <br/>
    <div className='bottom_bar1'>
      <p>Shop what you love—faster and easier.</p>
    </div>

    <br/>
    <div className='bottom_bar2'>
    <Button colorScheme='teal' variant='outline'  onClick={() =>  onOpenModal() }>
     Sign In or create an Account
   </Button>
   <Signin isOpen={isOpenModal} onClose={onCloseModal} />
    </div>
    <br/>
    <br/>
    <br/>
    
    
    </>
  )
}

export default Navbar