import { useState} from "react"
import ButtonsList from "./ButtonsList"
import RestartButton from "./RestartButton";

function App() {

const [numberOfButtons, setNumberOfButtons] = useState(0);
const [buttonsList, setButtonsList] = useState([]);


  return (
  <div className = "App">
    <ButtonsList 
      numberOfButtons = {numberOfButtons} 
      setNumberOfButtons = {setNumberOfButtons} 
      buttonsList = {buttonsList} 
      setButtonsList = {setButtonsList}
    />
    <div>
      <RestartButton 
        numberOfButtons = {numberOfButtons} 
        setNumberOfButtons = {setNumberOfButtons} 
        buttonsList = {buttonsList} 
        setButtonsList = {setButtonsList}
      />  
    </div>   
  </div>
  );
}

export default App;
