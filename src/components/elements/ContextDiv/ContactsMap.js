import { useCard } from "./CardContext";
import classes from "./ContactsCard.module.css";

export default function ContactsCard() {
  const cardMap = useCard();

  if (!cardMap.visible) return null;

  return (
    <div className={classes["contacts-map"]} onClick={cardMap.toggle}>
      Тут типа большая карта
    </div>
  );
}
