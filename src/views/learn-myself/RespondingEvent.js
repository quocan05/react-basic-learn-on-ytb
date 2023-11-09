import React from "react";
import { useState } from "react";
function RespondingEvent({ count, onClick }) {
  return (
    <>
      <ButtonClick count={count} onClick={onClick}></ButtonClick>
      <ButtonClick count={count} onClick={onClick}></ButtonClick>
    </>
  );
}

function ButtonClick({ count, onClick }) {
  return <button onClick={onClick}>Click {count} times</button>;
}

export default RespondingEvent;
