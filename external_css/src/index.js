import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const name = "Salman contentEditable";

ReactDOM.render(
  [
    <h1 contentEditable="true" className="heading">
      {name}
    </h1>,
    <p> {`Current date is ${new Date().toLocaleDateString()}`} </p>,
    <p> {`Current time is ${new Date().toLocaleTimeString()}`} </p>,
    <div className="img_div">
      <img src="https://picsum.photos/100/300" />
      {/* <a href="http://expensetracker-salman079.surge.sh/"> */}
        <img src="https://picsum.photos/101/300" />
      {/* </a> */}
      <img src="https://picsum.photos/102/300" />
    </div>
  ],
  document.getElementById("root")
);
