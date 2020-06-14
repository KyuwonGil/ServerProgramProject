import React from 'react'

function RaadPost({post, comment, event}){
    return(
        <div>
            <span>{post[0]}</span>
            <span>{post[1]}</span>
            <span>{post[2]}</span>
            <span>{post[3]}</span>
            <span>{post[4]}</span>
        </div>
    )
}

function Comment({comment, event}){
    return (
        <div>
            <span>{comment.title}</span>
            <span>{comment.contents}</span>
            <span>{comment.writer}</span>
            <span>{comment.day}</span>
        </div>
    )
}

export default RaadPost