import React from 'react'

function SignUp({event}) {
    return (
        <form action="/sign/up" method="post">
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
                        <select class="form-control" name="year">
                            <option selected>year</option>
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-control" name="month">
                            <option selected>month</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-control" name="day">
                            <option selected>day</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
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