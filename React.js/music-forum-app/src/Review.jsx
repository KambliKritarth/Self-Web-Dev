export default function Review({album,rating = 0, review,author}) {
  return (
    <div>
      <h3>{album} -- {author }</h3>
      <p>{review}</p>
      <p>{rating}</p>
    </div>
  )
}