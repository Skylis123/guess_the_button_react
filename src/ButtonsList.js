import React from 'react'
import Button from "./Button"

export default function ButtonsList(props) {
    const handleNumberOfButtons = (event) => {
        props.setNumberOfButtons(event.target.value)
    }

    const newButtons = [];
    const addButtonToList = () => {
        const winnerButtonPosition = Math.floor(Math.random() * props.numberOfButtons);
        for (let i = 0; i < props.numberOfButtons; ++i) {
            const aux_id = i;
            newButtons[i] = <Button id = {aux_id} winnerButtonPosition = {winnerButtonPosition} />
        }
        props.setButtonsList(newButtons)
    }




  return (
    <div>
      <input onChange = {handleNumberOfButtons}/>
      <div>
        <button onClick = {addButtonToList}> Start </button>
      </div>
      <div className='try'>
        {props.buttonsList.map((buttonsList, key) => {
            return <label key = {key}> {buttonsList} </label>
        })}
      </div>
    </div>
  )
}
