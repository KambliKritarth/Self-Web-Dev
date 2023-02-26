import { useState } from 'react'
import './App.css'
import RandomImage from './RandomImage'


function sayHello() {
 console.log("Hello") 
}
const title = "Hey there buddy I am learning React using Vite"
function App() {
 
  const now = new Date().toString()

  sayHello()
  return (
    <>
    <div className="App">
      <h3>{ title}</h3>
      <p>barebones</p>
      <p>I am learning this session at { now}</p>
      <p>{"There can be only one root compinent in App()"}</p>
      </div>
      <RandomImage/>
    </>
  )
}

export default App
