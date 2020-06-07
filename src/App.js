import React from 'react'
import Board from './Components/BulletinBoradForm'
import Login from './Components/LoginForm'
import SignUp from './Components/SignUpForm'
import Frame from './Containers/Frame'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      type : 'main',
      component : null
    }
  }

  getComponent(form){
    if(form.name === 'Board')
      return <Board pList={form.values}/>
    else if(form.name === 'Login')
      return <Login/>
    else if(form.name === 'SignUp')
      return <SignUp/>
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/board')
      .then(res => res.json())
      .then(data => this.setState({type : data.type, component : this.getComponent(data.form)}))
  }

  render = () => <Frame type={this.state.type} component={this.state.component} /> 
}

export default App;