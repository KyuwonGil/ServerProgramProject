import React from 'react'
import MainForm from './MainForm'
import PostForm from './PostForm'
import InputForm from './InputForm'

function Form({type, component}){
  if(type === 'main') return <MainForm component={component}/>
  else if(type === 'post') return <PostForm component={component}/>
  else if(type === 'input') return <InputForm component={component}/>
}

export default Form