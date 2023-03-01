export default function Review({album, rating = 0,review}) {
  let stars = ""
  for (let i = 1; i <= rating; i++){
    stars += "⭐"
  }
  if (!Number.isInteger(rating)) {
    stars+="✨"
  }
  return (
    <div>
      <h3>{album}</h3>
      <p>{review}</p>
      <p>{stars}</p>
    </div>
  )
}