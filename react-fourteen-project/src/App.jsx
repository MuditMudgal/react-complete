import './App.css'
import { useCallback, useState } from 'react';
// import ChildComponents from './components/ChildComponents';
import Child from './components/Child';

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //expensive function
  function expensiveTask(){
    console.log("Expensive task is running ...")
    for (let i = 0; i < 1000000000; i++) {}
    return "Task Completed"
  }
  // function handleClick(){
  //   setCount(count+1)
  // }
  const handleClick = useCallback(() => {
      setCount(count + 1);
  }, [])


  return (
    <div>
      <h1>Count : {count}</h1>
      <input 
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      placeholder='Type Your Name' />

      <br /><br />
      <button onClick={handleClick}>Increment</button>
      <br /><br />

      <Child
      handleClick={handleClick}
      expensiveTask={expensiveTask}
      />
      
    </div>
  )












  // const [count, setCount] = useState(0)
  
  // function handleClick(){
  //   setCount(count+1)
  // }

  // const handleClick = ()=>{
  //   setCount(count+1);
  // }

  // const handleClick = useCallback(() => {
  //   setCount(count + 1);
  // }, [count])

  // return (
  //     <div>
  //         <div>
  //             Count : {count}
  //         </div>
  //         <div>
  //             <button 
  //             onClick={handleClick}>
  //               Increment
  //             </button>
  //         </div>
  //         <br /><br />

  //         <div>
          
  //           <ChildComponents 
  //           handleClick={handleClick} 
  //           ButtonName="ClickMe"
  //           />

  //         </div>
  //     </div>
  // );
}

export default App
