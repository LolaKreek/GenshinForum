import React, { useContext, useRef, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { Button } from '../../globalStyles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import './../../styles/loginPage.css';
import { Footer, Navbar } from '../../components';
import Loader from '../../components/Loader/Loader';


const SignUp = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const [ifLoader, setIfLoader] = useState(false);

  const handleLogin = (e) => {
    window.scrollTo(0, 0);
    setIfLoader(true);
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload: user});
        alert("Signed in successfully");
        navigate("/");
      })
      .catch((error) => {
        setIfLoader(false);
        
        if(error.message == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
          setError("Password should be at least 6 characters");
        }
        else if(error.message == "Firebase: Error (auth/email-already-in-use)."){
          setError("This email is already in use, please use another one");
        }
        else if(error.message == "Firebase: Error (auth/network-request-failed)."){
          setError("Lost database connection, please try reloading the page");
        }
        else if(error.message == "Firebase: Error (auth/internal-error)."){
          setError("Please fill in all the fields provided");
        }
        else if(error.message == "Firebase: Error (auth/user-not-found)."){
          setError("User not found, please check the correctness of the entered data");
        }else{
          setError(error.message);
        }
      });
  }
  return (
    <>
      {ifLoader ? <Loader /> : ''}
      <Navbar activePage='Sign' />
      <div className='login__main-container'>
        <h1 className='main-container__header'>Login page</h1>

        <div className='main-container__form-box'>

          <form className='form-box__form' onSubmit={handleLogin}>
            <h2 className='form__main-header'>Welcome back!</h2>
            <p className='form__second-header'>User login</p>
            <input className='form__input' name='email' type='email' placeholder='Your Email' onChange={e => setEmail(e.target.value)}/>
            <input className='form__input' name='password' type='password' placeholder='Your Password' onChange={e => setPassword(e.target.value)}/>
            <button className='form__submit-input' type='submit'>Login</button>
            {error && <p className='login__error-message'>{error}</p>}
            <a href='/register' className='login__register-link'>Register on our platform</a>
          </form>
      </div>
      </div>

      <Footer />
    </>
  )
}


export default SignUp