import React, { useState } from "react";
import CurrTime from "./CurrTime";
import UpdatedTime from "./UpdatedTime";
import DigitalTime from "./DigitalClock";

export default function App() {
  const [currentTime, setTime] = React.useState(
    new Date().toLocaleTimeString()
  );
  const UpdateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  return (
    <div>
      {currentTime} <br />
      <button onClick={UpdateTime}>Get Time</button> <br />
      <CurrTime /> <br />
      <button onClick={<UpdatedTime />}>Get Time</button> <br />
      <DigitalTime />
    </div>
  );
}