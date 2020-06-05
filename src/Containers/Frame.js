import React from 'react'
import MainForm from './MainFrame'
import PostForm from './PostFrame'
import InputForm from './InputFrame'

function Form({type, component}){
  if(type === 'main') return <MainForm component={component}/>
  else if(type === 'post') return <PostForm component={component}/>
  else if(type === 'input') return <InputForm component={component}/>
}

export default Form