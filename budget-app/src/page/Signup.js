

import {React, useRef} from 'react';
import { signup,signinwithgoogle } from '../api/firebase';

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
    async function googleSignin(){
        try{
            await signinwithgoogle();
        }catch{

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
            <button className='signup-button' onClick={handleSignup}>Sign Up</button>
            <button className='signwith-google' onClick={googleSignin}>Contiune with Google</button>

        </div>
    </div>
  )
}

export default Signup
