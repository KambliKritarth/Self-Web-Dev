import React from "react"; 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Album from './Albums'
import AlbumForm from './AlbumForm'

function App() {
  const [favorite, setFavorite] = useState(1)
  const [albums, setAlbums] = useState([
    {
      id: 1,
      text: "The Bends",
      likes: 0
    },
    {
      id: 2, 
      text: "Ok Computer",
      likes: 0
    }
  ])
  
  const handleFavorite = (id) => {
    setFavorite(id)
  }

    const handleNewAlbum = (text) => {
    const album = {
      text,
      id: self.crypto.randomUUID(),
      likes: 0
    }
    setAlbums([album, ...albums])
    console.log("New Album:", text)
  }

  const handleDeleteAlbum = (id) => {
    setAlbums(albums.filter(album => album.id !== id))
    console.log("delete album", id)
  }

  const handleLike = (id) => {
    setAlbums(albums.map(album => {
      if (album.id === id) {
        return {...album, likes: album.likes + 1}
      } else {
        return album
      }
    }))
  }

  const handleDislike = (id) => {
    setAlbums(albums.map(album => {
      if (album.id === id) {
        return {...album, likes: album.likes - 1}
      } else {
        return album
      }
    }))
  }

  const handleSort = () => {
    setAlbums([...albums].sort((a, b) => b.likes - a.likes))
  }

  return (
    <div className="App">
      <h1>Albums</h1>

        <button onClick={handleSort}>Sort</button>
        <AlbumForm onNewAlbum = {handleNewAlbum}/>
        {
        albums.map(album => (
          <Album onDelete={handleDeleteAlbum} onFavorite={handleFavorite}
            onLike={handleLike}
            onDislike={handleDislike}
            favorites={favorite === album.id}
            key={album.id}
            {...album}>
            
          </Album>
        ))}
      
    </div>
  )
}

export default App
