import { useState } from "react";

export default function Player({name, symbol}){
    const [ isEditing, setIsEditing ]= useState(false);
    function handleOnClick()
    {
      setIsEditing(!isEditing);
    }
    let playerName = <span className="player-name">{name}</span>;
    let buttonCaption = "Edit";
    if(isEditing) {
        playerName = <input type="text"/>;
        buttonCaption = "Save";
    }
    return (
        <li>
          <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleOnClick}>{buttonCaption}</button>
      </li>
    );
}