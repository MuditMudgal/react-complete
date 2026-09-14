import React, { useState } from 'react'
import "./Counter.css";

const Counter = () => {
    const[count, setCount] = useState(0)
  return (
    <div id='counter-container'>
      <p id='para'>You Clicked {count} counts</p>
      <button id='btn' onClick={()=>{setCount(count+1)}}>increment</button>
    </div>
  )
}

export default Counter