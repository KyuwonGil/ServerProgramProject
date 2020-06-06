import React from 'react'

function MainForm({ component }) {
    return (
        <div class="container pt-5">
            <h1>Bulletin Board</h1>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                    <input class="btn btn-success my-2 my-sm-0" type="button" value="Search"/>
                </form>
            </nav>
            {component}
        </div>
    )
}

export default MainForm