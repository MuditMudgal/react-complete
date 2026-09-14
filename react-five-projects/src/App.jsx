import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'

function App() {
  //create
  //manage
  //modified

  const [name, setName] = useState("")

  return (
    <div>
      <Cards title="Card1" name={name} setName={setName} />
      <Cards title="Card2"name={name} setName={setName} />
      {/* <p>I am inside in Parent component : <strong>{name}</strong></p> */}
    </div>
  );
}

export default App
