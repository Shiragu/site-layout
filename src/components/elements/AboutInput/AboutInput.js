import { useEffect, useRef, useState } from "react";
import classes from "./AboutInput.module.css";

export default function AboutInput() {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  const focus = () => inputRef.current.focus();

  useEffect(() => {
    prevValue.current = value;
    renderCount.current++;
  }, [value]);

  return (
    <div className={classes["about-input"]}>
      <h2>Изменяемая кнопка на хуках</h2>
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder="smth"
        onChange={(e) => setValue(e.target.value)}
      />
      <div>Предыдущее состояние: {prevValue.current}</div>
      <div>Всего изменений: {renderCount.current}</div>
      <button onClick={focus}>{value}</button>
    </div>
  );
}
