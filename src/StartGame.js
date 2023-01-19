import React, {useState} from 'react'
import "./buttonsImg.css"



export default function StartGame(props) {
    const [buttons, setButtons] = useState([]);
    const winnerButtonPosition = Math.floor(Math.random() * props.numberOfButtons) ;
    //console.log(winnerButtonPosition);

    function createButtons() {
         for (let i = 0; i < props.numberOfButtons; ++i) {
             setButtons(buttons => [...buttons, <button id = {i} type = "button" className= "createdButtons" onClick = {(e) => checkWinner(e)} >
              <img src= {require("./images/normal.PNG")} className = "buttonsImg" alt = "" /> 
            </button>
            ]);
         }
         console.log("1.Buttons array size: " + buttons.length);
    }
    

    function checkWinner(e) {
      //console.log(e.currentTarget.id);
      const aux_id = e.currentTarget.id;
      //console.log(winnerButtonPosition);
      const aux_button_sad = <button id = {e.currentTarget.id} type = "button" className= "createdButtons">
                          <img src= {require("./images/sad.PNG")} className = "buttonsImg" alt = "" />
                        </button>
      const aux_button_happy = <button id = {e.currentTarget.id} type = "button" className= "createdButtons">
                          <img src= {require("./images/happy.PNG")} className = "buttonsImg" alt = "" />
                        </button>
                
                

      console.log("2.Buttons array size: " + buttons.length);          
      const new_buttons = [...buttons];
      new_buttons[aux_id] = aux_button_sad;
      setButtons(new_buttons);
      
      console.log("3.Buttons array size: " + buttons.length);
      
      

    }

  return (  
    <div>
      <button className = "start_game_button" onClick = {createButtons}>
        Start Game
      </button>
       <div className='try'>
        {buttons.map((buttonsList, key) => {
            return <label key = {key}> {buttonsList} </label>
        })}
      </div> 
        {buttons.length}
    </div>
  )
}
