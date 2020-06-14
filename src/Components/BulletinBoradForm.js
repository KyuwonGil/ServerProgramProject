import React from 'react'
import MainFrame from '../Containers/MainFrame';

function Board({ postList, event }) {
    return (
        <MainFrame event={event}>
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
                    <PostList postList={postList} event={event} />
                </tbody>
            </table>
        </MainFrame>
    )
}

function PostList({ postList, event }) {
    return (
        postList.map((posts, index) =>
            <tr key={index} onClick={() => {
                fetch(`http://localhost:3001/api/post/read?no=${index + 1}`)
                    .then(res => res.json())
                    .then(data => event(data.type, data.form))
            }}>
                {posts.map((post, index) => <td key={index}>{post}</td>)}
            </tr>
        )
    )
}

export default Board;