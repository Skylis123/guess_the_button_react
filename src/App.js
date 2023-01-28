import { useState} from "react"
import ButtonsList from "./ButtonsList"

function App() {

const [numberOfButtons, setNumberOfButtons] = useState(0);
const [buttonsList, setButtonsList] = useState([]);

  return (
  <div className = "App">
    <ButtonsList numberOfButtons = {numberOfButtons} setNumberOfButtons = {setNumberOfButtons} buttonsList = {buttonsList} setButtonsList = {setButtonsList}/>
  </div>
  );
}

export default App;
