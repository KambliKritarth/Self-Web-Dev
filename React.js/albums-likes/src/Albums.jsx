import { useState} from 'React'

export default function Album({ id, text,favorites,onFavorite }) {

  const [likes, setLike] = useState(0)
  

  const handleLike = () => {
    setLike(likes + 1)
    setLike(likes + 1)
    setLike(likes + 1)
    setLike(likes + 1)
    console.log(`like id: ${id},totallikes ${likes}`)
  }
  const handleDislike = () => {
    setLike((l) => (l - 1))
    setLike((l) => (l - 1))
    setLike((l) => (l - 1))
    setLike((l) => (l - 1))
    console.log(`dislike id: ${id},totallikes ${likes}`)
  }
  const handleFavorite = () => {
    onFavorite(id)
  }
  return (
    <div>
      <p>{text}</p>
      <p>Likes: {likes}</p>
      <p>Favorites: {favorites?"YES":"NO"}</p>
      <button onClick={handleLike}>👍🏽</button>
      <button onClick={handleDislike}>👎🏽</button>
      <button onClick = {handleFavorite}>♥</button>
    </div>
  )
}