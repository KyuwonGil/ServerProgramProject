import React from 'react'

function Board({pList}){
    return(
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th>NO</th>
                    <th>Title</th>
                    <th>Writer</th>
                    <th>Day</th>
                    <th>Number of hit</th>
                </tr>
            </thead>
            <tbody>
                <PList pList={pList}/>
            </tbody>
        </table>
    )
}

function PList({pList}){
    return (
        pList.map(
            (post, index) => 
            <tr key={index}>
                <td>{post.no}</td>
                <td>{post.title}</td>
                <td>{post.writer}</td>
                <td>{post.day}</td>
                <td>{post.numOfHit}</td>
            </tr>
        )
    )
}

export default Board;