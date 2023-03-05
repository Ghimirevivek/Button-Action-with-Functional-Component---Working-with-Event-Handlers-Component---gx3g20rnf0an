import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const paragraph = ()=>{
    return(
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    )
  }
  return (
    <div id="main">
      // Do not alter the main div
    <button onClick={paragraph} id="click">Click</button
    </div>
  );
}


export default App;
