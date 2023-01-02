import React, { useContext, useRef, useState } from 'react';
import {
    doc,
    serverTimestamp,
    setDoc,
  } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import './../../styles/registerPage.css';
import { Footer, Navbar } from '../../components';
import Loader from '../../components/Loader/Loader';


const Register = () => {

    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");

    const [ifLoader, setIfLoader] = useState(false);

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);

    const handleRegister = async (e) => {
        window.scrollTo(0, 0);
        setIfLoader(true);
        e.preventDefault();
        try {
        const res = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        if(password == password2){
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                displayName,
                phone,
                address,
                country,
                password,
                email,
                timeStamp: serverTimestamp(),
            });
        }else{
            setError("The two password fields must be the same");
        }

        alert("Account created successfully");
        navigate("/");
        } catch (err) {
            console.log(err.message);
            if(err.message == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
                setError("Password should be at least 6 characters");
            }
            else if(err.message == "Firebase: Error (auth/email-already-in-use)."){
                setError("This email is already in use, please use another one");
            }
            else if(err.message == "Firebase: Error (auth/network-request-failed)."){
                setError("Lost database connection, please try reloading the page");
            }
        }
    }
  
    return(
        <>
            {ifLoader ? <Loader /> : ''}
            <Navbar activePage='Sign' />
            <div className='register__main-container'>
                <h1 className='main-container__header'>Registration page</h1>

                <div className='main-container__form-box'>
                    <form className='form-box__form' onSubmit={handleRegister}>
                        <h2 className='form__main-header'>Welcome to our system!</h2>
                        <p className='form__second-header'>User register</p>

                        <input className='form__input' name='username' type='text' placeholder='Your username' onChange={e => setUsername(e.target.value)}/>
                        <input className='form__input' name='name' type='text' placeholder='Your name and surname' onChange={e => setDisplayName(e.target.value)}/>
                        <input className='form__input' name='phone' type='text' placeholder='Your phone number' onChange={e => setPhone(e.target.value)}/>
                        <input className='form__input' name='address' type='text' placeholder='Your address' onChange={e => setAddress(e.target.value)}/>
                        <input className='form__input' name='country' type='text' placeholder='Your country' onChange={e => setCountry(e.target.value)}/>
                        <input className='form__input' name='email' type='email' placeholder='Your email' onChange={e => setEmail(e.target.value)}/>
                        <input className='form__input' name='password' type='password' placeholder='Your password' onChange={e => setPassword(e.target.value)}/>
                        <input className='form__input' name='password2' type='password' placeholder='Repeat your password' onChange={e => setPassword2(e.target.value)}/>

                        <button className='form__submit-input' type='submit'>Register</button>
                        {error && <p className='register__error-message'>{error}</p>}

                        <a href='/sign-up' className='register__register-link'>Login on our platform</a>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default Register;