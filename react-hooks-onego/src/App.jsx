import { useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState("")

  return (
      <div>
          <input
              type="text"
              placeholder="Enter some text"
              onChange={(e) => {
                  setText(e.target.value);
              }}
          />
          <p>
              You Typed : <strong>{text}</strong>
          </p>
      </div>
  );
}

export default App




// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count , setCount] = useState(0)
//   return (
//     <div>
//       <p>Your current count is {count}</p>
//       <button onClick={()=>{setCount(count+1)}}>Increment</button>
//     </div>
//   )
// }

// export default App
