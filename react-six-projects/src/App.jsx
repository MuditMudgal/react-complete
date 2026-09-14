import { useState } from 'react'
import './App.css'
import Loginbtn from './components/Loginbtn'
import LoggedBtn from './components/LoggedBtn'

function App() {
  //if else
  //ternary operator
  //logical
  //early return

  // const[isloggedin, setisloggedin] = useState(true)
  const [isloggedin, setisloggedin] = useState(false);

  if(!isloggedin){
    return <Loginbtn/>
  }
  return(
    <div>
      {isloggedin && <LoggedBtn/>}
    </div>
  )

  // return (
  //   <div>
  //     {isloggedin ? <LoggedBtn /> : <Loginbtn />}
  //   </div>
  // );

  // if(isloggedin){
  //   return(
  //     <LoggedBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <Loginbtn/>
  //   )
  // }

}

export default App
