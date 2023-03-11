import reactLogo from './assets/react.svg'
import './App.css'
import Album from './Album'
import {useState} from 'react'

function App() {
  const [favorite, setFavorite] = useState(1)

  const albums = [
    {
      id: 1,
      text: "The Bends"
    },
    {
      id: 2,
      text:"OK Computer"
    }
  ]

  const handleFavorite = (id) => {
    setFavorite(id)
  }

  return (
    <div className="App">
      <h1>Radiohead Albums</h1>
      {albums.map(album => (
        <Album onFavorite={handleFavorite} favorite={favorite===album.id} key={album.id} id={album.id} text={album.text} />
      ))
      }
    </div>
  )
}

export default App
