import React from 'react'
import { Link , useHistory } from 'react-router-dom'
import { useState } from 'react';
import './Login.css'
import { auth } from './firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) =>{
        // no refreshing
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => history.push('/')).catch(error => alert(error.message))
       
    }

    const register = (e) =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
          if(auth){
            history.push('/');
          }
        }).catch(error => alert(error.message))
    }
  return (
    <div className='login'>
    <Link to='/'>
      <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1023px-Amazon_logo.svg.png' alt="amazon_logo"/>
      </Link>
      <div className='login_container'>
    <h1>Sign-in</h1>
    <form>
    <h5>E-mail</h5>
    <input  type='text' value={email} onChange={e => setEmail(e.target.value)}/>
    <h5>Password</h5>
    <input  type='password' value={password} onChange={e => setPassword(e.target.value)}/>
    <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>

    <p>By signing -in you agree to the Amazon Fake Clone conditions of the Use and sale.</p>
    <button className='login_registerButton' onClick={register}>Create your Amazon account</button>
    </form>
      </div>
    </div>
   
  )
}

export default Login
