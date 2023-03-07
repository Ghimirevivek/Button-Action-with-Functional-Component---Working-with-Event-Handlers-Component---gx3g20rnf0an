import React, {Component, useState} from "react";
import "./../styles/App.css";
function App() {
  const [initial,setInitial] = useState(false)
  return (
    <div id="main">
    {initial?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : (null)}
    <button id="click" onClick={()=>setInitial(true)}>Click me</button>
    </div>
  );
}


export default App;
