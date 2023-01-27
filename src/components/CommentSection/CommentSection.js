import React, { useContext, useRef, useState } from 'react';
import { auth, db, storage } from "../../firebase";
import {  onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStyles'
import './../../styles/userPage.css';
import { AuthContext } from '../../context/AuthContext';
import Loader from "../Loader/Loader";

import {doc, serverTimestamp,setDoc, Timestamp } from "firebase/firestore";
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";

import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";

import {
  InfoSec, 
  InputWrapper,
  Form,
  FormInput,
  FormWrapper,
  FormLabel,
  CommentsWrapper
} from './CommentSection.elements'


const CommentSection = () => {

    const {currentUser, dispatch} = useContext(AuthContext);
    const [commentContent, setComment] = useState("");
    const [ifLoadPage, setifLoadPage] = useState(false);
    const [imageLink, setImageLink] = useState("");
    const [personalData, setPersonalData] = useState({});
    const [commentImage, setCommentImageLink] = useState("");
    const [commentData, setCommentData] = useState({});


    
    const getUser = async (e) => {
    window.scrollTo(0, 0);
    setifLoadPage(true);
    const docRef = doc(db, "users", currentUser.uid);
    console.log("handldeAdd CommSec : " + docRef);
    const querySnapshot = await getDoc(docRef);
    if (querySnapshot.exists()) {
      setPersonalData(doc.data());
      setImageLink(doc.data().image);
    }
    setifLoadPage(false);
    }

    const handleAdd = async (e) => {
        getUser();
        e.preventDefault();
        setifLoadPage(true);

        try{
            
            
            await setDoc(doc(db, "comments"), {
                comment: commentContent,
                //userName: personalData.name,
                //userImage: personalData.image,
                userID: currentUser.uid,
              });
              alert("Comment added successfully");
              setifLoadPage(false);
        } catch (err) {
            console.log("handldeAdd CommSec : " + err);
        }
        
    }

    //где вызвать
    const getComments = async (e) => {
        const docRef = doc(db, "comments");
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {
            setCommentData(doc.data());
            setCommentImageLink(doc.data().image);
          });
    }
    
  return (
    <>
        {ifLoadPage ? <Loader /> : ''}
        <InfoSec lightBg={true}>
            <Container>
                <FormWrapper start={true}>
                    <Form className="content__form" onSubmit={handleAdd}>
                        <FormLabel>Make a post</FormLabel>
                        <InputWrapper > 
                            <FormInput id="comment_content" type='text' placeholder={"Share your opinion"} onChange={e => setComment(e.target.value)} />
                            <Button className="submit_btn_comm_sec" type="submit">Send</Button>
                        </InputWrapper>
                    </Form>
                </FormWrapper>
                <CommentsWrapper> 
                    <section className="vh-100">
                        <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
                            <MDBRow className="justify-content-center">
                            <MDBCol md="11" lg="9" xl="7">
                                <div className="d-flex flex-start mb-4">
                                <img
                                    className="rounded-circle shadow-1-strong me-3"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                                    alt="avatar"
                                    width="65"
                                    height="65"
                                />

                                <MDBCard className="w-100">
                                    <MDBCardBody className="p-4">
                                    <div>
                                        <MDBTypography tag="h5">Johny Cash</MDBTypography>
                                        <p className="small">3 hours ago</p>
                                        <p id="user_comment_content">
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                        metus scelerisque ante sollicitudin. Cras purus odio,
                                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                                        condimentum nunc ac nisi vulputate fringilla. Donec
                                        lacinia congue felis in faucibus ras purus odio,
                                        vestibulum in vulputate at, tempus viverra turpis.
                                        </p>

                                    </div>
                                    </MDBCardBody>
                                </MDBCard>
                                </div>

                            </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        </section>
                    
                </CommentsWrapper>
            </Container>
        </InfoSec>
    </>
  )
}

export default CommentSection