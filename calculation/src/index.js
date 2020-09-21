import React from "react";
import ReactDOM from "react-dom";
import Add from '../src/functions/Add';
import Div from "../src/functions/Div";
import Sub from "../src/functions/Sub";
import Mult from "../src/functions/Mult";
 
ReactDOM.render(
  <>
    <p> Calculation </p>
    <ul>
      <li> Sum of two numbers {Add(20, 40)} </li>
      <li> Sub of two numbers {Sub(120, 40)} </li>
      <li> Div of two numbers {Div(200, 3)} </li>
      <li> Mult of two numbers {Mult(20, 40)} </li>
    </ul>
  </>,
  document.getElementById("root")
);
