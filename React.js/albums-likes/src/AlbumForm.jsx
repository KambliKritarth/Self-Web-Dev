import { useState } from "react"

export default function AlbumForm({ onNewAlbum }) {
  
  const [text, setText] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    onNewAlbum(text)
    setText("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder = "Enter an album" value = {text} onChange={e=>setText(e.target.value)} />
      <button type ="submit">Submit</button>
    </form>
  )
}