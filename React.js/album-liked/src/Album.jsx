import { useState } from 'react'

export default function Album({id, text,favorite, onFavorite}) {

  const [likes, setLike] = useState(0)
  const [dislikes, setDislike] = useState(0)

  const handleLike = () => {
    const newLikes = likes + 1
    setLike(newLikes)
    console.log(`like id: ${id}, totalLikes ${newLikes}`)
  }
  const handleDislike = () => {
    setDislike(dislikes + 1)
    console.log(`dislike id: ${id}, totalLikes ${likes}`)
  }
  const handleFavorite = () => {
    onFavorite(id)
  }


  return (
    <div>
      <p>{text}</p>
      <p>Likes: {likes - dislikes}</p>
      <p>Favorite: {favorite?"YES":"NO"}</p>
      <button onClick={handleLike}>👍🏽</button>
      <button onClick={handleDislike}>👎🏽</button>
      <button onClick = {handleFavorite}>♥</button>
    </div>
  )

}