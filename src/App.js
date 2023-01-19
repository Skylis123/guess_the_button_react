import { useState} from "react"
import StartGame from "./StartGame";

function App() {

const [numberOfButtons, setNumberOfButtons] = useState(0);

const handleNumberOfButtons = (event) => {
  setNumberOfButtons(event.target.value)
}


  return (
  <div className = "App">
    <input onChange = {handleNumberOfButtons}/>  
    <StartGame numberOfButtons = {numberOfButtons}/>
  
  </div>
  );
}

export default App;
