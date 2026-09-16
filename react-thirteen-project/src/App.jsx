import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0);

  function expensiveTask(num){
    console.log("This runs Initially")
    for(let i=0;i<1000000000;i++){}
    for(let i=0;i<1000000000;i++){}
    return num*2;
  }
  let doubleAns = useMemo(() => expensiveTask(input), [input]);
  
  

  return (
    <div>
      <p><strong>Count : {count}</strong></p>
      <button onClick={()=>{setCount(count+1)}}>
        Increment
      </button>
      <br /><br />

      <input type="Number" placeholder='Enter Number' onChange={(e)=>setInput(e.target.value)} value={input} />


      <div>
        Double : {doubleAns}
      </div>
    </div>

  )
}

export default App
