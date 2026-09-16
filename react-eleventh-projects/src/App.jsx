import './App.css'
import { useForm } from "react-hook-form";



function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  return(
    <form action="">
      <div>
      <label>First Name : </label>
      <input/>
    </div>
    <br />
    <div>
      <label>Middle Name : </label>
      <input/>
    </div>
    <br />
    <div>
      <label>Last Name : </label>
      <input/>
    </div>
    </form>
  )
}

export default App
