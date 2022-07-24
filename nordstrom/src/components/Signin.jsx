import React from 'react';
import './Signin.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,Text,Button,
  ModalCloseButton,
  Input,
  Checkbox,
  InputGroup,
  InputRightElement
  
} from '@chakra-ui/react'
import Signup from './Signup';
import { useNavigate } from "react-router-dom";


const Signin = ({isOpen,onClose,isCentered}) => {
  let navigate = useNavigate();
    const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
    const [overlay, setOverlay] = React.useState(<OverlayTwo />)
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show);

    const createAccount = ()=>{
      navigate("/create/account")
      onClose();
    }

  return (
    <div>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent >
          <ModalHeader style={{color:"green"}}>Sign In</ModalHeader>
          <ModalHeader>New to Nordstrom? <u className='signin_new' onClick={createAccount}>Create an account.</u></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
            Email
            <Input type="email" placeholder='Type Your Email' />
            </div>

            <br />
            
            <div>
            
             Password
            <InputGroup size='md'>
                <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                />
               
                <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
                </Button>
                </InputRightElement>
            </InputGroup>
            </div>

            <div><a>Forgot password?</a></div>

            <br />

            <div><Checkbox style={{marginTop:"5px"}} /> Keep me signedin Details
            </div>

            <br />
            <div>By signing in to your account, you agree to our Privacy Policy and Terms & Conditions.</div>

            <br/>

            <div className='signin_b'><Button>Sign in</Button></div>

            
            
            
          </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Signup /> */}

    </div>
  )
}

export default Signin