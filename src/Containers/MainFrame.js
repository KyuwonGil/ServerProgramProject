import React from 'react'

function MainForm({ component }) {
    return (
        <div class="container pt-5">
            <h1>Bulletin Board</h1>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <input class="btn btn-dark my-2 my-sm-0" type="button" value="posting" />
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input type="submit" class="btn btn-dark my-2 my-sm-0" value="login" />
                        <input type="submit" class="btn btn-dark my-2 my-sm-0" value="sign up" />
                    </form>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            {component}
        </div>
    )
}

export default MainForm