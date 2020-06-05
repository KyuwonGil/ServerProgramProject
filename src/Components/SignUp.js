import React from 'react'

function SignUp(){
    return(
        <form>
            <input type="text" placeholder="ID"/>
            <input type="password" placeholder="PW"/>
            <input type="text" placeholder="name"/>
            <select>
                <option>year</option>
            </select>
            <select>
                <option>month</option>
            </select>
            <select>
                <option>day</option>
            </select>
            <input type="radio" value="0" checked="true" name="gender"/>male
            <input type="radio" value="1" name="gender"/>female
            <input type="text" placeholder="phone number"/>
            <input type="text" placeholder="E-Mail"/>
            <input type="submit" value="sign up"/>
        </form>
    )
}

export default SignUp