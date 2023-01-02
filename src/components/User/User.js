import { useEffect, useState } from "react";
import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { NewImage, FormInput } from "./User.elements";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Button } from "../../globalStyles";
import './../../styles/userPage.css';
import {Footer, Navbar} from '../../components';

const User = ({ inputs}) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
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

  console.log(data);

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

            {inputs.map((input) => (
              <div className="content__div-input" key={input.id}>
                <label className="single-input__item-label">{input.label}</label>
                <input className="single-input__item-input"
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleInput}
                />
              </div>
            ))}
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