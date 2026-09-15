import './App.css'

function App() {
  function sayhello(){
    console.log("Hello Mudit")
  }

  function handleClick(){
    alert("Im Clicked by You")
  }

  function handleHover(){
    alert("You are hovering over this para")
  }
  // function submitted(){
  //   alert("Form is getting submited")
  // }
  function handleChange(e){
    console.log(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log("Form submitted")
  }
  
  return (
    <div>
      
    </div>
      // <div>
      //   <button onClick={alert("Hello jee")}>  //immediate invokation func
      //     CLick Me
      //   </button>
      // </div>

      // <div>
      //     <form onSubmit={handleSubmit}>
      //         <input type="text" onChange={handleChange}/>
      //         <button>Submit</button>
      //     </form>
      // </div>
      // <div>
      //   <button onClick={sayhello}><strong>Click Me</strong></button>
      // </div>

      // <div>

      //   <p onMouseOver={handleHover}>I am Paragraph</p>

      //   <button onClick={handleClick}>
      //     Click me
      //   </button>
      // </div>
  )
}

export default App
