import React from 'react'
import Board from './Components/BulletinBoradForm'
import Login from './Components/LoginForm'
import SignUp from './Components/SignUpForm'
import Frame from './Containers/Frame'

var type = 'input'

var testList = [
  {
      no : 1,
      title : 'first',
      writer : 'me',
      day : 'today'
  }
]

var board = <Board pList={testList}/>
var login = <Login/>
var signUp = <SignUp/>

var App = () => <Frame type={type} component={signUp}/>

export default App;