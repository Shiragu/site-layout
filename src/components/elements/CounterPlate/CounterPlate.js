import Counter from "../Counter/Counter";
import classes from "./CounterPlate.module.css";

export default function CounterPlate() {
  return (
    <section className={classes["counter-home"]}>
      <div className={classes.argument}>Счётчик на хуках</div>
      <Counter />
      <div className={classes["argument-text"]}>
        Кнопки + и - устанавливают множитель, на который будет измененно число
        счётчика, кнопки добавить и убрать соответственно увеличивают или
        уменьшают число на установленный множитель.
      </div>
    </section>
  );
}
