import {React, useRef} from 'react'
import { signin , signinwithgoogle } from '../api/firebase';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    async function googleSignin(){
      try{
          await signinwithgoogle();
      }catch{

      }
    }
    async function handleSignin(){
      try{
        await signin (emailRef.current.value , passwordRef.current.value );
        console.log("login")
      }catch{
        alert('Please Sign up ')
      }
    }
    

  return (
    <div className='signin'>
        <div className='logo'>
         Logo 
        </div>
        <div className='input-box'>
            <input className='username' ref={emailRef} placeholder='Type your username' />
            <input className='password' ref={passwordRef} type={'password'} placeholder='Type your password' /> 
        </div>
        <div className='singup-button'>
            <button className='signup-button' onClick={handleSignin}>Sign in</button>
            <button className='signwith-google' onClick={googleSignin}>Contiune with Google</button>

        </div>
    </div>
  )
}

export default Login