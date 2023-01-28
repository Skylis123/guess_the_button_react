import React from 'react'
import { useState} from "react"

export default function Button(props) {
  
  const [buttonImage, setButtonImage] = useState(<img src= {require("./images/normal.PNG")} className = "buttonsImg" alt = "" />)


  function checkWinner(e) {
    const aux_id = e.currentTarget.id;
    const aux_button_sad = <img src= {require("./images/sad.PNG")} className = "buttonsImg" alt = "" />
    const aux_button_happy = <img src= {require("./images/happy.PNG")} className = "buttonsImg" alt = "" />                  
    aux_id == props.winnerButtonPosition ? setButtonImage(aux_button_happy) : setButtonImage(aux_button_sad);
    
  }

  return (
    <>
      <button id = {props.id} type = "button" className= "createdButtons" onClick = {checkWinner}>
        {buttonImage} 
      </button>
    </>
  )
}
