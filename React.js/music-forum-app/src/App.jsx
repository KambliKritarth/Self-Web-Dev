import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Review from './Review'
import Form from './Form'

function App() {
 const reviews = [{
    album: "Kid A",
    review: "dark, great listen, enchanting",
    rating: 5,
    author:"fantano"
  },{
    album: "Amnesiac",
    review: "vivid, solid listen, haunting",
    rating: 3.5,
    author:"pitchfork"
   },{
    album: "OK Computer",
    review: "depressing, great listen, pristine",
    rating: 4.5, 
    author:"rolling stone"
   },{
    album: "The Bends",
    review: "sad, solid listen, mesmerizing",
    rating: 4,
    author:"pitchfork"
   },{
    album: "The Bends",
    review: "L, other albums better, grunge",
    rating: 3,
    author:"fantano"
   }]

   function handleSubmit(e) {
     console.log("Like submitted");
   }
  return (
    <div className="App">
      <h2>All reviews</h2>
      {reviews.map((review, index) => { return <Review album={review.album} rating={review.rating} author={review.author} review={review.review} /> })}
      <h2>Loved reviews</h2>
      {reviews.filter(review => review.rating >= 4).map((review, index) => { return <Review album={review.album} rating={review.rating} author={review.author} review={review.review} /> })}
      <h2>Submit your own review</h2>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default App
