import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// .heading {
//   color: #fa9191;
//   text-align: center;
//   text-transform: capitalize;
//   font-weight: bold;
//   text-shadow: 0px 2px 4px #ffe9c5;
//   margin: 15px 0;
//   font-family: "Times New Roman", Times, serif;
//   }

const name = "Tooba Abdullah Salman";
const heading = {
  color: "#fa9191",
  textTransform: "capitalize",
  textAlign: "center",
  textTransform: "capitalize",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9c5",
  backgroundColor: 'black'

};

ReactDOM.render(
  [
    <h1 style={heading}>{name}</h1>,
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
