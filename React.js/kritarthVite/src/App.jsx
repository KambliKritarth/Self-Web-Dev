import { useState } from 'react'
import './App.css'
import RandomImage from './RandomImage'
import Review from './Review'

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
      <p>Radiohead Reviews</p>
      <p>I am learning this session at { now}</p>
      <p>{"There can be only one root component in App()"}</p>
      </div>
      <RandomImage />
      <Review album={"The Bends"} review={"sad, solid listen, mesmerizing"} rating = {4} />
      <Review album={"OK Computer"} review={"depressing, great listen, interesting"} rating = {4.5}/> 
    </>
  )
}

export default App
