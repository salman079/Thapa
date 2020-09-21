import React, { useState } from "react";

const UpdatedTime = () => {
  const [curTime, setTim] = React.useState(new Date().toLocaleTimeString());
  setTim(new Date().toLocaleTimeString());
  return <div> {curTime} </div>;
};

export default UpdatedTime;
