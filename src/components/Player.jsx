import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){
    const [ isEditing, setIsEditing ]= useState(false);
    const [ playerName, setPlayerName ]= useState(initialName);

    function handleOnClick()
    {
      setIsEditing((editing) => !editing);
      if(isEditing)
      {
        onChangeName(symbol, playerName)
      }
    }

    function handleOnChange(event){
      setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let buttonCaption = "Edit";
    if(isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleOnChange}/>;
        buttonCaption = "Save";
    }
    return (
        <li className={isActive ? 'active': undefined}>
          <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleOnClick}>{buttonCaption}</button>
      </li>
    );
}