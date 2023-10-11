import React, { useState } from "react";
import Btns from "./Btns";
import "./App.css";

function App() {
  const [displayOperation, setDisplayOperation] = useState("0");
  const [solve, setSolve] = useState("");
  const [equal, setEqual] = useState(false)

  return (
    <div className="container">
      <div className="container-display">
        <input className="solve" readOnly value={solve} />
        <input id="display" readOnly value={displayOperation} />
      </div>
      <div className="container-btns">
        <Btns
          setDisplayOperation={setDisplayOperation}
          setSolve={setSolve}
          displayOperation={displayOperation}
          solve={solve}
          equal={equal}
          setEqual={setEqual}
        />
      </div>
    </div>
  );
}

export default App;
