import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';
import { useState } from 'react';


//Step1 : create context
//step2 : wrap the components/child inside provider
//step3 : pass value
//step4 : consumer ke andr jakker consume krlo

const UserContext = createContext(); //createcontext

function App() {
  const [user, setUser] = useState({name:"Mudit"})  //pass value

  return(
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  )

}

export default App
// export default UserContext
export {UserContext}