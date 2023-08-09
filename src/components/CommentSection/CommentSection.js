import React, { useContext, useEffect, useState } from 'react';
import { db } from "../../firebase";
import { Button, Container } from '../../globalStyles';
import { AuthContext } from '../../context/AuthContext';
import Loader from "../Loader/Loader";
import "../../styles/commSec.css";

import {addDoc} from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";


import {
  InfoSec, 
  InputWrapper,
  Form,
  FormInput,
  FormWrapper,
  FormLabel,
  ForumInputArea
} from './CommentSection.elements'
import NewComment from '../NewComment/NewComment';


const CommentSection = () => {

    const {currentUser} = useContext(AuthContext);
    const [ifLoadPage, setifLoadPage] = useState(false);
    const [commentData, setCommentData] = useState(Array);
    const [setPersonalData] = useState('');

    const handleAdd = async (e) => {
        setifLoadPage(true);
        e.preventDefault();
        const name = e.target[0].value;
        const comment = e.target[1].value;
        const date = new Date().toLocaleString() + "";
        let image = '';
        let userName = '';
        let userId = '';

        const q = query(collection(db, "users"), where("email", "==", currentUser.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setPersonalData(doc.data());
            image = doc.data().image;
            userName = doc.data().displayName;
            userId = doc.data().uid;
        });
        
        try{            
            await addDoc(collection(db, "comments"), {
                comment: comment,
                commentName: name,
                date: date,
                email: currentUser.email,
                image: image,
                name: userName,
                userId: userId
              });
              window.location.reload(false);
              setifLoadPage(false);
              alert("Comment added successfully");
        } catch (err) {
            console.log("handldeAdd CommSec : " + err);
        }
    }

    const getAllComments = async () =>{
        const q = query(collection(db, "comments"));
        const querySnapshot = await getDocs(q);
        setCommentData(querySnapshot.docs);
    }

    useEffect(() => {
        getAllComments();
    }, []);
    
  return (
    <>
        {ifLoadPage ? <Loader /> : ''}
        <InfoSec lightBg={true}>
            <h1 className='info-sec-header'>Share your post</h1>
            <Container>
                <FormWrapper className='main-form-wrapper' start="true">
                    <FormLabel className='wrapper-header'><h2 className='header-h2'>Add your comment</h2></FormLabel>
                    <Form className="content__form" onSubmit={handleAdd}>
                        <InputWrapper className='input-wrapper'> 
                            <FormInput id="comment_header" type='text' placeholder={"Enter a title for your comment"} />
                            <ForumInputArea id="comment_content" type='text' placeholder={"Share your opinion"} />
                        </InputWrapper>
                        <Button className="submit_btn_comm_sec" type="submit">Send</Button>
                    </Form>
                </FormWrapper>

                {commentData.map((item, index) => {
                    return(
                        <NewComment key={index} name={item.data().name} commentName={item.data().commentName} comment={item.data().comment} date={item.data().date} image={item.data().image}/>
                    )
                })}
            </Container>
        </InfoSec>
    </>
  )
}

export default CommentSection