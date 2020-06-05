import React from 'react'
import Board from './Components/BulletinBorad'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Form from './Containers/Form'

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

var App = () => <Form type={type} component={signUp}/>

export default App;