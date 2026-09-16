import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
    // const [count, setCount] = useState(0);
    // // let val = 1;
    // let val = useRef(0);

    // let btnRef = useRef()

    // function handleClick() {
    //   // val = val+1;
    //   val.current = val.current + 1;
    //   console.log("Val is : ", val.current)
    //   setCount(count + 1);
    // }
    // function changeColor(){
    //   btnRef.current.style.backgroundColor = "Red";
    // }

    // useEffect(() => {
    //   console.log("I am render on every call");
    // });
    const [time, setTime] = useState(0);

    let timeRef = useRef(null);

    function startTime() {
        timeRef.current = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);
    }
    function stopTime() {
        clearInterval(timeRef.current);
        timeRef.current = null;
    }
    function resetTime() {
        stopTime();
        setTime(0);
    }

    return (
        <div>
            <div>
                <h1>Start : {time} seconds</h1>
                <button onClick={startTime}>Start</button>
            </div>
            <br />

            <div>
                <button onClick={stopTime}>Stop</button>
            </div>
            <br />

            <div>
                <button onClick={resetTime}>Reset</button>
            </div>

            {/* <h1>Count is {count}</h1>
      <button ref={btnRef} onClick={handleClick}>
        Increment
      </button>
    <br />
    <br />

      <div>
        <button onClick={changeColor}>Change BG button</button>
      </div>  */}
        </div>
    );
}

export default App;
