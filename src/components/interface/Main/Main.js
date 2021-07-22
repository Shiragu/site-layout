import UsersPage from "../../pages/UsersPage/UsersPage";
import HomePage from "../../pages/HomePage/HomePage";
import InfoPage from "../../pages/InfoPage/InfoPage";
import classes from "./Main.module.css";
import { Switch, Route } from "react-router-dom";

export default function Main() {
  return (
    <main className={classes.main}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/info" component={InfoPage} />
      </Switch>
    </main>
  );
}
