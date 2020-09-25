import React, { createContext } from "react";
import Header from "../src/components/Header";
import Body, { Body2 } from "../src/components/Body";
import List from "../src/components/List";
import Defaulty, { non_default, abc, xyz } from "../src/components/Multiple";
import * as Haziri from "../src/components/Multiple2";
import "./styles.css";
import CompA from "./Context/CompA";
import CompX from "./UseContext/CompX";

const FirstName = createContext();
const LastName = createContext();

const FnName = createContext("Tooba");
const LnName = createContext("Abdullah");

export default function App() {
  return (
    <>
      <Header />
      <Body />
      <Body2 />
      <List />
      <ol>
        <li> New order list passing in App.js </li>
        <li> {Defaulty}</li>
        <li> {non_default}</li>
        <li> {abc()}</li>
        <li> {Body()} this is body funtion called from body.jsx</li>
        <li> {xyz()} This is the second function passed from Multiple.jsx </li>
        <li> {Body2()} </li>
      </ol>
      <Haziri.default />
      {Haziri.xyz1()} <br />
      {Haziri.pq} <hr />
      <h3>This is Context API using <i>Provider</i> and <i>Consumer</i></h3>
      <FirstName.Provider value={"Salman"}>
        <LastName.Provider value={"Siddiqui"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
      <hr />
      <h3>This is Context API using <i>UseContext</i></h3>
          <CompX />
    </>
  );
}
export { FirstName, LastName, FnName, LnName };
