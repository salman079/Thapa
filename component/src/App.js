import React from "react";
import Header from "../src/components/Header";
import Body, { Body2 } from "../src/components/Body";
import List from "../src/components/List";
import Defaulty, { non_default, abc, xyz } from "../src/components/Multiple";
import * as Haziri from "../src/components/Multiple2";
import "./styles.css";

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
    </>
  );
}