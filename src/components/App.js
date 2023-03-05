import React, {Component, useState} from "react";
import "./../styles/App.css";
import {useState} from "react"
function App() {
  const [initial,setInitial] = useState(false)
  return (
    <div id="main">
      // Do not alter the main div
    {initial?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : <button id="click">Click</button>}
    </div>
  );
}


export default App;
