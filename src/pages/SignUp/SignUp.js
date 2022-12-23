

import React, { useContext, useRef, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import {
  SignUpSec,
  SignUpContainer,
  Form, 
  FormInput,
  Valid
} from './SignUp.elements'
import { Button } from '../../globalStyles'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext"


const SignUp = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload: user})
        navigate("/")
      })
      .catch((error) => {
        setError(true);
      });
  }
  return (
    <SignUpSec>
      <SignUpContainer>
        <Form onSubmit={handleLogin}>
          <FormInput name='email' type='email' placeholder='Your Email' onChange={e => setEmail(e.target.value)}/>
          <FormInput name='password' type='password' placeholder='Your Password' onChange={e => setPassword(e.target.value)}/>
          <Button fontBig type='submit'>Login</Button>
          {error && <Valid>Wrong email or password</Valid>}
        </Form>
        
     </SignUpContainer>
     
    </SignUpSec>
  )
}


export default SignUp