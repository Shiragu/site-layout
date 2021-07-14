import { useEffect, useMemo, useState } from "react";
import classes from "./ComplexDiv.module.css";

function complexCompute(number) {
  let i = 0;
  while (i < 10000000) i++;
  return number * 2;
}

export default function ComplexDiv() {
  const [value, setValue] = useState(0);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexCompute(value);
  }, [value]);

  useEffect(() => {
    console.log("effect");
  }, [styles]);

  return (
    <div className={classes.hooks}>
      <h2 style={styles}>Сложный счётчик на хуках</h2>
      <div>Текущее значение: {computed}</div>
      <button onClick={() => setValue((prev) => prev + 1)}>Плюс</button>
      <button onClick={() => setValue((prev) => prev - 1)}>Минус</button>
      <button onClick={() => setColored((prev) => !prev)}>
        Изменить цвет заголовка
      </button>
    </div>
  );
}
