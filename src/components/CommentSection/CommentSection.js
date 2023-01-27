import React, { useContext, useRef, useState } from 'react';
import { auth, db, storage } from "../../firebase";
import {  onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { AuthContext } from '../../context/AuthContext';
import Loader from "../Loader/Loader";
import "../../styles/commSec.css";

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
import NewComment from '../NewComment/NewComment';


const CommentSection = () => {

    const {currentUser, dispatch} = useContext(AuthContext);
    const [commentContent, setComment] = useState("");
    const [ifLoadPage, setifLoadPage] = useState(false);
    const [imageLink, setImageLink] = useState("");
    const [personalData, setPersonalData] = useState({});
    const [commentImage, setCommentImageLink] = useState("");
    const [commentData, setCommentData] = useState({});
    const [nameComment, setNameComment] = useState('');
    const [isNewComment, setIsNewComment] = useState(false);


    
    // const getUser = async (e) => {
    // window.scrollTo(0, 0);
    // setifLoadPage(true);
    // const docRef = doc(db, "users", currentUser.uid);
    // const querySnapshot = await getDoc(docRef);
    // if (querySnapshot.exists()) {
    //   setPersonalData(doc.data());
    //   setImageLink(doc.data().image);
    // }
    // setifLoadPage(false);
    // }

    const handleAdd = async (e) => {
        // getUser();
        e.preventDefault();
        setNameComment(e.target[0].value);
        setCommentData(e.target[1].value);
        setIsNewComment(true);
        // setifLoadPage(true);

        try{            
            await setDoc(doc(db, "comments"), {
                comment: commentContent,
                //userName: personalData.name,
                //userImage: personalData.image,
                userID: currentUser.uid,
              });
              alert("Comment added successfully");
            //   setifLoadPage(false);
        } catch (err) {
            console.log("handldeAdd CommSec : " + err);
        }
        
    }

    //где вызвать
    // const getComments = async (e) => {
    //     const docRef = doc(db, "comments");
    //     const docSnap = await getDocs(docRef);
    //     docSnap.forEach((doc) => {
    //         setCommentData(doc.data());
    //         setCommentImageLink(doc.data().image);
    //       });
    // }
    
  return (
    <>
        {ifLoadPage ? <Loader /> : ''}
        <InfoSec lightBg={true}>
            <h1 className='info-sec-header'>Share your post</h1>
            <Container>
                <FormWrapper className='main-form-wrapper' start={true}>
                    <FormLabel className='wrapper-header'><h2 className='header-h2'>Add your comment</h2></FormLabel>
                    <Form className="content__form" onSubmit={handleAdd}>
                        <InputWrapper className='input-wrapper'> 
                            <FormInput id="comment_header" type='text' placeholder={"Enter your user name"} onChange={e => setComment(e.target.value)} />
                            <FormInput id="comment_content" type='text' placeholder={"Share your opinion"} onChange={e => setComment(e.target.value)} />
                        </InputWrapper>
                        <Button className="submit_btn_comm_sec" type="submit">Send</Button>
                    </Form>
                </FormWrapper>

                {isNewComment ? <NewComment nameComment={nameComment} commentData={commentData} /> : ''}

                <CommentsWrapper className='comment__main-container'> 
                    <section className="vh-100">
                        <div className="flex-container">
                            <div className='main-image__main-container'>
                                <img
                                    className="rounded-circle shadow-1-strong me-3"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                                    alt="avatar"
                                    width="65"
                                    height="65"
                                />
                            </div>

                            <MDBCard className="w-100 main-content-container">
                                <div className='container-headers'>
                                    <h1 className='main-header' >Johny Cash</h1>
                                    <p className="small second-header">3 hours ago</p>
                                </div>

                                <div className='container-comment-content'>
                                    <p id="user_comment_content">
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                    metus scelerisque ante sollicitudin. Cras purus odio,
                                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                                    condimentum nunc ac nisi vulputate fringilla. Donec
                                    lacinia congue felis in faucibus ras purus odio,
                                    vestibulum in vulputate at, tempus viverra turpis.
                                    </p>
                                </div>
                            </MDBCard>
                        </div>
                    </section>
                </CommentsWrapper>

                <CommentsWrapper className='comment__main-container'> 
                    <section className="vh-100">
                        <div className="flex-container">
                            <div className='main-image__main-container'>
                                <img
                                    className="rounded-circle shadow-1-strong me-3"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                                    alt="avatar"
                                    width="65"
                                    height="65"
                                />
                            </div>

                            <MDBCard className="w-100 main-content-container">
                                <div className='container-headers'>
                                    <h1 className='main-header' >James Smith</h1>
                                    <p className="small second-header">2 days ago</p>
                                </div>

                                <div className='container-comment-content'>
                                    <p id="user_comment_content">
                                    Kept in sent gave feel will oh it we. Has pleasure procured men 
                                    laughing shutters nay. Old insipidity motionless continuing law 
                                    shy partiality. Depending acuteness dependent eat use dejection. 
                                    Unpleasing astonished discovered not nor shy. Morning hearted now 
                                    met yet beloved evening. Has and upon his last here must. 
                                    </p>
                                </div>
                            </MDBCard>
                        </div>
                    </section>
                </CommentsWrapper>

                <CommentsWrapper className='comment__main-container'> 
                    <section className="vh-100">
                        <div className="flex-container">
                            <div className='main-image__main-container'>
                                <img
                                    className="rounded-circle shadow-1-strong me-3"
                                    src="https://www.pinkvilla.com/imageresize/bts_v_leather_jacket_butter_concept_photo_main_1.jpg?width=752&t=pvorg"
                                    alt="avatar"
                                    width="65"
                                    height="65"
                                />
                            </div>

                            <MDBCard className="w-100 main-content-container">
                                <div className='container-headers'>
                                    <h1 className='main-header' >Kim Taehyung</h1>
                                    <p className="small second-header">14 days ago</p>
                                </div>

                                <div className='container-comment-content'>
                                    <p id="user_comment_content">
                                    Possession her thoroughly remarkably terminated man continuing. 
                                    Removed greater to do ability. You shy shall while but wrote 
                                    marry. Call why sake has sing pure. Gay six set polite nature 
                                    worthy. So matter be me we wisdom should basket moment merely. 
                                    Me burst ample wrong which would mr he could. Visit arise my 
                                    point timed drawn no. Can friendly laughter goodness man him 
                                    appetite carriage. Any widen see gay forth alone fruit bed.&#10084;
                                    </p>
                                </div>
                            </MDBCard>
                        </div>
                    </section>
                </CommentsWrapper>

                <CommentsWrapper className='comment__main-container'> 
                    <section className="vh-100">
                        <div className="flex-container">
                            <div className='main-image__main-container'>
                                <img
                                    className="rounded-circle shadow-1-strong me-3"
                                    src="https://www.allkpop.com/upload/2022/09/content/271824/1664317489-image.png"
                                    alt="avatar"
                                    width="65"
                                    height="65"
                                />
                            </div>

                            <MDBCard className="w-100 main-content-container">
                                <div className='container-headers'>
                                    <h1 className='main-header' >Min Yoongi</h1>
                                    <p className="small second-header">20 days ago</p>
                                </div>

                                <div className='container-comment-content'>
                                    <p id="user_comment_content">
                                    Marianne or husbands if at stronger ye. 
                                    Considered is as middletons uncommonly. 
                                    Promotion perfectly ye consisted so. His 
                                    chatty dining for effect ladies active. 
                                    Equally journey wishing not several behaved 
                                    chapter she two sir. Deficient procuring 
                                    favourite extensive you two. Yet diminution 
                                    she impossible understood age. 
                                    </p>
                                </div>
                            </MDBCard>
                        </div>
                    </section>
                </CommentsWrapper>
            </Container>
        </InfoSec>
    </>
  )
}

export default CommentSection