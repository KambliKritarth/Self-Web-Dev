import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Album from './Albums'
import AlbumForm from './AlbumForm'


function App() {

  const [favorites, setFavorite] = useState(1)
  const albums = [
    {
      id: 1,
      text: "The Bends"
    },
    {
      id: 2,
      text: "OK Computer"
    }
  ]
  
  const handleFavorite = (id) => {
    setFavorite(id)
  }

  const handleNewAlbum = (text) => {
    console.log("new album",text)
  }
  return (
    <div className="App">
      <h1>Albums</h1>
      {
        albums.map(album => (
          <Album onFavorite={handleFavorite} favorites={ favorites === album.id} key = {album.id} id ={album.id} text={album.text}></Album>
        ))}
      <AlbumForm onNewAlbum = {handleNewAlbum}/>
    </div>
  )
}

export default App
