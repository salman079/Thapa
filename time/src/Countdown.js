import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};
export default function Countdown() {
    return (
      <div className="App">
        <h1>
          CountdownCircleTimer
          <br />
          React Component
        </h1>
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        <p className="info">
          Change component properties in the code filed on the right to try
          difference functionalities
        </p>
      </div>
    );
  }