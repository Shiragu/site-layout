import { CardProvider } from "../../elements/ContextDiv/CardContext";
import ContactsCard from "../../elements/ContextDiv/ContactsCard";
import ContactsMap from "../../elements/ContextDiv/ContactsMap";
import classes from "./InfoPage.module.css";

export default function InfoPage() {
  return (
    <CardProvider>
      <section className={classes.contacts}>
        <div className={classes["contacts-wrapper"]}>
          <ContactsMap />
          <ContactsCard />
        </div>
      </section>
    </CardProvider>
  );
}
