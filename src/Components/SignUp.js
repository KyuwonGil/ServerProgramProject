import React from 'react'

function SignUp() {
    return (
        <form>
            <div align="center" class="form-group">
                <h1>Sign up</h1><br/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="id" name="id" placeholder="ID" /><br/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="pw" name="pw" placeholder="PW" /><br/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="name" name="name" placeholder="name" /><br/>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col">
                        <select class="form-control">
                            <option>year</option>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-control">
                            <option>month</option>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-control">
                            <option>day</option>
                        </select>
                    </div>
                </div><br/>
            </div>
            <div class="form-group">
                <select class="form-control" id="gender" name="gender">
                    <option>남</option>
                    <option>여</option>
                </select><br/>
            </div>
            <div class="form-group"> 
                <input type="text" class="form-control" id="pnum" name="pnum" placeholder="phone number" /><br/>
            </div>
            <div class="input-group mb-3">
            <input type="text" class="form-control" id="email" name="email" placeholder="E-Mail" />
                <div class="input-group-append">
                    <select class="form-control">
                        <option>@naver.com</option>
                        <option>@gmail.com</option>
                        <option>@nate.com</option>
                    </select>
                </div>
            </div><br/>
            <div class="row">
                <div class="col">
                    <input type="submit" class="btn btn-outline-primary" id="submit" value="sign up" />
                </div>
            </div> 
        </form>
    )
}

export default SignUp