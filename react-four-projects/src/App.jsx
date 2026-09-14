import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  
  function handleClick(){
    setCount(count+1)
  }

  return (
      <>
          <Button handleClick={handleClick}>
              <h1>{count}</h1>
          </Button>
          {/* <Cards name="mudit">
        <h1>Best Web Dev course</h1>
        <p>hello jee this is Mudit Mudgal</p>
        <p>Im learning and teaching Webdev</p>
      </Cards>
      <Cards children="main children">
        Hello mein ek children hoon
      </Cards> */}
      </>
  );
}

export default App
