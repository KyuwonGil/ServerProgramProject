import React from 'react'

function Login({event}){
    return (
        <form>
            <input type="text" placeholder="ID"/>
            <input type="password" placeholder="PW"/>
            <input type="submit" value="login"/>
        </form>
    )
}

export default Login