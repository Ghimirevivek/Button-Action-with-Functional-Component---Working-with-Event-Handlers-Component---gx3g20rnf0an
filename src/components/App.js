import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const paragraph = ()=>{
    return(
      <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    )
  }
  return (
    <div id="main">
      // Do not alter the main div
    <button onClick={paragraph}>Click</button
    </div>
  );
}


export default App;
