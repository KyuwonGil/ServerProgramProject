import React from 'react'

function Board({pList}){
    return(
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>날짜</th>
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
            </tr>
        )
    )
}

export default Board;