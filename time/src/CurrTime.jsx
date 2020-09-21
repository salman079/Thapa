import React from "react";

export default function CurrTime() {
  return (
    // ` Current time ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} : ${new Date().getMilliseconds()}`

    ` Current time ${new Date().toLocaleTimeString()} `
  );
}
