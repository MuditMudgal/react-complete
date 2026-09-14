
import './App.css'
import Usercards from './components/Usercards'
import muditme from "./assets/muditme.png"
import secondme from "./assets/secondme.avif"
import thirdme from "./assets/thirdme.jpg";

function App() {

  return (
      <>
          <Usercards name="Mudit" image={muditme} desc="dkjenf" style={{"border-radius": "10px"}} />
          <Usercards name="Sunidhi" image={secondme} desc="mndf,mdel" />
          <Usercards name="Chunnu" image={thirdme} desc="kdsnnldslk" />
      </>
  );
}

export default App
