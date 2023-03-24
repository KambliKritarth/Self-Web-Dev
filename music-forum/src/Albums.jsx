import { useState} from 'react'

export default function Album({ id, text, favorites, onFavorite, onDelete, likes, onLike, onDislike }) {
  

  const handleLike = () => {
    onLike(id)
  }
  const handleDislike = () => {
    onDislike(id)
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
      <button onClick={handleFavorite}>♥</button>
      <button onClick={() => onDelete(id)}>🗑</button>
    </div>
  )
}