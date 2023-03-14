import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Album from './Albums'
import AlbumForm from './AlbumForm'


function App() {

  const [favorites, setFavorite] = useState(1)
  const [albums, setAlbums] = useState([
    {
      id: 1,
      text: "The Bends",
      likes:0
    },
    {
      id: 2,
      text: "OK Computer",
      likes:0
    }
  ])
  
  const handleFavorite = (id) => {
    setFavorite(id)
  }

  const handleNewAlbum = (text) => {
    const album = {
      text,
      id: self.crypto.randomUUID(),
      likes:0
    }
    setAlbums([...albums,album])
    console.log("new album: ",text)
  }
  const handleDeleteAlbum = (id) => {
    setAlbums(albums.filter(album => id!==album.id))
    console.log("new album: ",text)
  }
  const handleLike = (id) => {
    setAlbums(albums.map(album => {
      if (album.id === id) {
        return {...album,likes:album.likes+1}
      } else {
        return album
      }
    }))
    console.log("handleLike",text)
  }
  const handleDislike = (id) => {
    setAlbums(albums.map(album => {
      if (album.id === id) {
        return {...album,likes:album.likes-1}
      } else {
        return album
      }
    }))
    console.log("handleDislike",text)
  }

  const handleSort = () => {
    setAlbums([...albums].sort((a,b) => b.likes -a.likes))
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
            favorites={favorites === album.id}
            key={album.id}
            {...album}>
            
            </Album>
        ))}
      
    </div>
  )
}

export default App
