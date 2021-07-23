import React, { useEffect, useState } from "react";
import Button from "../../hoc/Button/Button";

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

  return (
    <div>
      <h1>Счётчик: {counter}</h1>
      <p>{message}</p>
      <Button className="btn primary-btn" onClick={() => add()}>
        Добавить
      </Button>
      <Button className="btn danger-btn" onClick={() => remove()}>
        Убрать
      </Button>
      <Button className="btn primary-btn" onClick={() => addValue()}>
        + множитель
      </Button>
      <Button className="btn danger-btn" onClick={() => removeValue()}>
        - множитель
      </Button>
    </div>
  );
}

export default Counter;
