import { Checkbox } from '@chakra-ui/react';
import React from 'react';
import './Createaccount.css'

const Createaccount = ({email}) => {
  // console.log(email);
  // {email:'fjdlk',first_name:"dkfjld", last_name:"", password:""}
  return (
    <div className='craeteaccount_main'>
        <div>Email : {email}</div>
        <br/>

        <div>
        <p>First name</p>
        <input type="text" />
        </div>

        <br />

        <div>
        <p>Last name</p>
        <input type="text" />
        </div>
        <br />

        <div>
        <p>Create password</p>
        <input type="password" />
        </div>

        <br />
        <div>
        <Checkbox /><p> Keep me signed in</p>
        </div>

        <br/>

        <div>
        <button>Create Account</button>
        </div>

        

    </div>
  )
}

export default Createaccount