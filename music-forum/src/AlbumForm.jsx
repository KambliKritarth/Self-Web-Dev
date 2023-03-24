import { useState } from "react"

export default function AlbumForm({ onNewAlbum }) {
  const [text, setText] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (text.length < 5) {
      setError("albums must be at least 5 characters long")
      return 
    }
    setError("")
    onNewAlbum(text)
    setText("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">New Album</label>
      <input type="text"
        placeholder="Enter an album"
        value={text}
        onChange={e => setText(e.target.value)} />
      {error&&<p>{ error}</p>}
      <button type ="submit">Submit</button>
    </form>
  )
}        