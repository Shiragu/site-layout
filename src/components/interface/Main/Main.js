import AboutPage from "../../pages/AboutPage/AboutPage";
import HomePage from "../../pages/HomePage/HomePage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import classes from "./Main.module.css";
import { Switch, Route } from "react-router-dom";

export default function Main() {
  return (
    <main className={classes.main}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
    </main>
  );
}
