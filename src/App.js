import React from 'react'
import Board from './Components/BulletinBoradForm'
import Login from './Components/LoginForm'
import SignUp from './Components/SignUpForm'
import Frame from './Containers/Frame'
import ReadPost from './Components/ReadPostForm'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      type : 'main',
      component : null
    }
    this.event = (_type, form) => {
      this.setState({
        type : _type,
        component : this.getComponent(form)
      })
    }
  }

  getComponent(form){
    if(form.name === 'Board')
      return <Board postList={form.value} event={this.event}/>
    else if(form.name === 'Login')
      return <Login event={this.event}/>
    else if(form.name === 'SignUp')
      return <SignUp event={this.event}/>
    else if(form.name === 'ReadPost')
      return <ReadPost post={form.value} event={this.event}/>
    else if(form.name === 'WritePost')
      return <ReadPost post={form.value} event={this.event}/>
    else if(form.name === 'ModifyPost')
      return <ReadPost post={form.value} event={this.event}/> 
  }

  componentDidMount() {
    fetch('http://localhost:3001/board')
      .then(res => res.json())
      .then(data => this.event(data.type, data.form))
  }

  render = () => <Frame type={this.state.type} component={this.state.component} event={this.event}/> 
}

export default App;