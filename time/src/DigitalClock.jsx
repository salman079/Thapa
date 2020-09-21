import React from "react";

export default function DigitalTime() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  // function updateTime() {
  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  return (
    <>
      Digital Clock: {time}
      {setInterval(updateTime, 1000)};
    </>
  );
}
