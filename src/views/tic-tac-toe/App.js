import React from "react";
import { useState } from "react";
import "../../styles/square.scss";
export default function App() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  let [value, setValue] = useState(null);
  function handleClick() {
    console.log("you clicked button");
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
