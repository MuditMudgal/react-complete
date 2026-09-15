import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0);

    //vaiation5 with cleanup function
    function handleCLick() {
        setCount(count + 1);
    }
    useEffect(() => {
        alert("I am running first time");

        return () => {
            alert("I am getting removed from UI");
        };
    }, [count]);

    return (
        <div>
            <h1>
                <strong>Count is {count}</strong>
            </h1>
            <button onClick={handleCLick}>Count</button>
        </div>
    );

    //first-> side-Effect function
    //second->cleanUp function
    //third->dep. list array

    //variation 1 runs on every render
    // useEffect(() => {
    //   alert("Hello jee")
    // })

    //variation 2 it will run only on first render
    // useEffect(() => {
    //   alert("im first")
    // }, [])
    
    //variation 3 runs on specific render
    // useEffect(() => {
    //   alert("main hoon Gian")

    // }, [count])

    // return(
    //   // <div>
    //   //   <button onClick={handleCLick}>Count</button>
    //   //   <button>hello jee</button>
    //   // </div>
    // )

    //variation 4->multiple dependcies [count, total]
}

export default App
