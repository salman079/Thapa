import React, { useRef, useState } from "react";
import CurrTime from "./CurrTime";
import UpdatedTime from "./UpdatedTime";
import DigitalTime from "./DigitalClock";
import Countdown from "./Countdown";
// import CountDown2 from "./CountDown2";
import CountDown3 from "./CountDown3";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BoostrapForm from "./Boostrap-form";

export default function App() {
  const [currentTime, setTime] = React.useState(
    new Date().toLocaleTimeString()
  );
  const UpdateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  return (
    <div>
    <h2 
    className="text-capitalize text-center mt-5"
    > Time </h2>
      {currentTime} <br />
      <button 
        className="btn btn-success btn-outline-danger"
        onClick={UpdateTime}>Get Time</button> <br />
      <CurrTime /> <br />
      <button
        className="btn btn-sucess"
        onClick={<UpdatedTime />}>Get Time</button> <br />
      <DigitalTime />
      <button 
        className="btn btn-primary btn-lg btn-block"
        >Testing Button</button> 
      <button 
        className="btn btn-outline-success"
        >Testing Button</button> 
      <Countdown />
      {/* <CountDown2 /> */}
      <CountDown3 />
      <BoostrapForm />


    </div>
  );
}