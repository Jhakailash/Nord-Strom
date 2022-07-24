import React from 'react';
import Createaccount from './Createaccount';
import './Signup.css';
import { useNavigate } from "react-router-dom";

const Signup = ({setEmail}) => {
  let navigate = useNavigate();

  const createAccount = ()=>{
    navigate("/create/account/form",{ replace: true });
  }

  return (
    <div className='signup_main'>
        <div><p>Sign In | Create Account</p></div>
        <br />
        <div><p>Enter your email to get started.</p></div>
        <div>
            <input type="email" onChange={e=>setEmail(e.target.value)} placeholder='Type your Email'/>
        </div>
        <br />
        <div className='signup_last' onClick={createAccount}>
          <button >Next</button>
        </div>
        {/* <Createaccount /> */}
        

    </div>
  )
}

export default Signup