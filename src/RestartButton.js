import React from 'react'

export default function RestartButton(props) {
    const restartGame = () => {
        props.setNumberOfButtons(0);
        props.setButtonsList([]);
    } 

    return (
        <div>
            <button onClick = {restartGame}> Restart </button>
        </div>
    )
}
