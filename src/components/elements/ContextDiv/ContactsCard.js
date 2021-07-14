import { useCard } from "./CardContext";
import classes from "./ContactsCard.module.css";

export default function ContactsCard() {
  const { toggle } = useCard();
  return (
    <div className={classes["contacts-card"]}>
      <p>Наша почта: mail@mail.ru</p>
      <p>Наш телефон: +7 999 999-99-99</p>
      <button onClick={toggle}>Показать карту</button>
    </div>
  );
}
