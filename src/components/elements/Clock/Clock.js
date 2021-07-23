import { useEffect, useState } from "react";
import classes from "./Clock.module.css";

export default function Clock() {
  const [time, setTime] = useState(timeNow);

  function timeNow() {
    return new Date().toLocaleTimeString();
  }

  useEffect(() => setInterval(() => setTime(timeNow), 1000), []);

  return (
    <div className={classes.clock}>
      <p>
        Сегодня {new Date().toLocaleDateString()}, время сейчас{" "}
        <span>{time}</span>
      </p>
    </div>
  );
}
