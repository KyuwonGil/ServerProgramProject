import React from 'react'

function Post({post, comment}){
    return(
        <div>
            <span>{post.title}</span>
            <span>{post.contents}</span>
            <span>{post.writer}</span>
            <span>{post.day}</span>
            <Comment comment={comment}/>
        </div>
    )
}

function Comment({comment}){
    return (
        <div>
            <span>{comment.title}</span>
            <span>{comment.contents}</span>
            <span>{comment.writer}</span>
            <span>{comment.day}</span>
        </div>
    )
}

export default Post