import React from 'react';
import {MDBCard} from "mdb-react-ui-kit";
import {CommentsWrapper} from '../CommentSection/CommentSection.elements'

const NewComment = (props) => {
    return(
        <CommentsWrapper className='comment__main-container'> 
        <section className="vh-100">
            <div className="flex-container">
                <div className='main-image__main-container'>
                    <img
                        className="rounded-circle shadow-1-strong me-3"
                        src={props.image}
                        alt="avatar"
                        width="65"
                        height="65"
                    />
                </div>

                <MDBCard className="w-100 main-content-container">
                    <div className='container-headers'>
                    <h1 className='main-header' >{props.commentName}</h1>
                       <p className="small second-header">{props.date}</p>
                    </div>

                    <div className='container-comment-content'>
                        <p id="user_comment_content">{props.comment}</p>
                    </div>

                    <div className='container-comment__user-data'>
                        <p className='user__personal-name'>{props.name}</p>
                    </div>
                </MDBCard>
            </div>
        </section>
    </CommentsWrapper>
    )
}

export default NewComment;