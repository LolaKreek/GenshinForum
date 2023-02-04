import React from 'react';
import {MDBCard} from "mdb-react-ui-kit";
import {CommentsWrapper} from '../CommentSection/CommentSection.elements'

const NewComment = (props) => {

    console.log("props: ", props);

    return(
        <CommentsWrapper className='comment__main-container'> 
        <section className="vh-100">
            <div className="flex-container">
                <div className='main-image__main-container'>
                    <img
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://us.123rf.com/450wm/osherro/osherro2010/osherro201000011/osherro201000011.jpg?ver=6"
                        alt="avatar"
                        width="65"
                        height="65"
                    />
                </div>

                <MDBCard className="w-100 main-content-container">
                    <div className='container-headers'>
                        <h1 className='main-header' >{props.nameComment}</h1>
                        <p className="small second-header">Now</p>
                    </div>

                    <div className='container-comment-content'>
                        <p id="user_comment_content">{props.commentData}</p>
                    </div>
                </MDBCard>
            </div>
        </section>
    </CommentsWrapper>
    )
}

export default NewComment;