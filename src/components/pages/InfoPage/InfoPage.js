import Clock from "../../elements/Clock/Clock";
import classes from "./InfoPage.module.css";

export default function InfoPage() {
  return (
    <section className={classes.contacts}>
      <h1 style={{ textAlign: "center" }}>Всякая полезная информация</h1>
      <Clock />
    </section>
  );
}
