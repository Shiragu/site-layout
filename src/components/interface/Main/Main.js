import About from "../../navigation/About/About";
import Home from "../../navigation/Home/Home";
import Contacts from "../../navigation/Contacts/Contacts";
import classes from "./Main.module.css";
import { Switch, Route } from "react-router-dom";

export default function Main() {
  return (
    <main className={classes.main}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </main>
  );
}
