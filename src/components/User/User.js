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
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { NewImage, FormInput } from "./User.elements";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Button } from "../../globalStyles";
import './../../styles/userPage.css';
import {Footer, Navbar} from '../../components';
import { AuthContext } from '../../context/AuthContext';

const User = () => {
  const {currentUser, dispatch} = useContext(AuthContext);
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const [personalData, setPersonalData] = useState({});
  const navigate = useNavigate();

  const getUser = async () => {
    const q = query(collection(db, "users"), where("email", "==", currentUser.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setPersonalData(doc.data());
    });
  }

  useEffect(() => {
    getUser();
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
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

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Navbar activePage='User' />
    <div className="user__main-container">
      <h1 className="user__main-header">Dane użytkownika</h1>

      <div className="user__flex-container">
        <div className="user__main-image">
          <NewImage
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
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
              <input className="single-input__item-input" type='text' placeholder={personalData.username} onChange={handleInput} />
            </div>

            <div className="content__div-input">
              <label className="single-input__item-label">Name and surname</label>
              <input className="single-input__item-input" type='text' placeholder={personalData.displayName} onChange={handleInput} />
            </div>

            <div className="content__div-input">
              <label className="single-input__item-label">Phone number</label>
              <input className="single-input__item-input" type='text' placeholder={personalData.phone} onChange={handleInput} />
            </div>

            <div className="content__div-input">
              <label className="single-input__item-label">Address</label>
              <input className="single-input__item-input" type='text' placeholder={personalData.address} onChange={handleInput} />
            </div>

            <div className="content__div-input">
              <label className="single-input__item-label">Country</label>
              <input className="single-input__item-input" type='text' placeholder={personalData.country} onChange={handleInput} />
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
              <input className="single-input__item-input" type='password' placeholder={personalData.password} onChange={handleInput} />
            </div>

            {/* {inputs.map((input) => (
              <div className="content__div-input" key={input.id}>
                <label className="single-input__item-label">{input.label}</label>
                <input className="single-input__item-input"
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleInput}
                />
              </div>
            ))} */}
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