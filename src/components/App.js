
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [value,setValue] = useState("");
  function tabSetting(e){
    setValue(e.target.innerText);
  }
  return (
    <div>
      <ul>
        <li onClick={tabSetting}>Tab 1</li>
        <li onClick={tabSetting}>Tab 2</li>
        <li onClick={tabSetting}>Tab 3</li>
      </ul>
      This is the content for {value}
    </div>
  )
}

export default App
