import React, { useEffect, useState, useContext } from "react";
import {
  doc,
  serverTimestamp,
  setDoc,
  getDoc
} from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set } from "firebase/database";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { NewImage, FormInput } from "./User.elements";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Button } from "../../globalStyles";
import './../../styles/userPage.css';
import {Footer, Navbar} from '../../components';
import { AuthContext } from '../../context/AuthContext';
import Loader from "../Loader/Loader";

const User = () => {
  const {currentUser, dispatch} = useContext(AuthContext);
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const [imageLink, setImageLink] = useState("");
  const [personalData, setPersonalData] = useState({});
  const navigate = useNavigate();
  const [ifLoader, setIfLoader] = useState(false);
  const [ifLoadPage, setifLoadPage] = useState(false);

  const getUser = async () => {
    window.scrollTo(0, 0);
    setifLoadPage(true);
    const q = query(collection(db, "users"), where("email", "==", currentUser.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setPersonalData(doc.data());
      setImageLink(doc.data().image);
    });
    setifLoadPage(false);
  }

  useEffect(() => {
    getUser();
    const uploadFile = () => {
      window.scrollTo(0, 0);
      setIfLoader(true);

      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setPerc(progress);

            // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            //   setImageLink(downloadURL);
            //   setImageName(downloadURL);
            //   setData((prev) => ({ ...prev, img: downloadURL }));
            // });
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageLink(downloadURL);
            setImageName(downloadURL);
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const setImageName = async (imageName) => {
    personalData.image = imageName;

    try {
      await setDoc(doc(db, "users", personalData.uid), {
        address: personalData.address,
        country: personalData.country,
        displayName: personalData.displayName,
        email: personalData.email,
        image: personalData.image,
        password: personalData.password,
        phone: personalData.phone,
        timestamp: personalData.timestamp,
        username: personalData.username,
        uid: personalData.uid,
      });
    } catch (err) {
      console.log(err);
    }

    setIfLoader(false);
  }

  const handleAdd = async (e) => {
    e.preventDefault();

    if(data){
      if(data.address){
        personalData.address = data.address;
      }
      if(data.country){
        personalData.country = data.country;
      }
      if(data.displayName){
        personalData.displayName = data.displayName;
      }
      if(data.password){
        personalData.password = data.password;
      }
      if(data.phone){
        personalData.phone = data.phone;
      }
      if(data.username){
        personalData.username = data.username;
      }
      if(data.img){
        personalData.image = data.img;
      }
    }

    try {
      await setDoc(doc(db, "users", personalData.uid), {
        address: personalData.address,
        country: personalData.country,
        displayName: personalData.displayName,
        email: personalData.email,
        image: personalData.image,
        password: personalData.password,
        phone: personalData.phone,
        timestamp: personalData.timestamp,
        username: personalData.username,
        uid: personalData.uid,
      });
      alert("Data updated successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    {ifLoader ? <Loader /> : ''}
    {ifLoadPage ? <Loader /> : ''}
    <Navbar activePage='User' />
    <div className="user__main-container">
      <h1 className="user__main-header">Dane użytkownika</h1>

      <div className="user__flex-container">
        <div className="user__main-image">
          <div className="main-image__border">
            <NewImage
              src={
                imageLink
                  ? imageLink
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="Main user's image"
            />
          </div>
        </div>

        <div className="main-container__content">
          <form className="content__form" onSubmit={handleAdd}>
            <div className="content__upload-image">
              <label htmlFor="file">
                <p className="upload-image__paragraph">Upload your photo </p>
                <DriveFolderUploadOutlinedIcon className="upload-image__icon" />
              </label>
              <FormInput
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

            <hr className="content__hr-line"/>

            <div className="content__div-input">
              <label className="single-input__item-label">User name</label>
              <input className="single-input__item-input" id="username" type='text' placeholder={personalData.username} onChange={handleInput} />
            </div>

            <div className="content__div-input">
              <label className="single-input__item-label">Name and surname</label>
              <input className="single-input__item-input" id="displayName" type='text' placeholder={personalData.displayName} onChange={handleInput} />
            </div>

            <div className="content__div-input">
              <label className="single-input__item-label">Phone number</label>
              <input className="single-input__item-input" id="phone" type='text' placeholder={personalData.phone} onChange={handleInput} />
            </div>

            <div className="content__div-input">
              <label className="single-input__item-label">Address</label>
              <input className="single-input__item-input" id="address" type='text' placeholder={personalData.address} onChange={handleInput} />
            </div>

            <div className="content__div-input">
              <label className="single-input__item-label">Country</label>
              <input className="single-input__item-input" id="country" type='text' placeholder={personalData.country} onChange={handleInput} />
            </div>

            <div className="content__div-input">
              <label className="single-input__item-label disabled">Email *</label>
              <input className="single-input__item-input disabled" disabled type='email' placeholder={personalData.email + " *"} onChange={handleInput} />
            </div>
            <div className="content__div-input">
              <p className="single-input__disabled-message">* This field cannot be changed</p>
            </div>

            <div className="content__div-input">
              <label className="single-input__item-label">Password</label>
              <input className="single-input__item-input" id="password" type='password' placeholder={personalData.password} onChange={handleInput} />
            </div>

            <Button className="content__submit-input" disabled={per !== null && per < 100} type="submit">Send</Button>
          </form>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default User;