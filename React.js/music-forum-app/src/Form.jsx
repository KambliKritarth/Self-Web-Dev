import './Form.css'
export default function Form(onSubmit) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input class = "reviewling" placeholder = "Author" type="text" onChange={(e) => console.log(e.target.value)} />
      <input class = "reviewling" placeholder="Rating" type="number" onChange={(e) => console.log(e.target.value)} />
      <input class = "reviewling" placeholder="Review" type="text" onChange={(e) => console.log(e.target.value)} />
      <input class = "reviewling" placeholder = "Album" type="text" onChange={(e) => console.log(e.target.value)} />
      <button type = "submit">Submit</button>
    </form>
  );
}