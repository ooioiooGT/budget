
import {React, useRef} from 'react';
import { signup } from '../api/firebase';

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup(){
        try{
        await signup(emailRef.current.value , passwordRef.current.value );
        }catch{
            alert('The account aleardy signup')
        }
    }

  return (
    <div className='signup'>
        <div className='logo'>
         Logo 
        </div>
        <div className='input-box'>
            <input className='username' ref={emailRef} placeholder='Type your username' />
            <input className='password' ref={passwordRef} type={'password'} placeholder='Type your password' /> 
        </div>
        <div className='singup-button'>
            <button className='singup-button' onClick={handleSignup}>Sign Up</button>
        </div>
    </div>
  )
}

export default Signup
