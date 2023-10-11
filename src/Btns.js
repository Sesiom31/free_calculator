import React from "react";
import { data } from "./data";

function Btns({
  setDisplayOperation,
  displayOperation,
  setSolve,
  equal,
  setEqual,
}) {
  const handleClick = (value) => {
    if (value === "AC") {
      setEqual(false);
      setDisplayOperation("0");
      setSolve("");
    } else if ("0123456789".includes(value)) {
      setEqual(false);
      if (equal) {
        setDisplayOperation(value);
        setSolve(eval(value));
      } else if (displayOperation === "0") {
        setSolve(eval(value));
        setDisplayOperation(value);
      } else if (/[+\-*/]0$/.test(displayOperation)) {
        setDisplayOperation(displayOperation.slice(0, -1) + value);
        setSolve(eval(displayOperation.slice(0, -1) + value));
      } else {
        setDisplayOperation((prevValue) => prevValue + value);
        setSolve(eval(displayOperation + value));
      }
    } else if (value === ".") {
      setEqual(false);
      if (equal) {
        setDisplayOperation("0" + value);
      } else if (/\d+\.\d*?$/.test(displayOperation)) {
        setDisplayOperation(displayOperation);
      } else {
        setDisplayOperation((prevValue) => prevValue + value);
      }
    } else if ("+*/".includes(value)) {
      setEqual(false);
      if (equal) {
        setDisplayOperation((prevValue) => prevValue + value);
      } else if (/[+\-*/]-$/.test(displayOperation)) {
        setDisplayOperation(displayOperation.slice(0, -2) + value);
      } else if (/[+\-*/]$/.test(displayOperation)) {
        setDisplayOperation(displayOperation.slice(0, -1) + value);
      } else {
        setDisplayOperation((prevValue) => prevValue + value);
      }
    } else if (value === "-") {
      setEqual(false);
      if (equal) {
        setDisplayOperation((prevValue) => prevValue + value);
      } else if (/-$/.test(displayOperation)) {
        return;
      } else {
        setDisplayOperation((prevValue) => prevValue + value);
      }
    } else if (value === "=") {
      try {
        setSolve("");
        setEqual(true);
        const rpta = eval(displayOperation);
        setDisplayOperation(rpta);
      } catch (err) {
        setSolve("Error de sintaxis");
      }
    }
  };

  let btns = data.map((btn) => {
    return (
      <button
        key={btn.ident}
        className="btn"
        id={btn.id}
        onClick={() => handleClick(btn.value)}
      >
        {btn.value}
      </button>
    );
  });

  return <>{btns}</>;
}

export default Btns;
