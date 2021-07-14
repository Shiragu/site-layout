import React, { useEffect, useState } from "react";
import classes from "./Counter.module.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(0);

  useEffect(() => {
    setMessage(`Число изменится на ${value}`);
  }, [value]);

  function add() {
    setCounter((prev) => prev + value);
  }

  function remove() {
    setCounter((prev) => prev - value);
  }

  function addValue() {
    setValue((prev) => prev + 1);
  }

  function removeValue() {
    setValue((prev) => prev - 1);
  }

  const addClasses = [classes.btn, classes.add];
  const removeClasses = [classes.btn, classes.remove];

  return (
    <div>
      <h1>Счётчик: {counter}</h1>
      <p>{message}</p>
      <button onClick={() => add()} className={addClasses.join(" ")}>
        Добавить
      </button>
      <button onClick={() => remove()} className={removeClasses.join(" ")}>
        Убрать
      </button>
      <button onClick={() => addValue()} className={addClasses.join(" ")}>
        +
      </button>
      <button onClick={() => removeValue()} className={removeClasses.join(" ")}>
        -
      </button>
    </div>
  );
}

export default Counter;
